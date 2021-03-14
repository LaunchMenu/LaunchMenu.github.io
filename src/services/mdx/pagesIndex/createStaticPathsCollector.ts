import {promises as FS} from "fs";
import Path from "path";
import {getPagesDir} from "./getPagesDir";

export function createStaticPathsCollector(dir: string) {
    return async () => {
        const paths = await getFiles(getPagesDir(dir));
        const unprefixedPaths = paths.map(path =>
            path.map(node => cleanupPath(node))
        );

        return {
            paths: unprefixedPaths.map(path => ({params: {id: path}})),
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
                const stat = await FS.lstat(file);
                if (stat.isDirectory())
                    return getFiles(file, [...urlPath, fileName]);
                else if (Path.extname(fileName) == ".mdx") {
                    if (fileName == "index.mdx") return [urlPath];
                    return [[...urlPath, fileName]];
                } else return [];
            })
        )
    ).flat();
}

export function cleanupPath(path: string): string {
    return (
        Path.parse(path)
            .name.match(/^(\d+\-)?(.*)$/)?.[2]
            ?.replace(/ /g, "-") ?? ""
    );
}
