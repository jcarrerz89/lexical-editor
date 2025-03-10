interface LexicalEditorProps {
    placeholder: string;
    html?: string;
    onChange: (text: string) => void;
}
declare const LexicalEditor: React.FC<LexicalEditorProps>;

export { LexicalEditor };
