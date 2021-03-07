import {Box, Paper, Typography} from "@material-ui/core";
import {FC} from "react";
import {useHashPos} from "../../../hooks/useHashPos";
import {H2} from "../../textStyles/H2";
import {H3} from "../../textStyles/H3";
import {Text} from "../../textStyles/Text";
import {FeatureStatusWrapper} from "../features/FeatureStatusWrapper";
import {HorizontalList} from "../HorizontalList";
import {DownloadBlock} from "./DownloadBlock";

export const Downloads: FC = ({children}) => {
    const ref = useHashPos("downloads");
    return (
        <section ref={ref}>
            <H2
                css={theme => ({
                    marginTop: theme.spacing(4),
                    marginBottom: theme.spacing(2),
                })}>
                Downloads
            </H2>
            <HorizontalList>{children}</HorizontalList>

            <Box mt={2}>
                <Text>
                    Previous releases of LaunchMenu can be found on{" "}
                    <a href="https://github.com/LaunchMenu/LaunchMenu/releases">
                        our github page
                    </a>
                </Text>
            </Box>
        </section>
    );
};
