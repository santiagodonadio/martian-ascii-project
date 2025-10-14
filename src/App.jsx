import React, {useState} from "react";
import AsciiConverter from "./AsciiConverter";
import { IMAGES } from "./assets/images";
import "./App.css";


function App(){
    return (
        <div className="container">
            <img src={IMAGES.asciiTable} alt="Picture of an ASCII Table"/>
            <h1>Inspired by <em>The Martian</em></h1>
            <AsciiConverter/>
            <img src={IMAGES.decoding} alt="Picture of Matt Damon's character decoding the numbers"/>
            <img src={IMAGES.howAlive} alt="Picture of how Alive decodd"/>
        </div>
    )
}

export default App;