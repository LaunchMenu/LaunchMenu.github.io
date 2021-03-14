import {FC, ReactNode} from "react";
import {CodeBlock} from "../../../components/CodeBlock";
import {createHeaderComp} from "./createHeaderComp";
import {ScreenShot} from "./ScreenShot";
import {Section} from "./Section";

const autoFitImageRenderer: FC<{
    alt?: string;
    src?: string;
    title?: string;
    width?: number;
}> = ({alt, src, title, width}) => (
    <img
        alt={alt}
        src={src}
        title={title}
        style={{maxWidth: "100%"}}
        width={width}
    />
);
const codeRender: FC<{className: string; children: string}> = ({
    className,
    children,
}) => {
    const languageData = className.match(/language-(.*)/);
    return <CodeBlock code={children} language={languageData?.[1]} />;
};

export const markdownComponents = {
    // Standard
    code: codeRender,
    img: autoFitImageRenderer,
    section: Section,
    h1: createHeaderComp(1),
    h2: createHeaderComp(2),
    h3: createHeaderComp(3),
    h4: createHeaderComp(4),
    h5: createHeaderComp(5),
    h6: createHeaderComp(6),

    // Custom
    ScreenShot,
};
