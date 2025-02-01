import React, {useEffect, useState} from "react";
import Prompt from "./Prompt.tsx";
import {History} from "./Types.tsx";
import getCommands from "./Commands.tsx";
import HistoryContext from "./HistoryContext.tsx";
import Logs from "./elements/Logs.tsx";

const Interface: React.FC = () => {

    const [history, setHistory] = useState<History[]>([]);
    const [input, setInput] = useState<null | string>(null);
    const [pressedKeys, setPressedKeys] = useState<string>('');
    const [capsLock, setCapsLock] = useState<boolean>(false);
    const [autocomplete, setAutocomplete] = useState<null | string>(null);
    const [inputForm, setInputForm] = useState('');
    const [showPrompt, setShowPrompt] = useState<boolean>(false)
    let showInput = false;

    useEffect(() => {

        const checkDevice = () => {
            const isSmallScreen = window.matchMedia("(max-width: 1024px)").matches;
            const isMobileUserAgent = /Mobi|Android|Tablet|iPad|iPhone/i.test(
                navigator.userAgent
            );
            showInput = isSmallScreen && isMobileUserAgent;
        };

        checkDevice();
        window.addEventListener("resize", checkDevice);

        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    // Handle changes in the input field
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputForm(event.target.value); // Update state with input value
    };

    const addToHistory = (history: History) => {
        setHistory(prevArray => [...prevArray, history]);
    }
    useEffect(() => {
        addToHistory({
            prompt: null,
            output: <Prompt key={0} input={null} output={<Logs/>}/>,
            visible: true
        });

        const timeout = setTimeout(() => {
            setShowPrompt(true)
        }, 3001);

        return () => {
            clearTimeout(timeout);
            setHistory([]);
            setShowPrompt(false);
        };
    }, []);

    const checkAutoComplete = (input: string) => {
        if (input === '') {
            setAutocomplete(null)
        } else {
            const command = getCommands.find((cmd) => cmd.name.toLowerCase().startsWith(input.toLowerCase()));
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
                return cmd.name.toLowerCase() === input.toLowerCase();
            })

            if (index !== -1) {
                const command = getCommands[index];
                const Component = command.component;
                addToHistory({prompt: input, output: <Component/>, visible: true});
                if(command.delay != undefined && command.delay > 0){
                    setShowPrompt(false);
                    setTimeout(() => {
                        setShowPrompt(true);
                    }, command.delay);
                }
            } else if (input.trim() === '') {
                addToHistory({prompt: '', output: '', visible: true})
            } else {
                const error = `sh: command not found: ${input.trim()}; use command 'help' to see available commands.`;
                addToHistory({prompt: input, output: error, visible: true});
            }
        }

        return () => {
            setInput(null);
            setAutocomplete(null);
            setInputForm('');
        }
    }, [input]);


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {

            window.scrollTo({
                top: document.documentElement.scrollHeight,
                // behavior: 'smooth',
            });

            const specialKeys = ['Shift', 'Space', 'Tab', 'Enter', 'Backspace', 'Alt', 'Meta', 'CapsLock', 'Control', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Escape', 'Unidentified'];

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
            <div
                className="w-full absolute flex bottom-0 left-0 items-center" hidden={!showInput}>
                <input type="text" name="input" value={inputForm} onChange={handleInputChange} id="price"
                       className="bg-white w-full py-2 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6  rounded-md pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
                       placeholder="Write a prompt, or type 'help'"/>
                <button type="button"
                        onClick={() => setInput(inputForm)}
                        className="text-base bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
                >Enter
                </button>
            </div>

            <HistoryContext.Provider value={{history, setHistory, input, setInput}}>
                {
                    history.filter((item) => {
                        return item.visible;
                    }).map((item, key) => {
                        return <Prompt key={key} input={item.prompt} output={item.output}/>;
                    })
                }

                {
                    showPrompt ?
                        <Prompt key={-1} input={pressedKeys} autocomplete={autocomplete}/>
                        : null
                }
            </HistoryContext.Provider>

        </div>
    );
}

export default Interface;