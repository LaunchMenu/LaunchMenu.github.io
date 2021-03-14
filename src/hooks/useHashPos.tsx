import {MutableRefObject, useEffect, useRef} from "react";
import {getUrlHash} from "../services/getUrlHash";

export function useHashPos<E extends HTMLElement>(
    config:
        | {
              name?: string;
              url?: string;
              offset?: number;
          }
        | string
): MutableRefObject<E | null> {
    const ref = useRef<E>(null);
    useEffect(() => {
        const name = typeof config == "object" ? config.name : config;
        const url = typeof config == "object" ? config.url : "";
        const offset =
            (typeof config == "object" ? config.offset : undefined) ?? 60;
        const stdUrl = name ? getUrlHash(name) : url;

        const onHashChange = () => {
            const {hash} = window.location;
            if (hash.substring(1) == stdUrl && ref.current) {
                window.scrollTo({
                    top:
                        ref.current.getBoundingClientRect().top +
                        window.pageYOffset -
                        offset,
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
