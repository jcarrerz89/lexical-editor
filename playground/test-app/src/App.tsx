import "../../../dist/index.css"; // Update with your actual export
import {LexicalEditor} from "../../../dist"; // Update with your actual export
import './App.css'
import {useState} from "react";

function App() {
    const [html, setHtml] = useState<string>('');
    return (
        <div>
            <h1>Testing Lexical Editor</h1>
            <LexicalEditor html={html} onChange={setHtml} placeholder={"Write something"} />
        </div>
    )
}

export default App;
