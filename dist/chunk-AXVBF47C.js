// node_modules/@lexical/selection/LexicalSelection.node.mjs
var mod = await (process.env.NODE_ENV === "development" ? import("./LexicalSelection.dev-XIGP6AZX.js") : import("./LexicalSelection.prod-S5PBDYIV.js"));
var $addNodeStyle = mod.$addNodeStyle;
var $cloneWithProperties = mod.$cloneWithProperties;
var $getSelectionStyleValueForProperty = mod.$getSelectionStyleValueForProperty;
var $isAtNodeEnd = mod.$isAtNodeEnd;
var $isParentElementRTL = mod.$isParentElementRTL;
var $moveCaretSelection = mod.$moveCaretSelection;
var $moveCharacter = mod.$moveCharacter;
var $patchStyleText = mod.$patchStyleText;
var $selectAll = mod.$selectAll;
var $setBlocksType = mod.$setBlocksType;
var $shouldOverrideDefaultCharacterSelection = mod.$shouldOverrideDefaultCharacterSelection;
var $sliceSelectedTextNodeContent = mod.$sliceSelectedTextNodeContent;
var $trimTextContentFromAnchor = mod.$trimTextContentFromAnchor;
var $wrapNodes = mod.$wrapNodes;
var createDOMRange = mod.createDOMRange;
var createRectsFromDOMRange = mod.createRectsFromDOMRange;
var getStyleObjectFromCSS = mod.getStyleObjectFromCSS;
var trimTextContentFromAnchor = mod.trimTextContentFromAnchor;

export {
  $sliceSelectedTextNodeContent,
  createRectsFromDOMRange
};
//# sourceMappingURL=chunk-AXVBF47C.js.map