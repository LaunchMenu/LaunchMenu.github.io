import Path from "path";

export function getPagesDir(dir: string): string {
    return Path.join(process.cwd(), "src", "pages", dir);
}
