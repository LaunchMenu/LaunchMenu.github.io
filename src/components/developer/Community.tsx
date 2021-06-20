import {FC} from "react";
import {useHashPos} from "../../hooks/useHashPos";
import {H2} from "../textStyles/H2";

export const Community: FC<{
    links: {name: string; url: string}[];
    title: string;
}> = ({title, links, children}) => {
    const ref = useHashPos(title);
    return (
        <section ref={ref}>
            <H2
                css={theme => ({
                    marginTop: theme.spacing(4),
                    marginBottom: theme.spacing(2),
                })}>
                {title}
            </H2>
            {children}
            <ul>
                {links.map(({name, url}, i) => (
                    <li key={i}>
                        <a href={url}>{name}</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};
