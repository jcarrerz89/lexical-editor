// node_modules/@lexical/selection/LexicalSelection.prod.mjs
import { $isTextNode as e, $getCharacterOffsets as t, $isElementNode as n, $isRootNode as l, $getNodeByKey as o, $getPreviousSelection as r, $createTextNode as s, $isRangeSelection as i, $isTokenOrSegmented as c, $getRoot as f, $isRootOrShadowRoot as u, $hasAncestor as g, $isLeafNode as a, $setSelection as d, $getAdjacentNode as p, $isDecoratorNode as h, $isLineBreakNode as y } from "lexical";
import { $cloneWithProperties } from "lexical";
function m(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var T = m(function(e2) {
  const t2 = new URLSearchParams();
  t2.append("code", e2);
  for (let e3 = 1; e3 < arguments.length; e3++) t2.append("v", arguments[e3]);
  throw Error(`Minified Lexical error #${e2}; visit https://lexical.dev/docs/error?${t2} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
var x = /* @__PURE__ */ new Map();
function S(e2) {
  let t2 = e2;
  for (; null != t2; ) {
    if (t2.nodeType === Node.TEXT_NODE) return t2;
    t2 = t2.firstChild;
  }
  return null;
}
function v(e2) {
  const t2 = e2.parentNode;
  if (null == t2) throw new Error("Should never happen");
  return [t2, Array.from(t2.childNodes).indexOf(e2)];
}
function C(t2, n2, l2, o2, r2) {
  const s2 = n2.getKey(), i2 = o2.getKey(), c2 = document.createRange();
  let f2 = t2.getElementByKey(s2), u2 = t2.getElementByKey(i2), g2 = l2, a2 = r2;
  if (e(n2) && (f2 = S(f2)), e(o2) && (u2 = S(u2)), void 0 === n2 || void 0 === o2 || null === f2 || null === u2) return null;
  "BR" === f2.nodeName && ([f2, g2] = v(f2)), "BR" === u2.nodeName && ([u2, a2] = v(u2));
  const d2 = f2.firstChild;
  f2 === u2 && null != d2 && "BR" === d2.nodeName && 0 === g2 && 0 === a2 && (a2 = 1);
  try {
    c2.setStart(f2, g2), c2.setEnd(u2, a2);
  } catch (e2) {
    return null;
  }
  return !c2.collapsed || g2 === a2 && s2 === i2 || (c2.setStart(u2, a2), c2.setEnd(f2, g2)), c2;
}
function P(e2, t2) {
  const n2 = e2.getRootElement();
  if (null === n2) return [];
  const l2 = n2.getBoundingClientRect(), o2 = getComputedStyle(n2), r2 = parseFloat(o2.paddingLeft) + parseFloat(o2.paddingRight), s2 = Array.from(t2.getClientRects());
  let i2, c2 = s2.length;
  s2.sort((e3, t3) => {
    const n3 = e3.top - t3.top;
    return Math.abs(n3) <= 3 ? e3.left - t3.left : n3;
  });
  for (let e3 = 0; e3 < c2; e3++) {
    const t3 = s2[e3], n3 = i2 && i2.top <= t3.top && i2.top + i2.height > t3.top && i2.left + i2.width > t3.left, o3 = t3.width + r2 === l2.width;
    n3 || o3 ? (s2.splice(e3--, 1), c2--) : i2 = t3;
  }
  return s2;
}
function w(e2) {
  const t2 = {}, n2 = e2.split(";");
  for (const e3 of n2) if ("" !== e3) {
    const [n3, l2] = e3.split(/:([^]+)/);
    n3 && l2 && (t2[n3.trim()] = l2.trim());
  }
  return t2;
}
function N(e2) {
  let t2 = x.get(e2);
  return void 0 === t2 && (t2 = w(e2), x.set(e2, t2)), t2;
}
function E(e2, n2) {
  const l2 = e2.getStartEndPoints();
  if (n2.isSelected(e2) && !n2.isSegmented() && !n2.isToken() && null !== l2) {
    const [o2, r2] = l2, s2 = e2.isBackward(), i2 = o2.getNode(), c2 = r2.getNode(), f2 = n2.is(i2), u2 = n2.is(c2);
    if (f2 || u2) {
      const [l3, o3] = t(e2), r3 = i2.is(c2), f3 = n2.is(s2 ? c2 : i2), u3 = n2.is(s2 ? i2 : c2);
      let g2, a2 = 0;
      if (r3) a2 = l3 > o3 ? o3 : l3, g2 = l3 > o3 ? l3 : o3;
      else if (f3) {
        a2 = s2 ? o3 : l3, g2 = void 0;
      } else if (u3) {
        a2 = 0, g2 = s2 ? l3 : o3;
      }
      return n2.__text = n2.__text.slice(a2, g2), n2;
    }
  }
  return n2;
}
function F(e2) {
  if ("text" === e2.type) return e2.offset === e2.getNode().getTextContentSize();
  const t2 = e2.getNode();
  return n(t2) || T(177), e2.offset === t2.getChildrenSize();
}
function K(t2, c2, f2) {
  let u2 = c2.getNode(), g2 = f2;
  if (n(u2)) {
    const e2 = u2.getDescendantByIndex(c2.offset);
    null !== e2 && (u2 = e2);
  }
  for (; g2 > 0 && null !== u2; ) {
    if (n(u2)) {
      const e2 = u2.getLastDescendant();
      null !== e2 && (u2 = e2);
    }
    let f3 = u2.getPreviousSibling(), a2 = 0;
    if (null === f3) {
      let e2 = u2.getParentOrThrow(), t3 = e2.getPreviousSibling();
      for (; null === t3; ) {
        if (e2 = e2.getParent(), null === e2) {
          f3 = null;
          break;
        }
        t3 = e2.getPreviousSibling();
      }
      null !== e2 && (a2 = e2.isInline() ? 0 : 2, f3 = t3);
    }
    let d2 = u2.getTextContent();
    "" === d2 && n(u2) && !u2.isInline() && (d2 = "\n\n");
    const p2 = d2.length;
    if (!e(u2) || g2 >= p2) {
      const e2 = u2.getParent();
      u2.remove(), null == e2 || 0 !== e2.getChildrenSize() || l(e2) || e2.remove(), g2 -= p2 + a2, u2 = f3;
    } else {
      const n2 = u2.getKey(), l2 = t2.getEditorState().read(() => {
        const t3 = o(n2);
        return e(t3) && t3.isSimpleText() ? t3.getTextContent() : null;
      }), f4 = p2 - g2, a3 = d2.slice(0, f4);
      if (null !== l2 && l2 !== d2) {
        const e2 = r();
        let t3 = u2;
        if (u2.isSimpleText()) u2.setTextContent(l2);
        else {
          const e3 = s(l2);
          u2.replace(e3), t3 = e3;
        }
        if (i(e2) && e2.isCollapsed()) {
          const n3 = e2.anchor.offset;
          t3.select(n3, n3);
        }
      } else if (u2.isSimpleText()) {
        const e2 = c2.key === n2;
        let t3 = c2.offset;
        t3 < g2 && (t3 = p2);
        const l3 = e2 ? t3 - g2 : 0, o2 = e2 ? t3 : f4;
        if (e2 && 0 === l3) {
          const [e3] = u2.splitText(l3, o2);
          e3.remove();
        } else {
          const [, e3] = u2.splitText(l3, o2);
          e3.remove();
        }
      } else {
        const e2 = s(a3);
        u2.replace(e2);
      }
      g2 = 0;
    }
  }
}
function I(e2) {
  const t2 = e2.getStyle(), n2 = w(t2);
  x.set(t2, n2);
}
function O(e2, t2) {
  const n2 = N("getStyle" in e2 ? e2.getStyle() : e2.style), l2 = Object.entries(t2).reduce((t3, [l3, o3]) => ("function" == typeof o3 ? t3[l3] = o3(n2[l3], e2) : null === o3 ? delete t3[l3] : t3[l3] = o3, t3), { ...n2 }), o2 = function(e3) {
    let t3 = "";
    for (const n3 in e3) n3 && (t3 += `${n3}: ${e3[n3]};`);
    return t3;
  }(l2);
  e2.setStyle(o2), x.set(o2, l2);
}
function B(t2, n2) {
  const l2 = t2.getNodes(), o2 = l2.length, r2 = t2.getStartEndPoints();
  if (null === r2) return;
  const [s2, f2] = r2, u2 = o2 - 1;
  let g2 = l2[0], a2 = l2[u2];
  if (t2.isCollapsed() && i(t2)) return void O(t2, n2);
  const d2 = g2.getTextContent().length, p2 = f2.offset;
  let h2 = s2.offset;
  const y2 = s2.isBefore(f2);
  let m2 = y2 ? h2 : p2, T2 = y2 ? p2 : h2;
  const x2 = y2 ? s2.type : f2.type, S2 = y2 ? f2.type : s2.type, v2 = y2 ? f2.key : s2.key;
  if (e(g2) && m2 === d2) {
    const t3 = g2.getNextSibling();
    e(t3) && (h2 = 0, m2 = 0, g2 = t3);
  }
  if (1 === l2.length) {
    if (e(g2) && g2.canHaveFormat()) {
      if (m2 = "element" === x2 ? 0 : h2 > p2 ? p2 : h2, T2 = "element" === S2 ? d2 : h2 > p2 ? h2 : p2, m2 === T2) return;
      if (c(g2) || 0 === m2 && T2 === d2) O(g2, n2), g2.select(m2, T2);
      else {
        const e2 = g2.splitText(m2, T2), t3 = 0 === m2 ? e2[0] : e2[1];
        O(t3, n2), t3.select(0, T2 - m2);
      }
    }
  } else {
    if (e(g2) && m2 < g2.getTextContentSize() && g2.canHaveFormat() && (0 === m2 || c(g2) || (g2 = g2.splitText(m2)[1], m2 = 0, y2 ? s2.set(g2.getKey(), m2, "text") : f2.set(g2.getKey(), m2, "text")), O(g2, n2)), e(a2) && a2.canHaveFormat()) {
      const e2 = a2.getTextContent().length;
      a2.__key !== v2 && 0 !== T2 && (T2 = e2), T2 === e2 || c(a2) || ([a2] = a2.splitText(T2)), 0 === T2 && "element" !== S2 || O(a2, n2);
    }
    for (let t3 = 1; t3 < u2; t3++) {
      const o3 = l2[t3], r3 = o3.getKey();
      e(o3) && o3.canHaveFormat() && r3 !== g2.getKey() && r3 !== a2.getKey() && !o3.isToken() && O(o3, n2);
    }
  }
}
function k(e2, t2) {
  if (null === e2) return;
  const l2 = e2.getStartEndPoints(), o2 = l2 ? l2[0] : null;
  if (null !== o2 && "root" === o2.key) {
    const e3 = t2(), n2 = f(), l3 = n2.getFirstChild();
    return void (l3 ? l3.replace(e3, true) : n2.append(e3));
  }
  const r2 = e2.getNodes(), s2 = null !== o2 && function(e3, t3) {
    let n2 = e3;
    for (; null !== n2 && null !== n2.getParent() && !t3(n2); ) n2 = n2.getParentOrThrow();
    return t3(n2) ? n2 : null;
  }(o2.getNode(), U);
  s2 && -1 === r2.indexOf(s2) && r2.push(s2);
  for (let e3 = 0; e3 < r2.length; e3++) {
    const l3 = r2[e3];
    if (!U(l3)) continue;
    n(l3) || T(178);
    const o3 = t2();
    o3.setFormat(l3.getFormatType()), o3.setIndent(l3.getIndent()), l3.replace(o3, true);
  }
}
function b(e2) {
  return e2.getNode().isAttached();
}
function R(e2) {
  let t2 = e2;
  for (; null !== t2 && !u(t2); ) {
    const e3 = t2.getLatest(), n2 = t2.getParent();
    0 === e3.getChildrenSize() && t2.remove(true), t2 = n2;
  }
}
function _(e2, t2, n2 = null) {
  const l2 = e2.getStartEndPoints(), o2 = l2 ? l2[0] : null, r2 = e2.getNodes(), s2 = r2.length;
  if (null !== o2 && (0 === s2 || 1 === s2 && "element" === o2.type && 0 === o2.getNode().getChildrenSize())) {
    const e3 = "text" === o2.type ? o2.getNode().getParentOrThrow() : o2.getNode(), l3 = e3.getChildren();
    let r3 = t2();
    return r3.setFormat(e3.getFormatType()), r3.setIndent(e3.getIndent()), l3.forEach((e4) => r3.append(e4)), n2 && (r3 = n2.append(r3)), void e3.replace(r3);
  }
  let i2 = null, c2 = [];
  for (let l3 = 0; l3 < s2; l3++) {
    const o3 = r2[l3];
    u(o3) ? (z(e2, c2, c2.length, t2, n2), c2 = [], i2 = o3) : null === i2 || null !== i2 && g(o3, i2) ? c2.push(o3) : (z(e2, c2, c2.length, t2, n2), c2 = [o3]);
  }
  z(e2, c2, c2.length, t2, n2);
}
function z(e2, t2, l2, o2, s2 = null) {
  if (0 === t2.length) return;
  const c2 = t2[0], f2 = /* @__PURE__ */ new Map(), g2 = [];
  let p2 = n(c2) ? c2 : c2.getParentOrThrow();
  p2.isInline() && (p2 = p2.getParentOrThrow());
  let h2 = false;
  for (; null !== p2; ) {
    const e3 = p2.getPreviousSibling();
    if (null !== e3) {
      p2 = e3, h2 = true;
      break;
    }
    if (p2 = p2.getParentOrThrow(), u(p2)) break;
  }
  const y2 = /* @__PURE__ */ new Set();
  for (let e3 = 0; e3 < l2; e3++) {
    const l3 = t2[e3];
    n(l3) && 0 === l3.getChildrenSize() && y2.add(l3.getKey());
  }
  const m2 = /* @__PURE__ */ new Set();
  for (let e3 = 0; e3 < l2; e3++) {
    const l3 = t2[e3];
    let r2 = l3.getParent();
    if (null !== r2 && r2.isInline() && (r2 = r2.getParent()), null !== r2 && a(l3) && !m2.has(l3.getKey())) {
      const e4 = r2.getKey();
      if (void 0 === f2.get(e4)) {
        const t3 = o2();
        t3.setFormat(r2.getFormatType()), t3.setIndent(r2.getIndent()), g2.push(t3), f2.set(e4, t3), r2.getChildren().forEach((e5) => {
          t3.append(e5), m2.add(e5.getKey()), n(e5) && e5.getChildrenKeys().forEach((e6) => m2.add(e6));
        }), R(r2);
      }
    } else if (y2.has(l3.getKey())) {
      n(l3) || T(179);
      const e4 = o2();
      e4.setFormat(l3.getFormatType()), e4.setIndent(l3.getIndent()), g2.push(e4), l3.remove(true);
    }
  }
  if (null !== s2) for (let e3 = 0; e3 < g2.length; e3++) {
    const t3 = g2[e3];
    s2.append(t3);
  }
  let x2 = null;
  if (u(p2)) if (h2) if (null !== s2) p2.insertAfter(s2);
  else for (let e3 = g2.length - 1; e3 >= 0; e3--) {
    const t3 = g2[e3];
    p2.insertAfter(t3);
  }
  else {
    const e3 = p2.getFirstChild();
    if (n(e3) && (p2 = e3), null === e3) if (s2) p2.append(s2);
    else for (let e4 = 0; e4 < g2.length; e4++) {
      const t3 = g2[e4];
      p2.append(t3), x2 = t3;
    }
    else if (null !== s2) e3.insertBefore(s2);
    else for (let t3 = 0; t3 < g2.length; t3++) {
      const n2 = g2[t3];
      e3.insertBefore(n2), x2 = n2;
    }
  }
  else if (s2) p2.insertAfter(s2);
  else for (let e3 = g2.length - 1; e3 >= 0; e3--) {
    const t3 = g2[e3];
    p2.insertAfter(t3), x2 = t3;
  }
  const S2 = r();
  i(S2) && b(S2.anchor) && b(S2.focus) ? d(S2.clone()) : null !== x2 ? x2.selectEnd() : e2.dirty = true;
}
function A(e2, t2) {
  const l2 = p(e2.focus, t2);
  return h(l2) && !l2.isIsolated() || n(l2) && !l2.isInline() && !l2.canBeEmpty();
}
function L(e2, t2, n2, l2) {
  e2.modify(t2 ? "extend" : "move", n2, l2);
}
function D(e2) {
  const t2 = e2.anchor.getNode();
  return "rtl" === (l(t2) ? t2 : t2.getParentOrThrow()).getDirection();
}
function M(e2, t2, n2) {
  const l2 = D(e2);
  L(e2, t2, n2 ? !l2 : l2, "character");
}
function $(t2) {
  const l2 = t2.anchor, o2 = t2.focus, r2 = l2.getNode().getTopLevelElementOrThrow().getParentOrThrow();
  let s2 = r2.getFirstDescendant(), i2 = r2.getLastDescendant(), c2 = "element", f2 = "element", u2 = 0;
  e(s2) ? c2 = "text" : n(s2) || null === s2 || (s2 = s2.getParentOrThrow()), e(i2) ? (f2 = "text", u2 = i2.getTextContentSize()) : n(i2) || null === i2 || (i2 = i2.getParentOrThrow()), s2 && i2 && (l2.set(s2.getKey(), 0, c2), o2.set(i2.getKey(), u2, f2));
}
function H(e2, t2, n2) {
  const l2 = N(e2.getStyle());
  return null !== l2 && l2[t2] || n2;
}
function j(t2, n2, l2 = "") {
  let o2 = null;
  const r2 = t2.getNodes(), s2 = t2.anchor, c2 = t2.focus, f2 = t2.isBackward(), u2 = f2 ? c2.offset : s2.offset, g2 = f2 ? c2.getNode() : s2.getNode();
  if (i(t2) && t2.isCollapsed() && "" !== t2.style) {
    const e2 = N(t2.style);
    if (null !== e2 && n2 in e2) return e2[n2];
  }
  for (let t3 = 0; t3 < r2.length; t3++) {
    const s3 = r2[t3];
    if ((0 === t3 || 0 !== u2 || !s3.is(g2)) && e(s3)) {
      const e2 = H(s3, n2, l2);
      if (null === o2) o2 = e2;
      else if (o2 !== e2) {
        o2 = "";
        break;
      }
    }
  }
  return null === o2 ? l2 : o2;
}
function U(t2) {
  if (h(t2)) return false;
  if (!n(t2) || u(t2)) return false;
  const l2 = t2.getFirstChild(), o2 = null === l2 || y(l2) || e(l2) || l2.isInline();
  return !t2.isInline() && false !== t2.canBeEmpty() && o2;
}
var W = K;
export {
  I as $addNodeStyle,
  $cloneWithProperties,
  j as $getSelectionStyleValueForProperty,
  F as $isAtNodeEnd,
  D as $isParentElementRTL,
  L as $moveCaretSelection,
  M as $moveCharacter,
  B as $patchStyleText,
  $ as $selectAll,
  k as $setBlocksType,
  A as $shouldOverrideDefaultCharacterSelection,
  E as $sliceSelectedTextNodeContent,
  K as $trimTextContentFromAnchor,
  _ as $wrapNodes,
  C as createDOMRange,
  P as createRectsFromDOMRange,
  N as getStyleObjectFromCSS,
  W as trimTextContentFromAnchor
};
//# sourceMappingURL=LexicalSelection.prod-S5PBDYIV.js.map