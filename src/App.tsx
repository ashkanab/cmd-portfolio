// import {useState, useEffect} from 'react';
import Interface from "./components/Interface.tsx";
import './App.css';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

    return (
        <>
            <div id="terminal">
                <Interface />
            </div>

            <SpeedInsights/>
            <Analytics />
        </>
    )
}

export default App
