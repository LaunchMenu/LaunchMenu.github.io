import {Box} from "@material-ui/core";
import {FC} from "react";

export const Spacer: FC<{amount: number}> = ({amount, ...rest}) => (
    <Box height={amount} {...rest} />
);
