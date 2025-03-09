interface ILexicalEditor {
    placeholder: string;
    html?: string;
    onChange: (text: string) => void;
}
declare const LexicalEditor: React.FC<ILexicalEditor>;

export { LexicalEditor };
