import React, {useState} from "react";
import AsciiConverter from "./AsciiConverter";
import AccordionPart from "./Accordion";
import "./App.css";


function App(){

    return (
        <section className="hero">
            
            <div className="main">
            <AccordionPart/>
                <h1>Inspired by <em>The Martian</em></h1>
                <h2>How NASA Communicated with Mark Watney:<br/>Translating English to Hex</h2>
                <br/>
                <AsciiConverter/>
            </div>
        </section>
    )
}


export default App;