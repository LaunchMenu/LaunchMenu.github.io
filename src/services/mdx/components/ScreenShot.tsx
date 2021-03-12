import {FC} from "react";
import {useVideoSizeData} from "../../../components/home/features/FeatureVideo";

const LMWidth = 700;
const LMHeight = 450;
const LMMargin = 18 + 1; // R1 as a margin for error regarding rounding
const LMContentHeight = LMHeight - LMMargin * 2;

// Ratios
const headerRatio = 60 / LMContentHeight;
const menuRatio = 0.4;

export const ScreenShot: FC<{
    src: string;
    alt?: string;
    section?: "field" | "content" | "menu" | "bottom";
    width?: number;
    className?: string;
}> = ({src, width: desiredWidth, alt, className, section}) => {
    const {width, height, scale, srcWidth} = useVideoSizeData(desiredWidth);

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

    return (
        <div
            className={className}
            css={theme => ({
                width: frame.width * width,
                height: frame.height * height,
                zIndex: 1,
                margin: theme.spacing(2),
                backgroundColor: "white",
                overflow: "hidden",
                borderRadius: 20 * scale,
                boxShadow: "0px 0px 30px -5px rgba(0,0,0,0.3)",
            })}>
            <div
                css={{
                    margin: -(LMMargin * scalar),
                    position: "relative",
                    left: -frame.left * width,
                    top: -frame.top * height,
                }}>
                <img alt={alt} src={src} width={srcWidth} />
            </div>
        </div>
    );
};
