# Lexical editor
Lexical based npm plugin to generate rich text and save as html. 

## Install
` npm install git@github.com:jcarrerz89/lexical-editor.git `

# Usage
```
import React, {useState} from "react";

const page = () => { 
    const [text, setText] = useState<string>('');
    
    return (
        <div className={"h-full flex flex-col"}>
            <LexicalEditor
                html={description}
                placeholder={"Write something"}
                onChange={(text: string) => setText(text)}/>
        </div>
    )
}
```