! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = [],
        r = Object.getPrototypeOf,
        i = n.slice,
        o = n.flat ? function(e) {
            return n.flat.call(e)
        } : function(e) {
            return n.concat.apply([], e)
        },
        a = n.push,
        s = n.indexOf,
        l = {},
        u = l.toString,
        c = l.hasOwnProperty,
        f = c.toString,
        d = f.call(Object),
        h = {},
        p = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        m = function(e) {
            return null != e && e === e.window
        },
        g = e.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var r, i, o = (n = n || g).createElement("script");
        if (o.text = e, t)
            for (r in v)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e
    }
    var _ = "3.6.3",
        w = function(e, t) {
            return new w.fn.init(e, t)
        };

    function E(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !p(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: _,
        constructor: w,
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, (function(t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(w.grep(this, (function(e, t) {
                return (t + 1) % 2
            })))
        },
        odd: function() {
            return this.pushStack(w.grep(this, (function(e, t) {
                return t % 2
            })))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || p(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (u && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}, i = !1, a[t] = w.extend(u, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && ("function" != typeof(n = c.call(t, "constructor") && t.constructor) || f.call(n) !== d))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (E(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (E(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, a = 0,
                s = [];
            if (E(e))
                for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
            return o(s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }));
    var x = function(e) {
        var t, n, r, i, o, a, s, l, u, c, f, d, h, p, m, g, v, y, b, _ = "sizzle" + 1 * new Date,
            w = e.document,
            E = 0,
            x = 0,
            T = le(),
            S = le(),
            C = le(),
            k = le(),
            A = function(e, t) {
                return e === t && (f = !0), 0
            },
            D = {}.hasOwnProperty,
            N = [],
            q = N.pop,
            L = N.push,
            j = N.push,
            O = N.slice,
            I = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            M = "\\[" + P + "*(" + H + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + P + "*\\]",
            F = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            B = new RegExp(P + "+", "g"),
            W = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            U = new RegExp("^" + P + "*," + P + "*"),
            Q = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            $ = new RegExp(P + "|>"),
            z = new RegExp(F),
            V = new RegExp("^" + H + "$"),
            X = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                d()
            },
            ae = _e((function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            j.apply(N = O.call(w.childNodes), w.childNodes), N[w.childNodes.length].nodeType
        } catch (t) {
            j = {
                apply: N.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, r, i) {
            var o, s, u, c, f, p, v, y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
            if (!i && (d(t), t = t || h, m)) {
                if (11 !== w && (f = Z.exec(e)))
                    if (o = f[1]) {
                        if (9 === w) {
                            if (!(u = t.getElementById(o))) return r;
                            if (u.id === o) return r.push(u), r
                        } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return r.push(u), r
                    } else {
                        if (f[2]) return j.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(r, t.getElementsByClassName(o)), r
                    }
                if (n.qsa && !k[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === w && ($.test(e) || Q.test(e))) {
                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = _)), s = (p = a(e)).length; s--;) p[s] = (c ? "#" + c : ":scope") + " " + be(p[s]);
                        v = p.join(",")
                    }
                    try {
                        if (n.cssSupportsSelector && !CSS.supports("selector(:is(" + v + "))")) throw new Error;
                        return j.apply(r, y.querySelectorAll(v)), r
                    } catch (t) {
                        k(e, !0)
                    } finally {
                        c === _ && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(W, "$1"), t, r, i)
        }

        function le() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function ue(e) {
            return e[_] = !0, e
        }

        function ce(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function de(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function he(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function me(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ge(e) {
            return ue((function(t) {
                return t = +t, ue((function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                }))
            }))
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {}, o = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, d = se.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : w;
                return a != h && 9 === a.nodeType && a.documentElement && (p = (h = a).documentElement, m = !o(h), w != h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce((function(e) {
                    return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), n.cssSupportsSelector = ce((function() {
                    return CSS.supports("selector(*)") && h.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
                })), n.attributes = ce((function(e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = ce((function(e) {
                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ce((function(e) {
                    return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length
                })), n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, v = [], g = [], (n.qsa = J.test(h.querySelectorAll)) && (ce((function(e) {
                    var t;
                    p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                })), ce((function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce((function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", F)
                })), n.cssSupportsSelector || g.push(":has"), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType && e.documentElement || e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return f = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == h || e.ownerDocument == w && b(w, e) ? -1 : t == h || t.ownerDocument == w && b(w, t) ? 1 : c ? I(c, e) - I(c, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == h ? -1 : t == h ? 1 : i ? -1 : o ? 1 : c ? I(c, e) - I(c, t) : 0;
                    if (i === o) return de(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? de(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                }), h
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (d(e), n.matchesSelector && m && !k[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {
                    k(t, !0)
                }
                return 0 < se(t, h, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != h && d(e), b(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != h && d(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
                return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return c = null, e
            }, i = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = se.selectors = {
                cacheLength: 50,
                createPseudo: ue,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && T(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = se.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(B, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, f, d, h, p, m = o !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        p = m = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (b = (h = (u = (c = (f = (d = g)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && u[1]) && u[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (b = h = 0) || p.pop();)
                                        if (1 === d.nodeType && ++b && d === t) {
                                            c[e] = [E, h, b];
                                            break
                                        }
                                } else if (y && (b = h = (u = (c = (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && u[1]), !1 === b)
                                    for (;
                                        (d = ++h && d && d[m] || (b = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [E, b]), d !== t)););
                                return (b -= i) === r || b % r == 0 && 0 <= b / r
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return i[_] ? i(t) : 1 < i.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) e[r = I(e, o[a])] = !(n[r] = o[a])
                        })) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: ue((function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(W, "$1"));
                        return r[_] ? ue((function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        })) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    })),
                    has: ue((function(e) {
                        return function(t) {
                            return 0 < se(e, t).length
                        }
                    })),
                    contains: ue((function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return -1 < (t.textContent || i(t)).indexOf(e)
                            }
                    })),
                    lang: ue((function(e) {
                        return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return K.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge((function() {
                        return [0]
                    })),
                    last: ge((function(e, t) {
                        return [t - 1]
                    })),
                    eq: ge((function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    })),
                    even: ge((function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })),
                    odd: ge((function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })),
                    lt: ge((function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    })),
                    gt: ge((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    }))
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = he(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function _e(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = x++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, l) {
                var u, c, f, d = [E, s];
                if (l) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (c = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((u = c[o]) && u[0] === E && u[1] === s) return d[2] = u[2];
                                if ((c[o] = d)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function we(e) {
            return 1 < e.length ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function Ee(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
            return a
        }

        function xe(e, t, n, r, i, o) {
            return r && !r[_] && (r = xe(r)), i && !i[_] && (i = xe(i, o)), ue((function(o, a, s, l) {
                var u, c, f, d = [],
                    h = [],
                    p = a.length,
                    m = o || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || !o && t ? m : Ee(m, d, e, s, l),
                    v = n ? i || (o ? e : p || r) ? [] : a : g;
                if (n && n(g, v, s, l), r)
                    for (u = Ee(v, h), r(u, [], s, l), c = u.length; c--;)(f = u[c]) && (v[h[c]] = !(g[h[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (u = [], c = v.length; c--;)(f = v[c]) && u.push(g[c] = f);
                            i(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(f = v[c]) && -1 < (u = i ? I(o, f) : d[c]) && (o[u] = !(a[u] = f))
                    }
                } else v = Ee(v === a ? v.splice(p, v.length) : v), i ? i(null, a, v, l) : j.apply(a, v)
            }))
        }

        function Te(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, c = _e((function(e) {
                    return e === t
                }), s, !0), f = _e((function(e) {
                    return -1 < I(t, e)
                }), s, !0), d = [function(e, n, r) {
                    var i = !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; l < o; l++)
                if (n = r.relative[e[l].type]) d = [_e(we(d), n)];
                else {
                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[_]) {
                        for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                        return xe(1 < l && we(d), 1 < l && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(W, "$1"), n, l < i && Te(e.slice(l, i)), i < o && Te(e = e.slice(i)), i < o && be(e))
                    }
                    d.push(n)
                }
            return we(d)
        }
        return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function(e, t) {
            var n, i, o, a, s, l, u, c = S[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, l = [], u = r.preFilter; s;) {
                for (a in n && !(i = U.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = Q.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(W, " ")
                    }), s = s.slice(n.length)), r.filter) !(i = X[a].exec(s)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? se.error(e) : S(e, l).slice(0)
        }, s = se.compile = function(e, t) {
            var n, i, o, s, l, c, f = [],
                p = [],
                g = C[e + " "];
            if (!g) {
                for (t || (t = a(e)), n = t.length; n--;)(g = Te(t[n]))[_] ? f.push(g) : p.push(g);
                (g = C(e, (i = p, s = 0 < (o = f).length, l = 0 < i.length, c = function(e, t, n, a, c) {
                    var f, p, g, v = 0,
                        y = "0",
                        b = e && [],
                        _ = [],
                        w = u,
                        x = e || l && r.find.TAG("*", c),
                        T = E += null == w ? 1 : Math.random() || .1,
                        S = x.length;
                    for (c && (u = t == h || t || c); y !== S && null != (f = x[y]); y++) {
                        if (l && f) {
                            for (p = 0, t || f.ownerDocument == h || (d(f), n = !m); g = i[p++];)
                                if (g(f, t || h, n)) {
                                    a.push(f);
                                    break
                                }
                            c && (E = T)
                        }
                        s && ((f = !g && f) && v--, e && b.push(f))
                    }
                    if (v += y, s && y !== v) {
                        for (p = 0; g = o[p++];) g(b, _, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--;) b[y] || _[y] || (_[y] = q.call(a));
                            _ = Ee(_)
                        }
                        j.apply(a, _), c && !e && 0 < _.length && 1 < v + o.length && se.uniqueSort(a)
                    }
                    return c && (E = T, u = w), b
                }, s ? ue(c) : c))).selector = e
            }
            return g
        }, l = se.select = function(e, t, n, i) {
            var o, l, u, c, f, d = "function" == typeof e && e,
                h = !i && a(e = d.selector || e);
            if (n = n || [], 1 === h.length) {
                if (2 < (l = h[0] = h[0].slice(0)).length && "ID" === (u = l[0]).type && 9 === t.nodeType && m && r.relative[l[1].type]) {
                    if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = X.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !r.relative[c = u.type]);)
                    if ((f = r.find[c]) && (i = f(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = i.length && be(l))) return j.apply(n, i), n;
                        break
                    }
            }
            return (d || s(e, h))(i, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = _.split("").sort(A).join("") === _, n.detectDuplicates = !!f, d(), n.sortDetached = ce((function(e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        })), ce((function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || fe("type|href|height|width", (function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), n.attributes && ce((function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || fe("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), ce((function(e) {
            return null == e.getAttribute("disabled")
        })) || fe(R, (function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        })), se
    }(e);
    w.find = x, w.expr = x.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = x.uniqueSort, w.text = x.getText, w.isXMLDoc = x.isXML, w.contains = x.contains, w.escapeSelector = x.escape;
    var T = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        C = w.expr.match.needsContext;

    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, t, n) {
        return p(t) ? w.grep(e, (function(e, r) {
            return !!t.call(e, r, e) !== n
        })) : t.nodeType ? w.grep(e, (function(e) {
            return e === t !== n
        })) : "string" != typeof t ? w.grep(e, (function(e) {
            return -1 < s.call(t, e) !== n
        })) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, w.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter((function() {
                for (t = 0; t < r; t++)
                    if (w.contains(i[t], this)) return !0
            })));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return 1 < r ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && C.test(e) ? w(e) : e || [], !1).length
        }
    });
    var N, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || N, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), A.test(r[1]) && w.isPlainObject(t))
                    for (r in t) p(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = g.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : p(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, N = w(g);
    var L = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            }))
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!C.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, (function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), 1 < this.length && (j[e] || w.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i)
        }
    }));
    var I = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function P(e) {
        throw e
    }

    function H(e, t, n, r) {
        var i;
        try {
            e && p(i = e.promise) ? i.call(e).done(t).fail(n) : e && p(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, w.each(t.match(I) || [], (function(e, t) {
            n[t] = !0
        })), n) : w.extend({}, e);
        var r, i, o, a, s = [],
            l = [],
            u = -1,
            c = function() {
                for (a = a || e.once, o = r = !0; l.length; u = -1)
                    for (i = l.shift(); ++u < s.length;) !1 === s[u].apply(i[0], i[1]) && e.stopOnFalse && (u = s.length, i = !1);
                e.memory || (i = !1), r = !1, a && (s = i ? [] : "")
            },
            f = {
                add: function() {
                    return s && (i && !r && (u = s.length - 1, l.push(i)), function t(n) {
                        w.each(n, (function(n, r) {
                            p(r) ? e.unique && f.has(r) || s.push(r) : r && r.length && "string" !== b(r) && t(r)
                        }))
                    }(arguments), i && !r && c()), this
                },
                remove: function() {
                    return w.each(arguments, (function(e, t) {
                        for (var n; - 1 < (n = w.inArray(t, s, n));) s.splice(n, 1), n <= u && u--
                    })), this
                },
                has: function(e) {
                    return e ? -1 < w.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = l = [], s = i = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = l = [], i || r || (s = i = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, w.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return w.Deferred((function(t) {
                            w.each(n, (function(n, r) {
                                var i = p(e[r[4]]) && e[r[4]];
                                o[r[1]]((function() {
                                    var e = i && i.apply(this, arguments);
                                    e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    l = arguments,
                                    u = function() {
                                        var e, u;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            u = e && ("object" == typeof e || "function" == typeof e) && e.then, p(u) ? i ? u.call(e, a(o, n, R, i), a(o, n, P, i)) : (o++, u.call(e, a(o, n, R, i), a(o, n, P, i), a(o, n, R, n.notifyWith))) : (r !== R && (s = void 0, l = [e]), (i || n.resolveWith)(s, l))
                                        }
                                    },
                                    c = i ? u : function() {
                                        try {
                                            u()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), o <= t + 1 && (r !== P && (s = void 0, l = [e]), n.rejectWith(s, l))
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred((function(e) {
                            n[0][3].add(a(0, e, p(i) ? i : R, e.notifyWith)), n[1][3].add(a(0, e, p(t) ? t : R)), n[2][3].add(a(0, e, p(r) ? r : P))
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, i) : i
                    }
                },
                o = {};
            return w.each(n, (function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add((function() {
                    r = s
                }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            })), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                o = i.call(arguments),
                a = w.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, o[e] = 1 < arguments.length ? i.call(arguments) : n, --t || a.resolveWith(r, o)
                    }
                };
            if (t <= 1 && (H(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || p(o[n] && o[n].then))) return a.then();
            for (; n--;) H(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && M.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }))
    };
    var F = w.Deferred();

    function B() {
        g.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), w.ready()
    }
    w.fn.ready = function(e) {
        return F.then(e).catch((function(e) {
            w.readyException(e)
        })), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || F.resolveWith(g, [w])
        }
    }), w.ready.then = F.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? e.setTimeout(w.ready) : (g.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
    var W = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === b(n))
                for (s in i = !0, n) W(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, p(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(w(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        U = /^-ms-/,
        Q = /-([a-z])/g;

    function $(e, t) {
        return t.toUpperCase()
    }

    function z(e) {
        return e.replace(U, "ms-").replace(Q, $)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function X() {
        this.expando = w.expando + X.uid++
    }
    X.uid = 1, X.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[z(t)] = n;
            else
                for (r in t) i[z(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in r ? [t] : t.match(I) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var Y = new X,
        K = new X,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : G.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return K.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = z(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each((function() {
                K.set(this, e)
            })) : W(this, (function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = K.get(o, e)) || void 0 !== (n = Z(o, e)) ? n : void 0;
                this.each((function() {
                    K.set(this, e, t)
                }))
            }), null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                K.remove(this, e)
            }))
        }
    }), w.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function() {
                w.dequeue(e, t)
            }), o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: w.Callbacks("once memory").add((function() {
                    Y.remove(e, [t + "queue", n])
                }))
            })
        }
    }), w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                w.dequeue(this, e)
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = g.documentElement,
        ie = function(e) {
            return w.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === w.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return w.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (w.cssNumber[t] || "px" !== u && +l) && te.exec(w.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; a--;) w.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }
    var le = {};

    function ue(e, t) {
        for (var n, r, i, o, a, s, l, u = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (u[c] = Y.get(r, "display") || null, u[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (u[c] = (l = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (l = le[s]) || (o = a.body.appendChild(a.createElement(s)), l = w.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), le[s] = l)))) : "none" !== n && (u[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    w.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                ae(this) ? w(this).show() : w(this).hide()
            }))
        }
    });
    var ce, fe, de = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i;
    ce = g.createDocumentFragment().appendChild(g.createElement("div")), (fe = g.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), h.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", h.option = !!ce.lastChild;
    var me = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, h.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;

    function be(e, t, n, r, i) {
        for (var o, a, s, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), l = me[s] || me._default, a.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
            w.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", h = 0; o = d[h++];)
            if (r && -1 < w.inArray(o, r)) i && i.push(o);
            else if (u = ie(o), a = ge(f.appendChild(o), "script"), u && ve(a), n)
            for (c = 0; o = a[c++];) pe.test(o.type || "") && n.push(o);
        return f
    }
    var _e = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Ee() {
        return !1
    }

    function xe(e, t) {
        return e === function() {
            try {
                return g.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Te(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Te(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each((function() {
            w.event.add(this, t, i, r, n)
        }))
    }

    function Se(e, t, n) {
        n ? (Y.set(e, t, !1), w.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, o, a = Y.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = i.call(arguments), Y.set(this, t, a), r = n(this, t), this[t](), a !== (o = Y.get(this, t)) || r ? Y.set(this, t, !1) : o = {}, a !== o) return e.stopImmediatePropagation(), e.preventDefault(), o && o.value
                } else a.length && (Y.set(this, t, {
                    value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, t) && w.event.add(e, t, we)
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, h, p, m, g = Y.get(e);
            if (V(e))
                for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(re, i), n.guid || (n.guid = w.guid++), (l = g.events) || (l = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function(t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(I) || [""]).length; u--;) h = m = (s = _e.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h && (f = w.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = w.event.special[h] || {}, c = w.extend({
                    type: h,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, p, a) || e.addEventListener && e.addEventListener(h, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), w.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, h, p, m, g = Y.hasData(e) && Y.get(e);
            if (g && (l = g.events)) {
                for (u = (t = (t || "").match(I) || [""]).length; u--;)
                    if (h = m = (s = _e.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                        for (f = w.event.special[h] || {}, d = l[h = (r ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || w.removeEvent(e, h, g.handle), delete l[h])
                    } else
                        for (h in l) w.event.remove(e, h + t[u], n, r, !0);
                w.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                l = w.event.fix(e),
                u = (Y.get(this, "events") || Object.create(null))[l.type] || [],
                c = w.event.special[l.type] || {};
            for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                for (a = w.event.handlers.call(this, l, u), t = 0;
                    (i = a[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l), l.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < w(i, this).index(u) : w.find(i, this, null, [u]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: p(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && k(t, "input") && Se(t, "click", we), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && k(t, "input") && Se(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return de.test(t.type) && t.click && k(t, "input") && Y.get(t, "click") || k(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        w.event.special[e] = {
            setup: function() {
                return Se(this, e, xe), !1
            },
            trigger: function() {
                return Se(this, e), !0
            },
            _default: function(t) {
                return Y.get(t.target, e)
            },
            delegateType: t
        }
    })), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || w.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), w.fn.extend({
        on: function(e, t, n, r) {
            return Te(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Te(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each((function() {
                w.event.remove(this, e, n, t)
            }))
        }
    });
    var Ce = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ae = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function De(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function Ne(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) w.event.add(t, i, s[i][n]);
            K.hasData(e) && (o = K.access(e), a = w.extend({}, o), K.set(t, a))
        }
    }

    function je(e, t, n, r) {
        t = o(t);
        var i, a, s, l, u, c, f = 0,
            d = e.length,
            m = d - 1,
            g = t[0],
            v = p(g);
        if (v || 1 < d && "string" == typeof g && !h.checkClone && ke.test(g)) return e.each((function(i) {
            var o = e.eq(i);
            v && (t[0] = g.call(this, i, o.html())), je(o, t, n, r)
        }));
        if (d && (a = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
            for (l = (s = w.map(ge(i, "script"), Ne)).length; f < d; f++) u = i, f !== m && (u = w.clone(u, !0, !0), l && w.merge(s, ge(u, "script"))), n.call(e[f], u, f);
            if (l)
                for (c = s[s.length - 1].ownerDocument, w.map(s, qe), f = 0; f < l; f++) u = s[f], pe.test(u.type || "") && !Y.access(u, "globalEval") && w.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, c) : y(u.textContent.replace(Ae, ""), u, c))
        }
        return e
    }

    function Oe(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ge(r)), r.parentNode && (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, l, u, c = e.cloneNode(!0),
                f = ie(e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++) s = o[r], "input" === (u = (l = a[r]).nodeName.toLowerCase()) && de.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return W(this, (function(e) {
                return void 0 === e ? w.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function() {
            return je(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return je(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return je(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return je(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return w.clone(this, e, t)
            }))
        },
        html: function(e) {
            return W(this, (function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ce.test(e) && !me[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return je(this, arguments, (function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ge(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), w(i[s])[t](n), a.apply(r, n.get());
            return this.pushStack(r)
        }
    }));
    var Ie = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = /^--/,
        Pe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        He = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Me = new RegExp(ne.join("|"), "i"),
        Fe = "[\\x20\\t\\r\\n\\f]",
        Be = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");

    function We(e, t, n) {
        var r, i, o, a, s = Re.test(t),
            l = e.style;
        return (n = n || Pe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(Be, "$1") || void 0), "" !== a || ie(e) || (a = w.style(e, t)), !h.pixelBoxStyles() && Ie.test(a) && Me.test(t) && (r = l.width, i = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = n.width, l.width = r, l.minWidth = i, l.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Ue(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), re.removeChild(u), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, a, s, l, u = g.createElement("div"),
            c = g.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function() {
                return t(), i
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), o
            },
            reliableTrDimensions: function() {
                var t, n, r, i;
                return null == s && (t = g.createElement("table"), n = g.createElement("tr"), r = g.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", r.style.height = "9px", r.style.display = "block", re.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight, re.removeChild(t)), s
            }
        }))
    }();
    var Qe = ["Webkit", "Moz", "ms"],
        $e = g.createElement("div").style,
        ze = {};

    function Ve(e) {
        return w.cssProps[e] || ze[e] || (e in $e ? e : ze[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--;)
                if ((e = Qe[n] + t) in $e) return e
        }(e) || e)
    }
    var Xe = /^(none|table(?!-c[ea]).+)/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ge(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Je(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += w.css(e, n + ne[a], !0, i)), r ? ("content" === n && (l -= w.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (l -= w.css(e, "border" + ne[a] + "Width", !0, i))) : (l += w.css(e, "padding" + ne[a], !0, i), "padding" !== n ? l += w.css(e, "border" + ne[a] + "Width", !0, i) : s += w.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l
    }

    function Ze(e, t, n) {
        var r = Pe(e),
            i = (!h.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
            o = i,
            a = We(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ie.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!h.boxSizingReliable() && i || !h.reliableTrDimensions() && k(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Je(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = z(t),
                    l = Re.test(t),
                    u = e.style;
                if (l || (t = Ve(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || l || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = z(t);
            return Re.test(t) || (t = Ve(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], (function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !Xe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, r) : He(e, Ye, (function() {
                    return Ze(e, t, r)
                }))
            },
            set: function(e, n, r) {
                var i, o = Pe(e),
                    a = !h.scrollboxSize() && "absolute" === o.position,
                    s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
                    l = r ? Je(e, t, r, s, o) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Je(e, t, "border", !1, o) - .5)), l && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ge(0, n, l)
            }
        }
    })), w.cssHooks.marginLeft = Ue(h.reliableMarginLeft, (function(e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ge)
    })), w.fn.extend({
        css: function(e, t) {
            return W(this, (function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Pe(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }), e, t, 1 < arguments.length)
        }
    }), ((w.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = et.prototype.init, w.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, w.fx.interval), w.fx.tick())
    }

    function lt() {
        return e.setTimeout((function() {
            tt = void 0
        })), tt = Date.now()
    }

    function ut(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(e, t, n) {
        var r, i, o = 0,
            a = ft.prefilters.length,
            s = w.Deferred().always((function() {
                delete l.elem
            })),
            l = function() {
                if (i) return !1;
                for (var t = tt || lt(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(r);
                return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = w.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = z(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, u.opts.specialEasing); o < a; o++)
            if (r = ft.prefilters[o].call(u, e, c, u.opts)) return p(r.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, ct, u), p(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), w.fx.timer(w.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    w.Animation = w.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            p(e) ? (t = e, e = ["*"]) : e = e.match(I);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, l, u, c, f = "width" in t || "height" in t,
                d = this,
                h = {},
                p = e.style,
                m = e.nodeType && ae(e),
                g = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, d.always((function() {
                    d.always((function() {
                        a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                    }))
                }))), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        m = !0
                    }
                    h[r] = g && g[r] || w.style(e, r)
                }
            if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
                for (r in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = Y.get(e, "display")), "none" === (c = w.css(e, "display")) && (u ? c = u : (ue([e], !0), u = e.style.display || u, c = w.css(e, "display"), ue([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === w.css(e, "float") && (l || (d.done((function() {
                        p.display = u
                    })), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    }))), l = !1, h) l || (g ? "hidden" in g && (m = g.hidden) : g = Y.access(e, "fxshow", {
                    display: u
                }), o && (g.hidden = !m), m && ue([e], !0), d.done((function() {
                    for (r in m || ue([e]), Y.remove(e, "fxshow"), h) w.style(e, r, h[r])
                }))), l = ct(m ? g[r] : 0, r, d), r in g || (g[r] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || p(e) && e,
            duration: e,
            easing: n && t || t && !p(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            p(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e),
                o = w.speed(t, n, r),
                a = function() {
                    var t = ft(this, w.extend({}, e), o);
                    (i || Y.get(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = w.timers,
                    a = Y.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a) a[i] && a[i].stop && at.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || w.dequeue(this, e)
            }))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each((function() {
                var t, n = Y.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = w.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            }))
        }
    }), w.each(["toggle", "show", "hide"], (function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
        }
    })), w.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    })), w.timers = [], w.fx.tick = function() {
        var e, t = 0,
            n = w.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), tt = void 0
    }, w.fx.timer = function(e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function() {
        nt || (nt = !0, st())
    }, w.fx.stop = function() {
        nt = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function(t, n) {
        return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        }))
    }, rt = g.createElement("input"), it = g.createElement("select").appendChild(g.createElement("option")), rt.type = "checkbox", h.checkOn = "" !== rt.value, h.optSelected = it.selected, (rt = g.createElement("input")).value = "t", rt.type = "radio", h.radioValue = "t" === rt.value;
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return W(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each((function() {
                w.removeAttr(this, e)
            }))
        }
    }), w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && k(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(I);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), dt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
        }
    }));
    var pt = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;

    function gt(e) {
        return (e.match(I) || []).join(" ")
    }

    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function yt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
    }
    w.fn.extend({
        prop: function(e, t) {
            return W(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[w.propFix[e] || e]
            }))
        }
    }), w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        w.propFix[this.toLowerCase()] = this
    })), w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a;
            return p(e) ? this.each((function(t) {
                w(this).addClass(e.call(this, t, vt(this)))
            })) : (t = yt(e)).length ? this.each((function() {
                if (r = vt(this), n = 1 === this.nodeType && " " + gt(r) + " ") {
                    for (o = 0; o < t.length; o++) i = t[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = gt(n), r !== a && this.setAttribute("class", a)
                }
            })) : this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a;
            return p(e) ? this.each((function(t) {
                w(this).removeClass(e.call(this, t, vt(this)))
            })) : arguments.length ? (t = yt(e)).length ? this.each((function() {
                if (r = vt(this), n = 1 === this.nodeType && " " + gt(r) + " ") {
                    for (o = 0; o < t.length; o++)
                        for (i = t[o]; - 1 < n.indexOf(" " + i + " ");) n = n.replace(" " + i + " ", " ");
                    a = gt(n), r !== a && this.setAttribute("class", a)
                }
            })) : this : this.attr("class", "")
        },
        toggleClass: function(e, t) {
            var n, r, i, o, a = typeof e,
                s = "string" === a || Array.isArray(e);
            return p(e) ? this.each((function(n) {
                w(this).toggleClass(e.call(this, n, vt(this), t), t)
            })) : "boolean" == typeof t && s ? t ? this.addClass(e) : this.removeClass(e) : (n = yt(e), this.each((function() {
                if (s)
                    for (o = w(this), i = 0; i < n.length; i++) r = n[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else void 0 !== e && "boolean" !== a || ((r = vt(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : Y.get(this, "__className__") || ""))
            })))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + gt(vt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = p(e), this.each((function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, (function(e) {
                    return null == e ? "" : e + ""
                }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            }))) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : gt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? o + 1 : i.length;
                    for (r = o < 0 ? l : a ? o : 0; r < l; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < w.inArray(w.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], (function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < w.inArray(w(e).val(), t)
            }
        }, h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), h.focusin = "onfocusin" in e;
    var _t = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, l, u, f, d, h, v = [r || g],
                y = c.call(t, "type") ? t.type : t,
                b = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = h = s = r = r || g, 3 !== r.nodeType && 8 !== r.nodeType && !_t.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[y] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!i && !d.noBubble && !m(r)) {
                    for (l = d.delegateType || y, _t.test(l + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), s = a;
                    s === (r.ownerDocument || g) && v.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = v[o++]) && !t.isPropagationStopped();) h = a, t.type = 1 < o ? l : d.bindType || y, (f = (Y.get(a, "events") || Object.create(null))[t.type] && Y.get(a, "handle")) && f.apply(a, n), (f = u && a[u]) && f.apply && V(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, i || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !V(r) || u && p(r[y]) && !m(r) && ((s = r[u]) && (r[u] = null), w.event.triggered = y, t.isPropagationStopped() && h.addEventListener(y, wt), r[y](), t.isPropagationStopped() && h.removeEventListener(y, wt), w.event.triggered = void 0, s && (r[u] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                w.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this,
                    i = Y.access(r, t);
                i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this,
                    i = Y.access(r, t) - 1;
                i ? Y.access(r, t, i) : (r.removeEventListener(e, n, !0), Y.remove(r, t))
            }
        }
    }));
    var Et = e.location,
        xt = {
            guid: Date.now()
        },
        Tt = /\?/;
    w.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return r = n && n.getElementsByTagName("parsererror")[0], n && !r || w.error("Invalid XML: " + (r ? w.map(r.childNodes, (function(e) {
            return e.textContent
        })).join("\n") : t)), n
    };
    var St = /\[\]$/,
        Ct = /\r?\n/g,
        kt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function Dt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, (function(t, i) {
            n || St.test(e) ? r(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }));
        else if (n || "object" !== b(t)) r(e, t);
        else
            for (i in t) Dt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = p(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function() {
            i(this.name, this.value)
        }));
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !kt.test(e) && (this.checked || !de.test(e))
            })).map((function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(Ct, "\r\n")
                }
            })).get()
        }
    });
    var Nt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Rt = {},
        Pt = {},
        Ht = "*/".concat("*"),
        Mt = g.createElement("a");

    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(I) || [];
            if (p(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Bt(e, t, n, r) {
        var i = {},
            o = e === Pt;

        function a(s) {
            var l;
            return i[s] = !0, w.each(e[s] || [], (function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
            })), l
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function Wt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }
    Mt.href = Et.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Wt(Wt(e, w.ajaxSettings), t) : Wt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Pt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, i, o, a, s, l, u, c, f, d, h = w.ajaxSetup({}, n),
                p = h.context || h,
                m = h.context && (p.nodeType || p.jquery) ? w(p) : w.event,
                v = w.Deferred(),
                y = w.Callbacks("once memory"),
                b = h.statusCode || {},
                _ = {},
                E = {},
                x = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = jt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return u ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, _[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) T.always(e[T.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return r && r.abort(t), S(0, t), this
                    }
                };
            if (v.promise(T), h.url = ((t || h.url || Et.href) + "").replace(It, Et.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""], null == h.crossDomain) {
                l = g.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Mt.protocol + "//" + Mt.host != l.protocol + "//" + l.host
                } catch (t) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Bt(Rt, h, n, T), u) return T;
            for (f in (c = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ot.test(h.type), i = h.url.replace(qt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Nt, "+")) : (d = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Tt.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Lt, "$1"), d = (Tt.test(i) ? "&" : "?") + "_=" + xt.guid++ + d), h.url = i + d), h.ifModified && (w.lastModified[i] && T.setRequestHeader("If-Modified-Since", w.lastModified[i]), w.etag[i] && T.setRequestHeader("If-None-Match", w.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]), h.headers) T.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || u)) return T.abort();
            if (x = "abort", y.add(h.complete), T.done(h.success), T.fail(h.error), r = Bt(Pt, h, n, T)) {
                if (T.readyState = 1, c && m.trigger("ajaxSend", [T, h]), u) return T;
                h.async && 0 < h.timeout && (s = e.setTimeout((function() {
                    T.abort("timeout")
                }), h.timeout));
                try {
                    u = !1, r.send(_, S)
                } catch (t) {
                    if (u) throw t;
                    S(-1, t)
                }
            } else S(-1, "No Transport");

            function S(t, n, a, l) {
                var f, d, g, _, E, x = n;
                u || (u = !0, s && e.clearTimeout(s), r = void 0, o = l || "", T.readyState = 0 < t ? 4 : 0, f = 200 <= t && t < 300 || 304 === t, a && (_ = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                l.unshift(i);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(h, T, a)), !f && -1 < w.inArray("script", h.dataTypes) && w.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), _ = function(e, t, n, r) {
                    var i, o, a, s, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = u[l + " " + o] || u["* " + o]))
                            for (i in u)
                                if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, _, T, f), f ? (h.ifModified && ((E = T.getResponseHeader("Last-Modified")) && (w.lastModified[i] = E), (E = T.getResponseHeader("etag")) && (w.etag[i] = E)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = _.state, d = _.data, f = !(g = _.error))) : (g = x, !t && x || (x = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || x) + "", f ? v.resolveWith(p, [d, x, T]) : v.rejectWith(p, [T, x, g]), T.statusCode(b), b = void 0, c && m.trigger(f ? "ajaxSuccess" : "ajaxError", [T, h, f ? d : g]), y.fireWith(p, [T, x]), c && (m.trigger("ajaxComplete", [T, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], (function(e, t) {
        w[t] = function(e, n, r, i) {
            return p(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    })), w.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    })), w._evalUrl = function(e, t, n) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                w.globalEval(e, t, n)
            }
        })
    }, w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (p(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function(e) {
            return p(e) ? this.each((function(t) {
                w(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = p(e);
            return this.each((function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                w(this).replaceWith(this.childNodes)
            })), this
        }
    }), w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ut = {
            0: 200,
            1223: 204
        },
        Qt = w.ajaxSettings.xhr();
    h.cors = !!Qt && "withCredentials" in Qt, h.ajax = Qt = !!Qt, w.ajaxTransport((function(t) {
        var n, r;
        if (h.cors || Qt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ut[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout((function() {
                        n && r()
                    }))
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (i) {
                    if (n) throw i
                }
            },
            abort: function() {
                n && n()
            }
        }
    })), w.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    })), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), w.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(r, i) {
                t = w("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), g.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    }));
    var $t, zt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || w.expando + "_" + xt.guid++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", (function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Vt, "$1" + i) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || w.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always((function() {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, zt.push(i)), a && p(o) && o(a[0]), a = o = void 0
        })), "script"
    })), h.createHTMLDocument = (($t = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === $t.childNodes.length), w.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((r = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, t.head.appendChild(r)) : t = g), o = !n && [], (i = A.exec(e)) ? [t.createElement(i[1])] : (i = be([e], t, o), o && o.length && w(o).remove(), w.merge([], i.childNodes)));
        var r, i, o
    }, w.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = gt(e.slice(s)), e = e.slice(0, s)), p(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        })).always(n && function(e, t) {
            a.each((function() {
                n.apply(this, o || [e.responseText, t, e])
            }))
        }), this
    }, w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, (function(t) {
            return e === t.elem
        })).length
    }, w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, u = w.css(e, "position"),
                c = w(e),
                f = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), o = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), p(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, w.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                w.offset.setOffset(this, e, t)
            }));
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || re
            }))
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return W(this, (function(e, r, i) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }), e, r, arguments.length)
        }
    })), w.each(["top", "left"], (function(e, t) {
        w.cssHooks[t] = Ue(h.pixelPosition, (function(e, n) {
            if (n) return n = We(e, t), Ie.test(n) ? w(e).position()[t] + "px" : n
        }))
    })), w.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return W(this, (function(t, n, i) {
                    var o;
                    return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }), t, a ? i : void 0, a)
            }
        }))
    })), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        w.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }));
    var Xt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    w.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), p(e)) return r = i.call(arguments, 2), (o = function() {
            return e.apply(t || this, r.concat(i.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, o
    }, w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = k, w.isFunction = p, w.isWindow = m, w.camelCase = z, w.type = b, w.now = Date.now, w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, w.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return w
    }));
    var Yt = e.jQuery,
        Kt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Yt), w
    }, void 0 === t && (e.jQuery = e.$ = w), w
})),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery)
}(this, (function(e, t) {
    "use strict";

    function n(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        }
    }
    var r = n(t);

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function a() {
        return a = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, a.apply(this, arguments)
    }

    function s(e, t) {
        return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e
        }, s(e, t)
    }
    var l = "transitionend";

    function u(e) {
        var t = this,
            n = !1;
        return r.default(this).one(c.TRANSITION_END, (function() {
            n = !0
        })), setTimeout((function() {
            n || c.triggerTransitionEnd(t)
        }), e), this
    }
    var c = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            do {
                e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = r.default(e).css("transition-duration"),
                n = r.default(e).css("transition-delay"),
                i = parseFloat(t),
                o = parseFloat(n);
            return i || o ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            r.default(e).trigger(l)
        },
        supportsTransitionEnd: function() {
            return Boolean(l)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var r in n)
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                    var i = n[r],
                        o = t[r],
                        a = o && c.isElement(o) ? "element" : null == (s = o) ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(i).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + i + '".')
                }
            var s
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? c.findShadowRoot(e.parentNode) : null
        },
        jQueryDetection: function() {
            if (void 0 === r.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = r.default.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    c.jQueryDetection(), r.default.fn.emulateTransitionEnd = u, r.default.event.special[c.TRANSITION_END] = {
        bindType: l,
        delegateType: l,
        handle: function(e) {
            if (r.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var f = "alert",
        d = "bs.alert",
        h = "." + d,
        p = r.default.fn[f],
        m = "close" + h,
        g = "closed" + h,
        v = "click" + h + ".data-api",
        y = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, t.dispose = function() {
                r.default.removeData(this._element, d), this._element = null
            }, t._getRootElement = function(e) {
                var t = c.getSelectorFromElement(e),
                    n = !1;
                return t && (n = document.querySelector(t)), n || (n = r.default(e).closest(".alert")[0]), n
            }, t._triggerCloseEvent = function(e) {
                var t = r.default.Event(m);
                return r.default(e).trigger(t), t
            }, t._removeElement = function(e) {
                var t = this;
                if (r.default(e).removeClass("show"), r.default(e).hasClass("fade")) {
                    var n = c.getTransitionDurationFromElement(e);
                    r.default(e).one(c.TRANSITION_END, (function(n) {
                        return t._destroyElement(e, n)
                    })).emulateTransitionEnd(n)
                } else this._destroyElement(e)
            }, t._destroyElement = function(e) {
                r.default(e).detach().trigger(g).remove()
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = r.default(this),
                        i = n.data(d);
                    i || (i = new e(this), n.data(d, i)), "close" === t && i[t](this)
                }))
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }]), e
        }();
    r.default(document).on(v, '[data-dismiss="alert"]', y._handleDismiss(new y)), r.default.fn[f] = y._jQueryInterface, r.default.fn[f].Constructor = y, r.default.fn[f].noConflict = function() {
        return r.default.fn[f] = p, y._jQueryInterface
    };
    var b = "button",
        _ = "bs.button",
        w = "." + _,
        E = ".data-api",
        x = r.default.fn[b],
        T = "active",
        S = "click" + w + E,
        C = "focus" + w + E + " blur" + w + E,
        k = "load" + w + E,
        A = '[data-toggle^="button"]',
        D = 'input:not([type="hidden"])',
        N = ".btn",
        q = function() {
            function e(e) {
                this._element = e, this.shouldAvoidTriggerChange = !1
            }
            var t = e.prototype;
            return t.toggle = function() {
                var e = !0,
                    t = !0,
                    n = r.default(this._element).closest('[data-toggle="buttons"]')[0];
                if (n) {
                    var i = this._element.querySelector(D);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(T)) e = !1;
                            else {
                                var o = n.querySelector(".active");
                                o && r.default(o).removeClass(T)
                            }
                        e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains(T)), this.shouldAvoidTriggerChange || r.default(i).trigger("change")), i.focus(), t = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), e && r.default(this._element).toggleClass(T))
            }, t.dispose = function() {
                r.default.removeData(this._element, _), this._element = null
            }, e._jQueryInterface = function(t, n) {
                return this.each((function() {
                    var i = r.default(this),
                        o = i.data(_);
                    o || (o = new e(this), i.data(_, o)), o.shouldAvoidTriggerChange = n, "toggle" === t && o[t]()
                }))
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }]), e
        }();
    r.default(document).on(S, A, (function(e) {
        var t = e.target,
            n = t;
        if (r.default(t).hasClass("btn") || (t = r.default(t).closest(N)[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
        else {
            var i = t.querySelector(D);
            if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();
            "INPUT" !== n.tagName && "LABEL" === t.tagName || q._jQueryInterface.call(r.default(t), "toggle", "INPUT" === n.tagName)
        }
    })).on(C, A, (function(e) {
        var t = r.default(e.target).closest(N)[0];
        r.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    })), r.default(window).on(k, (function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
            var r = e[t],
                i = r.querySelector(D);
            i.checked || i.hasAttribute("checked") ? r.classList.add(T) : r.classList.remove(T)
        }
        for (var o = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < a; o++) {
            var s = e[o];
            "true" === s.getAttribute("aria-pressed") ? s.classList.add(T) : s.classList.remove(T)
        }
    })), r.default.fn[b] = q._jQueryInterface, r.default.fn[b].Constructor = q, r.default.fn[b].noConflict = function() {
        return r.default.fn[b] = x, q._jQueryInterface
    };
    var L = "carousel",
        j = "bs.carousel",
        O = "." + j,
        I = ".data-api",
        R = r.default.fn[L],
        P = "active",
        H = "next",
        M = "prev",
        F = "slide" + O,
        B = "slid" + O,
        W = "keydown" + O,
        U = "mouseenter" + O,
        Q = "mouseleave" + O,
        $ = "touchstart" + O,
        z = "touchmove" + O,
        V = "touchend" + O,
        X = "pointerdown" + O,
        Y = "pointerup" + O,
        K = "dragstart" + O,
        G = "load" + O + I,
        J = "click" + O + I,
        Z = ".active.carousel-item",
        ee = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        te = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        ne = {
            TOUCH: "touch",
            PEN: "pen"
        },
        re = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var t = e.prototype;
            return t.next = function() {
                this._isSliding || this._slide(H)
            }, t.nextWhenVisible = function() {
                var e = r.default(this._element);
                !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
            }, t.prev = function() {
                this._isSliding || this._slide(M)
            }, t.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function(e) {
                var t = this;
                this._activeElement = this._element.querySelector(Z);
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) r.default(this._element).one(B, (function() {
                        return t.to(e)
                    }));
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        var i = e > n ? H : M;
                        this._slide(i, this._items[e])
                    }
            }, t.dispose = function() {
                r.default(this._element).off(O), r.default.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function(e) {
                return e = a({}, ee, e), c.typeCheckConfig(L, e, te), e
            }, t._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                }
            }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && r.default(this._element).on(W, (function(t) {
                    return e._keydown(t)
                })), "hover" === this._config.pause && r.default(this._element).on(U, (function(t) {
                    return e.pause(t)
                })).on(Q, (function(t) {
                    return e.cycle(t)
                })), this._config.touch && this._addTouchEventListeners()
            }, t._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var t = function(t) {
                            e._pointerEvent && ne[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        n = function(t) {
                            e._pointerEvent && ne[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function(t) {
                                return e.cycle(t)
                            }), 500 + e._config.interval))
                        };
                    r.default(this._element.querySelectorAll(".carousel-item img")).on(K, (function(e) {
                        return e.preventDefault()
                    })), this._pointerEvent ? (r.default(this._element).on(X, (function(e) {
                        return t(e)
                    })), r.default(this._element).on(Y, (function(e) {
                        return n(e)
                    })), this._element.classList.add("pointer-event")) : (r.default(this._element).on($, (function(e) {
                        return t(e)
                    })), r.default(this._element).on(z, (function(t) {
                        return function(t) {
                            e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    })), r.default(this._element).on(V, (function(e) {
                        return n(e)
                    })))
                }
            }, t._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, t._getItemByDirection = function(e, t) {
                var n = e === H,
                    r = e === M,
                    i = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((r && 0 === i || n && i === o) && !this._config.wrap) return t;
                var a = (i + (e === M ? -1 : 1)) % this._items.length;
                return -1 === a ? this._items[this._items.length - 1] : this._items[a]
            }, t._triggerSlideEvent = function(e, t) {
                var n = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(Z)),
                    o = r.default.Event(F, {
                        relatedTarget: e,
                        direction: t,
                        from: i,
                        to: n
                    });
                return r.default(this._element).trigger(o), o
            }, t._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    r.default(t).removeClass(P);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && r.default(n).addClass(P)
                }
            }, t._updateInterval = function() {
                var e = this._activeElement || this._element.querySelector(Z);
                if (e) {
                    var t = parseInt(e.getAttribute("data-interval"), 10);
                    t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
                }
            }, t._slide = function(e, t) {
                var n, i, o, a = this,
                    s = this._element.querySelector(Z),
                    l = this._getItemIndex(s),
                    u = t || s && this._getItemByDirection(e, s),
                    f = this._getItemIndex(u),
                    d = Boolean(this._interval);
                if (e === H ? (n = "carousel-item-left", i = "carousel-item-next", o = "left") : (n = "carousel-item-right", i = "carousel-item-prev", o = "right"), u && r.default(u).hasClass(P)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && s && u) {
                    this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(u), this._activeElement = u;
                    var h = r.default.Event(B, {
                        relatedTarget: u,
                        direction: o,
                        from: l,
                        to: f
                    });
                    if (r.default(this._element).hasClass("slide")) {
                        r.default(u).addClass(i), c.reflow(u), r.default(s).addClass(n), r.default(u).addClass(n);
                        var p = c.getTransitionDurationFromElement(s);
                        r.default(s).one(c.TRANSITION_END, (function() {
                            r.default(u).removeClass(n + " " + i).addClass(P), r.default(s).removeClass(P + " " + i + " " + n), a._isSliding = !1, setTimeout((function() {
                                return r.default(a._element).trigger(h)
                            }), 0)
                        })).emulateTransitionEnd(p)
                    } else r.default(s).removeClass(P), r.default(u).addClass(P), this._isSliding = !1, r.default(this._element).trigger(h);
                    d && this.cycle()
                }
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = r.default(this).data(j),
                        i = a({}, ee, r.default(this).data());
                    "object" == typeof t && (i = a({}, i, t));
                    var o = "string" == typeof t ? t : i.slide;
                    if (n || (n = new e(this, i), r.default(this).data(j, n)), "number" == typeof t) n.to(t);
                    else if ("string" == typeof o) {
                        if (void 0 === n[o]) throw new TypeError('No method named "' + o + '"');
                        n[o]()
                    } else i.interval && i.ride && (n.pause(), n.cycle())
                }))
            }, e._dataApiClickHandler = function(t) {
                var n = c.getSelectorFromElement(this);
                if (n) {
                    var i = r.default(n)[0];
                    if (i && r.default(i).hasClass("carousel")) {
                        var o = a({}, r.default(i).data(), r.default(this).data()),
                            s = this.getAttribute("data-slide-to");
                        s && (o.interval = !1), e._jQueryInterface.call(r.default(i), o), s && r.default(i).data(j).to(s), t.preventDefault()
                    }
                }
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "Default",
                get: function() {
                    return ee
                }
            }]), e
        }();
    r.default(document).on(J, "[data-slide], [data-slide-to]", re._dataApiClickHandler), r.default(window).on(G, (function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var i = r.default(e[t]);
            re._jQueryInterface.call(i, i.data())
        }
    })), r.default.fn[L] = re._jQueryInterface, r.default.fn[L].Constructor = re, r.default.fn[L].noConflict = function() {
        return r.default.fn[L] = R, re._jQueryInterface
    };
    var ie = "collapse",
        oe = "bs.collapse",
        ae = "." + oe,
        se = r.default.fn[ie],
        le = "show",
        ue = "collapse",
        ce = "collapsing",
        fe = "collapsed",
        de = "width",
        he = "show" + ae,
        pe = "shown" + ae,
        me = "hide" + ae,
        ge = "hidden" + ae,
        ve = "click" + ae + ".data-api",
        ye = '[data-toggle="collapse"]',
        be = {
            toggle: !0,
            parent: ""
        },
        _e = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        we = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(ye)), r = 0, i = n.length; r < i; r++) {
                    var o = n[r],
                        a = c.getSelectorFromElement(o),
                        s = [].slice.call(document.querySelectorAll(a)).filter((function(t) {
                            return t === e
                        }));
                    null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = e.prototype;
            return t.toggle = function() {
                r.default(this._element).hasClass(le) ? this.hide() : this.show()
            }, t.show = function() {
                var t, n, i = this;
                if (!this._isTransitioning && !r.default(this._element).hasClass(le) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e) {
                        return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains(ue)
                    }))).length && (t = null), !(t && (n = r.default(t).not(this._selector).data(oe)) && n._isTransitioning))) {
                    var o = r.default.Event(he);
                    if (r.default(this._element).trigger(o), !o.isDefaultPrevented()) {
                        t && (e._jQueryInterface.call(r.default(t).not(this._selector), "hide"), n || r.default(t).data(oe, null));
                        var a = this._getDimension();
                        r.default(this._element).removeClass(ue).addClass(ce), this._element.style[a] = 0, this._triggerArray.length && r.default(this._triggerArray).removeClass(fe).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                            l = c.getTransitionDurationFromElement(this._element);
                        r.default(this._element).one(c.TRANSITION_END, (function() {
                            r.default(i._element).removeClass(ce).addClass(ue + " " + le), i._element.style[a] = "", i.setTransitioning(!1), r.default(i._element).trigger(pe)
                        })).emulateTransitionEnd(l), this._element.style[a] = this._element[s] + "px"
                    }
                }
            }, t.hide = function() {
                var e = this;
                if (!this._isTransitioning && r.default(this._element).hasClass(le)) {
                    var t = r.default.Event(me);
                    if (r.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", c.reflow(this._element), r.default(this._element).addClass(ce).removeClass(ue + " " + le);
                        var i = this._triggerArray.length;
                        if (i > 0)
                            for (var o = 0; o < i; o++) {
                                var a = this._triggerArray[o],
                                    s = c.getSelectorFromElement(a);
                                if (null !== s) r.default([].slice.call(document.querySelectorAll(s))).hasClass(le) || r.default(a).addClass(fe).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var l = c.getTransitionDurationFromElement(this._element);
                        r.default(this._element).one(c.TRANSITION_END, (function() {
                            e.setTransitioning(!1), r.default(e._element).removeClass(ce).addClass(ue).trigger(ge)
                        })).emulateTransitionEnd(l)
                    }
                }
            }, t.setTransitioning = function(e) {
                this._isTransitioning = e
            }, t.dispose = function() {
                r.default.removeData(this._element, oe), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function(e) {
                return (e = a({}, be, e)).toggle = Boolean(e.toggle), c.typeCheckConfig(ie, e, _e), e
            }, t._getDimension = function() {
                return r.default(this._element).hasClass(de) ? de : "height"
            }, t._getParent = function() {
                var t, n = this;
                c.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    o = [].slice.call(t.querySelectorAll(i));
                return r.default(o).each((function(t, r) {
                    n._addAriaAndCollapsedClass(e._getTargetFromElement(r), [r])
                })), t
            }, t._addAriaAndCollapsedClass = function(e, t) {
                var n = r.default(e).hasClass(le);
                t.length && r.default(t).toggleClass(fe, !n).attr("aria-expanded", n)
            }, e._getTargetFromElement = function(e) {
                var t = c.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = r.default(this),
                        i = n.data(oe),
                        o = a({}, be, n.data(), "object" == typeof t && t ? t : {});
                    if (!i && o.toggle && "string" == typeof t && /show|hide/.test(t) && (o.toggle = !1), i || (i = new e(this, o), n.data(oe, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                }))
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "Default",
                get: function() {
                    return be
                }
            }]), e
        }();
    r.default(document).on(ve, ye, (function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var t = r.default(this),
            n = c.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(n));
        r.default(i).each((function() {
            var e = r.default(this),
                n = e.data(oe) ? "toggle" : t.data();
            we._jQueryInterface.call(e, n)
        }))
    })), r.default.fn[ie] = we._jQueryInterface, r.default.fn[ie].Constructor = we, r.default.fn[ie].noConflict = function() {
        return r.default.fn[ie] = se, we._jQueryInterface
    };
    var Ee = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        xe = function() {
            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                if (Ee && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
            return 0
        }();
    var Te = Ee && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0, window.Promise.resolve().then((function() {
                t = !1, e()
            })))
        }
    } : function(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout((function() {
                t = !1, e()
            }), xe))
        }
    };

    function Se(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function Ce(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function ke(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function Ae(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = Ce(e),
            n = t.overflow,
            r = t.overflowX,
            i = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + i + r) ? e : Ae(ke(e))
    }

    function De(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    var Ne = Ee && !(!window.MSInputMethodContext || !document.documentMode),
        qe = Ee && /MSIE 10/.test(navigator.userAgent);

    function Le(e) {
        return 11 === e ? Ne : 10 === e ? qe : Ne || qe
    }

    function je(e) {
        if (!e) return document.documentElement;
        for (var t = Le(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var r = n && n.nodeName;
        return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === Ce(n, "position") ? je(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function Oe(e) {
        return null !== e.parentNode ? Oe(e.parentNode) : e
    }

    function Ie(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            r = n ? e : t,
            i = n ? t : e,
            o = document.createRange();
        o.setStart(r, 0), o.setEnd(i, 0);
        var a, s, l = o.commonAncestorContainer;
        if (e !== l && t !== l || r.contains(i)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && je(a.firstElementChild) !== a ? je(l) : l;
        var u = Oe(e);
        return u.host ? Ie(u.host, t) : Ie(e, Oe(t).host)
    }

    function Re(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === t ? "scrollTop" : "scrollLeft",
            r = e.nodeName;
        if ("BODY" === r || "HTML" === r) {
            var i = e.ownerDocument.documentElement,
                o = e.ownerDocument.scrollingElement || i;
            return o[n]
        }
        return e[n]
    }

    function Pe(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = Re(t, "top"),
            i = Re(t, "left"),
            o = n ? -1 : 1;
        return e.top += r * o, e.bottom += r * o, e.left += i * o, e.right += i * o, e
    }

    function He(e, t) {
        var n = "x" === t ? "Left" : "Top",
            r = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"])
    }

    function Me(e, t, n, r) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Le(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function Fe(e) {
        var t = e.body,
            n = e.documentElement,
            r = Le(10) && getComputedStyle(n);
        return {
            height: Me("Height", t, n, r),
            width: Me("Width", t, n, r)
        }
    }
    var Be = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        We = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        Ue = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        Qe = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };

    function $e(e) {
        return Qe({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function ze(e) {
        var t = {};
        try {
            if (Le(10)) {
                t = e.getBoundingClientRect();
                var n = Re(e, "top"),
                    r = Re(e, "left");
                t.top += n, t.left += r, t.bottom += n, t.right += r
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var i = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            o = "HTML" === e.nodeName ? Fe(e.ownerDocument) : {},
            a = o.width || e.clientWidth || i.width,
            s = o.height || e.clientHeight || i.height,
            l = e.offsetWidth - a,
            u = e.offsetHeight - s;
        if (l || u) {
            var c = Ce(e);
            l -= He(c, "x"), u -= He(c, "y"), i.width -= l, i.height -= u
        }
        return $e(i)
    }

    function Ve(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = Le(10),
            i = "HTML" === t.nodeName,
            o = ze(e),
            a = ze(t),
            s = Ae(e),
            l = Ce(t),
            u = parseFloat(l.borderTopWidth),
            c = parseFloat(l.borderLeftWidth);
        n && i && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
        var f = $e({
            top: o.top - a.top - u,
            left: o.left - a.left - c,
            width: o.width,
            height: o.height
        });
        if (f.marginTop = 0, f.marginLeft = 0, !r && i) {
            var d = parseFloat(l.marginTop),
                h = parseFloat(l.marginLeft);
            f.top -= u - d, f.bottom -= u - d, f.left -= c - h, f.right -= c - h, f.marginTop = d, f.marginLeft = h
        }
        return (r && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (f = Pe(f, t)), f
    }

    function Xe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            r = Ve(e, n),
            i = Math.max(n.clientWidth, window.innerWidth || 0),
            o = Math.max(n.clientHeight, window.innerHeight || 0),
            a = t ? 0 : Re(n),
            s = t ? 0 : Re(n, "left"),
            l = {
                top: a - r.top + r.marginTop,
                left: s - r.left + r.marginLeft,
                width: i,
                height: o
            };
        return $e(l)
    }

    function Ye(e) {
        var t = e.nodeName;
        if ("BODY" === t || "HTML" === t) return !1;
        if ("fixed" === Ce(e, "position")) return !0;
        var n = ke(e);
        return !!n && Ye(n)
    }

    function Ke(e) {
        if (!e || !e.parentElement || Le()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === Ce(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function Ge(e, t, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = {
                top: 0,
                left: 0
            },
            a = i ? Ke(e) : Ie(e, De(t));
        if ("viewport" === r) o = Xe(a, i);
        else {
            var s = void 0;
            "scrollParent" === r ? "BODY" === (s = Ae(ke(t))).nodeName && (s = e.ownerDocument.documentElement) : s = "window" === r ? e.ownerDocument.documentElement : r;
            var l = Ve(s, a, i);
            if ("HTML" !== s.nodeName || Ye(a)) o = l;
            else {
                var u = Fe(e.ownerDocument),
                    c = u.height,
                    f = u.width;
                o.top += l.top - l.marginTop, o.bottom = c + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left
            }
        }
        var d = "number" == typeof(n = n || 0);
        return o.left += d ? n : n.left || 0, o.top += d ? n : n.top || 0, o.right -= d ? n : n.right || 0, o.bottom -= d ? n : n.bottom || 0, o
    }

    function Je(e) {
        return e.width * e.height
    }

    function Ze(e, t, n, r, i) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = Ge(n, r, o, i),
            s = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            },
            l = Object.keys(s).map((function(e) {
                return Qe({
                    key: e
                }, s[e], {
                    area: Je(s[e])
                })
            })).sort((function(e, t) {
                return t.area - e.area
            })),
            u = l.filter((function(e) {
                var t = e.width,
                    r = e.height;
                return t >= n.clientWidth && r >= n.clientHeight
            })),
            c = u.length > 0 ? u[0].key : l[0].key,
            f = e.split("-")[1];
        return c + (f ? "-" + f : "")
    }

    function et(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = r ? Ke(t) : Ie(t, De(n));
        return Ve(n, i, r)
    }

    function tt(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + r,
            height: e.offsetHeight + n
        }
    }

    function nt(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, (function(e) {
            return t[e]
        }))
    }

    function rt(e, t, n) {
        n = n.split("-")[0];
        var r = tt(e),
            i = {
                width: r.width,
                height: r.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            a = o ? "top" : "left",
            s = o ? "left" : "top",
            l = o ? "height" : "width",
            u = o ? "width" : "height";
        return i[a] = t[a] + t[l] / 2 - r[l] / 2, i[s] = n === s ? t[s] - r[u] : t[nt(s)], i
    }

    function it(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function ot(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex((function(e) {
                return e[t] === n
            }));
            var r = it(e, (function(e) {
                return e[t] === n
            }));
            return e.indexOf(r)
        }(e, "name", n))).forEach((function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && Se(n) && (t.offsets.popper = $e(t.offsets.popper), t.offsets.reference = $e(t.offsets.reference), t = n(t, e))
        })), t
    }

    function at() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = et(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = Ze(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = rt(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = ot(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function st(e, t) {
        return e.some((function(e) {
            var n = e.name;
            return e.enabled && n === t
        }))
    }

    function lt(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
            var i = t[r],
                o = i ? "" + i + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function ut() {
        return this.state.isDestroyed = !0, st(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[lt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function ct(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function ft(e, t, n, r) {
        var i = "BODY" === e.nodeName,
            o = i ? e.ownerDocument.defaultView : e;
        o.addEventListener(t, n, {
            passive: !0
        }), i || ft(Ae(o.parentNode), t, n, r), r.push(o)
    }

    function dt(e, t, n, r) {
        n.updateBound = r, ct(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var i = Ae(e);
        return ft(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
    }

    function ht() {
        this.state.eventsEnabled || (this.state = dt(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function pt() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, ct(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
            e.removeEventListener("scroll", t.updateBound)
        })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function mt(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function gt(e, t) {
        Object.keys(t).forEach((function(n) {
            var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && mt(t[n]) && (r = "px"), e.style[n] = t[n] + r
        }))
    }
    var vt = Ee && /Firefox/i.test(navigator.userAgent);

    function yt(e, t, n) {
        var r = it(e, (function(e) {
                return e.name === t
            })),
            i = !!r && e.some((function(e) {
                return e.name === n && e.enabled && e.order < r.order
            }));
        if (!i) {
            var o = "`" + t + "`",
                a = "`" + n + "`";
            console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return i
    }
    var bt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        _t = bt.slice(3);

    function wt(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = _t.indexOf(e),
            r = _t.slice(n + 1).concat(_t.slice(0, n));
        return t ? r.reverse() : r
    }
    var Et = "flip",
        xt = "clockwise",
        Tt = "counterclockwise";

    function St(e, t, n, r) {
        var i = [0, 0],
            o = -1 !== ["right", "left"].indexOf(r),
            a = e.split(/(\+|\-)/).map((function(e) {
                return e.trim()
            })),
            s = a.indexOf(it(a, (function(e) {
                return -1 !== e.search(/,|\s/)
            })));
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
        return u = u.map((function(e, r) {
            var i = (1 === r ? !o : o) ? "height" : "width",
                a = !1;
            return e.reduce((function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
            }), []).map((function(e) {
                return function(e, t, n, r) {
                    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +i[1],
                        a = i[2];
                    if (!o) return e;
                    if (0 === a.indexOf("%")) {
                        return $e("%p" === a ? n : r)[t] / 100 * o
                    }
                    if ("vh" === a || "vw" === a) return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    return o
                }(e, i, t, n)
            }))
        })), u.forEach((function(e, t) {
            e.forEach((function(n, r) {
                mt(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1))
            }))
        })), i
    }
    var Ct = {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        r = t.split("-")[1];
                    if (r) {
                        var i = e.offsets,
                            o = i.reference,
                            a = i.popper,
                            s = -1 !== ["bottom", "top"].indexOf(n),
                            l = s ? "left" : "top",
                            u = s ? "width" : "height",
                            c = {
                                start: Ue({}, l, o[l]),
                                end: Ue({}, l, o[l] + o[u] - a[u])
                            };
                        e.offsets.popper = Qe({}, a, c[r])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.offset,
                        r = e.placement,
                        i = e.offsets,
                        o = i.popper,
                        a = i.reference,
                        s = r.split("-")[0],
                        l = void 0;
                    return l = mt(+n) ? [+n, 0] : St(n, o, a, s), "left" === s ? (o.top += l[0], o.left -= l[1]) : "right" === s ? (o.top += l[0], o.left += l[1]) : "top" === s ? (o.left += l[0], o.top -= l[1]) : "bottom" === s && (o.left += l[0], o.top += l[1]), e.popper = o, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || je(e.instance.popper);
                    e.instance.reference === n && (n = je(n));
                    var r = lt("transform"),
                        i = e.instance.popper.style,
                        o = i.top,
                        a = i.left,
                        s = i[r];
                    i.top = "", i.left = "", i[r] = "";
                    var l = Ge(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    i.top = o, i.left = a, i[r] = s, t.boundaries = l;
                    var u = t.priority,
                        c = e.offsets.popper,
                        f = {
                            primary: function(e) {
                                var n = c[e];
                                return c[e] < l[e] && !t.escapeWithReference && (n = Math.max(c[e], l[e])), Ue({}, e, n)
                            },
                            secondary: function(e) {
                                var n = "right" === e ? "left" : "top",
                                    r = c[n];
                                return c[e] > l[e] && !t.escapeWithReference && (r = Math.min(c[n], l[e] - ("right" === e ? c.width : c.height))), Ue({}, n, r)
                            }
                        };
                    return u.forEach((function(e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        c = Qe({}, c, f[t](e))
                    })), e.offsets.popper = c, e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        n = t.popper,
                        r = t.reference,
                        i = e.placement.split("-")[0],
                        o = Math.floor,
                        a = -1 !== ["top", "bottom"].indexOf(i),
                        s = a ? "right" : "bottom",
                        l = a ? "left" : "top",
                        u = a ? "width" : "height";
                    return n[s] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[u]), n[l] > o(r[s]) && (e.offsets.popper[l] = o(r[s])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    var n;
                    if (!yt(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var r = t.element;
                    if ("string" == typeof r) {
                        if (!(r = e.instance.popper.querySelector(r))) return e
                    } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var i = e.placement.split("-")[0],
                        o = e.offsets,
                        a = o.popper,
                        s = o.reference,
                        l = -1 !== ["left", "right"].indexOf(i),
                        u = l ? "height" : "width",
                        c = l ? "Top" : "Left",
                        f = c.toLowerCase(),
                        d = l ? "left" : "top",
                        h = l ? "bottom" : "right",
                        p = tt(r)[u];
                    s[h] - p < a[f] && (e.offsets.popper[f] -= a[f] - (s[h] - p)), s[f] + p > a[h] && (e.offsets.popper[f] += s[f] + p - a[h]), e.offsets.popper = $e(e.offsets.popper);
                    var m = s[f] + s[u] / 2 - p / 2,
                        g = Ce(e.instance.popper),
                        v = parseFloat(g["margin" + c]),
                        y = parseFloat(g["border" + c + "Width"]),
                        b = m - e.offsets.popper[f] - v - y;
                    return b = Math.max(Math.min(a[u] - p, b), 0), e.arrowElement = r, e.offsets.arrow = (Ue(n = {}, f, Math.round(b)), Ue(n, d, ""), n), e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (st(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = Ge(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        r = e.placement.split("-")[0],
                        i = nt(r),
                        o = e.placement.split("-")[1] || "",
                        a = [];
                    switch (t.behavior) {
                        case Et:
                            a = [r, i];
                            break;
                        case xt:
                            a = wt(r);
                            break;
                        case Tt:
                            a = wt(r, !0);
                            break;
                        default:
                            a = t.behavior
                    }
                    return a.forEach((function(s, l) {
                        if (r !== s || a.length === l + 1) return e;
                        r = e.placement.split("-")[0], i = nt(r);
                        var u = e.offsets.popper,
                            c = e.offsets.reference,
                            f = Math.floor,
                            d = "left" === r && f(u.right) > f(c.left) || "right" === r && f(u.left) < f(c.right) || "top" === r && f(u.bottom) > f(c.top) || "bottom" === r && f(u.top) < f(c.bottom),
                            h = f(u.left) < f(n.left),
                            p = f(u.right) > f(n.right),
                            m = f(u.top) < f(n.top),
                            g = f(u.bottom) > f(n.bottom),
                            v = "left" === r && h || "right" === r && p || "top" === r && m || "bottom" === r && g,
                            y = -1 !== ["top", "bottom"].indexOf(r),
                            b = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && m || !y && "end" === o && g),
                            _ = !!t.flipVariationsByContent && (y && "start" === o && p || y && "end" === o && h || !y && "start" === o && g || !y && "end" === o && m),
                            w = b || _;
                        (d || v || w) && (e.flipped = !0, (d || v) && (r = a[l + 1]), w && (o = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(o)), e.placement = r + (o ? "-" + o : ""), e.offsets.popper = Qe({}, e.offsets.popper, rt(e.instance.popper, e.offsets.reference, e.placement)), e = ot(e.instance.modifiers, e, "flip"))
                    })), e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        r = e.offsets,
                        i = r.popper,
                        o = r.reference,
                        a = -1 !== ["left", "right"].indexOf(n),
                        s = -1 === ["top", "left"].indexOf(n);
                    return i[a ? "left" : "top"] = o[n] - (s ? i[a ? "width" : "height"] : 0), e.placement = nt(t), e.offsets.popper = $e(i), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!yt(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference,
                        n = it(e.instance.modifiers, (function(e) {
                            return "preventOverflow" === e.name
                        })).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x,
                        r = t.y,
                        i = e.offsets.popper,
                        o = it(e.instance.modifiers, (function(e) {
                            return "applyStyle" === e.name
                        })).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a = void 0 !== o ? o : t.gpuAcceleration,
                        s = je(e.instance.popper),
                        l = ze(s),
                        u = {
                            position: i.position
                        },
                        c = function(e, t) {
                            var n = e.offsets,
                                r = n.popper,
                                i = n.reference,
                                o = Math.round,
                                a = Math.floor,
                                s = function(e) {
                                    return e
                                },
                                l = o(i.width),
                                u = o(r.width),
                                c = -1 !== ["left", "right"].indexOf(e.placement),
                                f = -1 !== e.placement.indexOf("-"),
                                d = t ? c || f || l % 2 == u % 2 ? o : a : s,
                                h = t ? o : s;
                            return {
                                left: d(l % 2 == 1 && u % 2 == 1 && !f && t ? r.left - 1 : r.left),
                                top: h(r.top),
                                bottom: h(r.bottom),
                                right: d(r.right)
                            }
                        }(e, window.devicePixelRatio < 2 || !vt),
                        f = "bottom" === n ? "top" : "bottom",
                        d = "right" === r ? "left" : "right",
                        h = lt("transform"),
                        p = void 0,
                        m = void 0;
                    if (m = "bottom" === f ? "HTML" === s.nodeName ? -s.clientHeight + c.bottom : -l.height + c.bottom : c.top, p = "right" === d ? "HTML" === s.nodeName ? -s.clientWidth + c.right : -l.width + c.right : c.left, a && h) u[h] = "translate3d(" + p + "px, " + m + "px, 0)", u[f] = 0, u[d] = 0, u.willChange = "transform";
                    else {
                        var g = "bottom" === f ? -1 : 1,
                            v = "right" === d ? -1 : 1;
                        u[f] = m * g, u[d] = p * v, u.willChange = f + ", " + d
                    }
                    var y = {
                        "x-placement": e.placement
                    };
                    return e.attributes = Qe({}, y, e.attributes), e.styles = Qe({}, u, e.styles), e.arrowStyles = Qe({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    var t, n;
                    return gt(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function(e) {
                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                    })), e.arrowElement && Object.keys(e.arrowStyles).length && gt(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, n, r, i) {
                    var o = et(i, t, e, n.positionFixed),
                        a = Ze(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", a), gt(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        },
        kt = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: Ct
        },
        At = function() {
            function e(t, n) {
                var r = this,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Be(this, e), this.scheduleUpdate = function() {
                    return requestAnimationFrame(r.update)
                }, this.update = Te(this.update.bind(this)), this.options = Qe({}, e.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(Qe({}, e.Defaults.modifiers, i.modifiers)).forEach((function(t) {
                    r.options.modifiers[t] = Qe({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
                })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                    return Qe({
                        name: e
                    }, r.options.modifiers[e])
                })).sort((function(e, t) {
                    return e.order - t.order
                })), this.modifiers.forEach((function(e) {
                    e.enabled && Se(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                })), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }
            return We(e, [{
                key: "update",
                value: function() {
                    return at.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return ut.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return ht.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return pt.call(this)
                }
            }]), e
        }();
    At.Utils = ("undefined" != typeof window ? window : global).PopperUtils, At.placements = bt, At.Defaults = kt;
    var Dt = At,
        Nt = "dropdown",
        qt = "bs.dropdown",
        Lt = "." + qt,
        jt = ".data-api",
        Ot = r.default.fn[Nt],
        It = new RegExp("38|40|27"),
        Rt = "disabled",
        Pt = "show",
        Ht = "dropdown-menu-right",
        Mt = "hide" + Lt,
        Ft = "hidden" + Lt,
        Bt = "show" + Lt,
        Wt = "shown" + Lt,
        Ut = "click" + Lt,
        Qt = "click" + Lt + jt,
        $t = "keydown" + Lt + jt,
        zt = "keyup" + Lt + jt,
        Vt = '[data-toggle="dropdown"]',
        Xt = ".dropdown-menu",
        Yt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        Kt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        Gt = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = e.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !r.default(this._element).hasClass(Rt)) {
                    var t = r.default(this._menu).hasClass(Pt);
                    e._clearMenus(), t || this.show(!0)
                }
            }, t.show = function(t) {
                if (void 0 === t && (t = !1), !(this._element.disabled || r.default(this._element).hasClass(Rt) || r.default(this._menu).hasClass(Pt))) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = r.default.Event(Bt, n),
                        o = e._getParentFromElement(this._element);
                    if (r.default(o).trigger(i), !i.isDefaultPrevented()) {
                        if (!this._inNavbar && t) {
                            if (void 0 === Dt) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            var a = this._element;
                            "parent" === this._config.reference ? a = o : c.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && r.default(o).addClass("position-static"), this._popper = new Dt(a, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === r.default(o).closest(".navbar-nav").length && r.default(document.body).children().on("mouseover", null, r.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), r.default(this._menu).toggleClass(Pt), r.default(o).toggleClass(Pt).trigger(r.default.Event(Wt, n))
                    }
                }
            }, t.hide = function() {
                if (!this._element.disabled && !r.default(this._element).hasClass(Rt) && r.default(this._menu).hasClass(Pt)) {
                    var t = {
                            relatedTarget: this._element
                        },
                        n = r.default.Event(Mt, t),
                        i = e._getParentFromElement(this._element);
                    r.default(i).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), r.default(this._menu).toggleClass(Pt), r.default(i).toggleClass(Pt).trigger(r.default.Event(Ft, t)))
                }
            }, t.dispose = function() {
                r.default.removeData(this._element, qt), r.default(this._element).off(Lt), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function() {
                var e = this;
                r.default(this._element).on(Ut, (function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                }))
            }, t._getConfig = function(e) {
                return e = a({}, this.constructor.Default, r.default(this._element).data(), e), c.typeCheckConfig(Nt, e, this.constructor.DefaultType), e
            }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(Xt))
                }
                return this._menu
            }, t._getPlacement = function() {
                var e = r.default(this._element.parentNode),
                    t = "bottom-start";
                return e.hasClass("dropup") ? t = r.default(this._menu).hasClass(Ht) ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : r.default(this._menu).hasClass(Ht) && (t = "bottom-end"), t
            }, t._detectNavbar = function() {
                return r.default(this._element).closest(".navbar").length > 0
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = a({}, t.offsets, e._config.offset(t.offsets, e._element)), t
                } : t.offset = this._config.offset, t
            }, t._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), a({}, e, this._config.popperConfig)
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = r.default(this).data(qt);
                    if (n || (n = new e(this, "object" == typeof t ? t : null), r.default(this).data(qt, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                }))
            }, e._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var n = [].slice.call(document.querySelectorAll(Vt)), i = 0, o = n.length; i < o; i++) {
                        var a = e._getParentFromElement(n[i]),
                            s = r.default(n[i]).data(qt),
                            l = {
                                relatedTarget: n[i]
                            };
                        if (t && "click" === t.type && (l.clickEvent = t), s) {
                            var u = s._menu;
                            if (r.default(a).hasClass(Pt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && r.default.contains(a, t.target))) {
                                var c = r.default.Event(Mt, l);
                                r.default(a).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop), n[i].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), r.default(u).removeClass(Pt), r.default(a).removeClass(Pt).trigger(r.default.Event(Ft, l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, n = c.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function(t) {
                if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || r.default(t.target).closest(Xt).length) : !It.test(t.which)) && !this.disabled && !r.default(this).hasClass(Rt)) {
                    var n = e._getParentFromElement(this),
                        i = r.default(n).hasClass(Pt);
                    if (i || 27 !== t.which) {
                        if (t.preventDefault(), t.stopPropagation(), !i || 27 === t.which || 32 === t.which) return 27 === t.which && r.default(n.querySelector(Vt)).trigger("focus"), void r.default(this).trigger("click");
                        var o = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(e) {
                            return r.default(e).is(":visible")
                        }));
                        if (0 !== o.length) {
                            var a = o.indexOf(t.target);
                            38 === t.which && a > 0 && a--, 40 === t.which && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus()
                        }
                    }
                }
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "Default",
                get: function() {
                    return Yt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Kt
                }
            }]), e
        }();
    r.default(document).on($t, Vt, Gt._dataApiKeydownHandler).on($t, Xt, Gt._dataApiKeydownHandler).on(Qt + " " + zt, Gt._clearMenus).on(Qt, Vt, (function(e) {
        e.preventDefault(), e.stopPropagation(), Gt._jQueryInterface.call(r.default(this), "toggle")
    })).on(Qt, ".dropdown form", (function(e) {
        e.stopPropagation()
    })), r.default.fn[Nt] = Gt._jQueryInterface, r.default.fn[Nt].Constructor = Gt, r.default.fn[Nt].noConflict = function() {
        return r.default.fn[Nt] = Ot, Gt._jQueryInterface
    };
    var Jt = "modal",
        Zt = "bs.modal",
        en = "." + Zt,
        tn = r.default.fn[Jt],
        nn = "modal-open",
        rn = "fade",
        on = "show",
        an = "modal-static",
        sn = "hide" + en,
        ln = "hidePrevented" + en,
        un = "hidden" + en,
        cn = "show" + en,
        fn = "shown" + en,
        dn = "focusin" + en,
        hn = "resize" + en,
        pn = "click.dismiss" + en,
        mn = "keydown.dismiss" + en,
        gn = "mouseup.dismiss" + en,
        vn = "mousedown.dismiss" + en,
        yn = "click" + en + ".data-api",
        bn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        _n = ".sticky-top",
        wn = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        En = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        xn = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var t = e.prototype;
            return t.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, t.show = function(e) {
                var t = this;
                if (!this._isShown && !this._isTransitioning) {
                    var n = r.default.Event(cn, {
                        relatedTarget: e
                    });
                    r.default(this._element).trigger(n), n.isDefaultPrevented() || (this._isShown = !0, r.default(this._element).hasClass(rn) && (this._isTransitioning = !0), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), r.default(this._element).on(pn, '[data-dismiss="modal"]', (function(e) {
                        return t.hide(e)
                    })), r.default(this._dialog).on(vn, (function() {
                        r.default(t._element).one(gn, (function(e) {
                            r.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function() {
                        return t._showElement(e)
                    })))
                }
            }, t.hide = function(e) {
                var t = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = r.default.Event(sn);
                    if (r.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = r.default(this._element).hasClass(rn);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), r.default(document).off(dn), r.default(this._element).removeClass(on), r.default(this._element).off(pn), r.default(this._dialog).off(vn), i) {
                            var o = c.getTransitionDurationFromElement(this._element);
                            r.default(this._element).one(c.TRANSITION_END, (function(e) {
                                return t._hideModal(e)
                            })).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() {
                [window, this._element, this._dialog].forEach((function(e) {
                    return r.default(e).off(en)
                })), r.default(document).off(dn), r.default.removeData(this._element, Zt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, t.handleUpdate = function() {
                this._adjustDialog()
            }, t._getConfig = function(e) {
                return e = a({}, wn, e), c.typeCheckConfig(Jt, e, En), e
            }, t._triggerBackdropTransition = function() {
                var e = this,
                    t = r.default.Event(ln);
                if (r.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var n = this._element.scrollHeight > document.documentElement.clientHeight;
                    n || (this._element.style.overflowY = "hidden"), this._element.classList.add(an);
                    var i = c.getTransitionDurationFromElement(this._dialog);
                    r.default(this._element).off(c.TRANSITION_END), r.default(this._element).one(c.TRANSITION_END, (function() {
                        e._element.classList.remove(an), n || r.default(e._element).one(c.TRANSITION_END, (function() {
                            e._element.style.overflowY = ""
                        })).emulateTransitionEnd(e._element, i)
                    })).emulateTransitionEnd(i), this._element.focus()
                }
            }, t._showElement = function(e) {
                var t = this,
                    n = r.default(this._element).hasClass(rn),
                    i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), r.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && c.reflow(this._element), r.default(this._element).addClass(on), this._config.focus && this._enforceFocus();
                var o = r.default.Event(fn, {
                        relatedTarget: e
                    }),
                    a = function() {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, r.default(t._element).trigger(o)
                    };
                if (n) {
                    var s = c.getTransitionDurationFromElement(this._dialog);
                    r.default(this._dialog).one(c.TRANSITION_END, a).emulateTransitionEnd(s)
                } else a()
            }, t._enforceFocus = function() {
                var e = this;
                r.default(document).off(dn).on(dn, (function(t) {
                    document !== t.target && e._element !== t.target && 0 === r.default(e._element).has(t.target).length && e._element.focus()
                }))
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown ? r.default(this._element).on(mn, (function(t) {
                    e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                })) : this._isShown || r.default(this._element).off(mn)
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? r.default(window).on(hn, (function(t) {
                    return e.handleUpdate(t)
                })) : r.default(window).off(hn)
            }, t._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() {
                    r.default(document.body).removeClass(nn), e._resetAdjustments(), e._resetScrollbar(), r.default(e._element).trigger(un)
                }))
            }, t._removeBackdrop = function() {
                this._backdrop && (r.default(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function(e) {
                var t = this,
                    n = r.default(this._element).hasClass(rn) ? rn : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), r.default(this._backdrop).appendTo(document.body), r.default(this._element).on(pn, (function(e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                        })), n && c.reflow(this._backdrop), r.default(this._backdrop).addClass(on), !e) return;
                    if (!n) return void e();
                    var i = c.getTransitionDurationFromElement(this._backdrop);
                    r.default(this._backdrop).one(c.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    r.default(this._backdrop).removeClass(on);
                    var o = function() {
                        t._removeBackdrop(), e && e()
                    };
                    if (r.default(this._element).hasClass(rn)) {
                        var a = c.getTransitionDurationFromElement(this._backdrop);
                        r.default(this._backdrop).one(c.TRANSITION_END, o).emulateTransitionEnd(a)
                    } else o()
                } else e && e()
            }, t._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(bn)),
                        n = [].slice.call(document.querySelectorAll(_n));
                    r.default(t).each((function(t, n) {
                        var i = n.style.paddingRight,
                            o = r.default(n).css("padding-right");
                        r.default(n).data("padding-right", i).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                    })), r.default(n).each((function(t, n) {
                        var i = n.style.marginRight,
                            o = r.default(n).css("margin-right");
                        r.default(n).data("margin-right", i).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                    }));
                    var i = document.body.style.paddingRight,
                        o = r.default(document.body).css("padding-right");
                    r.default(document.body).data("padding-right", i).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                r.default(document.body).addClass(nn)
            }, t._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(bn));
                r.default(e).each((function(e, t) {
                    var n = r.default(t).data("padding-right");
                    r.default(t).removeData("padding-right"), t.style.paddingRight = n || ""
                }));
                var t = [].slice.call(document.querySelectorAll("" + _n));
                r.default(t).each((function(e, t) {
                    var n = r.default(t).data("margin-right");
                    void 0 !== n && r.default(t).css("margin-right", n).removeData("margin-right")
                }));
                var n = r.default(document.body).data("padding-right");
                r.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, t._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(t, n) {
                return this.each((function() {
                    var i = r.default(this).data(Zt),
                        o = a({}, wn, r.default(this).data(), "object" == typeof t && t ? t : {});
                    if (i || (i = new e(this, o), r.default(this).data(Zt, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t](n)
                    } else o.show && i.show(n)
                }))
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "Default",
                get: function() {
                    return wn
                }
            }]), e
        }();
    r.default(document).on(yn, '[data-toggle="modal"]', (function(e) {
        var t, n = this,
            i = c.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var o = r.default(t).data(Zt) ? "toggle" : a({}, r.default(t).data(), r.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var s = r.default(t).one(cn, (function(e) {
            e.isDefaultPrevented() || s.one(un, (function() {
                r.default(n).is(":visible") && n.focus()
            }))
        }));
        xn._jQueryInterface.call(r.default(t), o, this)
    })), r.default.fn[Jt] = xn._jQueryInterface, r.default.fn[Jt].Constructor = xn, r.default.fn[Jt].noConflict = function() {
        return r.default.fn[Jt] = tn, xn._jQueryInterface
    };
    var Tn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Sn = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        Cn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        kn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function An(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (var r = (new window.DOMParser).parseFromString(e, "text/html"), i = Object.keys(t), o = [].slice.call(r.body.querySelectorAll("*")), a = function(e, n) {
                var r = o[e],
                    a = r.nodeName.toLowerCase();
                if (-1 === i.indexOf(r.nodeName.toLowerCase())) return r.parentNode.removeChild(r), "continue";
                var s = [].slice.call(r.attributes),
                    l = [].concat(t["*"] || [], t[a] || []);
                s.forEach((function(e) {
                    (function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === Tn.indexOf(n) || Boolean(Cn.test(e.nodeValue) || kn.test(e.nodeValue));
                        for (var r = t.filter((function(e) {
                                return e instanceof RegExp
                            })), i = 0, o = r.length; i < o; i++)
                            if (r[i].test(n)) return !0;
                        return !1
                    })(e, l) || r.removeAttribute(e.nodeName)
                }))
            }, s = 0, l = o.length; s < l; s++) a(s);
        return r.body.innerHTML
    }
    var Dn = "tooltip",
        Nn = "bs.tooltip",
        qn = "." + Nn,
        Ln = r.default.fn[Dn],
        jn = "bs-tooltip",
        On = new RegExp("(^|\\s)" + jn + "\\S+", "g"),
        In = ["sanitize", "whiteList", "sanitizeFn"],
        Rn = "fade",
        Pn = "show",
        Hn = "show",
        Mn = "out",
        Fn = "hover",
        Bn = "focus",
        Wn = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Un = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Sn,
            popperConfig: null
        },
        Qn = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        $n = {
            HIDE: "hide" + qn,
            HIDDEN: "hidden" + qn,
            SHOW: "show" + qn,
            SHOWN: "shown" + qn,
            INSERTED: "inserted" + qn,
            CLICK: "click" + qn,
            FOCUSIN: "focusin" + qn,
            FOCUSOUT: "focusout" + qn,
            MOUSEENTER: "mouseenter" + qn,
            MOUSELEAVE: "mouseleave" + qn
        },
        zn = function() {
            function e(e, t) {
                if (void 0 === Dt) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var t = e.prototype;
            return t.enable = function() {
                this._isEnabled = !0
            }, t.disable = function() {
                this._isEnabled = !1
            }, t.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            n = r.default(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), r.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (r.default(this.getTipElement()).hasClass(Pn)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() {
                clearTimeout(this._timeout), r.default.removeData(this.element, this.constructor.DATA_KEY), r.default(this.element).off(this.constructor.EVENT_KEY), r.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && r.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function() {
                var e = this;
                if ("none" === r.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = r.default.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    r.default(this.element).trigger(t);
                    var n = c.findShadowRoot(this.element),
                        i = r.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !i) return;
                    var o = this.getTipElement(),
                        a = c.getUID(this.constructor.NAME);
                    o.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && r.default(o).addClass(Rn);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        l = this._getAttachment(s);
                    this.addAttachmentClass(l);
                    var u = this._getContainer();
                    r.default(o).data(this.constructor.DATA_KEY, this), r.default.contains(this.element.ownerDocument.documentElement, this.tip) || r.default(o).appendTo(u), r.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Dt(this.element, o, this._getPopperConfig(l)), r.default(o).addClass(Pn), r.default(o).addClass(this.config.customClass), "ontouchstart" in document.documentElement && r.default(document.body).children().on("mouseover", null, r.default.noop);
                    var f = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, r.default(e.element).trigger(e.constructor.Event.SHOWN), t === Mn && e._leave(null, e)
                    };
                    if (r.default(this.tip).hasClass(Rn)) {
                        var d = c.getTransitionDurationFromElement(this.tip);
                        r.default(this.tip).one(c.TRANSITION_END, f).emulateTransitionEnd(d)
                    } else f()
                }
            }, t.hide = function(e) {
                var t = this,
                    n = this.getTipElement(),
                    i = r.default.Event(this.constructor.Event.HIDE),
                    o = function() {
                        t._hoverState !== Hn && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), r.default(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                    };
                if (r.default(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (r.default(n).removeClass(Pn), "ontouchstart" in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop), this._activeTrigger.click = !1, this._activeTrigger[Bn] = !1, this._activeTrigger[Fn] = !1, r.default(this.tip).hasClass(Rn)) {
                        var a = c.getTransitionDurationFromElement(n);
                        r.default(n).one(c.TRANSITION_END, o).emulateTransitionEnd(a)
                    } else o();
                    this._hoverState = ""
                }
            }, t.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function() {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function(e) {
                r.default(this.getTipElement()).addClass(jn + "-" + e)
            }, t.getTipElement = function() {
                return this.tip = this.tip || r.default(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(r.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), r.default(e).removeClass(Rn + " " + Pn)
            }, t.setElementContent = function(e, t) {
                "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = An(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? r.default(t).parent().is(e) || e.empty().append(t) : e.text(r.default(t).text())
            }, t.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, t._getPopperConfig = function(e) {
                var t = this;
                return a({}, {
                    placement: e,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        return t._handlePopperPlacementChange(e)
                    }
                }, this.config.popperConfig)
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = a({}, t.offsets, e.config.offset(t.offsets, e.element)), t
                } : t.offset = this.config.offset, t
            }, t._getContainer = function() {
                return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? r.default(this.config.container) : r.default(document).find(this.config.container)
            }, t._getAttachment = function(e) {
                return Wn[e.toUpperCase()]
            }, t._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach((function(t) {
                    if ("click" === t) r.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function(t) {
                        return e.toggle(t)
                    }));
                    else if ("manual" !== t) {
                        var n = t === Fn ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            i = t === Fn ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        r.default(e.element).on(n, e.config.selector, (function(t) {
                            return e._enter(t)
                        })).on(i, e.config.selector, (function(t) {
                            return e._leave(t)
                        }))
                    }
                })), this._hideModalHandler = function() {
                    e.element && e.hide()
                }, r.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || r.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), r.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Bn : Fn] = !0), r.default(t.getTipElement()).hasClass(Pn) || t._hoverState === Hn ? t._hoverState = Hn : (clearTimeout(t._timeout), t._hoverState = Hn, t.config.delay && t.config.delay.show ? t._timeout = setTimeout((function() {
                    t._hoverState === Hn && t.show()
                }), t.config.delay.show) : t.show())
            }, t._leave = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || r.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), r.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Bn : Fn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Mn, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout((function() {
                    t._hoverState === Mn && t.hide()
                }), t.config.delay.hide) : t.hide())
            }, t._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, t._getConfig = function(e) {
                var t = r.default(this.element).data();
                return Object.keys(t).forEach((function(e) {
                    -1 !== In.indexOf(e) && delete t[e]
                })), "number" == typeof(e = a({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), c.typeCheckConfig(Dn, e, this.constructor.DefaultType), e.sanitize && (e.template = An(e.template, e.whiteList, e.sanitizeFn)), e
            }, t._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, t._cleanTipClass = function() {
                var e = r.default(this.getTipElement()),
                    t = e.attr("class").match(On);
                null !== t && t.length && e.removeClass(t.join(""))
            }, t._handlePopperPlacementChange = function(e) {
                this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, t._fixTransition = function() {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (r.default(e).removeClass(Rn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = r.default(this),
                        i = n.data(Nn),
                        o = "object" == typeof t && t;
                    if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, o), n.data(Nn, i)), "string" == typeof t)) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                }))
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "Default",
                get: function() {
                    return Un
                }
            }, {
                key: "NAME",
                get: function() {
                    return Dn
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Nn
                }
            }, {
                key: "Event",
                get: function() {
                    return $n
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return qn
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Qn
                }
            }]), e
        }();
    r.default.fn[Dn] = zn._jQueryInterface, r.default.fn[Dn].Constructor = zn, r.default.fn[Dn].noConflict = function() {
        return r.default.fn[Dn] = Ln, zn._jQueryInterface
    };
    var Vn = "popover",
        Xn = "bs.popover",
        Yn = "." + Xn,
        Kn = r.default.fn[Vn],
        Gn = "bs-popover",
        Jn = new RegExp("(^|\\s)" + Gn + "\\S+", "g"),
        Zn = a({}, zn.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        er = a({}, zn.DefaultType, {
            content: "(string|element|function)"
        }),
        tr = {
            HIDE: "hide" + Yn,
            HIDDEN: "hidden" + Yn,
            SHOW: "show" + Yn,
            SHOWN: "shown" + Yn,
            INSERTED: "inserted" + Yn,
            CLICK: "click" + Yn,
            FOCUSIN: "focusin" + Yn,
            FOCUSOUT: "focusout" + Yn,
            MOUSEENTER: "mouseenter" + Yn,
            MOUSELEAVE: "mouseleave" + Yn
        },
        nr = function(e) {
            var t, n;

            function i() {
                return e.apply(this, arguments) || this
            }
            n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, s(t, n);
            var a = i.prototype;
            return a.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, a.addAttachmentClass = function(e) {
                r.default(this.getTipElement()).addClass(Gn + "-" + e)
            }, a.getTipElement = function() {
                return this.tip = this.tip || r.default(this.config.template)[0], this.tip
            }, a.setContent = function() {
                var e = r.default(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, a._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, a._cleanTipClass = function() {
                var e = r.default(this.getTipElement()),
                    t = e.attr("class").match(Jn);
                null !== t && t.length > 0 && e.removeClass(t.join(""))
            }, i._jQueryInterface = function(e) {
                return this.each((function() {
                    var t = r.default(this).data(Xn),
                        n = "object" == typeof e ? e : null;
                    if ((t || !/dispose|hide/.test(e)) && (t || (t = new i(this, n), r.default(this).data(Xn, t)), "string" == typeof e)) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                }))
            }, o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "Default",
                get: function() {
                    return Zn
                }
            }, {
                key: "NAME",
                get: function() {
                    return Vn
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Xn
                }
            }, {
                key: "Event",
                get: function() {
                    return tr
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Yn
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return er
                }
            }]), i
        }(zn);
    r.default.fn[Vn] = nr._jQueryInterface, r.default.fn[Vn].Constructor = nr, r.default.fn[Vn].noConflict = function() {
        return r.default.fn[Vn] = Kn, nr._jQueryInterface
    };
    var rr = "scrollspy",
        ir = "bs.scrollspy",
        or = "." + ir,
        ar = r.default.fn[rr],
        sr = "active",
        lr = "activate" + or,
        ur = "scroll" + or,
        cr = "load" + or + ".data-api",
        fr = "position",
        dr = ".nav, .list-group",
        hr = ".nav-link",
        pr = ".list-group-item",
        mr = {
            offset: 10,
            method: "auto",
            target: ""
        },
        gr = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        vr = function() {
            function e(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + hr + "," + this._config.target + " " + pr + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, r.default(this._scrollElement).on(ur, (function(e) {
                    return n._process(e)
                })), this.refresh(), this._process()
            }
            var t = e.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? "offset" : fr,
                    n = "auto" === this._config.method ? t : this._config.method,
                    i = n === fr ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(e) {
                    var t, o = c.getSelectorFromElement(e);
                    if (o && (t = document.querySelector(o)), t) {
                        var a = t.getBoundingClientRect();
                        if (a.width || a.height) return [r.default(t)[n]().top + i, o]
                    }
                    return null
                })).filter(Boolean).sort((function(e, t) {
                    return e[0] - t[0]
                })).forEach((function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                }))
            }, t.dispose = function() {
                r.default.removeData(this._element, ir), r.default(this._scrollElement).off(or), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function(e) {
                if ("string" != typeof(e = a({}, mr, "object" == typeof e && e ? e : {})).target && c.isElement(e.target)) {
                    var t = r.default(e.target).attr("id");
                    t || (t = c.getUID(rr), r.default(e.target).attr("id", t)), e.target = "#" + t
                }
                return c.typeCheckConfig(rr, e, gr), e
            }, t._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                    var r = this._targets[this._targets.length - 1];
                    this._activeTarget !== r && this._activate(r)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var i = this._offsets.length; i--;) {
                        this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
                    }
                }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map((function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    })),
                    n = r.default([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(sr), n.addClass(sr)) : (n.addClass(sr), n.parents(dr).prev(hr + ", " + pr).addClass(sr), n.parents(dr).prev(".nav-item").children(hr).addClass(sr)), r.default(this._scrollElement).trigger(lr, {
                    relatedTarget: e
                })
            }, t._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter((function(e) {
                    return e.classList.contains(sr)
                })).forEach((function(e) {
                    return e.classList.remove(sr)
                }))
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = r.default(this).data(ir);
                    if (n || (n = new e(this, "object" == typeof t && t), r.default(this).data(ir, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                }))
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "Default",
                get: function() {
                    return mr
                }
            }]), e
        }();
    r.default(window).on(cr, (function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
            var n = r.default(e[t]);
            vr._jQueryInterface.call(n, n.data())
        }
    })), r.default.fn[rr] = vr._jQueryInterface, r.default.fn[rr].Constructor = vr, r.default.fn[rr].noConflict = function() {
        return r.default.fn[rr] = ar, vr._jQueryInterface
    };
    var yr = "tab",
        br = "bs.tab",
        _r = "." + br,
        wr = r.default.fn[yr],
        Er = "active",
        xr = "fade",
        Tr = "show",
        Sr = "hide" + _r,
        Cr = "hidden" + _r,
        kr = "show" + _r,
        Ar = "shown" + _r,
        Dr = "click" + _r + ".data-api",
        Nr = ".active",
        qr = "> li > .active",
        Lr = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && r.default(this._element).hasClass(Er) || r.default(this._element).hasClass("disabled") || this._element.hasAttribute("disabled"))) {
                    var t, n, i = r.default(this._element).closest(".nav, .list-group")[0],
                        o = c.getSelectorFromElement(this._element);
                    if (i) {
                        var a = "UL" === i.nodeName || "OL" === i.nodeName ? qr : Nr;
                        n = (n = r.default.makeArray(r.default(i).find(a)))[n.length - 1]
                    }
                    var s = r.default.Event(Sr, {
                            relatedTarget: this._element
                        }),
                        l = r.default.Event(kr, {
                            relatedTarget: n
                        });
                    if (n && r.default(n).trigger(s), r.default(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (t = document.querySelector(o)), this._activate(this._element, i);
                        var u = function() {
                            var t = r.default.Event(Cr, {
                                    relatedTarget: e._element
                                }),
                                i = r.default.Event(Ar, {
                                    relatedTarget: n
                                });
                            r.default(n).trigger(t), r.default(e._element).trigger(i)
                        };
                        t ? this._activate(t, t.parentNode, u) : u()
                    }
                }
            }, t.dispose = function() {
                r.default.removeData(this._element, br), this._element = null
            }, t._activate = function(e, t, n) {
                var i = this,
                    o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? r.default(t).children(Nr) : r.default(t).find(qr))[0],
                    a = n && o && r.default(o).hasClass(xr),
                    s = function() {
                        return i._transitionComplete(e, o, n)
                    };
                if (o && a) {
                    var l = c.getTransitionDurationFromElement(o);
                    r.default(o).removeClass(Tr).one(c.TRANSITION_END, s).emulateTransitionEnd(l)
                } else s()
            }, t._transitionComplete = function(e, t, n) {
                if (t) {
                    r.default(t).removeClass(Er);
                    var i = r.default(t.parentNode).find("> .dropdown-menu .active")[0];
                    i && r.default(i).removeClass(Er), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                r.default(e).addClass(Er), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), c.reflow(e), e.classList.contains(xr) && e.classList.add(Tr);
                var o = e.parentNode;
                if (o && "LI" === o.nodeName && (o = o.parentNode), o && r.default(o).hasClass("dropdown-menu")) {
                    var a = r.default(e).closest(".dropdown")[0];
                    if (a) {
                        var s = [].slice.call(a.querySelectorAll(".dropdown-toggle"));
                        r.default(s).addClass(Er)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = r.default(this),
                        i = n.data(br);
                    if (i || (i = new e(this), n.data(br, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                }))
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }]), e
        }();
    r.default(document).on(Dr, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(e) {
        e.preventDefault(), Lr._jQueryInterface.call(r.default(this), "show")
    })), r.default.fn[yr] = Lr._jQueryInterface, r.default.fn[yr].Constructor = Lr, r.default.fn[yr].noConflict = function() {
        return r.default.fn[yr] = wr, Lr._jQueryInterface
    };
    var jr = "toast",
        Or = "bs.toast",
        Ir = "." + Or,
        Rr = r.default.fn[jr],
        Pr = "hide",
        Hr = "show",
        Mr = "showing",
        Fr = "click.dismiss" + Ir,
        Br = "hide" + Ir,
        Wr = "hidden" + Ir,
        Ur = "show" + Ir,
        Qr = "shown" + Ir,
        $r = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        zr = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Vr = function() {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var t = e.prototype;
            return t.show = function() {
                var e = this,
                    t = r.default.Event(Ur);
                if (r.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                    this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                    var n = function() {
                        e._element.classList.remove(Mr), e._element.classList.add(Hr), r.default(e._element).trigger(Qr), e._config.autohide && (e._timeout = setTimeout((function() {
                            e.hide()
                        }), e._config.delay))
                    };
                    if (this._element.classList.remove(Pr), c.reflow(this._element), this._element.classList.add(Mr), this._config.animation) {
                        var i = c.getTransitionDurationFromElement(this._element);
                        r.default(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                }
            }, t.hide = function() {
                if (this._element.classList.contains(Hr)) {
                    var e = r.default.Event(Br);
                    r.default(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                }
            }, t.dispose = function() {
                this._clearTimeout(), this._element.classList.contains(Hr) && this._element.classList.remove(Hr), r.default(this._element).off(Fr), r.default.removeData(this._element, Or), this._element = null, this._config = null
            }, t._getConfig = function(e) {
                return e = a({}, $r, r.default(this._element).data(), "object" == typeof e && e ? e : {}), c.typeCheckConfig(jr, e, this.constructor.DefaultType), e
            }, t._setListeners = function() {
                var e = this;
                r.default(this._element).on(Fr, '[data-dismiss="toast"]', (function() {
                    return e.hide()
                }))
            }, t._close = function() {
                var e = this,
                    t = function() {
                        e._element.classList.add(Pr), r.default(e._element).trigger(Wr)
                    };
                if (this._element.classList.remove(Hr), this._config.animation) {
                    var n = c.getTransitionDurationFromElement(this._element);
                    r.default(this._element).one(c.TRANSITION_END, t).emulateTransitionEnd(n)
                } else t()
            }, t._clearTimeout = function() {
                clearTimeout(this._timeout), this._timeout = null
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = r.default(this),
                        i = n.data(Or);
                    if (i || (i = new e(this, "object" == typeof t && t), n.data(Or, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t](this)
                    }
                }))
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return zr
                }
            }, {
                key: "Default",
                get: function() {
                    return $r
                }
            }]), e
        }();
    r.default.fn[jr] = Vr._jQueryInterface, r.default.fn[jr].Constructor = Vr, r.default.fn[jr].noConflict = function() {
        return r.default.fn[jr] = Rr, Vr._jQueryInterface
    }, e.Alert = y, e.Button = q, e.Carousel = re, e.Collapse = we, e.Dropdown = Gt, e.Modal = xn, e.Popover = nr, e.Scrollspy = vr, e.Tab = Lr, e.Toast = Vr, e.Tooltip = zn, e.Util = c, Object.defineProperty(e, "__esModule", {
        value: !0
    })
})),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ClipboardJS = t() : e.ClipboardJS = t()
}(this, (function() {
    return t = {
        686: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return g
                }
            });
            t = n(279);
            var r = n.n(t),
                i = (t = n(370), n.n(t)),
                o = (t = n(817), n.n(t));

            function a(e) {
                try {
                    return document.execCommand(e)
                } catch (e) {
                    return
                }
            }
            var s = function(e) {
                return e = o()(e), a("cut"), e
            };

            function l(e, t) {
                var n, r;
                n = e, r = "rtl" === document.documentElement.getAttribute("dir"), (e = document.createElement("textarea")).style.fontSize = "12pt", e.style.border = "0", e.style.padding = "0", e.style.margin = "0", e.style.position = "absolute", e.style[r ? "right" : "left"] = "-9999px", r = window.pageYOffset || document.documentElement.scrollTop, e.style.top = "".concat(r, "px"), e.setAttribute("readonly", ""), e.value = n;
                return t.container.appendChild(e), t = o()(e), a("copy"), e.remove(), t
            }
            var u = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                        container: document.body
                    },
                    n = "";
                return "string" == typeof e ? n = l(e, t) : e instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == e ? void 0 : e.type) ? n = l(e.value, t) : (n = o()(e), a("copy")), n
            };

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f(e) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function h(e, t) {
                return (h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function m(e, t) {
                if (e = "data-clipboard-".concat(e), t.hasAttribute(e)) return t.getAttribute(e)
            }
            var g = function() {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && h(e, t)
                }(a, r());
                var e, t, n, o = function(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = p(e);
                        return n = t ? (n = p(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this, !n || "object" !== f(n) && "function" != typeof n ? function(e) {
                            if (void 0 !== e) return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(r) : n
                    }
                }(a);

                function a(e, t) {
                    var n;
                    return function(e) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this), (n = o.call(this)).resolveOptions(t), n.listenClick(e), n
                }
                return e = a, n = [{
                    key: "copy",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                            container: document.body
                        };
                        return u(e, t)
                    }
                }, {
                    key: "cut",
                    value: function(e) {
                        return s(e)
                    }
                }, {
                    key: "isSupported",
                    value: function() {
                        var e = "string" == typeof(e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]) ? [e] : e,
                            t = !!document.queryCommandSupported;
                        return e.forEach((function(e) {
                            t = t && !!document.queryCommandSupported(e)
                        })), t
                    }
                }], (t = [{
                    key: "resolveOptions",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === f(e.container) ? e.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(e) {
                        var t = this;
                        this.listener = i()(e, "click", (function(e) {
                            return t.onClick(e)
                        }))
                    }
                }, {
                    key: "onClick",
                    value: function(e) {
                        var t = e.delegateTarget || e.currentTarget,
                            n = this.action(t) || "copy";
                        e = function() {
                            var e = void 0 === (n = (r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).action) ? "copy" : n,
                                t = r.container,
                                n = r.target,
                                r = r.text;
                            if ("copy" !== e && "cut" !== e) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                            if (void 0 !== n) {
                                if (!n || "object" !== c(n) || 1 !== n.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === e && n.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === e && (n.hasAttribute("readonly") || n.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                            }
                            return r ? u(r, {
                                container: t
                            }) : n ? "cut" === e ? s(n) : u(n, {
                                container: t
                            }) : void 0
                        }({
                            action: n,
                            container: this.container,
                            target: this.target(t),
                            text: this.text(t)
                        });
                        this.emit(e ? "success" : "error", {
                            action: n,
                            text: e,
                            trigger: t,
                            clearSelection: function() {
                                t && t.focus(), window.getSelection().removeAllRanges()
                            }
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(e) {
                        return m("action", e)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(e) {
                        if (e = m("target", e)) return document.querySelector(e)
                    }
                }, {
                    key: "defaultText",
                    value: function(e) {
                        return m("text", e)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy()
                    }
                }]) && d(e.prototype, t), n && d(e, n), a
            }()
        },
        828: function(e) {
            var t;
            "undefined" == typeof Element || Element.prototype.matches || ((t = Element.prototype).matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector), e.exports = function(e, t) {
                for (; e && 9 !== e.nodeType;) {
                    if ("function" == typeof e.matches && e.matches(t)) return e;
                    e = e.parentNode
                }
            }
        },
        438: function(e, t, n) {
            var r = n(828);

            function i(e, t, n, i, o) {
                var a = function(e, t, n, i) {
                    return function(n) {
                        n.delegateTarget = r(n.target, t), n.delegateTarget && i.call(e, n)
                    }
                }.apply(this, arguments);
                return e.addEventListener(n, a, o), {
                    destroy: function() {
                        e.removeEventListener(n, a, o)
                    }
                }
            }
            e.exports = function(e, t, n, r, o) {
                return "function" == typeof e.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, (function(e) {
                    return i(e, t, n, r, o)
                })))
            }
        },
        879: function(e, t) {
            t.node = function(e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, t.nodeList = function(e) {
                var n = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]))
            }, t.string = function(e) {
                return "string" == typeof e || e instanceof String
            }, t.fn = function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        },
        370: function(e, t, n) {
            var r = n(879),
                i = n(438);
            e.exports = function(e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!r.string(t)) throw new TypeError("Second argument must be a String");
                if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
                if (r.node(e)) return u = t, c = n, (l = e).addEventListener(u, c), {
                    destroy: function() {
                        l.removeEventListener(u, c)
                    }
                };
                if (r.nodeList(e)) return o = e, a = t, s = n, Array.prototype.forEach.call(o, (function(e) {
                    e.addEventListener(a, s)
                })), {
                    destroy: function() {
                        Array.prototype.forEach.call(o, (function(e) {
                            e.removeEventListener(a, s)
                        }))
                    }
                };
                if (r.string(e)) return i(document.body, e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                var o, a, s, l, u, c
            }
        },
        817: function(e) {
            e.exports = function(e) {
                var t, n = "SELECT" === e.nodeName ? (e.focus(), e.value) : "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName ? ((t = e.hasAttribute("readonly")) || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), t || e.removeAttribute("readonly"), e.value) : (e.hasAttribute("contenteditable") && e.focus(), n = window.getSelection(), (t = document.createRange()).selectNodeContents(e), n.removeAllRanges(), n.addRange(t), n.toString());
                return n
            }
        },
        279: function(e) {
            function t() {}
            t.prototype = {
                on: function(e, t, n) {
                    var r = this.e || (this.e = {});
                    return (r[e] || (r[e] = [])).push({
                        fn: t,
                        ctx: n
                    }), this
                },
                once: function(e, t, n) {
                    var r = this;

                    function i() {
                        r.off(e, i), t.apply(n, arguments)
                    }
                    return i._ = t, this.on(e, i, n)
                },
                emit: function(e) {
                    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, t);
                    return this
                },
                off: function(e, t) {
                    var n = this.e || (this.e = {}),
                        r = n[e],
                        i = [];
                    if (r && t)
                        for (var o = 0, a = r.length; o < a; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
                    return i.length ? n[e] = i : delete n[e], this
                }
            }, e.exports = t, e.exports.TinyEmitter = t
        }
    }, n = {}, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, {
            a: n
        }), n
    }, e.d = function(t, n) {
        for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: n[r]
        })
    }, e.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, e(686).default;

    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {}
        };
        return t[r](i, i.exports, e), i.exports
    }
    var t, n
})), document.querySelector("#cookie-banner-dismiss") && document.querySelector("#cookie-banner-dismiss").addEventListener("click", (function() {
    setCookie("cookie_law", 1, (new Date).getTime() + 31536e7, "/"), document.querySelector("#cookie-banner").classList.add("d-none")
})), document.querySelector("#dark-mode") && document.querySelector("#dark-mode").addEventListener("click", (function(e) {
    e.preventDefault(), document.querySelectorAll("[data-theme-target]").forEach((function(e) {
        e.setAttribute(e.dataset.themeTarget, document.querySelector("html").classList.contains("dark") ? e.dataset.themeLight : e.dataset.themeDark)
    })), this.querySelector("span").textContent = document.querySelector("html").classList.contains("dark") ? this.querySelector("span").dataset.textLight : this.querySelector("span").dataset.textDark, setCookie("dark_mode", document.querySelector("html").classList.contains("dark") ? 0 : 1, (new Date).getTime() + 31536e7, "/"), document.querySelector("html").classList.contains("dark") ? document.querySelector("html").classList.remove("dark") : document.querySelector("html").classList.add("dark")
})), document.querySelector("#plan-month") && document.querySelector("#plan-month").addEventListener("click", (function() {
    document.querySelectorAll(".plan-month").forEach((e => e.classList.add("d-block"))), document.querySelectorAll(".plan-year").forEach((e => e.classList.remove("d-block")))
})), document.querySelector("#plan-year") && document.querySelector("#plan-year").addEventListener("click", (function() {
    document.querySelectorAll(".plan-year").forEach((e => e.classList.add("d-block"))), document.querySelectorAll(".plan-month").forEach((e => e.classList.remove("d-block", "plan-preload")))
}));
let updateSummary = e => {
        "month" == e ? (document.querySelectorAll(".checkout-month").forEach((function(e) {
            e.classList.add("d-inline-block")
        })), document.querySelectorAll(".checkout-year").forEach((function(e) {
            e.classList.remove("d-inline-block")
        }))) : (document.querySelectorAll(".checkout-month").forEach((function(e) {
            e.classList.remove("d-inline-block")
        })), document.querySelectorAll(".checkout-year").forEach((function(e) {
            e.classList.add("d-inline-block")
        })))
    },
    updateBillingType = e => {
        "bank" == e ? (document.querySelector("#bank-instructions").classList.remove("d-none"), document.querySelector("#bank-instructions").classList.add("d-block")) : document.querySelector("#bank-instructions") && (document.querySelector("#bank-instructions").classList.add("d-none"), document.querySelector("#bank-instructions").classList.remove("d-block")), "cryptocom" == e || "coinbase" == e || "bank" == e ? (document.querySelectorAll(".checkout-subscription").forEach((function(e) {
            e.classList.remove("d-block")
        })), document.querySelectorAll(".checkout-subscription").forEach((function(e) {
            e.classList.add("d-none")
        })), document.querySelectorAll(".checkout-one-time").forEach((function(e) {
            e.classList.add("d-block")
        })), document.querySelectorAll(".checkout-one-time").forEach((function(e) {
            e.classList.remove("d-none")
        }))) : (document.querySelectorAll(".checkout-subscription").forEach((function(e) {
            e.classList.remove("d-none")
        })), document.querySelectorAll(".checkout-subscription").forEach((function(e) {
            e.classList.add("d-block")
        })), document.querySelectorAll(".checkout-one-time").forEach((function(e) {
            e.classList.add("d-none")
        })), document.querySelectorAll(".checkout-one-time").forEach((function(e) {
            e.classList.remove("d-block")
        })))
    };
if (document.querySelector("#form-payment")) {
    let e = new URL(window.location.href);
    document.querySelectorAll('[name="interval"]').forEach((function(t) {
        t.checked && updateSummary(t.value), t.addEventListener("change", (function() {
            e.searchParams.set("interval", t.value), history.pushState(null, null, e.href), updateSummary(t.value)
        }))
    })), document.querySelectorAll('[name="payment_processor"]').forEach((function(t) {
        t.checked && updateBillingType(t.value), t.addEventListener("change", (function() {
            e.searchParams.set("payment", t.value), history.pushState(null, null, e.href), updateBillingType(t.value)
        }))
    })), document.querySelector("#coupon") && document.querySelector("#coupon").addEventListener("click", (function(e) {
        e.preventDefault(), this.classList.add("d-none"), document.querySelector("#coupon-input").classList.remove("d-none"), document.querySelector('input[name="coupon"]').removeAttribute("disabled")
    })), document.querySelector("#coupon-cancel") && document.querySelector("#coupon-cancel").addEventListener("click", (function(e) {
        e.preventDefault(), document.querySelector("#coupon").classList.remove("d-none"), document.querySelector("#coupon-input").classList.add("d-none"), document.querySelector('input[name="coupon"]').setAttribute("disabled", "disabled")
    })), document.querySelector("#i-country").addEventListener("change", (function() {
        document.querySelector("#form-payment").submit.remove(), document.querySelector("#form-payment").submit()
    }))
}
document.querySelector("#form-coupon") && document.querySelector("#i-type").addEventListener("change", (function() {
    1 == document.querySelector("#i-type").value ? (document.querySelector("#form-group-redeemable").classList.remove("d-none"), document.querySelector("#form-group-discount").classList.add("d-none"), document.querySelector("#i-percentage").setAttribute("disabled", "disabled")) : (document.querySelector("#form-group-redeemable").classList.add("d-none"), document.querySelector("#form-group-discount").classList.remove("d-none"), document.querySelector("#i-percentage").removeAttribute("disabled"))
})), document.querySelector("#search-filters") && document.querySelector("#search-filters").addEventListener("click", (function(e) {
    e.stopPropagation()
})), jQuery.fn.tooltip.Constructor.Default.whiteList.svg = ["xmlns", "class", "viewbox"], jQuery.fn.tooltip.Constructor.Default.whiteList.path = ["d"], new ClipboardJS('[data-clipboard="true"]'), document.querySelectorAll("[data-clipboard-copy]").forEach((function(e) {
    e.addEventListener("click", (function(e) {
        e.preventDefault();
        try {
            let e = this.dataset.clipboardCopy,
                t = document.createElement("input");
            document.body.append(t), t.value = e, t.select(), document.execCommand("copy"), t.remove()
        } catch (e) {}
    }))
})), jQuery('[data-tooltip="true"]').tooltip({
    animation: !0,
    trigger: "hover",
    boundary: "window"
}), jQuery('[data-tooltip-copy="true"]').tooltip({
    animation: !0
}), document.querySelectorAll('[data-tooltip-copy="true"]').forEach((function(e) {
    e.addEventListener("click", (function(e) {
        jQuery(this).tooltip("hide").attr("data-original-title", this.dataset.textCopied).tooltip("show")
    })), e.addEventListener("mouseleave", (function() {
        this.setAttribute("data-original-title", this.dataset.textCopy)
    }))
})), document.querySelectorAll(".slide-menu-toggle").forEach((function(e) {
    e.addEventListener("click", (function() {
        document.querySelector("#slide-menu").classList.toggle("active")
    }))
})), document.querySelectorAll("[data-password]").forEach((function(e) {
    e.addEventListener("click", (function(e) {
        let t = document.querySelector("#" + this.dataset.password);
        "password" === t.type ? (t.type = "text", jQuery(this).tooltip("hide").attr("data-original-title", this.dataset.passwordHide).tooltip("show")) : (t.type = "password", jQuery(this).tooltip("hide").attr("data-original-title", this.dataset.passwordShow).tooltip("show"))
    }))
})), document.querySelectorAll('[data-target="#modal"]').forEach((function(e) {
    e.addEventListener("click", (function() {
        this.dataset.buttonName && document.querySelector("#modal-button").setAttribute("name", this.dataset.buttonName), this.dataset.buttonValue && document.querySelector("#modal-button").setAttribute("value", this.dataset.buttonValue), document.querySelector("#modal-label").textContent = this.dataset.title, document.querySelector("#modal-button").textContent = this.dataset.title, document.querySelector("#modal-button").setAttribute("class", this.dataset.button), document.querySelector("#modal-text").textContent = this.dataset.text, document.querySelector("#modal-sub-text").textContent = this.dataset.subText, document.querySelector("#modal form").setAttribute("action", this.dataset.action)
    }))
})), document.querySelectorAll(".link-share").forEach((function(e) {
    e.addEventListener("click", (function() {
        let e = this.dataset.url,
            t = this.dataset.title,
            n = this.dataset.qr;
        document.querySelectorAll("#share-twitter, #share-facebook, #share-reddit, #share-pinterest, #share-linkedin, #share-tumblr, #share-email, #share-qr").forEach((function(r) {
            r.setAttribute("data-url", e), r.setAttribute("data-title", t), r.setAttribute("data-qr", n)
        }))
    }))
})), document.querySelector("#share-twitter") && document.querySelector("#share-twitter").addEventListener("click", (function(e) {
    e.preventDefault(), popupCenter("https://twitter.com/intent/tweet?text=" + encodeURIComponent(this.dataset.title) + "&url=" + encodeURIComponent(this.dataset.url), encodeURIComponent(this.dataset.title), 550, 250)
})), document.querySelector("#share-facebook") && document.querySelector("#share-facebook").addEventListener("click", (function(e) {
    e.preventDefault(), popupCenter("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.dataset.url), encodeURIComponent(this.dataset.title), 550, 300)
})), document.querySelector("#share-reddit") && document.querySelector("#share-reddit").addEventListener("click", (function(e) {
    e.preventDefault(), popupCenter("https://www.reddit.com/submit?url=" + encodeURIComponent(this.dataset.url), encodeURIComponent(this.dataset.title), 550, 530)
})), document.querySelector("#share-pinterest") && document.querySelector("#share-pinterest").addEventListener("click", (function(e) {
    e.preventDefault(), popupCenter("https://pinterest.com/pin/create/button/?url=" + encodeURIComponent(this.dataset.url) + "&description=" + encodeURIComponent(this.dataset.title), encodeURIComponent(this.dataset.title), 550, 300)
})), document.querySelector("#share-linkedin") && document.querySelector("#share-linkedin").addEventListener("click", (function(e) {
    e.preventDefault(), popupCenter("https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(this.dataset.url), encodeURIComponent(this.dataset.title), 550, 300)
})), document.querySelector("#share-tumblr") && document.querySelector("#share-tumblr").addEventListener("click", (function(e) {
    e.preventDefault(), popupCenter("https://www.tumblr.com/widgets/share/tool/preview?posttype=link&canonicalUrl=" + encodeURIComponent(this.dataset.url) + "&title=" + encodeURIComponent(this.dataset.title), encodeURIComponent(this.dataset.title), 550, 300)
})), document.querySelector("#share-email") && document.querySelector("#share-email").addEventListener("click", (function(e) {
    e.preventDefault(), window.open("mailto:?Subject=" + encodeURIComponent(this.dataset.title) + "&body=" + encodeURIComponent(this.dataset.title) + " - " + encodeURIComponent(this.dataset.url), "_self")
})), document.querySelector("#share-qr") && document.querySelector("#share-qr").addEventListener("click", (function(e) {
    e.preventDefault(), popupCenter(this.dataset.qr, encodeURIComponent(this.dataset.title), 300, 300)
})), document.querySelectorAll('input[name="privacy"]').forEach((function(e) {
    e.addEventListener("click", (function() {
        this.checked && 2 == this.value ? (document.querySelector("#input-password").classList.remove("d-none"), document.querySelector("#input-password").classList.add("d-block")) : (document.querySelector("#input-password").classList.add("d-none"), document.querySelector("#input-password").classList.remove("d-block"))
    }))
})), document.querySelectorAll("[data-button-loader]").forEach((function(e) {
    e.addEventListener("click", (function(e) {
        this.classList.contains("disabled") && e.preventDefault(), this.classList.add("disabled"), this.querySelector(".spinner-border").classList.remove("d-none"), this.querySelector(".spinner-text").classList.add("invisible")
    }))
})), document.querySelector("#toggle-sitemap") && document.querySelector("#toggle-sitemap").addEventListener("click", (function(e) {
    document.querySelector("#i-url").setAttribute("placeholder", document.querySelector("#i-url").dataset.placeholderSitemap)
})), document.querySelector("#toggle-webpage") && document.querySelector("#toggle-webpage").addEventListener("click", (function(e) {
    document.querySelector("#i-url").setAttribute("placeholder", document.querySelector("#i-url").dataset.placeholderWebpage)
})), document.querySelector("#form-tools-search") && (document.querySelector("#i-search").addEventListener("keyup", (function() {
    document.querySelector("#i-search").value.length > 0 ? (document.querySelector("#clear-button-container").classList.remove("d-none"), document.querySelector("#i-search").after(document.querySelector("#clear-button-container")), document.querySelectorAll("#tools [data-tool-category]").forEach((function(e) {
        e.classList.add("d-none")
    }))) : (document.querySelector("#form-tools-search").append(document.querySelector("#clear-button-container")), document.querySelector("#clear-button-container").classList.add("d-none"), document.querySelectorAll("#tools [data-tool-category]").forEach((function(e) {
        e.classList.remove("d-none")
    }))), document.querySelectorAll("#tools [data-tool-title]").forEach((function(e) {
        e.classList.add("d-none"), e.dataset.toolTitle.toLowerCase().includes(document.querySelector("#i-search").value.toLowerCase()) && (e.classList.remove("d-none"), document.querySelector('#tools [data-tool-category="' + e.dataset.toolParent + '"]').classList.remove("d-none"))
    }))
})), document.querySelector("#b-clear").addEventListener("click", (function() {
    document.querySelector("#i-search").value = "", document.querySelector("#i-search").focus(), document.querySelector("#form-tools-search").append(document.querySelector("#clear-button-container")), document.querySelector("#clear-button-container").classList.add("d-none"), document.querySelectorAll("#tools [data-tool-category]").forEach((function(e) {
        e.classList.remove("d-none")
    })), document.querySelectorAll("#tools [data-tool-title]").forEach((function(e) {
        e.classList.remove("d-none")
    }))
}))), jQuery(".toast").toast();
let getCookie = e => {
        e += "=";
        for (var t = decodeURIComponent(document.cookie).split(";"), n = 0; n < t.length; n++) {
            for (var r = t[n];
                " " == r.charAt(0);) r = r.substring(1);
            if (0 == r.indexOf(e)) return r.substring(e.length, r.length)
        }
        return ""
    },
    setCookie = (e, t, n, r) => {
        document.cookie = e + "=" + t + ";expires=" + new Date(n).toUTCString() + ";path=" + r
    },
    popupCenter = (e, t, n, r) => {
        let i = null != window.screenLeft ? window.screenLeft : window.screenX,
            o = null != window.screenTop ? window.screenTop : window.screenY,
            a = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
            s = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
            l = a / window.screen.availWidth,
            u = (a - n) / 2 / l + i,
            c = (s - r) / 2 / l + o,
            f = window.open(e, t, "scrollbars=yes, width=" + n / l + ", height=" + r / l + ", top=" + c + ", left=" + u);
        window.focus && f.focus()
    };