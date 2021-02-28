import {FC, Fragment} from "react";
import {Prism} from "react-syntax-highlighter";
import {vs} from "react-syntax-highlighter/dist/cjs/styles/prism";

const InlineCodeWrapper: FC = ({children}) => {
    return <Fragment>{children}</Fragment>;
};

export const CodeBlock: FC<{code: string; language?: string}> = ({
    code,
    language = "tsx",
}) => {
    return (
        <Prism
            PreTag={InlineCodeWrapper}
            style={vs}
            language={language}
            children={code}
        />
    );
};
