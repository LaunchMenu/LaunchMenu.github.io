import {Button} from "@material-ui/core";
import {Box} from "@material-ui/core";
import {FC} from "react";
import {PlainLink} from "../../../components/PlainLink";
import {background3} from "../../../theme";

export const GuideNav: FC<{prev?: string; next?: string}> = ({prev, next}) => (
    <Box
        display="flex"
        mt={4}
        css={{background: background3}}
        p={1}
        borderRadius={5}>
        {prev && (
            <PlainLink href={prev}>
                <Button variant="contained">Previous</Button>
            </PlainLink>
        )}
        <Box flex={1} />
        {next && (
            <PlainLink href={next}>
                <Button variant="contained" color="primary">
                    Next
                </Button>
            </PlainLink>
        )}
    </Box>
);
