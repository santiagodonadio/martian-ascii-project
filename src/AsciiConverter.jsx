import React, { useState } from "react";
import "./AsciiConverter.css";

function AsciiConverter() {

    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const asciiMap = new Map();

        asciiMap.set(" ", 20)
        asciiMap.set("!", 21)
        asciiMap.set('"', 22)
        asciiMap.set('#', 23)
        asciiMap.set("%", 24)
        asciiMap.set("$", 25)
        asciiMap.set("%", 26)
        asciiMap.set("'", 27) /* --------- */
        asciiMap.set("'", 28)
        asciiMap.set("(", 29)
        asciiMap.set(")", "2A")
        asciiMap.set("*", "2B")
        asciiMap.set("+", "2C")
        asciiMap.set(",", "2D")
        asciiMap.set("-", "2E")
        asciiMap.set("/", "2F")
        
        asciiMap.set("0",30)
        asciiMap.set("1", 31)
        asciiMap.set("2", 32)
        asciiMap.set("3", 33)
        asciiMap.set("4", 34)
        asciiMap.set("5", 35)
        asciiMap.set("6", 36)
        asciiMap.set("7", 37) 
        asciiMap.set("8", 38)
        asciiMap.set("9", 39)
        asciiMap.set(":", "3A")
        asciiMap.set(";", "3B")
        asciiMap.set("<", "3C")
        asciiMap.set("=", "3D")
        asciiMap.set(">", "3E") 
        asciiMap.set("?", "3F")
        
        asciiMap.set("@",40)
        asciiMap.set("A", 41)
        asciiMap.set("B", 42)
        asciiMap.set("C", 43)
        asciiMap.set("D", 44)
        asciiMap.set("E", 45)
        asciiMap.set("F", 46)
        asciiMap.set("G", 47) 
        asciiMap.set("H", 48)
        asciiMap.set("I", 49)
        asciiMap.set("J", "4A")
        asciiMap.set("K", "4B")
        asciiMap.set("L", "4C")
        asciiMap.set("M", "4D")
        asciiMap.set("N", "4E")
        asciiMap.set("O", "4F")

        asciiMap.set("P",50)
        asciiMap.set("Q", 51)
        asciiMap.set("R", 52)
        asciiMap.set("S", 53)
        asciiMap.set("T", 54)
        asciiMap.set("U", 55)
        asciiMap.set("V", 56)
        asciiMap.set("W", 57) 
        asciiMap.set("X", 58)
        asciiMap.set("Y", 59)
        asciiMap.set("Z", "5A")
        asciiMap.set("[", "5B")
        asciiMap.set("\\", "5C") /* --------- */
        asciiMap.set("]", "5D")
        asciiMap.set("^", "5E")
        asciiMap.set("_", "5F")

        asciiMap.set("`", 60)
        asciiMap.set("a", 61)
        asciiMap.set("b", 62)
        asciiMap.set("c", 63)
        asciiMap.set("d", 64)
        asciiMap.set("e", 65)
        asciiMap.set("f", 66)
        asciiMap.set("g", 67) 
        asciiMap.set("h", 68)
        asciiMap.set("i", 69)
        asciiMap.set("j", "6A")
        asciiMap.set("k", "6B")
        asciiMap.set("l", "6C")
        asciiMap.set("m", "6D")
        asciiMap.set("n", "6E")
        asciiMap.set("o", "6F")

        asciiMap.set("p", 70)
        asciiMap.set("q", 71)
        asciiMap.set("r", 72)
        asciiMap.set("s", 73)
        asciiMap.set("t", 74)
        asciiMap.set("u", 75)
        asciiMap.set("v", 76)
        asciiMap.set("w", 77) 
        asciiMap.set("x", 78)
        asciiMap.set("y", 79)
        asciiMap.set("z", "7A")
        asciiMap.set("{", "7B")
        asciiMap.set("|", "7C")
        asciiMap.set("}", "7D")
        asciiMap.set(".", "7E")
        /* asciiMap.set("", "7F") */



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
            placeholder="type here"
        ></textarea>
        <p className="ascii-text"><br/>Hex Codes: {asciiCodes}</p>
    </div>);

}

export default AsciiConverter;