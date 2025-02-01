import Container from "../elements/Container.tsx";
import {useContext, useRef} from "react";
import HistoryContext from "../HistoryContext.tsx";

const HistoryCommand = () => {

    const {history} = useContext(HistoryContext);
    const valueRef = useRef(history);

    const currentHistory = valueRef.current;

    const count = currentHistory.length - 1;
    let items: string[] = [];

    for (let i = 1; i < count; i++) {

        if (currentHistory[i].prompt === ''){
            continue
        }

        if(i === 0){
            items.push(currentHistory[i].prompt);
            continue;
        }

        if(currentHistory[i].prompt !== items[-1]){
            items.push(currentHistory[i].prompt);
        }
    }

    return (
        <Container>
            {
                items.length === 0 ?
                    <p>No history</p>
                    :
                    items.map((value, index) => {
                        return <p key={index}><span className="inline-block w-20">{index}</span><span>{value}</span></p>
                    })
            }
        </Container>
    );
}

export default HistoryCommand;