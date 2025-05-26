import "../../../dist/index.css"; // Update with your actual export
import {LexicalEditor} from "../../../dist"; // Update with your actual export
import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [html, setHtml] = useState<string | null>(null);

    useEffect(() => {
        setHtml("<p class=\"editor-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">test</span></p>");
    })

    if (!html) {
        return "Loading...";
    }

    return (
        <div>
            <h1>Testing Lexical Editor</h1>
            <LexicalEditor html={html} onChange={setHtml} placeholder={"Write something"} />
        </div>
    )
}

export default App;
