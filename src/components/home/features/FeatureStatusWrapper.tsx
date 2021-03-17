import {Tooltip, Typography, Theme, useTheme, Box} from "@material-ui/core";
import ComingSoon from "@material-ui/icons/Build";
import Supported from "@material-ui/icons/Check";
import LongTerm from "@material-ui/icons/DateRange";
import {FC, Fragment, ReactNode} from "react";

const statusData = {
    supported: {
        Icon: Supported,
        tooltip: "Feature is fully operational",
        getColor: (theme: Theme) => theme.palette.primary.main,
    },
    comingSoon: {
        Icon: ComingSoon,
        tooltip: "Not all aspects are implemented yet",
        getColor: (theme: Theme) => "orange",
    },
    longTerm: {
        Icon: LongTerm,
        tooltip: "Nothing has been implemented yet",
        getColor: (theme: Theme) => "red",
    },
};

export const FeatureStatusWrapper: FC<{
    status: IFeatureStatusData;
    childrenInTooltip?: boolean;
}> = ({status, children, childrenInTooltip}) => {
    const statusType = typeof status == "object" ? status.type : status;
    const extraTooltip = typeof status == "object" ? status.tooltip : undefined;

    const {tooltip, Icon, getColor} = statusData[statusType];
    const color = getColor(useTheme());
    const icon = <Icon />;

    return (
        <Fragment>
            <Tooltip
                title={
                    <Fragment>
                        <Typography color="inherit">{tooltip}</Typography>
                        {extraTooltip}
                    </Fragment>
                }
                placement="bottom-start"
                aria-label={tooltip}>
                <span>
                    <Box
                        css={{
                            color,
                            ">*": {
                                verticalAlign: "bottom",
                                fontSize: "1.5em",
                            },
                        }}
                        display="inline"
                        mr={1}>
                        {icon}
                    </Box>
                    {childrenInTooltip && children}
                </span>
            </Tooltip>
            {!childrenInTooltip && children}
        </Fragment>
    );
};

export type IFeatureStatus = "supported" | "comingSoon" | "longTerm";
export type IFeatureStatusData =
    | IFeatureStatus
    | {
          type: IFeatureStatus;
          tooltip: ReactNode;
      };
