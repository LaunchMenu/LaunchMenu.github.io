import {https} from "follow-redirects";
import FS, {promises as FSP} from "fs";
import FSE from "fs-extra";
import Path from "path";
import JSZip, {JSZipObject} from "jszip";

/** The remote LM branch to get doc/examples from */
export const remoteBranch = "master";

const localDocsPath = Path.join(process.cwd(), "tempRemoteDocs");
const localExamplesPath = Path.join(process.cwd(), "tempRemoteExamples");
const zipPath = Path.join(localDocsPath, "LMRepo.zip");

async function copyZipDir(zip: JSZip, source: string, target: string) {
    const repoPath = `LaunchMenu-${remoteBranch.replace(/\//g, "-")}/${source}`;
    const folder = zip.folder(repoPath);
    if (!folder)
        throw new Error(`No "${source}" folder was found in the repository`);

    const files: {relativePath: string; file: JSZipObject}[] = [];
    folder.forEach((relativePath, file) => files.push({relativePath, file}));

    await Promise.all(
        files.map(async ({relativePath, file}) => {
            if (file.dir) return;

            await FSP.mkdir(Path.join(target, Path.dirname(relativePath)), {
                recursive: true,
            });
            await new Promise(res =>
                file
                    .nodeStream()
                    .pipe(FS.createWriteStream(Path.join(target, relativePath)))
                    .on("close", res)
            );
        })
    );
}

/**
 * Downloads the remotes files from the master branch
 */
export async function downloadRemoteFiles(): Promise<void> {
    // Download the zip
    console.log("Downloading remote docs/examples");
    await FSP.rmdir(localDocsPath, {recursive: true});
    await FSP.rmdir(localExamplesPath, {recursive: true});
    await FSP.mkdir(localDocsPath);
    await FSP.mkdir(localExamplesPath);

    const file = FS.createWriteStream(zipPath);
    await new Promise((res, rej) => {
        https
            .request(
                `https://github.com/LaunchMenu/LaunchMenu/archive/refs/heads/${remoteBranch}.zip`,
                response =>
                    response.pipe(file).on("close", res).on("error", rej)
            )
            .end();
    });

    // Copy docs contents of zip
    console.log("Unzipping remote docs");
    const zip = await JSZip.loadAsync(await FSP.readFile(zipPath));
    await copyZipDir(zip, `docs/website`, localDocsPath);

    //Copy examples contents of zip
    console.log("Unzipping remote examples");
    await copyZipDir(zip, `examples`, localExamplesPath);
}

/**
 * Copies the remote resource to the output
 */
export async function copyResourcesToOutput() {
    await FSE.copy(
        Path.join(localDocsPath, "resources"),
        Path.join(process.cwd(), "docs")
    );
}
