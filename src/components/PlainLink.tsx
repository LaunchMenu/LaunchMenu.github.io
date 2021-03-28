import {FC} from "react";
import NextLink from "next/link";

export const PlainLink: FC<{
    href: string;
    className?: string;
    styled?: boolean;
}> = ({href, children, styled = false, ...rest}) => {
    return (
        <NextLink href={href}>
            <a
                css={!styled && {textDecoration: "none", color: "inherit"}}
                href={href}
                onClick={() => {
                    // Force a hash update event
                    const hash = href.match(/#.*(?:\?|$)/);
                    if (hash) window.location.hash = hash[0];
                }}
                {...rest}>
                {children}
            </a>
        </NextLink>
    );
};

export const Link: FC<{
    href: string;
    className?: string;
}> = props => <PlainLink {...props} styled />;
