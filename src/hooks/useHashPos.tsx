import {MutableRefObject, useEffect, useRef} from "react";

export function useHashPos<E extends HTMLElement>(
    config:
        | {
              name?: string;
              url?: string;
          }
        | string
): MutableRefObject<E | null> {
    const ref = useRef<E>(null);
    useEffect(() => {
        const name = typeof config == "object" ? config.name : config;
        const url = typeof config == "object" ? config.url : "";
        const stdUrl = name ? name.replaceAll(" ", "-") : url;

        const onHashChange = () => {
            const {hash} = window.location;
            console.log(ref.current, hash.substring(1), stdUrl);
            if (hash.substring(1) == stdUrl && ref.current) {
                window.scrollTo({
                    top:
                        ref.current.getBoundingClientRect().top +
                        window.pageYOffset,
                    behavior: "smooth",
                });
            }
        };

        setTimeout(onHashChange, 1000);
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);
    return ref;
}
