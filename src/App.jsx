import React, {useState} from "react";
import AsciiConverter from "./AsciiConverter";
import { IMAGES } from "./assets/images";
import "./App.css";


function App(){
    return (
        <section className="hero">
            <div className="content">
                <h1>Inspired by <em>The Martian</em></h1>
                <AsciiConverter/>
            </div>
        </section>
    )
}

export default App;