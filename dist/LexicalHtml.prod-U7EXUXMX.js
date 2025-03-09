import {
  isBlockDomNode,
  isHTMLElement
} from "./chunk-5ABRQEPR.js";
import {
  $sliceSelectedTextNodeContent
} from "./chunk-AXVBF47C.js";

// node_modules/@lexical/html/LexicalHtml.prod.mjs
import { $getRoot as o, $isElementNode as l, $cloneWithProperties as r, $isTextNode as i, $isRootOrShadowRoot as s, $isBlockElementNode as c, $createLineBreakNode as u, ArtificialNode__DO_NOT_USE as f, isInlineDomNode as a, $createParagraphNode as d } from "lexical";
function p(e, n) {
  const t = n.body ? n.body.childNodes : [];
  let o2 = [];
  const l2 = [];
  for (let n2 = 0; n2 < t.length; n2++) {
    const r2 = t[n2];
    if (!g.has(r2.nodeName)) {
      const n3 = x(r2, e, l2, false);
      null !== n3 && (o2 = o2.concat(n3));
    }
  }
  return function(e2) {
    for (const n2 of e2) n2.getNextSibling() instanceof f && n2.insertAfter(u());
    for (const n2 of e2) {
      const e3 = n2.getChildren();
      for (const t2 of e3) n2.insertBefore(t2);
      n2.remove();
    }
  }(l2), o2;
}
function h(e, n) {
  if ("undefined" == typeof document || "undefined" == typeof window && void 0 === global.window) throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  const t = document.createElement("div"), l2 = o().getChildren();
  for (let o2 = 0; o2 < l2.length; o2++) {
    m(e, l2[o2], t, n);
  }
  return t.innerHTML;
}
function m(t, o2, s2, c2 = null) {
  let u2 = null === c2 || o2.isSelected(c2);
  const f2 = l(o2) && o2.excludeFromCopy("html");
  let a2 = o2;
  if (null !== c2) {
    let n = r(o2);
    n = i(n) && null !== c2 ? $sliceSelectedTextNodeContent(c2, n) : n, a2 = n;
  }
  const d2 = l(a2) ? a2.getChildren() : [], p2 = t._nodes.get(a2.getType());
  let h2;
  h2 = p2 && void 0 !== p2.exportDOM ? p2.exportDOM(t, a2) : a2.exportDOM(t);
  const { element: g2, after: x2 } = h2;
  if (!g2) return false;
  const y2 = document.createDocumentFragment();
  for (let e = 0; e < d2.length; e++) {
    const n = d2[e], r2 = m(t, n, y2, c2);
    !u2 && l(o2) && r2 && o2.extractWithChild(n, c2, "html") && (u2 = true);
  }
  if (u2 && !f2) {
    if (isHTMLElement(g2) && g2.append(y2), s2.append(g2), x2) {
      const e = x2.call(a2, g2);
      e && g2.replaceWith(e);
    }
  } else s2.append(y2);
  return u2;
}
var g = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function x(e, n, o2, r2, i2 = /* @__PURE__ */ new Map(), p2) {
  let h2 = [];
  if (g.has(e.nodeName)) return h2;
  let m2 = null;
  const w = function(e2, n2) {
    const { nodeName: t } = e2, o3 = n2._htmlConversions.get(t.toLowerCase());
    let l2 = null;
    if (void 0 !== o3) for (const n3 of o3) {
      const t2 = n3(e2);
      null !== t2 && (null === l2 || (l2.priority || 0) < (t2.priority || 0)) && (l2 = t2);
    }
    return null !== l2 ? l2.conversion : null;
  }(e, n), b = w ? w(e) : null;
  let C = null;
  if (null !== b) {
    C = b.after;
    const n2 = b.node;
    if (m2 = Array.isArray(n2) ? n2[n2.length - 1] : n2, null !== m2) {
      for (const [, e2] of i2) if (m2 = e2(m2, p2), !m2) break;
      m2 && h2.push(...Array.isArray(n2) ? n2 : [m2]);
    }
    null != b.forChild && i2.set(e.nodeName, b.forChild);
  }
  const S = e.childNodes;
  let v = [];
  const N = (null == m2 || !s(m2)) && (null != m2 && c(m2) || r2);
  for (let e2 = 0; e2 < S.length; e2++) v.push(...x(S[e2], n, o2, N, new Map(i2), m2));
  return null != C && (v = C(v)), isBlockDomNode(e) && (v = y(e, v, N ? () => {
    const e2 = new f();
    return o2.push(e2), e2;
  } : d)), null == m2 ? v.length > 0 ? h2 = h2.concat(v) : isBlockDomNode(e) && function(e2) {
    if (null == e2.nextSibling || null == e2.previousSibling) return false;
    return a(e2.nextSibling) && a(e2.previousSibling);
  }(e) && (h2 = h2.concat(u())) : l(m2) && m2.append(...v), h2;
}
function y(e, n, t) {
  const o2 = e.style.textAlign, l2 = [];
  let r2 = [];
  for (let e2 = 0; e2 < n.length; e2++) {
    const i2 = n[e2];
    if (c(i2)) o2 && !i2.getFormat() && i2.setFormat(o2), l2.push(i2);
    else if (r2.push(i2), e2 === n.length - 1 || e2 < n.length - 1 && c(n[e2 + 1])) {
      const e3 = t();
      e3.setFormat(o2), e3.append(...r2), l2.push(e3), r2 = [];
    }
  }
  return l2;
}
export {
  h as $generateHtmlFromNodes,
  p as $generateNodesFromDOM
};
//# sourceMappingURL=LexicalHtml.prod-U7EXUXMX.js.map