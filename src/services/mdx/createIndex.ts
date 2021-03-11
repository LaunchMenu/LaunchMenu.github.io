import {promises as FS} from "fs";
import Path from "path";
import {INavItem} from "../../components/sideIndex/NavItem";
import {IIndex} from "../../components/sideIndex/Sidebar";
import {cleanupPath} from "./createStaticPathsCollector";
import {getPagesDir} from "./getPagesDir";

export async function createIndex(
    dir: string,
    selected: string[] = []
): Promise<IIndex> {
    const item = await createNavItem(getPagesDir(dir));

    if (item && "children" in item && item.children) {
        // Make the specified path selected
        let p: INavItem | undefined = item;
        while (p && "children" in p && p.children && selected.length > 0) {
            const part = selected.shift();
            p = p.children.find(item => "name" in item && item.name == part);
        }
        if (p && "name" in p) p.selected = true;

        return {rootPath: `/${dir}`, items: item.children};
    }
    return {rootPath: `/${dir}`, items: []};
}

async function createNavItem(dir: string): Promise<INavItem | undefined> {
    const stat = await FS.lstat(dir);
    const name = cleanupPath(Path.basename(dir));

    if (!stat.isDirectory()) {
        if (Path.extname(dir) == ".mdx" && name != "index")
            return {
                name,
            };
        else return undefined;
    }

    const files = await FS.readdir(dir);
    return {
        name,
        children: (
            await Promise.all(
                files
                    .sort()
                    .map(fileName => createNavItem(Path.join(dir, fileName)))
            )
        ).filter((n): n is INavItem => !!n),
    };
}
