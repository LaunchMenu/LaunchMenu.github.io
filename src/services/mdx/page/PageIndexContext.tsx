import {
    createContext,
    FC,
    useCallback,
    useContext,
    useRef,
    useState,
} from "react";

export const PageIndexContext = createContext<{
    pushSection: (section: string, depth?: number) => void;
    popSection: (section: string) => void;
    section: string;
}>({pushSection: () => {}, popSection: () => {}, section: ""});

export const usePageIndex = () => useContext(PageIndexContext);

export const PageIndexProvider: FC = ({children}) => {
    const stack = useRef<string[][]>([[""]]);
    const [_, update] = useState(0);
    const pushSection = useCallback((section: string, depth?: number) => {
        if (depth) {
            if (!stack.current[depth]) stack.current[depth] = [];
            stack.current[depth].push(section);
        } else stack.current.push([section]);
        update(v => v + 1);
    }, []);
    const popSection = useCallback((section: string) => {
        const index = stack.current.findIndex(layer => layer.includes(section));
        if (index != -1) {
            stack.current[index] = stack.current[index].filter(
                s => s != section
            );
            if (stack.current[index].length == 0)
                stack.current.splice(index, 1);
            update(v => v + 1);
        }
    }, []);

    const cs = stack.current;
    const layer = cs[cs.length - 1];
    const section = layer[layer.length - 1];
    return (
        <PageIndexContext.Provider
            value={{
                section,
                pushSection,
                popSection,
            }}>
            {children}
        </PageIndexContext.Provider>
    );
};
