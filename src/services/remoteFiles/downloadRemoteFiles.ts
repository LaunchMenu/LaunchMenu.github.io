import {https} from "follow-redirects";
import FS, {promises as FSP} from "fs";
import FSE from "fs-extra";
import Path from "path";
import JSZip, {JSZipObject} from "jszip";

const branch = "master";

const localPath = Path.join(process.cwd(), "tempRemoteFiles");
const zipPath = Path.join(localPath, "LMRepo.zip");

/**
 * Downloads the remotes files from the master branch
 */
export async function downloadRemoteFiles(): Promise<void> {
    // Download the zip
    console.log("Downloading remote docs");
    await FSP.rmdir(localPath, {recursive: true});
    await FSP.mkdir(localPath);

    const file = FS.createWriteStream(zipPath);
    await new Promise((res, rej) => {
        https
            .request(
                `https://github.com/LaunchMenu/LaunchMenu/archive/refs/heads/${branch}.zip`,
                response =>
                    response.pipe(file).on("close", res).on("error", rej)
            )
            .end();
    });

    // Copy docs contents of zip
    console.log("Unzipping remote docs");
    const zip = await JSZip.loadAsync(await FSP.readFile(zipPath));
    const repoDocsPath = `LaunchMenu-${branch.replace(
        /\//g,
        "-"
    )}/docs/website`;
    const docsFolder = zip.folder(repoDocsPath);
    if (!docsFolder)
        throw new Error("No docs/website folder was found in the repository");

    const files: {relativePath: string; file: JSZipObject}[] = [];
    docsFolder.forEach((relativePath, file) =>
        files.push({relativePath, file})
    );

    await Promise.all(
        files.map(async ({relativePath, file}) => {
            if (file.dir) return;

            await FSP.mkdir(Path.join(localPath, Path.dirname(relativePath)), {
                recursive: true,
            });
            await new Promise(res =>
                file
                    .nodeStream()
                    .pipe(
                        FS.createWriteStream(Path.join(localPath, relativePath))
                    )
                    .on("close", res)
            );
        })
    );
}

/**
 * Copies the remote resource to the output
 */
export async function copyResourcesToOutput() {
    await FSE.copy(
        Path.join(localPath, "resources"),
        Path.join(process.cwd(), "docs")
    );
}
