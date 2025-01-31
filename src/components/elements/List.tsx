import {ListItem} from "../Types.tsx";
import React from "react";

const List: React.FC<{ items: ListItem[], type?: string}> = ({items, type = 'default'}) => {

    let classes = "";

    switch (type){
        case 'full-w':
            classes = 'full-w';
            break;
        case 'default':
            classes = 'default';
            break;
        default:
            classes = 'normal'
            break;
    }

    return (
        <ul className={"list " + classes}>
            {
                items.map((item: ListItem, index) => {
                    return (
                        <li key={index}>
                            <span className="key">{item.key}</span>
                            {
                                type == "full-w" ?
                                    <hr/>
                                    :
                                    null
                            }
                            <span className="value">{item.value}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
};

export default List;