import {
  createRectsFromDOMRange
} from "./chunk-AXVBF47C.js";

// node_modules/@lexical/utils/LexicalUtils.prod.mjs
import { $getSelection as e, $isRangeSelection as t, TextNode as n, $getRoot as o, $isElementNode as r, $cloneWithProperties as l, $setSelection as i, $getPreviousSelection as s, $isRootOrShadowRoot as u, $isTextNode as c, $splitNode as f, $createParagraphNode as a } from "lexical";
import { $splitNode, isBlockDomNode, isHTMLAnchorElement, isHTMLElement, isInlineDomNode } from "lexical";
function g(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var p = g(function(e2) {
  const t2 = new URLSearchParams();
  t2.append("code", e2);
  for (let e3 = 1; e3 < arguments.length; e3++) t2.append("v", arguments[e3]);
  throw Error(`Minified Lexical error #${e2}; visit https://lexical.dev/docs/error?${t2} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
var h = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
var m = h && "documentMode" in document ? document.documentMode : null;
var v = h && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
var y = h && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
var w = !(!h || !("InputEvent" in window) || m) && "getTargetRanges" in new window.InputEvent("input");
var E = h && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
var P = h && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var S = h && /Android/.test(navigator.userAgent);
var x = h && /^(?=.*Chrome).*/i.test(navigator.userAgent);
var N = h && S && x;
var A = h && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !x;
function L(...e2) {
  const t2 = [];
  for (const n2 of e2) if (n2 && "string" == typeof n2) for (const [e3] of n2.matchAll(/\S+/g)) t2.push(e3);
  return t2;
}
function b(...e2) {
  return () => {
    for (let t2 = e2.length - 1; t2 >= 0; t2--) e2[t2]();
    e2.length = 0;
  };
}
function T(e2) {
  return `${e2}px`;
}
var M = { attributes: true, characterData: true, childList: true, subtree: true };
function C(e2, t2, n2) {
  let o2 = null, r2 = null, l2 = null, i2 = [];
  const s2 = document.createElement("div");
  function u2() {
    null === o2 && p(182), null === r2 && p(183);
    const { left: l3, top: u3 } = o2.getBoundingClientRect(), c3 = r2, f3 = createRectsFromDOMRange(e2, t2);
    s2.isConnected || c3.append(s2);
    let a2 = false;
    for (let e3 = 0; e3 < f3.length; e3++) {
      const t3 = f3[e3], n3 = i2[e3] || document.createElement("div"), o3 = n3.style;
      "absolute" !== o3.position && (o3.position = "absolute", a2 = true);
      const r3 = T(t3.left - l3);
      o3.left !== r3 && (o3.left = r3, a2 = true);
      const c4 = T(t3.top - u3);
      o3.top !== c4 && (n3.style.top = c4, a2 = true);
      const d = T(t3.width);
      o3.width !== d && (n3.style.width = d, a2 = true);
      const g2 = T(t3.height);
      o3.height !== g2 && (n3.style.height = g2, a2 = true), n3.parentNode !== s2 && (s2.append(n3), a2 = true), i2[e3] = n3;
    }
    for (; i2.length > f3.length; ) i2.pop();
    a2 && n2(i2);
  }
  function c2() {
    r2 = null, o2 = null, null !== l2 && l2.disconnect(), l2 = null, s2.remove();
    for (const e3 of i2) e3.remove();
    i2 = [];
  }
  const f2 = e2.registerRootListener(function t3() {
    const n3 = e2.getRootElement();
    if (null === n3) return c2();
    const i3 = n3.parentElement;
    if (!(i3 instanceof HTMLElement)) return c2();
    c2(), o2 = n3, r2 = i3, l2 = new MutationObserver((n4) => {
      const l3 = e2.getRootElement(), i4 = l3 && l3.parentElement;
      if (l3 !== o2 || i4 !== r2) return t3();
      for (const e3 of n4) if (!s2.contains(e3.target)) return u2();
    }), l2.observe(i3, M), u2();
  });
  return () => {
    f2(), c2();
  };
}
function B(o2, r2) {
  let l2 = null, i2 = null, s2 = null, u2 = null, c2 = () => {
  };
  function f2(f3) {
    f3.read(() => {
      const f4 = e();
      if (!t(f4)) return l2 = null, i2 = null, s2 = null, u2 = null, c2(), void (c2 = () => {
      });
      const { anchor: a2, focus: d } = f4, g2 = a2.getNode(), h2 = g2.getKey(), m2 = a2.offset, v2 = d.getNode(), y2 = v2.getKey(), w2 = d.offset, E2 = o2.getElementByKey(h2), P2 = o2.getElementByKey(y2), S2 = null === l2 || null === E2 || m2 !== i2 || h2 !== l2.getKey() || g2 !== l2 && (!(l2 instanceof n) || g2.updateDOM(l2, E2, o2._config)), x2 = null === s2 || null === P2 || w2 !== u2 || y2 !== s2.getKey() || v2 !== s2 && (!(s2 instanceof n) || v2.updateDOM(s2, P2, o2._config));
      if (S2 || x2) {
        const e2 = o2.getElementByKey(a2.getNode().getKey()), t2 = o2.getElementByKey(d.getNode().getKey());
        if (null !== e2 && null !== t2 && "SPAN" === e2.tagName && "SPAN" === t2.tagName) {
          const n2 = document.createRange();
          let l3, i3, s3, u3;
          d.isBefore(a2) ? (l3 = t2, i3 = d.offset, s3 = e2, u3 = a2.offset) : (l3 = e2, i3 = a2.offset, s3 = t2, u3 = d.offset);
          const f5 = l3.firstChild;
          null === f5 && p(181);
          const g3 = s3.firstChild;
          null === g3 && p(181), n2.setStart(f5, i3), n2.setEnd(g3, u3), c2(), c2 = C(o2, n2, (e3) => {
            for (const t3 of e3) {
              const e4 = t3.style;
              "Highlight" !== e4.background && (e4.background = "Highlight"), "HighlightText" !== e4.color && (e4.color = "HighlightText"), "-1" !== e4.zIndex && (e4.zIndex = "-1"), "none" !== e4.pointerEvents && (e4.pointerEvents = "none"), e4.marginTop !== T(-1.5) && (e4.marginTop = T(-1.5)), e4.paddingTop !== T(4) && (e4.paddingTop = T(4)), e4.paddingBottom !== T(0) && (e4.paddingBottom = T(0));
            }
            void 0 !== r2 && r2(e3);
          });
        }
      }
      l2 = g2, i2 = m2, s2 = v2, u2 = w2;
    });
  }
  return f2(o2.getEditorState()), b(o2.registerUpdateListener(({ editorState: e2 }) => f2(e2)), c2, () => {
    c2();
  });
}
var _ = w;
var K = h;
var O = S;
var R = N;
var I = v;
var D = A;
var H = x;
var z = y;
var k = P;
var F = E;
function $(e2, ...t2) {
  const n2 = L(...t2);
  n2.length > 0 && e2.classList.add(...n2);
}
function U(e2, ...t2) {
  const n2 = L(...t2);
  n2.length > 0 && e2.classList.remove(...n2);
}
function W(e2, t2) {
  for (const n2 of t2) if (e2.type.startsWith(n2)) return true;
  return false;
}
function j(e2, t2) {
  const n2 = e2[Symbol.iterator]();
  return new Promise((e3, o2) => {
    const r2 = [], l2 = () => {
      const { done: i2, value: s2 } = n2.next();
      if (i2) return e3(r2);
      const u2 = new FileReader();
      u2.addEventListener("error", o2), u2.addEventListener("load", () => {
        const e4 = u2.result;
        "string" == typeof e4 && r2.push({ file: s2, result: e4 }), l2();
      }), W(s2, t2) ? u2.readAsDataURL(s2) : l2();
    };
    l2();
  });
}
function V(e2, t2) {
  const n2 = [], l2 = (e2 || o()).getLatest(), i2 = t2 || r(l2) && l2.getLastDescendant() || l2;
  let s2 = l2, u2 = function(e3) {
    let t3 = e3, n3 = 0;
    for (; null !== (t3 = t3.getParent()); ) n3++;
    return n3;
  }(s2);
  for (; null !== s2 && !s2.is(i2); ) if (n2.push({ depth: u2, node: s2 }), r(s2) && s2.getChildrenSize() > 0) s2 = s2.getFirstChild(), u2++;
  else {
    let e3 = null;
    for (; null === e3 && null !== s2; ) e3 = s2.getNextSibling(), null === e3 ? (s2 = s2.getParent(), u2--) : s2 = e3;
  }
  return null !== s2 && s2.is(i2) && n2.push({ depth: u2, node: s2 }), n2;
}
function q(e2) {
  let t2 = e2;
  if (r(t2) && t2.getChildrenSize() > 0) t2 = t2.getLastChild();
  else {
    let e3 = null;
    for (; null === e3 && null !== t2; ) e3 = t2.getPreviousSibling(), t2 = null === e3 ? t2.getParent() : e3;
  }
  return t2;
}
function G(e2, t2) {
  let n2 = e2;
  for (; null != n2; ) {
    if (n2 instanceof t2) return n2;
    n2 = n2.getParent();
  }
  return null;
}
function J(e2) {
  const t2 = Q(e2, (e3) => r(e3) && !e3.isInline());
  return r(t2) || p(4, e2.__key), t2;
}
var Q = (e2, t2) => {
  let n2 = e2;
  for (; n2 !== o() && null != n2; ) {
    if (t2(n2)) return n2;
    n2 = n2.getParent();
  }
  return null;
};
function X(e2, t2, n2, o2) {
  const r2 = (e3) => e3 instanceof t2;
  return e2.registerNodeTransform(t2, (e3) => {
    const t3 = ((e4) => {
      const t4 = e4.getChildren();
      for (let e5 = 0; e5 < t4.length; e5++) {
        const n4 = t4[e5];
        if (r2(n4)) return null;
      }
      let n3 = e4, o3 = e4;
      for (; null !== n3; ) if (o3 = n3, n3 = n3.getParent(), r2(n3)) return { child: o3, parent: n3 };
      return null;
    })(e3);
    if (null !== t3) {
      const { child: r3, parent: l2 } = t3;
      if (r3.is(e3)) {
        o2(l2, e3);
        const t4 = r3.getNextSiblings(), i2 = t4.length;
        if (l2.insertAfter(r3), 0 !== i2) {
          const e4 = n2(l2);
          r3.insertAfter(e4);
          for (let n3 = 0; n3 < i2; n3++) e4.append(t4[n3]);
        }
        l2.canBeEmpty() || 0 !== l2.getChildrenSize() || l2.remove();
      }
    }
  });
}
function Y(e2, t2) {
  const n2 = /* @__PURE__ */ new Map(), o2 = e2._pendingEditorState;
  for (const [e3, o3] of t2._nodeMap) n2.set(e3, l(o3));
  o2 && (o2._nodeMap = n2), e2._dirtyType = 2;
  const r2 = t2._selection;
  i(null === r2 ? null : r2.clone());
}
function Z(n2) {
  const r2 = e() || s();
  if (t(r2)) {
    const { focus: e2 } = r2, t2 = e2.getNode(), o2 = e2.offset;
    if (u(t2)) {
      const e3 = t2.getChildAtIndex(o2);
      null == e3 ? t2.append(n2) : e3.insertBefore(n2), n2.selectNext();
    } else {
      let e3, r3;
      c(t2) ? (e3 = t2.getParentOrThrow(), r3 = t2.getIndexWithinParent(), o2 > 0 && (r3 += 1, t2.splitText(o2))) : (e3 = t2, r3 = o2);
      const [, l2] = f(e3, r3);
      l2.insertBefore(n2), l2.selectStart();
    }
  } else {
    if (null != r2) {
      const e3 = r2.getNodes();
      e3[e3.length - 1].getTopLevelElementOrThrow().insertAfter(n2);
    } else {
      o().append(n2);
    }
    const e2 = a();
    n2.insertAfter(e2), e2.select();
  }
  return n2.getLatest();
}
function ee(e2, t2) {
  const n2 = t2();
  return e2.replace(n2), n2.append(e2), n2;
}
function te(e2, t2) {
  return null !== e2 && Object.getPrototypeOf(e2).constructor.name === t2.name;
}
function ne(e2, t2) {
  const n2 = [];
  for (let o2 = 0; o2 < e2.length; o2++) {
    const r2 = t2(e2[o2]);
    null !== r2 && n2.push(r2);
  }
  return n2;
}
function oe(e2, t2) {
  const n2 = e2.getFirstChild();
  null !== n2 ? n2.insertBefore(t2) : e2.append(t2);
}
function re(e2) {
  if (z) return 1;
  let t2 = 1;
  for (; e2; ) t2 *= Number(window.getComputedStyle(e2).getPropertyValue("zoom")), e2 = e2.parentElement;
  return t2;
}
function le(e2) {
  return null !== e2._parentEditor;
}
export {
  V as $dfs,
  ne as $filter,
  Q as $findMatchingParent,
  J as $getNearestBlockElementAncestorOrThrow,
  G as $getNearestNodeOfType,
  q as $getNextRightPreorderNode,
  oe as $insertFirst,
  Z as $insertNodeToNearestRoot,
  le as $isEditorIsNestedEditor,
  Y as $restoreEditorState,
  $splitNode,
  ee as $wrapNodeInElement,
  _ as CAN_USE_BEFORE_INPUT,
  K as CAN_USE_DOM,
  O as IS_ANDROID,
  R as IS_ANDROID_CHROME,
  I as IS_APPLE,
  D as IS_APPLE_WEBKIT,
  H as IS_CHROME,
  z as IS_FIREFOX,
  k as IS_IOS,
  F as IS_SAFARI,
  $ as addClassNamesToElement,
  re as calculateZoomLevel,
  isBlockDomNode,
  isHTMLAnchorElement,
  isHTMLElement,
  isInlineDomNode,
  W as isMimeType,
  B as markSelection,
  j as mediaFileReader,
  b as mergeRegister,
  te as objectKlassEquals,
  C as positionNodeOnRange,
  X as registerNestedElementResolver,
  U as removeClassNamesFromElement
};
//# sourceMappingURL=LexicalUtils.prod-2TDXGMHF.js.map