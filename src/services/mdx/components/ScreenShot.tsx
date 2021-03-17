import {useTheme} from "@emotion/react";
import {FC, Fragment, ReactNode} from "react";
import {useVideoSizeData} from "../../../components/home/features/FeatureVideo";
import {isClient} from "../../isClient";

const LMWidth = 700;
const LMHeight = 450;
const LMMargin = 18 + 1; // R1 as a margin for error regarding rounding
const LMContentHeight = LMHeight - LMMargin * 2;

// Ratios
const headerRatio = 60 / LMContentHeight;
const menuRatio = 0.4;

export type ILMSection = "field" | "content" | "menu" | "bottom";
export const ScreenShot: FC<{
    src: string;
    alt?: string;
    section?: ILMSection;
    width?: number;
    className?: string;
}> = ({src, width, alt, className, section}) => (
    <LMFrame className={className} section={section} width={width}>
        {srcWidth => <img alt={alt} src={src} width={srcWidth} />}
    </LMFrame>
);

export const LMFrame: FC<{
    className?: string;
    width?: number;
    section?: ILMSection;
    children: (width: number) => ReactNode;
}> = ({className, width: desiredWidth, section, children}) => {
    const theme = useTheme();
    const {
        width,
        height,
        scale,
        srcWidth,
        ref,
    } = useVideoSizeData<HTMLDivElement>({
        desiredWidth,
        margin:
            isClient() && window.innerWidth < theme.breakpoints.values.md
                ? 0
                : theme.spacing(2),
    });

    let frame: {top: number; left: number; width: number; height: number} = {
        top: 0,
        left: 0,
        width: 1,
        height: 1,
    };
    if (section) {
        if (section == "field") {
            frame.height = headerRatio;
        } else if (section == "menu") {
            frame = {
                top: headerRatio,
                left: 0,
                width: menuRatio,
                height: 1 - headerRatio,
            };
        } else if (section == "content") {
            frame = {
                top: headerRatio,
                left: menuRatio,
                width: 1 - menuRatio,
                height: 1 - headerRatio,
            };
        } else {
            frame = {
                top: headerRatio,
                left: 0,
                width: 1,
                height: 1 - headerRatio,
            };
        }
    }

    const scalar = srcWidth / LMWidth;
    const margin = -(LMMargin * scalar);
    return (
        <Fragment>
            <div ref={ref} />
            <div
                className={className}
                css={theme => ({
                    width: frame.width * width,
                    height: frame.height * height,
                    position: "relative",
                    zIndex: 1,
                    backgroundColor: "white",
                    overflow: "hidden",
                    borderRadius: 20 * scale,
                    boxShadow: "0px 0px 30px -5px rgba(0,0,0,0.3)",
                    [theme.breakpoints.up("md")]: {
                        margin: theme.spacing(2),
                    },
                })}>
                <div
                    css={{
                        margin,
                        marginLeft: -frame.left * width + margin,
                        marginTop: -frame.top * height + margin,
                    }}>
                    {children(srcWidth)}
                </div>
            </div>
        </Fragment>
    );
};
