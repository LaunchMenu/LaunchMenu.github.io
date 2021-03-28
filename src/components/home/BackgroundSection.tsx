import {createContext, FC} from "react";
import useResizeObserver from "use-resize-observer";
import {useTheme} from "@material-ui/core";
import { background3 } from "../../theme";

export const BackgroundContext = createContext("#fff");
export const BackgroundSection: FC<{
    color?: string;
    backgroundColor?: string;
}> = ({color = background3, backgroundColor = "#fff", children, ...rest}) => {
    const {ref, height = 1000} = useResizeObserver();
    const theme = useTheme();

    const corner = 100;
    return (
        <BackgroundContext.Provider value={color}>
            <div {...rest}>
                <div
                    css={{
                        backgroundColor: color,
                        height: height + theme.spacing(2),
                        left: 0,
                        right: 0,
                        position: "absolute",
                        zIndex: -1,
                    }}>
                    <div
                        css={{
                            backgroundColor: color,
                            height: corner,
                            left: 0,
                            right: 0,
                            zIndex: 1,
                            top: -corner,
                            position: "absolute",
                            ":after": {
                                content: '""',
                                backgroundColor,
                                height: corner,
                                borderBottomLeftRadius: corner,
                                left: 0,
                                right: 0,
                                zIndex: 1,
                                position: "absolute",
                            },
                        }}
                    />
                    <div
                        css={{
                            backgroundColor: color,
                            height: corner,
                            left: 0,
                            right: 0,
                            zIndex: 1,
                            bottom: -corner,
                            position: "absolute",
                            ":after": {
                                content: '""',
                                backgroundColor,
                                height: corner,
                                borderTopRightRadius: corner,
                                left: 0,
                                right: 0,
                                zIndex: 1,
                                position: "absolute",
                            },
                        }}
                    />
                </div>
                <div
                    ref={ref}
                    css={{
                        display: "inline-block",
                        width: "100%",
                    }}>
                    {children}
                </div>
            </div>
        </BackgroundContext.Provider>
    );
};
