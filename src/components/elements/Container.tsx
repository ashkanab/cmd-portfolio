import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div className={"px-2 py-2"}>
            {children}
        </div>
    );
}

export default Container