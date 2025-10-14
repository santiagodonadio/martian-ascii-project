import React, {useState} from "react";
import "./App.css";

function AsciiConverter() {

    const [text, setText] = useState("HOWALIVE");

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const asciiMap = new Map();
    for(let i = 32; i <= 126; i++){
        asciiMap.set(String.fromCharCode(i), i)
    }

    const asciiCodes = text
        .split("")
        .map((char) => asciiMap.get(char) || "n/a")
        .join(" ");

    return(<div>
        <textarea
            value={text}
            onChange={handleChange}
            rows={5}
            cols={20}
        ></textarea>
        <p>Ascii Codes: {asciiCodes}</p>
    </div>);

}

export default AsciiConverter;
