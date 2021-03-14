import {MutableRefObject, useEffect, useRef} from "react";

export function useVisibleInWindow<E extends HTMLElement>({
    onVisibilityChange,
    area,
}: {
    onVisibilityChange: (visible: boolean) => void;
    area?: {top?: number; left?: number; height?: number; width?: number};
}): [MutableRefObject<E | null>, {visible: boolean}] {
    const visibleRef = useRef(false);
    const elRef = useRef<E | null>(null);
    useEffect(() => {
        const onScroll = () => {
            const vp = {
                top: 0,
                left: 0,
                height: window.innerHeight,
                width: window.innerWidth,
                ...area,
            };
            const bb = elRef.current?.getBoundingClientRect();
            if (bb) {
                const visible =
                    bb.top < vp.top + vp.height &&
                    bb.top + bb.height > vp.top &&
                    bb.left < vp.left + vp.width &&
                    bb.left + bb.width > vp.left;
                if (visible != visibleRef.current) {
                    onVisibilityChange?.(visible);
                    visibleRef.current = visible;
                }
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [area?.top, area?.left, area?.height, area?.width]);

    return [elRef, {visible: visibleRef.current}];
}
