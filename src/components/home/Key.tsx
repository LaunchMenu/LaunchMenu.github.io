import {Box} from "@material-ui/core";
import {FC} from "react";

export const Key: FC = props => (
    <Box
        css={{
            paddingLeft: 2,
            paddingRight: 2,
            display: "inline-block",
            fontFamily: "consolas",
            backgroundColor: "#FAFAFA",
            borderColor: "#EEEEEE",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderBottomWidth: 4,
        }}
        {...props}
    />
);
