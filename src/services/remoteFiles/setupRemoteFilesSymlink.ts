import Path from "path";
import {promises as FS} from "fs";
import readline from "readline";
import symlink from "symlink-dir";

/**
 * Sets up the symlink to a local version of the docs
 */
export async function setupRemoteFilesSymlink(): Promise<void> {
    const remoteFilesPathConfigFile = Path.join(
        process.cwd(),
        ".localRemoteFilesPath"
    );
    const tempRemoteFilesPath = Path.join(process.cwd(), "tempRemoteFiles");

    async function promptPath(): Promise<string> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const localPath = await new Promise<string>(resolve => {
            rl.question(
                "Please specify the absolute path to the root of your local instance of the LaunchMenu repository: ",
                path => {
                    resolve(path);
                    rl.close();
                }
            );
        });

        await FS.writeFile(remoteFilesPathConfigFile, localPath, "utf-8");

        return localPath;
    }

    // Obtain the path to the local dir
    let localPath: string;
    try {
        localPath = await FS.readFile(remoteFilesPathConfigFile, "utf-8");
    } catch (e) {
        localPath = await promptPath();
    }

    // Keep asking for the path as long as it can't be found
    let docsPath: string;
    while (true) {
        try {
            FS.access(localPath);
        } catch (e) {
            console.log(
                `The specified path to the LaunchMenu repo (${localPath}) does not exist, please specify a new path`
            );
            localPath = await promptPath();
            continue;
        }

        try {
            docsPath = Path.join(localPath, "docs", "website");
            FS.access(docsPath);
        } catch (e) {
            console.log(
                `The specified path to the LaunchMenu repo (${localPath}) does not contain the website docs, please specify a new path`
            );
            localPath = await promptPath();
            continue;
        }

        break;
    }

    // Create the symlink to the directory
    try {
        await FS.access(tempRemoteFilesPath);
        const data = await FS.lstat(tempRemoteFilesPath);
        const isLink = data.isSymbolicLink();
        if (isLink && (await FS.readlink(tempRemoteFilesPath)) == docsPath)
            return;
    } catch (e) {}

    await FS.rmdir(tempRemoteFilesPath, {recursive: true});
    await symlink(docsPath, tempRemoteFilesPath);
}
