import React from "react";

const Prompt: React.FC<{
    input: string | null,
    output?: React.ReactNode | (() => React.ReactNode),
    autocomplete?: null | string
}> = ({input, output = '', autocomplete = ''}) => {

    return (
        <>
            {
                input == null ? '' :
                    <div className="prompt">
                        <p className="system">
                            <span className="text-red-700 font-bold">visitor</span>
                            <span className="text-yellow font-bold">@</span>
                            <span className="text-cyan-500 font-bold">ashkanab.me</span>
                            {/*<span className="text-yellow font-bold px-2">/home</span>*/}
                            <span className="text-magenta font-bold px-2">$</span>

                            <span>{input}
                                {
                                    autocomplete ?
                                        <span id="autocomplete">{autocomplete.slice(input?.length)}</span>
                                        :
                                        null
                                }
                            </span>
                        </p>
                    </div>
            }

            {
                typeof output === "function" ? output() : output
            }

        </>
    )
        ;
}

export default Prompt;