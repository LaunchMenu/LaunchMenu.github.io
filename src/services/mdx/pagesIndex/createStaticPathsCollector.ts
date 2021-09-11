import {promises as FS} from "fs";
import Path from "path";
import {getPagesDir} from "./getPagesDir";

/**
 * Creates the function that obtains all the static paths
 * @param dir The directory path relative to the src/pages directory (or remoteFiles)
 * @param remote Whether to obtain the files from the remote directory
 * @returns The function to obtain all the paths
 */
export function createStaticPathsCollector(dir: string, remote?: boolean) {
    return async () => {
        const paths = await getFiles(getPagesDir(dir, remote));
        return {
            paths: paths.map(id => ({params: {id}})),
            fallback: false,
        };
    };
}

async function getFiles(
    dir: string,
    urlPath: string[] = []
): Promise<string[][]> {
    const files = await FS.readdir(dir);
    return (
        await Promise.all(
            files.map(async fileName => {
                const file = Path.join(dir, fileName);
                const cleanedFileName = cleanupPath(fileName);
                const stat = await FS.lstat(file);
                if (stat.isDirectory())
                    return getFiles(file, [...urlPath, cleanedFileName]);
                else if (Path.extname(fileName) == ".mdx") {
                    if (fileName == "index.mdx") return [[...urlPath]];
                    return [[...urlPath, cleanedFileName]];
                } else return [];
            })
        )
    ).flat();
}

export function cleanupPath(path: string, lowerCase: boolean = true): string {
    const cleaned =
        Path.parse(path)
            .name.match(/^(\d+\-)?(.*)$/)?.[2]
            ?.replace(/ /g, "-") ?? "";
    return lowerCase ? cleaned.toLowerCase() : cleaned;
}
