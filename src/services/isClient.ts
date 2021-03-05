/** Checks whether this code is running client side */
export function isClient(): boolean {
    return typeof window != "undefined";
}
