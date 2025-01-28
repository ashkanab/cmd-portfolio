import React, {createContext} from "react";
import {History} from "./Types.tsx";

const HistoryContext = createContext<{
    history: History[];
    setHistory: React.Dispatch<React.SetStateAction<History[]>>;
    input: null|string;
    setInput: React.Dispatch<React.SetStateAction<null|string>>;
}>({
    history: [],
    setHistory: () => {}, // Default empty function
    input: '',
    setInput: () => {}
});

export default HistoryContext;