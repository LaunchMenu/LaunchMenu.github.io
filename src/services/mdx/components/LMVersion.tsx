import {Tooltip, Box, Typography} from "@material-ui/core";
import {FC, Fragment} from "react";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import {PlainLink} from "../../../components/PlainLink";

// This should really be done with a provider, but it's only for the About page so it shouldn't matter too much

const defs: {
    [version: number]: {
        name: string;
        version: number;
        date: string;
        link?: string;
    };
} = {};

export const LMVersionDefinition: FC<{
    name: string;
    version: number;
    date: string;
    link?: string;
}> = props => {
    defs[props.version] = props;
    return <Fragment />;
};

export const LMVersion: FC<{v: number}> = ({v}) => {
    const {name, version, date, link} = defs[v] ?? {
        name: v,
        version: v,
        date: "0",
    };
    return (
        <Tooltip
            title={
                <Typography color="inherit">
                    V{version} {date}
                </Typography>
            }
            placement="bottom-start"
            aria-label={name}>
            <span css={{fontWeight: 800}}>
                <Box
                    css={{
                        ">*": {
                            verticalAlign: "middle",
                            fontSize: "1.1em",
                        },
                        marginRight: 4,
                    }}
                    display="inline">
                    <LocalOfferIcon />
                </Box>
                {link ? <PlainLink href={link}>{name}</PlainLink> : name}
            </span>
        </Tooltip>
    );
};
