import {useContext, useEffect, useRef} from "react";
import HistoryContext from "../HistoryContext.tsx";
import {History} from "../Types.tsx";

const ClearCommand = () => {

    const {history, setHistory} = useContext(HistoryContext);

    const valueRef = useRef(history);
    let items: History[] = valueRef.current;

    const index = items.findIndex((item) => {
        return item.visible;
    });

    if (index !== -1){
        // slices history to only hide the items which haven't been hidden yet
        const hiddenHistory: History[] = items.slice(index).map((item: History) => {
            return {
                prompt: item.prompt,
                output: item.output,
                visible: false
            }
        });

        items = items.slice(0, index).concat(hiddenHistory);
    }

    useEffect(() => {
        setHistory(items)
    }, []);

    return '';
}

export default ClearCommand;