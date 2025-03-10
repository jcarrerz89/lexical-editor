import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import ExampleTheme from './lexical.theme';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {useEffect, useLayoutEffect, useRef} from "react";
import {$getRoot, CLEAR_HISTORY_COMMAND} from "lexical";
import {$generateHtmlFromNodes, $generateNodesFromDOM} from '@lexical/html';

interface LexicalEditorProps {
    placeholder: string,
    html?: string,
    onChange: (text: string) => void,
}

interface SetInitialValuePluginProps {
    initHtml: string
}

interface MyOnChangePluginProps {
    html?: string;
    onChange: (html: string) => void
}

const editorConfig = {
    namespace: 'React.js Demo',
    nodes: [],
    onError(error: Error) {
        throw error;
    },
    theme: ExampleTheme,
};

const MyOnChangePlugin: React.FC<MyOnChangePluginProps> = ({html, onChange}) => {
    const [editor] = useLexicalComposerContext();
    const initHtml = useRef(html);

    useEffect(() => {
        return editor.registerUpdateListener(({editorState}) => {
            editorState.read(() => {
                const htmlString = $generateHtmlFromNodes(editor, null);

                if (initHtml.current !== htmlString) {
                    onChange(htmlString);
                }
            });
        });
    }, [editor, onChange]);

    return null;
}

export const SetInitialValuePlugin: React.FC<SetInitialValuePluginProps> = ({initHtml = ''}) => {
    const [editor] = useLexicalComposerContext();

    useLayoutEffect(() => {
        if (editor && initHtml) {
            editor.update(() => {
                const content = $generateHtmlFromNodes(editor, null);

                if (!!initHtml && content !== initHtml) {
                    const parser = new DOMParser();
                    const dom = parser.parseFromString(initHtml, 'text/html');
                    const nodes = $generateNodesFromDOM(editor, dom);

                    const root = $getRoot();
                    root.clear();

                    const selection = root.select();
                    selection.removeText();
                    selection.insertNodes(nodes);
                    editor.dispatchCommand(CLEAR_HISTORY_COMMAND, null);
                }
            });
        }
    }, [initHtml]);

    return null;
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
                        <MyOnChangePlugin html={html} onChange={onTextChange}/>
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
