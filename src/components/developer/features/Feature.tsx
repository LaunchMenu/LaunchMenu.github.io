import {FC} from "react";
import {useHashPos} from "../../../hooks/useHashPos";
import {getUrlHash} from "../../../services/getUrlHash";
import {
    FeatureStatusWrapper,
    IFeatureStatusData,
} from "../../home/features/FeatureStatusWrapper";
import {PlainLink} from "../../PlainLink";
import {H3} from "../../textStyles/H3";
import MoreIcon from "@material-ui/icons/More";
import {Tooltip} from "@material-ui/core";

export const Feature: FC<{
    title: string;
    docs?: string;
    status?: IFeatureStatusData;
}> = ({title, children, docs, status = "supported"}) => {
    const ref = useHashPos({name: title});
    return (
        <section ref={ref}>
            <H3 css={theme => ({marginTop: theme.spacing(2)})}>
                <PlainLink href={`#${getUrlHash(title)}`}>
                    <FeatureStatusWrapper status={status}>
                        {title}
                    </FeatureStatusWrapper>
                </PlainLink>
                {docs && (
                    <Tooltip title="Docs">
                        <PlainLink
                            href={docs}
                            css={theme => ({
                                marginLeft: theme.spacing(2),
                                ">*": {
                                    verticalAlign: "middle",
                                },
                            })}>
                            <MoreIcon />
                        </PlainLink>
                    </Tooltip>
                )}
            </H3>
            <div css={theme => ({paddingTop: theme.spacing(1)})}>
                {children}
            </div>
        </section>
    );
};
