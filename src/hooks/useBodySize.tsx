import {useEffect, useState} from "react";
import {isClient} from "../services/isClient";

export function getBodySize(): {
    width?: number;
    height?: number;
} {
    if (isClient())
        return {
            width: window.document.body.clientWidth,
            height: window.document.body.clientHeight,
        };
    else return {};
}

export function useBodySize(): {
    width?: number;
    height?: number;
} {
    const [size, setSize] = useState(getBodySize());
    useEffect(() => {
        const listener = () => {
            setSize(getBodySize());
        };

        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, []);

    return size;
}
