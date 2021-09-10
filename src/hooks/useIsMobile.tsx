import {useTheme} from "@emotion/react";
import {useEffect, useState} from "react";
import {isClient} from "../services/isClient";

function hasMinSize(width: number): boolean {
    if (isClient())
        return window.innerWidth >= width && window.innerHeight >= 700;
    else return false;
}

export function useIsMobile(): boolean {
    const [mobile, setMobile] = useState(false);
    const theme = useTheme();
    const minDesktopWidth = theme.breakpoints.values["lg"];

    useEffect(() => {
        // Only update this data after a delay, to prevent SSR desync
        setMobile(!hasMinSize(minDesktopWidth));
    }, []);

    useEffect(() => {
        const listener = () => {
            const shouldBeMobile = !hasMinSize(minDesktopWidth);
            if (shouldBeMobile != mobile) setMobile(shouldBeMobile);
        };

        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [mobile]);

    return mobile;
}
