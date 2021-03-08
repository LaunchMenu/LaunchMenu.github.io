import {Box} from "@material-ui/core";
import {FC, ReactNode} from "react";
import {useHashPos} from "../../../hooks/useHashPos";
import {H2} from "../../textStyles/H2";
import {Text} from "../../textStyles/Text";

export const Applets: FC<{title: string; description?: ReactNode}> = ({
    title,
    description,
    children,
}) => {
    const ref = useHashPos(title);
    return (
        <section ref={ref}>
            <H2
                css={theme => ({
                    marginTop: theme.spacing(4),
                    marginBottom: theme.spacing(2),
                })}>
                {title}
            </H2>
            <Box mt={2}>
                <Text>{description}</Text>
            </Box>
            <Box
                display="grid"
                css={theme => ({
                    gridTemplateColumns: "repeat(4, 1fr)",
                    [theme.breakpoints.down("md")]: {
                        gridTemplateColumns: "repeat(3, 1fr)",
                    },
                    [theme.breakpoints.down("sm")]: {
                        gridTemplateColumns: "repeat(2, 1fr)",
                    },
                    [theme.breakpoints.down("xs")]: {
                        gridTemplateColumns: "repeat(1, 1fr)",
                    },
                })}>
                {children}
            </Box>
        </section>
    );
};
