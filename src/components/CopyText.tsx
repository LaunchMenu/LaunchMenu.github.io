import {Snackbar} from "@material-ui/core";
import {FC, Fragment, useState} from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import MuiAlert from "@material-ui/lab/Alert";
import {ReactNode} from "react";

export const CopyText: FC<{text: string; copyMessage?: ReactNode}> = ({
    text,
    copyMessage,
    children,
}) => {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <CopyToClipboard text={text} onCopy={() => setOpen(true)}>
                {children}
            </CopyToClipboard>
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={() => setOpen(false)}>
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={() => setOpen(false)}
                    severity="success">
                    {copyMessage ?? "Text copied to clipboard"}
                </MuiAlert>
            </Snackbar>
        </Fragment>
    );
};
