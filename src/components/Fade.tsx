import {CSSObject} from "@emotion/react";
import {FC, ReactNode, useEffect, useRef, useState} from "react";

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

    // Keep a history of children to fade between
    const [childHistory, setChildHistory] = useState<
        {child: ReactNode; id: string}[]
    >([]);
    useEffect(() => {
        if (children) {
            const top = childHistory[childHistory.length - 1];
            if (`${idPrefix.current}_${childID}` != top?.id) {
                idPrefix.current++;
                setChildHistory([
                    ...childHistory,
                    {
                        id: `${idPrefix.current}_${childID}`,
                        child: children,
                    },
                ]);
            } else {
                // Update the top
                setChildHistory([
                    ...childHistory.slice(0, childHistory.length - 1),
                    {
                        ...top,
                        child: children,
                    },
                ]);
            }
        }
    }, [childID, children]);

    // Change the top element to be visible with a slight delay
    const top = childHistory[childHistory.length - 1];
    const [visibleId, setVisibleId] = useState("");
    useEffect(() => {
        if (visibleId != top?.id)
            setTimeout(() => setVisibleId(top?.id || ""), 10);
    }, [top?.id]);

    // Handle all items becoming invisible
    const containerVisible = children != undefined;
    const onTransitionEnd = () => {
        if (!containerVisible) setChildHistory([]);
    };

    let nextVisible = true; // Whether the next item in the history should already be visible
    return (
        <div
            onTransitionEnd={onTransitionEnd}
            css={{
                display: "grid",
                gridTemplateColumns: "1fr",
                opacity: containerVisible ? 1 : 0,
                transition: `opacity ${
                    containerVisible ? fadeInDuration : fadeOutDuration
                }ms`,
                ...css,
            }}>
            {childHistory.map(({id, child}, i) => {
                const visible = nextVisible;
                if (id == visibleId) nextVisible = false;

                // Handle removal of no longer visible item
                const onTransitionEnd = () => {
                    // If the item should no longer be visible, remove it
                    if (!visible)
                        setChildHistory(
                            childHistory.filter(({id: fId}) => id != fId)
                        );
                    // If it should be visible, remove all items below it in the stack
                    else {
                        const index = childHistory.findIndex(
                            ({id: fId}) => id == fId
                        );
                        if (index != -1)
                            setChildHistory(childHistory.slice(index));
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
                            transition: `opacity ${fadeChangeDuration}ms`,
                            ...innerCss,
                        }}>
                        {child}
                    </div>
                );
            })}
        </div>
    );
};
