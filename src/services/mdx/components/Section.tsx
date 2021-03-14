import {FC, ReactNode, useCallback, useRef} from "react";
import {useHashPos} from "../../../hooks/useHashPos";
import {usePageIndex} from "../page/PageIndexContext";
import {useVisibleInWindow} from "../../../hooks/useVisibleInWindow";
import {isClient} from "../../isClient";

export const Section: FC<{
    name: string;
    depth: number;
    children: ReactNode;
}> = ({name, depth, children}) => {
    const scrollRef = useHashPos(name);
    const {pushSection, popSection} = usePageIndex();
    const onVisibilityChange = useCallback((visible: boolean) => {
        setTimeout(() => {
            if (visible) pushSection(name, depth);
            else popSection(name);
        });
    }, []);

    const [visibilityRef] = useVisibleInWindow({
        onVisibilityChange,
        area: {height: Math.min(isClient() ? window.innerHeight : 200, 200)},
    });
    const setRef = useCallback((el: HTMLElement) => {
        visibilityRef.current = el;
        scrollRef.current = el;
    }, []);

    return <section ref={setRef}>{children}</section>;
};
