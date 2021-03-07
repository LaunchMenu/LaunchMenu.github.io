import {Box} from "@material-ui/core";
import {FC, useRef} from "react";
import {useHashPos} from "../../../hooks/useHashPos";
import {H2} from "../../textStyles/H2";
import {Text} from "../../textStyles/Text";
import {HorizontalList} from "../HorizontalList";

export const Recommendations: FC = ({children}) => {
    const ref = useHashPos("reviews");
    const Comp = useRef((props: Object) => <section ref={ref} {...props} />);

    return (
        <Box component={Comp.current} mt={4} aria-label="reviews">
            <Box mb={4}>
                <H2>Reviews</H2>
            </Box>
            <Text
                css={theme => ({fontSize: 24, marginBottom: theme.spacing(2)})}>
                Here's what people have to say about LaunchMenu.
            </Text>
            <HorizontalList>{children}</HorizontalList>
        </Box>
    );
};
