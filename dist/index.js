import {
  mergeRegister
} from "./chunk-5ABRQEPR.js";

// src/LexicalEditor.tsx
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

// src/lexical.theme.js
var lexical_theme_default = {
  code: "editor-code",
  heading: {
    h1: "editor-heading-h1",
    h2: "editor-heading-h2",
    h3: "editor-heading-h3",
    h4: "editor-heading-h4",
    h5: "editor-heading-h5"
  },
  image: "editor-image",
  link: "editor-link",
  list: {
    listitem: "editor-listitem",
    nested: {
      listitem: "editor-nested-listitem"
    },
    ol: "editor-list-ol",
    ul: "editor-list-ul"
  },
  ltr: "ltr",
  paragraph: "editor-paragraph",
  placeholder: "editor-placeholder",
  quote: "editor-quote",
  rtl: "rtl",
  text: {
    bold: "editor-text-bold",
    code: "editor-text-code",
    hashtag: "editor-text-hashtag",
    italic: "editor-text-italic",
    overflowed: "editor-text-overflowed",
    strikethrough: "editor-text-strikethrough",
    underline: "editor-text-underline",
    underlineStrikethrough: "editor-text-underlineStrikethrough"
  }
};

// src/plugins/ToolbarPlugin.tsx
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND
} from "lexical";
import { useCallback, useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LowPriority = 1;
function Divider() {
  return /* @__PURE__ */ jsx("div", { className: "divider" });
}
function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
    }
  }, []);
  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          $updateToolbar();
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        LowPriority
      )
    );
  }, [editor, $updateToolbar]);
  return /* @__PURE__ */ jsxs("div", { className: "toolbar", ref: toolbarRef, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        disabled: !canUndo,
        onClick: () => {
          editor.dispatchCommand(UNDO_COMMAND, void 0);
        },
        className: "toolbar-item spaced",
        "aria-label": "Undo",
        children: /* @__PURE__ */ jsx("i", { className: "format undo" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        disabled: !canRedo,
        onClick: () => {
          editor.dispatchCommand(REDO_COMMAND, void 0);
        },
        className: "toolbar-item",
        "aria-label": "Redo",
        children: /* @__PURE__ */ jsx("i", { className: "format redo" })
      }
    ),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        },
        className: "toolbar-item spaced " + (isBold ? "active" : ""),
        "aria-label": "Format Bold",
        children: /* @__PURE__ */ jsx("i", { className: "format bold" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        },
        className: "toolbar-item spaced " + (isItalic ? "active" : ""),
        "aria-label": "Format Italics",
        children: /* @__PURE__ */ jsx("i", { className: "format italic" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        },
        className: "toolbar-item spaced " + (isUnderline ? "active" : ""),
        "aria-label": "Format Underline",
        children: /* @__PURE__ */ jsx("i", { className: "format underline" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        },
        className: "toolbar-item spaced " + (isStrikethrough ? "active" : ""),
        "aria-label": "Format Strikethrough",
        children: /* @__PURE__ */ jsx("i", { className: "format strikethrough" })
      }
    ),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
        },
        className: "toolbar-item spaced",
        "aria-label": "Left Align",
        children: /* @__PURE__ */ jsx("i", { className: "format left-align" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
        },
        className: "toolbar-item spaced",
        "aria-label": "Center Align",
        children: /* @__PURE__ */ jsx("i", { className: "format center-align" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
        },
        className: "toolbar-item spaced",
        "aria-label": "Right Align",
        children: /* @__PURE__ */ jsx("i", { className: "format right-align" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
        },
        className: "toolbar-item",
        "aria-label": "Justify Align",
        children: /* @__PURE__ */ jsx("i", { className: "format justify-align" })
      }
    ),
    " "
  ] });
}

// src/LexicalEditor.tsx
import { useLexicalComposerContext as useLexicalComposerContext2 } from "@lexical/react/LexicalComposerContext";
import { useEffect as useEffect2, useLayoutEffect, useRef as useRef2 } from "react";
import { $getRoot, CLEAR_HISTORY_COMMAND } from "lexical";

// node_modules/@lexical/html/LexicalHtml.node.mjs
var mod = await (process.env.NODE_ENV === "development" ? import("./LexicalHtml.dev-YU7X4P5W.js") : import("./LexicalHtml.prod-U7EXUXMX.js"));
var $generateHtmlFromNodes = mod.$generateHtmlFromNodes;
var $generateNodesFromDOM = mod.$generateNodesFromDOM;

// src/LexicalEditor.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var editorConfig = {
  namespace: "React.js Demo",
  nodes: [],
  onError(error) {
    throw error;
  },
  theme: lexical_theme_default
};
var MyOnChangePlugin = ({ html, onChange }) => {
  const [editor] = useLexicalComposerContext2();
  const initHtml = useRef2(html);
  useEffect2(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const htmlString = $generateHtmlFromNodes(editor, null);
        if (initHtml.current !== htmlString) {
          onChange(htmlString);
        }
      });
    });
  }, [editor, onChange]);
  return null;
};
var SetInitialValuePlugin = ({ initHtml = "" }) => {
  const [editor] = useLexicalComposerContext2();
  useLayoutEffect(() => {
    if (editor && initHtml) {
      editor.update(() => {
        const content = $generateHtmlFromNodes(editor, null);
        if (!!initHtml && content !== initHtml) {
          const parser = new DOMParser();
          const dom = parser.parseFromString(initHtml, "text/html");
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
var LexicalEditor = ({ placeholder, html, onChange }) => {
  const onTextChange = (text) => {
    onChange(text);
  };
  return /* @__PURE__ */ jsx2("div", { className: "border", children: /* @__PURE__ */ jsx2(LexicalComposer, { initialConfig: editorConfig, children: /* @__PURE__ */ jsxs2("div", { className: "editor-container w-full", children: [
    /* @__PURE__ */ jsx2(ToolbarPlugin, {}),
    /* @__PURE__ */ jsxs2("div", { className: "editor-inner", children: [
      /* @__PURE__ */ jsx2(
        RichTextPlugin,
        {
          contentEditable: /* @__PURE__ */ jsx2(
            ContentEditable,
            {
              className: "editor-input",
              "aria-placeholder": placeholder,
              placeholder
            }
          ),
          ErrorBoundary: LexicalErrorBoundary
        }
      ),
      /* @__PURE__ */ jsx2(MyOnChangePlugin, { html, onChange: onTextChange }),
      /* @__PURE__ */ jsx2(SetInitialValuePlugin, { initHtml: html }),
      /* @__PURE__ */ jsx2(HistoryPlugin, {}),
      /* @__PURE__ */ jsx2(AutoFocusPlugin, {})
    ] })
  ] }) }) });
};
var LexicalEditor_default = LexicalEditor;
export {
  LexicalEditor_default as LexicalEditor
};
//# sourceMappingURL=index.js.map