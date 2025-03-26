export const LexicalStyle = {
    body: {
        margin: "0",
        background: "#eee",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif",
        fontWeight: "500",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
    },
    otherH2: {
        fontSize: "18px",
        color: "#444",
        marginBottom: "7px",
    },
    otherA: {
        color: "#777",
        textDecoration: "underline",
        fontSize: "14px",
    },
    otherUl: {
        padding: "0",
        margin: "0",
        listStyleType: "none",
    },
    app: {
        fontFamily: "sans-serif",
        textAlign: "center",
    },
    h1: {
        fontSize: "24px",
        color: "#333",
    },
    ltr: {
        textAlign: "left",
    },
    rtl: {
        textAlign: "right",
    },
    editorContainer: {
        margin: "20px auto",
        borderRadius: "2px",
        maxWidth: "600px",
        color: "#000",
        position: "relative",
        lineHeight: "20px",
        fontWeight: "400",
        textAlign: "left",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
    },
    editorInner: {
        background: "#fff",
        position: "relative",
    },
    editorInput: {
        minHeight: "150px",
        resize: "none",
        fontSize: "15px",
        caretColor: "rgb(5, 5, 5)",
        position: "relative",
        tabSize: "1",
        outline: "0",
        padding: "15px 10px",
        // caretColor: "#444",
    },
    editorPlaceholder: {
        color: "#999",
        overflow: "hidden",
        position: "absolute",
        textOverflow: "ellipsis",
        top: "15px",
        left: "10px",
        fontSize: "15px",
        userSelect: "none",
        display: "inline-block",
        pointerEvents: "none",
    },
    editorTextBold: {
        fontWeight: "bold",
    },
    editorTextItalic: {
        fontStyle: "italic",
    },
    editorTextUnderline: {
        textDecoration: "underline",
    },
    editorTextStrikethrough: {
        textDecoration: "line-through",
    },
    editorTextUnderlineStrikethrough: {
        textDecoration: "underline line-through",
    },
    editorTextCode: {
        backgroundColor: "rgb(240, 242, 245)",
        padding: "1px 0.25rem",
        fontFamily: "Menlo, Consolas, Monaco, monospace",
        fontSize: "94%",
    },
    editorLink: {
        color: "rgb(33, 111, 219)",
        textDecoration: "none",
    },
    treeViewOutput: {
        display: "block",
        background: "#222",
        color: "#fff",
        padding: "5px",
        fontSize: "12px",
        whiteSpace: "pre-wrap",
        margin: "1px auto 10px auto",
        maxHeight: "250px",
        position: "relative",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        overflow: "auto",
        lineHeight: "14px",
    },
    editorCode: {
        backgroundColor: "rgb(240, 242, 245)",
        fontFamily: "Menlo, Consolas, Monaco, monospace",
        display: "block",
        padding: "8px 8px 8px 52px",
        lineHeight: "1.53",
        fontSize: "13px",
        margin: "0 0 8px",
        tabSize: "2",
        overflowX: "auto",
        position: "relative",
    },
    editorCodeBefore: {
        content: "attr(data-gutter)",
        position: "absolute",
        backgroundColor: "#eee",
        left: "0",
        top: "0",
        borderRight: "1px solid #ccc",
        padding: "8px",
        color: "#777",
        whiteSpace: "pre-wrap",
        textAlign: "right",
        minWidth: "25px",
    },
    editorCodeAfter: {
        content: "attr(data-highlight-language)",
        top: "0",
        right: "3px",
        padding: "3px",
        fontSize: "10px",
        textTransform: "uppercase",
        position: "absolute",
        color: "rgba(0, 0, 0, 0.5)",
    },
    editorTokenComment: {
        color: "slategray",
    },
    editorTokenPunctuation: {
        color: "#999",
    },
    editorTokenProperty: {
        color: "#905",
    },
    editorTokenSelector: {
        color: "#690",
    },
    editorTokenOperator: {
        color: "#9a6e3a",
    },
    editorTokenAttr: {
        color: "#07a",
    },
    editorTokenVariable: {
        color: "#e90",
    },
    editorTokenFunction: {
        color: "#dd4a68",
    },
    editorParagraph: {
        margin: "0",
        marginBottom: "8px",
        position: "relative",
    },
    editorParagraphLastChild: {
        marginBottom: "0",
    },
    editorHeadingH1: {
        fontSize: "24px",
        color: "rgb(5, 5, 5)",
        fontWeight: "400",
        margin: "0",
        marginBottom: "12px",
        padding: "0",
    },
    editorHeadingH2: {
        fontSize: "15px",
        color: "rgb(101, 103, 107)",
        fontWeight: "700",
        margin: "0",
        marginTop: "10px",
        padding: "0",
        textTransform: "uppercase",
    },
    editorQuote: {
        margin: "0",
        marginLeft: "20px",
        fontSize: "15px",
        color: "rgb(101, 103, 107)",
        borderLeftColor: "rgb(206, 208, 212)",
        borderLeftWidth: "4px",
        borderLeftStyle: "solid",
        paddingLeft: "16px",
    },
    editorListOl: {
        padding: "0",
        margin: "0",
        marginLeft: "16px",
    },
    editorListUl: {
        padding: "0",
        margin: "0",
        marginLeft: "16px",
    },
    editorListitem: {
        margin: "8px 32px",
    },
    editorNestedListitem: {
        listStyleType: "none",
    },
    preScrollbar: {
        background: "transparent",
        width: "10px",
    },
    preScrollbarThumb: {
        background: "#999",
    },
    debugTimetravelPanel: {
        overflow: "hidden",
        padding: "0 0 10px 0",
        margin: "auto",
        display: "flex",
    },
    debugTimetravelPanelSlider: {
        padding: "0",
        flex: "8",
    },
    debugTimetravelPanelButton: {
        padding: "0",
        border: "0",
        background: "none",
        flex: "1",
        color: "#fff",
        fontSize: "12px",
    },
    debugTimetravelPanelButtonHover: {
        textDecoration: "underline",
    },
    debugTimetravelButton: {
        border: "0",
        padding: "0",
        fontSize: "12px",
        top: "10px",
        right: "15px",
        position: "absolute",
        background: "none",
        color: "#fff",
    },
    debugTimetravelButtonHover: {
        textDecoration: "underline",
    },
    toolbar: {
        display: "flex",
        marginBottom: "1px",
        background: "#fff",
        padding: "4px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        verticalAlign: "middle",
    },
    toolbarButtonToolbarItem: {
        border: "0",
        display: "flex",
        background: "none",
        borderRadius: "10px",
        padding: "8px",
        cursor: "pointer",
        verticalAlign: "middle",
    },
    toolbarButtonToolbarItemDisabled: {
        cursor: "not-allowed",
    },
    toolbarButtonToolbarItemSpaced: {
        marginRight: "2px",
    },
    toolbarButtonToolbarItemIFormat: {
        backgroundSize: "contain",
        display: "inline-block",
        height: "18px",
        width: "18px",
        marginTop: "2px",
        verticalAlign: "-0.25em",
        // display: "flex",
        opacity: "0.6",
    },
    toolbarButtonToolbarItemDisabledIFormat: {
        opacity: "0.2",
    },
    toolbarButtonToolbarItemActive: {
        backgroundColor: "rgba(223, 232, 250, 0.3)",
    },
    toolbarButtonToolbarItemActiveI: {
        opacity: "1",
    },
    toolbarItemHoverNotDisabled: {
        backgroundColor: "#eee",
    },
    toolbarDivider: {
        width: "1px",
        backgroundColor: "#eee",
        margin: "0 4px",
    },
    toolbarItemText: {
        display: "flex",
        lineHeight: "20px",
        verticalAlign: "middle",
        fontSize: "14px",
        color: "#777",
        textOverflow: "ellipsis",
        width: "70px",
        overflow: "hidden",
        height: "20px",
        textAlign: "left",
    },
    toolbarItemIcon: {
        display: "flex",
        width: "20px",
        height: "20px",
        userSelect: "none",
        marginRight: "8px",
        lineHeight: "16px",
        backgroundSize: "contain",
    },
    iUndo: {
        backgroundImage: "url(icons/arrow-counterclockwise.svg)",
    },
    iRedo: {
        backgroundImage: "url(icons/arrow-clockwise.svg)",
    },
    iBold: {
        backgroundImage: "url(icons/type-bold.svg)",
    },
    iItalic: {
        backgroundImage: "url(icons/type-italic.svg)",
    },
    iUnderline: {
        backgroundImage: "url(icons/type-underline.svg)",
    },
    iStrikethrough: {
        backgroundImage: "url(icons/type-strikethrough.svg)",
    },
    iLeftAlign: {
        backgroundImage: "url(icons/text-left.svg)",
    },
    iCenterAlign: {
        backgroundImage: "url(icons/text-center.svg)",
    },
    iRightAlign: {
        backgroundImage: "url(icons/text-right.svg)",
    },
    iJustifyAlign: {
        backgroundImage: "url(icons/justify.svg)",
    },
};

export default LexicalStyle;


