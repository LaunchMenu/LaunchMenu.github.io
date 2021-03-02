import {CSSObject} from "@emotion/react";
import {FC, ReactNode, useRef} from "react";

export const Fade: FC<{
    fadeInDuration?: number;
    fadeChangeDuration?: number;
    fadeOutDuration?: number;
    childID: number | string;
    css?: CSSObject;
    innerCss?: CSSObject;
}> = ({
    fadeInDuration = 250,
    fadeChangeDuration = 250,
    fadeOutDuration = 250,
    css,
    innerCss,
    children,
    childID,
}) => {
    const idPrefix = useRef(0); // To prevent interference when switching back to an ID
    const prevChildrenRef = useRef<{child: ReactNode; id: number | string}[]>(
        []
    );
    const prevChildren = prevChildrenRef.current;
    const top = prevChildren[prevChildren.length - 1];
    if (`${idPrefix.current}_${childID}` != top?.id) {
        idPrefix.current++;
        prevChildren.push({
            id: `${idPrefix.current}_${childID}`,
            child: children,
        });
    }

    return (
        <div
            css={{
                display: "grid",
                gridTemplateColumns: "1fr",
                ...css,
            }}>
            {prevChildren.map(({id, child}, i) => {
                const visible = i == prevChildren.length - 1;
                const onTransitionEnd = () => {
                    if (!visible) {
                        const index = prevChildren.findIndex(
                            ({id: fid}) => fid == id
                        );
                        if (index != -1) prevChildren.splice(index, 1);
                    }
                };

                return (
                    <div
                        key={id}
                        onTransitionEnd={onTransitionEnd}
                        css={{
                            gridRowStart: 1,
                            gridColumnStart: 1,
                            opacity: visible ? 1 : 0,
                            transition: `opacity ${
                                i == 0
                                    ? visible
                                        ? fadeInDuration
                                        : fadeOutDuration
                                    : fadeChangeDuration
                            }ms`,
                            ...innerCss,
                        }}>
                        {child}
                    </div>
                );
            })}
        </div>
    );
};
