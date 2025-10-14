import React, {useState} from "react";
import AsciiConverter from "./AsciiConverter";
import "./App.css";


function App(){

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <section className="hero">
            
            <div className="main">
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
                <h1>Inspired by <em>The Martian</em></h1>
                <AsciiConverter/>
            </div>
        </section>
    )
}

const data = [
    {
        question: "Question 1",
        answer: "This is the answer1",
    },
    {
        question: "Question 2",
        answer: "This is the answer2",
    },
    {
        question: "Question 3",
        answer: "This is the answer3",
    },
]

export default App;