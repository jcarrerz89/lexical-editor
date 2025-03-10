import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {useEffect, useRef} from "react";
import {$generateHtmlFromNodes} from "@lexical/html";

interface OnChangePluginProps {
    html?: string;
    onChange: (html: string) => void
}

const OnChangePlugin: React.FC<OnChangePluginProps> = ({html, onChange}) => {
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

export default OnChangePlugin;