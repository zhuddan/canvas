import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  guardReactiveProps,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onMounted,
  onUnmounted,
  openBlock,
  popScopeId,
  pushScopeId,
  reactive,
  ref,
  renderSlot,
  resolveComponent,
  toDisplayString,
  toRefs,
  unref,
  vShow,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers,
  withScopeId
} from "./chunk-AO2U7YCB.js";

// ../../node_modules/.pnpm/@sakitam-gis+vitepress-playground@1.2.0_vitepress@1.3.4_vue@3.5.0/node_modules/@sakitam-gis/vitepress-playground/dist/index.es.js
var Sn = ["top", "right", "bottom", "left"];
var dt = ["start", "end"];
var pt = Sn.reduce((e, t) => e.concat(t, t + "-" + dt[0], t + "-" + dt[1]), []);
var pe = Math.min;
var Z = Math.max;
var Tn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var Pn = {
  start: "end",
  end: "start"
};
function Ue(e, t, n) {
  return Z(e, pe(t, n));
}
function ne(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function V(e) {
  return e.split("-")[0];
}
function D(e) {
  return e.split("-")[1];
}
function Nt(e) {
  return e === "x" ? "y" : "x";
}
function Xe(e) {
  return e === "y" ? "height" : "width";
}
function me(e) {
  return ["top", "bottom"].includes(V(e)) ? "y" : "x";
}
function Ze(e) {
  return Nt(me(e));
}
function zt(e, t, n) {
  n === void 0 && (n = false);
  const o = D(e), i = Ze(e), r = Xe(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = Pe(l)), [l, Pe(l)];
}
function An(e) {
  const t = Pe(e);
  return [Te(e), t, Te(t)];
}
function Te(e) {
  return e.replace(/start|end/g, (t) => Pn[t]);
}
function Cn(e, t, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : o : t ? o : i;
    case "left":
    case "right":
      return t ? r : l;
    default:
      return [];
  }
}
function On(e, t, n, o) {
  const i = D(e);
  let r = Cn(V(e), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), t && (r = r.concat(r.map(Te)))), r;
}
function Pe(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Tn[t]);
}
function En(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Rt(e) {
  return typeof e != "number" ? En(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function se(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function ut(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const r = me(t), l = Ze(t), c = Xe(l), s = V(t), a = r === "y", p = o.x + o.width / 2 - i.width / 2, d = o.y + o.height / 2 - i.height / 2, u = o[c] / 2 - i[c] / 2;
  let f;
  switch (s) {
    case "top":
      f = {
        x: p,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: p,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: d
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (D(t)) {
    case "start":
      f[l] -= u * (n && a ? -1 : 1);
      break;
    case "end":
      f[l] += u * (n && a ? -1 : 1);
      break;
  }
  return f;
}
var Mn = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), s = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let a = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: p,
    y: d
  } = ut(a, o, s), u = o, f = {}, g = 0;
  for (let y = 0; y < c.length; y++) {
    const {
      name: S,
      fn: v
    } = c[y], {
      x: _,
      y: b,
      data: $,
      reset: x
    } = await v({
      x: p,
      y: d,
      initialPlacement: o,
      placement: u,
      strategy: i,
      middlewareData: f,
      rects: a,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = _ ?? p, d = b ?? d, f = {
      ...f,
      [S]: {
        ...f[S],
        ...$
      }
    }, x && g <= 50 && (g++, typeof x == "object" && (x.placement && (u = x.placement), x.rects && (a = x.rects === true ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : x.rects), {
      x: p,
      y: d
    } = ut(a, u, s)), y = -1);
  }
  return {
    x: p,
    y: d,
    placement: u,
    strategy: i,
    middlewareData: f
  };
};
async function Ee(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: s
  } = e, {
    boundary: a = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: d = "floating",
    altBoundary: u = false,
    padding: f = 0
  } = ne(t, e), g = Rt(f), S = c[u ? d === "floating" ? "reference" : "floating" : d], v = se(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(S))) == null || n ? S : S.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: p,
    strategy: s
  })), _ = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, b = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(b)) ? await (r.getScale == null ? void 0 : r.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = se(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: _,
    offsetParent: b,
    strategy: s
  }) : _);
  return {
    top: (v.top - x.top + g.top) / $.y,
    bottom: (x.bottom - v.bottom + g.bottom) / $.y,
    left: (v.left - x.left + g.left) / $.x,
    right: (x.right - v.right + g.right) / $.x
  };
}
var kn = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: r,
      platform: l,
      elements: c,
      middlewareData: s
    } = t, {
      element: a,
      padding: p = 0
    } = ne(e, t) || {};
    if (a == null)
      return {};
    const d = Rt(p), u = {
      x: n,
      y: o
    }, f = Ze(i), g = Xe(f), y = await l.getDimensions(a), S = f === "y", v = S ? "top" : "left", _ = S ? "bottom" : "right", b = S ? "clientHeight" : "clientWidth", $ = r.reference[g] + r.reference[f] - u[f] - r.floating[g], x = u[f] - r.reference[f], h = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(a));
    let m = h ? h[b] : 0;
    (!m || !await (l.isElement == null ? void 0 : l.isElement(h))) && (m = c.floating[b] || r.floating[g]);
    const w = $ / 2 - x / 2, k = m / 2 - y[g] / 2 - 1, A = pe(d[v], k), L = pe(d[_], k), O = A, Y = m - y[g] - L, E = m / 2 - y[g] / 2 + w, j = Ue(O, E, Y), H = !s.arrow && D(i) != null && E !== j && r.reference[g] / 2 - (E < O ? A : L) - y[g] / 2 < 0, U = H ? E < O ? E - O : E - Y : 0;
    return {
      [f]: u[f] + U,
      data: {
        [f]: j,
        centerOffset: E - j - U,
        ...H && {
          alignmentOffset: U
        }
      },
      reset: H
    };
  }
});
function Ln(e, t, n) {
  return (e ? [...n.filter((i) => D(i) === e), ...n.filter((i) => D(i) !== e)] : n.filter((i) => V(i) === i)).filter((i) => e ? D(i) === e || (t ? Te(i) !== i : false) : true);
}
var Nn = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, o, i;
      const {
        rects: r,
        middlewareData: l,
        placement: c,
        platform: s,
        elements: a
      } = t, {
        crossAxis: p = false,
        alignment: d,
        allowedPlacements: u = pt,
        autoAlignment: f = true,
        ...g
      } = ne(e, t), y = d !== void 0 || u === pt ? Ln(d || null, f, u) : u, S = await Ee(t, g), v = ((n = l.autoPlacement) == null ? void 0 : n.index) || 0, _ = y[v];
      if (_ == null)
        return {};
      const b = zt(_, r, await (s.isRTL == null ? void 0 : s.isRTL(a.floating)));
      if (c !== _)
        return {
          reset: {
            placement: y[0]
          }
        };
      const $ = [S[V(_)], S[b[0]], S[b[1]]], x = [...((o = l.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: _,
        overflows: $
      }], h = y[v + 1];
      if (h)
        return {
          data: {
            index: v + 1,
            overflows: x
          },
          reset: {
            placement: h
          }
        };
      const m = x.map((A) => {
        const L = D(A.placement);
        return [A.placement, L && p ? (
          // Check along the mainAxis and main crossAxis side.
          A.overflows.slice(0, 2).reduce((O, Y) => O + Y, 0)
        ) : (
          // Check only the mainAxis.
          A.overflows[0]
        ), A.overflows];
      }).sort((A, L) => A[1] - L[1]), k = ((i = m.filter((A) => A[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        D(A[0]) ? 2 : 3
      ).every((L) => L <= 0))[0]) == null ? void 0 : i[0]) || m[0][0];
      return k !== c ? {
        data: {
          index: v + 1,
          overflows: x
        },
        reset: {
          placement: k
        }
      } : {};
    }
  };
};
var zn = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: i,
        middlewareData: r,
        rects: l,
        initialPlacement: c,
        platform: s,
        elements: a
      } = t, {
        mainAxis: p = true,
        crossAxis: d = true,
        fallbackPlacements: u,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: y = true,
        ...S
      } = ne(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const v = V(i), _ = V(c) === c, b = await (s.isRTL == null ? void 0 : s.isRTL(a.floating)), $ = u || (_ || !y ? [Pe(c)] : An(c));
      !u && g !== "none" && $.push(...On(c, y, g, b));
      const x = [c, ...$], h = await Ee(t, S), m = [];
      let w = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (p && m.push(h[v]), d) {
        const O = zt(i, l, b);
        m.push(h[O[0]], h[O[1]]);
      }
      if (w = [...w, {
        placement: i,
        overflows: m
      }], !m.every((O) => O <= 0)) {
        var k, A;
        const O = (((k = r.flip) == null ? void 0 : k.index) || 0) + 1, Y = x[O];
        if (Y)
          return {
            data: {
              index: O,
              overflows: w
            },
            reset: {
              placement: Y
            }
          };
        let E = (A = w.filter((j) => j.overflows[0] <= 0).sort((j, H) => j.overflows[1] - H.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!E)
          switch (f) {
            case "bestFit": {
              var L;
              const j = (L = w.map((H) => [H.placement, H.overflows.filter((U) => U > 0).reduce((U, un) => U + un, 0)]).sort((H, U) => H[1] - U[1])[0]) == null ? void 0 : L[0];
              j && (E = j);
              break;
            }
            case "initialPlacement":
              E = c;
              break;
          }
        if (i !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
async function Rn(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = V(n), c = D(n), s = me(n) === "y", a = ["left", "top"].includes(l) ? -1 : 1, p = r && s ? -1 : 1, d = ne(t, e);
  let {
    mainAxis: u,
    crossAxis: f,
    alignmentAxis: g
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof g == "number" && (f = c === "end" ? g * -1 : g), s ? {
    x: f * p,
    y: u * a
  } : {
    x: u * a,
    y: f * p
  };
}
var Bn = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: i,
        y: r,
        placement: l,
        middlewareData: c
      } = t, s = await Rn(t, e);
      return l === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: i + s.x,
        y: r + s.y,
        data: {
          ...s,
          placement: l
        }
      };
    }
  };
};
var Dn = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: i
      } = t, {
        mainAxis: r = true,
        crossAxis: l = false,
        limiter: c = {
          fn: (S) => {
            let {
              x: v,
              y: _
            } = S;
            return {
              x: v,
              y: _
            };
          }
        },
        ...s
      } = ne(e, t), a = {
        x: n,
        y: o
      }, p = await Ee(t, s), d = me(V(i)), u = Nt(d);
      let f = a[u], g = a[d];
      if (r) {
        const S = u === "y" ? "top" : "left", v = u === "y" ? "bottom" : "right", _ = f + p[S], b = f - p[v];
        f = Ue(_, f, b);
      }
      if (l) {
        const S = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", _ = g + p[S], b = g - p[v];
        g = Ue(_, g, b);
      }
      const y = c.fn({
        ...t,
        [u]: f,
        [d]: g
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - o
        }
      };
    }
  };
};
var jn = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: i,
        elements: r
      } = t, {
        apply: l = () => {
        },
        ...c
      } = ne(e, t), s = await Ee(t, c), a = V(n), p = D(n), d = me(n) === "y", {
        width: u,
        height: f
      } = o.floating;
      let g, y;
      a === "top" || a === "bottom" ? (g = a, y = p === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (y = a, g = p === "end" ? "top" : "bottom");
      const S = f - s[g], v = u - s[y], _ = !t.middlewareData.shift;
      let b = S, $ = v;
      if (d) {
        const h = u - s.left - s.right;
        $ = p || _ ? pe(v, h) : h;
      } else {
        const h = f - s.top - s.bottom;
        b = p || _ ? pe(S, h) : h;
      }
      if (_ && !p) {
        const h = Z(s.left, 0), m = Z(s.right, 0), w = Z(s.top, 0), k = Z(s.bottom, 0);
        d ? $ = u - 2 * (h !== 0 || m !== 0 ? h + m : Z(s.left, s.right)) : b = f - 2 * (w !== 0 || k !== 0 ? w + k : Z(s.top, s.bottom));
      }
      await l({
        ...t,
        availableWidth: $,
        availableHeight: b
      });
      const x = await i.getDimensions(r.floating);
      return u !== x.width || f !== x.height ? {
        reset: {
          rects: true
        }
      } : {};
    }
  };
};
function M(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function I(e) {
  return M(e).getComputedStyle(e);
}
var ht = Math.min;
var re = Math.max;
var Ae = Math.round;
function Bt(e) {
  const t = I(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, l = Ae(n) !== i || Ae(o) !== r;
  return l && (n = i, o = r), { width: n, height: o, fallback: l };
}
function K(e) {
  return jt(e) ? (e.nodeName || "").toLowerCase() : "";
}
var we;
function Dt() {
  if (we)
    return we;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (we = e.brands.map((t) => t.brand + "/" + t.version).join(" "), we) : navigator.userAgent;
}
function F(e) {
  return e instanceof M(e).HTMLElement;
}
function G(e) {
  return e instanceof M(e).Element;
}
function jt(e) {
  return e instanceof M(e).Node;
}
function ft(e) {
  return typeof ShadowRoot > "u" ? false : e instanceof M(e).ShadowRoot || e instanceof ShadowRoot;
}
function Me(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: i } = I(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i);
}
function Hn(e) {
  return ["table", "td", "th"].includes(K(e));
}
function We(e) {
  const t = /firefox/i.test(Dt()), n = I(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!o && o !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function Ht() {
  return !/^((?!chrome|android).)*safari/i.test(Dt());
}
function Qe(e) {
  return ["html", "body", "#document"].includes(K(e));
}
function It(e) {
  return G(e) ? e : e.contextElement;
}
var Ft = { x: 1, y: 1 };
function ie(e) {
  const t = It(e);
  if (!F(t))
    return Ft;
  const n = t.getBoundingClientRect(), { width: o, height: i, fallback: r } = Bt(t);
  let l = (r ? Ae(n.width) : n.width) / o, c = (r ? Ae(n.height) : n.height) / i;
  return l && Number.isFinite(l) || (l = 1), c && Number.isFinite(c) || (c = 1), { x: l, y: c };
}
function ue(e, t, n, o) {
  var i, r;
  t === void 0 && (t = false), n === void 0 && (n = false);
  const l = e.getBoundingClientRect(), c = It(e);
  let s = Ft;
  t && (o ? G(o) && (s = ie(o)) : s = ie(e));
  const a = c ? M(c) : window, p = !Ht() && n;
  let d = (l.left + (p && ((i = a.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / s.x, u = (l.top + (p && ((r = a.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / s.y, f = l.width / s.x, g = l.height / s.y;
  if (c) {
    const y = M(c), S = o && G(o) ? M(o) : o;
    let v = y.frameElement;
    for (; v && o && S !== y; ) {
      const _ = ie(v), b = v.getBoundingClientRect(), $ = getComputedStyle(v);
      b.x += (v.clientLeft + parseFloat($.paddingLeft)) * _.x, b.y += (v.clientTop + parseFloat($.paddingTop)) * _.y, d *= _.x, u *= _.y, f *= _.x, g *= _.y, d += b.x, u += b.y, v = M(v).frameElement;
    }
  }
  return { width: f, height: g, top: u, right: d + f, bottom: u + g, left: d, x: d, y: u };
}
function J(e) {
  return ((jt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ke(e) {
  return G(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Vt(e) {
  return ue(J(e)).left + ke(e).scrollLeft;
}
function he(e) {
  if (K(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || ft(e) && e.host || J(e);
  return ft(t) ? t.host : t;
}
function Ut(e) {
  const t = he(e);
  return Qe(t) ? t.ownerDocument.body : F(t) && Me(t) ? t : Ut(t);
}
function Ce(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = Ut(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = M(o);
  return i ? t.concat(r, r.visualViewport || [], Me(o) ? o : []) : t.concat(o, Ce(o));
}
function mt(e, t, n) {
  return t === "viewport" ? se(function(o, i) {
    const r = M(o), l = J(o), c = r.visualViewport;
    let s = l.clientWidth, a = l.clientHeight, p = 0, d = 0;
    if (c) {
      s = c.width, a = c.height;
      const u = Ht();
      (u || !u && i === "fixed") && (p = c.offsetLeft, d = c.offsetTop);
    }
    return { width: s, height: a, x: p, y: d };
  }(e, n)) : G(t) ? se(function(o, i) {
    const r = ue(o, true, i === "fixed"), l = r.top + o.clientTop, c = r.left + o.clientLeft, s = F(o) ? ie(o) : { x: 1, y: 1 };
    return { width: o.clientWidth * s.x, height: o.clientHeight * s.y, x: c * s.x, y: l * s.y };
  }(t, n)) : se(function(o) {
    const i = J(o), r = ke(o), l = o.ownerDocument.body, c = re(i.scrollWidth, i.clientWidth, l.scrollWidth, l.clientWidth), s = re(i.scrollHeight, i.clientHeight, l.scrollHeight, l.clientHeight);
    let a = -r.scrollLeft + Vt(o);
    const p = -r.scrollTop;
    return I(l).direction === "rtl" && (a += re(i.clientWidth, l.clientWidth) - c), { width: c, height: s, x: a, y: p };
  }(J(e)));
}
function gt(e) {
  return F(e) && I(e).position !== "fixed" ? e.offsetParent : null;
}
function vt(e) {
  const t = M(e);
  let n = gt(e);
  for (; n && Hn(n) && I(n).position === "static"; )
    n = gt(n);
  return n && (K(n) === "html" || K(n) === "body" && I(n).position === "static" && !We(n)) ? t : n || function(o) {
    let i = he(o);
    for (; F(i) && !Qe(i); ) {
      if (We(i))
        return i;
      i = he(i);
    }
    return null;
  }(e) || t;
}
function In(e, t, n) {
  const o = F(t), i = J(t), r = ue(e, true, n === "fixed", t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (o || !o && n !== "fixed")
    if ((K(t) !== "body" || Me(i)) && (l = ke(t)), F(t)) {
      const s = ue(t, true);
      c.x = s.x + t.clientLeft, c.y = s.y + t.clientTop;
    } else
      i && (c.x = Vt(i));
  return { x: r.left + l.scrollLeft - c.x, y: r.top + l.scrollTop - c.y, width: r.width, height: r.height };
}
var Fn = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(a, p) {
    const d = p.get(a);
    if (d)
      return d;
    let u = Ce(a).filter((S) => G(S) && K(S) !== "body"), f = null;
    const g = I(a).position === "fixed";
    let y = g ? he(a) : a;
    for (; G(y) && !Qe(y); ) {
      const S = I(y), v = We(y);
      (g ? v || f : v || S.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = S : u = u.filter((_) => _ !== y), y = he(y);
    }
    return p.set(a, u), u;
  }(t, this._c) : [].concat(n), l = [...r, o], c = l[0], s = l.reduce((a, p) => {
    const d = mt(t, p, i);
    return a.top = re(d.top, a.top), a.right = ht(d.right, a.right), a.bottom = ht(d.bottom, a.bottom), a.left = re(d.left, a.left), a;
  }, mt(t, c, i));
  return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: o } = e;
  const i = F(n), r = J(n);
  if (n === r)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const s = { x: 0, y: 0 };
  if ((i || !i && o !== "fixed") && ((K(n) !== "body" || Me(r)) && (l = ke(n)), F(n))) {
    const a = ue(n);
    c = ie(n), s.x = a.x + n.clientLeft, s.y = a.y + n.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - l.scrollLeft * c.x + s.x, y: t.y * c.y - l.scrollTop * c.y + s.y };
}, isElement: G, getDimensions: function(e) {
  return F(e) ? Bt(e) : e.getBoundingClientRect();
}, getOffsetParent: vt, getDocumentElement: J, getScale: ie, async getElementRects(e) {
  let { reference: t, floating: n, strategy: o } = e;
  const i = this.getOffsetParent || vt, r = this.getDimensions;
  return { reference: In(t, await i(n), o), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => I(e).direction === "rtl" };
var Vn = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = { platform: Fn, ...n }, r = { ...i.platform, _c: o };
  return Mn(e, t, { ...i, platform: r });
};
var ee = {
  // Disable popper components
  disabled: false,
  // Default position offset along main axis (px)
  distance: 5,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Default container where the tooltip will be appended
  container: "body",
  // Element used to compute position and size boundaries
  boundary: void 0,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: false,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 150,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: "absolute",
  // Prevent overflow
  preventOverflow: true,
  // Flip to the opposite placement if needed
  flip: true,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: true,
  // Overflow padding (px)
  overflowPadding: 0,
  // Arrow padding (px)
  arrowPadding: 0,
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: true,
  /**
   * By default, compute autohide on 'click'.
   */
  autoHideOnMousedown: false,
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: "top",
      // Default events that trigger the tooltip
      triggers: ["hover", "focus", "touch"],
      // Close tooltip on click on tooltip target
      hideTriggers: (e) => [...e, "click"],
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: false,
      // Enable HTML content in directive
      html: false,
      // Displayed when tooltip content is loading
      loadingContent: "..."
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: "bottom",
      // Default events that trigger the dropdown
      triggers: ["click"],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: true,
      // Hide on clock outside
      autoHide: true
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function qe(e, t) {
  let n = ee.themes[e] || {}, o;
  do
    o = n[t], typeof o > "u" ? n.$extend ? n = ee.themes[n.$extend] || {} : (n = null, o = ee[t]) : n = null;
  while (n);
  return o;
}
function Un(e) {
  const t = [e];
  let n = ee.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = ee.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((o) => `v-popper--theme-${o}`);
}
function wt(e) {
  const t = [e];
  let n = ee.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = ee.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
var fe = false;
if (typeof window < "u") {
  fe = false;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        fe = true;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
var Wt = false;
typeof window < "u" && typeof navigator < "u" && (Wt = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
var Wn = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []);
var yt = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
};
var _t = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function bt(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function He() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
var B = [];
var X = null;
var xt = {};
function $t(e) {
  let t = xt[e];
  return t || (t = xt[e] = []), t;
}
var Ge = function() {
};
typeof window < "u" && (Ge = window.Element);
function T(e) {
  return function(t) {
    return qe(t.theme, e);
  };
}
var Ie = "__floating-vue__popper";
var qt = () => defineComponent({
  name: "VPopper",
  provide() {
    return {
      [Ie]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Ie]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: true
    },
    targetNodes: {
      type: Function,
      required: true
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: true
    },
    shown: {
      type: Boolean,
      default: false
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: T("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: T("positioningDisabled")
    },
    placement: {
      type: String,
      default: T("placement"),
      validator: (e) => Wn.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: T("delay")
    },
    distance: {
      type: [Number, String],
      default: T("distance")
    },
    skidding: {
      type: [Number, String],
      default: T("skidding")
    },
    triggers: {
      type: Array,
      default: T("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: T("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: T("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: T("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: T("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: T("popperHideTriggers")
    },
    container: {
      type: [String, Object, Ge, Boolean],
      default: T("container")
    },
    boundary: {
      type: [String, Ge],
      default: T("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: T("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: T("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: T("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: T("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: T("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: T("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: T("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: T("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: T("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: T("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: T("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: T("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: T("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: T("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: T("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: T("flip")
    },
    shift: {
      type: Boolean,
      default: T("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: T("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: T("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: T("disposeTimeout")
    }
  },
  emits: {
    show: () => true,
    hide: () => true,
    "update:shown": (e) => true,
    "apply-show": () => true,
    "apply-hide": () => true,
    "close-group": () => true,
    "close-directive": () => true,
    "auto-hide": () => true,
    resize: () => true
  },
  data() {
    return {
      isShown: false,
      isMounted: false,
      skipTransition: false,
      classes: {
        showFrom: false,
        showTo: false,
        hideFrom: false,
        hideTo: true
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: true,
      pendingHide: false,
      containsGlobalTarget: false,
      isDisposed: true,
      mouseDownContains: false
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: {
          ...this.classes,
          popperClass: this.popperClass
        },
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[Ie]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: {
    shown: "$_autoShowHide",
    disabled(e) {
      e ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    },
    triggers: {
      handler: "$_refreshListeners",
      deep: true
    },
    positioningDisabled: "$_refreshListeners",
    ...[
      "placement",
      "distance",
      "skidding",
      "boundary",
      "strategy",
      "overflowPadding",
      "arrowPadding",
      "preventOverflow",
      "shift",
      "shiftCrossAxis",
      "flip"
    ].reduce((e, t) => (e[t] = "$_computePosition", e), {})
  },
  created() {
    this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: e = null, skipDelay: t = false, force: n = false } = {}) {
      var o, i;
      (o = this.parentPopper) != null && o.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = false, (n || !this.disabled) && (((i = this.parentPopper) == null ? void 0 : i.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = true, requestAnimationFrame(() => {
        this.$_showFrameLocked = false;
      })), this.$emit("update:shown", true));
    },
    hide({ event: e = null, skipDelay: t = false } = {}) {
      var n;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = true;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = false, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", false);
      }
    },
    init() {
      var e;
      this.isDisposed && (this.isDisposed = false, this.isMounted = false, this.$_events = [], this.$_preventShow = false, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.isDisposed || (this.isDisposed = true, this.$_removeEventListeners(), this.hide({ skipDelay: true }), this.$_detachPopperNode(), this.isMounted = false, this.isShown = false, this.$_updateParentShownChildren(false), this.$_swapTargetAttrs("data-original-title", "title"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      if (this.isDisposed || this.positioningDisabled)
        return;
      const e = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && e.middleware.push(Bn({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Nn({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Dn({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(zn({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(kn({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: o, rects: i, middlewareData: r }) => {
          let l;
          const { centerOffset: c } = r.arrow;
          return o.startsWith("top") || o.startsWith("bottom") ? l = Math.abs(c) > i.reference.width / 2 : l = Math.abs(c) > i.reference.height / 2, {
            data: {
              overflow: l
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const o = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: i, placement: r, middlewareData: l }) => {
            var c;
            if ((c = l.autoSize) != null && c.skip)
              return {};
            let s, a;
            return r.startsWith("top") || r.startsWith("bottom") ? s = i.reference.width : a = i.reference.height, this.$_innerNode.style[o === "min" ? "minWidth" : o === "max" ? "maxWidth" : "width"] = s != null ? `${s}px` : null, this.$_innerNode.style[o === "min" ? "minHeight" : o === "max" ? "maxHeight" : "height"] = a != null ? `${a}px` : null, {
              data: {
                skip: true
              },
              reset: {
                rects: true
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(jn({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: o, availableHeight: i }) => {
          this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null, this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null;
        }
      })));
      const n = await Vn(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: n.x,
        y: n.y,
        placement: n.placement,
        strategy: n.strategy,
        arrow: {
          ...n.middlewareData.arrow,
          ...n.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(e, t = false) {
      if (this.$_updateParentShownChildren(true), this.$_hideInProgress = false, clearTimeout(this.$_scheduleTimer), X && this.instantMove && X.instantMove && X !== this.parentPopper) {
        X.$_applyHide(true), this.$_applyShow(true);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = false) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = true;
        return;
      }
      this.$_updateParentShownChildren(false), this.$_hideInProgress = true, clearTimeout(this.$_scheduleTimer), this.isShown && (X = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = false) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await He(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Ce(this.$_referenceNode),
        ...Ce(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), n = this.$_popperNode.querySelector(".v-popper__wrapper"), o = n.parentNode.getBoundingClientRect(), i = t.x + t.width / 2 - (o.left + n.offsetLeft), r = t.y + t.height / 2 - (o.top + n.offsetTop);
        this.result.transformOrigin = `${i}px ${r}px`;
      }
      this.isShown = true, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let n = 0; n < B.length; n++)
          t = B[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      B.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of wt(this.theme))
        $t(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = true, this.classes.showTo = false, this.classes.hideFrom = false, this.classes.hideTo = false, await He(), this.classes.showFrom = false, this.classes.showTo = true, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = false) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = true, this.$_hideInProgress = false;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, bt(B, this), B.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of wt(this.theme)) {
        const o = $t(n);
        bt(o, this), o.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      X === this && (X = null), this.isShown = false, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = false);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = false, this.classes.showTo = false, this.classes.hideFrom = true, this.classes.hideTo = false, await He(), this.classes.hideFrom = false, this.classes.hideTo = true;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.isDisposed)
        return;
      let e = this.container;
      if (typeof e == "string" ? e = window.document.querySelector(e) : e === false && (e = this.$_targetNodes[0].parentNode), !e)
        throw new Error("No container for popover: " + this.container);
      e.appendChild(this.$_popperNode), this.isMounted = true;
    },
    $_addEventListeners() {
      const e = (n) => {
        this.isShown && !this.$_hideInProgress || (n.usedByTooltip = true, !this.$_preventShow && this.show({ event: n }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, yt, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], yt, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, _t, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], _t, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((o) => o.addEventListener(t, n, fe ? {
        passive: true
      } : void 0));
    },
    $_registerTriggerListeners(e, t, n, o, i) {
      let r = n;
      o != null && (r = typeof o == "function" ? o(r) : o), r.forEach((l) => {
        const c = t[l];
        c && this.$_registerEventListeners(e, c, i);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((n) => {
        const { targetNodes: o, eventType: i, handler: r } = n;
        !e || e === i ? o.forEach((l) => l.removeEventListener(i, r)) : t.push(n);
      }), this.$_events = t;
    },
    $_refreshListeners() {
      this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(e, t = false) {
      this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = true, setTimeout(() => {
        this.$_preventShow = false;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(e, t) {
      for (const n of this.$_targetNodes) {
        const o = n.getAttribute(e);
        o && (n.removeAttribute(e), n.setAttribute(t, o));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const n in e) {
          const o = e[n];
          o == null ? t.removeAttribute(n) : t.setAttribute(n, o);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (ae >= e.left && ae <= e.right && le >= e.top && le <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = ae - W, o = le - q, i = t.left + t.width / 2 - W + (t.top + t.height / 2) - q + t.width + t.height, r = W + n * i, l = q + o * i;
        return ye(W, q, r, l, t.left, t.top, t.left, t.bottom) || // Left edge
        ye(W, q, r, l, t.left, t.top, t.right, t.top) || // Top edge
        ye(W, q, r, l, t.right, t.top, t.right, t.bottom) || // Right edge
        ye(W, q, r, l, t.left, t.bottom, t.right, t.bottom);
      }
      return false;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Wt) {
    const e = fe ? {
      passive: true,
      capture: true
    } : true;
    document.addEventListener("touchstart", (t) => St(t), e), document.addEventListener("touchend", (t) => Tt(t, true), e);
  } else
    window.addEventListener("mousedown", (e) => St(e), true), window.addEventListener("click", (e) => Tt(e, false), true);
  window.addEventListener("resize", Jn);
}
function St(e, t) {
  for (let n = 0; n < B.length; n++) {
    const o = B[n];
    try {
      o.mouseDownContains = o.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Tt(e, t) {
  qn(e, t);
}
function qn(e, t) {
  const n = {};
  for (let o = B.length - 1; o >= 0; o--) {
    const i = B[o];
    try {
      const r = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
      i.pendingHide = false, requestAnimationFrame(() => {
        if (i.pendingHide = false, !n[i.randomId] && Pt(i, r, e)) {
          if (i.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let c = i.parentPopper;
            for (; c; )
              n[c.randomId] = true, c = c.parentPopper;
            return;
          }
          let l = i.parentPopper;
          for (; l && Pt(l, l.containsGlobalTarget, e); )
            l.$_handleGlobalClose(e, t), l = l.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Pt(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || Gn(e, n) && !t;
}
function Gn(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function Jn() {
  for (let e = 0; e < B.length; e++)
    B[e].$_computePosition();
}
var W = 0;
var q = 0;
var ae = 0;
var le = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  W = ae, q = le, ae = e.clientX, le = e.clientY;
}, fe ? {
  passive: true
} : void 0);
function ye(e, t, n, o, i, r, l, c) {
  const s = ((l - i) * (t - r) - (c - r) * (e - i)) / ((c - r) * (n - e) - (l - i) * (o - t)), a = ((n - e) * (t - r) - (o - t) * (e - i)) / ((c - r) * (n - e) - (l - i) * (o - t));
  return s >= 0 && s <= 1 && a >= 0 && a <= 1;
}
var Kn = {
  extends: qt()
};
var et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
};
function Yn(e, t, n, o, i, r) {
  return openBlock(), createElementBlock("div", {
    ref: "reference",
    class: normalizeClass(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    renderSlot(e.$slots, "default", normalizeProps(guardReactiveProps(e.slotData)))
  ], 2);
}
var Xn = et(Kn, [["render", Yn]]);
function Zn() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var n = e.indexOf("Trident/");
  if (n > 0) {
    var o = e.indexOf("rv:");
    return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10);
  }
  var i = e.indexOf("Edge/");
  return i > 0 ? parseInt(e.substring(i + 5, e.indexOf(".", i)), 10) : -1;
}
var be;
function Je() {
  Je.init || (Je.init = true, be = Zn() !== -1);
}
var Le = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: false
    },
    ignoreWidth: {
      type: Boolean,
      default: false
    },
    ignoreHeight: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    Je(), nextTick(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", be && this.$el.appendChild(e), e.data = "about:blank", be || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!be && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
var Qn = withScopeId("data-v-b329ee4c");
pushScopeId("data-v-b329ee4c");
var eo = {
  class: "resize-observer",
  tabindex: "-1"
};
popScopeId();
var to = Qn((e, t, n, o, i, r) => (openBlock(), createBlock("div", eo)));
Le.render = to;
Le.__scopeId = "data-v-b329ee4c";
Le.__file = "src/components/ResizeObserver.vue";
var Gt = (e = "theme") => ({
  computed: {
    themeClass() {
      return Un(this[e]);
    }
  }
});
var no = defineComponent({
  name: "VPopperContent",
  components: {
    ResizeObserver: Le
  },
  mixins: [
    Gt()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
});
var oo = ["id", "aria-hidden", "tabindex", "data-popper-placement"];
var io = {
  ref: "inner",
  class: "v-popper__inner"
};
var so = createBaseVNode("div", { class: "v-popper__arrow-outer" }, null, -1);
var ro = createBaseVNode("div", { class: "v-popper__arrow-inner" }, null, -1);
var ao = [
  so,
  ro
];
function lo(e, t, n, o, i, r) {
  const l = resolveComponent("ResizeObserver");
  return openBlock(), createElementBlock("div", {
    id: e.popperId,
    ref: "popover",
    class: normalizeClass(["v-popper__popper", [
      e.themeClass,
      e.classes.popperClass,
      {
        "v-popper__popper--shown": e.shown,
        "v-popper__popper--hidden": !e.shown,
        "v-popper__popper--show-from": e.classes.showFrom,
        "v-popper__popper--show-to": e.classes.showTo,
        "v-popper__popper--hide-from": e.classes.hideFrom,
        "v-popper__popper--hide-to": e.classes.hideTo,
        "v-popper__popper--skip-transition": e.skipTransition,
        "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
        "v-popper__popper--no-positioning": !e.result
      }
    ]]),
    style: normalizeStyle(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = withKeys((c) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    createBaseVNode("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (c) => e.autoHide && e.$emit("hide"))
    }),
    createBaseVNode("div", {
      class: "v-popper__wrapper",
      style: normalizeStyle(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      createBaseVNode("div", io, [
        e.mounted ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", null, [
            renderSlot(e.$slots, "default")
          ]),
          e.handleResize ? (openBlock(), createBlock(l, {
            key: 0,
            onNotify: t[1] || (t[1] = (c) => e.$emit("resize", c))
          })) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 512),
      createBaseVNode("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: normalizeStyle(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, ao, 4)
    ], 4)
  ], 46, oo);
}
var Jt = et(no, [["render", lo]]);
var Kt = {
  methods: {
    show(...e) {
      return this.$refs.popper.show(...e);
    },
    hide(...e) {
      return this.$refs.popper.hide(...e);
    },
    dispose(...e) {
      return this.$refs.popper.dispose(...e);
    },
    onResize(...e) {
      return this.$refs.popper.onResize(...e);
    }
  }
};
var Ke = function() {
};
typeof window < "u" && (Ke = window.Element);
var co = defineComponent({
  name: "VPopperWrapper",
  components: {
    Popper: Xn,
    PopperContent: Jt
  },
  mixins: [
    Kt,
    Gt("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    },
    referenceNode: {
      type: Function,
      default: null
    },
    shown: {
      type: Boolean,
      default: false
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    positioningDisabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: void 0
    },
    delay: {
      type: [String, Number, Object],
      default: void 0
    },
    distance: {
      type: [Number, String],
      default: void 0
    },
    skidding: {
      type: [Number, String],
      default: void 0
    },
    triggers: {
      type: Array,
      default: void 0
    },
    showTriggers: {
      type: [Array, Function],
      default: void 0
    },
    hideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperTriggers: {
      type: Array,
      default: void 0
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    container: {
      type: [String, Object, Ke, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Ke],
      default: void 0
    },
    strategy: {
      type: String,
      default: void 0
    },
    autoHide: {
      type: [Boolean, Function],
      default: void 0
    },
    handleResize: {
      type: Boolean,
      default: void 0
    },
    instantMove: {
      type: Boolean,
      default: void 0
    },
    eagerMount: {
      type: Boolean,
      default: void 0
    },
    popperClass: {
      type: [String, Array, Object],
      default: void 0
    },
    computeTransformOrigin: {
      type: Boolean,
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: void 0
    },
    autoSize: {
      type: [Boolean, String],
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: void 0
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: void 0
    },
    preventOverflow: {
      type: Boolean,
      default: void 0
    },
    overflowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowOverflow: {
      type: Boolean,
      default: void 0
    },
    flip: {
      type: Boolean,
      default: void 0
    },
    shift: {
      type: Boolean,
      default: void 0
    },
    shiftCrossAxis: {
      type: Boolean,
      default: void 0
    },
    noAutoFocus: {
      type: Boolean,
      default: void 0
    },
    disposeTimeout: {
      type: Number,
      default: void 0
    }
  },
  emits: {
    show: () => true,
    hide: () => true,
    "update:shown": (e) => true,
    "apply-show": () => true,
    "apply-hide": () => true,
    "close-group": () => true,
    "close-directive": () => true,
    "auto-hide": () => true,
    resize: () => true
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    }
  }
});
function po(e, t, n, o, i, r) {
  const l = resolveComponent("PopperContent"), c = resolveComponent("Popper");
  return openBlock(), createBlock(c, mergeProps({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (s) => e.$emit("update:shown", s)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: withCtx(({
      popperId: s,
      isShown: a,
      shouldMountContent: p,
      skipTransition: d,
      autoHide: u,
      show: f,
      hide: g,
      handleResize: y,
      onResize: S,
      classes: v,
      result: _
    }) => [
      renderSlot(e.$slots, "default", {
        shown: a,
        show: f,
        hide: g
      }),
      createVNode(l, {
        ref: "popperContent",
        "popper-id": s,
        theme: e.finalTheme,
        shown: a,
        mounted: p,
        "skip-transition": d,
        "auto-hide": u,
        "handle-resize": y,
        classes: v,
        result: _,
        onHide: g,
        onResize: S
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "popper", {
            shown: a,
            hide: g
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
var tt = et(co, [["render", po]]);
({
  ...tt
});
({
  ...tt
});
var uo = {
  ...tt,
  name: "VTooltip",
  vPopperTheme: "tooltip"
};
defineComponent({
  name: "VTooltipDirective",
  components: {
    Popper: qt(),
    PopperContent: Jt
  },
  mixins: [
    Kt
  ],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => qe(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => qe(e.theme, "loadingContent")
    },
    targetNodes: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content == "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(true);
      },
      immediate: true
    },
    async finalContent() {
      await this.$nextTick(), this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(e) {
      if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = true;
        const t = ++this.$_fetchId, n = this.content(this);
        n.then ? n.then((o) => this.onResult(t, o)) : this.onResult(t, n);
      }
    },
    onResult(e, t) {
      e === this.$_fetchId && (this.$_loading = false, this.asyncContent = t);
    },
    onShow() {
      this.$_isShown = true, this.fetchContent();
    },
    onHide() {
      this.$_isShown = false;
    }
  }
});
var xe = uo;
var ho = {
  key: 0,
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "18",
  height: "18"
};
var fo = createBaseVNode("path", {
  d: "M311.1 739c-6.1 0-12.2-2.3-16.8-7L69.7 507.4l224.6-224.6c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6l-191 191 191 191c9.3 9.3 9.3 24.3 0 33.6-4.6 4.7-10.7 7-16.8 7zM711.5 739c-6.1 0-12.2-2.3-16.8-7-9.3-9.3-9.3-24.3 0-33.6l191-191-191-191c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0L953 507.4 728.3 732c-4.6 4.7-10.7 7-16.8 7zM418.5 814.7c-2.4 0-4.8-0.4-7.2-1.1-12.5-4-19.4-17.3-15.5-29.8l179.6-567.1c4-12.5 17.3-19.4 29.8-15.5 12.5 4 19.4 17.3 15.5 29.8L441.1 798.1a23.73 23.73 0 0 1-22.6 16.6z",
  fill: "#666"
}, null, -1);
var mo = [
  fo
];
var go = {
  key: 1,
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "14",
  height: "14"
};
var vo = createBaseVNode("path", {
  d: "M68.608 962.56V206.848h740.864V962.56H68.608zM746.496 271.36H131.584v629.248h614.912V271.36zM131.584 262.144",
  fill: "#666"
}, null, -1);
var wo = createBaseVNode("path", {
  d: "M219.136 65.024v116.224h62.976V129.536h614.912v629.248h-60.416v61.952h123.392V65.024z",
  fill: "#666"
}, null, -1);
var yo = [
  vo,
  wo
];
var _o = {
  key: 2,
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "xml:space": "preserve",
  viewBox: "64 64 896 896",
  focusable: "false",
  width: "16",
  height: "16",
  fill: "currentColor"
};
var bo = createBaseVNode("path", { d: "M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z" }, null, -1);
var xo = [
  bo
];
var $o = {
  key: 3,
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024",
  "xml:space": "preserve",
  width: "16",
  height: "16",
  fill: "currentColor"
};
var So = createBaseVNode("g", null, [
  createBaseVNode("path", { d: "M1004.57 319.408l-468-312c-15.974-9.83-33.022-9.92-49.142 0l-468 312C7.428 327.406 0 341.694 0 355.978v311.998c0 14.286 7.428 28.572 19.43 36.572l468 312.044c15.974 9.83 33.022 9.92 49.142 0l468-312.044c12-7.998 19.43-22.286 19.43-36.572V355.978c-0.002-14.284-7.43-28.572-19.432-36.57zM556 126.262l344.572 229.716-153.714 102.858L556 331.406V126.262z m-88 0v205.144l-190.858 127.43-153.714-102.858L468 126.262zM88 438.264l110.286 73.714L88 585.692v-147.428z m380 459.43L123.428 667.978l153.714-102.858L468 692.55v205.144z m44-281.716l-155.43-104 155.43-104 155.43 104-155.43 104z m44 281.716V692.55l190.858-127.43 153.714 102.858L556 897.694z m380-312.002l-110.286-73.714L936 438.264v147.428z" })
], -1);
var To = [
  So
];
var Po = {
  key: 4,
  viewBox: "64 64 896 896",
  focusable: "false",
  fill: "currentColor"
};
var Ao = createBaseVNode("path", { d: "M709.6 210l.4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z" }, null, -1);
var Co = [
  Ao
];
var Oo = {
  key: 5,
  viewBox: "64 64 896 896",
  focusable: "false",
  fill: "currentColor"
};
var Eo = createBaseVNode("path", { d: "M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z" }, null, -1);
var Mo = [
  Eo
];
var ce = defineComponent({
  __name: "Icons",
  props: {
    type: {}
  },
  setup(e) {
    return (t, n) => t.type === "code" ? (openBlock(), createElementBlock("svg", ho, mo)) : t.type === "copy" ? (openBlock(), createElementBlock("svg", go, yo)) : t.type === "sfc" ? (openBlock(), createElementBlock("svg", _o, xo)) : t.type === "codepen" ? (openBlock(), createElementBlock("svg", $o, To)) : t.type === "codesandbox" ? (openBlock(), createElementBlock("svg", Po, Co)) : t.type === "stackblitz" ? (openBlock(), createElementBlock("svg", Oo, Mo)) : createCommentVNode("", true);
  }
});
var Yt = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue + TS</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>
`;
var Xt = `
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue(),
        // 支持jsx或者tsx语法 @link https://www.npmjs.com/package/@vitejs/plugin-vue-jsx
        vueJsx: VueJsx()
      }
    })
  ],
})
`;
var Zt = `
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
`;
var Qt = `
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
`;
var en = `
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`;
var tn = `
{
  "recommendations": ["Vue.volar", "Vue.vscode-typescript-vue-plugin"]
}
`;
var nn = '/// <reference types="vite/client" />';
var on = `
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');
`;
var sn = `
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0;
}
`;
var ko = `
{
  "template": "node"
}
`;
function rn(e) {
  const t = new URL(e), n = t.pathname.match(/@(\d+\.\d+\.\d+)/);
  if (n)
    return n[1];
  for (const [o, i] of Object.entries(t.searchParams))
    if (o === "version")
      return i;
  return null;
}
var Lo = [["import", "meta", "env", "SSR"], "false"];
var No = [["!import", "meta", "env", "SSR"], "true"];
var At = [No, Lo];
function nt(e) {
  let t = e;
  for (let n = 0; n < At.length; n++) {
    const o = At[n];
    t = t.replaceAll(o[0].join("."), o[1]);
  }
  return t;
}
var zo = "https://sfc.vuejs.org/";
function Ro(e) {
  const t = {
    "App.vue": nt(e.content)
  };
  if (e.importMap)
    try {
      let o = e.importMap;
      typeof o == "string" && (o = JSON.parse(decodeURIComponent(e.importMap))), t["import-map.json"] = JSON.stringify({
        imports: o
      });
    } catch {
    }
  const n = `${zo}#${btoa(unescape(encodeURIComponent(JSON.stringify(t))))}`;
  window.open(n, "_blank");
}
var Bo = 500;
var Do = 20;
var jo = 300;
var Ho = "https://stackblitz.com";
var Ct = [
  "angular-cli",
  "create-react-app",
  "html",
  "javascript",
  "node",
  "polymer",
  "typescript",
  "vue"
];
var Io = ["project", "search", "ports", "settings"];
var Fo = ["light", "dark"];
var Vo = ["editor", "preview"];
var Ot = {
  clickToLoad: (e) => oe("ctl", e),
  devToolsHeight: (e) => Et("devtoolsheight", e),
  forceEmbedLayout: (e) => oe("embed", e),
  hideDevTools: (e) => oe("hidedevtools", e),
  hideExplorer: (e) => oe("hideExplorer", e),
  hideNavigation: (e) => oe("hideNavigation", e),
  openFile: (e) => Mt("file", e),
  showSidebar: (e) => Uo("showSidebar", e),
  sidebarView: (e) => Fe("sidebarView", e, Io),
  startScript: (e) => Mt("startScript", e),
  terminalHeight: (e) => Et("terminalHeight", e),
  theme: (e) => Fe("theme", e, Fo),
  view: (e) => Fe("view", e, Vo),
  zenMode: (e) => oe("zenMode", e)
};
function an(e = {}) {
  const t = Object.entries(e).map(([n, o]) => o != null && Ot.hasOwnProperty(n) ? Ot[n](o) : "").filter(Boolean);
  return t.length ? `?${t.join("&")}` : "";
}
function oe(e, t) {
  return t === true ? `${e}=1` : "";
}
function Uo(e, t) {
  return typeof t == "boolean" ? `${e}=${t ? "1" : "0"}` : "";
}
function Et(e, t) {
  if (typeof t == "number" && !Number.isNaN(t)) {
    const n = Math.min(100, Math.max(0, t));
    return `${e}=${encodeURIComponent(Math.round(n))}`;
  }
  return "";
}
function Fe(e, t = "", n = []) {
  return n.includes(t) ? `${e}=${encodeURIComponent(t)}` : "";
}
function Mt(e, t) {
  return (Array.isArray(t) ? t : [t]).filter((o) => typeof o == "string" && o.trim() !== "").map((o) => `${e}=${encodeURIComponent(o)}`).join("&");
}
function ln() {
  return Math.random().toString(36).slice(2, 6) + Math.random().toString(36).slice(2, 6);
}
function ot(e, t) {
  return `${cn(t)}${e}${an(t)}`;
}
function it(e, t) {
  const n = {
    forceEmbedLayout: true
  };
  return t && typeof t == "object" && Object.assign(n, t), `${cn(n)}${e}${an(n)}`;
}
function cn(e = {}) {
  return (typeof e.origin == "string" ? e.origin : Ho).replace(/\/$/, "");
}
function st(e, t, n) {
  if (!t || !e || !e.parentNode)
    throw new Error("Invalid Element");
  e.id && (t.id = e.id), e.className && (t.className = e.className), Wo(t, n), e.replaceWith(t);
}
function rt(e) {
  if (typeof e == "string") {
    const t = document.getElementById(e);
    if (!t)
      throw new Error(`Could not find element with id '${e}'`);
    return t;
  } else if (e instanceof HTMLElement)
    return e;
  throw new Error(`Invalid element: ${e}`);
}
function at(e) {
  return e && e.newWindow === false ? "_self" : "_blank";
}
function Wo(e, t = {}) {
  const n = Object.hasOwnProperty.call(t, "height") ? `${t.height}` : `${jo}`, o = Object.hasOwnProperty.call(t, "width") ? `${t.width}` : void 0;
  e.setAttribute("height", n), o ? e.setAttribute("width", o) : e.setAttribute("style", "width:100%;");
}
var qo = class {
  constructor(t) {
    this.pending = {}, this.port = t, this.port.onmessage = this.messageListener.bind(this);
  }
  request({ type: t, payload: n }) {
    return new Promise((o, i) => {
      const r = ln();
      this.pending[r] = { resolve: o, reject: i }, this.port.postMessage({
        type: t,
        payload: {
          ...n,
          // Ensure the payload object includes the request ID
          __reqid: r
        }
      });
    });
  }
  messageListener(t) {
    var c;
    if (typeof ((c = t.data.payload) == null ? void 0 : c.__reqid) != "string")
      return;
    const { type: n, payload: o } = t.data, { __reqid: i, __success: r, __error: l } = o;
    this.pending[i] && (r ? this.pending[i].resolve(this.cleanResult(o)) : this.pending[i].reject(l ? `${n}: ${l}` : n), delete this.pending[i]);
  }
  cleanResult(t) {
    const n = { ...t };
    return delete n.__reqid, delete n.__success, delete n.__error, Object.keys(n).length ? n : null;
  }
};
var Go = class {
  constructor(t, n) {
    this.editor = {
      /**
       * Open one of several files in tabs and/or split panes.
       *
       * @since 1.7.0 Added support for opening multiple files
       */
      openFile: (o) => this._rdc.request({
        type: "SDK_OPEN_FILE",
        payload: { path: o }
      }),
      /**
       * Set a project file as the currently selected file.
       *
       * - This may update the highlighted file in the file explorer,
       *   and the currently open and/or focused editor tab.
       * - It will _not_ open a new editor tab if the provided path does not
       *   match a currently open tab. See `vm.editor.openFile` to open files.
       *
       * @since 1.7.0
       * @experimental
       */
      setCurrentFile: (o) => this._rdc.request({
        type: "SDK_SET_CURRENT_FILE",
        payload: { path: o }
      }),
      /**
       * Change the color theme
       *
       * @since 1.7.0
       */
      setTheme: (o) => this._rdc.request({
        type: "SDK_SET_UI_THEME",
        payload: { theme: o }
      }),
      /**
       * Change the display mode of the project:
       *
       * - `default`: show the editor and preview pane
       * - `editor`: show the editor pane only
       * - `preview`: show the preview pane only
       *
       * @since 1.7.0
       */
      setView: (o) => this._rdc.request({
        type: "SDK_SET_UI_VIEW",
        payload: { view: o }
      }),
      /**
       * Change the display mode of the sidebar:
       *
       * - `true`: show the sidebar
       * - `false`: hide the sidebar
       *
       * @since 1.7.0
       */
      showSidebar: (o = true) => this._rdc.request({
        type: "SDK_TOGGLE_SIDEBAR",
        payload: { visible: o }
      })
    }, this.preview = {
      /**
       * The origin (protocol and domain) of the preview iframe.
       *
       * In WebContainers-based projects, the origin will always be `null`;
       * try using `vm.preview.getUrl` instead.
       *
       * @see https://developer.stackblitz.com/guides/user-guide/available-environments
       */
      origin: "",
      /**
       * Get the current preview URL.
       *
       * In both and EngineBlock and WebContainers-based projects, the preview URL
       * may not reflect the exact path of the current page, after user navigation.
       *
       * In WebContainers-based projects, the preview URL will be `null` initially,
       * and until the project starts a web server.
       *
       * @since 1.7.0
       * @experimental
       */
      getUrl: () => this._rdc.request({
        type: "SDK_GET_PREVIEW_URL",
        payload: {}
      }).then((o) => (o == null ? void 0 : o.url) ?? null),
      /**
       * Change the path of the preview URL.
       *
       * In WebContainers-based projects, this will be ignored if there is no
       * currently running web server.
       *
       * @since 1.7.0
       * @experimental
       */
      setUrl: (o = "/") => {
        if (typeof o != "string" || !o.startsWith("/"))
          throw new Error(`Invalid argument: expected a path starting with '/', got '${o}'`);
        return this._rdc.request({
          type: "SDK_SET_PREVIEW_URL",
          payload: { path: o }
        });
      }
    }, this._rdc = new qo(t), Object.defineProperty(this.preview, "origin", {
      value: typeof n.previewOrigin == "string" ? n.previewOrigin : null,
      writable: false
    });
  }
  /**
   * Apply batch updates to the project files in one call.
   */
  applyFsDiff(t) {
    const n = (o) => o !== null && typeof o == "object";
    if (!n(t) || !n(t.create))
      throw new Error("Invalid diff object: expected diff.create to be an object.");
    if (!Array.isArray(t.destroy))
      throw new Error("Invalid diff object: expected diff.destroy to be an array.");
    return this._rdc.request({
      type: "SDK_APPLY_FS_DIFF",
      payload: t
    });
  }
  /**
   * Get the project’s defined dependencies.
   *
   * In EngineBlock projects, version numbers represent the resolved dependency versions.
   * In WebContainers-based projects, returns data from the project’s `package.json` without resolving installed version numbers.
   */
  getDependencies() {
    return this._rdc.request({
      type: "SDK_GET_DEPS_SNAPSHOT",
      payload: {}
    });
  }
  /**
   * Get a snapshot of the project files and their content.
   */
  getFsSnapshot() {
    return this._rdc.request({
      type: "SDK_GET_FS_SNAPSHOT",
      payload: {}
    });
  }
};
var $e = [];
var Jo = class {
  constructor(t) {
    this.id = ln(), this.element = t, this.pending = new Promise((n, o) => {
      const i = ({ data: a, ports: p }) => {
        (a == null ? void 0 : a.action) === "SDK_INIT_SUCCESS" && a.id === this.id && (this.vm = new Go(p[0], a.payload), n(this.vm), l());
      }, r = () => {
        var a;
        (a = this.element.contentWindow) == null || a.postMessage(
          {
            action: "SDK_INIT",
            id: this.id
          },
          "*"
        );
      };
      function l() {
        window.clearInterval(s), window.removeEventListener("message", i);
      }
      window.addEventListener("message", i), r();
      let c = 0;
      const s = window.setInterval(() => {
        if (this.vm) {
          l();
          return;
        }
        if (c >= Do) {
          l(), o("Timeout: Unable to establish a connection with the StackBlitz VM"), $e.forEach((a, p) => {
            a.id === this.id && $e.splice(p, 1);
          });
          return;
        }
        c++, r();
      }, Bo);
    }), $e.push(this);
  }
};
var Ko = (e) => {
  const t = e instanceof Element ? "element" : "id";
  return $e.find((n) => n[t] === e) ?? null;
};
function Yo(e, t) {
  const n = document.createElement("input");
  return n.type = "hidden", n.name = e, n.value = t, n;
}
function Xo(e) {
  return e.replace(/\[/g, "%5B").replace(/\]/g, "%5D");
}
function dn({
  template: e,
  title: t,
  description: n,
  dependencies: o,
  files: i,
  settings: r
}) {
  if (!Ct.includes(e)) {
    const a = Ct.map((p) => `'${p}'`).join(", ");
    console.warn(`Unsupported project.template: must be one of ${a}`);
  }
  const l = [], c = (a, p, d = "") => {
    l.push(Yo(a, typeof p == "string" ? p : d));
  };
  c("project[title]", t), typeof n == "string" && n.length > 0 && c("project[description]", n), c("project[template]", e, "javascript"), o && (e === "node" ? console.warn(
    "Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."
  ) : c("project[dependencies]", JSON.stringify(o))), r && c("project[settings]", JSON.stringify(r)), Object.entries(i).forEach(([a, p]) => {
    c(`project[files][${Xo(a)}]`, p);
  });
  const s = document.createElement("form");
  return s.method = "POST", s.setAttribute("style", "display:none!important;"), s.append(...l), s;
}
function Zo(e, t) {
  const n = dn(e);
  return n.action = it("/run", t), n.id = "sb_run", `<!doctype html>
<html>
<head><title></title></head>
<body>
  ${n.outerHTML}
  <script>document.getElementById('${n.id}').submit();<\/script>
</body>
</html>`;
}
function Qo(e, t) {
  const n = dn(e);
  n.action = ot("/run", t), n.target = at(t), document.body.appendChild(n), n.submit(), document.body.removeChild(n);
}
function Ne(e) {
  return e != null && e.contentWindow ? (Ko(e) ?? new Jo(e)).pending : Promise.reject("Provided element is not an iframe.");
}
function ei(e, t) {
  Qo(e, t);
}
function ti(e, t) {
  const n = ot(`/edit/${e}`, t), o = at(t);
  window.open(n, o);
}
function ni(e, t) {
  const n = ot(`/github/${e}`, t), o = at(t);
  window.open(n, o);
}
function oi(e, t, n) {
  var l;
  const o = rt(e), i = Zo(t, n), r = document.createElement("iframe");
  return st(o, r, n), (l = r.contentDocument) == null || l.write(i), Ne(r);
}
function ii(e, t, n) {
  const o = rt(e), i = document.createElement("iframe");
  return i.src = it(`/edit/${t}`, n), st(o, i, n), Ne(i);
}
function si(e, t, n) {
  const o = rt(e), i = document.createElement("iframe");
  return i.src = it(`/github/${t}`, n), st(o, i, n), Ne(i);
}
var ri = {
  connect: Ne,
  embedGithubProject: si,
  embedProject: oi,
  embedProjectId: ii,
  openGithubProject: ni,
  openProject: ei,
  openProjectId: ti
};
var ai = (e) => {
  const t = {}, n = {
    "index.html": Yt,
    "vite.config.ts": Xt,
    "tsconfig.json": Zt,
    "tsconfig.node.json": Qt,
    _gitignore: en,
    ".vscode/extensions.json": tn,
    "src/vite-env.d.ts": nn,
    "src/main.ts": on,
    "src/style.css": sn,
    ".stackblitzrc": `
  {
  "installDependencies": true,
  "startCommand": "npm run dev",
  "env": {
    "NODE_ENV": "development"
  }
}
    `
  }, o = {
    title: e.title || "",
    description: e.desc || "An auto-generated demo by vitepress",
    template: "node",
    files: {}
  };
  if (e.importMap)
    try {
      let i = e.importMap;
      typeof i == "string" && (i = JSON.parse(decodeURIComponent(e.importMap))), Object.keys(i).forEach((r) => {
        t[r] = rn(i[r]) || "latest";
      });
    } catch {
    }
  t.vue ?? (t.vue = "latest"), n["package.json"] = JSON.stringify(
    {
      name: e.title,
      description: e.desc || "An auto-generated demo by vitepress",
      private: true,
      version: "0.0.0",
      type: "module",
      scripts: {
        dev: "vite",
        build: "vue-tsc && vite build",
        preview: "vite preview"
      },
      dependencies: t,
      devDependencies: {
        "@vitejs/plugin-vue": "^5.0.4",
        "@vitejs/plugin-vue-jsx": "^3.1.0",
        "unplugin-vue-macros": "^2.7.10",
        typescript: "^5.2.2",
        vite: "^5.2.8",
        "vue-tsc": "^2.0.11"
      }
    },
    null,
    2
  ), n["src/App.vue"] = nt(e.content), o.files = n, ri.openProject({
    ...o,
    settings: {
      compile: {
        trigger: "auto",
        clearConsole: false
      }
    }
  });
};
var ze = {};
var lt = { exports: {} };
lt.exports;
(function(e) {
  var t = function() {
    var n = String.fromCharCode, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", r = {};
    function l(s, a) {
      if (!r[s]) {
        r[s] = {};
        for (var p = 0; p < s.length; p++)
          r[s][s.charAt(p)] = p;
      }
      return r[s][a];
    }
    var c = {
      compressToBase64: function(s) {
        if (s == null)
          return "";
        var a = c._compress(s, 6, function(p) {
          return o.charAt(p);
        });
        switch (a.length % 4) {
          default:
          case 0:
            return a;
          case 1:
            return a + "===";
          case 2:
            return a + "==";
          case 3:
            return a + "=";
        }
      },
      decompressFromBase64: function(s) {
        return s == null ? "" : s == "" ? null : c._decompress(s.length, 32, function(a) {
          return l(o, s.charAt(a));
        });
      },
      compressToUTF16: function(s) {
        return s == null ? "" : c._compress(s, 15, function(a) {
          return n(a + 32);
        }) + " ";
      },
      decompressFromUTF16: function(s) {
        return s == null ? "" : s == "" ? null : c._decompress(s.length, 16384, function(a) {
          return s.charCodeAt(a) - 32;
        });
      },
      //compress into uint8array (UCS-2 big endian format)
      compressToUint8Array: function(s) {
        for (var a = c.compress(s), p = new Uint8Array(a.length * 2), d = 0, u = a.length; d < u; d++) {
          var f = a.charCodeAt(d);
          p[d * 2] = f >>> 8, p[d * 2 + 1] = f % 256;
        }
        return p;
      },
      //decompress from uint8array (UCS-2 big endian format)
      decompressFromUint8Array: function(s) {
        if (s == null)
          return c.decompress(s);
        for (var a = new Array(s.length / 2), p = 0, d = a.length; p < d; p++)
          a[p] = s[p * 2] * 256 + s[p * 2 + 1];
        var u = [];
        return a.forEach(function(f) {
          u.push(n(f));
        }), c.decompress(u.join(""));
      },
      //compress into a string that is already URI encoded
      compressToEncodedURIComponent: function(s) {
        return s == null ? "" : c._compress(s, 6, function(a) {
          return i.charAt(a);
        });
      },
      //decompress from an output of compressToEncodedURIComponent
      decompressFromEncodedURIComponent: function(s) {
        return s == null ? "" : s == "" ? null : (s = s.replace(/ /g, "+"), c._decompress(s.length, 32, function(a) {
          return l(i, s.charAt(a));
        }));
      },
      compress: function(s) {
        return c._compress(s, 16, function(a) {
          return n(a);
        });
      },
      _compress: function(s, a, p) {
        if (s == null)
          return "";
        var d, u, f = {}, g = {}, y = "", S = "", v = "", _ = 2, b = 3, $ = 2, x = [], h = 0, m = 0, w;
        for (w = 0; w < s.length; w += 1)
          if (y = s.charAt(w), Object.prototype.hasOwnProperty.call(f, y) || (f[y] = b++, g[y] = true), S = v + y, Object.prototype.hasOwnProperty.call(f, S))
            v = S;
          else {
            if (Object.prototype.hasOwnProperty.call(g, v)) {
              if (v.charCodeAt(0) < 256) {
                for (d = 0; d < $; d++)
                  h = h << 1, m == a - 1 ? (m = 0, x.push(p(h)), h = 0) : m++;
                for (u = v.charCodeAt(0), d = 0; d < 8; d++)
                  h = h << 1 | u & 1, m == a - 1 ? (m = 0, x.push(p(h)), h = 0) : m++, u = u >> 1;
              } else {
                for (u = 1, d = 0; d < $; d++)
                  h = h << 1 | u, m == a - 1 ? (m = 0, x.push(p(h)), h = 0) : m++, u = 0;
                for (u = v.charCodeAt(0), d = 0; d < 16; d++)
                  h = h << 1 | u & 1, m == a - 1 ? (m = 0, x.push(p(h)), h = 0) : m++, u = u >> 1;
              }
              _--, _ == 0 && (_ = Math.pow(2, $), $++), delete g[v];
            } else
              for (u = f[v], d = 0; d < $; d++)
                h = h << 1 | u & 1, m == a - 1 ? (m = 0, x.push(p(h)), h = 0) : m++, u = u >> 1;
            _--, _ == 0 && (_ = Math.pow(2, $), $++), f[S] = b++, v = String(y);
          }
        if (v !== "") {
          if (Object.prototype.hasOwnProperty.call(g, v)) {
            if (v.charCodeAt(0) < 256) {
              for (d = 0; d < $; d++)
                h = h << 1, m == a - 1 ? (m = 0, x.push(p(h)), h = 0) : m++;
              for (u = v.charCodeAt(0), d = 0; d < 8; d++)
                h = h << 1 | u & 1, m == a - 1 ? (m = 0, x.push(p(h)), h = 0) : m++, u = u >> 1;
            } else {
              for (u = 1, d = 0; d < $; d++)
                h = h << 1 | u, m == a - 1 ? (m = 0, x.push(p(h)), h = 0) : m++, u = 0;
              for (u = v.charCodeAt(0), d = 0; d < 16; d++)
                h = h << 1 | u & 1, m == a - 1 ? (m = 0, x.push(p(h)), h = 0) : m++, u = u >> 1;
            }
            _--, _ == 0 && (_ = Math.pow(2, $), $++), delete g[v];
          } else
            for (u = f[v], d = 0; d < $; d++)
              h = h << 1 | u & 1, m == a - 1 ? (m = 0, x.push(p(h)), h = 0) : m++, u = u >> 1;
          _--, _ == 0 && (_ = Math.pow(2, $), $++);
        }
        for (u = 2, d = 0; d < $; d++)
          h = h << 1 | u & 1, m == a - 1 ? (m = 0, x.push(p(h)), h = 0) : m++, u = u >> 1;
        for (; ; )
          if (h = h << 1, m == a - 1) {
            x.push(p(h));
            break;
          } else
            m++;
        return x.join("");
      },
      decompress: function(s) {
        return s == null ? "" : s == "" ? null : c._decompress(s.length, 32768, function(a) {
          return s.charCodeAt(a);
        });
      },
      _decompress: function(s, a, p) {
        var d = [], u = 4, f = 4, g = 3, y = "", S = [], v, _, b, $, x, h, m, w = { val: p(0), position: a, index: 1 };
        for (v = 0; v < 3; v += 1)
          d[v] = v;
        for (b = 0, x = Math.pow(2, 2), h = 1; h != x; )
          $ = w.val & w.position, w.position >>= 1, w.position == 0 && (w.position = a, w.val = p(w.index++)), b |= ($ > 0 ? 1 : 0) * h, h <<= 1;
        switch (b) {
          case 0:
            for (b = 0, x = Math.pow(2, 8), h = 1; h != x; )
              $ = w.val & w.position, w.position >>= 1, w.position == 0 && (w.position = a, w.val = p(w.index++)), b |= ($ > 0 ? 1 : 0) * h, h <<= 1;
            m = n(b);
            break;
          case 1:
            for (b = 0, x = Math.pow(2, 16), h = 1; h != x; )
              $ = w.val & w.position, w.position >>= 1, w.position == 0 && (w.position = a, w.val = p(w.index++)), b |= ($ > 0 ? 1 : 0) * h, h <<= 1;
            m = n(b);
            break;
          case 2:
            return "";
        }
        for (d[3] = m, _ = m, S.push(m); ; ) {
          if (w.index > s)
            return "";
          for (b = 0, x = Math.pow(2, g), h = 1; h != x; )
            $ = w.val & w.position, w.position >>= 1, w.position == 0 && (w.position = a, w.val = p(w.index++)), b |= ($ > 0 ? 1 : 0) * h, h <<= 1;
          switch (m = b) {
            case 0:
              for (b = 0, x = Math.pow(2, 8), h = 1; h != x; )
                $ = w.val & w.position, w.position >>= 1, w.position == 0 && (w.position = a, w.val = p(w.index++)), b |= ($ > 0 ? 1 : 0) * h, h <<= 1;
              d[f++] = n(b), m = f - 1, u--;
              break;
            case 1:
              for (b = 0, x = Math.pow(2, 16), h = 1; h != x; )
                $ = w.val & w.position, w.position >>= 1, w.position == 0 && (w.position = a, w.val = p(w.index++)), b |= ($ > 0 ? 1 : 0) * h, h <<= 1;
              d[f++] = n(b), m = f - 1, u--;
              break;
            case 2:
              return S.join("");
          }
          if (u == 0 && (u = Math.pow(2, g), g++), d[m])
            y = d[m];
          else if (m === f)
            y = _ + _.charAt(0);
          else
            return null;
          S.push(y), d[f++] = _ + y.charAt(0), u--, _ = y, u == 0 && (u = Math.pow(2, g), g++);
        }
      }
    };
    return c;
  }();
  e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return t;
  });
})(lt);
var li = lt.exports;
Object.defineProperty(ze, "__esModule", { value: true });
ze.getParameters = void 0;
var ci = li;
function di(e) {
  return ci.compressToBase64(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function pi(e) {
  return di(JSON.stringify(e));
}
ze.getParameters = pi;
var pn = void 0;
var ui = ze;
pn = ui.getParameters;
var hi = "https://codesandbox.io/api/v1/sandboxes/define";
function fi(e) {
  const t = {
    "vite.config.ts": {
      content: Xt,
      isBinary: false
    },
    "tsconfig.json": {
      content: Zt,
      isBinary: false
    },
    "tsconfig.node.json": {
      content: Qt,
      isBinary: false
    },
    ".gitignore": {
      content: en,
      isBinary: false
    },
    ".vscode/extensions.json": {
      content: tn,
      isBinary: false
    },
    "index.html": {
      content: Yt,
      isBinary: false
    },
    "src/vite-env.d.ts": {
      content: nn,
      isBinary: false
    },
    "src/main.ts": {
      content: on,
      isBinary: false
    },
    "src/style.css": {
      content: sn,
      isBinary: false
    },
    "sandbox.config.json": {
      content: ko,
      isBinary: false
    }
  }, n = {};
  if (e.importMap)
    try {
      let o = e.importMap;
      typeof o == "string" && (o = JSON.parse(decodeURIComponent(e.importMap))), Object.keys(o).forEach((i) => {
        n[i] = rn(o[i]) || "latest";
      });
    } catch {
    }
  return n.vue ?? (n.vue = "latest"), t["package.json"] = {
    content: JSON.stringify(
      {
        name: e.title,
        description: e.desc || "An auto-generated demo by vitepress",
        private: true,
        version: "0.0.0",
        type: "module",
        scripts: {
          dev: "vite",
          build: "vue-tsc && vite build",
          preview: "vite preview"
        },
        dependencies: n,
        devDependencies: {
          "@vitejs/plugin-vue": "^5.0.4",
          "@vitejs/plugin-vue-jsx": "^3.1.0",
          "unplugin-vue-macros": "^2.7.10",
          typescript: "^5.2.2",
          vite: "^5.2.8",
          "vue-tsc": "^2.0.11"
        }
      },
      null,
      2
    ),
    isBinary: false
  }, t["src/App.vue"] = {
    content: nt(e.content),
    isBinary: false
  }, pn({
    files: t,
    template: "node"
  });
}
var mi = (e) => {
  const t = document.createElement("form"), n = document.createElement("input"), o = document.createElement("input"), i = document.createElement("input"), r = fi(e), l = new URLSearchParams({
    parameters: r,
    query: new URLSearchParams({
      utm_medium: "sandpack"
    }).toString()
  }), c = Array.from(l);
  t.method = "POST", t.target = "_blank", t.style.display = "none", t.action = hi, t.appendChild(n), t.setAttribute("data-demo", e.title || "");
  const s = c.find((p) => p[0] === "parameters"), a = c.find((p) => p[0] === "query");
  n.name = s[0], n.value = s[1], i.name = a[0], i.type = "hidden", i.value = a[1], o.name = "environment", o.type = "hidden", o.value = "server", document.body.appendChild(t), t.submit(), t.remove();
};
var gi = { class: "playground-platforms-button" };
var vi = defineComponent({
  __name: "Playground",
  props: {
    content: {},
    importMap: {},
    title: {},
    desc: {}
  },
  setup(e) {
    const t = e, n = (o) => {
      switch (o) {
        case "sfc":
          Ro(t);
          break;
        case "stackblitz":
          ai(t);
          break;
        case "codesandbox":
          mi(t);
          break;
        default:
          console.warn("[vitepress-playground]: not support");
          break;
      }
    };
    return (o, i) => (openBlock(), createElementBlock("div", gi, [
      createVNode(unref(xe), { placement: "top" }, {
        popper: withCtx(() => [
          createTextVNode("vue sfc")
        ]),
        default: withCtx(() => [
          createBaseVNode("div", {
            class: "button",
            onClick: i[0] || (i[0] = withModifiers((r) => n("sfc"), ["stop"]))
          }, [
            createVNode(ce, { type: "sfc" })
          ])
        ]),
        _: 1
      }),
      createVNode(unref(xe), { placement: "top" }, {
        popper: withCtx(() => [
          createTextVNode("stackblitz")
        ]),
        default: withCtx(() => [
          createBaseVNode("div", {
            class: "button",
            onClick: i[1] || (i[1] = withModifiers((r) => n("stackblitz"), ["stop"]))
          }, [
            createVNode(ce, { type: "stackblitz" })
          ])
        ]),
        _: 1
      }),
      createVNode(unref(xe), { placement: "top" }, {
        popper: withCtx(() => [
          createTextVNode("codesandbox")
        ]),
        default: withCtx(() => [
          createBaseVNode("div", {
            class: "button",
            onClick: i[2] || (i[2] = withModifiers((r) => n("codesandbox"), ["stop"]))
          }, [
            createVNode(ce, { type: "codesandbox" })
          ])
        ]),
        _: 1
      })
    ]));
  }
});
var wi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
};
var yi = wi(vi, [["__scopeId", "data-v-48e11b22"]]);
function _i(e) {
  const t = reactive({
    showTip: false
  });
  function n() {
    navigator.clipboard.writeText(e), t.showTip = true, setTimeout(() => {
      t.showTip = false;
    }, 5 * 1e3);
  }
  return {
    ...toRefs(t),
    copyCode: n
  };
}
var bi = {
  key: 1,
  class: "playground-slot-empty"
};
var xi = { class: "playground-title-desc" };
var $i = { class: "playground-title" };
var Si = { class: "playground-desc" };
var Ti = { class: "playground-actions" };
var Pi = { class: "playground-platforms" };
var Ai = { class: "playground-buttons" };
var Ci = { class: "playground-actions-copy" };
var Oi = { class: "playground-actions-tip" };
var Ei = ["innerHTML"];
var ki = defineComponent({
  __name: "index",
  props: {
    code: { default: "" },
    highlightedCode: { default: "" },
    title: { default: "" },
    desc: { default: "" },
    lang: { default: "vue" },
    defaultExpand: { type: Boolean, default: false },
    importMap: { default: () => ({}) },
    enableIntersectionObserver: { default: true }
  },
  setup(e) {
    const t = e, n = ref(), o = ref(true), i = computed(() => decodeURIComponent(t.code)), { showTip: r, copyCode: l } = _i(i.value), c = computed(() => decodeURIComponent(t.highlightedCode)), s = ref(t.defaultExpand), a = () => s.value = !s.value;
    let p;
    function d(f, g) {
      let y = null;
      return (...S) => {
        clearTimeout(y), y = setTimeout(() => {
          f(...S);
        }, g);
      };
    }
    const u = (f) => {
      f[0].isIntersecting ? o.value = true : o.value = false;
    };
    return onMounted(() => {
      t.enableIntersectionObserver === "true" && (p = new IntersectionObserver(d(u, 150)), nextTick(() => {
        p.observe(n.value);
      }));
    }), onUnmounted(() => {
      p && (p.disconnect(), p = null);
    }), (f, g) => {
      const y = resolveComponent("ClientOnly");
      return openBlock(), createBlock(y, null, {
        default: withCtx(() => [
          createBaseVNode("article", mergeProps(f.$attrs, { class: "vitepress-playground" }), [
            createBaseVNode("div", {
              ref_key: "playgroundRef",
              ref: n,
              class: "playground-slot vp-raw"
            }, [
              o.value ? renderSlot(f.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock("div", bi))
            ], 512),
            withDirectives(createBaseVNode("div", xi, [
              createBaseVNode("span", $i, toDisplayString(f.title), 1),
              createBaseVNode("span", Si, toDisplayString(f.desc), 1)
            ], 512), [
              [vShow, f.title || f.desc]
            ]),
            createBaseVNode("div", Ti, [
              createBaseVNode("div", Pi, [
                createVNode(yi, {
                  title: f.title,
                  desc: f.desc,
                  content: i.value,
                  importMap: f.importMap
                }, null, 8, ["title", "desc", "content", "importMap"])
              ]),
              createBaseVNode("div", Ai, [
                createBaseVNode("div", Ci, [
                  withDirectives(createBaseVNode("span", Oi, "复制成功!", 512), [
                    [vShow, unref(r)]
                  ]),
                  withDirectives(createVNode(ce, {
                    type: "copy",
                    onClick: unref(l),
                    title: "复制"
                  }, null, 8, ["onClick"]), [
                    [vShow, !unref(r)]
                  ])
                ]),
                createVNode(unref(xe), null, {
                  popper: withCtx(() => [
                    createTextVNode(toDisplayString(s.value ? "收起" : "展开"), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode(ce, {
                      type: "code",
                      class: "playground-actions-expand",
                      onClick: g[0] || (g[0] = (S) => a()),
                      title: s.value ? "收起" : "展开"
                    }, null, 8, ["title"])
                  ]),
                  _: 1
                })
              ])
            ]),
            withDirectives(createBaseVNode("div", {
              innerHTML: c.value,
              class: normalizeClass(`language-${f.lang} extra-class`)
            }, null, 10, Ei), [
              [vShow, s.value]
            ])
          ], 16)
        ]),
        _: 3
      });
    };
  }
});
export {
  ki as SfcPlayground,
  ki as default,
  _i as useCopy
};
//# sourceMappingURL=@sakitam-gis_vitepress-playground.js.map
