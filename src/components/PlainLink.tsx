import {FC} from "react";
import Link from "next/link";

export const PlainLink: FC<{href: string; className?: string}> = ({
    href,
    children,
    ...rest
}) => {
    return (
        <Link href={href}>
            <a
                css={{textDecoration: "none", color: "inherit"}}
                href={href}
                onClick={() => {
                    // Force a hash update event
                    const hash = href.match(/#.*(?:\?|$)/);
                    if (hash) window.location.hash = hash[0];
                }}
                {...rest}>
                {children}
            </a>
        </Link>
    );
};
