"use strict";
if (function (e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
            if (!e.document)throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : void 0, function (e, t) {
        function n(e) {
            var t = e.length, n = J.type(e);
            return "function" === n || J.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (J.isFunction(t))return J.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType)return J.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (ae.test(t))return J.filter(t, e, n);
                t = J.filter(t, e)
            }
            return J.grep(e, function (e) {
                return V.call(t, e) >= 0 !== n
            })
        }

        function r(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function o(e) {
            var t = fe[e] = {};
            return J.each(e.match(he) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function s() {
            K.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), J.ready()
        }

        function a() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function () {
                    return {}
                }
            }), this.expando = J.expando + a.uid++
        }

        function l(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)if (i = "data-" + t.replace(xe, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : be.test(n) ? J.parseJSON(n) : n
                } catch (r) {
                }
                ye.set(e, t, n)
            } else n = void 0;
            return n
        }

        function c() {
            return !0
        }

        function u() {
            return !1
        }

        function d() {
            try {
                return K.activeElement
            } catch (e) {
            }
        }

        function p(e, t) {
            return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function h(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function f(e) {
            var t = qe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function g(e, t) {
            for (var n = 0, i = e.length; i > n; n++)ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
        }

        function m(e, t) {
            var n, i, r, o, s, a, l, c;
            if (1 === t.nodeType) {
                if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), c = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in c)for (n = 0, i = c[r].length; i > n; n++)J.event.add(t, r, c[r][n])
                }
                ye.hasData(e) && (a = ye.access(e), l = J.extend({}, a), ye.set(t, l))
            }
        }

        function v(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && J.nodeName(e, t) ? J.merge([e], n) : n
        }

        function y(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && $e.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

        function b(t, n) {
            var i, r = J(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : J.css(r[0], "display");
            return r.detach(), o
        }

        function x(e) {
            var t = K, n = Me[e];
            return n || (n = b(e, t), "none" !== n && n || (He = (He || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = He[0].contentDocument, t.write(), t.close(), n = b(e, t), He.detach()), Me[e] = n), n
        }

        function w(e, t, n) {
            var i, r, o, s, a = e.style;
            return n = n || We(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || J.contains(e.ownerDocument, e) || (s = J.style(e, t)), Ue.test(s) && Fe.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function C(e, t) {
            return {
                get: function () {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function T(e, t) {
            if (t in e)return t;
            for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Xe.length; r--;)if (t = Xe[r] + n, t in e)return t;
            return i
        }

        function $(e, t, n) {
            var i = ze.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function E(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += J.css(e, n + Ce[o], !0, r)), i ? ("content" === n && (s -= J.css(e, "padding" + Ce[o], !0, r)), "margin" !== n && (s -= J.css(e, "border" + Ce[o] + "Width", !0, r))) : (s += J.css(e, "padding" + Ce[o], !0, r), "padding" !== n && (s += J.css(e, "border" + Ce[o] + "Width", !0, r)));
            return s
        }

        function S(e, t, n) {
            var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, o = We(e), s = "border-box" === J.css(e, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = w(e, t, o), (0 > r || null == r) && (r = e.style[t]), Ue.test(r))return r;
                i = s && (G.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + E(e, t, n || (s ? "border" : "content"), i, o) + "px"
        }

        function A(e, t) {
            for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++)i = e[s], i.style && (o[s] = ve.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Te(i) && (o[s] = ve.access(i, "olddisplay", x(i.nodeName)))) : (r = Te(i), "none" === n && r || ve.set(i, "olddisplay", r ? n : J.css(i, "display"))));
            for (s = 0; a > s; s++)i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
            return e
        }

        function k(e, t, n, i, r) {
            return new k.prototype.init(e, t, n, i, r)
        }

        function N() {
            return setTimeout(function () {
                Ge = void 0
            }), Ge = J.now()
        }

        function _(e, t) {
            var n, i = 0, r = {height: e};
            for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = Ce[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function D(e, t, n) {
            for (var i, r = (nt[t] || []).concat(nt["*"]), o = 0, s = r.length; s > o; o++)if (i = r[o].call(n, t, e))return i
        }

        function O(e, t, n) {
            var i, r, o, s, a, l, c, u, d = this, p = {}, h = e.style, f = e.nodeType && Te(e), g = ve.get(e, "fxshow");
            n.queue || (a = J._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, d.always(function () {
                d.always(function () {
                    a.unqueued--, J.queue(e, "fx").length || a.empty.fire()
                })
            })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = J.css(e, "display"), u = "none" === c ? ve.get(e, "olddisplay") || x(e.nodeName) : c, "inline" === u && "none" === J.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (i in t)if (r = t[i], Ze.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i])continue;
                    f = !0
                }
                p[i] = g && g[i] || J.style(e, i)
            } else c = void 0;
            if (J.isEmptyObject(p))"inline" === ("none" === c ? x(e.nodeName) : c) && (h.display = c); else {
                g ? "hidden"in g && (f = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !f), f ? J(e).show() : d.done(function () {
                    J(e).hide()
                }), d.done(function () {
                    var t;
                    ve.remove(e, "fxshow");
                    for (t in p)J.style(e, t, p[t])
                });
                for (i in p)s = D(f ? g[i] : 0, i, d), i in g || (g[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function j(e, t) {
            var n, i, r, o, s;
            for (n in e)if (i = J.camelCase(n), r = t[i], o = e[n], J.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = J.cssHooks[i], s && "expand"in s) {
                o = s.expand(o), delete e[i];
                for (n in o)n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
        }

        function I(e, t, n) {
            var i, r, o = 0, s = tt.length, a = J.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (r)return !1;
                for (var t = Ge || N(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; l > s; s++)c.tweens[s].run(o);
                return a.notifyWith(e, [c, o, n]), 1 > o && l ? n : (a.resolveWith(e, [c]), !1)
            }, c = a.promise({
                elem: e,
                props: J.extend({}, t),
                opts: J.extend(!0, {specialEasing: {}}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ge || N(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = J.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0, i = t ? c.tweens.length : 0;
                    if (r)return this;
                    for (r = !0; i > n; n++)c.tweens[n].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }), u = c.props;
            for (j(u, c.opts.specialEasing); s > o; o++)if (i = tt[o].call(c, e, u, c.opts))return i;
            return J.map(u, D, c), J.isFunction(c.opts.start) && c.opts.start.call(e, c), J.fx.timer(J.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function L(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0, o = t.toLowerCase().match(he) || [];
                if (J.isFunction(n))for (; i = o[r++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function q(e, t, n, i) {
            function r(a) {
                var l;
                return o[a] = !0, J.each(e[a] || [], function (e, a) {
                    var c = a(t, n, i);
                    return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
                }), l
            }

            var o = {}, s = e === bt;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function R(e, t) {
            var n, i, r = J.ajaxSettings.flatOptions || {};
            for (n in t)void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && J.extend(!0, e, i), e
        }

        function P(e, t, n) {
            for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)for (r in a)if (a[r] && a[r].test(i)) {
                l.unshift(r);
                break
            }
            if (l[0]in n)o = l[0]; else {
                for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    s || (s = r)
                }
                o = o || s
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function H(e, t, n, i) {
            var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
            if (u[1])for (s in e.converters)c[s.toLowerCase()] = e.converters[s];
            for (o = u.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
                if (s = c[l + " " + o] || c["* " + o], !s)for (r in c)if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                    s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
                    break
                }
                if (s !== !0)if (s && e["throws"])t = s(t); else try {
                    t = s(t)
                } catch (d) {
                    return {state: "parsererror", error: s ? d : "No conversion from " + l + " to " + o}
                }
            }
            return {state: "success", data: t}
        }

        function M(e, t, n, i) {
            var r;
            if (J.isArray(t))J.each(t, function (t, r) {
                n || $t.test(e) ? i(e, r) : M(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            }); else if (n || "object" !== J.type(t))i(e, t); else for (r in t)M(e + "[" + r + "]", t[r], n, i)
        }

        function F(e) {
            return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }

        var U = [], W = U.slice, B = U.concat, z = U.push, V = U.indexOf, Q = {}, Y = Q.toString, X = Q.hasOwnProperty, G = {}, K = e.document, Z = "2.1.3", J = function Pt(e, t) {
            return new Pt.fn.init(e, t)
        }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ne = /-([\da-z])/gi, ie = function (e, t) {
            return t.toUpperCase()
        };
        J.fn = J.prototype = {
            jquery: Z, constructor: J, selector: "", length: 0, toArray: function () {
                return W.call(this)
            }, get: function (e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : W.call(this)
            }, pushStack: function (e) {
                var t = J.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            }, each: function (e, t) {
                return J.each(this, e, t)
            }, map: function (e) {
                return this.pushStack(J.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(W.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: z, sort: U.sort, splice: U.splice
        }, J.extend = J.fn.extend = function () {
            var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || J.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)if (null != (e = arguments[a]))for (t in e)n = s[t], i = e[t], s !== i && (c && i && (J.isPlainObject(i) || (r = J.isArray(i))) ? (r ? (r = !1, o = n && J.isArray(n) ? n : []) : o = n && J.isPlainObject(n) ? n : {}, s[t] = J.extend(c, o, i)) : void 0 !== i && (s[t] = i));
            return s
        }, J.extend({
            expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isFunction: function (e) {
                return "function" === J.type(e)
            }, isArray: Array.isArray, isWindow: function (e) {
                return null != e && e === e.window
            }, isNumeric: function (e) {
                return !J.isArray(e) && e - parseFloat(e) + 1 >= 0
            }, isPlainObject: function (e) {
                return "object" !== J.type(e) || e.nodeType || J.isWindow(e) ? !1 : e.constructor && !X.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
            }, isEmptyObject: function (e) {
                var t;
                for (t in e)return !1;
                return !0
            }, type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[Y.call(e)] || "object" : typeof e
            }, globalEval: function (e) {
                var t, n = eval;
                e = J.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            }, camelCase: function (e) {
                return e.replace(te, "ms-").replace(ne, ie)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, each: function (e, t, i) {
                var r, o = 0, s = e.length, a = n(e);
                if (i) {
                    if (a)for (; s > o && (r = t.apply(e[o], i), r !== !1); o++); else for (o in e)if (r = t.apply(e[o], i), r === !1)break
                } else if (a)for (; s > o && (r = t.call(e[o], o, e[o]), r !== !1); o++); else for (o in e)if (r = t.call(e[o], o, e[o]), r === !1)break;
                return e
            }, trim: function (e) {
                return null == e ? "" : (e + "").replace(ee, "")
            }, makeArray: function (e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? J.merge(i, "string" == typeof e ? [e] : e) : z.call(i, e)), i
            }, inArray: function (e, t, n) {
                return null == t ? -1 : V.call(t, e, n)
            }, merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i; i++)e[r++] = t[i];
                return e.length = r, e
            }, grep: function (e, t, n) {
                for (var i, r = [], o = 0, s = e.length, a = !n; s > o; o++)i = !t(e[o], o), i !== a && r.push(e[o]);
                return r
            }, map: function (e, t, i) {
                var r, o = 0, s = e.length, a = n(e), l = [];
                if (a)for (; s > o; o++)r = t(e[o], o, i), null != r && l.push(r); else for (o in e)r = t(e[o], o, i), null != r && l.push(r);
                return B.apply([], l)
            }, guid: 1, proxy: function Ht(e, t) {
                var n, i, Ht;
                return "string" == typeof t && (n = e[t], t = e, e = n), J.isFunction(e) ? (i = W.call(arguments, 2), Ht = function () {
                    return e.apply(t || this, i.concat(W.call(arguments)))
                }, Ht.guid = e.guid = e.guid || J.guid++, Ht) : void 0
            }, now: Date.now, support: G
        }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            Q["[object " + t + "]"] = t.toLowerCase()
        });
        var re = function (e) {
            function t(e, t, n, i) {
                var r, o, s, a, l, c, d, h, f, g;
                if ((t ? t.ownerDocument || t : M) !== O && D(t), t = t || O, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a)return n;
                if (!i && I) {
                    if (11 !== a && (r = ye.exec(e)))if (s = r[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s), !o || !o.parentNode)return n;
                            if (o.id === s)return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && P(t, o) && o.id === s)return n.push(o), n
                    } else {
                        if (r[2])return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = r[3]) && w.getElementsByClassName)return Z.apply(n, t.getElementsByClassName(s)), n
                    }
                    if (w.qsa && (!L || !L.test(e))) {
                        if (h = d = H, f = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (c = E(e), (d = t.getAttribute("id")) ? h = d.replace(xe, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;)c[l] = h + p(c[l]);
                            f = be.test(e) && u(t.parentNode) || t, g = c.join(",")
                        }
                        if (g)try {
                            return Z.apply(n, f.querySelectorAll(g)), n
                        } catch (m) {
                        } finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return A(e.replace(le, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
                }

                var t = [];
                return e
            }

            function i(e) {
                return e[H] = !0, e
            }

            function r(e) {
                var t = O.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = e.length; i--;)C.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                return e ? 1 : -1
            }

            function a(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return i(function (t) {
                    return t = +t, i(function (n, i) {
                        for (var r, o = e([], n.length, t), s = o.length; s--;)n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function u(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function d() {
            }

            function p(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++)i += e[t].value;
                return i
            }

            function h(e, t, n) {
                var i = t.dir, r = n && "parentNode" === i, o = U++;
                return t.first ? function (t, n, o) {
                    for (; t = t[i];)if (1 === t.nodeType || r)return e(t, n, o)
                } : function (t, n, s) {
                    var a, l, c = [F, o];
                    if (s) {
                        for (; t = t[i];)if ((1 === t.nodeType || r) && e(t, n, s))return !0
                    } else for (; t = t[i];)if (1 === t.nodeType || r) {
                        if (l = t[H] || (t[H] = {}), (a = l[i]) && a[0] === F && a[1] === o)return c[2] = a[2];
                        if (l[i] = c, c[2] = e(t, n, s))return !0
                    }
                }
            }

            function f(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var r = e.length; r--;)if (!e[r](t, n, i))return !1;
                    return !0
                } : e[0]
            }

            function g(e, n, i) {
                for (var r = 0, o = n.length; o > r; r++)t(e, n[r], i);
                return i
            }

            function m(e, t, n, i, r) {
                for (var o, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), c && t.push(a));
                return s
            }

            function v(e, t, n, r, o, s) {
                return r && !r[H] && (r = v(r)), o && !o[H] && (o = v(o, s)), i(function (i, s, a, l) {
                    var c, u, d, p = [], h = [], f = s.length, v = i || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !i && t ? v : m(v, p, e, a, l), b = n ? o || (i ? e : f || r) ? [] : s : y;
                    if (n && n(y, b, a, l), r)for (c = m(b, h), r(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[h[u]] = !(y[h[u]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                o(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = o ? ee(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
                        }
                    } else b = m(b === s ? b.splice(f, b.length) : b), o ? o(null, s, b, l) : Z.apply(s, b)
                })
            }

            function y(e) {
                for (var t, n, i, r = e.length, o = C.relative[e[0].type], s = o || C.relative[" "], a = o ? 1 : 0, l = h(function (e) {
                    return e === t
                }, s, !0), c = h(function (e) {
                    return ee(t, e) > -1
                }, s, !0), u = [function (e, n, i) {
                    var r = !o && (i || n !== k) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, r
                }]; r > a; a++)if (n = C.relative[e[a].type])u = [h(f(u), n)]; else {
                    if (n = C.filter[e[a].type].apply(null, e[a].matches), n[H]) {
                        for (i = ++a; r > i && !C.relative[e[i].type]; i++);
                        return v(a > 1 && f(u), a > 1 && p(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(le, "$1"), n, i > a && y(e.slice(a, i)), r > i && y(e = e.slice(i)), r > i && p(e))
                    }
                    u.push(n)
                }
                return f(u)
            }

            function b(e, n) {
                var r = n.length > 0, o = e.length > 0, s = function (i, s, a, l, c) {
                    var u, d, p, h = 0, f = "0", g = i && [], v = [], y = k, b = i || o && C.find.TAG("*", c), x = F += null == y ? 1 : Math.random() || .1, w = b.length;
                    for (c && (k = s !== O && s); f !== w && null != (u = b[f]); f++) {
                        if (o && u) {
                            for (d = 0; p = e[d++];)if (p(u, s, a)) {
                                l.push(u);
                                break
                            }
                            c && (F = x)
                        }
                        r && ((u = !p && u) && h--, i && g.push(u))
                    }
                    if (h += f, r && f !== h) {
                        for (d = 0; p = n[d++];)p(g, v, s, a);
                        if (i) {
                            if (h > 0)for (; f--;)g[f] || v[f] || (v[f] = G.call(l));
                            v = m(v)
                        }
                        Z.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (F = x, k = y), g
                };
                return r ? i(s) : s
            }

            var x, w, C, T, $, E, S, A, k, N, _, D, O, j, I, L, q, R, P, H = "sizzle" + 1 * new Date, M = e.document, F = 0, U = 0, W = n(), B = n(), z = n(), V = function (e, t) {
                return e === t && (_ = !0), 0
            }, Q = 1 << 31, Y = {}.hasOwnProperty, X = [], G = X.pop, K = X.push, Z = X.push, J = X.slice, ee = function (e, t) {
                for (var n = 0, i = e.length; i > n; n++)if (e[n] === t)return n;
                return -1
            }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = ie.replace("w", "w#"), oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ce = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), pe = new RegExp(se), he = new RegExp("^" + re + "$"), fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, xe = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Ce = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, Te = function () {
                D()
            };
            try {
                Z.apply(X = J.call(M.childNodes), M.childNodes), X[M.childNodes.length].nodeType
            } catch ($e) {
                Z = {
                    apply: X.length ? function (e, t) {
                        K.apply(e, J.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, $ = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, D = t.setDocument = function (e) {
                var t, n, i = e ? e.ownerDocument || e : M;
                return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, j = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), I = !$(i), w.attributes = r(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = r(function (e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = ve.test(i.getElementsByClassName), w.getById = r(function (e) {
                    return j.appendChild(e).id = H, !i.getElementsByName || !i.getElementsByName(H).length
                }), w.getById ? (C.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && I) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function (e) {
                    var t = e.replace(we, Ce);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete C.find.ID, C.filter.ID = function (e) {
                    var t = e.replace(we, Ce);
                    return function (e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), C.find.TAG = w.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [], r = 0, o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];)1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, C.find.CLASS = w.getElementsByClassName && function (e, t) {
                    return I ? t.getElementsByClassName(e) : void 0
                }, q = [], L = [], (w.qsa = ve.test(i.querySelectorAll)) && (r(function (e) {
                    j.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || L.push(".#.+[+~]")
                }), r(function (e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
                })), (w.matchesSelector = ve.test(R = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function (e) {
                    w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), q.push("!=", se)
                }), L = L.length && new RegExp(L.join("|")), q = q.length && new RegExp(q.join("|")), t = ve.test(j.compareDocumentPosition), P = t || ve.test(j.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)for (; t = t.parentNode;)if (t === e)return !0;
                    return !1
                }, V = t ? function (e, t) {
                    if (e === t)return _ = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === M && P(M, e) ? -1 : t === i || t.ownerDocument === M && P(M, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t)return _ = !0, 0;
                    var n, r = 0, o = e.parentNode, a = t.parentNode, l = [e], c = [t];
                    if (!o || !a)return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                    if (o === a)return s(e, t);
                    for (n = e; n = n.parentNode;)l.unshift(n);
                    for (n = t; n = n.parentNode;)c.unshift(n);
                    for (; l[r] === c[r];)r++;
                    return r ? s(l[r], c[r]) : l[r] === M ? -1 : c[r] === M ? 1 : 0
                }, i) : O
            }, t.matches = function (e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function (e, n) {
                if ((e.ownerDocument || e) !== O && D(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !I || q && q.test(n) || L && L.test(n)))try {
                    var i = R.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
                } catch (r) {
                }
                return t(n, O, null, [e]).length > 0
            }, t.contains = function (e, t) {
                return (e.ownerDocument || e) !== O && D(e), P(e, t)
            }, t.attr = function (e, t) {
                (e.ownerDocument || e) !== O && D(e);
                var n = C.attrHandle[t.toLowerCase()], i = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
                return void 0 !== i ? i : w.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function (e) {
                var t, n = [], i = 0, r = 0;
                if (_ = !w.detectDuplicates, N = !w.sortStable && e.slice(0), e.sort(V), _) {
                    for (; t = e[r++];)t === e[r] && (i = n.push(r));
                    for (; i--;)e.splice(n[i], 1)
                }
                return N = null, e
            }, T = t.getText = function (e) {
                var t, n = "", i = 0, r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)n += T(e)
                    } else if (3 === r || 4 === r)return e.nodeValue
                } else for (; t = e[i++];)n += T(t);
                return n
            }, C = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(we, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(we, Ce).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                    }, ATTR: function (e, n, i) {
                        return function (r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    }, CHILD: function (e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                        return 1 === i && 0 === r ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var c, u, d, p, h, f, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                                        f = g = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (u = m[H] || (m[H] = {}), c = u[e] || [], h = c[0] === F && c[1], p = c[0] === F && c[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (p = h = 0) || f.pop();)if (1 === d.nodeType && ++p && d === t) {
                                        u[e] = [F, h, p];
                                        break
                                    }
                                } else if (y && (c = (t[H] || (t[H] = {}))[e]) && c[0] === F)p = c[1]; else for (; (d = ++h && d && d[g] || (p = h = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[H] || (d[H] = {}))[e] = [F, p]), d !== t)););
                                return p -= r, p === i || p % i === 0 && p / i >= 0
                            }
                        }
                    }, PSEUDO: function (e, n) {
                        var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[H] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                            for (var i, r = o(e, n), s = r.length; s--;)i = ee(e, r[s]), e[i] = !(t[i] = r[s])
                        }) : function (e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function (e) {
                        var t = [], n = [], r = S(e.replace(le, "$1"));
                        return r[H] ? i(function (e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function (e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }), has: i(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
                        }
                    }), contains: i(function (e) {
                        return e = e.replace(we, Ce), function (t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                    }), lang: i(function (e) {
                        return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Ce).toLowerCase(), function (t) {
                            var n;
                            do if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === j
                    }, focus: function (e) {
                        return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: function (e) {
                        return e.disabled === !1
                    }, disabled: function (e) {
                        return e.disabled === !0
                    }, checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                        return !0
                    }, parent: function (e) {
                        return !C.pseudos.empty(e)
                    }, header: function (e) {
                        return me.test(e.nodeName)
                    }, input: function (e) {
                        return ge.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    }, first: c(function () {
                        return [0]
                    }), last: c(function (e, t) {
                        return [t - 1]
                    }), eq: c(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }), even: c(function (e, t) {
                        for (var n = 0; t > n; n += 2)e.push(n);
                        return e
                    }), odd: c(function (e, t) {
                        for (var n = 1; t > n; n += 2)e.push(n);
                        return e
                    }), lt: c(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;)e.push(i);
                        return e
                    }), gt: c(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;)e.push(i);
                        return e
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[x] = a(x);
            for (x in{submit: !0, reset: !0})C.pseudos[x] = l(x);
            return d.prototype = C.filters = C.pseudos, C.setFilters = new d, E = t.tokenize = function (e, n) {
                var i, r, o, s, a, l, c, u = B[e + " "];
                if (u)return n ? 0 : u.slice(0);
                for (a = e, l = [], c = C.preFilter; a;) {
                    (!i || (r = ce.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ue.exec(a)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(le, " ")
                    }), a = a.slice(i.length));
                    for (s in C.filter)!(r = fe[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i)break
                }
                return n ? a.length : a ? t.error(e) : B(e, l).slice(0)
            }, S = t.compile = function (e, t) {
                var n, i = [], r = [], o = z[e + " "];
                if (!o) {
                    for (t || (t = E(e)), n = t.length; n--;)o = y(t[n]), o[H] ? i.push(o) : r.push(o);
                    o = z(e, b(r, i)), o.selector = e
                }
                return o
            }, A = t.select = function (e, t, n, i) {
                var r, o, s, a, l, c = "function" == typeof e && e, d = !i && E(e = c.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && I && C.relative[o[1].type]) {
                        if (t = (C.find.ID(s.matches[0].replace(we, Ce), t) || [])[0], !t)return n;
                        c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !C.relative[a = s.type]);)if ((l = C.find[a]) && (i = l(s.matches[0].replace(we, Ce), be.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && p(o), !e)return Z.apply(n, i), n;
                        break
                    }
                }
                return (c || S(e, d))(i, t, !I, n, be.test(e) && u(t.parentNode) || t), n
            }, w.sortStable = H.split("").sort(V).join("") === H, w.detectDuplicates = !!_, D(), w.sortDetached = r(function (e) {
                return 1 & e.compareDocumentPosition(O.createElement("div"))
            }), r(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), r(function (e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function (e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        J.find = re, J.expr = re.selectors, J.expr[":"] = J.expr.pseudos, J.unique = re.uniqueSort, J.text = re.getText, J.isXMLDoc = re.isXML, J.contains = re.contains;
        var oe = J.expr.match.needsContext, se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ae = /^.[^:#\[\.,]*$/;
        J.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? J.find.matchesSelector(i, e) ? [i] : [] : J.find.matches(e, J.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, J.fn.extend({
            find: function (e) {
                var t, n = this.length, i = [], r = this;

                if ("string" != typeof e)return this.pushStack(J(e).filter(function () {
                    for (t = 0; n > t; t++)if (J.contains(r[t], this))return !0
                }));
                for (t = 0; n > t; t++)J.find(e, r[t], i);
                return i = this.pushStack(n > 1 ? J.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
            }, filter: function (e) {
                return this.pushStack(i(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(i(this, e || [], !0))
            }, is: function (e) {
                return !!i(this, "string" == typeof e && oe.test(e) ? J(e) : e || [], !1).length
            }
        });
        var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ue = J.fn.init = function (e, t) {
            var n, i;
            if (!e)return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), se.test(n[1]) && J.isPlainObject(t))for (n in t)J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return i = K.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = K, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
        };
        ue.prototype = J.fn, le = J(K);
        var de = /^(?:parents|prev(?:Until|All))/, pe = {children: !0, contents: !0, next: !0, prev: !0};
        J.extend({
            dir: function (e, t, n) {
                for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                    if (r && J(e).is(n))break;
                    i.push(e)
                }
                return i
            }, sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), J.fn.extend({
            has: function (e) {
                var t = J(e, this), n = t.length;
                return this.filter(function () {
                    for (var e = 0; n > e; e++)if (J.contains(this, t[e]))return !0
                })
            }, closest: function (e, t) {
                for (var n, i = 0, r = this.length, o = [], s = oe.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; r > i; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? J.unique(o) : o)
            }, index: function (e) {
                return e ? "string" == typeof e ? V.call(J(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), J.each({
            parent: function Mt(e) {
                var Mt = e.parentNode;
                return Mt && 11 !== Mt.nodeType ? Mt : null
            }, parents: function (e) {
                return J.dir(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return J.dir(e, "parentNode", n)
            }, next: function (e) {
                return r(e, "nextSibling")
            }, prev: function (e) {
                return r(e, "previousSibling")
            }, nextAll: function (e) {
                return J.dir(e, "nextSibling")
            }, prevAll: function (e) {
                return J.dir(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return J.dir(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return J.dir(e, "previousSibling", n)
            }, siblings: function (e) {
                return J.sibling((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return J.sibling(e.firstChild)
            }, contents: function (e) {
                return e.contentDocument || J.merge([], e.childNodes)
            }
        }, function (e, t) {
            J.fn[e] = function (n, i) {
                var r = J.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = J.filter(i, r)), this.length > 1 && (pe[e] || J.unique(r), de.test(e) && r.reverse()), this.pushStack(r)
            }
        });
        var he = /\S+/g, fe = {};
        J.Callbacks = function (e) {
            e = "string" == typeof e ? fe[e] || o(e) : J.extend({}, e);
            var t, n, i, r, s, a, l = [], c = !e.once && [], u = function p(o) {
                for (t = e.memory && o, n = !0, a = r || 0, r = 0, s = l.length, i = !0; l && s > a; a++)if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                    t = !1;
                    break
                }
                i = !1, l && (c ? c.length && p(c.shift()) : t ? l = [] : d.disable())
            }, d = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        !function o(t) {
                            J.each(t, function (t, n) {
                                var i = J.type(n);
                                "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), i ? s = l.length : t && (r = n, u(t))
                    }
                    return this
                }, remove: function () {
                    return l && J.each(arguments, function (e, t) {
                        for (var n; (n = J.inArray(t, l, n)) > -1;)l.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                    }), this
                }, has: function (e) {
                    return e ? J.inArray(e, l) > -1 : !(!l || !l.length)
                }, empty: function () {
                    return l = [], s = 0, this
                }, disable: function () {
                    return l = c = t = void 0, this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    return c = void 0, t || d.disable(), this
                }, locked: function () {
                    return !c
                }, fireWith: function (e, t) {
                    return !l || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : u(t)), this
                }, fire: function () {
                    return d.fireWith(this, arguments), this
                }, fired: function () {
                    return !!n
                }
            };
            return d
        }, J.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", J.Callbacks("once memory"), "resolved"], ["reject", "fail", J.Callbacks("once memory"), "rejected"], ["notify", "progress", J.Callbacks("memory")]], n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return J.Deferred(function (n) {
                            J.each(t, function (t, o) {
                                var s = J.isFunction(e[t]) && e[t];
                                r[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? J.extend(e, i) : i
                    }
                }, r = {};
                return i.pipe = i.then, J.each(t, function (e, o) {
                    var s = o[2], a = o[3];
                    i[o[1]] = s.add, a && s.add(function () {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), e && e.call(r, r), r
            }, when: function (e) {
                var t, n, i, r = 0, o = W.call(arguments), s = o.length, a = 1 !== s || e && J.isFunction(e.promise) ? s : 0, l = 1 === a ? e : J.Deferred(), c = function (e, n, i) {
                    return function (r) {
                        n[e] = this, i[e] = arguments.length > 1 ? W.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
                if (s > 1)for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++)o[r] && J.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --a;
                return a || l.resolveWith(i, o), l.promise()
            }
        });
        var ge;
        J.fn.ready = function (e) {
            return J.ready.promise().done(e), this
        }, J.extend({
            isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? J.readyWait++ : J.ready(!0)
            }, ready: function (e) {
                (e === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, e !== !0 && --J.readyWait > 0 || (ge.resolveWith(K, [J]), J.fn.triggerHandler && (J(K).triggerHandler("ready"), J(K).off("ready"))))
            }
        }), J.ready.promise = function (t) {
            return ge || (ge = J.Deferred(), "complete" === K.readyState ? setTimeout(J.ready) : (K.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
        }, J.ready.promise();
        var me = J.access = function (e, t, n, i, r, o, s) {
            var a = 0, l = e.length, c = null == n;
            if ("object" === J.type(n)) {
                r = !0;
                for (a in n)J.access(e, t, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, J.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(J(e), n)
                })), t))for (; l > a; a++)t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        };
        J.acceptData = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }, a.uid = 1, a.accepts = J.acceptData, a.prototype = {
            key: function (e) {
                if (!a.accepts(e))return 0;
                var t = {}, n = e[this.expando];
                if (!n) {
                    n = a.uid++;
                    try {
                        t[this.expando] = {value: n}, Object.defineProperties(e, t)
                    } catch (i) {
                        t[this.expando] = n, J.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            }, set: function (e, t, n) {
                var i, r = this.key(e), o = this.cache[r];
                if ("string" == typeof t)o[t] = n; else if (J.isEmptyObject(o))J.extend(this.cache[r], t); else for (i in t)o[i] = t[i];
                return o
            }, get: function (e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            }, access: function (e, t, n) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, J.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            }, remove: function (e, t) {
                var n, i, r, o = this.key(e), s = this.cache[o];
                if (void 0 === t)this.cache[o] = {}; else {
                    J.isArray(t) ? i = t.concat(t.map(J.camelCase)) : (r = J.camelCase(t), t in s ? i = [t, r] : (i = r, i = i in s ? [i] : i.match(he) || [])), n = i.length;
                    for (; n--;)delete s[i[n]]
                }
            }, hasData: function (e) {
                return !J.isEmptyObject(this.cache[e[this.expando]] || {})
            }, discard: function (e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
        var ve = new a, ye = new a, be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, xe = /([A-Z])/g;
        J.extend({
            hasData: function (e) {
                return ye.hasData(e) || ve.hasData(e)
            }, data: function (e, t, n) {
                return ye.access(e, t, n)
            }, removeData: function (e, t) {
                ye.remove(e, t)
            }, _data: function (e, t, n) {
                return ve.access(e, t, n)
            }, _removeData: function (e, t) {
                ve.remove(e, t)
            }
        }), J.fn.extend({
            data: function Ft(e, t) {
                var n, i, Ft, r = this[0], o = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (Ft = ye.get(r), 1 === r.nodeType && !ve.get(r, "hasDataAttrs"))) {
                        for (n = o.length; n--;)o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)), l(r, i, Ft[i])));
                        ve.set(r, "hasDataAttrs", !0)
                    }
                    return Ft
                }
                return "object" == typeof e ? this.each(function () {
                    ye.set(this, e)
                }) : me(this, function (t) {
                    var n, i = J.camelCase(e);
                    if (r && void 0 === t) {
                        if (n = ye.get(r, e), void 0 !== n)return n;
                        if (n = ye.get(r, i), void 0 !== n)return n;
                        if (n = l(r, i, void 0), void 0 !== n)return n
                    } else this.each(function () {
                        var n = ye.get(this, i);
                        ye.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            }, removeData: function (e) {
                return this.each(function () {
                    ye.remove(this, e)
                })
            }
        }), J.extend({
            queue: function Ut(e, t, n) {
                var Ut;
                return e ? (t = (t || "fx") + "queue", Ut = ve.get(e, t), n && (!Ut || J.isArray(n) ? Ut = ve.access(e, t, J.makeArray(n)) : Ut.push(n)), Ut || []) : void 0
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = J.queue(e, t), i = n.length, r = n.shift(), o = J._queueHooks(e, t), s = function () {
                    J.dequeue(e, t)
                };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return ve.get(e, n) || ve.access(e, n, {
                        empty: J.Callbacks("once memory").add(function () {
                            ve.remove(e, [t + "queue", n])
                        })
                    })
            }
        }), J.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? J.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = J.queue(this, e, t);
                    J._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && J.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    J.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, i = 1, r = J.Deferred(), o = this, s = this.length, a = function () {
                    --i || r.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)n = ve.get(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(t)
            }
        });
        var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ce = ["Top", "Right", "Bottom", "Left"], Te = function (e, t) {
            return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
        }, $e = /^(?:checkbox|radio)$/i;
        !function () {
            var e = K.createDocumentFragment(), t = e.appendChild(K.createElement("div")), n = K.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Ee = "undefined";
        G.focusinBubbles = "onfocusin"in e;
        var Se = /^key/, Ae = /^(?:mouse|pointer|contextmenu)|click/, ke = /^(?:focusinfocus|focusoutblur)$/, Ne = /^([^.]*)(?:\.(.+)|)$/;
        J.event = {
            global: {},
            add: function (e, t, n, i, r) {
                var o, s, a, l, c, u, d, p, h, f, g, m = ve.get(e);
                if (m)for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = J.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                    return typeof J !== Ee && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(he) || [""], c = t.length; c--;)a = Ne.exec(t[c]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h && (d = J.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = J.event.special[h] || {}, u = J.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && J.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, o), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, f, s) !== !1 || e.addEventListener && e.addEventListener(h, s, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), J.event.global[h] = !0)
            },
            remove: function (e, t, n, i, r) {
                var o, s, a, l, c, u, d, p, h, f, g, m = ve.hasData(e) && ve.get(e);
                if (m && (l = m.events)) {
                    for (t = (t || "").match(he) || [""], c = t.length; c--;)if (a = Ne.exec(t[c]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h) {
                        for (d = J.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, p = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;)u = p[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && d.teardown.call(e, f, m.handle) !== !1 || J.removeEvent(e, h, m.handle), delete l[h])
                    } else for (h in l)J.event.remove(e, h + t[c], n, i, !0);
                    J.isEmptyObject(l) && (delete m.handle, ve.remove(e, "events"))
                }
            },
            trigger: function (t, n, i, r) {
                var o, s, a, l, c, u, d, p = [i || K], h = X.call(t, "type") ? t.type : t, f = X.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = a = i = i || K, 3 !== i.nodeType && 8 !== i.nodeType && !ke.test(h + J.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[J.expando] ? t : new J.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : J.makeArray(n, [t]), d = J.event.special[h] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                    if (!r && !d.noBubble && !J.isWindow(i)) {
                        for (l = d.delegateType || h, ke.test(l + h) || (s = s.parentNode); s; s = s.parentNode)p.push(s), a = s;
                        a === (i.ownerDocument || K) && p.push(a.defaultView || a.parentWindow || e)
                    }
                    for (o = 0; (s = p[o++]) && !t.isPropagationStopped();)t.type = o > 1 ? l : d.bindType || h, u = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && J.acceptData(s) && (t.result = u.apply(s, n), t.result === !1 && t.preventDefault());
                    return t.type = h, r || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !J.acceptData(i) || c && J.isFunction(i[h]) && !J.isWindow(i) && (a = i[c], a && (i[c] = null), J.event.triggered = h, i[h](), J.event.triggered = void 0, a && (i[c] = a)), t.result
                }
            },
            dispatch: function (e) {
                e = J.event.fix(e);
                var t, n, i, r, o, s = [], a = W.call(arguments), l = (ve.get(this, "events") || {})[e.type] || [], c = J.event.special[e.type] || {};
                if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (s = J.event.handlers.call(this, e, l), t = 0; (r = s[t++]) && !e.isPropagationStopped();)for (e.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((J.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, i, r, o, s = [], a = t.delegateCount, l = e.target;
                if (a && l.nodeType && (!e.button || "click" !== e.type))for (; l !== this; l = l.parentNode || this)if (l.disabled !== !0 || "click" !== e.type) {
                    for (i = [], n = 0; a > n; n++)o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? J(r, this).index(l) >= 0 : J.find(r, this, null, [l]).length), i[r] && i.push(o);
                    i.length && s.push({elem: l, handlers: i})
                }
                return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, i, r, o = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            fix: function (e) {
                if (e[J.expando])return e;
                var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Ae.test(r) ? this.mouseHooks : Se.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new J.Event(o), t = i.length; t--;)n = i[t], e[n] = o[n];
                return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        return this !== d() && this.focus ? (this.focus(), !1) : void 0
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === d() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                    }, _default: function (e) {
                        return J.nodeName(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n, i) {
                var r = J.extend(new J.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
                i ? J.event.trigger(r, null, t) : J.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, J.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }, J.Event = function (e, t) {
            return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : u) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(e, t)
        }, J.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, J.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            J.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, i = this, r = e.relatedTarget, o = e.handleObj;
                    return (!r || r !== i && !J.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), G.focusinBubbles || J.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                J.event.simulate(t, e.target, J.event.fix(e), !0)
            };
            J.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this, r = ve.access(i, t);
                    r || i.addEventListener(e, n, !0), ve.access(i, t, (r || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, r = ve.access(i, t) - 1;
                    r ? ve.access(i, t, r) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
                }
            }
        }), J.fn.extend({
            on: function (e, t, n, i, r) {
                var o, s;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (s in e)this.on(s, t, n, e[s], r);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1)i = u; else if (!i)return this;
                return 1 === r && (o = i, i = function (e) {
                    return J().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = J.guid++)), this.each(function () {
                    J.event.add(this, e, i, n, t)
                })
            }, one: function (e, t, n, i) {
                return this.on(e, t, n, i, 1)
            }, off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)return i = e.handleObj, J(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e)this.off(r, t, e[r]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = u), this.each(function () {
                    J.event.remove(this, e, n, t)
                })
            }, trigger: function (e, t) {
                return this.each(function () {
                    J.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                return n ? J.event.trigger(e, t, n, !0) : void 0
            }
        });
        var _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, De = /<([\w:]+)/, Oe = /<|&#?\w+;/, je = /<(?:script|style|link)/i, Ie = /checked\s*(?:[^=]|=\s*.checked.)/i, Le = /^$|\/(?:java|ecma)script/i, qe = /^true\/(.*)/, Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td, J.extend({
            clone: function Wt(e, t, n) {
                var i, r, o, s, Wt = e.cloneNode(!0), a = J.contains(e.ownerDocument, e);
                if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))for (s = v(Wt), o = v(e), i = 0, r = o.length; r > i; i++)y(o[i], s[i]);
                if (t)if (n)for (o = o || v(e), s = s || v(Wt), i = 0, r = o.length; r > i; i++)m(o[i], s[i]); else m(e, Wt);
                return s = v(Wt, "script"), s.length > 0 && g(s, !a && v(e, "script")), Wt
            }, buildFragment: function (e, t, n, i) {
                for (var r, o, s, a, l, c, u = t.createDocumentFragment(), d = [], p = 0, h = e.length; h > p; p++)if (r = e[p], r || 0 === r)if ("object" === J.type(r))J.merge(d, r.nodeType ? [r] : r); else if (Oe.test(r)) {
                    for (o = o || u.appendChild(t.createElement("div")), s = (De.exec(r) || ["", ""])[1].toLowerCase(), a = Pe[s] || Pe._default, o.innerHTML = a[1] + r.replace(_e, "<$1></$2>") + a[2], c = a[0]; c--;)o = o.lastChild;
                    J.merge(d, o.childNodes), o = u.firstChild, o.textContent = ""
                } else d.push(t.createTextNode(r));
                for (u.textContent = "", p = 0; r = d[p++];)if ((!i || -1 === J.inArray(r, i)) && (l = J.contains(r.ownerDocument, r), o = v(u.appendChild(r), "script"), l && g(o), n))for (c = 0; r = o[c++];)Le.test(r.type || "") && n.push(r);
                return u
            }, cleanData: function (e) {
                for (var t, n, i, r, o = J.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                    if (J.acceptData(n) && (r = n[ve.expando], r && (t = ve.cache[r]))) {
                        if (t.events)for (i in t.events)o[i] ? J.event.remove(n, i) : J.removeEvent(n, i, t.handle);
                        ve.cache[r] && delete ve.cache[r]
                    }
                    delete ye.cache[n[ye.expando]]
                }
            }
        }), J.fn.extend({
            text: function (e) {
                return me(this, function (e) {
                    return void 0 === e ? J.text(this) : this.empty().each(function () {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = p(this, e);
                        t.appendChild(e)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = p(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, remove: function (e, t) {
                for (var n, i = e ? J.filter(e, this) : this, r = 0; null != (n = i[r]); r++)t || 1 !== n.nodeType || J.cleanData(v(n)), n.parentNode && (t && J.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (J.cleanData(v(e, !1)), e.textContent = "");
                return this
            }, clone: function (e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                    return J.clone(this, e, t)
                })
            }, html: function (e) {
                return me(this, function (e) {
                    var t = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                    if ("string" == typeof e && !je.test(e) && !Pe[(De.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(_e, "<$1></$2>");
                        try {
                            for (; i > n; n++)t = this[n] || {}, 1 === t.nodeType && (J.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = arguments[0];
                return this.domManip(arguments, function (t) {
                    e = this.parentNode, J.cleanData(v(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            }, detach: function (e) {
                return this.remove(e, !0)
            }, domManip: function (e, t) {
                e = B.apply([], e);
                var n, i, r, o, s, a, l = 0, c = this.length, u = this, d = c - 1, p = e[0], g = J.isFunction(p);
                if (g || c > 1 && "string" == typeof p && !G.checkClone && Ie.test(p))return this.each(function (n) {
                    var i = u.eq(n);
                    g && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
                });
                if (c && (n = J.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                    for (r = J.map(v(n, "script"), h), o = r.length; c > l; l++)s = n, l !== d && (s = J.clone(s, !0, !0), o && J.merge(r, v(s, "script"))), t.call(this[l], s, l);
                    if (o)for (a = r[r.length - 1].ownerDocument, J.map(r, f), l = 0; o > l; l++)s = r[l], Le.test(s.type || "") && !ve.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(Re, "")))
                }
                return this
            }
        }), J.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            J.fn[e] = function (e) {
                for (var n, i = [], r = J(e), o = r.length - 1, s = 0; o >= s; s++)n = s === o ? this : this.clone(!0), J(r[s])[t](n), z.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var He, Me = {}, Fe = /^margin/, Ue = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), We = function (t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
        !function () {
            function t() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
                var t = e.getComputedStyle(s, null);
                n = "1%" !== t.top, i = "4px" === t.width, r.removeChild(o)
            }

            var n, i, r = K.documentElement, o = K.createElement("div"), s = K.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && J.extend(G, {
                pixelPosition: function () {
                    return t(), n
                }, boxSizingReliable: function () {
                    return null == i && t(), i
                }, reliableMarginRight: function () {
                    var t, n = s.appendChild(K.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", r.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(o), s.removeChild(n), t
                }
            }))
        }(), J.swap = function (e, t, n, i) {
            var r, o, s = {};
            for (o in t)s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t)e.style[o] = s[o];
            return r
        };
        var Be = /^(none|table(?!-c[ea]).+)/, ze = new RegExp("^(" + we + ")(.*)$", "i"), Ve = new RegExp("^([+-])=(" + we + ")", "i"), Qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Ye = {letterSpacing: "0", fontWeight: "400"}, Xe = ["Webkit", "O", "Moz", "ms"];
        J.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = w(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": "cssFloat"},
            style: function Bt(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, s, a = J.camelCase(t), Bt = e.style;
                    return t = J.cssProps[a] || (J.cssProps[a] = T(Bt, a)), s = J.cssHooks[t] || J.cssHooks[a], void 0 === n ? s && "get"in s && void 0 !== (r = s.get(e, !1, i)) ? r : Bt[t] : (o = typeof n, "string" === o && (r = Ve.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(J.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || J.cssNumber[a] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (Bt[t] = "inherit"), s && "set"in s && void 0 === (n = s.set(e, n, i)) || (Bt[t] = n)), void 0)
                }
            },
            css: function (e, t, n, i) {
                var r, o, s, a = J.camelCase(t);
                return t = J.cssProps[a] || (J.cssProps[a] = T(e.style, a)), s = J.cssHooks[t] || J.cssHooks[a], s && "get"in s && (r = s.get(e, !0, n)), void 0 === r && (r = w(e, t, i)), "normal" === r && t in Ye && (r = Ye[t]), "" === n || n ? (o = parseFloat(r), n === !0 || J.isNumeric(o) ? o || 0 : r) : r
            }
        }), J.each(["height", "width"], function (e, t) {
            J.cssHooks[t] = {
                get: function (e, n, i) {
                    return n ? Be.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, Qe, function () {
                        return S(e, t, i)
                    }) : S(e, t, i) : void 0
                }, set: function (e, n, i) {
                    var r = i && We(e);
                    return $(e, n, i ? E(e, t, i, "border-box" === J.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), J.cssHooks.marginRight = C(G.reliableMarginRight, function (e, t) {
            return t ? J.swap(e, {display: "inline-block"}, w, [e, "marginRight"]) : void 0
        }), J.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            J.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)r[e + Ce[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, Fe.test(e) || (J.cssHooks[e + t].set = $)
        }), J.fn.extend({
            css: function (e, t) {
                return me(this, function (e, t, n) {
                    var i, r, o = {}, s = 0;
                    if (J.isArray(t)) {
                        for (i = We(e), r = t.length; r > s; s++)o[t[s]] = J.css(e, t[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? J.style(e, t, n) : J.css(e, t)
                }, e, t, arguments.length > 1)
            }, show: function () {
                return A(this, !0)
            }, hide: function () {
                return A(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    Te(this) ? J(this).show() : J(this).hide()
                })
            }
        }), J.Tween = k, k.prototype = {
            constructor: k, init: function (e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (J.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = k.propHooks[this.prop];
                return e && e.get ? e.get(this) : k.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = k.propHooks[this.prop];
                return this.pos = t = this.options.duration ? J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : k.propHooks._default.set(this), this
            }
        }, k.prototype.init.prototype = k.prototype, k.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                }, set: function (e) {
                    J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, k.propHooks.scrollTop = k.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, J.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, J.fx = k.prototype.init, J.fx.step = {};
        var Ge, Ke, Ze = /^(?:toggle|show|hide)$/, Je = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"), et = /queueHooks$/, tt = [O], nt = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), i = n.cur(), r = Je.exec(t), o = r && r[3] || (J.cssNumber[e] ? "" : "px"), s = (J.cssNumber[e] || "px" !== o && +i) && Je.exec(J.css(n.elem, e)), a = 1, l = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], r = r || [], s = +i || 1;
                    do a = a || ".5", s /= a, J.style(n.elem, e, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
        J.Animation = J.extend(I, {
            tweener: function (e, t) {
                J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++)n = e[i], nt[n] = nt[n] || [], nt[n].unshift(t)
            }, prefilter: function (e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), J.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? J.extend({}, e) : {
                complete: n || !n && t || J.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !J.isFunction(t) && t
            };
            return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
            }, i
        }, J.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Te).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
            }, animate: function (e, t, n, i) {
                var r = J.isEmptyObject(e), o = J.speed(t, n, i), s = function () {
                    var t = I(this, J.extend({}, e), o);
                    (r || ve.get(this, "finish")) && t.stop(!0)
                };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            }, stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, r = null != e && e + "queueHooks", o = J.timers, s = ve.get(this);
                    if (r)s[r] && s[r].stop && i(s[r]); else for (r in s)s[r] && s[r].stop && et.test(r) && i(s[r]);
                    for (r = o.length; r--;)o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    (t || !n) && J.dequeue(this, e)
                })
            }, finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = ve.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = J.timers, s = i ? i.length : 0;
                    for (n.finish = !0,
                             J.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; s > t; t++)i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), J.each(["toggle", "show", "hide"], function (e, t) {
            var n = J.fn[t];
            J.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, i, r)
            }
        }), J.each({
            slideDown: _("show"),
            slideUp: _("hide"),
            slideToggle: _("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            J.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), J.timers = [], J.fx.tick = function () {
            var e, t = 0, n = J.timers;
            for (Ge = J.now(); t < n.length; t++)e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || J.fx.stop(), Ge = void 0
        }, J.fx.timer = function (e) {
            J.timers.push(e), e() ? J.fx.start() : J.timers.pop()
        }, J.fx.interval = 13, J.fx.start = function () {
            Ke || (Ke = setInterval(J.fx.tick, J.fx.interval))
        }, J.fx.stop = function () {
            clearInterval(Ke), Ke = null
        }, J.fx.speeds = {slow: 600, fast: 200, _default: 400}, J.fn.delay = function (e, t) {
            return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var i = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        }, function () {
            var e = K.createElement("input"), t = K.createElement("select"), n = t.appendChild(K.createElement("option"));
            e.type = "checkbox", G.checkOn = "" !== e.value, G.optSelected = n.selected, t.disabled = !0, G.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = "t" === e.value
        }();
        var it, rt, ot = J.expr.attrHandle;
        J.fn.extend({
            attr: function (e, t) {
                return me(this, J.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    J.removeAttr(this, e)
                })
            }
        }), J.extend({
            attr: function (e, t, n) {
                var i, r, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o)return typeof e.getAttribute === Ee ? J.prop(e, t, n) : (1 === o && J.isXMLDoc(e) || (t = t.toLowerCase(), i = J.attrHooks[t] || (J.expr.match.bool.test(t) ? rt : it)), void 0 === n ? i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = J.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void J.removeAttr(e, t))
            }, removeAttr: function (e, t) {
                var n, i, r = 0, o = t && t.match(he);
                if (o && 1 === e.nodeType)for (; n = o[r++];)i = J.propFix[n] || n, J.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!G.radioValue && "radio" === t && J.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), rt = {
            set: function (e, t, n) {
                return t === !1 ? J.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, J.each(J.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ot[t] || J.find.attr;
            ot[t] = function (e, t, i) {
                var r, o;
                return i || (o = ot[t], ot[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, ot[t] = o), r
            }
        });
        var st = /^(?:input|select|textarea|button)$/i;
        J.fn.extend({
            prop: function (e, t) {
                return me(this, J.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return this.each(function () {
                    delete this[J.propFix[e] || e]
                })
            }
        }), J.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
                var i, r, o, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)return o = 1 !== s || !J.isXMLDoc(e), o && (t = J.propFix[t] || t, r = J.propHooks[t]), void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }), G.optSelected || (J.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            J.propFix[this.toLowerCase()] = this
        });
        var at = /[\t\r\n\f]/g;
        J.fn.extend({
            addClass: function (e) {
                var t, n, i, r, o, s, a = "string" == typeof e && e, l = 0, c = this.length;
                if (J.isFunction(e))return this.each(function (t) {
                    J(this).addClass(e.call(this, t, this.className))
                });
                if (a)for (t = (e || "").match(he) || []; c > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                    for (o = 0; r = t[o++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                    s = J.trim(i), n.className !== s && (n.className = s)
                }
                return this
            }, removeClass: function (e) {
                var t, n, i, r, o, s, a = 0 === arguments.length || "string" == typeof e && e, l = 0, c = this.length;
                if (J.isFunction(e))return this.each(function (t) {
                    J(this).removeClass(e.call(this, t, this.className))
                });
                if (a)for (t = (e || "").match(he) || []; c > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                    for (o = 0; r = t[o++];)for (; i.indexOf(" " + r + " ") >= 0;)i = i.replace(" " + r + " ", " ");
                    s = e ? J.trim(i) : "", n.className !== s && (n.className = s)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(J.isFunction(e) ? function (n) {
                    J(this).toggleClass(e.call(this, n, this.className, t), t)
                } : function () {
                    if ("string" === n)for (var t, i = 0, r = J(this), o = e.match(he) || []; t = o[i++];)r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else(n === Ee || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
                })
            }, hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0)return !0;
                return !1
            }
        });
        var lt = /\r/g;
        J.fn.extend({
            val: function (e) {
                var t, n, i, r = this[0];
                {
                    if (arguments.length)return i = J.isFunction(e), this.each(function (n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, J(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : J.isArray(r) && (r = J.map(r, function (e) {
                            return null == e ? "" : e + ""
                        })), t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], t && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r)return t = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()], t && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)
                }
            }
        }), J.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = J.find.attr(e, "value");
                        return null != t ? t : J.trim(J.text(e))
                    }
                }, select: {
                    get: function (e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)if (n = i[l], !(!n.selected && l !== r || (G.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                            if (t = J(n).val(), o)return t;
                            s.push(t)
                        }
                        return s
                    }, set: function (e, t) {
                        for (var n, i, r = e.options, o = J.makeArray(t), s = r.length; s--;)i = r[s], (i.selected = J.inArray(i.value, o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), J.each(["radio", "checkbox"], function () {
            J.valHooks[this] = {
                set: function (e, t) {
                    return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
                }
            }, G.checkOn || (J.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            J.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), J.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }, bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var ct = J.now(), ut = /\?/;
        J.parseJSON = function (e) {
            return JSON.parse(e + "")
        }, J.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e)return null;
            try {
                n = new DOMParser, t = n.parseFromString(e, "text/xml")
            } catch (i) {
                t = void 0
            }
            return (!t || t.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + e), t
        };
        var dt = /#.*$/, pt = /([?&])_=[^&]*/, ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, gt = /^(?:GET|HEAD)$/, mt = /^\/\//, vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, yt = {}, bt = {}, xt = "*/".concat("*"), wt = e.location.href, Ct = vt.exec(wt.toLowerCase()) || [];
        J.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: wt,
                type: "GET",
                isLocal: ft.test(Ct[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": xt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": J.parseJSON, "text xml": J.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? R(R(e, J.ajaxSettings), t) : R(J.ajaxSettings, e)
            },
            ajaxPrefilter: L(yt),
            ajaxTransport: L(bt),
            ajax: function (e, t) {
                function n(e, t, n, s) {
                    var l, u, v, y, x, C = t;
                    2 !== b && (b = 2, a && clearTimeout(a), i = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = P(d, w, n)), y = H(d, y, w, l), l ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (J.lastModified[r] = x), x = w.getResponseHeader("etag"), x && (J.etag[r] = x)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, u = y.data, v = y.error, l = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", l ? f.resolveWith(p, [u, C, w]) : f.rejectWith(p, [w, C, v]), w.statusCode(m), m = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [w, d, l ? u : v]), g.fireWith(p, [w, C]), c && (h.trigger("ajaxComplete", [w, d]), --J.active || J.event.trigger("ajaxStop")))
                }

                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, r, o, s, a, l, c, u, d = J.ajaxSetup({}, t), p = d.context || d, h = d.context && (p.nodeType || p.jquery) ? J(p) : J.event, f = J.Deferred(), g = J.Callbacks("once memory"), m = d.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!s)for (s = {}; t = ht.exec(o);)s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)if (2 > b)for (t in e)m[t] = [m[t], e[t]]; else w.always(e[w.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || x;
                        return i && i.abort(t), n(0, t), this
                    }
                };
                if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || wt) + "").replace(dt, "").replace(mt, Ct[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = J.trim(d.dataType || "*").toLowerCase().match(he) || [""], null == d.crossDomain && (l = vt.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === Ct[1] && l[2] === Ct[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Ct[3] || ("http:" === Ct[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = J.param(d.data, d.traditional)), q(yt, d, t, w), 2 === b)return w;
                c = J.event && d.global, c && 0 === J.active++ && J.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !gt.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (ut.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = pt.test(r) ? r.replace(pt, "$1_=" + ct++) : r + (ut.test(r) ? "&" : "?") + "_=" + ct++)), d.ifModified && (J.lastModified[r] && w.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && w.setRequestHeader("If-None-Match", J.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : d.accepts["*"]);
                for (u in d.headers)w.setRequestHeader(u, d.headers[u]);
                if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === b))return w.abort();
                x = "abort";
                for (u in{success: 1, error: 1, complete: 1})w[u](d[u]);
                if (i = q(bt, d, t, w)) {
                    w.readyState = 1, c && h.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (a = setTimeout(function () {
                        w.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, i.send(v, n)
                    } catch (C) {
                        if (!(2 > b))throw C;
                        n(-1, C)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function (e, t, n) {
                return J.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return J.get(e, void 0, t, "script")
            }
        }), J.each(["get", "post"], function (e, t) {
            J[t] = function (e, n, i, r) {
                return J.isFunction(n) && (r = r || i, i = n, n = void 0), J.ajax({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), J._evalUrl = function (e) {
            return J.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, J.fn.extend({
            wrapAll: function (e) {
                var t;
                return J.isFunction(e) ? this.each(function (t) {
                    J(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = J(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                    return e
                }).append(this)), this)
            }, wrapInner: function (e) {
                return this.each(J.isFunction(e) ? function (t) {
                    J(this).wrapInner(e.call(this, t))
                } : function () {
                    var t = J(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = J.isFunction(e);
                return this.each(function (n) {
                    J(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
                }).end()
            }
        }), J.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }, J.expr.filters.visible = function (e) {
            return !J.expr.filters.hidden(e)
        };
        var Tt = /%20/g, $t = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;
        J.param = function (e, t) {
            var n, i = [], r = function (e, t) {
                t = J.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e))J.each(e, function () {
                r(this.name, this.value)
            }); else for (n in e)M(n, e[n], t, r);
            return i.join("&").replace(Tt, "+")
        }, J.fn.extend({
            serialize: function () {
                return J.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = J.prop(this, "elements");
                    return e ? J.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !J(this).is(":disabled") && At.test(this.nodeName) && !St.test(e) && (this.checked || !$e.test(e))
                }).map(function (e, t) {
                    var n = J(this).val();
                    return null == n ? null : J.isArray(n) ? J.map(n, function (e) {
                        return {name: t.name, value: e.replace(Et, "\r\n")}
                    }) : {name: t.name, value: n.replace(Et, "\r\n")}
                }).get()
            }
        }), J.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest
            } catch (e) {
            }
        };
        var kt = 0, Nt = {}, _t = {0: 200, 1223: 204}, Dt = J.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function () {
            for (var e in Nt)Nt[e]()
        }), G.cors = !!Dt && "withCredentials"in Dt, G.ajax = Dt = !!Dt, J.ajaxTransport(function (e) {
            var t;
            return G.cors || Dt && !e.crossDomain ? {
                send: function (n, i) {
                    var r, o = e.xhr(), s = ++kt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (r in e.xhrFields)o[r] = e.xhrFields[r];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n)o.setRequestHeader(r, n[r]);
                    t = function (e) {
                        return function () {
                            t && (delete Nt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(_t[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                        }
                    }, o.onload = t(), o.onerror = t("error"), t = Nt[s] = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (a) {
                        if (t)throw a
                    }
                }, abort: function () {
                    t && t()
                }
            } : void 0
        }), J.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (e) {
                    return J.globalEval(e), e
                }
            }
        }), J.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), J.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, r) {
                        t = J("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), K.head.appendChild(t[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }
        });
        var Ot = [], jt = /(=)\?(?=&|$)|\?\?/;
        J.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = Ot.pop() || J.expando + "_" + ct++;
                return this[e] = !0, e
            }
        }), J.ajaxPrefilter("json jsonp", function (t, n, i) {
            var r, o, s, a = t.jsonp !== !1 && (jt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(t.data) && "data");
            return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(jt, "$1" + r) : t.jsonp !== !1 && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                return s || J.error(r + " was not called"), s[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
                s = arguments
            }, i.always(function () {
                e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ot.push(r)), s && J.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), J.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || K;
            var i = se.exec(e), r = !n && [];
            return i ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, r), r && r.length && J(r).remove(), J.merge([], i.childNodes))
        };
        var It = J.fn.load;
        J.fn.load = function (e, t, n) {
            if ("string" != typeof e && It)return It.apply(this, arguments);
            var i, r, o, s = this, a = e.indexOf(" ");
            return a >= 0 && (i = J.trim(e.slice(a)), e = e.slice(0, a)), J.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && J.ajax({
                url: e,
                type: r,
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, s.html(i ? J("<div>").append(J.parseHTML(e)).find(i) : e)
            }).complete(n && function (e, t) {
                s.each(n, o || [e.responseText, t, e])
            }), this
        }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            J.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), J.expr.filters.animated = function (e) {
            return J.grep(J.timers, function (t) {
                return e === t.elem
            }).length
        };
        var Lt = e.document.documentElement;
        J.offset = {
            setOffset: function (e, t, n) {
                var i, r, o, s, a, l, c, u = J.css(e, "position"), d = J(e), p = {};
                "static" === u && (e.style.position = "relative"), a = d.offset(), o = J.css(e, "top"), l = J.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), J.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + r), "using"in t ? t.using.call(e, p) : d.css(p)
            }
        }, J.fn.extend({
            offset: function (e) {
                if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                    J.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0], r = {top: 0, left: 0}, o = i && i.ownerDocument;
                if (o)return t = o.documentElement, J.contains(t, i) ? (typeof i.getBoundingClientRect !== Ee && (r = i.getBoundingClientRect()), n = F(o), {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft
                }) : r
            }, position: function () {
                if (this[0]) {
                    var e, t, n = this[0], i = {top: 0, left: 0};
                    return "fixed" === J.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), J.nodeName(e[0], "html") || (i = e.offset()), i.top += J.css(e[0], "borderTopWidth", !0), i.left += J.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - J.css(n, "marginTop", !0),
                        left: t.left - i.left - J.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || Lt; e && !J.nodeName(e, "html") && "static" === J.css(e, "position");)e = e.offsetParent;
                    return e || Lt
                })
            }
        }), J.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
            var i = "pageYOffset" === n;
            J.fn[t] = function (r) {
                return me(this, function (t, r, o) {
                    var s = F(t);
                    return void 0 === o ? s ? s[n] : t[r] : void(s ? s.scrollTo(i ? e.pageXOffset : o, i ? o : e.pageYOffset) : t[r] = o)
                }, t, r, arguments.length, null)
            }
        }), J.each(["top", "left"], function (e, t) {
            J.cssHooks[t] = C(G.pixelPosition, function (e, n) {
                return n ? (n = w(e, t), Ue.test(n) ? J(e).position()[t] + "px" : n) : void 0
            })
        }), J.each({Height: "height", Width: "width"}, function (e, t) {
            J.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
                J.fn[i] = function (i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return me(this, function (t, n, i) {
                        var r;
                        return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? J.css(t, n, s) : J.style(t, n, i, s)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), J.fn.size = function () {
            return this.length
        }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return J
        });
        var qt = e.jQuery, Rt = e.$;
        return J.noConflict = function (t) {
            return e.$ === J && (e.$ = Rt), t && e.jQuery === J && (e.jQuery = qt), J
        }, typeof t === Ee && (e.jQuery = e.$ = J), J
    }), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (e) {
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function (e) {
    function t() {
        var e = document.createElement("bootstrap"), t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t)if (void 0 !== e.style[n])return {end: t[n]};
        return !1
    }

    e.fn.emulateTransitionEnd = function (t) {
        var n = !1, i = this;
        e(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var r = function () {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(r, t), this
    }, e(function () {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function (t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (e) {
    function t(t) {
        return this.each(function () {
            var n = e(this), r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof t && r[t].call(n)
        })
    }

    var n = '[data-dismiss="alert"]', i = function (t) {
        e(t).on("click", n, this.close)
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.close = function (t) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }

        var r = e(this), o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = e(o);
        t && t.preventDefault(), s.length || (s = r.closest(".alert")), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var r = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function () {
        return e.fn.alert = r, this
    }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), +function (e) {
    function t(t) {
        return this.each(function () {
            var i = e(this), r = i.data("bs.button"), o = "object" == typeof t && t;
            r || i.data("bs.button", r = new n(this, o)), "toggle" == t ? r.toggle() : t && r.setState(t)
        })
    }

    var n = function r(t, n) {
        this.$element = e(t), this.options = e.extend({}, r.DEFAULTS, n), this.isLoading = !1
    };
    n.VERSION = "3.3.4", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (t) {
        var n = "disabled", i = this.$element, r = i.is("input") ? "val" : "html", o = i.data();
        t += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(e.proxy(function () {
            i[r](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var e = !0, t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        e && this.$element.toggleClass("active")
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function () {
        return e.fn.button = i, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = e(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery), +function (e) {
    function t(t) {
        return this.each(function () {
            var i = e(this), r = i.data("bs.carousel"), o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t), s = "string" == typeof t ? t : o.slide;
            r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof t ? r.to(t) : s ? r[s]() : o.interval && r.pause().cycle()
        })
    }

    var n = function (t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function (e, t) {
        var n = this.getItemIndex(t), i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (i && !this.options.wrap)return t;
        var r = "prev" == e ? -1 : 1, o = (n + r) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function (e) {
        var t = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (t, i) {
        var r = this.$element.find(".item.active"), o = i || this.getItemForDirection(t, r), s = this.interval, a = "next" == t ? "left" : "right", l = this;
        if (o.hasClass("active"))return this.sliding = !1;
        var c = o[0], u = e.Event("slide.bs.carousel", {relatedTarget: c, direction: a});
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = e(this.$indicators.children()[this.getItemIndex(o)]);
                d && d.addClass("active")
            }
            var p = e.Event("slid.bs.carousel", {relatedTarget: c, direction: a});
            return e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function () {
                o.removeClass([t, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function () {
        return e.fn.carousel = i, this
    };
    var r = function (n) {
        var i, r = e(this), o = e(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = e.extend({}, o.data(), r.data()), a = r.attr("data-slide-to");
            a && (s.interval = !1), t.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery), +function (e) {
    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i)
    }

    function n(t) {
        return this.each(function () {
            var n = e(this), r = n.data("bs.collapse"), o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !r && o.toggle && /show|hide/.test(t) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof t && r[t]()
        })
    }

    var i = function o(t, n) {
        this.$element = e(t), this.options = e.extend({}, o.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (t = r.data("bs.collapse"), t && t.transitioning))) {
                var o = e.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"), t || r.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition)return a.call(this);
                    var l = e.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function (n, i) {
            var r = e(i);
            this.addAriaAndCollapsedClass(t(r), r)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var r = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function () {
        return e.fn.collapse = r, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var r = e(this);
        r.attr("data-target") || i.preventDefault();
        var o = t(r), s = o.data("bs.collapse"), a = s ? "toggle" : r.data();
        n.call(o, a)
    })
}(jQuery), +function (e) {
    function t(t) {
        t && 3 === t.which || (e(r).remove(), e(o).each(function () {
            var i = e(this), r = n(i), o = {relatedTarget: this};
            r.hasClass("open") && (r.trigger(t = e.Event("hide.bs.dropdown", o)), t.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger("hidden.bs.dropdown", o)))
        }))
    }

    function n(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    function i(t) {
        return this.each(function () {
            var n = e(this), i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof t && i[t].call(n)
        })
    }

    var r = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', s = function (t) {
        e(t).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.3.4", s.prototype.toggle = function (i) {
        var r = e(this);
        if (!r.is(".disabled, :disabled")) {
            var o = n(r), s = o.hasClass("open");
            if (t(), !s) {
                "ontouchstart"in document.documentElement && !o.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
                var a = {relatedTarget: this};
                if (o.trigger(i = e.Event("show.bs.dropdown", a)), i.isDefaultPrevented())return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, s.prototype.keydown = function (t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var i = e(this);
            if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = n(i), s = r.hasClass("open");
                if (!s && 27 != t.which || s && 27 == t.which)return 27 == t.which && r.find(o).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a", l = r.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (l.length) {
                    var c = l.index(t.target);
                    38 == t.which && c > 0 && c--, 40 == t.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function () {
        return e.fn.dropdown = a, this
    }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', s.prototype.keydown)
}(jQuery), +function (e) {
    function t(t, i) {
        return this.each(function () {
            var r = e(this), o = r.data("bs.modal"), s = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
            o || r.data("bs.modal", o = new n(this, s)), "string" == typeof t ? o[t](i) : s.show && o.show(i)
        })
    }

    var n = function (t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function (t) {
        var i = this, r = e.Event("show.bs.modal", {relatedTarget: t});
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var r = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var o = e.Event("shown.bs.modal", {relatedTarget: t});
            r ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function (t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function (e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(), this.backdrop(function () {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (t) {
        var i = this, r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = e.support.transition && r;
            if (this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function (e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t)return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else t && t()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, n.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function () {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = e(this), r = i.attr("href"), o = e(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")), s = o.data("bs.modal") ? "toggle" : e.extend({remote: !/#/.test(r) && r}, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function (e) {
            e.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(o, s, this)
    })
}(jQuery), +function (e) {
    function t(t) {
        return this.each(function () {
            var i = e(this), r = i.data("bs.tooltip"), o = "object" == typeof t && t;
            (r || !/destroy|hide/.test(t)) && (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof t && r[t]())
        })
    }

    var n = function (e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, n.prototype.init = function (t, n, i) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport), this.$element[0]instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var s = r[o];
            if ("click" == s)this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)); else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin", l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function () {
        var t = {}, n = this.getDefaults();
        return this._options && e.each(this._options, function (e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, n.prototype.enter = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.leave = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function () {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i)return;
            var r = this, o = this.tip(), s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, c = l.test(a);
            c && (a = a.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var u = this.getPosition(), d = o[0].offsetWidth, p = o[0].offsetHeight;
            if (c) {
                var h = a, f = this.options.container ? e(this.options.container) : this.$element.parent(), g = this.getPosition(f);
                a = "bottom" == a && u.bottom + p > g.bottom ? "top" : "top" == a && u.top - p < g.top ? "bottom" : "right" == a && u.right + d > g.width ? "left" : "left" == a && u.left - d < g.left ? "right" : a, o.removeClass(h).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, d, p);
            this.applyPlacement(m, a);
            var v = function () {
                var e = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == e && r.leave(r)
            };
            e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
        }
    }, n.prototype.applyPlacement = function (t, n) {
        var i = this.tip(), r = i[0].offsetWidth, o = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10), a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top = t.top + s, t.left = t.left + a, e.offset.setOffset(i[0], e.extend({
            using: function (e) {
                i.css({top: Math.round(e.top), left: Math.round(e.left)})
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth, c = i[0].offsetHeight;
        "top" == n && c != o && (t.top = t.top + o - c);
        var u = this.getViewportAdjustedDelta(n, t, l, c);
        u.left ? t.left += u.left : t.top += u.top;
        var d = /top|bottom/.test(n), p = d ? 2 * u.left - r + l : 2 * u.top - o + c, h = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(p, i[0][h], d)
    }, n.prototype.replaceArrow = function (e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var e = this.tip(), t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (t) {
        function i() {
            "in" != r.hoverState && o.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), t && t()
        }

        var r = this, o = e(this.$tip), s = e.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (t) {
        t = t || this.$element;
        var n = t[0], i = "BODY" == n.tagName, r = n.getBoundingClientRect();
        null == r.width && (r = e.extend({}, r, {width: r.right - r.left, height: r.bottom - r.top}));
        var o = i ? {
            top: 0,
            left: 0
        } : t.offset(), s = {scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()}, a = i ? {
            width: e(window).width(),
            height: e(window).height()
        } : null;
        return e.extend({}, r, s, a, o)
    }, n.prototype.getCalculatedOffset = function (e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {top: t.top + t.height / 2 - i / 2, left: t.left - n} : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (e, t, n, i) {
        var r = {top: 0, left: 0};
        if (!this.$viewport)return r;
        var o = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var a = t.top - o - s.scroll, l = t.top + o - s.scroll + i;
            a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
        } else {
            var c = t.left - o, u = t.left + o + n;
            c < s.left ? r.left = s.left - c : u > s.width && (r.left = s.left + s.width - u)
        }
        return r
    }, n.prototype.getTitle = function () {
        var e, t = this.$element, n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function (e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function () {
        return this.$tip = this.$tip || e(this.options.template)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var e = this;
        clearTimeout(this.timeout), this.hide(function () {
            e.$element.off("." + e.type).removeData("bs." + e.type)
        })
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function () {
        return e.fn.tooltip = i, this
    }
}(jQuery), +function (e) {
    function t(t) {
        return this.each(function () {
            var i = e(this), r = i.data("bs.popover"), o = "object" == typeof t && t;
            (r || !/destroy|hide/.test(t)) && (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof t && r[t]())
        })
    }

    var n = function (e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip)throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.4", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var e = this.tip(), t = this.getTitle(), n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var e = this.$element, t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function () {
        return e.fn.popover = i, this
    }
}(jQuery), +function (e) {
    function t(n, i) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = e(this), r = i.data("bs.scrollspy"), o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new t(this, o)), "string" == typeof n && r[n]()
        })
    }

    t.VERSION = "3.3.4", t.DEFAULTS = {offset: 10}, t.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function () {
        var t = this, n = "offset", i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var t = e(this), r = t.data("target") || t.attr("href"), o = /^#./.test(r) && e(r);
            return o && o.length && o.is(":visible") && [[o[n]().top + i, r]] || null
        }).sort(function (e, t) {
            return e[0] - t[0]
        }).each(function () {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function () {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), r = this.offsets, o = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i)return s != (e = o[o.length - 1]) && this.activate(e);
        if (s && t < r[0])return this.activeTarget = null, this.clear();
        for (e = r.length; e--;)s != o[e] && t >= r[e] && (void 0 === r[e + 1] || t < r[e + 1]) && this.activate(o[e])
    }, t.prototype.activate = function (t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function () {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function () {
        return e.fn.scrollspy = i, this
    }, e(window).on("load.bs.scrollspy.data-api", function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), +function (e) {
    function t(t) {
        return this.each(function () {
            var i = e(this), r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof t && r[t]()
        })
    }

    var n = function (t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"), o = e.Event("hide.bs.tab", {relatedTarget: t[0]}), s = e.Event("show.bs.tab", {relatedTarget: r[0]});
            if (r.trigger(o), t.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = e(i);
                this.activate(t.closest("li"), n), this.activate(a, a.parent(), function () {
                    r.trigger({type: "hidden.bs.tab", relatedTarget: t[0]}), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (t, i, r) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }

        var s = i.find("> .active"), a = r && e.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), s.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function () {
        return e.fn.tab = i, this
    };
    var r = function (n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), +function (e) {
    function t(t) {
        return this.each(function () {
            var i = e(this), r = i.data("bs.affix"), o = "object" == typeof t && t;
            r || i.data("bs.affix", r = new n(this, o)), "string" == typeof t && r[t]()
        })
    }

    var n = function r(t, n) {
        this.options = e.extend({}, r.DEFAULTS, n), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.4", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (e, t, n, i) {
        var r = this.$target.scrollTop(), o = this.$element.offset(), s = this.$target.height();
        if (null != n && "top" == this.affixed)return n > r ? "top" : !1;
        if ("bottom" == this.affixed)return null != n ? r + this.unpin <= o.top ? !1 : "bottom" : e - i >= r + s ? !1 : "bottom";
        var a = null == this.affixed, l = a ? r : o.top, c = a ? s : t;
        return null != n && n >= r ? "top" : null != i && l + c >= e - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(), t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(), i = this.options.offset, r = i.top, o = i.bottom, s = e(document.body).height();
            "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var a = this.getState(s, t, r, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), c = e.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented())return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({top: s - t - o})
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function () {
        return e.fn.affix = i, this
    }, e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
            var n = e(this), i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
    var t = function () {
        if (e && e.fn && e.fn.select2 && e.fn.select2.amd)var t = e.fn.select2.amd;
        var t;
        return function () {
            if (!t || !t.requirejs) {
                t ? n = t : t = {};
                var e, n, i;
                !function (t) {
                    function r(e, t) {
                        return x.call(e, t)
                    }

                    function o(e, t) {
                        var n, i, r, o, s, a, l, c, u, d, p, h = t && t.split("/"), f = y.map, g = f && f["*"] || {};
                        if (e && "." === e.charAt(0))if (t) {
                            for (h = h.slice(0, h.length - 1), e = e.split("/"), s = e.length - 1, y.nodeIdCompat && C.test(e[s]) && (e[s] = e[s].replace(C, "")), e = h.concat(e), u = 0; u < e.length; u += 1)if (p = e[u], "." === p)e.splice(u, 1), u -= 1; else if (".." === p) {
                                if (1 === u && (".." === e[2] || ".." === e[0]))break;
                                u > 0 && (e.splice(u - 1, 2), u -= 2)
                            }
                            e = e.join("/")
                        } else 0 === e.indexOf("./") && (e = e.substring(2));
                        if ((h || g) && f) {
                            for (n = e.split("/"), u = n.length; u > 0; u -= 1) {
                                if (i = n.slice(0, u).join("/"), h)for (d = h.length; d > 0; d -= 1)if (r = f[h.slice(0, d).join("/")], r && (r = r[i])) {
                                    o = r, a = u;
                                    break
                                }
                                if (o)break;
                                !l && g && g[i] && (l = g[i], c = u)
                            }
                            !o && l && (o = l, a = c), o && (n.splice(0, a, o), e = n.join("/"))
                        }
                        return e
                    }

                    function s(e, n) {
                        return function () {
                            return h.apply(t, w.call(arguments, 0).concat([e, n]))
                        }
                    }

                    function a(e) {
                        return function (t) {
                            return o(t, e)
                        }
                    }

                    function l(e) {
                        return function (t) {
                            m[e] = t
                        }
                    }

                    function c(e) {
                        if (r(v, e)) {
                            var n = v[e];
                            delete v[e], b[e] = !0, p.apply(t, n)
                        }
                        if (!r(m, e) && !r(b, e))throw new Error("No " + e);
                        return m[e]
                    }

                    function u(e) {
                        var t, n = e ? e.indexOf("!") : -1;
                        return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                    }

                    function d(e) {
                        return function () {
                            return y && y.config && y.config[e] || {}
                        }
                    }

                    var p, h, f, g, m = {}, v = {}, y = {}, b = {}, x = Object.prototype.hasOwnProperty, w = [].slice, C = /\.js$/;
                    f = function (e, t) {
                        var n, i = u(e), r = i[0];
                        return e = i[1], r && (r = o(r, t), n = c(r)), r ? e = n && n.normalize ? n.normalize(e, a(t)) : o(e, t) : (e = o(e, t), i = u(e), r = i[0], e = i[1], r && (n = c(r))), {
                            f: r ? r + "!" + e : e,
                            n: e,
                            pr: r,
                            p: n
                        }
                    }, g = {
                        require: function (e) {
                            return s(e)
                        }, exports: function (e) {
                            var t = m[e];
                            return "undefined" != typeof t ? t : m[e] = {}
                        }, module: function (e) {
                            return {id: e, uri: "", exports: m[e], config: d(e)}
                        }
                    }, p = function (e, n, i, o) {
                        var a, u, d, p, h, y, x = [], w = typeof i;
                        if (o = o || e, "undefined" === w || "function" === w) {
                            for (n = !n.length && i.length ? ["require", "exports", "module"] : n, h = 0; h < n.length; h += 1)if (p = f(n[h], o), u = p.f, "require" === u)x[h] = g.require(e); else if ("exports" === u)x[h] = g.exports(e), y = !0; else if ("module" === u)a = x[h] = g.module(e); else if (r(m, u) || r(v, u) || r(b, u))x[h] = c(u); else {
                                if (!p.p)throw new Error(e + " missing " + u);
                                p.p.load(p.n, s(o, !0), l(u), {}), x[h] = m[u]
                            }
                            d = i ? i.apply(m[e], x) : void 0, e && (a && a.exports !== t && a.exports !== m[e] ? m[e] = a.exports : d === t && y || (m[e] = d))
                        } else e && (m[e] = i)
                    }, e = n = h = function (e, n, i, r, o) {
                        if ("string" == typeof e)return g[e] ? g[e](n) : c(f(e, n).f);
                        if (!e.splice) {
                            if (y = e, y.deps && h(y.deps, y.callback), !n)return;
                            n.splice ? (e = n, n = i, i = null) : e = t
                        }
                        return n = n || function () {
                        }, "function" == typeof i && (i = r, r = o), r ? p(t, e, n, i) : setTimeout(function () {
                            p(t, e, n, i)
                        }, 4), h
                    }, h.config = function (e) {
                        return h(e)
                    }, e._defined = m, i = function (e, t, n) {
                        t.splice || (n = t, t = []), r(m, e) || r(v, e) || (v[e] = [e, t, n])
                    }, i.amd = {jQuery: !0}
                }(), t.requirejs = e, t.require = n, t.define = i
            }
        }(), t.define("almond", function () {
        }), t.define("jquery", [], function () {
            var t = e || $;
            return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
        }), t.define("select2/utils", ["jquery"], function (e) {
            function t(e) {
                var t = e.prototype, n = [];
                for (var i in t) {
                    var r = t[i];
                    "function" == typeof r && "constructor" !== i && n.push(i)
                }
                return n
            }

            var n = {};
            n.Extend = function (e, t) {
                function n() {
                    this.constructor = e
                }

                var i = {}.hasOwnProperty;
                for (var r in t)i.call(t, r) && (e[r] = t[r]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
            }, n.Decorate = function (e, n) {
                function i() {
                    var t = Array.prototype.unshift, i = n.prototype.constructor.length, r = e.prototype.constructor;
                    i > 0 && (t.call(arguments, e.prototype.constructor), r = n.prototype.constructor), r.apply(this, arguments)
                }

                function r() {
                    this.constructor = i
                }

                var o = t(n), s = t(e);
                n.displayName = e.displayName, i.prototype = new r;
                for (var a = 0; a < s.length; a++) {
                    var l = s[a];
                    i.prototype[l] = e.prototype[l]
                }
                for (var c = (function (e) {
                    var t = function () {
                    };
                    e in i.prototype && (t = i.prototype[e]);
                    var r = n.prototype[e];
                    return function () {
                        var e = Array.prototype.unshift;
                        return e.call(arguments, t), r.apply(this, arguments)
                    }
                }), u = 0; u < o.length; u++) {
                    var d = o[u];
                    i.prototype[d] = c(d)
                }
                return i
            };
            var i = function () {
                this.listeners = {}
            };
            return i.prototype.on = function (e, t) {
                this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
            }, i.prototype.trigger = function (e) {
                var t = Array.prototype.slice;
                this.listeners = this.listeners || {}, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, i.prototype.invoke = function (e, t) {
                for (var n = 0, i = e.length; i > n; n++)e[n].apply(this, t)
            }, n.Observable = i, n.generateChars = function (e) {
                for (var t = "", n = 0; e > n; n++) {
                    var i = Math.floor(36 * Math.random());
                    t += i.toString(36)
                }
                return t
            }, n.bind = function (e, t) {
                return function () {
                    e.apply(t, arguments)
                }
            }, n._convertData = function (e) {
                for (var t in e) {
                    var n = t.split("-"), i = e;
                    if (1 !== n.length) {
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            o = o.substring(0, 1).toLowerCase() + o.substring(1), o in i || (i[o] = {}), r == n.length - 1 && (i[o] = e[t]), i = i[o]
                        }
                        delete e[t]
                    }
                }
                return e
            }, n.hasScroll = function (t, n) {
                var i = e(n), r = n.style.overflowX, o = n.style.overflowY;
                return r !== o || "hidden" !== o && "visible" !== o ? "scroll" === r || "scroll" === o ? !0 : i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth : !1
            }, n.escapeMarkup = function (e) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                    return t[e]
                })
            }, n.appendMany = function (t, n) {
                if ("1.7" === e.fn.jquery.substr(0, 3)) {
                    var i = e();
                    e.map(n, function (e) {
                        i = i.add(e)
                    }), n = i
                }
                t.append(n)
            }, n
        }), t.define("select2/results", ["jquery", "./utils"], function (e, t) {
            function n(e, t, i) {
                this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
            }

            return t.Extend(n, t.Observable), n.prototype.render = function () {
                var t = e('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
            }, n.prototype.clear = function () {
                this.$results.empty()
            }, n.prototype.displayMessage = function (t) {
                var n = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var i = e('<li role="treeitem" class="select2-results__option"></li>'), r = this.options.get("translations").get(t.message);
                i.append(n(r(t.args))), this.$results.append(i)
            }, n.prototype.append = function (e) {
                this.hideLoading();
                var t = [];
                if (null == e.results || 0 === e.results.length)return void(0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"}));
                e.results = this.sort(e.results);
                for (var n = 0; n < e.results.length; n++) {
                    var i = e.results[n], r = this.option(i);
                    t.push(r)
                }
                this.$results.append(t)
            }, n.prototype.position = function (e, t) {
                var n = t.find(".select2-results");
                n.append(e)
            }, n.prototype.sort = function (e) {
                var t = this.options.get("sorter");
                return t(e)
            }, n.prototype.setClasses = function () {
                var t = this;
                this.data.current(function (n) {
                    var i = e.map(n, function (e) {
                        return e.id.toString()
                    }), r = t.$results.find(".select2-results__option[aria-selected]");
                    r.each(function () {
                        var t = e(this), n = e.data(this, "data"), r = "" + n.id;
                        null != n.element && n.element.selected || null == n.element && e.inArray(r, i) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                    });
                    var o = r.filter("[aria-selected=true]");
                    o.length > 0 ? o.first().trigger("mouseenter") : r.first().trigger("mouseenter")
                })
            }, n.prototype.showLoading = function (e) {
                this.hideLoading();
                var t = this.options.get("translations").get("searching"), n = {
                    disabled: !0,
                    loading: !0,
                    text: t(e)
                }, i = this.option(n);
                i.className += " loading-results", this.$results.prepend(i)
            }, n.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove()
            }, n.prototype.option = function (t) {
                var n = document.createElement("li");
                n.className = "select2-results__option";
                var i = {role: "treeitem", "aria-selected": "false"};
                t.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == t.id && delete i["aria-selected"], null != t._resultId && (n.id = t._resultId), t.title && (n.title = t.title), t.children && (i.role = "group", i["aria-label"] = t.text, delete i["aria-selected"]);

                for (var r in i) {
                    var o = i[r];
                    n.setAttribute(r, o)
                }
                if (t.children) {
                    var s = e(n), a = document.createElement("strong");
                    a.className = "select2-results__group";
                    {
                        e(a)
                    }
                    this.template(t, a);
                    for (var l = [], c = 0; c < t.children.length; c++) {
                        var u = t.children[c], d = this.option(u);
                        l.push(d)
                    }
                    var p = e("<ul></ul>", {"class": "select2-results__options select2-results__options--nested"});
                    p.append(l), s.append(a), s.append(p)
                } else this.template(t, n);
                return e.data(n, "data", t), n
            }, n.prototype.bind = function (t, n) {
                var i = this, r = t.id + "-results";
                this.$results.attr("id", r), t.on("results:all", function (e) {
                    i.clear(), i.append(e.data), t.isOpen() && i.setClasses()
                }), t.on("results:append", function (e) {
                    i.append(e.data), t.isOpen() && i.setClasses()
                }), t.on("query", function (e) {
                    i.showLoading(e)
                }), t.on("select", function () {
                    t.isOpen() && i.setClasses()
                }), t.on("unselect", function () {
                    t.isOpen() && i.setClasses()
                }), t.on("open", function () {
                    i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible()
                }), t.on("close", function () {
                    i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant")
                }), t.on("results:toggle", function () {
                    var e = i.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup")
                }), t.on("results:select", function () {
                    var e = i.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = e.data("data");
                        "true" == e.attr("aria-selected") ? i.trigger("close") : i.trigger("select", {data: t})
                    }
                }), t.on("results:previous", function () {
                    var e = i.getHighlightedResults(), t = i.$results.find("[aria-selected]"), n = t.index(e);
                    if (0 !== n) {
                        var r = n - 1;
                        0 === e.length && (r = 0);
                        var o = t.eq(r);
                        o.trigger("mouseenter");
                        var s = i.$results.offset().top, a = o.offset().top, l = i.$results.scrollTop() + (a - s);
                        0 === r ? i.$results.scrollTop(0) : 0 > a - s && i.$results.scrollTop(l)
                    }
                }), t.on("results:next", function () {
                    var e = i.getHighlightedResults(), t = i.$results.find("[aria-selected]"), n = t.index(e), r = n + 1;
                    if (!(r >= t.length)) {
                        var o = t.eq(r);
                        o.trigger("mouseenter");
                        var s = i.$results.offset().top + i.$results.outerHeight(!1), a = o.offset().top + o.outerHeight(!1), l = i.$results.scrollTop() + a - s;
                        0 === r ? i.$results.scrollTop(0) : a > s && i.$results.scrollTop(l)
                    }
                }), t.on("results:focus", function (e) {
                    e.element.addClass("select2-results__option--highlighted")
                }), t.on("results:message", function (e) {
                    i.displayMessage(e)
                }), e.fn.mousewheel && this.$results.on("mousewheel", function (e) {
                    var t = i.$results.scrollTop(), n = i.$results.get(0).scrollHeight - i.$results.scrollTop() + e.deltaY, r = e.deltaY > 0 && t - e.deltaY <= 0, o = e.deltaY < 0 && n <= i.$results.height();
                    r ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), e.preventDefault(), e.stopPropagation())
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (t) {
                    var n = e(this), r = n.data("data");
                    return "true" === n.attr("aria-selected") ? void(i.options.get("multiple") ? i.trigger("unselect", {
                        originalEvent: t,
                        data: r
                    }) : i.trigger("close")) : void i.trigger("select", {originalEvent: t, data: r})
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (t) {
                    var n = e(this).data("data");
                    i.getHighlightedResults().removeClass("select2-results__option--highlighted"), i.trigger("results:focus", {
                        data: n,
                        element: e(this)
                    })
                })
            }, n.prototype.getHighlightedResults = function () {
                var e = this.$results.find(".select2-results__option--highlighted");
                return e
            }, n.prototype.destroy = function () {
                this.$results.remove()
            }, n.prototype.ensureHighlightVisible = function () {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                    var t = this.$results.find("[aria-selected]"), n = t.index(e), i = this.$results.offset().top, r = e.offset().top, o = this.$results.scrollTop() + (r - i), s = r - i;
                    o -= 2 * e.outerHeight(!1), 2 >= n ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || 0 > s) && this.$results.scrollTop(o)
                }
            }, n.prototype.template = function (t, n) {
                var i = this.options.get("templateResult"), r = this.options.get("escapeMarkup"), o = i(t);
                null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = r(o) : e(n).append(o)
            }, n
        }), t.define("select2/keys", [], function () {
            var e = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            };
            return e
        }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (e, t, n) {
            function i(e, t) {
                this.$element = e, this.options = t, i.__super__.constructor.call(this)
            }

            return t.Extend(i, t.Observable), i.prototype.render = function () {
                var t = e('<span class="select2-selection" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t
            }, i.prototype.bind = function (e, t) {
                var i = this, r = (e.id + "-container", e.id + "-results");
                this.container = e, this.$selection.on("focus", function (e) {
                    i.trigger("focus", e)
                }), this.$selection.on("blur", function (e) {
                    i.trigger("blur", e)
                }), this.$selection.on("keydown", function (e) {
                    i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                }), e.on("results:focus", function (e) {
                    i.$selection.attr("aria-activedescendant", e.data._resultId)
                }), e.on("selection:update", function (e) {
                    i.update(e.data)
                }), e.on("open", function () {
                    i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", r), i._attachCloseHandler(e)
                }), e.on("close", function () {
                    i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), i._detachCloseHandler(e)
                }), e.on("enable", function () {
                    i.$selection.attr("tabindex", i._tabindex)
                }), e.on("disable", function () {
                    i.$selection.attr("tabindex", "-1")
                })
            }, i.prototype._attachCloseHandler = function (t) {
                e(document.body).on("mousedown.select2." + t.id, function (t) {
                    var n = e(t.target), i = n.closest(".select2"), r = e(".select2.select2-container--open");
                    r.each(function () {
                        var t = e(this);
                        if (this != i[0]) {
                            var n = t.data("element");
                            n.select2("close")
                        }
                    })
                })
            }, i.prototype._detachCloseHandler = function (t) {
                e(document.body).off("mousedown.select2." + t.id)
            }, i.prototype.position = function (e, t) {
                var n = t.find(".selection");
                n.append(e)
            }, i.prototype.destroy = function () {
                this._detachCloseHandler(this.container)
            }, i.prototype.update = function (e) {
                throw new Error("The `update` method must be defined in child classes.")
            }, i
        }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i) {
            function r() {
                r.__super__.constructor.apply(this, arguments)
            }

            return n.Extend(r, t), r.prototype.render = function () {
                var e = r.__super__.render.call(this);
                return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
            }, r.prototype.bind = function (e, t) {
                var n = this;
                r.__super__.bind.apply(this, arguments);
                var i = e.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (e) {
                    1 === e.which && n.trigger("toggle", {originalEvent: e})
                }), this.$selection.on("focus", function (e) {
                }), this.$selection.on("blur", function (e) {
                }), e.on("selection:update", function (e) {
                    n.update(e.data)
                })
            }, r.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, r.prototype.display = function (e) {
                var t = this.options.get("templateSelection"), n = this.options.get("escapeMarkup");
                return n(t(e))
            }, r.prototype.selectionContainer = function () {
                return e("<span></span>")
            }, r.prototype.update = function (e) {
                if (0 === e.length)return void this.clear();
                var t = e[0], n = this.display(t), i = this.$selection.find(".select2-selection__rendered");
                i.empty().append(n), i.prop("title", t.title || t.text)
            }, r
        }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (e, t, n) {
            function i(e, t) {
                i.__super__.constructor.apply(this, arguments)
            }

            return n.Extend(i, t), i.prototype.render = function () {
                var e = i.__super__.render.call(this);
                return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
            }, i.prototype.bind = function (t, n) {
                var r = this;
                i.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {
                    r.trigger("toggle", {originalEvent: e})
                }), this.$selection.on("click", ".select2-selection__choice__remove", function (t) {
                    var n = e(this), i = n.parent(), o = i.data("data");
                    r.trigger("unselect", {originalEvent: t, data: o})
                })
            }, i.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, i.prototype.display = function (e) {
                var t = this.options.get("templateSelection"), n = this.options.get("escapeMarkup");
                return n(t(e))
            }, i.prototype.selectionContainer = function () {
                var t = e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                return t
            }, i.prototype.update = function (e) {
                if (this.clear(), 0 !== e.length) {
                    for (var t = [], i = 0; i < e.length; i++) {
                        var r = e[i], o = this.display(r), s = this.selectionContainer();
                        s.append(o), s.prop("title", r.title || r.text), s.data("data", r), t.push(s)
                    }
                    var a = this.$selection.find(".select2-selection__rendered");
                    n.appendMany(a, t)
                }
            }, i
        }), t.define("select2/selection/placeholder", ["../utils"], function (e) {
            function t(e, t, n) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
            }

            return t.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {id: "", text: t}), t
            }, t.prototype.createPlaceholder = function (e, t) {
                var n = this.selectionContainer();
                return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
            }, t.prototype.update = function (e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id, i = t.length > 1;
                if (i || n)return e.call(this, t);
                this.clear();
                var r = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(r)
            }, t
        }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function (e, t) {
            function n() {
            }

            return n.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
                    i._handleClear(e)
                }), t.on("keypress", function (e) {
                    i._handleKeyboardClear(e, t)
                })
            }, n.prototype._handleClear = function (e, t) {
                if (!this.options.get("disabled")) {
                    var n = this.$selection.find(".select2-selection__clear");
                    if (0 !== n.length) {
                        t.stopPropagation();
                        for (var i = n.data("data"), r = 0; r < i.length; r++) {
                            var o = {data: i[r]};
                            if (this.trigger("unselect", o), o.prevented)return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle")
                    }
                }
            }, n.prototype._handleKeyboardClear = function (e, n, i) {
                i.isOpen() || (n.which == t.DELETE || n.which == t.BACKSPACE) && this._handleClear(n)
            }, n.prototype.update = function (t, n) {
                if (t.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                    var i = e('<span class="select2-selection__clear">&times;</span>');
                    i.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(i)
                }
            }, n
        }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (e, t, n) {
            function i(e, t, n) {
                e.call(this, t, n)
            }

            return i.prototype.render = function (t) {
                var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></li>');
                this.$searchContainer = n, this.$search = n.find("input");
                var i = t.call(this);
                return i
            }, i.prototype.bind = function (e, t, i) {
                var r = this;
                e.call(this, t, i), t.on("open", function () {
                    r.$search.attr("tabindex", 0), r.$search.focus()
                }), t.on("close", function () {
                    r.$search.attr("tabindex", -1), r.$search.val(""), r.$search.focus()
                }), t.on("enable", function () {
                    r.$search.prop("disabled", !1)
                }), t.on("disable", function () {
                    r.$search.prop("disabled", !0)
                }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
                    r.trigger("focus", e)
                }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
                    r.trigger("blur", e)
                }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
                    e.stopPropagation(), r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented();
                    var t = e.which;
                    if (t === n.BACKSPACE && "" === r.$search.val()) {
                        var i = r.$searchContainer.prev(".select2-selection__choice");
                        if (i.length > 0) {
                            var o = i.data("data");
                            r.searchRemoveChoice(o), e.preventDefault()
                        }
                    }
                }), this.$selection.on("input", ".select2-search--inline", function (e) {
                    r.$selection.off("keyup.search")
                }), this.$selection.on("keyup.search input", ".select2-search--inline", function (e) {
                    r.handleSearch(e)
                })
            }, i.prototype.createPlaceholder = function (e, t) {
                this.$search.attr("placeholder", t.text)
            }, i.prototype.update = function (e, t) {
                this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch()
            }, i.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {term: e})
                }
                this._keyUpPrevented = !1
            }, i.prototype.searchRemoveChoice = function (e, t) {
                this.trigger("unselect", {data: t}), this.trigger("open"), this.$search.val(t.text + " ")
            }, i.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var e = "";
                if ("" !== this.$search.attr("placeholder"))e = this.$selection.find(".select2-selection__rendered").innerWidth(); else {
                    var t = this.$search.val().length + 1;
                    e = .75 * t + "em"
                }
                this.$search.css("width", e)
            }, i
        }), t.define("select2/selection/eventRelay", ["jquery"], function (e) {
            function t() {
            }

            return t.prototype.bind = function (t, n, i) {
                var r = this, o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"], s = ["opening", "closing", "selecting", "unselecting"];
                t.call(this, n, i), n.on("*", function (t, n) {
                    if (-1 !== e.inArray(t, o)) {
                        n = n || {};
                        var i = e.Event("select2:" + t, {params: n});
                        r.$element.trigger(i), -1 !== e.inArray(t, s) && (n.prevented = i.isDefaultPrevented())
                    }
                })
            }, t
        }), t.define("select2/translation", ["jquery", "require"], function (e, t) {
            function n(e) {
                this.dict = e || {}
            }

            return n.prototype.all = function () {
                return this.dict
            }, n.prototype.get = function (e) {
                return this.dict[e]
            }, n.prototype.extend = function (t) {
                this.dict = e.extend({}, t.all(), this.dict)
            }, n._cache = {}, n.loadPath = function (e) {
                if (!(e in n._cache)) {
                    var i = t(e);
                    n._cache[e] = i
                }
                return new n(n._cache[e])
            }, n
        }), t.define("select2/diacritics", [], function () {
            var e = {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            };
            return e
        }), t.define("select2/data/base", ["../utils"], function (e) {
            function t(e, n) {
                t.__super__.constructor.call(this)
            }

            return e.Extend(t, e.Observable), t.prototype.current = function (e) {
                throw new Error("The `current` method must be defined in child classes.")
            }, t.prototype.query = function (e, t) {
                throw new Error("The `query` method must be defined in child classes.")
            }, t.prototype.bind = function (e, t) {
            }, t.prototype.destroy = function () {
            }, t.prototype.generateResultId = function (t, n) {
                var i = t.id + "-result-";
                return i += e.generateChars(4), i += null != n.id ? "-" + n.id.toString() : "-" + e.generateChars(4)
            }, t
        }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, n) {
            function i(e, t) {
                this.$element = e, this.options = t, i.__super__.constructor.call(this)
            }

            return t.Extend(i, e), i.prototype.current = function (e) {
                var t = [], i = this;
                this.$element.find(":selected").each(function () {
                    var e = n(this), r = i.item(e);
                    t.push(r)
                }), e(t)
            }, i.prototype.select = function (e) {
                var t = this;
                if (e.selected = !0, n(e.element).is("option"))return e.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple"))this.current(function (i) {
                    var r = [];
                    e = [e], e.push.apply(e, i);
                    for (var o = 0; o < e.length; o++) {
                        var s = e[o].id;
                        -1 === n.inArray(s, r) && r.push(s)
                    }
                    t.$element.val(r), t.$element.trigger("change")
                }); else {
                    var i = e.id;
                    this.$element.val(i), this.$element.trigger("change")
                }
            }, i.prototype.unselect = function (e) {
                var t = this;
                if (this.$element.prop("multiple"))return e.selected = !1, n(e.element).is("option") ? (e.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (i) {
                    for (var r = [], o = 0; o < i.length; o++) {
                        var s = i[o].id;
                        s !== e.id && -1 === n.inArray(s, r) && r.push(s)
                    }
                    t.$element.val(r), t.$element.trigger("change")
                })
            }, i.prototype.bind = function (e, t) {
                var n = this;
                this.container = e, e.on("select", function (e) {
                    n.select(e.data)
                }), e.on("unselect", function (e) {
                    n.unselect(e.data)
                })
            }, i.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    n.removeData(this, "data")
                })
            }, i.prototype.query = function (e, t) {
                var i = [], r = this, o = this.$element.children();
                o.each(function () {
                    var t = n(this);
                    if (t.is("option") || t.is("optgroup")) {
                        var o = r.item(t), s = r.matches(e, o);
                        null !== s && i.push(s)
                    }
                }), t({results: i})
            }, i.prototype.addOptions = function (e) {
                t.appendMany(this.$element, e)
            }, i.prototype.option = function (e) {
                var t;
                e.children ? (t = document.createElement("optgroup"), t.label = e.text) : (t = document.createElement("option"), void 0 !== t.textContent ? t.textContent = e.text : t.innerText = e.text), e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                var i = n(t), r = this._normalizeItem(e);
                return r.element = t, n.data(t, "data", r), i
            }, i.prototype.item = function (e) {
                var t = {};
                if (t = n.data(e[0], "data"), null != t)return t;
                if (e.is("option"))t = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title")
                }; else if (e.is("optgroup")) {
                    t = {text: e.prop("label"), children: [], title: e.prop("title")};
                    for (var i = e.children("option"), r = [], o = 0; o < i.length; o++) {
                        var s = n(i[o]), a = this.item(s);
                        r.push(a)
                    }
                    t.children = r
                }
                return t = this._normalizeItem(t), t.element = e[0], n.data(e[0], "data", t), t
            }, i.prototype._normalizeItem = function (e) {
                n.isPlainObject(e) || (e = {id: e, text: e}), e = n.extend({}, {text: ""}, e);
                var t = {selected: !1, disabled: !1};
                return null != e.id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, t, e)
            }, i.prototype.matches = function (e, t) {
                var n = this.options.get("matcher");
                return n(e, t)
            }, i
        }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, n) {
            function i(e, t) {
                var n = t.get("data") || [];
                i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
            }

            return t.Extend(i, e), i.prototype.select = function (e) {
                var t = this.$element.find("option").filter(function (t, n) {
                    return n.value == e.id.toString()
                });
                0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
            }, i.prototype.convertToOptions = function (e) {
                function i(e) {
                    return function () {
                        return n(this).val() == e.id
                    }
                }

                for (var r = this, o = this.$element.find("option"), s = o.map(function () {
                    return r.item(n(this)).id
                }).get(), a = [], l = 0; l < e.length; l++) {
                    var c = this._normalizeItem(e[l]);
                    if (n.inArray(c.id, s) >= 0) {
                        var u = o.filter(i(c)), d = this.item(u), p = (n.extend(!0, {}, d, c), this.option(d));
                        u.replaceWith(p)
                    } else {
                        var h = this.option(c);
                        if (c.children) {
                            var f = this.convertToOptions(c.children);
                            t.appendMany(h, f)
                        }
                        a.push(h)
                    }
                }
                return a
            }, i
        }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, n) {
            function i(t, n) {
                this.ajaxOptions = this._applyDefaults(n.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), e.__super__.constructor.call(this, t, n)
            }

            return t.Extend(i, e), i.prototype._applyDefaults = function (e) {
                var t = {
                    data: function (e) {
                        return {q: e.term}
                    }, transport: function (e, t, i) {
                        var r = n.ajax(e);
                        return r.then(t), r.fail(i), r
                    }
                };
                return n.extend({}, t, e, !0)
            }, i.prototype.processResults = function (e) {
                return e
            }, i.prototype.query = function (e, t) {
                function i() {
                    var i = o.transport(o, function (i) {
                        var o = r.processResults(i, e);
                        r.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(o)
                    }, function () {
                    });
                    r._request = i
                }

                var r = this;
                null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var o = n.extend({type: "GET"}, this.ajaxOptions);
                "function" == typeof o.url && (o.url = o.url(e)), "function" == typeof o.data && (o.data = o.data(e)), this.ajaxOptions.delay && "" !== e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
            }, i
        }), t.define("select2/data/tags", ["jquery"], function (e) {
            function t(t, n, i) {
                var r = i.get("tags"), o = i.get("createTag");
                if (void 0 !== o && (this.createTag = o), t.call(this, n, i), e.isArray(r))for (var s = 0; s < r.length; s++) {
                    var a = r[s], l = this._normalizeItem(a), c = this.option(l);
                    this.$element.append(c)
                }
            }

            return t.prototype.query = function (e, t, n) {
                function i(e, o) {
                    for (var s = e.results, a = 0; a < s.length; a++) {
                        var l = s[a], c = null != l.children && !i({results: l.children}, !0), u = l.text === t.term;
                        if (u || c)return o ? !1 : (e.data = s, void n(e))
                    }
                    if (o)return !0;
                    var d = r.createTag(t);
                    if (null != d) {
                        var p = r.option(d);
                        p.attr("data-select2-tag", !0), r.addOptions([p]), r.insertTag(s, d)
                    }
                    e.results = s, n(e)
                }

                var r = this;
                return this._removeOldTags(), null == t.term || null != t.page ? void e.call(this, t, n) : void e.call(this, t, i)
            }, t.prototype.createTag = function (t, n) {
                var i = e.trim(n.term);
                return "" === i ? null : {id: i, text: i}
            }, t.prototype.insertTag = function (e, t, n) {
                t.unshift(n)
            }, t.prototype._removeOldTags = function (t) {
                var n = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                n.each(function () {
                    this.selected || e(this).remove()
                })
            }, t
        }), t.define("select2/data/tokenizer", ["jquery"], function (e) {
            function t(e, t, n) {
                var i = n.get("tokenizer");
                void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
            }

            return t.prototype.bind = function (e, t, n) {
                e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
            }, t.prototype.query = function (e, t, n) {
                function i(e) {
                    r.select(e)
                }

                var r = this;
                t.term = t.term || "";
                var o = this.tokenizer(t, this.options, i);
                o.term !== t.term && (this.$search.length && (this.$search.val(o.term), this.$search.focus()), t.term = o.term), e.call(this, t, n)
            }, t.prototype.tokenizer = function (t, n, i, r) {
                for (var o = i.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function (e) {
                        return {id: e.term, text: e.term}
                    }; a < s.length;) {
                    var c = s[a];
                    if (-1 !== e.inArray(c, o)) {
                        var u = s.substr(0, a), d = e.extend({}, n, {term: u}), p = l(d);
                        r(p), s = s.substr(a + 1) || "", a = 0
                    } else a++
                }
                return {term: s}
            }, t
        }), t.define("select2/data/minimumInputLength", [], function () {
            function e(e, t, n) {
                this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
            }

            return e.prototype.query = function (e, t, n) {
                return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {minimum: this.minimumInputLength, input: t.term, params: t}
                }) : void e.call(this, t, n)
            }, e
        }), t.define("select2/data/maximumInputLength", [], function () {
            function e(e, t, n) {
                this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
            }

            return e.prototype.query = function (e, t, n) {
                return t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {maximum: this.maximumInputLength, input: t.term, params: t}
                }) : void e.call(this, t, n)
            }, e
        }), t.define("select2/data/maximumSelectionLength", [], function () {
            function e(e, t, n) {
                this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
            }

            return e.prototype.query = function (e, t, n) {
                var i = this;
                this.current(function (r) {
                    var o = null != r ? r.length : 0;
                    return i.maximumSelectionLength > 0 && o >= i.maximumSelectionLength ? void i.trigger("results:message", {
                        message: "maximumSelected",
                        args: {maximum: i.maximumSelectionLength}
                    }) : void e.call(i, t, n)
                })
            }, e
        }), t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
            function n(e, t) {
                this.$element = e, this.options = t, n.__super__.constructor.call(this)
            }

            return t.Extend(n, t.Observable), n.prototype.render = function () {
                var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
            }, n.prototype.position = function (e, t) {
            }, n.prototype.destroy = function () {
                this.$dropdown.remove()
            }, n
        }), t.define("select2/dropdown/search", ["jquery", "../utils"], function (e, t) {
            function n() {
            }

            return n.prototype.render = function (t) {
                var n = t.call(this), i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
            }, n.prototype.bind = function (t, n, i) {
                var r = this;
                t.call(this, n, i), this.$search.on("keydown", function (e) {
                    r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented()
                }), this.$search.on("input", function (t) {
                    e(this).off("keyup")
                }), this.$search.on("keyup input", function (e) {
                    r.handleSearch(e)
                }), n.on("open", function () {
                    r.$search.attr("tabindex", 0), r.$search.focus(), window.setTimeout(function () {
                        r.$search.focus()
                    }, 0)
                }), n.on("close", function () {
                    r.$search.attr("tabindex", -1), r.$search.val("")
                }), n.on("results:all", function (e) {
                    if (null == e.query.term || "" === e.query.term) {
                        var t = r.showSearch(e);
                        t ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide")
                    }
                })
            }, n.prototype.handleSearch = function (e) {
                if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {term: t})
                }
                this._keyUpPrevented = !1
            }, n.prototype.showSearch = function (e, t) {
                return !0
            }, n
        }), t.define("select2/dropdown/hidePlaceholder", [], function () {
            function e(e, t, n, i) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                    e.call(this, t, n, i)
            }

            return e.prototype.append = function (e, t) {
                t.results = this.removePlaceholder(t.results), e.call(this, t)
            }, e.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {id: "", text: t}), t
            }, e.prototype.removePlaceholder = function (e, t) {
                for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                    var r = t[i];
                    this.placeholder.id === r.id && n.splice(i, 1)
                }
                return n
            }, e
        }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
            function t(e, t, n, i) {
                this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }

            return t.prototype.append = function (e, t) {
                this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
            }, t.prototype.bind = function (t, n, i) {
                var r = this;
                t.call(this, n, i), n.on("query", function (e) {
                    r.lastParams = e, r.loading = !0
                }), n.on("query:append", function (e) {
                    r.lastParams = e, r.loading = !0
                }), this.$results.on("scroll", function () {
                    var t = e.contains(document.documentElement, r.$loadingMore[0]);
                    if (!r.loading && t) {
                        var n = r.$results.offset().top + r.$results.outerHeight(!1), i = r.$loadingMore.offset().top + r.$loadingMore.outerHeight(!1);
                        n + 50 >= i && r.loadMore()
                    }
                })
            }, t.prototype.loadMore = function () {
                this.loading = !0;
                var t = e.extend({}, {page: 1}, this.lastParams);
                t.page++, this.trigger("query:append", t)
            }, t.prototype.showLoadingMore = function (e, t) {
                return t.pagination && t.pagination.more
            }, t.prototype.createLoadingMore = function () {
                var t = e('<li class="option load-more" role="treeitem"></li>'), n = this.options.get("translations").get("loadingMore");
                return t.html(n(this.lastParams)), t
            }, t
        }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (e, t) {
            function n(e, t, n) {
                this.$dropdownParent = n.get("dropdownParent") || document.body, e.call(this, t, n)
            }

            return n.prototype.bind = function (e, t, n) {
                var i = this, r = !1;
                e.call(this, t, n), t.on("open", function () {
                    i._showDropdown(), i._attachPositioningHandler(t), r || (r = !0, t.on("results:all", function () {
                        i._positionDropdown(), i._resizeDropdown()
                    }), t.on("results:append", function () {
                        i._positionDropdown(), i._resizeDropdown()
                    }))
                }), t.on("close", function () {
                    i._hideDropdown(), i._detachPositioningHandler(t)
                }), this.$dropdownContainer.on("mousedown", function (e) {
                    e.stopPropagation()
                })
            }, n.prototype.position = function (e, t, n) {
                t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = n
            }, n.prototype.render = function (t) {
                var n = e("<span></span>"), i = t.call(this);
                return n.append(i), this.$dropdownContainer = n, n
            }, n.prototype._hideDropdown = function (e) {
                this.$dropdownContainer.detach()
            }, n.prototype._attachPositioningHandler = function (n) {
                var i = this, r = "scroll.select2." + n.id, o = "resize.select2." + n.id, s = "orientationchange.select2." + n.id, a = this.$container.parents().filter(t.hasScroll);
                a.each(function () {
                    e(this).data("select2-scroll-position", {x: e(this).scrollLeft(), y: e(this).scrollTop()})
                }), a.on(r, function (t) {
                    var n = e(this).data("select2-scroll-position");
                    e(this).scrollTop(n.y)
                }), e(window).on(r + " " + o + " " + s, function (e) {
                    i._positionDropdown(), i._resizeDropdown()
                })
            }, n.prototype._detachPositioningHandler = function (n) {
                var i = "scroll.select2." + n.id, r = "resize.select2." + n.id, o = "orientationchange.select2." + n.id, s = this.$container.parents().filter(t.hasScroll);
                s.off(i), e(window).off(i + " " + r + " " + o)
            }, n.prototype._positionDropdown = function () {
                var t = e(window), n = this.$dropdown.hasClass("select2-dropdown--above"), i = this.$dropdown.hasClass("select2-dropdown--below"), r = null, o = (this.$container.position(), this.$container.offset());
                o.bottom = o.top + this.$container.outerHeight(!1);
                var s = {height: this.$container.outerHeight(!1)};
                s.top = o.top, s.bottom = o.top + s.height;
                var a = {height: this.$dropdown.outerHeight(!1)}, l = {
                    top: t.scrollTop(),
                    bottom: t.scrollTop() + t.height()
                }, c = l.top < o.top - a.height, u = l.bottom > o.bottom + a.height, d = {left: o.left, top: s.bottom};
                n || i || (r = "below"), u || !c || n ? !c && u && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (d.top = s.top - a.height), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(d)
            }, n.prototype._resizeDropdown = function () {
                this.$dropdownContainer.width();
                var e = {width: this.$container.outerWidth(!1) + "px"};
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.width = "auto"), this.$dropdown.css(e)
            }, n.prototype._showDropdown = function (e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, n
        }), t.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function e(t) {
                for (var n = 0, i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.children ? n += e(r.children) : n++
                }
                return n
            }

            function t(e, t, n, i) {
                this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
            }

            return t.prototype.showSearch = function (t, n) {
                return e(n.data.results) < this.minimumResultsForSearch ? !1 : t.call(this, n)
            }, t
        }), t.define("select2/dropdown/selectOnClose", [], function () {
            function e() {
            }

            return e.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n), t.on("close", function () {
                    i._handleSelectOnClose()
                })
            }, e.prototype._handleSelectOnClose = function () {
                var e = this.getHighlightedResults();
                e.length < 1 || this.trigger("select", {data: e.data("data")})
            }, e
        }), t.define("select2/dropdown/closeOnSelect", [], function () {
            function e() {
            }

            return e.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n), t.on("select", function (e) {
                    i._selectTriggered(e)
                }), t.on("unselect", function (e) {
                    i._selectTriggered(e)
                })
            }, e.prototype._selectTriggered = function (e, t) {
                var n = t.originalEvent;
                n && n.ctrlKey || this.trigger("close")
            }, e
        }), t.define("select2/i18n/en", [], function () {
            return {
                errorLoading: function () {
                    return "The results could not be loaded."
                }, inputTooLong: function (e) {
                    var t = e.input.length - e.maximum, n = "Please delete " + t + " character";
                    return 1 != t && (n += "s"), n
                }, inputTooShort: function (e) {
                    var t = e.minimum - e.input.length, n = "Please enter " + t + " or more characters";
                    return n
                }, loadingMore: function () {
                    return "Loading more results…"
                }, maximumSelected: function (e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"), t
                }, noResults: function () {
                    return "No results found"
                }, searching: function () {
                    return "Searching…"
                }
            }
        }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (e, t, n, i, r, o, s, a, l, c, u, d, p, h, f, g, m, v, y, b, x, w, C, T, $, E, S, A, k) {
            function N() {
                this.reset()
            }

            N.prototype.apply = function (d) {
                if (d = e.extend({}, this.defaults, d), null == d.dataAdapter) {
                    if (d.dataAdapter = null != d.ajax ? f : null != d.data ? h : p, d.minimumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, v)), d.maximumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, y)), d.maximumSelectionLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, b)), d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, g)), (null != d.tokenSeparators || null != d.tokenizer) && (d.dataAdapter = c.Decorate(d.dataAdapter, m)), null != d.query) {
                        var k = t(d.amdBase + "compat/query");
                        d.dataAdapter = c.Decorate(d.dataAdapter, k)
                    }
                    if (null != d.initSelection) {
                        var N = t(d.amdBase + "compat/initSelection");
                        d.dataAdapter = c.Decorate(d.dataAdapter, N)
                    }
                }
                if (null == d.resultsAdapter && (d.resultsAdapter = n, null != d.ajax && (d.resultsAdapter = c.Decorate(d.resultsAdapter, T)), null != d.placeholder && (d.resultsAdapter = c.Decorate(d.resultsAdapter, C)), d.selectOnClose && (d.resultsAdapter = c.Decorate(d.resultsAdapter, S))), null == d.dropdownAdapter) {
                    if (d.multiple)d.dropdownAdapter = x; else {
                        var _ = c.Decorate(x, w);
                        d.dropdownAdapter = _
                    }
                    if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, E)), d.closeOnSelect && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, A)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                        var D = t(d.amdBase + "compat/dropdownCss");
                        d.dropdownAdapter = c.Decorate(d.dropdownAdapter, D)
                    }
                    d.dropdownAdapter = c.Decorate(d.dropdownAdapter, $)
                }
                if (null == d.selectionAdapter) {
                    if (d.selectionAdapter = d.multiple ? r : i, null != d.placeholder && (d.selectionAdapter = c.Decorate(d.selectionAdapter, o)), d.allowClear && (d.selectionAdapter = c.Decorate(d.selectionAdapter, s)), d.multiple && (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                        var O = t(d.amdBase + "compat/containerCss");
                        d.selectionAdapter = c.Decorate(d.selectionAdapter, O)
                    }
                    d.selectionAdapter = c.Decorate(d.selectionAdapter, l)
                }
                if ("string" == typeof d.language)if (d.language.indexOf("-") > 0) {
                    var j = d.language.split("-"), I = j[0];
                    d.language = [d.language, I]
                } else d.language = [d.language];
                if (e.isArray(d.language)) {
                    var L = new u;
                    d.language.push("en");
                    for (var q = d.language, R = 0; R < q.length; R++) {
                        var P = q[R], H = {};
                        try {
                            H = u.loadPath(P)
                        } catch (M) {
                            try {
                                P = this.defaults.amdLanguageBase + P, H = u.loadPath(P)
                            } catch (F) {
                                d.debug && window.console && console.warn && console.warn('Select2: The language file for "' + P + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        L.extend(H)
                    }
                    d.translations = L
                } else {
                    var U = u.loadPath(this.defaults.amdLanguageBase + "en"), W = new u(d.language);
                    W.extend(U), d.translations = W
                }
                return d
            }, N.prototype.reset = function () {
                function t(e) {
                    function t(e) {
                        return d[e] || e
                    }

                    return e.replace(/[^\u0000-\u007E]/g, t)
                }

                function n(i, r) {
                    for (var o = !0; o;) {
                        var s = i, a = r;
                        if (u = d = p = h = l = c = void 0, o = !1, "" === e.trim(s.term))return a;
                        if (!(a.children && a.children.length > 0)) {
                            var l = t(a.text).toUpperCase(), c = t(s.term).toUpperCase();
                            return l.indexOf(c) > -1 ? a : null
                        }
                        for (var u = e.extend(!0, {}, a), d = a.children.length - 1; d >= 0; d--) {
                            var p = a.children[d], h = n(s, p);
                            null == h && u.children.splice(d, 1)
                        }
                        if (u.children.length > 0)return u;
                        i = s, r = u, o = !0
                    }
                }

                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: k,
                    matcher: n,
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function (e) {
                        return e
                    },
                    templateResult: function (e) {
                        return e.text
                    },
                    templateSelection: function (e) {
                        return e.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }, N.prototype.set = function (t, n) {
                var i = e.camelCase(t), r = {};
                r[i] = n;
                var o = c._convertData(r);
                e.extend(this.defaults, o)
            };
            var _ = new N;
            return _
        }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (e, t, n, i) {
            function r(t, r) {
                if (this.options = t, null != r && this.fromElement(r), this.options = n.apply(this.options), r && r.is("input")) {
                    var o = e(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o)
                }
            }

            return r.prototype.fromElement = function (e) {
                var n = ["select2"];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (this.options.dir = e.prop("dir") ? e.prop("dir") : e.closest("[dir]").prop("dir") ? e.closest("[dir]").prop("dir") : "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                var r = {};
                r = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                var o = t.extend(!0, {}, r);
                o = i._convertData(o);
                for (var s in o)t.inArray(s, n) > -1 || (t.isPlainObject(this.options[s]) ? t.extend(this.options[s], o[s]) : this.options[s] = o[s]);
                return this
            }, r.prototype.get = function (e) {
                return this.options[e]
            }, r.prototype.set = function (e, t) {
                this.options[e] = t
            }, r
        }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (e, t, n, i) {
            var r = function o(e, n) {
                null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), n = n || {}, this.options = new t(n, e), o.__super__.constructor.call(this);
                var i = e.attr("tabindex") || 0;
                e.data("old-tabindex", i), e.attr("tabindex", "-1");
                var r = this.options.get("dataAdapter");
                this.dataAdapter = new r(e, this.options);
                var s = this.render();
                this._placeContainer(s);
                var a = this.options.get("selectionAdapter");
                this.selection = new a(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s);
                var l = this.options.get("dropdownAdapter");
                this.dropdown = new l(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s);
                var c = this.options.get("resultsAdapter");
                this.results = new c(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var u = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
                    u.trigger("selection:update", {data: e})
                }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
            };
            return n.Extend(r, n.Observable), r.prototype._generateId = function (e) {
                var t = "";
                return t = null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), t = "select2-" + t
            }, r.prototype._placeContainer = function (e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t)
            }, r.prototype._resolveWidth = function (e, t) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var i = this._resolveWidth(e, "style");
                    return null != i ? i : this._resolveWidth(e, "element")
                }
                if ("element" == t) {
                    var r = e.outerWidth(!1);
                    return 0 >= r ? "auto" : r + "px"
                }
                if ("style" == t) {
                    var o = e.attr("style");
                    if ("string" != typeof o)return null;
                    for (var s = o.split(";"), a = 0, l = s.length; l > a; a += 1) {
                        var c = s[a].replace(/\s/g, ""), u = c.match(n);
                        if (null !== u && u.length >= 1)return u[1]
                    }
                    return null
                }
                return t
            }, r.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, r.prototype._registerDomEvents = function () {
                var t = this;
                this.$element.on("change.select2", function () {
                    t.dataAdapter.current(function (e) {
                        t.trigger("selection:update", {data: e})
                    })
                }), this._sync = n.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != i ? (this._observer = new i(function (n) {
                    e.each(n, t._sync)
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", t._sync, !1)
            }, r.prototype._registerDataEvents = function () {
                var e = this;
                this.dataAdapter.on("*", function (t, n) {
                    e.trigger(t, n)
                })
            }, r.prototype._registerSelectionEvents = function () {
                var t = this, n = ["toggle"];
                this.selection.on("toggle", function () {
                    t.toggleDropdown()
                }), this.selection.on("*", function (i, r) {
                    -1 === e.inArray(i, n) && t.trigger(i, r)
                })
            }, r.prototype._registerDropdownEvents = function () {
                var e = this;
                this.dropdown.on("*", function (t, n) {
                    e.trigger(t, n)
                })
            }, r.prototype._registerResultsEvents = function () {
                var e = this;
                this.results.on("*", function (t, n) {
                    e.trigger(t, n)
                })
            }, r.prototype._registerEvents = function () {
                var e = this;
                this.on("open", function () {
                    e.$container.addClass("select2-container--open")
                }), this.on("close", function () {
                    e.$container.removeClass("select2-container--open")
                }), this.on("enable", function () {
                    e.$container.removeClass("select2-container--disabled")
                }), this.on("disable", function () {
                    e.$container.addClass("select2-container--disabled")
                }), this.on("focus", function () {
                    e.$container.addClass("select2-container--focus")
                }), this.on("blur", function () {
                    e.$container.removeClass("select2-container--focus")
                }), this.on("query", function (t) {
                    e.isOpen() || e.trigger("open"), this.dataAdapter.query(t, function (n) {
                        e.trigger("results:all", {data: n, query: t})
                    })
                }), this.on("query:append", function (t) {
                    this.dataAdapter.query(t, function (n) {
                        e.trigger("results:append", {data: n, query: t})
                    })
                }), this.on("keypress", function (t) {
                    var n = t.which;
                    e.isOpen() ? n === i.ENTER ? (e.trigger("results:select"), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle"), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous"), t.preventDefault()) : n === i.DOWN ? (e.trigger("results:next"), t.preventDefault()) : (n === i.ESC || n === i.TAB) && (e.close(), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || (n === i.DOWN || n === i.UP) && t.altKey) && (e.open(), t.preventDefault())
                })
            }, r.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable")) : this.trigger("enable")
            }, r.prototype.trigger = function (e, t) {
                var n = r.__super__.trigger, i = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting"
                };
                if (e in i) {
                    var o = i[e], s = {prevented: !1, name: e, args: t};
                    if (n.call(this, o, s), s.prevented)return void(t.prevented = !0)
                }
                n.call(this, e, t)
            }, r.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, r.prototype.open = function () {
                this.isOpen() || (this.trigger("query", {}), this.trigger("open"))
            }, r.prototype.close = function () {
                this.isOpen() && this.trigger("close")
            }, r.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open")
            }, r.prototype.enable = function (e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == e || 0 === e.length) && (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t)
            }, r.prototype.data = function () {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var e = [];
                return this.dataAdapter.current(function (t) {
                    e = t
                }), e
            }, r.prototype.val = function (t) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length)return this.$element.val();
                var n = t[0];
                e.isArray(n) && (n = e.map(n, function (e) {
                    return e.toString()
                })), this.$element.val(n).trigger("change")
            }, r.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
            }, r.prototype.render = function () {
                var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
            }, r
        }), t.define("jquery.select2", ["jquery", "require", "./select2/core", "./select2/defaults"], function (e, t, n, i) {
            if (t("jquery.mousewheel"), null == e.fn.select2) {
                var r = ["open", "close", "destroy"];
                e.fn.select2 = function (t) {
                    if (t = t || {}, "object" == typeof t)return this.each(function () {
                        {
                            var i = e.extend({}, t, !0);
                            new n(e(this), i)
                        }
                    }), this;
                    if ("string" == typeof t) {
                        var i = this.data("select2");
                        null == i && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2.");
                        var o = Array.prototype.slice.call(arguments, 1), s = i[t](o);
                        return e.inArray(t, r) > -1 ? this : s
                    }
                    throw new Error("Invalid arguments for Select2: " + t)
                }
            }
            return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
        }), t.define("jquery.mousewheel", ["jquery"], function (e) {
            return e
        }), {define: t.define, require: t.require}
    }(), n = t.require("jquery.select2");
    return e.fn.select2.amd = t, n
}), +function (e) {
    var t = function i(t, n) {
        this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$element.on("click.bs.rowlink", "td:not(.rowlink-skip)", e.proxy(this.click, this))
    };
    t.DEFAULTS = {target: "a"}, t.prototype.click = function (t) {
        var n = e(t.currentTarget).closest("tr").find(this.options.target)[0];
        if (e(t.target)[0] !== n)if (t.preventDefault(), n.click)n.click(); else if (document.createEvent) {
            var i = document.createEvent("MouseEvents");
            i.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(i)
        }
    };
    var n = e.fn.rowlink;
    e.fn.rowlink = function (n) {
        return this.each(function () {
            var i = e(this), r = i.data("bs.rowlink");
            r || i.data("bs.rowlink", r = new t(this, n))
        })
    }, e.fn.rowlink.Constructor = t, e.fn.rowlink.noConflict = function () {
        return e.fn.rowlink = n, this
    }, e(document).on("click.bs.rowlink.data-api", '[data-link="row"]', function (t) {
        if (0 === e(t.target).closest(".rowlink-skip").length) {
            var n = e(this);
            n.data("bs.rowlink") || (n.rowlink(n.data()), e(t.target).trigger("click.bs.rowlink"))
        }
    })
}(window.jQuery), function (e) {
    var t = {
        initTree: function (t) {
            var n = e.extend({}, this.treegrid.defaults, t);
            return this.each(function () {
                var t = e(this);
                t.treegrid("setTreeContainer", e(this)), t.treegrid("setSettings", n), n.getRootNodes.apply(this, [e(this)]).treegrid("initNode", n), t.treegrid("getRootNodes").treegrid("render")
            })
        }, initNode: function (t) {
            return this.each(function () {
                var n = e(this);
                n.treegrid("setTreeContainer", t.getTreeGridContainer.apply(this)), n.treegrid("getChildNodes").treegrid("initNode", t), n.treegrid("initExpander").treegrid("initIndent").treegrid("initEvents").treegrid("initState").treegrid("initChangeEvent").treegrid("initSettingsEvents")
            })
        }, initChangeEvent: function () {
            var t = e(this);
            return t.on("change", function () {
                var t = e(this);
                t.treegrid("render"), t.treegrid("getSetting", "saveState") && t.treegrid("saveState")
            }), t
        }, initEvents: function () {
            var t = e(this);
            return t.on("collapse", function () {
                var t = e(this);
                t.removeClass("treegrid-expanded"), t.addClass("treegrid-collapsed")
            }), t.on("expand", function () {
                var t = e(this);
                t.removeClass("treegrid-collapsed"), t.addClass("treegrid-expanded")
            }), t
        }, initSettingsEvents: function () {
            var t = e(this);
            return t.on("change", function () {
                var t = e(this);
                "function" == typeof t.treegrid("getSetting", "onChange") && t.treegrid("getSetting", "onChange").apply(t)
            }), t.on("collapse", function () {
                var t = e(this);
                "function" == typeof t.treegrid("getSetting", "onCollapse") && t.treegrid("getSetting", "onCollapse").apply(t)
            }), t.on("expand", function () {
                var t = e(this);
                "function" == typeof t.treegrid("getSetting", "onExpand") && t.treegrid("getSetting", "onExpand").apply(t)
            }), t
        }, initExpander: function () {
            var t = e(this), n = t.find("td").get(t.treegrid("getSetting", "treeColumn")), i = t.treegrid("getSetting", "expanderTemplate"), r = t.treegrid("getSetting", "getExpander").apply(this);
            return r && r.remove(), e(i).prependTo(n).click(function () {
                e(e(this).closest("tr")).treegrid("toggle")
            }), t
        }, initIndent: function () {
            var t = e(this);
            t.find(".treegrid-indent").remove();
            for (var n = t.treegrid("getSetting", "indentTemplate"), i = t.find(".treegrid-expander"), r = t.treegrid("getDepth"), o = 0; r > o; o++)e(n).insertBefore(i);
            return t
        }, initState: function () {
            var t = e(this);
            return t.treegrid(t.treegrid("getSetting", "saveState") && !t.treegrid("isFirstInit") ? "restoreState" : "expanded" === t.treegrid("getSetting", "initialState") ? "expand" : "collapse"), t
        }, isFirstInit: function () {
            var t = e(this).treegrid("getTreeContainer");
            return void 0 === t.data("first_init") && t.data("first_init", void 0 === e.cookie(t.treegrid("getSetting", "saveStateName"))), t.data("first_init")
        }, saveState: function () {
            var t = e(this);
            if ("cookie" === t.treegrid("getSetting", "saveStateMethod")) {
                var n = e.cookie(t.treegrid("getSetting", "saveStateName")) || "", i = "" === n ? [] : n.split(","), r = t.treegrid("getNodeId");
                t.treegrid("isExpanded") ? -1 === e.inArray(r, i) && i.push(r) : t.treegrid("isCollapsed") && -1 !== e.inArray(r, i) && i.splice(e.inArray(r, i), 1), e.cookie(t.treegrid("getSetting", "saveStateName"), i.join(","))
            }
            return t
        }, restoreState: function () {
            var t = e(this);
            if ("cookie" === t.treegrid("getSetting", "saveStateMethod")) {
                var n = e.cookie(t.treegrid("getSetting", "saveStateName")).split(",");
                t.treegrid(-1 !== e.inArray(t.treegrid("getNodeId"), n) ? "expand" : "collapse")
            }
            return t
        }, getSetting: function (t) {
            return e(this).treegrid("getTreeContainer") ? e(this).treegrid("getTreeContainer").data("settings")[t] : null
        }, setSettings: function (t) {
            e(this).treegrid("getTreeContainer").data("settings", t)
        }, getTreeContainer: function () {
            return e(this).data("treegrid")
        }, setTreeContainer: function (t) {
            return e(this).data("treegrid", t)
        }, getRootNodes: function () {
            return e(this).treegrid("getSetting", "getRootNodes").apply(this, [e(this).treegrid("getTreeContainer")])
        }, getAllNodes: function () {
            return e(this).treegrid("getSetting", "getAllNodes").apply(this, [e(this).treegrid("getTreeContainer")])
        }, isNode: function () {
            return null !== e(this).treegrid("getNodeId")
        }, getNodeId: function () {
            return null === e(this).treegrid("getSetting", "getNodeId") ? null : e(this).treegrid("getSetting", "getNodeId").apply(this)
        }, getParentNodeId: function () {
            return e(this).treegrid("getSetting", "getParentNodeId").apply(this)
        }, getParentNode: function () {
            return null === e(this).treegrid("getParentNodeId") ? null : e(this).treegrid("getSetting", "getNodeById").apply(this, [e(this).treegrid("getParentNodeId"), e(this).treegrid("getTreeContainer")])
        }, getChildNodes: function () {
            return e(this).treegrid("getSetting", "getChildNodes").apply(this, [e(this).treegrid("getNodeId"), e(this).treegrid("getTreeContainer")])
        }, getDepth: function () {
            return null === e(this).treegrid("getParentNode") ? 0 : e(this).treegrid("getParentNode").treegrid("getDepth") + 1
        }, isRoot: function () {
            return 0 === e(this).treegrid("getDepth")
        }, isLeaf: function () {
            return 0 === e(this).treegrid("getChildNodes").length
        }, isLast: function () {
            if (e(this).treegrid("isNode")) {
                var t = e(this).treegrid("getParentNode");
                if (null === t) {
                    if (e(this).treegrid("getNodeId") === e(this).treegrid("getRootNodes").last().treegrid("getNodeId"))return !0
                } else if (e(this).treegrid("getNodeId") === t.treegrid("getChildNodes").last().treegrid("getNodeId"))return !0
            }
            return !1
        }, isFirst: function () {
            if (e(this).treegrid("isNode")) {
                var t = e(this).treegrid("getParentNode");
                if (null === t) {
                    if (e(this).treegrid("getNodeId") === e(this).treegrid("getRootNodes").first().treegrid("getNodeId"))return !0
                } else if (e(this).treegrid("getNodeId") === t.treegrid("getChildNodes").first().treegrid("getNodeId"))return !0
            }
            return !1
        }, isExpanded: function () {
            return e(this).hasClass("treegrid-expanded")
        }, isCollapsed: function () {
            return e(this).hasClass("treegrid-collapsed")
        }, isOneOfParentsCollapsed: function () {
            var t = e(this);
            return t.treegrid("isRoot") ? !1 : t.treegrid("getParentNode").treegrid("isCollapsed") ? !0 : t.treegrid("getParentNode").treegrid("isOneOfParentsCollapsed")
        }, expand: function () {
            return this.treegrid("isLeaf") || this.treegrid("isExpanded") ? this : (this.trigger("expand"), this.trigger("change"), this)
        }, expandAll: function () {
            var t = e(this);
            return t.treegrid("getRootNodes").treegrid("expandRecursive"), t
        }, expandRecursive: function () {
            return e(this).each(function () {
                var t = e(this);
                t.treegrid("expand"), t.treegrid("isLeaf") || t.treegrid("getChildNodes").treegrid("expandRecursive")
            })
        }, collapse: function () {
            return e(this).each(function () {
                var t = e(this);
                t.treegrid("isLeaf") || t.treegrid("isCollapsed") || (t.trigger("collapse"), t.trigger("change"))
            })
        }, collapseAll: function () {
            var t = e(this);
            return t.treegrid("getRootNodes").treegrid("collapseRecursive"), t
        }, collapseRecursive: function () {
            return e(this).each(function () {
                var t = e(this);
                t.treegrid("collapse"), t.treegrid("isLeaf") || t.treegrid("getChildNodes").treegrid("collapseRecursive")
            })
        }, toggle: function () {
            var t = e(this);
            return t.treegrid(t.treegrid("isExpanded") ? "collapse" : "expand"), t
        }, render: function () {
            return e(this).each(function () {
                var t = e(this);
                t.treegrid("isOneOfParentsCollapsed") ? t.hide() : t.show(), t.treegrid("isLeaf") || (t.treegrid("renderExpander"), t.treegrid("getChildNodes").treegrid("render"))
            })
        }, renderExpander: function () {
            return e(this).each(function () {
                var t = e(this), n = t.treegrid("getSetting", "getExpander").apply(this);
                n ? t.treegrid("isCollapsed") ? (n.removeClass(t.treegrid("getSetting", "expanderExpandedClass")), n.addClass(t.treegrid("getSetting", "expanderCollapsedClass"))) : (n.removeClass(t.treegrid("getSetting", "expanderCollapsedClass")), n.addClass(t.treegrid("getSetting", "expanderExpandedClass"))) : (t.treegrid("initExpander"), t.treegrid("renderExpander"))
            })
        }
    };
    e.fn.treegrid = function (n) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method with name " + n + " does not exists for jQuery.treegrid") : t.initTree.apply(this, arguments)
    }, e.fn.treegrid.defaults = {
        initialState: "expanded",
        saveState: !1,
        saveStateMethod: "cookie",
        saveStateName: "tree-grid-state",
        expanderTemplate: '<span class="treegrid-expander"></span>',
        indentTemplate: '<span class="treegrid-indent"></span>',
        expanderExpandedClass: "treegrid-expander-expanded",
        expanderCollapsedClass: "treegrid-expander-collapsed",
        treeColumn: 0,
        getExpander: function () {
            return e(this).find(".treegrid-expander")
        },
        getNodeId: function () {
            var t = /treegrid-([A-Za-z0-9_-]+)/;
            return t.test(e(this).attr("class")) ? t.exec(e(this).attr("class"))[1] : null
        },
        getParentNodeId: function () {
            var t = /treegrid-parent-([A-Za-z0-9_-]+)/;
            return t.test(e(this).attr("class")) ? t.exec(e(this).attr("class"))[1] : null
        },
        getNodeById: function (e, t) {
            var n = "treegrid-" + e;
            return t.find("tr." + n)
        },
        getChildNodes: function (e, t) {
            var n = "treegrid-parent-" + e;
            return t.find("tr." + n)
        },
        getTreeGridContainer: function () {
            return e(this).closest("table")
        },
        getRootNodes: function (t) {
            var n = e.grep(t.find("tr"), function (t) {
                var n = e(t).attr("class"), i = /treegrid-([A-Za-z0-9_-]+)/, r = /treegrid-parent-([A-Za-z0-9_-]+)/;
                return i.test(n) && !r.test(n)
            });
            return e(n)
        },
        getAllNodes: function (t) {
            var n = e.grep(t.find("tr"), function (t) {
                var n = e(t).attr("class"), i = /treegrid-([A-Za-z0-9_-]+)/;
                return i.test(n)
            });
            return e(n)
        },
        onCollapse: null,
        onExpand: null,
        onChange: null
    }
}(jQuery), $.extend($.fn.treegrid.defaults, {
    expanderExpandedClass: "glyphicon glyphicon-chevron-down",
    expanderCollapsedClass: "glyphicon glyphicon-chevron-right"
});