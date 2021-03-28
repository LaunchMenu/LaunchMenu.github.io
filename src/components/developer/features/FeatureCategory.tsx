import {Box} from "@material-ui/core";
import {FC} from "react";
import {ReactNode} from "react";
import {useHashPos} from "../../../hooks/useHashPos";
import {getUrlHash} from "../../../services/getUrlHash";
import {PlainLink} from "../../PlainLink";
import {H2} from "../../textStyles/H2";

export const FeatureCategory: FC<{category: string; content?: ReactNode}> = ({
    category,
    content,
    children,
}) => {
    const ref = useHashPos({name: category});
    return (
        <Box
            display="flex"
            py={2}
            flexWrap="wrap"
            css={theme => ({marginTop: 200, gap: theme.spacing(2)})}>
            <Box
                minWidth="fit-content"
                flex={1}
                display="flex"
                justifyContent="center">
                <Box display="inline-block">{content}</Box>
            </Box>
            <Box
                flex={1}
                flexShrink={1}
                minWidth="min(100%, 300px)"
                maxWidth="500px">
                <section ref={ref}>
                    <PlainLink href={`#${getUrlHash(category)}`}>
                        <H2>{category}</H2>
                    </PlainLink>
                    <Box mt={0.5}>{children}</Box>
                </section>
            </Box>
        </Box>
    );
};
