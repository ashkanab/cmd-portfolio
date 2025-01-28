import React, {useEffect, useState} from "react";
import Prompt from "./Prompt.tsx";
import {History} from "./Types.tsx";
import getCommands from "./Commands.tsx";
import HistoryContext from "./HistoryContext.tsx";

const Interface: React.FC = () => {

    const [history, setHistory] = useState<History[]>([]);
    const [input, setInput] = useState<null | string>(null);
    const [pressedKeys, setPressedKeys] = useState<string>('');
    const [capsLock, setCapsLock] = useState<boolean>(false);
    const [autocomplete, setAutocomplete] = useState<null | string>(null);


    const addToHistory = (history: History) => {
        setHistory(prevArray => [...prevArray, history]);
    }

    const checkAutoComplete = (input: string) => {
        if (input === '') {
            setAutocomplete(null)
        } else {
            const command = getCommands.find((cmd) => cmd.name.startsWith(input));
            if (command) {
                setAutocomplete(command.name);
            } else {
                setAutocomplete(null);
            }
        }
    }


    useEffect(() => {

        if (input !== null) {

            const index = getCommands.findIndex((cmd) => {
                return cmd.name === input;
            })

            if (index !== -1) {
                const CommandComponent = getCommands[index].component;
                addToHistory({prompt: input, output: <CommandComponent/>, visible: true});
            } else if (input.trim() === '') {
                addToHistory({prompt: '', output: '', visible: true})
            } else {
                const error = `sh: command not found: ${input.trim()}; use command 'help' to see available commands.`;
                addToHistory({prompt: input, output: error, visible: true});
            }
        }

        return () => {
            setInput(null);
            setAutocomplete(null)
        }
    }, [input]);


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {

            window.scrollTo({
                top: document.documentElement.scrollHeight,
                // behavior: 'smooth',
            });

            const specialKeys = ['Shift', 'Space', 'Tab', 'Enter', 'Backspace', 'Alt', 'Meta', 'CapsLock', 'Control', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Escape'];

            if (specialKeys.includes(e.key)) {

                switch (e.key) {
                    case 'Enter':
                        setInput(pressedKeys);
                        setPressedKeys('');
                        break;

                    case 'Backspace':
                        setPressedKeys((prev) => prev.slice(0, -1));
                        checkAutoComplete(pressedKeys.slice(0, -1))
                        break;

                    case 'CapsLock':
                        setCapsLock(prev => !prev);
                        if (capsLock) {
                            setPressedKeys(prev => prev + e.key.toUpperCase());
                        }
                        break;

                    case 'Tab':
                        if (autocomplete) {
                            setPressedKeys(autocomplete);
                            setAutocomplete(null);
                        }
                        break;

                    case 'ArrowUp':
                        // TODO: navigate up through history
                        break;

                    case 'ArrowDown':
                        // TODO: navigate down through history
                        break;

                    default:
                        break;
                }
            } else {
                setPressedKeys(prev => prev + e.key);
                checkAutoComplete(pressedKeys + e.key)
            }
        };

        // Add event listener to document
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup listener
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [pressedKeys]);


    return (
        <div id="interface">
            <HistoryContext.Provider value={{history, setHistory, input, setInput}}>
                {
                    history.filter((item) => {
                        return item.visible;
                    }).map((item, key) => {
                        return <Prompt key={key} input={item.prompt} output={item.output}/>;
                    })
                }

                {
                    <Prompt key={-1} input={pressedKeys} autocomplete={autocomplete}/>
                }
            </HistoryContext.Provider>
        </div>
    );
}

export default Interface;