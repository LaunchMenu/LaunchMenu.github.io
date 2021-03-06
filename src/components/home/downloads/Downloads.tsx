import {Box, Typography} from "@material-ui/core";
import {FC} from "react";
import {H2} from "../../textStyles/H2";
import {H3} from "../../textStyles/H3";
import {HorizontalList} from "../HorizontalList";

export const Downloads: FC = ({}) => (
    <section>
        <H2>Downloads</H2>
        <HorizontalList>
            <Box
                p={2}
                css={theme => ({
                    backgroundColor: theme.palette.background.default,
                })}>
                <H3>Windows</H3>
            </Box>
        </HorizontalList>
    </section>
);
