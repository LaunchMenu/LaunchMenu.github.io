import {FC} from "react";
import {useHashPos} from "../../../hooks/useHashPos";
import {getUrlHash} from "../../../services/getUrlHash";
import {
    FeatureStatusWrapper,
    IFeatureStatusData,
} from "../../home/features/FeatureStatusWrapper";
import {PlainLink} from "../../PlainLink";
import {H3} from "../../textStyles/H3";

export const Feature: FC<{title: string; status?: IFeatureStatusData}> = ({
    title,
    children,
    status = "supported",
}) => {
    const ref = useHashPos({name: title});
    return (
        <section ref={ref}>
            <PlainLink href={`#${getUrlHash(title)}`}>
                <H3 css={theme => ({marginTop: theme.spacing(2)})}>
                    <FeatureStatusWrapper status={status}>
                        {title}
                    </FeatureStatusWrapper>
                </H3>
            </PlainLink>
            <div css={theme => ({paddingTop: theme.spacing(1)})}>
                {children}
            </div>
        </section>
    );
};
