import {History} from "../components/Types.tsx";

export const hideHistory = (history: History[]) =>{

    const index = history.findIndex((item) => {
        return item.visible
    });

    if (index !== -1){
        // slices history to only hide the items which haven't been hidden yet
        const hiddenHistory: History[] = history.slice(index).map((item) => {
            return {
                prompt: item.prompt,
                output: item.output,
                visible: false
            }
        });

        return history.slice(0, index).concat(hiddenHistory);
    }

    return history;
};