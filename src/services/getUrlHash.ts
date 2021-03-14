export const getUrlHash = (name: string) =>
    name.replace(/\s/g, "-").toLowerCase();
