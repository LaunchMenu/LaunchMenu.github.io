import {ReactNode} from "react";
import {CodeBlock} from "../../components/CodeBlock";
import {ScreenShot} from "./components/ScreenShot";

export const markdownComponents = {
    Test: ({color, children}: {color: string; children?: ReactNode}) => (
        <div style={{color}}>{children}</div>
    ),
    code: ({className, children}: {className: string; children: string}) => {
        const languageData = className.match(/language-(.*)/);
        return <CodeBlock code={children} language={languageData?.[1]} />;
    },
    ScreenShot,
};
