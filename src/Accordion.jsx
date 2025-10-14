import React, { useState } from "react";
import "./Accordion.css";

function AccordionPart (){

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className="accordion">
                {data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <h3>{item.question}</h3>
                            <span>{selected === i? '-': '+'}</span>
                        </div>
                        <div className={
                            selected === i? 'content show' : 'content'
                        }
                        >   
                            {item.answer}</div>
                    </div>
                ))}
            </div>
    )
}

const data = [
    {
        question: "Hexadecimal Scene",
        answer: "https://www.youtube.com/watch?v=NttUBB98zg4&t=154s",
    },
]

export default AccordionPart;
