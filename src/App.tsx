// import {useState, useEffect} from 'react';
import Interface from "./components/Interface.tsx";
import './App.css';
import { Analytics } from "@vercel/analytics/react"

function App() {

    return (
        <>
            <div id="terminal">
                <Interface />
            </div>

            <Analytics />
        </>
    )
}

export default App
