!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length, n = J.type(e);
        return "function" === n || J.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (J.isFunction(t))return J.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType)return J.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ae.test(t))return J.filter(t, e, n);
            t = J.filter(t, e)
        }
        return J.grep(e, function (e) {
            return Y.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
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
        Q.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), J.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = J.expando + a.uid++
    }

    function l(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xe.test(n) ? J.parseJSON(n) : n
            } catch (i) {
            }
            ye.set(e, t, n)
        } else n = void 0;
        return n
    }

    function u() {
        return !0
    }

    function c() {
        return !1
    }

    function p() {
        try {
            return Q.activeElement
        } catch (e) {
        }
    }

    function d(e, t) {
        return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function h(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function f(e) {
        var t = He.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++)ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, r, i, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (i in u)for (n = 0, r = u[i].length; r > n; n++)J.event.add(t, i, u[i][n])
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
        "input" === n && _e.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function x(t, n) {
        var r, i = J(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : J.css(i[0], "display");
        return i.detach(), o
    }

    function b(e) {
        var t = Q, n = Ie[e];
        return n || (n = x(e, t), "none" !== n && n || (Me = (Me || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Me[0].contentDocument, t.write(), t.close(), n = x(e, t), Me.detach()), Ie[e] = n), n
    }

    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || ze(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || J.contains(e.ownerDocument, e) || (s = J.style(e, t)), We.test(s) && Fe.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
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
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ve.length; i--;)if (t = Ve[i] + n, t in e)return t;
        return r
    }

    function _(e, t, n) {
        var r = Be.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function $(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += J.css(e, n + Ce[o], !0, i)), r ? ("content" === n && (s -= J.css(e, "padding" + Ce[o], !0, i)), "margin" !== n && (s -= J.css(e, "border" + Ce[o] + "Width", !0, i))) : (s += J.css(e, "padding" + Ce[o], !0, i), "padding" !== n && (s += J.css(e, "border" + Ce[o] + "Width", !0, i)));
        return s
    }

    function A(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = ze(e), s = "border-box" === J.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), We.test(i))return i;
            r = s && (K.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + $(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function E(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)r = e[s], r.style && (o[s] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Te(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Te(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : J.css(r, "display"))));
        for (s = 0; a > s; s++)r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function k(e, t, n, r, i) {
        return new k.prototype.init(e, t, n, r, i)
    }

    function S() {
        return setTimeout(function () {
            Ke = void 0
        }), Ke = J.now()
    }

    function D(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)n = Ce[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function j(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; s > o; o++)if (r = i[o].call(n, t, e))return r
    }

    function N(e, t, n) {
        var r, i, o, s, a, l, u, c, p = this, d = {}, h = e.style, f = e.nodeType && Te(e), g = ve.get(e, "fxshow");
        n.queue || (a = J._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, J.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = J.css(e, "display"), c = "none" === u ? ve.get(e, "olddisplay") || b(e.nodeName) : u, "inline" === c && "none" === J.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (r in t)if (i = t[r], Ze.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
                if ("show" !== i || !g || void 0 === g[r])continue;
                f = !0
            }
            d[r] = g && g[r] || J.style(e, r)
        } else u = void 0;
        if (J.isEmptyObject(d))"inline" === ("none" === u ? b(e.nodeName) : u) && (h.display = u); else {
            g ? "hidden"in g && (f = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !f), f ? J(e).show() : p.done(function () {
                J(e).hide()
            }), p.done(function () {
                var t;
                ve.remove(e, "fxshow");
                for (t in d)J.style(e, t, d[t])
            });
            for (r in d)s = j(f ? g[r] : 0, r, p), r in g || (g[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function q(e, t) {
        var n, r, i, o, s;
        for (n in e)if (r = J.camelCase(n), i = t[r], o = e[n], J.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = J.cssHooks[r], s && "expand"in s) {
            o = s.expand(o), delete e[r];
            for (n in o)n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function O(e, t, n) {
        var r, i, o = 0, s = tt.length, a = J.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i)return !1;
            for (var t = Ke || S(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, s = 0, l = u.tweens.length; l > s; s++)u.tweens[s].run(o);
            return a.notifyWith(e, [u, o, n]), 1 > o && l ? n : (a.resolveWith(e, [u]), !1)
        }, u = a.promise({
            elem: e,
            props: J.extend({}, t),
            opts: J.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ke || S(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = J.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? u.tweens.length : 0;
                if (i)return this;
                for (i = !0; r > n; n++)u.tweens[n].run(1);
                return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
            }
        }), c = u.props;
        for (q(c, u.opts.specialEasing); s > o; o++)if (r = tt[o].call(u, e, c, u.opts))return r;
        return J.map(c, j, u), J.isFunction(u.opts.start) && u.opts.start.call(e, u), J.fx.timer(J.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function L(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(he) || [];
            if (J.isFunction(n))for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function H(e, t, n, r) {
        function i(a) {
            var l;
            return o[a] = !0, J.each(e[a] || [], function (e, a) {
                var u = a(t, n, r);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }

        var o = {}, s = e === xt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function P(e, t) {
        var n, r, i = J.ajaxSettings.flatOptions || {};
        for (n in t)void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && J.extend(!0, e, r), e
    }

    function R(e, t, n) {
        for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)for (i in a)if (a[i] && a[i].test(r)) {
            l.unshift(i);
            break
        }
        if (l[0]in n)o = l[0]; else {
            for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function M(e, t, n, r) {
        var i, o, s, a, l, u = {}, c = e.dataTypes.slice();
        if (c[1])for (s in e.converters)u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s)for (i in u)if (a = i.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                s === !0 ? s = u[i] : u[i] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0)if (s && e["throws"])t = s(t); else try {
                t = s(t)
            } catch (p) {
                return {state: "parsererror", error: s ? p : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function I(e, t, n, r) {
        var i;
        if (J.isArray(t))J.each(t, function (t, i) {
            n || _t.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== J.type(t))r(e, t); else for (i in t)I(e + "[" + i + "]", t[i], n, r)
    }

    function F(e) {
        return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var W = [], z = W.slice, U = W.concat, B = W.push, Y = W.indexOf, X = {}, G = X.toString, V = X.hasOwnProperty, K = {}, Q = e.document, Z = "2.1.3", J = function (e, t) {
        return new J.fn.init(e, t)
    }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ne = /-([\da-z])/gi, re = function (e, t) {
        return t.toUpperCase()
    };
    J.fn = J.prototype = {
        jquery: Z, constructor: J, selector: "", length: 0, toArray: function () {
            return z.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
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
            return this.pushStack(z.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: B, sort: W.sort, splice: W.splice
    }, J.extend = J.fn.extend = function () {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || J.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)if (null != (e = arguments[a]))for (t in e)n = s[t], r = e[t], s !== r && (u && r && (J.isPlainObject(r) || (i = J.isArray(r))) ? (i ? (i = !1, o = n && J.isArray(n) ? n : []) : o = n && J.isPlainObject(n) ? n : {}, s[t] = J.extend(u, o, r)) : void 0 !== r && (s[t] = r));
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
            return "object" !== J.type(e) || e.nodeType || J.isWindow(e) ? !1 : e.constructor && !V.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? X[G.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t, n = eval;
            e = J.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
            return e.replace(te, "ms-").replace(ne, re)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, r) {
            var i, o = 0, s = e.length, a = n(e);
            if (r) {
                if (a)for (; s > o && (i = t.apply(e[o], r), i !== !1); o++); else for (o in e)if (i = t.apply(e[o], r), i === !1)break
            } else if (a)for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++); else for (o in e)if (i = t.call(e[o], o, e[o]), i === !1)break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(ee, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? J.merge(r, "string" == typeof e ? [e] : e) : B.call(r, e)), r
        }, inArray: function (e, t, n) {
            return null == t ? -1 : Y.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++)e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++)r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        }, map: function (e, t, r) {
            var i, o = 0, s = e.length, a = n(e), l = [];
            if (a)for (; s > o; o++)i = t(e[o], o, r), null != i && l.push(i); else for (o in e)i = t(e[o], o, r), null != i && l.push(i);
            return U.apply([], l)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), J.isFunction(e) ? (r = z.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(z.call(arguments)))
            }, i.guid = e.guid = e.guid || J.guid++, i) : void 0
        }, now: Date.now, support: K
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        X["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function (e) {
        function t(e, t, n, r) {
            var i, o, s, a, l, u, p, h, f, g;
            if ((t ? t.ownerDocument || t : I) !== N && j(t), t = t || N, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a)return n;
            if (!r && O) {
                if (11 !== a && (i = ye.exec(e)))if (s = i[1]) {
                    if (9 === a) {
                        if (o = t.getElementById(s), !o || !o.parentNode)return n;
                        if (o.id === s)return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s)return n.push(o), n
                } else {
                    if (i[2])return Z.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = i[3]) && w.getElementsByClassName)return Z.apply(n, t.getElementsByClassName(s)), n
                }
                if (w.qsa && (!L || !L.test(e))) {
                    if (h = p = M, f = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (u = $(e), (p = t.getAttribute("id")) ? h = p.replace(be, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = u.length; l--;)u[l] = h + d(u[l]);
                        f = xe.test(e) && c(t.parentNode) || t, g = u.join(",")
                    }
                    if (g)try {
                        return Z.apply(n, f.querySelectorAll(g)), n
                    } catch (m) {
                    } finally {
                        p || t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(le, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
            }

            var t = [];
            return e
        }

        function r(e) {
            return e[M] = !0, e
        }

        function i(e) {
            var t = N.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;)C.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r)return r;
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

        function u(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;)n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function p() {
        }

        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = W++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
            } : function (t, n, s) {
                var a, l, u = [F, o];
                if (s) {
                    for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, s))return !0
                } else for (; t = t[r];)if (1 === t.nodeType || i) {
                    if (l = t[M] || (t[M] = {}), (a = l[r]) && a[0] === F && a[1] === o)return u[2] = a[2];
                    if (l[r] = u, u[2] = e(t, n, s))return !0
                }
            }
        }

        function f(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), u && t.push(a));
            return s
        }

        function v(e, t, n, i, o, s) {
            return i && !i[M] && (i = v(i)), o && !o[M] && (o = v(o, s)), r(function (r, s, a, l) {
                var u, c, p, d = [], h = [], f = s.length, v = r || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? v : m(v, d, e, a, l), x = n ? o || (r ? e : f || i) ? [] : s : y;
                if (n && n(y, x, a, l), i)for (u = m(x, h), i(u, [], a, l), c = u.length; c--;)(p = u[c]) && (x[h[c]] = !(y[h[c]] = p));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = x.length; c--;)(p = x[c]) && u.push(y[c] = p);
                            o(null, x = [], u, l)
                        }
                        for (c = x.length; c--;)(p = x[c]) && (u = o ? ee(r, p) : d[c]) > -1 && (r[u] = !(s[u] = p))
                    }
                } else x = m(x === s ? x.splice(f, x.length) : x), o ? o(null, s, x, l) : Z.apply(s, x)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = C.relative[e[0].type], s = o || C.relative[" "], a = o ? 1 : 0, l = h(function (e) {
                return e === t
            }, s, !0), u = h(function (e) {
                return ee(t, e) > -1
            }, s, !0), c = [function (e, n, r) {
                var i = !o && (r || n !== k) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                return t = null, i
            }]; i > a; a++)if (n = C.relative[e[a].type])c = [h(f(c), n)]; else {
                if (n = C.filter[e[a].type].apply(null, e[a].matches), n[M]) {
                    for (r = ++a; i > r && !C.relative[e[r].type]; r++);
                    return v(a > 1 && f(c), a > 1 && d(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(le, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && d(e))
                }
                c.push(n)
            }
            return f(c)
        }

        function x(e, n) {
            var i = n.length > 0, o = e.length > 0, s = function (r, s, a, l, u) {
                var c, p, d, h = 0, f = "0", g = r && [], v = [], y = k, x = r || o && C.find.TAG("*", u), b = F += null == y ? 1 : Math.random() || .1, w = x.length;
                for (u && (k = s !== N && s); f !== w && null != (c = x[f]); f++) {
                    if (o && c) {
                        for (p = 0; d = e[p++];)if (d(c, s, a)) {
                            l.push(c);
                            break
                        }
                        u && (F = b)
                    }
                    i && ((c = !d && c) && h--, r && g.push(c))
                }
                if (h += f, i && f !== h) {
                    for (p = 0; d = n[p++];)d(g, v, s, a);
                    if (r) {
                        if (h > 0)for (; f--;)g[f] || v[f] || (v[f] = K.call(l));
                        v = m(v)
                    }
                    Z.apply(l, v), u && !r && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                }
                return u && (F = b, k = y), g
            };
            return i ? r(s) : s
        }

        var b, w, C, T, _, $, A, E, k, S, D, j, N, q, O, L, H, P, R, M = "sizzle" + 1 * new Date, I = e.document, F = 0, W = 0, z = n(), U = n(), B = n(), Y = function (e, t) {
            return e === t && (D = !0), 0
        }, X = 1 << 31, G = {}.hasOwnProperty, V = [], K = V.pop, Q = V.push, Z = V.push, J = V.slice, ee = function (e, t) {
            for (var n = 0, r = e.length; r > n; n++)if (e[n] === t)return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = re.replace("w", "w#"), oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), pe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(se), he = new RegExp("^" + ie + "$"), fe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + oe),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xe = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Ce = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Te = function () {
            j()
        };
        try {
            Z.apply(V = J.call(I.childNodes), I.childNodes), V[I.childNodes.length].nodeType
        } catch (_e) {
            Z = {
                apply: V.length ? function (e, t) {
                    Q.apply(e, J.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, _ = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, j = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : I;
            return r !== N && 9 === r.nodeType && r.documentElement ? (N = r, q = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), O = !_(r), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = i(function (e) {
                return q.appendChild(e).id = M, !r.getElementsByName || !r.getElementsByName(M).length
            }), w.getById ? (C.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && O) {
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
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, C.find.CLASS = w.getElementsByClassName && function (e, t) {
                return O ? t.getElementsByClassName(e) : void 0
            }, H = [], L = [], (w.qsa = ve.test(r.querySelectorAll)) && (i(function (e) {
                q.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + M + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || L.push(".#.+[+~]")
            }), i(function (e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
            })), (w.matchesSelector = ve.test(P = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), H.push("!=", se)
            }), L = L.length && new RegExp(L.join("|")), H = H.length && new RegExp(H.join("|")), t = ve.test(q.compareDocumentPosition), R = t || ve.test(q.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, Y = t ? function (e, t) {
                if (e === t)return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === I && R(I, e) ? -1 : t === r || t.ownerDocument === I && R(I, t) ? 1 : S ? ee(S, e) - ee(S, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t)return D = !0, 0;
                var n, i = 0, o = e.parentNode, a = t.parentNode, l = [e], u = [t];
                if (!o || !a)return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : S ? ee(S, e) - ee(S, t) : 0;
                if (o === a)return s(e, t);
                for (n = e; n = n.parentNode;)l.unshift(n);
                for (n = t; n = n.parentNode;)u.unshift(n);
                for (; l[i] === u[i];)i++;
                return i ? s(l[i], u[i]) : l[i] === I ? -1 : u[i] === I ? 1 : 0
            }, r) : N
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== N && j(e), n = n.replace(pe, "='$1']"), !(!w.matchesSelector || !O || H && H.test(n) || L && L.test(n)))try {
                var r = P.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
            } catch (i) {
            }
            return t(n, N, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== N && j(e), R(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== N && j(e);
            var n = C.attrHandle[t.toLowerCase()], r = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (D = !w.detectDuplicates, S = !w.sortStable && e.slice(0), e.sort(Y), D) {
                for (; t = e[i++];)t === e[i] && (r = n.push(i));
                for (; r--;)e.splice(n[r], 1)
            }
            return S = null, e
        }, T = t.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += T(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r++];)n += T(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
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
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = $(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
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
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, p, d, h, f, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];)if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)return !1;
                                    f = g = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                for (c = m[M] || (m[M] = {}), u = c[e] || [], h = u[0] === F && u[1], d = u[0] === F && u[2], p = h && m.childNodes[h]; p = ++h && p && p[g] || (d = h = 0) || f.pop();)if (1 === p.nodeType && ++d && p === t) {
                                    c[e] = [F, h, d];
                                    break
                                }
                            } else if (y && (u = (t[M] || (t[M] = {}))[e]) && u[0] === F)d = u[1]; else for (; (p = ++h && p && p[g] || (d = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++d || (y && ((p[M] || (p[M] = {}))[e] = [F, d]), p !== t)););
                            return d -= i, d === r || d % r === 0 && d / r >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;)r = ee(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = A(e.replace(le, "$1"));
                    return i[M] ? r(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function (e) {
                    return e = e.replace(we, Ce), function (t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Ce).toLowerCase(), function (t) {
                        var n;
                        do if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === q
                }, focus: function (e) {
                    return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                }, first: u(function () {
                    return [0]
                }), last: u(function (e, t) {
                    return [t - 1]
                }), eq: u(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: u(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: u(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: u(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                    return e
                }), gt: u(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[b] = a(b);
        for (b in{submit: !0, reset: !0})C.pseudos[b] = l(b);
        return p.prototype = C.filters = C.pseudos, C.setFilters = new p, $ = t.tokenize = function (e, n) {
            var r, i, o, s, a, l, u, c = U[e + " "];
            if (c)return n ? 0 : c.slice(0);
            for (a = e, l = [], u = C.preFilter; a;) {
                (!r || (i = ue.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(le, " ")
                }), a = a.slice(r.length));
                for (s in C.filter)!(i = fe[s].exec(a)) || u[s] && !(i = u[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r)break
            }
            return n ? a.length : a ? t.error(e) : U(e, l).slice(0)
        }, A = t.compile = function (e, t) {
            var n, r = [], i = [], o = B[e + " "];
            if (!o) {
                for (t || (t = $(e)), n = t.length; n--;)o = y(t[n]), o[M] ? r.push(o) : i.push(o);
                o = B(e, x(i, r)), o.selector = e
            }
            return o
        }, E = t.select = function (e, t, n, r) {
            var i, o, s, a, l, u = "function" == typeof e && e, p = !r && $(e = u.selector || e);
            if (n = n || [], 1 === p.length) {
                if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && C.relative[o[1].type]) {
                    if (t = (C.find.ID(s.matches[0].replace(we, Ce), t) || [])[0], !t)return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !C.relative[a = s.type]);)if ((l = C.find[a]) && (r = l(s.matches[0].replace(we, Ce), xe.test(o[0].type) && c(t.parentNode) || t))) {
                    if (o.splice(i, 1), e = r.length && d(o), !e)return Z.apply(n, r), n;
                    break
                }
            }
            return (u || A(e, p))(r, t, !O, n, xe.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = M.split("").sort(Y).join("") === M, w.detectDuplicates = !!D, j(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(N.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function (e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    J.find = ie, J.expr = ie.selectors, J.expr[":"] = J.expr.pseudos, J.unique = ie.uniqueSort, J.text = ie.getText, J.isXMLDoc = ie.isXML, J.contains = ie.contains;
    var oe = J.expr.match.needsContext, se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ae = /^.[^:#\[\.,]*$/;
    J.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? J.find.matchesSelector(r, e) ? [r] : [] : J.find.matches(e, J.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, J.fn.extend({
        find: function (e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e)return this.pushStack(J(e).filter(function () {
                for (t = 0; n > t; t++)if (J.contains(i[t], this))return !0
            }));
            for (t = 0; n > t; t++)J.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? J.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        }, filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }, is: function (e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? J(e) : e || [], !1).length
        }
    });
    var le, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ce = J.fn.init = function (e, t) {
        var n, r;
        if (!e)return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ue.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), se.test(n[1]) && J.isPlainObject(t))for (n in t)J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return r = Q.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Q, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
    };
    ce.prototype = J.fn, le = J(Q);
    var pe = /^(?:parents|prev(?:Until|All))/, de = {children: !0, contents: !0, next: !0, prev: !0};
    J.extend({
        dir: function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                if (i && J(e).is(n))break;
                r.push(e)
            }
            return r
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
            for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? J.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? Y.call(J(e), this[0]) : Y.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), J.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return J.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return J.dir(e, "parentNode", n)
        }, next: function (e) {
            return i(e, "nextSibling")
        }, prev: function (e) {
            return i(e, "previousSibling")
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
        J.fn[e] = function (n, r) {
            var i = J.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = J.filter(r, i)), this.length > 1 && (de[e] || J.unique(i), pe.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var he = /\S+/g, fe = {};
    J.Callbacks = function (e) {
        e = "string" == typeof e ? fe[e] || o(e) : J.extend({}, e);
        var t, n, r, i, s, a, l = [], u = !e.once && [], c = function (o) {
            for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = l.length, r = !0; l && s > a; a++)if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break
            }
            r = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : p.disable())
        }, p = {
            add: function () {
                if (l) {
                    var n = l.length;
                    !function o(t) {
                        J.each(t, function (t, n) {
                            var r = J.type(n);
                            "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    }(arguments), r ? s = l.length : t && (i = n, c(t))
                }
                return this
            }, remove: function () {
                return l && J.each(arguments, function (e, t) {
                    for (var n; (n = J.inArray(t, l, n)) > -1;)l.splice(n, 1), r && (s >= n && s--, a >= n && a--)
                }), this
            }, has: function (e) {
                return e ? J.inArray(e, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], s = 0, this
            }, disable: function () {
                return l = u = t = void 0, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return u = void 0, t || p.disable(), this
            }, locked: function () {
                return !u
            }, fireWith: function (e, t) {
                return !l || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : c(t)), this
            }, fire: function () {
                return p.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return p
    }, J.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", J.Callbacks("once memory"), "resolved"], ["reject", "fail", J.Callbacks("once memory"), "rejected"], ["notify", "progress", J.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return J.Deferred(function (n) {
                        J.each(t, function (t, o) {
                            var s = J.isFunction(e[t]) && e[t];
                            i[o[1]](function () {
                                var e = s && s.apply(this, arguments);
                                e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? J.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, J.each(t, function (e, o) {
                var s = o[2], a = o[3];
                r[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = z.call(arguments), s = o.length, a = 1 !== s || e && J.isFunction(e.promise) ? s : 0, l = 1 === a ? e : J.Deferred(), u = function (e, n, r) {
                return function (i) {
                    n[e] = this, r[e] = arguments.length > 1 ? z.call(arguments) : i, r === t ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
                }
            };
            if (s > 1)for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++)o[i] && J.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --a;
            return a || l.resolveWith(r, o), l.promise()
        }
    });
    var ge;
    J.fn.ready = function (e) {
        return J.ready.promise().done(e), this
    }, J.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? J.readyWait++ : J.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, e !== !0 && --J.readyWait > 0 || (ge.resolveWith(Q, [J]), J.fn.triggerHandler && (J(Q).triggerHandler("ready"), J(Q).off("ready"))))
        }
    }), J.ready.promise = function (t) {
        return ge || (ge = J.Deferred(), "complete" === Q.readyState ? setTimeout(J.ready) : (Q.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
    }, J.ready.promise();
    var me = J.access = function (e, t, n, r, i, o, s) {
        var a = 0, l = e.length, u = null == n;
        if ("object" === J.type(n)) {
            i = !0;
            for (a in n)J.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, J.isFunction(r) || (s = !0), u && (s ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
                return u.call(J(e), n)
            })), t))for (; l > a; a++)t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
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
                } catch (r) {
                    t[this.expando] = n, J.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        }, set: function (e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t)o[t] = n; else if (J.isEmptyObject(o))J.extend(this.cache[i], t); else for (r in t)o[r] = t[r];
            return o
        }, get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        }, access: function (e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, J.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r, i, o = this.key(e), s = this.cache[o];
            if (void 0 === t)this.cache[o] = {}; else {
                J.isArray(t) ? r = t.concat(t.map(J.camelCase)) : (i = J.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(he) || [])), n = r.length;
                for (; n--;)delete s[r[n]]
            }
        }, hasData: function (e) {
            return !J.isEmptyObject(this.cache[e[this.expando]] || {})
        }, discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a, ye = new a, xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, be = /([A-Z])/g;
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
        data: function (e, t) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;)s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = J.camelCase(r.slice(5)), l(o, r, i[r])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                ye.set(this, e)
            }) : me(this, function (t) {
                var n, r = J.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ye.get(o, e), void 0 !== n)return n;
                    if (n = ye.get(o, r), void 0 !== n)return n;
                    if (n = l(o, r, void 0), void 0 !== n)return n
                } else this.each(function () {
                    var n = ye.get(this, r);
                    ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                ye.remove(this, e)
            })
        }
    }), J.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || J.isArray(n) ? r = ve.access(e, t, J.makeArray(n)) : r.push(n)), r || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = J.queue(e, t), r = n.length, i = n.shift(), o = J._queueHooks(e, t), s = function () {
                J.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
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
            var n, r = 1, i = J.Deferred(), o = this, s = this.length, a = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)n = ve.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ce = ["Top", "Right", "Bottom", "Left"], Te = function (e, t) {
        return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
    }, _e = /^(?:checkbox|radio)$/i;
    !function () {
        var e = Q.createDocumentFragment(), t = e.appendChild(Q.createElement("div")), n = Q.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), K.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var $e = "undefined";
    K.focusinBubbles = "onfocusin"in e;
    var Ae = /^key/, Ee = /^(?:mouse|pointer|contextmenu)|click/, ke = /^(?:focusinfocus|focusoutblur)$/, Se = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, s, a, l, u, c, p, d, h, f, g, m = ve.get(e);
            if (m)for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = J.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                return typeof J !== $e && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(he) || [""], u = t.length; u--;)a = Se.exec(t[u]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h && (p = J.event.special[h] || {}, h = (i ? p.delegateType : p.bindType) || h, p = J.event.special[h] || {}, c = J.extend({
                type: h,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && J.expr.match.needsContext.test(i),
                namespace: f.join(".")
            }, o), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(e, r, f, s) !== !1 || e.addEventListener && e.addEventListener(h, s, !1)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), J.event.global[h] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, l, u, c, p, d, h, f, g, m = ve.hasData(e) && ve.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(he) || [""], u = t.length; u--;)if (a = Se.exec(t[u]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h) {
                    for (p = J.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, d = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;)c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
                    s && !d.length && (p.teardown && p.teardown.call(e, f, m.handle) !== !1 || J.removeEvent(e, h, m.handle), delete l[h])
                } else for (h in l)J.event.remove(e, h + t[u], n, r, !0);
                J.isEmptyObject(l) && (delete m.handle, ve.remove(e, "events"))
            }
        },
        trigger: function (t, n, r, i) {
            var o, s, a, l, u, c, p, d = [r || Q], h = V.call(t, "type") ? t.type : t, f = V.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !ke.test(h + J.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), u = h.indexOf(":") < 0 && "on" + h, t = t[J.expando] ? t : new J.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : J.makeArray(n, [t]), p = J.event.special[h] || {}, i || !p.trigger || p.trigger.apply(r, n) !== !1)) {
                if (!i && !p.noBubble && !J.isWindow(r)) {
                    for (l = p.delegateType || h, ke.test(l + h) || (s = s.parentNode); s; s = s.parentNode)d.push(s), a = s;
                    a === (r.ownerDocument || Q) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = d[o++]) && !t.isPropagationStopped();)t.type = o > 1 ? l : p.bindType || h, c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && J.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = h, i || t.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !J.acceptData(r) || u && J.isFunction(r[h]) && !J.isWindow(r) && (a = r[u], a && (r[u] = null), J.event.triggered = h, r[h](), J.event.triggered = void 0, a && (r[u] = a)), t.result
            }
        },
        dispatch: function (e) {
            e = J.event.fix(e);
            var t, n, r, i, o, s = [], a = z.call(arguments), l = (ve.get(this, "events") || {})[e.type] || [], u = J.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (s = J.event.handlers.call(this, e, l), t = 0; (i = s[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((J.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))for (; l !== this; l = l.parentNode || this)if (l.disabled !== !0 || "click" !== e.type) {
                for (r = [], n = 0; a > n; n++)o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? J(i, this).index(l) >= 0 : J.find(i, this, null, [l]).length), r[i] && r.push(o);
                r.length && s.push({elem: l, handlers: r})
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
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[J.expando])return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Ee.test(i) ? this.mouseHooks : Ae.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new J.Event(o), t = r.length; t--;)n = r[t], e[n] = o[n];
            return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
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
        simulate: function (e, t, n, r) {
            var i = J.extend(new J.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? J.event.trigger(i, null, t) : J.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, J.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, J.Event = function (e, t) {
        return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? u : c) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(e, t)
    }, J.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = u, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        J.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !J.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), K.focusinBubbles || J.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            J.event.simulate(t, e.target, J.event.fix(e), !0)
        };
        J.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = ve.access(r, t);
                i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = ve.access(r, t) - 1;
                i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
            }
        }
    }), J.fn.extend({
        on: function (e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e)this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1)r = c; else if (!r)return this;
            return 1 === i && (o = r, r = function (e) {
                return J().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = J.guid++)), this.each(function () {
                J.event.add(this, e, r, n, t)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)return r = e.handleObj, J(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function () {
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
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, je = /<([\w:]+)/, Ne = /<|&#?\w+;/, qe = /<(?:script|style|link)/i, Oe = /checked\s*(?:[^=]|=\s*.checked.)/i, Le = /^$|\/(?:java|ecma)script/i, He = /^true\/(.*)/, Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Re = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, J.extend({
        clone: function (e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), l = J.contains(e.ownerDocument, e);
            if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++)y(o[r], s[r]);
            if (t)if (n)for (o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++)m(o[r], s[r]); else m(e, a);
            return s = v(a, "script"), s.length > 0 && g(s, !l && v(e, "script")), a
        }, buildFragment: function (e, t, n, r) {
            for (var i, o, s, a, l, u, c = t.createDocumentFragment(), p = [], d = 0, h = e.length; h > d; d++)if (i = e[d], i || 0 === i)if ("object" === J.type(i))J.merge(p, i.nodeType ? [i] : i); else if (Ne.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (je.exec(i) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, o.innerHTML = a[1] + i.replace(De, "<$1></$2>") + a[2], u = a[0]; u--;)o = o.lastChild;
                J.merge(p, o.childNodes), o = c.firstChild, o.textContent = ""
            } else p.push(t.createTextNode(i));
            for (c.textContent = "", d = 0; i = p[d++];)if ((!r || -1 === J.inArray(i, r)) && (l = J.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), l && g(o), n))for (u = 0; i = o[u++];)Le.test(i.type || "") && n.push(i);
            return c
        }, cleanData: function (e) {
            for (var t, n, r, i, o = J.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (J.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
                    if (t.events)for (r in t.events)o[r] ? J.event.remove(n, r) : J.removeEvent(n, r, t.handle);
                    ve.cache[i] && delete ve.cache[i]
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
                    var t = d(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
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
            for (var n, r = e ? J.filter(e, this) : this, i = 0; null != (n = r[i]); i++)t || 1 !== n.nodeType || J.cleanData(v(n)), n.parentNode && (t && J.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
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
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !Re[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(De, "<$1></$2>");
                    try {
                        for (; r > n; n++)t = this[n] || {}, 1 === t.nodeType && (J.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {
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
            e = U.apply([], e);
            var n, r, i, o, s, a, l = 0, u = this.length, c = this, p = u - 1, d = e[0], g = J.isFunction(d);
            if (g || u > 1 && "string" == typeof d && !K.checkClone && Oe.test(d))return this.each(function (n) {
                var r = c.eq(n);
                g && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
            });
            if (u && (n = J.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = J.map(v(n, "script"), h), o = i.length; u > l; l++)s = n, l !== p && (s = J.clone(s, !0, !0), o && J.merge(i, v(s, "script"))), t.call(this[l], s, l);
                if (o)for (a = i[i.length - 1].ownerDocument, J.map(i, f), l = 0; o > l; l++)s = i[l], Le.test(s.type || "") && !ve.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(Pe, "")))
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
            for (var n, r = [], i = J(e), o = i.length - 1, s = 0; o >= s; s++)n = s === o ? this : this.clone(!0), J(i[s])[t](n), B.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Me, Ie = {}, Fe = /^margin/, We = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), ze = function (t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    };
    !function () {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }

        var n, r, i = Q.documentElement, o = Q.createElement("div"), s = Q.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && J.extend(K, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return null == r && t(), r
            }, reliableMarginRight: function () {
                var t, n = s.appendChild(Q.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), s.removeChild(n), t
            }
        }))
    }(), J.swap = function (e, t, n, r) {
        var i, o, s = {};
        for (o in t)s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)e.style[o] = s[o];
        return i
    };
    var Ue = /^(none|table(?!-c[ea]).+)/, Be = new RegExp("^(" + we + ")(.*)$", "i"), Ye = new RegExp("^([+-])=(" + we + ")", "i"), Xe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ge = {letterSpacing: "0", fontWeight: "400"}, Ve = ["Webkit", "O", "Moz", "ms"];
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
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = J.camelCase(t), l = e.style;
                return t = J.cssProps[a] || (J.cssProps[a] = T(l, a)), s = J.cssHooks[t] || J.cssHooks[a], void 0 === n ? s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t] : (o = typeof n, "string" === o && (i = Ye.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(J.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || J.cssNumber[a] || (n += "px"), K.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set"in s && void 0 === (n = s.set(e, n, r)) || (l[t] = n)), void 0)
            }
        },
        css: function (e, t, n, r) {
            var i, o, s, a = J.camelCase(t);
            return t = J.cssProps[a] || (J.cssProps[a] = T(e.style, a)), s = J.cssHooks[t] || J.cssHooks[a], s && "get"in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), n === !0 || J.isNumeric(o) ? o || 0 : i) : i
        }
    }), J.each(["height", "width"], function (e, t) {
        J.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? Ue.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, Xe, function () {
                    return A(e, t, r)
                }) : A(e, t, r) : void 0
            }, set: function (e, n, r) {
                var i = r && ze(e);
                return _(e, n, r ? $(e, t, r, "border-box" === J.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), J.cssHooks.marginRight = C(K.reliableMarginRight, function (e, t) {
        return t ? J.swap(e, {display: "inline-block"}, w, [e, "marginRight"]) : void 0
    }), J.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        J.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[e + Ce[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Fe.test(e) || (J.cssHooks[e + t].set = _)
    }), J.fn.extend({
        css: function (e, t) {
            return me(this, function (e, t, n) {
                var r, i, o = {}, s = 0;
                if (J.isArray(t)) {
                    for (r = ze(e), i = t.length; i > s; s++)o[t[s]] = J.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? J.style(e, t, n) : J.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return E(this, !0)
        }, hide: function () {
            return E(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Te(this) ? J(this).show() : J(this).hide()
            })
        }
    }), J.Tween = k, k.prototype = {
        constructor: k, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (J.cssNumber[n] ? "" : "px")
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
    var Ke, Qe, Ze = /^(?:toggle|show|hide)$/, Je = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"), et = /queueHooks$/, tt = [N], nt = {
        "*": [function (e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = Je.exec(t), o = i && i[3] || (J.cssNumber[e] ? "" : "px"), s = (J.cssNumber[e] || "px" !== o && +r) && Je.exec(J.css(n.elem, e)), a = 1, l = 20;
            if (s && s[3] !== o) {
                o = o || s[3], i = i || [], s = +r || 1;
                do a = a || ".5", s /= a, J.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --l)
            }
            return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
        }]
    };
    J.Animation = J.extend(O, {
        tweener: function (e, t) {
            J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++)n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? tt.unshift(e) : tt.push(e)
        }
    }), J.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? J.extend({}, e) : {
            complete: n || !n && t || J.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !J.isFunction(t) && t
        };
        return r.duration = J.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in J.fx.speeds ? J.fx.speeds[r.duration] : J.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            J.isFunction(r.old) && r.old.call(this), r.queue && J.dequeue(this, r.queue)
        }, r
    }, J.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Te).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = J.isEmptyObject(e), o = J.speed(t, n, r), s = function () {
                var t = O(this, J.extend({}, e), o);
                (i || ve.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = J.timers, s = ve.get(this);
                if (i)s[i] && s[i].stop && r(s[i]); else for (i in s)s[i] && s[i].stop && et.test(i) && r(s[i]);
                for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                (t || !n) && J.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ve.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = J.timers, s = r ? r.length : 0;
                for (n.finish = !0, J.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; s > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), J.each(["toggle", "show", "hide"], function (e, t) {
        var n = J.fn[t];
        J.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(D(t, !0), e, r, i)
        }
    }), J.each({
        slideDown: D("show"),
        slideUp: D("hide"),
        slideToggle: D("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        J.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), J.timers = [], J.fx.tick = function () {
        var e, t = 0, n = J.timers;
        for (Ke = J.now(); t < n.length; t++)e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || J.fx.stop(), Ke = void 0
    }, J.fx.timer = function (e) {
        J.timers.push(e), e() ? J.fx.start() : J.timers.pop()
    }, J.fx.interval = 13, J.fx.start = function () {
        Qe || (Qe = setInterval(J.fx.tick, J.fx.interval))
    }, J.fx.stop = function () {
        clearInterval(Qe), Qe = null
    }, J.fx.speeds = {slow: 600, fast: 200, _default: 400}, J.fn.delay = function (e, t) {
        return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(r)
            }
        })
    }, function () {
        var e = Q.createElement("input"), t = Q.createElement("select"), n = t.appendChild(Q.createElement("option"));
        e.type = "checkbox", K.checkOn = "" !== e.value, K.optSelected = n.selected, t.disabled = !0, K.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", K.radioValue = "t" === e.value
    }();
    var rt, it, ot = J.expr.attrHandle;
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
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)return typeof e.getAttribute === $e ? J.prop(e, t, n) : (1 === o && J.isXMLDoc(e) || (t = t.toLowerCase(), r = J.attrHooks[t] || (J.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = J.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void J.removeAttr(e, t))
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(he);
            if (o && 1 === e.nodeType)for (; n = o[i++];)r = J.propFix[n] || n, J.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!K.radioValue && "radio" === t && J.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), it = {
        set: function (e, t, n) {
            return t === !1 ? J.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ot[t] || J.find.attr;
        ot[t] = function (e, t, r) {
            var i, o;
            return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
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
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)return o = 1 !== s || !J.isXMLDoc(e), o && (t = J.propFix[t] || t, i = J.propHooks[t]), void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), K.optSelected || (J.propHooks.selected = {
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
            var t, n, r, i, o, s, a = "string" == typeof e && e, l = 0, u = this.length;
            if (J.isFunction(e))return this.each(function (t) {
                J(this).addClass(e.call(this, t, this.className))
            });
            if (a)for (t = (e || "").match(he) || []; u > l; l++)if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                for (o = 0; i = t[o++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                s = J.trim(r), n.className !== s && (n.className = s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e, l = 0, u = this.length;
            if (J.isFunction(e))return this.each(function (t) {
                J(this).removeClass(e.call(this, t, this.className))
            });
            if (a)for (t = (e || "").match(he) || []; u > l; l++)if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                for (o = 0; i = t[o++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " ");
                s = e ? J.trim(r) : "", n.className !== s && (n.className = s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(J.isFunction(e) ? function (n) {
                J(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)for (var t, r = 0, i = J(this), o = e.match(he) || []; t = o[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else(n === $e || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0)return !0;
            return !1
        }
    });
    var lt = /\r/g;
    J.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)return r = J.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, J(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : J.isArray(i) && (i = J.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i)return t = J.valHooks[i.type] || J.valHooks[i.nodeName.toLowerCase()], t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)
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
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, l = 0 > i ? a : o ? i : 0; a > l; l++)if (n = r[l], !(!n.selected && l !== i || (K.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                        if (t = J(n).val(), o)return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = J.makeArray(t), s = i.length; s--;)r = i[s], (r.selected = J.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), J.each(["radio", "checkbox"], function () {
        J.valHooks[this] = {
            set: function (e, t) {
                return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
            }
        }, K.checkOn || (J.valHooks[this].get = function (e) {
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
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ut = J.now(), ct = /\?/;
    J.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, J.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e)return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + e), t
    };
    var pt = /#.*$/, dt = /([?&])_=[^&]*/, ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, gt = /^(?:GET|HEAD)$/, mt = /^\/\//, vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, yt = {}, xt = {}, bt = "*/".concat("*"), wt = e.location.href, Ct = vt.exec(wt.toLowerCase()) || [];
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
                "*": bt,
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
            return t ? P(P(e, J.ajaxSettings), t) : P(J.ajaxSettings, e)
        },
        ajaxPrefilter: L(yt),
        ajaxTransport: L(xt),
        ajax: function (e, t) {
            function n(e, t, n, s) {
                var l, c, v, y, b, C = t;
                2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = R(p, w, n)), y = M(p, y, w, l), l ? (p.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (J.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (J.etag[i] = b)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, c = y.data, v = y.error, l = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", l ? f.resolveWith(d, [c, C, w]) : f.rejectWith(d, [w, C, v]), w.statusCode(m), m = void 0, u && h.trigger(l ? "ajaxSuccess" : "ajaxError", [w, p, l ? c : v]), g.fireWith(d, [w, C]), u && (h.trigger("ajaxComplete", [w, p]), --J.active || J.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, s, a, l, u, c, p = J.ajaxSetup({}, t), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? J(d) : J.event, f = J.Deferred(), g = J.Callbacks("once memory"), m = p.statusCode || {}, v = {}, y = {}, x = 0, b = "canceled", w = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === x) {
                        if (!s)for (s = {}; t = ht.exec(o);)s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === x ? o : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return x || (e = y[n] = y[n] || e, v[e] = t), this
                },
                overrideMimeType: function (e) {
                    return x || (p.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > x)for (t in e)m[t] = [m[t], e[t]]; else w.always(e[w.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || b;
                    return r && r.abort(t), n(0, t), this
                }
            };
            if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || wt) + "").replace(pt, "").replace(mt, Ct[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = J.trim(p.dataType || "*").toLowerCase().match(he) || [""], null == p.crossDomain && (l = vt.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === Ct[1] && l[2] === Ct[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Ct[3] || ("http:" === Ct[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = J.param(p.data, p.traditional)), H(yt, p, t, w), 2 === x)return w;
            u = J.event && p.global, u && 0 === J.active++ && J.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !gt.test(p.type), i = p.url, p.hasContent || (p.data && (i = p.url += (ct.test(i) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = dt.test(i) ? i.replace(dt, "$1_=" + ut++) : i + (ct.test(i) ? "&" : "?") + "_=" + ut++)), p.ifModified && (J.lastModified[i] && w.setRequestHeader("If-Modified-Since", J.lastModified[i]), J.etag[i] && w.setRequestHeader("If-None-Match", J.etag[i])), (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : p.accepts["*"]);
            for (c in p.headers)w.setRequestHeader(c, p.headers[c]);
            if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === x))return w.abort();
            b = "abort";
            for (c in{success: 1, error: 1, complete: 1})w[c](p[c]);
            if (r = H(xt, p, t, w)) {
                w.readyState = 1, u && h.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (a = setTimeout(function () {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, r.send(v, n)
                } catch (C) {
                    if (!(2 > x))throw C;
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
        J[t] = function (e, n, r, i) {
            return J.isFunction(n) && (i = i || r, r = n, n = void 0), J.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
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
    var Tt = /%20/g, _t = /\[\]$/, $t = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i, Et = /^(?:input|select|textarea|keygen)/i;
    J.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = J.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e))J.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e)I(n, e[n], t, i);
        return r.join("&").replace(Tt, "+")
    }, J.fn.extend({
        serialize: function () {
            return J.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = J.prop(this, "elements");
                return e ? J.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !J(this).is(":disabled") && Et.test(this.nodeName) && !At.test(e) && (this.checked || !_e.test(e))
            }).map(function (e, t) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function (e) {
                    return {name: t.name, value: e.replace($t, "\r\n")}
                }) : {name: t.name, value: n.replace($t, "\r\n")}
            }).get()
        }
    }), J.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var kt = 0, St = {}, Dt = {0: 200, 1223: 204}, jt = J.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in St)St[e]()
    }), K.cors = !!jt && "withCredentials"in jt, K.ajax = jt = !!jt, J.ajaxTransport(function (e) {
        var t;
        return K.cors || jt && !e.crossDomain ? {
            send: function (n, r) {
                var i, o = e.xhr(), s = ++kt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (i in e.xhrFields)o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n)o.setRequestHeader(i, n[i]);
                t = function (e) {
                    return function () {
                        t && (delete St[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Dt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = St[s] = t("abort");
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
                send: function (r, i) {
                    t = J("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), Q.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Nt = [], qt = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Nt.pop() || J.expando + "_" + ut++;
            return this[e] = !0, e
        }
    }), J.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (qt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(qt, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return s || J.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            s = arguments
        }, r.always(function () {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Nt.push(i)), s && J.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), J.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Q;
        var r = se.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = J.buildFragment([e], t, i), i && i.length && J(i).remove(), J.merge([], r.childNodes))
    };
    var Ot = J.fn.load;
    J.fn.load = function (e, t, n) {
        if ("string" != typeof e && Ot)return Ot.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a >= 0 && (r = J.trim(e.slice(a)), e = e.slice(0, a)), J.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && J.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(r ? J("<div>").append(J.parseHTML(e)).find(r) : e)
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
            var r, i, o, s, a, l, u, c = J.css(e, "position"), p = J(e), d = {};
            "static" === c && (e.style.position = "relative"), a = p.offset(), o = J.css(e, "top"), l = J.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), J.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using"in t ? t.using.call(e, d) : p.css(d)
        }
    }, J.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                J.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
            if (o)return t = o.documentElement, J.contains(t, r) ? (typeof r.getBoundingClientRect !== $e && (i = r.getBoundingClientRect()), n = F(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0, left: 0};
                return "fixed" === J.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), J.nodeName(e[0], "html") || (r = e.offset()), r.top += J.css(e[0], "borderTopWidth", !0), r.left += J.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - J.css(n, "marginTop", !0),
                    left: t.left - r.left - J.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Lt; e && !J.nodeName(e, "html") && "static" === J.css(e, "position");)e = e.offsetParent;
                return e || Lt
            })
        }
    }), J.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
        var r = "pageYOffset" === n;
        J.fn[t] = function (i) {
            return me(this, function (t, i, o) {
                var s = F(t);
                return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), J.each(["top", "left"], function (e, t) {
        J.cssHooks[t] = C(K.pixelPosition, function (e, n) {
            return n ? (n = w(e, t), We.test(n) ? J(e).position()[t] + "px" : n) : void 0
        })
    }), J.each({Height: "height", Width: "width"}, function (e, t) {
        J.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            J.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r), s = n || (r === !0 || i === !0 ? "margin" : "border");
                return me(this, function (t, n, r) {
                    var i;
                    return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? J.css(t, n, s) : J.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), J.fn.size = function () {
        return this.length
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return J
    });
    var Ht = e.jQuery, Pt = e.$;
    return J.noConflict = function (t) {
        return e.$ === J && (e.$ = Pt), t && e.jQuery === J && (e.jQuery = Ht), J
    }, typeof t === $e && (e.jQuery = e.$ = J), J
}), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
    var t = function () {
        if (e && e.fn && e.fn.select2 && e.fn.select2.amd)var t = e.fn.select2.amd;
        var t;
        return function () {
            if (!t || !t.requirejs) {
                t ? n = t : t = {};
                var e, n, r;
                !function (t) {
                    function i(e, t) {
                        return b.call(e, t)
                    }

                    function o(e, t) {
                        var n, r, i, o, s, a, l, u, c, p, d, h = t && t.split("/"), f = y.map, g = f && f["*"] || {};
                        if (e && "." === e.charAt(0))if (t) {
                            for (h = h.slice(0, h.length - 1), e = e.split("/"), s = e.length - 1, y.nodeIdCompat && C.test(e[s]) && (e[s] = e[s].replace(C, "")), e = h.concat(e), c = 0; c < e.length; c += 1)if (d = e[c], "." === d)e.splice(c, 1), c -= 1; else if (".." === d) {
                                if (1 === c && (".." === e[2] || ".." === e[0]))break;
                                c > 0 && (e.splice(c - 1, 2), c -= 2)
                            }
                            e = e.join("/")
                        } else 0 === e.indexOf("./") && (e = e.substring(2));
                        if ((h || g) && f) {
                            for (n = e.split("/"), c = n.length; c > 0; c -= 1) {
                                if (r = n.slice(0, c).join("/"), h)for (p = h.length; p > 0; p -= 1)if (i = f[h.slice(0, p).join("/")], i && (i = i[r])) {
                                    o = i, a = c;
                                    break
                                }
                                if (o)break;
                                !l && g && g[r] && (l = g[r], u = c)
                            }
                            !o && l && (o = l, a = u), o && (n.splice(0, a, o), e = n.join("/"))
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

                    function u(e) {
                        if (i(v, e)) {
                            var n = v[e];
                            delete v[e], x[e] = !0, d.apply(t, n)
                        }
                        if (!i(m, e) && !i(x, e))throw new Error("No " + e);
                        return m[e]
                    }

                    function c(e) {
                        var t, n = e ? e.indexOf("!") : -1;
                        return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                    }

                    function p(e) {
                        return function () {
                            return y && y.config && y.config[e] || {}
                        }
                    }

                    var d, h, f, g, m = {}, v = {}, y = {}, x = {}, b = Object.prototype.hasOwnProperty, w = [].slice, C = /\.js$/;
                    f = function (e, t) {
                        var n, r = c(e), i = r[0];
                        return e = r[1], i && (i = o(i, t), n = u(i)), i ? e = n && n.normalize ? n.normalize(e, a(t)) : o(e, t) : (e = o(e, t), r = c(e), i = r[0], e = r[1], i && (n = u(i))), {
                            f: i ? i + "!" + e : e,
                            n: e,
                            pr: i,
                            p: n
                        }
                    }, g = {
                        require: function (e) {
                            return s(e)
                        }, exports: function (e) {
                            var t = m[e];
                            return "undefined" != typeof t ? t : m[e] = {}
                        }, module: function (e) {
                            return {id: e, uri: "", exports: m[e], config: p(e)}
                        }
                    }, d = function (e, n, r, o) {
                        var a, c, p, d, h, y, b = [], w = typeof r;
                        if (o = o || e, "undefined" === w || "function" === w) {
                            for (n = !n.length && r.length ? ["require", "exports", "module"] : n, h = 0; h < n.length; h += 1)if (d = f(n[h], o), c = d.f, "require" === c)b[h] = g.require(e); else if ("exports" === c)b[h] = g.exports(e), y = !0; else if ("module" === c)a = b[h] = g.module(e); else if (i(m, c) || i(v, c) || i(x, c))b[h] = u(c); else {
                                if (!d.p)throw new Error(e + " missing " + c);
                                d.p.load(d.n, s(o, !0), l(c), {}), b[h] = m[c]
                            }
                            p = r ? r.apply(m[e], b) : void 0, e && (a && a.exports !== t && a.exports !== m[e] ? m[e] = a.exports : p === t && y || (m[e] = p))
                        } else e && (m[e] = r)
                    }, e = n = h = function (e, n, r, i, o) {
                        if ("string" == typeof e)return g[e] ? g[e](n) : u(f(e, n).f);
                        if (!e.splice) {
                            if (y = e, y.deps && h(y.deps, y.callback), !n)return;
                            n.splice ? (e = n, n = r, r = null) : e = t
                        }
                        return n = n || function () {
                        }, "function" == typeof r && (r = i, i = o), i ? d(t, e, n, r) : setTimeout(function () {
                            d(t, e, n, r)
                        }, 4), h
                    }, h.config = function (e) {
                        return h(e)
                    }, e._defined = m, r = function (e, t, n) {
                        t.splice || (n = t, t = []), i(m, e) || i(v, e) || (v[e] = [e, t, n])
                    }, r.amd = {jQuery: !0}
                }(), t.requirejs = e, t.require = n, t.define = r
            }
        }(), t.define("almond", function () {
        }), t.define("jquery", [], function () {
            var t = e || $;
            return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
        }), t.define("select2/utils", ["jquery"], function (e) {
            function t(e) {
                var t = e.prototype, n = [];
                for (var r in t) {
                    var i = t[r];
                    "function" == typeof i && "constructor" !== r && n.push(r)
                }
                return n
            }

            var n = {};
            n.Extend = function (e, t) {
                function n() {
                    this.constructor = e
                }

                var r = {}.hasOwnProperty;
                for (var i in t)r.call(t, i) && (e[i] = t[i]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
            }, n.Decorate = function (e, n) {
                function r() {
                    var t = Array.prototype.unshift, r = n.prototype.constructor.length, i = e.prototype.constructor;
                    r > 0 && (t.call(arguments, e.prototype.constructor), i = n.prototype.constructor), i.apply(this, arguments)
                }

                function i() {
                    this.constructor = r
                }

                var o = t(n), s = t(e);
                n.displayName = e.displayName, r.prototype = new i;
                for (var a = 0; a < s.length; a++) {
                    var l = s[a];
                    r.prototype[l] = e.prototype[l]
                }
                for (var u = (function (e) {
                    var t = function () {
                    };
                    e in r.prototype && (t = r.prototype[e]);
                    var i = n.prototype[e];
                    return function () {
                        var e = Array.prototype.unshift;
                        return e.call(arguments, t), i.apply(this, arguments)
                    }
                }), c = 0; c < o.length; c++) {
                    var p = o[c];
                    r.prototype[p] = u(p)
                }
                return r
            };
            var r = function () {
                this.listeners = {}
            };
            return r.prototype.on = function (e, t) {
                this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
            }, r.prototype.trigger = function (e) {
                var t = Array.prototype.slice;
                this.listeners = this.listeners || {}, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, r.prototype.invoke = function (e, t) {
                for (var n = 0, r = e.length; r > n; n++)e[n].apply(this, t)
            }, n.Observable = r, n.generateChars = function (e) {
                for (var t = "", n = 0; e > n; n++) {
                    var r = Math.floor(36 * Math.random());
                    t += r.toString(36)
                }
                return t
            }, n.bind = function (e, t) {
                return function () {
                    e.apply(t, arguments)
                }
            }, n._convertData = function (e) {
                for (var t in e) {
                    var n = t.split("-"), r = e;
                    if (1 !== n.length) {
                        for (var i = 0; i < n.length; i++) {
                            var o = n[i];
                            o = o.substring(0, 1).toLowerCase() + o.substring(1), o in r || (r[o] = {}), i == n.length - 1 && (r[o] = e[t]), r = r[o]
                        }
                        delete e[t]
                    }
                }
                return e
            }, n.hasScroll = function (t, n) {
                var r = e(n), i = n.style.overflowX, o = n.style.overflowY;
                return i !== o || "hidden" !== o && "visible" !== o ? "scroll" === i || "scroll" === o ? !0 : r.innerHeight() < n.scrollHeight || r.innerWidth() < n.scrollWidth : !1
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
                    var r = e();
                    e.map(n, function (e) {
                        r = r.add(e)
                    }), n = r
                }
                t.append(n)
            }, n
        }), t.define("select2/results", ["jquery", "./utils"], function (e, t) {
            function n(e, t, r) {
                this.$element = e, this.data = r, this.options = t, n.__super__.constructor.call(this)
            }

            return t.Extend(n, t.Observable), n.prototype.render = function () {
                var t = e('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
            }, n.prototype.clear = function () {
                this.$results.empty()
            }, n.prototype.displayMessage = function (t) {
                var n = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var r = e('<li role="treeitem" class="select2-results__option"></li>'), i = this.options.get("translations").get(t.message);
                r.append(n(i(t.args))), this.$results.append(r)
            }, n.prototype.append = function (e) {
                this.hideLoading();
                var t = [];
                if (null == e.results || 0 === e.results.length)return void(0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"}));
                e.results = this.sort(e.results);
                for (var n = 0; n < e.results.length; n++) {
                    var r = e.results[n], i = this.option(r);
                    t.push(i)
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
                    var r = e.map(n, function (e) {
                        return e.id.toString()
                    }), i = t.$results.find(".select2-results__option[aria-selected]");
                    i.each(function () {
                        var t = e(this), n = e.data(this, "data"), i = "" + n.id;
                        null != n.element && n.element.selected || null == n.element && e.inArray(i, r) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                    });
                    var o = i.filter("[aria-selected=true]");
                    o.length > 0 ? o.first().trigger("mouseenter") : i.first().trigger("mouseenter")
                })
            }, n.prototype.showLoading = function (e) {
                this.hideLoading();
                var t = this.options.get("translations").get("searching"), n = {
                    disabled: !0,
                    loading: !0,
                    text: t(e)
                }, r = this.option(n);
                r.className += " loading-results", this.$results.prepend(r)
            }, n.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove()
            }, n.prototype.option = function (t) {
                var n = document.createElement("li");
                n.className = "select2-results__option";
                var r = {role: "treeitem", "aria-selected": "false"};
                t.disabled && (delete r["aria-selected"], r["aria-disabled"] = "true"), null == t.id && delete r["aria-selected"], null != t._resultId && (n.id = t._resultId), t.title && (n.title = t.title), t.children && (r.role = "group", r["aria-label"] = t.text, delete r["aria-selected"]);
                for (var i in r) {
                    var o = r[i];
                    n.setAttribute(i, o)
                }
                if (t.children) {
                    var s = e(n), a = document.createElement("strong");
                    a.className = "select2-results__group";
                    {
                        e(a)
                    }
                    this.template(t, a);
                    for (var l = [], u = 0; u < t.children.length; u++) {
                        var c = t.children[u], p = this.option(c);
                        l.push(p)
                    }
                    var d = e("<ul></ul>", {"class": "select2-results__options select2-results__options--nested"});
                    d.append(l), s.append(a), s.append(d)
                } else this.template(t, n);
                return e.data(n, "data", t), n
            }, n.prototype.bind = function (t, n) {
                var r = this, i = t.id + "-results";
                this.$results.attr("id", i), t.on("results:all", function (e) {
                    r.clear(), r.append(e.data), t.isOpen() && r.setClasses()
                }), t.on("results:append", function (e) {
                    r.append(e.data), t.isOpen() && r.setClasses()
                }), t.on("query", function (e) {
                    r.showLoading(e)
                }), t.on("select", function () {
                    t.isOpen() && r.setClasses()
                }), t.on("unselect", function () {
                    t.isOpen() && r.setClasses()
                }), t.on("open", function () {
                    r.$results.attr("aria-expanded", "true"), r.$results.attr("aria-hidden", "false"), r.setClasses(), r.ensureHighlightVisible()
                }), t.on("close", function () {
                    r.$results.attr("aria-expanded", "false"), r.$results.attr("aria-hidden", "true"), r.$results.removeAttr("aria-activedescendant")
                }), t.on("results:toggle", function () {
                    var e = r.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup")
                }), t.on("results:select", function () {
                    var e = r.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = e.data("data");
                        "true" == e.attr("aria-selected") ? r.trigger("close") : r.trigger("select", {data: t})
                    }
                }), t.on("results:previous", function () {
                    var e = r.getHighlightedResults(), t = r.$results.find("[aria-selected]"), n = t.index(e);
                    if (0 !== n) {
                        var i = n - 1;
                        0 === e.length && (i = 0);
                        var o = t.eq(i);
                        o.trigger("mouseenter");
                        var s = r.$results.offset().top, a = o.offset().top, l = r.$results.scrollTop() + (a - s);
                        0 === i ? r.$results.scrollTop(0) : 0 > a - s && r.$results.scrollTop(l)
                    }
                }), t.on("results:next", function () {
                    var e = r.getHighlightedResults(), t = r.$results.find("[aria-selected]"), n = t.index(e), i = n + 1;
                    if (!(i >= t.length)) {
                        var o = t.eq(i);
                        o.trigger("mouseenter");
                        var s = r.$results.offset().top + r.$results.outerHeight(!1), a = o.offset().top + o.outerHeight(!1), l = r.$results.scrollTop() + a - s;
                        0 === i ? r.$results.scrollTop(0) : a > s && r.$results.scrollTop(l)
                    }
                }), t.on("results:focus", function (e) {
                    e.element.addClass("select2-results__option--highlighted")
                }), t.on("results:message", function (e) {
                    r.displayMessage(e)
                }), e.fn.mousewheel && this.$results.on("mousewheel", function (e) {
                    var t = r.$results.scrollTop(), n = r.$results.get(0).scrollHeight - r.$results.scrollTop() + e.deltaY, i = e.deltaY > 0 && t - e.deltaY <= 0, o = e.deltaY < 0 && n <= r.$results.height();
                    i ? (r.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()), e.preventDefault(), e.stopPropagation())
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (t) {
                    var n = e(this), i = n.data("data");
                    return "true" === n.attr("aria-selected") ? void(r.options.get("multiple") ? r.trigger("unselect", {
                        originalEvent: t,
                        data: i
                    }) : r.trigger("close")) : void r.trigger("select", {originalEvent: t, data: i})
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (t) {
                    var n = e(this).data("data");
                    r.getHighlightedResults().removeClass("select2-results__option--highlighted"), r.trigger("results:focus", {
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
                    var t = this.$results.find("[aria-selected]"), n = t.index(e), r = this.$results.offset().top, i = e.offset().top, o = this.$results.scrollTop() + (i - r), s = i - r;
                    o -= 2 * e.outerHeight(!1), 2 >= n ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || 0 > s) && this.$results.scrollTop(o);

                }
            }, n.prototype.template = function (t, n) {
                var r = this.options.get("templateResult"), i = this.options.get("escapeMarkup"), o = r(t);
                null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = i(o) : e(n).append(o)
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
            function r(e, t) {
                this.$element = e, this.options = t, r.__super__.constructor.call(this)
            }

            return t.Extend(r, t.Observable), r.prototype.render = function () {
                var t = e('<span class="select2-selection" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t
            }, r.prototype.bind = function (e, t) {
                var r = this, i = (e.id + "-container", e.id + "-results");
                this.container = e, this.$selection.on("focus", function (e) {
                    r.trigger("focus", e)
                }), this.$selection.on("blur", function (e) {
                    r.trigger("blur", e)
                }), this.$selection.on("keydown", function (e) {
                    r.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                }), e.on("results:focus", function (e) {
                    r.$selection.attr("aria-activedescendant", e.data._resultId)
                }), e.on("selection:update", function (e) {
                    r.update(e.data)
                }), e.on("open", function () {
                    r.$selection.attr("aria-expanded", "true"), r.$selection.attr("aria-owns", i), r._attachCloseHandler(e)
                }), e.on("close", function () {
                    r.$selection.attr("aria-expanded", "false"), r.$selection.removeAttr("aria-activedescendant"), r.$selection.removeAttr("aria-owns"), r.$selection.focus(), r._detachCloseHandler(e)
                }), e.on("enable", function () {
                    r.$selection.attr("tabindex", r._tabindex)
                }), e.on("disable", function () {
                    r.$selection.attr("tabindex", "-1")
                })
            }, r.prototype._attachCloseHandler = function (t) {
                e(document.body).on("mousedown.select2." + t.id, function (t) {
                    var n = e(t.target), r = n.closest(".select2"), i = e(".select2.select2-container--open");
                    i.each(function () {
                        var t = e(this);
                        if (this != r[0]) {
                            var n = t.data("element");
                            n.select2("close")
                        }
                    })
                })
            }, r.prototype._detachCloseHandler = function (t) {
                e(document.body).off("mousedown.select2." + t.id)
            }, r.prototype.position = function (e, t) {
                var n = t.find(".selection");
                n.append(e)
            }, r.prototype.destroy = function () {
                this._detachCloseHandler(this.container)
            }, r.prototype.update = function (e) {
                throw new Error("The `update` method must be defined in child classes.")
            }, r
        }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, r) {
            function i() {
                i.__super__.constructor.apply(this, arguments)
            }

            return n.Extend(i, t), i.prototype.render = function () {
                var e = i.__super__.render.call(this);
                return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
            }, i.prototype.bind = function (e, t) {
                var n = this;
                i.__super__.bind.apply(this, arguments);
                var r = e.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", r), this.$selection.attr("aria-labelledby", r), this.$selection.on("mousedown", function (e) {
                    1 === e.which && n.trigger("toggle", {originalEvent: e})
                }), this.$selection.on("focus", function (e) {
                }), this.$selection.on("blur", function (e) {
                }), e.on("selection:update", function (e) {
                    n.update(e.data)
                })
            }, i.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, i.prototype.display = function (e) {
                var t = this.options.get("templateSelection"), n = this.options.get("escapeMarkup");
                return n(t(e))
            }, i.prototype.selectionContainer = function () {
                return e("<span></span>")
            }, i.prototype.update = function (e) {
                if (0 === e.length)return void this.clear();
                var t = e[0], n = this.display(t), r = this.$selection.find(".select2-selection__rendered");
                r.empty().append(n), r.prop("title", t.title || t.text)
            }, i
        }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (e, t, n) {
            function r(e, t) {
                r.__super__.constructor.apply(this, arguments)
            }

            return n.Extend(r, t), r.prototype.render = function () {
                var e = r.__super__.render.call(this);
                return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
            }, r.prototype.bind = function (t, n) {
                var i = this;
                r.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {
                    i.trigger("toggle", {originalEvent: e})
                }), this.$selection.on("click", ".select2-selection__choice__remove", function (t) {
                    var n = e(this), r = n.parent(), o = r.data("data");
                    i.trigger("unselect", {originalEvent: t, data: o})
                })
            }, r.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, r.prototype.display = function (e) {
                var t = this.options.get("templateSelection"), n = this.options.get("escapeMarkup");
                return n(t(e))
            }, r.prototype.selectionContainer = function () {
                var t = e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                return t
            }, r.prototype.update = function (e) {
                if (this.clear(), 0 !== e.length) {
                    for (var t = [], r = 0; r < e.length; r++) {
                        var i = e[r], o = this.display(i), s = this.selectionContainer();
                        s.append(o), s.prop("title", i.title || i.text), s.data("data", i), t.push(s)
                    }
                    var a = this.$selection.find(".select2-selection__rendered");
                    n.appendMany(a, t)
                }
            }, r
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
                var n = 1 == t.length && t[0].id != this.placeholder.id, r = t.length > 1;
                if (r || n)return e.call(this, t);
                this.clear();
                var i = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(i)
            }, t
        }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function (e, t) {
            function n() {
            }

            return n.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
                    r._handleClear(e)
                }), t.on("keypress", function (e) {
                    r._handleKeyboardClear(e, t)
                })
            }, n.prototype._handleClear = function (e, t) {
                if (!this.options.get("disabled")) {
                    var n = this.$selection.find(".select2-selection__clear");
                    if (0 !== n.length) {
                        t.stopPropagation();
                        for (var r = n.data("data"), i = 0; i < r.length; i++) {
                            var o = {data: r[i]};
                            if (this.trigger("unselect", o), o.prevented)return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle")
                    }
                }
            }, n.prototype._handleKeyboardClear = function (e, n, r) {
                r.isOpen() || (n.which == t.DELETE || n.which == t.BACKSPACE) && this._handleClear(n)
            }, n.prototype.update = function (t, n) {
                if (t.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                    var r = e('<span class="select2-selection__clear">&times;</span>');
                    r.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(r)
                }
            }, n
        }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (e, t, n) {
            function r(e, t, n) {
                e.call(this, t, n)
            }

            return r.prototype.render = function (t) {
                var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></li>');
                this.$searchContainer = n, this.$search = n.find("input");
                var r = t.call(this);
                return r
            }, r.prototype.bind = function (e, t, r) {
                var i = this;
                e.call(this, t, r), t.on("open", function () {
                    i.$search.attr("tabindex", 0), i.$search.focus()
                }), t.on("close", function () {
                    i.$search.attr("tabindex", -1), i.$search.val(""), i.$search.focus()
                }), t.on("enable", function () {
                    i.$search.prop("disabled", !1)
                }), t.on("disable", function () {
                    i.$search.prop("disabled", !0)
                }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
                    i.trigger("focus", e)
                }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
                    i.trigger("blur", e)
                }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
                    e.stopPropagation(), i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented();
                    var t = e.which;
                    if (t === n.BACKSPACE && "" === i.$search.val()) {
                        var r = i.$searchContainer.prev(".select2-selection__choice");
                        if (r.length > 0) {
                            var o = r.data("data");
                            i.searchRemoveChoice(o), e.preventDefault()
                        }
                    }
                }), this.$selection.on("input", ".select2-search--inline", function (e) {
                    i.$selection.off("keyup.search")
                }), this.$selection.on("keyup.search input", ".select2-search--inline", function (e) {
                    i.handleSearch(e)
                })
            }, r.prototype.createPlaceholder = function (e, t) {
                this.$search.attr("placeholder", t.text)
            }, r.prototype.update = function (e, t) {
                this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch()
            }, r.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {term: e})
                }
                this._keyUpPrevented = !1
            }, r.prototype.searchRemoveChoice = function (e, t) {
                this.trigger("unselect", {data: t}), this.trigger("open"), this.$search.val(t.text + " ")
            }, r.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var e = "";
                if ("" !== this.$search.attr("placeholder"))e = this.$selection.find(".select2-selection__rendered").innerWidth(); else {
                    var t = this.$search.val().length + 1;
                    e = .75 * t + "em"
                }
                this.$search.css("width", e)
            }, r
        }), t.define("select2/selection/eventRelay", ["jquery"], function (e) {
            function t() {
            }

            return t.prototype.bind = function (t, n, r) {
                var i = this, o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"], s = ["opening", "closing", "selecting", "unselecting"];
                t.call(this, n, r), n.on("*", function (t, n) {
                    if (-1 !== e.inArray(t, o)) {
                        n = n || {};
                        var r = e.Event("select2:" + t, {params: n});
                        i.$element.trigger(r), -1 !== e.inArray(t, s) && (n.prevented = r.isDefaultPrevented())
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
                    var r = t(e);
                    n._cache[e] = r
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
                var r = t.id + "-result-";
                return r += e.generateChars(4), r += null != n.id ? "-" + n.id.toString() : "-" + e.generateChars(4)
            }, t
        }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, n) {
            function r(e, t) {
                this.$element = e, this.options = t, r.__super__.constructor.call(this)
            }

            return t.Extend(r, e), r.prototype.current = function (e) {
                var t = [], r = this;
                this.$element.find(":selected").each(function () {
                    var e = n(this), i = r.item(e);
                    t.push(i)
                }), e(t)
            }, r.prototype.select = function (e) {
                var t = this;
                if (e.selected = !0, n(e.element).is("option"))return e.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple"))this.current(function (r) {
                    var i = [];
                    e = [e], e.push.apply(e, r);
                    for (var o = 0; o < e.length; o++) {
                        var s = e[o].id;
                        -1 === n.inArray(s, i) && i.push(s)
                    }
                    t.$element.val(i), t.$element.trigger("change")
                }); else {
                    var r = e.id;
                    this.$element.val(r), this.$element.trigger("change")
                }
            }, r.prototype.unselect = function (e) {
                var t = this;
                if (this.$element.prop("multiple"))return e.selected = !1, n(e.element).is("option") ? (e.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (r) {
                    for (var i = [], o = 0; o < r.length; o++) {
                        var s = r[o].id;
                        s !== e.id && -1 === n.inArray(s, i) && i.push(s)
                    }
                    t.$element.val(i), t.$element.trigger("change")
                })
            }, r.prototype.bind = function (e, t) {
                var n = this;
                this.container = e, e.on("select", function (e) {
                    n.select(e.data)
                }), e.on("unselect", function (e) {
                    n.unselect(e.data)
                })
            }, r.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    n.removeData(this, "data")
                })
            }, r.prototype.query = function (e, t) {
                var r = [], i = this, o = this.$element.children();
                o.each(function () {
                    var t = n(this);
                    if (t.is("option") || t.is("optgroup")) {
                        var o = i.item(t), s = i.matches(e, o);
                        null !== s && r.push(s)
                    }
                }), t({results: r})
            }, r.prototype.addOptions = function (e) {
                t.appendMany(this.$element, e)
            }, r.prototype.option = function (e) {
                var t;
                e.children ? (t = document.createElement("optgroup"), t.label = e.text) : (t = document.createElement("option"), void 0 !== t.textContent ? t.textContent = e.text : t.innerText = e.text), e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                var r = n(t), i = this._normalizeItem(e);
                return i.element = t, n.data(t, "data", i), r
            }, r.prototype.item = function (e) {
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
                    for (var r = e.children("option"), i = [], o = 0; o < r.length; o++) {
                        var s = n(r[o]), a = this.item(s);
                        i.push(a)
                    }
                    t.children = i
                }
                return t = this._normalizeItem(t), t.element = e[0], n.data(e[0], "data", t), t
            }, r.prototype._normalizeItem = function (e) {
                n.isPlainObject(e) || (e = {id: e, text: e}), e = n.extend({}, {text: ""}, e);
                var t = {selected: !1, disabled: !1};
                return null != e.id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, t, e)
            }, r.prototype.matches = function (e, t) {
                var n = this.options.get("matcher");
                return n(e, t)
            }, r
        }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, n) {
            function r(e, t) {
                var n = t.get("data") || [];
                r.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
            }

            return t.Extend(r, e), r.prototype.select = function (e) {
                var t = this.$element.find("option").filter(function (t, n) {
                    return n.value == e.id.toString()
                });
                0 === t.length && (t = this.option(e), this.addOptions(t)), r.__super__.select.call(this, e)
            }, r.prototype.convertToOptions = function (e) {
                function r(e) {
                    return function () {
                        return n(this).val() == e.id
                    }
                }

                for (var i = this, o = this.$element.find("option"), s = o.map(function () {
                    return i.item(n(this)).id
                }).get(), a = [], l = 0; l < e.length; l++) {
                    var u = this._normalizeItem(e[l]);
                    if (n.inArray(u.id, s) >= 0) {
                        var c = o.filter(r(u)), p = this.item(c), d = (n.extend(!0, {}, p, u), this.option(p));
                        c.replaceWith(d)
                    } else {
                        var h = this.option(u);
                        if (u.children) {
                            var f = this.convertToOptions(u.children);
                            t.appendMany(h, f)
                        }
                        a.push(h)
                    }
                }
                return a
            }, r
        }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, n) {
            function r(t, n) {
                this.ajaxOptions = this._applyDefaults(n.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), e.__super__.constructor.call(this, t, n)
            }

            return t.Extend(r, e), r.prototype._applyDefaults = function (e) {
                var t = {
                    data: function (e) {
                        return {q: e.term}
                    }, transport: function (e, t, r) {
                        var i = n.ajax(e);
                        return i.then(t), i.fail(r), i
                    }
                };
                return n.extend({}, t, e, !0)
            }, r.prototype.processResults = function (e) {
                return e
            }, r.prototype.query = function (e, t) {
                function r() {
                    var r = o.transport(o, function (r) {
                        var o = i.processResults(r, e);
                        i.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(o)
                    }, function () {
                    });
                    i._request = r
                }

                var i = this;
                null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var o = n.extend({type: "GET"}, this.ajaxOptions);
                "function" == typeof o.url && (o.url = o.url(e)), "function" == typeof o.data && (o.data = o.data(e)), this.ajaxOptions.delay && "" !== e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(r, this.ajaxOptions.delay)) : r()
            }, r
        }), t.define("select2/data/tags", ["jquery"], function (e) {
            function t(t, n, r) {
                var i = r.get("tags"), o = r.get("createTag");
                if (void 0 !== o && (this.createTag = o), t.call(this, n, r), e.isArray(i))for (var s = 0; s < i.length; s++) {
                    var a = i[s], l = this._normalizeItem(a), u = this.option(l);
                    this.$element.append(u)
                }
            }

            return t.prototype.query = function (e, t, n) {
                function r(e, o) {
                    for (var s = e.results, a = 0; a < s.length; a++) {
                        var l = s[a], u = null != l.children && !r({results: l.children}, !0), c = l.text === t.term;
                        if (c || u)return o ? !1 : (e.data = s, void n(e))
                    }
                    if (o)return !0;
                    var p = i.createTag(t);
                    if (null != p) {
                        var d = i.option(p);
                        d.attr("data-select2-tag", !0), i.addOptions([d]), i.insertTag(s, p)
                    }
                    e.results = s, n(e)
                }

                var i = this;
                return this._removeOldTags(), null == t.term || null != t.page ? void e.call(this, t, n) : void e.call(this, t, r)
            }, t.prototype.createTag = function (t, n) {
                var r = e.trim(n.term);
                return "" === r ? null : {id: r, text: r}
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
                var r = n.get("tokenizer");
                void 0 !== r && (this.tokenizer = r), e.call(this, t, n)
            }

            return t.prototype.bind = function (e, t, n) {
                e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
            }, t.prototype.query = function (e, t, n) {
                function r(e) {
                    i.select(e)
                }

                var i = this;
                t.term = t.term || "";
                var o = this.tokenizer(t, this.options, r);
                o.term !== t.term && (this.$search.length && (this.$search.val(o.term), this.$search.focus()), t.term = o.term), e.call(this, t, n)
            }, t.prototype.tokenizer = function (t, n, r, i) {
                for (var o = r.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function (e) {
                        return {id: e.term, text: e.term}
                    }; a < s.length;) {
                    var u = s[a];
                    if (-1 !== e.inArray(u, o)) {
                        var c = s.substr(0, a), p = e.extend({}, n, {term: c}), d = l(p);
                        i(d), s = s.substr(a + 1) || "", a = 0
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
                var r = this;
                this.current(function (i) {
                    var o = null != i ? i.length : 0;
                    return r.maximumSelectionLength > 0 && o >= r.maximumSelectionLength ? void r.trigger("results:message", {
                        message: "maximumSelected",
                        args: {maximum: r.maximumSelectionLength}
                    }) : void e.call(r, t, n)
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
                var n = t.call(this), r = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = r, this.$search = r.find("input"), n.prepend(r), n
            }, n.prototype.bind = function (t, n, r) {
                var i = this;
                t.call(this, n, r), this.$search.on("keydown", function (e) {
                    i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented()
                }), this.$search.on("input", function (t) {
                    e(this).off("keyup")
                }), this.$search.on("keyup input", function (e) {
                    i.handleSearch(e)
                }), n.on("open", function () {
                    i.$search.attr("tabindex", 0), i.$search.focus(), window.setTimeout(function () {
                        i.$search.focus()
                    }, 0)
                }), n.on("close", function () {
                    i.$search.attr("tabindex", -1), i.$search.val("")
                }), n.on("results:all", function (e) {
                    if (null == e.query.term || "" === e.query.term) {
                        var t = i.showSearch(e);
                        t ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide")
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
            function e(e, t, n, r) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, r)
            }

            return e.prototype.append = function (e, t) {
                t.results = this.removePlaceholder(t.results), e.call(this, t)
            }, e.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {id: "", text: t}), t
            }, e.prototype.removePlaceholder = function (e, t) {
                for (var n = t.slice(0), r = t.length - 1; r >= 0; r--) {
                    var i = t[r];
                    this.placeholder.id === i.id && n.splice(r, 1)
                }
                return n
            }, e
        }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
            function t(e, t, n, r) {
                this.lastParams = {}, e.call(this, t, n, r), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }

            return t.prototype.append = function (e, t) {
                this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
            }, t.prototype.bind = function (t, n, r) {
                var i = this;
                t.call(this, n, r), n.on("query", function (e) {
                    i.lastParams = e, i.loading = !0
                }), n.on("query:append", function (e) {
                    i.lastParams = e, i.loading = !0
                }), this.$results.on("scroll", function () {
                    var t = e.contains(document.documentElement, i.$loadingMore[0]);
                    if (!i.loading && t) {
                        var n = i.$results.offset().top + i.$results.outerHeight(!1), r = i.$loadingMore.offset().top + i.$loadingMore.outerHeight(!1);
                        n + 50 >= r && i.loadMore()
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
                var r = this, i = !1;
                e.call(this, t, n), t.on("open", function () {
                    r._showDropdown(), r._attachPositioningHandler(t), i || (i = !0, t.on("results:all", function () {
                        r._positionDropdown(), r._resizeDropdown()
                    }), t.on("results:append", function () {
                        r._positionDropdown(), r._resizeDropdown()
                    }))
                }), t.on("close", function () {
                    r._hideDropdown(), r._detachPositioningHandler(t)
                }), this.$dropdownContainer.on("mousedown", function (e) {
                    e.stopPropagation()
                })
            }, n.prototype.position = function (e, t, n) {
                t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = n
            }, n.prototype.render = function (t) {
                var n = e("<span></span>"), r = t.call(this);
                return n.append(r), this.$dropdownContainer = n, n
            }, n.prototype._hideDropdown = function (e) {
                this.$dropdownContainer.detach()
            }, n.prototype._attachPositioningHandler = function (n) {
                var r = this, i = "scroll.select2." + n.id, o = "resize.select2." + n.id, s = "orientationchange.select2." + n.id, a = this.$container.parents().filter(t.hasScroll);
                a.each(function () {
                    e(this).data("select2-scroll-position", {x: e(this).scrollLeft(), y: e(this).scrollTop()})
                }), a.on(i, function (t) {
                    var n = e(this).data("select2-scroll-position");
                    e(this).scrollTop(n.y)
                }), e(window).on(i + " " + o + " " + s, function (e) {
                    r._positionDropdown(), r._resizeDropdown()
                })
            }, n.prototype._detachPositioningHandler = function (n) {
                var r = "scroll.select2." + n.id, i = "resize.select2." + n.id, o = "orientationchange.select2." + n.id, s = this.$container.parents().filter(t.hasScroll);
                s.off(r), e(window).off(r + " " + i + " " + o)
            }, n.prototype._positionDropdown = function () {
                var t = e(window), n = this.$dropdown.hasClass("select2-dropdown--above"), r = this.$dropdown.hasClass("select2-dropdown--below"), i = null, o = (this.$container.position(), this.$container.offset());
                o.bottom = o.top + this.$container.outerHeight(!1);
                var s = {height: this.$container.outerHeight(!1)};
                s.top = o.top, s.bottom = o.top + s.height;
                var a = {height: this.$dropdown.outerHeight(!1)}, l = {
                    top: t.scrollTop(),
                    bottom: t.scrollTop() + t.height()
                }, u = l.top < o.top - a.height, c = l.bottom > o.bottom + a.height, p = {
                    left: o.left, top: s.bottom
                };
                n || r || (i = "below"), c || !u || n ? !u && c && n && (i = "below") : i = "above", ("above" == i || n && "below" !== i) && (p.top = s.top - a.height), null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)), this.$dropdownContainer.css(p)
            }, n.prototype._resizeDropdown = function () {
                this.$dropdownContainer.width();
                var e = {width: this.$container.outerWidth(!1) + "px"};
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.width = "auto"), this.$dropdown.css(e)
            }, n.prototype._showDropdown = function (e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, n
        }), t.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function e(t) {
                for (var n = 0, r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.children ? n += e(i.children) : n++
                }
                return n
            }

            function t(e, t, n, r) {
                this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, r)
            }

            return t.prototype.showSearch = function (t, n) {
                return e(n.data.results) < this.minimumResultsForSearch ? !1 : t.call(this, n)
            }, t
        }), t.define("select2/dropdown/selectOnClose", [], function () {
            function e() {
            }

            return e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), t.on("close", function () {
                    r._handleSelectOnClose()
                })
            }, e.prototype._handleSelectOnClose = function () {
                var e = this.getHighlightedResults();
                e.length < 1 || this.trigger("select", {data: e.data("data")})
            }, e
        }), t.define("select2/dropdown/closeOnSelect", [], function () {
            function e() {
            }

            return e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), t.on("select", function (e) {
                    r._selectTriggered(e)
                }), t.on("unselect", function (e) {
                    r._selectTriggered(e)
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
        }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (e, t, n, r, i, o, s, a, l, u, c, p, d, h, f, g, m, v, y, x, b, w, C, T, _, $, A, E, k) {
            function S() {
                this.reset()
            }

            S.prototype.apply = function (p) {
                if (p = e.extend({}, this.defaults, p), null == p.dataAdapter) {
                    if (p.dataAdapter = null != p.ajax ? f : null != p.data ? h : d, p.minimumInputLength > 0 && (p.dataAdapter = u.Decorate(p.dataAdapter, v)), p.maximumInputLength > 0 && (p.dataAdapter = u.Decorate(p.dataAdapter, y)), p.maximumSelectionLength > 0 && (p.dataAdapter = u.Decorate(p.dataAdapter, x)), p.tags && (p.dataAdapter = u.Decorate(p.dataAdapter, g)), (null != p.tokenSeparators || null != p.tokenizer) && (p.dataAdapter = u.Decorate(p.dataAdapter, m)), null != p.query) {
                        var k = t(p.amdBase + "compat/query");
                        p.dataAdapter = u.Decorate(p.dataAdapter, k)
                    }
                    if (null != p.initSelection) {
                        var S = t(p.amdBase + "compat/initSelection");
                        p.dataAdapter = u.Decorate(p.dataAdapter, S)
                    }
                }
                if (null == p.resultsAdapter && (p.resultsAdapter = n, null != p.ajax && (p.resultsAdapter = u.Decorate(p.resultsAdapter, T)), null != p.placeholder && (p.resultsAdapter = u.Decorate(p.resultsAdapter, C)), p.selectOnClose && (p.resultsAdapter = u.Decorate(p.resultsAdapter, A))), null == p.dropdownAdapter) {
                    if (p.multiple)p.dropdownAdapter = b; else {
                        var D = u.Decorate(b, w);
                        p.dropdownAdapter = D
                    }
                    if (0 !== p.minimumResultsForSearch && (p.dropdownAdapter = u.Decorate(p.dropdownAdapter, $)), p.closeOnSelect && (p.dropdownAdapter = u.Decorate(p.dropdownAdapter, E)), null != p.dropdownCssClass || null != p.dropdownCss || null != p.adaptDropdownCssClass) {
                        var j = t(p.amdBase + "compat/dropdownCss");
                        p.dropdownAdapter = u.Decorate(p.dropdownAdapter, j)
                    }
                    p.dropdownAdapter = u.Decorate(p.dropdownAdapter, _)
                }
                if (null == p.selectionAdapter) {
                    if (p.selectionAdapter = p.multiple ? i : r, null != p.placeholder && (p.selectionAdapter = u.Decorate(p.selectionAdapter, o)), p.allowClear && (p.selectionAdapter = u.Decorate(p.selectionAdapter, s)), p.multiple && (p.selectionAdapter = u.Decorate(p.selectionAdapter, a)), null != p.containerCssClass || null != p.containerCss || null != p.adaptContainerCssClass) {
                        var N = t(p.amdBase + "compat/containerCss");
                        p.selectionAdapter = u.Decorate(p.selectionAdapter, N)
                    }
                    p.selectionAdapter = u.Decorate(p.selectionAdapter, l)
                }
                if ("string" == typeof p.language)if (p.language.indexOf("-") > 0) {
                    var q = p.language.split("-"), O = q[0];
                    p.language = [p.language, O]
                } else p.language = [p.language];
                if (e.isArray(p.language)) {
                    var L = new c;
                    p.language.push("en");
                    for (var H = p.language, P = 0; P < H.length; P++) {
                        var R = H[P], M = {};
                        try {
                            M = c.loadPath(R)
                        } catch (I) {
                            try {
                                R = this.defaults.amdLanguageBase + R, M = c.loadPath(R)
                            } catch (F) {
                                p.debug && window.console && console.warn && console.warn('Select2: The language file for "' + R + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        L.extend(M)
                    }
                    p.translations = L
                } else {
                    var W = c.loadPath(this.defaults.amdLanguageBase + "en"), z = new c(p.language);
                    z.extend(W), p.translations = z
                }
                return p
            }, S.prototype.reset = function () {
                function t(e) {
                    function t(e) {
                        return p[e] || e
                    }

                    return e.replace(/[^\u0000-\u007E]/g, t)
                }

                function n(r, i) {
                    if ("" === e.trim(r.term))return i;
                    if (i.children && i.children.length > 0) {
                        for (var o = e.extend(!0, {}, i), s = i.children.length - 1; s >= 0; s--) {
                            var a = i.children[s], l = n(r, a);
                            null == l && o.children.splice(s, 1)
                        }
                        return o.children.length > 0 ? o : n(r, o)
                    }
                    var u = t(i.text).toUpperCase(), c = t(r.term).toUpperCase();
                    return u.indexOf(c) > -1 ? i : null
                }

                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: u.escapeMarkup,
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
            }, S.prototype.set = function (t, n) {
                var r = e.camelCase(t), i = {};
                i[r] = n;
                var o = u._convertData(i);
                e.extend(this.defaults, o)
            };
            var D = new S;
            return D
        }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (e, t, n, r) {
            function i(t, i) {
                if (this.options = t, null != i && this.fromElement(i), this.options = n.apply(this.options), i && i.is("input")) {
                    var o = e(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = r.Decorate(this.options.dataAdapter, o)
                }
            }

            return i.prototype.fromElement = function (e) {
                var n = ["select2"];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (this.options.dir = e.prop("dir") ? e.prop("dir") : e.closest("[dir]").prop("dir") ? e.closest("[dir]").prop("dir") : "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                var i = {};
                i = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                var o = t.extend(!0, {}, i);
                o = r._convertData(o);
                for (var s in o)t.inArray(s, n) > -1 || (t.isPlainObject(this.options[s]) ? t.extend(this.options[s], o[s]) : this.options[s] = o[s]);
                return this
            }, i.prototype.get = function (e) {
                return this.options[e]
            }, i.prototype.set = function (e, t) {
                this.options[e] = t
            }, i
        }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (e, t, n, r) {
            var i = function (e, n) {
                null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), n = n || {}, this.options = new t(n, e), i.__super__.constructor.call(this);
                var r = e.attr("tabindex") || 0;
                e.data("old-tabindex", r), e.attr("tabindex", "-1");
                var o = this.options.get("dataAdapter");
                this.dataAdapter = new o(e, this.options);
                var s = this.render();
                this._placeContainer(s);
                var a = this.options.get("selectionAdapter");
                this.selection = new a(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s);
                var l = this.options.get("dropdownAdapter");
                this.dropdown = new l(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s);
                var u = this.options.get("resultsAdapter");
                this.results = new u(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var c = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
                    c.trigger("selection:update", {data: e})
                }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
            };
            return n.Extend(i, n.Observable), i.prototype._generateId = function (e) {
                var t = "";
                return t = null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), t = "select2-" + t
            }, i.prototype._placeContainer = function (e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t)
            }, i.prototype._resolveWidth = function (e, t) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var r = this._resolveWidth(e, "style");
                    return null != r ? r : this._resolveWidth(e, "element")
                }
                if ("element" == t) {
                    var i = e.outerWidth(!1);
                    return 0 >= i ? "auto" : i + "px"
                }
                if ("style" == t) {
                    var o = e.attr("style");
                    if ("string" != typeof o)return null;
                    for (var s = o.split(";"), a = 0, l = s.length; l > a; a += 1) {
                        var u = s[a].replace(/\s/g, ""), c = u.match(n);
                        if (null !== c && c.length >= 1)return c[1]
                    }
                    return null
                }
                return t
            }, i.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, i.prototype._registerDomEvents = function () {
                var t = this;
                this.$element.on("change.select2", function () {
                    t.dataAdapter.current(function (e) {
                        t.trigger("selection:update", {data: e})
                    })
                }), this._sync = n.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                var r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != r ? (this._observer = new r(function (n) {
                    e.each(n, t._sync)
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", t._sync, !1)
            }, i.prototype._registerDataEvents = function () {
                var e = this;
                this.dataAdapter.on("*", function (t, n) {
                    e.trigger(t, n)
                })
            }, i.prototype._registerSelectionEvents = function () {
                var t = this, n = ["toggle"];
                this.selection.on("toggle", function () {
                    t.toggleDropdown()
                }), this.selection.on("*", function (r, i) {
                    -1 === e.inArray(r, n) && t.trigger(r, i)
                })
            }, i.prototype._registerDropdownEvents = function () {
                var e = this;
                this.dropdown.on("*", function (t, n) {
                    e.trigger(t, n)
                })
            }, i.prototype._registerResultsEvents = function () {
                var e = this;
                this.results.on("*", function (t, n) {
                    e.trigger(t, n)
                })
            }, i.prototype._registerEvents = function () {
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
                    e.isOpen() ? n === r.ENTER ? (e.trigger("results:select"), t.preventDefault()) : n === r.SPACE && t.ctrlKey ? (e.trigger("results:toggle"), t.preventDefault()) : n === r.UP ? (e.trigger("results:previous"), t.preventDefault()) : n === r.DOWN ? (e.trigger("results:next"), t.preventDefault()) : (n === r.ESC || n === r.TAB) && (e.close(), t.preventDefault()) : (n === r.ENTER || n === r.SPACE || (n === r.DOWN || n === r.UP) && t.altKey) && (e.open(), t.preventDefault())
                })
            }, i.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable")) : this.trigger("enable")
            }, i.prototype.trigger = function (e, t) {
                var n = i.__super__.trigger, r = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting"
                };
                if (e in r) {
                    var o = r[e], s = {prevented: !1, name: e, args: t};
                    if (n.call(this, o, s), s.prevented)return void(t.prevented = !0)
                }
                n.call(this, e, t)
            }, i.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, i.prototype.open = function () {
                this.isOpen() || (this.trigger("query", {}), this.trigger("open"))
            }, i.prototype.close = function () {
                this.isOpen() && this.trigger("close")
            }, i.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open")
            }, i.prototype.enable = function (e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == e || 0 === e.length) && (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t)
            }, i.prototype.data = function () {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var e = [];
                return this.dataAdapter.current(function (t) {
                    e = t
                }), e
            }, i.prototype.val = function (t) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length)return this.$element.val();
                var n = t[0];
                e.isArray(n) && (n = e.map(n, function (e) {
                    return e.toString()
                })), this.$element.val(n).trigger("change")
            }, i.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
            }, i.prototype.render = function () {
                var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
            }, i
        }), t.define("jquery.select2", ["jquery", "require", "./select2/core", "./select2/defaults"], function (e, t, n, r) {
            if (t("jquery.mousewheel"), null == e.fn.select2) {
                var i = ["open", "close", "destroy"];
                e.fn.select2 = function (t) {
                    if (t = t || {}, "object" == typeof t)return this.each(function () {
                        {
                            var r = e.extend({}, t, !0);
                            new n(e(this), r)
                        }
                    }), this;
                    if ("string" == typeof t) {
                        var r = this.data("select2");
                        null == r && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2.");
                        var o = Array.prototype.slice.call(arguments, 1), s = r[t](o);
                        return e.inArray(t, i) > -1 ? this : s
                    }
                    throw new Error("Invalid arguments for Select2: " + t)
                }
            }
            return null == e.fn.select2.defaults && (e.fn.select2.defaults = r), n
        }), t.define("jquery.mousewheel", ["jquery"], function (e) {
            return e
        }), {define: t.define, require: t.require}
    }(), n = t.require("jquery.select2");
    return e.fn.select2.amd = t, n
}), +function (e) {
    "use strict";
    var t = function (n, r) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.$element.on("click.bs.rowlink", "td:not(.rowlink-skip)", e.proxy(this.click, this))
    };
    t.DEFAULTS = {target: "a"}, t.prototype.click = function (t) {
        var n = e(t.currentTarget).closest("tr").find(this.options.target)[0];
        if (e(t.target)[0] !== n)if (t.preventDefault(), n.click)n.click(); else if (document.createEvent) {
            var r = document.createEvent("MouseEvents");
            r.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(r)
        }
    };
    var n = e.fn.rowlink;
    e.fn.rowlink = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("bs.rowlink");
            i || r.data("bs.rowlink", i = new t(this, n))
        })
    }, e.fn.rowlink.Constructor = t, e.fn.rowlink.noConflict = function () {
        return e.fn.rowlink = n, this
    }, e(document).on("click.bs.rowlink.data-api", '[data-link="row"]', function (t) {
        if (0 === e(t.target).closest(".rowlink-skip").length) {
            var n = e(this);
            n.data("bs.rowlink") || (n.rowlink(n.data()), e(t.target).trigger("click.bs.rowlink"))
        }
    })
}(window.jQuery);