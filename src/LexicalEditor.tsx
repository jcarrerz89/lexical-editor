import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import ExampleTheme from './lexical.theme';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import OnChangePlugin from "./plugins/OnChangePlugin";
import SetInitialValuePlugin from "./plugins/SetInitialValuePlugin";

interface LexicalEditorProps {
    placeholder: string,
    html?: string,
    onChange: (text: string) => void,
}

const editorConfig = {
    namespace: 'LexicalEditor',
    nodes: [],
    onError(error: Error) {
        throw error;
    },
    theme: ExampleTheme,
};

const LexicalEditor: React.FC<LexicalEditorProps> = ({placeholder, html, onChange}) => {
    const onTextChange = (text: string) => {
        onChange(text);
    }

    return (
        <div className="border">
            <LexicalComposer initialConfig={editorConfig}>
                <div className="editor-container w-full">
                    <ToolbarPlugin/>
                    <div className="editor-inner">
                        <RichTextPlugin
                            contentEditable={
                                <ContentEditable
                                    className="editor-input"
                                    aria-placeholder={placeholder}
                                    placeholder={placeholder}
                                />
                            }
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                        <OnChangePlugin html={html} onChange={onTextChange}/>
                        <SetInitialValuePlugin initHtml={html}/>
                        <HistoryPlugin/>
                        <AutoFocusPlugin/>
                    </div>
                </div>
            </LexicalComposer>
        </div>
    );
}

export default LexicalEditor;
