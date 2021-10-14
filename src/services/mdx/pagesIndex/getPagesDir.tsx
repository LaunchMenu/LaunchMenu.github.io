import Path from "path";

/**
 * Obtains the directory for the given relate path
 * @param dir The relative path (either relative to src/pages, or the remote dir)
 * @param remote Whether it should be relative to the remote directory
 * @returns The absolute path
 */
export function getPagesDir(dir: string, remote?: boolean): string {
    if (remote) return Path.join(process.cwd(), "tempRemoteDocs", dir);
    return Path.join(process.cwd(), "src", "pages", dir);
}
