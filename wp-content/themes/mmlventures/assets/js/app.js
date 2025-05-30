/*! For license information please see app.js.LICENSE.txt */
!(function () {
  var e = {
      69: function (e) {
        e.exports = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function t(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          }
          function n() {
            return (n =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
          }
          function r(e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = t);
          }
          function i(e) {
            return (i = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function o(e, t) {
            return (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function s(e, t, n) {
            return (s = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()
              ? Reflect.construct
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var i = new (Function.bind.apply(e, r))();
                  return n && o(i, n.prototype), i;
                }).apply(null, arguments);
          }
          function a(e) {
            var t = "function" == typeof Map ? new Map() : void 0;
            return (a = function (e) {
              if (
                null === e ||
                -1 === Function.toString.call(e).indexOf("[native code]")
              )
                return e;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n);
              }
              function n() {
                return s(e, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, e)
              );
            })(e);
          }
          function u(e, t) {
            try {
              var n = e();
            } catch (e) {
              return t(e);
            }
            return n && n.then ? n.then(void 0, t) : n;
          }
          "undefined" != typeof Symbol &&
            (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
            "undefined" != typeof Symbol &&
              (Symbol.asyncIterator ||
                (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
          var l,
            c = "2.9.7",
            h = function () {};
          !(function (e) {
            (e[(e.off = 0)] = "off"),
              (e[(e.error = 1)] = "error"),
              (e[(e.warning = 2)] = "warning"),
              (e[(e.info = 3)] = "info"),
              (e[(e.debug = 4)] = "debug");
          })(l || (l = {}));
          var f = l.off,
            d = (function () {
              function e(e) {
                this.t = e;
              }
              (e.getLevel = function () {
                return f;
              }),
                (e.setLevel = function (e) {
                  return (f = l[e]);
                });
              var t = e.prototype;
              return (
                (t.error = function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this.i(console.error, l.error, t);
                }),
                (t.warn = function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this.i(console.warn, l.warning, t);
                }),
                (t.info = function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this.i(console.info, l.info, t);
                }),
                (t.debug = function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this.i(console.log, l.debug, t);
                }),
                (t.i = function (t, n, r) {
                  n <= e.getLevel() &&
                    t.apply(console, ["[" + this.t + "] "].concat(r));
                }),
                e
              );
            })(),
            p = T,
            g = _,
            v = b,
            m = w,
            y = A,
            D = "/",
            x = new RegExp(
              [
                "(\\\\.)",
                "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?",
              ].join("|"),
              "g"
            );
          function b(e, t) {
            for (
              var n,
                r = [],
                i = 0,
                o = 0,
                s = "",
                a = (t && t.delimiter) || D,
                u = (t && t.whitelist) || void 0,
                l = !1;
              null !== (n = x.exec(e));

            ) {
              var c = n[0],
                h = n[1],
                f = n.index;
              if (((s += e.slice(o, f)), (o = f + c.length), h))
                (s += h[1]), (l = !0);
              else {
                var d = "",
                  p = n[2],
                  g = n[3],
                  v = n[4],
                  m = n[5];
                if (!l && s.length) {
                  var y = s.length - 1,
                    b = s[y];
                  (!u || u.indexOf(b) > -1) && ((d = b), (s = s.slice(0, y)));
                }
                s && (r.push(s), (s = ""), (l = !1));
                var _ = g || v,
                  w = d || a;
                r.push({
                  name: p || i++,
                  prefix: d,
                  delimiter: w,
                  optional: "?" === m || "*" === m,
                  repeat: "+" === m || "*" === m,
                  pattern: _ ? S(_) : "[^" + C(w === a ? w : w + a) + "]+?",
                });
              }
            }
            return (s || o < e.length) && r.push(s + e.substr(o)), r;
          }
          function _(e, t) {
            return function (n, r) {
              var i = e.exec(n);
              if (!i) return !1;
              for (
                var o = i[0],
                  s = i.index,
                  a = {},
                  u = (r && r.decode) || decodeURIComponent,
                  l = 1;
                l < i.length;
                l++
              )
                if (void 0 !== i[l]) {
                  var c = t[l - 1];
                  a[c.name] = c.repeat
                    ? i[l].split(c.delimiter).map(function (e) {
                        return u(e, c);
                      })
                    : u(i[l], c);
                }
              return { path: o, index: s, params: a };
            };
          }
          function w(e, t) {
            for (var n = new Array(e.length), r = 0; r < e.length; r++)
              "object" == typeof e[r] &&
                (n[r] = new RegExp("^(?:" + e[r].pattern + ")$", E(t)));
            return function (t, r) {
              for (
                var i = "",
                  o = (r && r.encode) || encodeURIComponent,
                  s = !r || !1 !== r.validate,
                  a = 0;
                a < e.length;
                a++
              ) {
                var u = e[a];
                if ("string" != typeof u) {
                  var l,
                    c = t ? t[u.name] : void 0;
                  if (Array.isArray(c)) {
                    if (!u.repeat)
                      throw new TypeError(
                        'Expected "' + u.name + '" to not repeat, but got array'
                      );
                    if (0 === c.length) {
                      if (u.optional) continue;
                      throw new TypeError(
                        'Expected "' + u.name + '" to not be empty'
                      );
                    }
                    for (var h = 0; h < c.length; h++) {
                      if (((l = o(c[h], u)), s && !n[a].test(l)))
                        throw new TypeError(
                          'Expected all "' +
                            u.name +
                            '" to match "' +
                            u.pattern +
                            '"'
                        );
                      i += (0 === h ? u.prefix : u.delimiter) + l;
                    }
                  } else if (
                    "string" != typeof c &&
                    "number" != typeof c &&
                    "boolean" != typeof c
                  ) {
                    if (!u.optional)
                      throw new TypeError(
                        'Expected "' +
                          u.name +
                          '" to be ' +
                          (u.repeat ? "an array" : "a string")
                      );
                  } else {
                    if (((l = o(String(c), u)), s && !n[a].test(l)))
                      throw new TypeError(
                        'Expected "' +
                          u.name +
                          '" to match "' +
                          u.pattern +
                          '", but got "' +
                          l +
                          '"'
                      );
                    i += u.prefix + l;
                  }
                } else i += u;
              }
              return i;
            };
          }
          function C(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
          }
          function S(e) {
            return e.replace(/([=!:$/()])/g, "\\$1");
          }
          function E(e) {
            return e && e.sensitive ? "" : "i";
          }
          function A(e, t, n) {
            for (
              var r = (n = n || {}).strict,
                i = !1 !== n.start,
                o = !1 !== n.end,
                s = n.delimiter || D,
                a = []
                  .concat(n.endsWith || [])
                  .map(C)
                  .concat("$")
                  .join("|"),
                u = i ? "^" : "",
                l = 0;
              l < e.length;
              l++
            ) {
              var c = e[l];
              if ("string" == typeof c) u += C(c);
              else {
                var h = c.repeat
                  ? "(?:" +
                    c.pattern +
                    ")(?:" +
                    C(c.delimiter) +
                    "(?:" +
                    c.pattern +
                    "))*"
                  : c.pattern;
                t && t.push(c),
                  (u += c.optional
                    ? c.prefix
                      ? "(?:" + C(c.prefix) + "(" + h + "))?"
                      : "(" + h + ")?"
                    : C(c.prefix) + "(" + h + ")");
              }
            }
            if (o)
              r || (u += "(?:" + C(s) + ")?"),
                (u += "$" === a ? "$" : "(?=" + a + ")");
            else {
              var f = e[e.length - 1],
                d = "string" == typeof f ? f[f.length - 1] === s : void 0 === f;
              r || (u += "(?:" + C(s) + "(?=" + a + "))?"),
                d || (u += "(?=" + C(s) + "|" + a + ")");
            }
            return new RegExp(u, E(n));
          }
          function T(e, t, n) {
            return e instanceof RegExp
              ? (function (e, t) {
                  if (!t) return e;
                  var n = e.source.match(/\((?!\?)/g);
                  if (n)
                    for (var r = 0; r < n.length; r++)
                      t.push({
                        name: r,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        pattern: null,
                      });
                  return e;
                })(e, t)
              : Array.isArray(e)
              ? (function (e, t, n) {
                  for (var r = [], i = 0; i < e.length; i++)
                    r.push(T(e[i], t, n).source);
                  return new RegExp("(?:" + r.join("|") + ")", E(n));
                })(e, t, n)
              : (function (e, t, n) {
                  return A(b(e, n), t, n);
                })(e, t, n);
          }
          (p.match = function (e, t) {
            var n = [];
            return _(T(e, n, t), n);
          }),
            (p.regexpToFunction = g),
            (p.parse = v),
            (p.compile = function (e, t) {
              return w(b(e, t), t);
            }),
            (p.tokensToFunction = m),
            (p.tokensToRegExp = y);
          var F = {
              container: "container",
              history: "history",
              namespace: "namespace",
              prefix: "data-barba",
              prevent: "prevent",
              wrapper: "wrapper",
            },
            P = new ((function () {
              function e() {
                (this.o = F), (this.u = new DOMParser());
              }
              var t = e.prototype;
              return (
                (t.toString = function (e) {
                  return e.outerHTML;
                }),
                (t.toDocument = function (e) {
                  return this.u.parseFromString(e, "text/html");
                }),
                (t.toElement = function (e) {
                  var t = document.createElement("div");
                  return (t.innerHTML = e), t;
                }),
                (t.getHtml = function (e) {
                  return (
                    void 0 === e && (e = document),
                    this.toString(e.documentElement)
                  );
                }),
                (t.getWrapper = function (e) {
                  return (
                    void 0 === e && (e = document),
                    e.querySelector(
                      "[" + this.o.prefix + '="' + this.o.wrapper + '"]'
                    )
                  );
                }),
                (t.getContainer = function (e) {
                  return (
                    void 0 === e && (e = document),
                    e.querySelector(
                      "[" + this.o.prefix + '="' + this.o.container + '"]'
                    )
                  );
                }),
                (t.removeContainer = function (e) {
                  document.body.contains(e) && e.parentNode.removeChild(e);
                }),
                (t.addContainer = function (e, t) {
                  var n = this.getContainer();
                  n ? this.s(e, n) : t.appendChild(e);
                }),
                (t.getNamespace = function (e) {
                  void 0 === e && (e = document);
                  var t = e.querySelector(
                    "[" + this.o.prefix + "-" + this.o.namespace + "]"
                  );
                  return t
                    ? t.getAttribute(this.o.prefix + "-" + this.o.namespace)
                    : null;
                }),
                (t.getHref = function (e) {
                  if (e.tagName && "a" === e.tagName.toLowerCase()) {
                    if ("string" == typeof e.href) return e.href;
                    var t =
                      e.getAttribute("href") || e.getAttribute("xlink:href");
                    if (t) return this.resolveUrl(t.baseVal || t);
                  }
                  return null;
                }),
                (t.resolveUrl = function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  var r = t.length;
                  if (0 === r)
                    throw new Error(
                      "resolveUrl requires at least one argument; got none."
                    );
                  var i = document.createElement("base");
                  if (((i.href = arguments[0]), 1 === r)) return i.href;
                  var o = document.getElementsByTagName("head")[0];
                  o.insertBefore(i, o.firstChild);
                  for (
                    var s, a = document.createElement("a"), u = 1;
                    u < r;
                    u++
                  )
                    (a.href = arguments[u]), (i.href = s = a.href);
                  return o.removeChild(i), s;
                }),
                (t.s = function (e, t) {
                  t.parentNode.insertBefore(e, t.nextSibling);
                }),
                e
              );
            })())(),
            k = new ((function () {
              function e() {
                (this.h = []), (this.v = -1);
              }
              var r = e.prototype;
              return (
                (r.init = function (e, t) {
                  this.l = "barba";
                  var n = {
                    ns: t,
                    scroll: { x: window.scrollX, y: window.scrollY },
                    url: e,
                  };
                  this.h.push(n), (this.v = 0);
                  var r = { from: this.l, index: 0, states: [].concat(this.h) };
                  window.history && window.history.replaceState(r, "", e);
                }),
                (r.change = function (e, t, n) {
                  if (n && n.state) {
                    var r = n.state,
                      i = r.index;
                    (t = this.m(this.v - i)),
                      this.replace(r.states),
                      (this.v = i);
                  } else this.add(e, t);
                  return t;
                }),
                (r.add = function (e, t) {
                  var n = this.size,
                    r = this.p(t),
                    i = {
                      ns: "tmp",
                      scroll: { x: window.scrollX, y: window.scrollY },
                      url: e,
                    };
                  this.h.push(i), (this.v = n);
                  var o = { from: this.l, index: n, states: [].concat(this.h) };
                  switch (r) {
                    case "push":
                      window.history && window.history.pushState(o, "", e);
                      break;
                    case "replace":
                      window.history && window.history.replaceState(o, "", e);
                  }
                }),
                (r.update = function (e, t) {
                  var r = t || this.v,
                    i = n({}, this.get(r), {}, e);
                  this.set(r, i);
                }),
                (r.remove = function (e) {
                  e ? this.h.splice(e, 1) : this.h.pop(), this.v--;
                }),
                (r.clear = function () {
                  (this.h = []), (this.v = -1);
                }),
                (r.replace = function (e) {
                  this.h = e;
                }),
                (r.get = function (e) {
                  return this.h[e];
                }),
                (r.set = function (e, t) {
                  return (this.h[e] = t);
                }),
                (r.p = function (e) {
                  var t = "push",
                    n = e,
                    r = F.prefix + "-" + F.history;
                  return (
                    n.hasAttribute &&
                      n.hasAttribute(r) &&
                      (t = n.getAttribute(r)),
                    t
                  );
                }),
                (r.m = function (e) {
                  return Math.abs(e) > 1
                    ? e > 0
                      ? "forward"
                      : "back"
                    : 0 === e
                    ? "popstate"
                    : e > 0
                    ? "back"
                    : "forward";
                }),
                t(e, [
                  {
                    key: "current",
                    get: function () {
                      return this.h[this.v];
                    },
                  },
                  {
                    key: "state",
                    get: function () {
                      return this.h[this.h.length - 1];
                    },
                  },
                  {
                    key: "previous",
                    get: function () {
                      return this.v < 1 ? null : this.h[this.v - 1];
                    },
                  },
                  {
                    key: "size",
                    get: function () {
                      return this.h.length;
                    },
                  },
                ]),
                e
              );
            })())(),
            M = function (e, t) {
              try {
                var n = (function () {
                  if (!t.next.html)
                    return Promise.resolve(e).then(function (e) {
                      var n = t.next;
                      if (e) {
                        var r = P.toElement(e);
                        (n.namespace = P.getNamespace(r)),
                          (n.container = P.getContainer(r)),
                          (n.html = e),
                          k.update({ ns: n.namespace });
                        var i = P.toDocument(e);
                        document.title = i.title;
                      }
                    });
                })();
                return Promise.resolve(
                  n && n.then ? n.then(function () {}) : void 0
                );
              } catch (e) {
                return Promise.reject(e);
              }
            },
            B = p,
            O = {
              __proto__: null,
              update: M,
              nextTick: function () {
                return new Promise(function (e) {
                  window.requestAnimationFrame(e);
                });
              },
              pathToRegexp: B,
            },
            R = function () {
              return window.location.origin;
            },
            I = function (e) {
              return void 0 === e && (e = window.location.href), L(e).port;
            },
            L = function (e) {
              var t,
                n = e.match(/:\d+/);
              if (null === n)
                /^http/.test(e) && (t = 80), /^https/.test(e) && (t = 443);
              else {
                var r = n[0].substring(1);
                t = parseInt(r, 10);
              }
              var i,
                o = e.replace(R(), ""),
                s = {},
                a = o.indexOf("#");
              a >= 0 && ((i = o.slice(a + 1)), (o = o.slice(0, a)));
              var u = o.indexOf("?");
              return (
                u >= 0 && ((s = q(o.slice(u + 1))), (o = o.slice(0, u))),
                { hash: i, path: o, port: t, query: s }
              );
            },
            q = function (e) {
              return e.split("&").reduce(function (e, t) {
                var n = t.split("=");
                return (e[n[0]] = n[1]), e;
              }, {});
            },
            j = function (e) {
              return (
                void 0 === e && (e = window.location.href),
                e.replace(/(\/#.*|\/|#.*)$/, "")
              );
            },
            V = {
              __proto__: null,
              getHref: function () {
                return window.location.href;
              },
              getOrigin: R,
              getPort: I,
              getPath: function (e) {
                return void 0 === e && (e = window.location.href), L(e).path;
              },
              parse: L,
              parseQuery: q,
              clean: j,
            };
          function N(e, t, n) {
            return (
              void 0 === t && (t = 2e3),
              new Promise(function (r, i) {
                var o = new XMLHttpRequest();
                (o.onreadystatechange = function () {
                  if (o.readyState === XMLHttpRequest.DONE)
                    if (200 === o.status) r(o.responseText);
                    else if (o.status) {
                      var t = { status: o.status, statusText: o.statusText };
                      n(e, t), i(t);
                    }
                }),
                  (o.ontimeout = function () {
                    var r = new Error("Timeout error [" + t + "]");
                    n(e, r), i(r);
                  }),
                  (o.onerror = function () {
                    var t = new Error("Fetch error");
                    n(e, t), i(t);
                  }),
                  o.open("GET", e),
                  (o.timeout = t),
                  o.setRequestHeader(
                    "Accept",
                    "text/html,application/xhtml+xml,application/xml"
                  ),
                  o.setRequestHeader("x-barba", "yes"),
                  o.send();
              })
            );
          }
          var H = function (e) {
            return (
              !!e &&
              ("object" == typeof e || "function" == typeof e) &&
              "function" == typeof e.then
            );
          };
          function Y(e, t) {
            return (
              void 0 === t && (t = {}),
              function () {
                for (
                  var n = arguments.length, r = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                var o = !1,
                  s = new Promise(function (n, i) {
                    t.async = function () {
                      return (
                        (o = !0),
                        function (e, t) {
                          e ? i(e) : n(t);
                        }
                      );
                    };
                    var s = e.apply(t, r);
                    o || (H(s) ? s.then(n, i) : n(s));
                  });
                return s;
              }
            );
          }
          var W = new ((function (e) {
              function t() {
                var t;
                return (
                  ((t = e.call(this) || this).logger = new d("@barba/core")),
                  (t.all = [
                    "ready",
                    "page",
                    "reset",
                    "currentAdded",
                    "currentRemoved",
                    "nextAdded",
                    "nextRemoved",
                    "beforeOnce",
                    "once",
                    "afterOnce",
                    "before",
                    "beforeLeave",
                    "leave",
                    "afterLeave",
                    "beforeEnter",
                    "enter",
                    "afterEnter",
                    "after",
                  ]),
                  (t.registered = new Map()),
                  t.init(),
                  t
                );
              }
              r(t, e);
              var n = t.prototype;
              return (
                (n.init = function () {
                  var e = this;
                  this.registered.clear(),
                    this.all.forEach(function (t) {
                      e[t] ||
                        (e[t] = function (n, r) {
                          e.registered.has(t) || e.registered.set(t, new Set()),
                            e.registered.get(t).add({ ctx: r || {}, fn: n });
                        });
                    });
                }),
                (n.do = function (e) {
                  for (
                    var t = this,
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      i = 1;
                    i < n;
                    i++
                  )
                    r[i - 1] = arguments[i];
                  if (this.registered.has(e)) {
                    var o = Promise.resolve();
                    return (
                      this.registered.get(e).forEach(function (e) {
                        o = o.then(function () {
                          return Y(e.fn, e.ctx).apply(void 0, r);
                        });
                      }),
                      o.catch(function (n) {
                        t.logger.debug("Hook error [" + e + "]"),
                          t.logger.error(n);
                      })
                    );
                  }
                  return Promise.resolve();
                }),
                (n.clear = function () {
                  var e = this;
                  this.all.forEach(function (t) {
                    delete e[t];
                  }),
                    this.init();
                }),
                (n.help = function () {
                  this.logger.info("Available hooks: " + this.all.join(","));
                  var e = [];
                  this.registered.forEach(function (t, n) {
                    return e.push(n);
                  }),
                    this.logger.info("Registered hooks: " + e.join(","));
                }),
                t
              );
            })(h))(),
            z = (function () {
              function e(e) {
                if (((this.P = []), "boolean" == typeof e)) this.g = e;
                else {
                  var t = Array.isArray(e) ? e : [e];
                  this.P = t.map(function (e) {
                    return B(e);
                  });
                }
              }
              return (
                (e.prototype.checkHref = function (e) {
                  if ("boolean" == typeof this.g) return this.g;
                  var t = L(e).path;
                  return this.P.some(function (e) {
                    return null !== e.exec(t);
                  });
                }),
                e
              );
            })(),
            X = (function (e) {
              function t(t) {
                var n;
                return ((n = e.call(this, t) || this).k = new Map()), n;
              }
              r(t, e);
              var i = t.prototype;
              return (
                (i.set = function (e, t, n) {
                  return (
                    this.k.set(e, { action: n, request: t }),
                    { action: n, request: t }
                  );
                }),
                (i.get = function (e) {
                  return this.k.get(e);
                }),
                (i.getRequest = function (e) {
                  return this.k.get(e).request;
                }),
                (i.getAction = function (e) {
                  return this.k.get(e).action;
                }),
                (i.has = function (e) {
                  return !this.checkHref(e) && this.k.has(e);
                }),
                (i.delete = function (e) {
                  return this.k.delete(e);
                }),
                (i.update = function (e, t) {
                  var r = n({}, this.k.get(e), {}, t);
                  return this.k.set(e, r), r;
                }),
                t
              );
            })(z),
            U = function () {
              return !window.history.pushState;
            },
            G = function (e) {
              return !e.el || !e.href;
            },
            $ = function (e) {
              var t = e.event;
              return (
                t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
              );
            },
            K = function (e) {
              var t = e.el;
              return t.hasAttribute("target") && "_blank" === t.target;
            },
            Q = function (e) {
              var t = e.el;
              return (
                (void 0 !== t.protocol &&
                  window.location.protocol !== t.protocol) ||
                (void 0 !== t.hostname &&
                  window.location.hostname !== t.hostname)
              );
            },
            Z = function (e) {
              var t = e.el;
              return void 0 !== t.port && I() !== I(t.href);
            },
            J = function (e) {
              var t = e.el;
              return (
                t.getAttribute && "string" == typeof t.getAttribute("download")
              );
            },
            ee = function (e) {
              return e.el.hasAttribute(F.prefix + "-" + F.prevent);
            },
            te = function (e) {
              return Boolean(
                e.el.closest("[" + F.prefix + "-" + F.prevent + '="all"]')
              );
            },
            ne = function (e) {
              var t = e.href;
              return j(t) === j() && I(t) === I();
            },
            re = (function (e) {
              function t(t) {
                var n;
                return (
                  ((n = e.call(this, t) || this).suite = []),
                  (n.tests = new Map()),
                  n.init(),
                  n
                );
              }
              r(t, e);
              var n = t.prototype;
              return (
                (n.init = function () {
                  this.add("pushState", U),
                    this.add("exists", G),
                    this.add("newTab", $),
                    this.add("blank", K),
                    this.add("corsDomain", Q),
                    this.add("corsPort", Z),
                    this.add("download", J),
                    this.add("preventSelf", ee),
                    this.add("preventAll", te),
                    this.add("sameUrl", ne, !1);
                }),
                (n.add = function (e, t, n) {
                  void 0 === n && (n = !0),
                    this.tests.set(e, t),
                    n && this.suite.push(e);
                }),
                (n.run = function (e, t, n, r) {
                  return this.tests.get(e)({ el: t, event: n, href: r });
                }),
                (n.checkLink = function (e, t, n) {
                  var r = this;
                  return this.suite.some(function (i) {
                    return r.run(i, e, t, n);
                  });
                }),
                t
              );
            })(z),
            ie = (function (e) {
              function t(n, r) {
                var i;
                void 0 === r && (r = "Barba error");
                for (
                  var o = arguments.length,
                    s = new Array(o > 2 ? o - 2 : 0),
                    a = 2;
                  a < o;
                  a++
                )
                  s[a - 2] = arguments[a];
                return (
                  ((i = e.call.apply(e, [this].concat(s)) || this).error = n),
                  (i.label = r),
                  Error.captureStackTrace &&
                    Error.captureStackTrace(
                      (function (e) {
                        if (void 0 === e)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return e;
                      })(i),
                      t
                    ),
                  (i.name = "BarbaError"),
                  i
                );
              }
              return r(t, e), t;
            })(a(Error)),
            oe = (function () {
              function e(e) {
                void 0 === e && (e = []),
                  (this.logger = new d("@barba/core")),
                  (this.all = []),
                  (this.page = []),
                  (this.once = []),
                  (this.A = [
                    { name: "namespace", type: "strings" },
                    { name: "custom", type: "function" },
                  ]),
                  e && (this.all = this.all.concat(e)),
                  this.update();
              }
              var t = e.prototype;
              return (
                (t.add = function (e, t) {
                  "rule" === e
                    ? this.A.splice(t.position || 0, 0, t.value)
                    : this.all.push(t),
                    this.update();
                }),
                (t.resolve = function (e, t) {
                  var n = this;
                  void 0 === t && (t = {});
                  var r = t.once ? this.once : this.page;
                  r = r.filter(
                    t.self
                      ? function (e) {
                          return e.name && "self" === e.name;
                        }
                      : function (e) {
                          return !e.name || "self" !== e.name;
                        }
                  );
                  var i = new Map(),
                    o = r.find(function (r) {
                      var o = !0,
                        s = {};
                      return (
                        !(!t.self || "self" !== r.name) ||
                        (n.A.reverse().forEach(function (t) {
                          o &&
                            ((o = n.R(r, t, e, s)),
                            r.from &&
                              r.to &&
                              (o =
                                n.R(r, t, e, s, "from") &&
                                n.R(r, t, e, s, "to")),
                            r.from && !r.to && (o = n.R(r, t, e, s, "from")),
                            !r.from && r.to && (o = n.R(r, t, e, s, "to")));
                        }),
                        i.set(r, s),
                        o)
                      );
                    }),
                    s = i.get(o),
                    a = [];
                  if (
                    (a.push(t.once ? "once" : "page"),
                    t.self && a.push("self"),
                    s)
                  ) {
                    var u,
                      l = [o];
                    Object.keys(s).length > 0 && l.push(s),
                      (u = this.logger).info.apply(
                        u,
                        ["Transition found [" + a.join(",") + "]"].concat(l)
                      );
                  } else
                    this.logger.info(
                      "No transition found [" + a.join(",") + "]"
                    );
                  return o;
                }),
                (t.update = function () {
                  var e = this;
                  (this.all = this.all
                    .map(function (t) {
                      return e.T(t);
                    })
                    .sort(function (e, t) {
                      return e.priority - t.priority;
                    })
                    .reverse()
                    .map(function (e) {
                      return delete e.priority, e;
                    })),
                    (this.page = this.all.filter(function (e) {
                      return void 0 !== e.leave || void 0 !== e.enter;
                    })),
                    (this.once = this.all.filter(function (e) {
                      return void 0 !== e.once;
                    }));
                }),
                (t.R = function (e, t, n, r, i) {
                  var o = !0,
                    s = !1,
                    a = e,
                    u = t.name,
                    l = u,
                    c = u,
                    h = u,
                    f = i ? a[i] : a,
                    d = "to" === i ? n.next : n.current;
                  if (i ? f && f[u] : f[u]) {
                    switch (t.type) {
                      case "strings":
                      default:
                        var p = Array.isArray(f[l]) ? f[l] : [f[l]];
                        d[l] && -1 !== p.indexOf(d[l]) && (s = !0),
                          -1 === p.indexOf(d[l]) && (o = !1);
                        break;
                      case "object":
                        var g = Array.isArray(f[c]) ? f[c] : [f[c]];
                        d[c]
                          ? (d[c].name &&
                              -1 !== g.indexOf(d[c].name) &&
                              (s = !0),
                            -1 === g.indexOf(d[c].name) && (o = !1))
                          : (o = !1);
                        break;
                      case "function":
                        f[h](n) ? (s = !0) : (o = !1);
                    }
                    s &&
                      (i
                        ? ((r[i] = r[i] || {}), (r[i][u] = a[i][u]))
                        : (r[u] = a[u]));
                  }
                  return o;
                }),
                (t.O = function (e, t, n) {
                  var r = 0;
                  return (
                    (e[t] || (e.from && e.from[t]) || (e.to && e.to[t])) &&
                      ((r += Math.pow(10, n)),
                      e.from && e.from[t] && (r += 1),
                      e.to && e.to[t] && (r += 2)),
                    r
                  );
                }),
                (t.T = function (e) {
                  var t = this;
                  e.priority = 0;
                  var n = 0;
                  return (
                    this.A.forEach(function (r, i) {
                      n += t.O(e, r.name, i + 1);
                    }),
                    (e.priority = n),
                    e
                  );
                }),
                e
              );
            })(),
            se = (function () {
              function e(e) {
                void 0 === e && (e = []),
                  (this.logger = new d("@barba/core")),
                  (this.S = !1),
                  (this.store = new oe(e));
              }
              var n = e.prototype;
              return (
                (n.get = function (e, t) {
                  return this.store.resolve(e, t);
                }),
                (n.doOnce = function (e) {
                  var t = e.data,
                    n = e.transition;
                  try {
                    var r = function () {
                        i.S = !1;
                      },
                      i = this,
                      o = n || {};
                    i.S = !0;
                    var s = u(
                      function () {
                        return Promise.resolve(i.j("beforeOnce", t, o)).then(
                          function () {
                            return Promise.resolve(i.once(t, o)).then(
                              function () {
                                return Promise.resolve(
                                  i.j("afterOnce", t, o)
                                ).then(function () {});
                              }
                            );
                          }
                        );
                      },
                      function (e) {
                        (i.S = !1),
                          i.logger.debug(
                            "Transition error [before/after/once]"
                          ),
                          i.logger.error(e);
                      }
                    );
                    return Promise.resolve(s && s.then ? s.then(r) : r());
                  } catch (e) {
                    return Promise.reject(e);
                  }
                }),
                (n.doPage = function (e) {
                  var t = e.data,
                    n = e.transition,
                    r = e.page,
                    i = e.wrapper;
                  try {
                    var o = function (e) {
                        if (s) return e;
                        a.S = !1;
                      },
                      s = !1,
                      a = this,
                      l = n || {},
                      c = !0 === l.sync || !1;
                    a.S = !0;
                    var h = u(
                      function () {
                        function e() {
                          return Promise.resolve(a.j("before", t, l)).then(
                            function () {
                              var e = !1;
                              function n(n) {
                                return e
                                  ? n
                                  : Promise.resolve(a.remove(t)).then(
                                      function () {
                                        return Promise.resolve(
                                          a.j("after", t, l)
                                        ).then(function () {});
                                      }
                                    );
                              }
                              var o = (function () {
                                if (c)
                                  return u(
                                    function () {
                                      return Promise.resolve(a.add(t, i)).then(
                                        function () {
                                          return Promise.resolve(
                                            a.j("beforeLeave", t, l)
                                          ).then(function () {
                                            return Promise.resolve(
                                              a.j("beforeEnter", t, l)
                                            ).then(function () {
                                              return Promise.resolve(
                                                Promise.all([
                                                  a.leave(t, l),
                                                  a.enter(t, l),
                                                ])
                                              ).then(function () {
                                                return Promise.resolve(
                                                  a.j("afterLeave", t, l)
                                                ).then(function () {
                                                  return Promise.resolve(
                                                    a.j("afterEnter", t, l)
                                                  ).then(function () {});
                                                });
                                              });
                                            });
                                          });
                                        }
                                      );
                                    },
                                    function (e) {
                                      if (a.M(e))
                                        throw new ie(
                                          e,
                                          "Transition error [sync]"
                                        );
                                    }
                                  );
                                var n = function (n) {
                                    return e
                                      ? n
                                      : u(
                                          function () {
                                            var e = (function () {
                                              if (!1 !== o)
                                                return Promise.resolve(
                                                  a.add(t, i)
                                                ).then(function () {
                                                  return Promise.resolve(
                                                    a.j("beforeEnter", t, l)
                                                  ).then(function () {
                                                    return Promise.resolve(
                                                      a.enter(t, l, o)
                                                    ).then(function () {
                                                      return Promise.resolve(
                                                        a.j("afterEnter", t, l)
                                                      ).then(function () {});
                                                    });
                                                  });
                                                });
                                            })();
                                            if (e && e.then)
                                              return e.then(function () {});
                                          },
                                          function (e) {
                                            if (a.M(e))
                                              throw new ie(
                                                e,
                                                "Transition error [before/after/enter]"
                                              );
                                          }
                                        );
                                  },
                                  o = !1,
                                  s = u(
                                    function () {
                                      return Promise.resolve(
                                        a.j("beforeLeave", t, l)
                                      ).then(function () {
                                        return Promise.resolve(
                                          Promise.all([
                                            a.leave(t, l),
                                            M(r, t),
                                          ]).then(function (e) {
                                            return e[0];
                                          })
                                        ).then(function (e) {
                                          return (
                                            (o = e),
                                            Promise.resolve(
                                              a.j("afterLeave", t, l)
                                            ).then(function () {})
                                          );
                                        });
                                      });
                                    },
                                    function (e) {
                                      if (a.M(e))
                                        throw new ie(
                                          e,
                                          "Transition error [before/after/leave]"
                                        );
                                    }
                                  );
                                return s && s.then ? s.then(n) : n(s);
                              })();
                              return o && o.then ? o.then(n) : n(o);
                            }
                          );
                        }
                        var n = (function () {
                          if (c)
                            return Promise.resolve(M(r, t)).then(
                              function () {}
                            );
                        })();
                        return n && n.then ? n.then(e) : e();
                      },
                      function (e) {
                        if (((a.S = !1), e.name && "BarbaError" === e.name))
                          throw (
                            (a.logger.debug(e.label),
                            a.logger.error(e.error),
                            e)
                          );
                        throw (
                          (a.logger.debug("Transition error [page]"),
                          a.logger.error(e),
                          e)
                        );
                      }
                    );
                    return Promise.resolve(h && h.then ? h.then(o) : o(h));
                  } catch (e) {
                    return Promise.reject(e);
                  }
                }),
                (n.once = function (e, t) {
                  try {
                    return Promise.resolve(W.do("once", e, t)).then(
                      function () {
                        return t.once ? Y(t.once, t)(e) : Promise.resolve();
                      }
                    );
                  } catch (e) {
                    return Promise.reject(e);
                  }
                }),
                (n.leave = function (e, t) {
                  try {
                    return Promise.resolve(W.do("leave", e, t)).then(
                      function () {
                        return t.leave ? Y(t.leave, t)(e) : Promise.resolve();
                      }
                    );
                  } catch (e) {
                    return Promise.reject(e);
                  }
                }),
                (n.enter = function (e, t, n) {
                  try {
                    return Promise.resolve(W.do("enter", e, t)).then(
                      function () {
                        return t.enter
                          ? Y(t.enter, t)(e, n)
                          : Promise.resolve();
                      }
                    );
                  } catch (e) {
                    return Promise.reject(e);
                  }
                }),
                (n.add = function (e, t) {
                  try {
                    return (
                      P.addContainer(e.next.container, t),
                      W.do("nextAdded", e),
                      Promise.resolve()
                    );
                  } catch (e) {
                    return Promise.reject(e);
                  }
                }),
                (n.remove = function (e) {
                  try {
                    return (
                      P.removeContainer(e.current.container),
                      W.do("currentRemoved", e),
                      Promise.resolve()
                    );
                  } catch (e) {
                    return Promise.reject(e);
                  }
                }),
                (n.M = function (e) {
                  return e.message
                    ? !/Timeout error|Fetch error/.test(e.message)
                    : !e.status;
                }),
                (n.j = function (e, t, n) {
                  try {
                    return Promise.resolve(W.do(e, t, n)).then(function () {
                      return n[e] ? Y(n[e], n)(t) : Promise.resolve();
                    });
                  } catch (e) {
                    return Promise.reject(e);
                  }
                }),
                t(e, [
                  {
                    key: "isRunning",
                    get: function () {
                      return this.S;
                    },
                    set: function (e) {
                      this.S = e;
                    },
                  },
                  {
                    key: "hasOnce",
                    get: function () {
                      return this.store.once.length > 0;
                    },
                  },
                  {
                    key: "hasSelf",
                    get: function () {
                      return this.store.all.some(function (e) {
                        return "self" === e.name;
                      });
                    },
                  },
                  {
                    key: "shouldWait",
                    get: function () {
                      return this.store.all.some(function (e) {
                        return (e.to && !e.to.route) || e.sync;
                      });
                    },
                  },
                ]),
                e
              );
            })(),
            ae = (function () {
              function e(e) {
                var t = this;
                (this.names = [
                  "beforeLeave",
                  "afterLeave",
                  "beforeEnter",
                  "afterEnter",
                ]),
                  (this.byNamespace = new Map()),
                  0 !== e.length &&
                    (e.forEach(function (e) {
                      t.byNamespace.set(e.namespace, e);
                    }),
                    this.names.forEach(function (e) {
                      W[e](t.L(e));
                    }));
              }
              return (
                (e.prototype.L = function (e) {
                  var t = this;
                  return function (n) {
                    var r = e.match(/enter/i) ? n.next : n.current,
                      i = t.byNamespace.get(r.namespace);
                    return i && i[e] ? Y(i[e], i)(n) : Promise.resolve();
                  };
                }),
                e
              );
            })();
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector),
            Element.prototype.closest ||
              (Element.prototype.closest = function (e) {
                var t = this;
                do {
                  if (t.matches(e)) return t;
                  t = t.parentElement || t.parentNode;
                } while (null !== t && 1 === t.nodeType);
                return null;
              });
          var ue = {
            container: null,
            html: "",
            namespace: "",
            url: { hash: "", href: "", path: "", port: null, query: {} },
          };
          return new ((function () {
            function e() {
              (this.version = c),
                (this.schemaPage = ue),
                (this.Logger = d),
                (this.logger = new d("@barba/core")),
                (this.plugins = []),
                (this.hooks = W),
                (this.dom = P),
                (this.helpers = O),
                (this.history = k),
                (this.request = N),
                (this.url = V);
            }
            var r = e.prototype;
            return (
              (r.use = function (e, t) {
                var n = this.plugins;
                n.indexOf(e) > -1
                  ? this.logger.warn(
                      "Plugin [" + e.name + "] already installed."
                    )
                  : "function" == typeof e.install
                  ? (e.install(this, t), n.push(e))
                  : this.logger.warn(
                      "Plugin [" + e.name + '] has no "install" method.'
                    );
              }),
              (r.init = function (e) {
                var t = void 0 === e ? {} : e,
                  r = t.transitions,
                  i = void 0 === r ? [] : r,
                  o = t.views,
                  s = void 0 === o ? [] : o,
                  a = t.schema,
                  u = void 0 === a ? F : a,
                  l = t.requestError,
                  c = t.timeout,
                  h = void 0 === c ? 2e3 : c,
                  f = t.cacheIgnore,
                  p = void 0 !== f && f,
                  g = t.prefetchIgnore,
                  v = void 0 !== g && g,
                  m = t.preventRunning,
                  y = void 0 !== m && m,
                  D = t.prevent,
                  x = void 0 === D ? null : D,
                  b = t.debug,
                  _ = t.logLevel;
                if (
                  (d.setLevel(
                    !0 === (void 0 !== b && b)
                      ? "debug"
                      : void 0 === _
                      ? "off"
                      : _
                  ),
                  this.logger.info(this.version),
                  Object.keys(u).forEach(function (e) {
                    F[e] && (F[e] = u[e]);
                  }),
                  (this.$ = l),
                  (this.timeout = h),
                  (this.cacheIgnore = p),
                  (this.prefetchIgnore = v),
                  (this.preventRunning = y),
                  (this._ = this.dom.getWrapper()),
                  !this._)
                )
                  throw new Error("[@barba/core] No Barba wrapper found");
                this._.setAttribute("aria-live", "polite"), this.q();
                var w = this.data.current;
                if (!w.container)
                  throw new Error("[@barba/core] No Barba container found");
                if (
                  ((this.cache = new X(p)),
                  (this.prevent = new re(v)),
                  (this.transitions = new se(i)),
                  (this.views = new ae(s)),
                  null !== x)
                ) {
                  if ("function" != typeof x)
                    throw new Error(
                      "[@barba/core] Prevent should be a function"
                    );
                  this.prevent.add("preventCustom", x);
                }
                this.history.init(w.url.href, w.namespace),
                  (this.B = this.B.bind(this)),
                  (this.U = this.U.bind(this)),
                  (this.D = this.D.bind(this)),
                  this.F(),
                  this.plugins.forEach(function (e) {
                    return e.init();
                  });
                var C = this.data;
                (C.trigger = "barba"),
                  (C.next = C.current),
                  (C.current = n({}, this.schemaPage)),
                  this.hooks.do("ready", C),
                  this.once(C),
                  this.q();
              }),
              (r.destroy = function () {
                this.q(),
                  this.H(),
                  this.history.clear(),
                  this.hooks.clear(),
                  (this.plugins = []);
              }),
              (r.force = function (e) {
                window.location.assign(e);
              }),
              (r.go = function (e, t, n) {
                var r;
                if ((void 0 === t && (t = "barba"), this.transitions.isRunning))
                  this.force(e);
                else if (
                  !(r =
                    "popstate" === t
                      ? this.history.current &&
                        this.url.getPath(this.history.current.url) ===
                          this.url.getPath(e)
                      : this.prevent.run("sameUrl", null, null, e)) ||
                  this.transitions.hasSelf
                )
                  return (
                    (t = this.history.change(e, t, n)),
                    n && (n.stopPropagation(), n.preventDefault()),
                    this.page(e, t, r)
                  );
              }),
              (r.once = function (e) {
                try {
                  var t = this;
                  return Promise.resolve(t.hooks.do("beforeEnter", e)).then(
                    function () {
                      function n() {
                        return Promise.resolve(
                          t.hooks.do("afterEnter", e)
                        ).then(function () {});
                      }
                      var r = (function () {
                        if (t.transitions.hasOnce) {
                          var n = t.transitions.get(e, { once: !0 });
                          return Promise.resolve(
                            t.transitions.doOnce({ transition: n, data: e })
                          ).then(function () {});
                        }
                      })();
                      return r && r.then ? r.then(n) : n();
                    }
                  );
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (r.page = function (e, t, r) {
                try {
                  var i = function () {
                      var e = o.data;
                      return Promise.resolve(o.hooks.do("page", e)).then(
                        function () {
                          var t = u(
                            function () {
                              var t = o.transitions.get(e, {
                                once: !1,
                                self: r,
                              });
                              return Promise.resolve(
                                o.transitions.doPage({
                                  data: e,
                                  page: s,
                                  transition: t,
                                  wrapper: o._,
                                })
                              ).then(function () {
                                o.q();
                              });
                            },
                            function () {
                              0 === d.getLevel() && o.force(e.current.url.href);
                            }
                          );
                          if (t && t.then) return t.then(function () {});
                        }
                      );
                    },
                    o = this;
                  (o.data.next.url = n({ href: e }, o.url.parse(e))),
                    (o.data.trigger = t);
                  var s = o.cache.has(e)
                      ? o.cache.update(e, { action: "click" }).request
                      : o.cache.set(
                          e,
                          o.request(e, o.timeout, o.onRequestError.bind(o, t)),
                          "click"
                        ).request,
                    a = (function () {
                      if (o.transitions.shouldWait)
                        return Promise.resolve(M(s, o.data)).then(
                          function () {}
                        );
                    })();
                  return Promise.resolve(a && a.then ? a.then(i) : i());
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (r.onRequestError = function (e) {
                this.transitions.isRunning = !1;
                for (
                  var t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                var i = n[0],
                  o = n[1],
                  s = this.cache.getAction(i);
                return (
                  this.cache.delete(i),
                  !(
                    (this.$ && !1 === this.$(e, s, i, o)) ||
                    ("click" === s && this.force(i), 1)
                  )
                );
              }),
              (r.prefetch = function (e) {
                var t = this;
                this.cache.has(e) ||
                  this.cache.set(
                    e,
                    this.request(
                      e,
                      this.timeout,
                      this.onRequestError.bind(this, "barba")
                    ).catch(function (e) {
                      t.logger.error(e);
                    }),
                    "prefetch"
                  );
              }),
              (r.F = function () {
                !0 !== this.prefetchIgnore &&
                  (document.addEventListener("mouseover", this.B),
                  document.addEventListener("touchstart", this.B)),
                  document.addEventListener("click", this.U),
                  window.addEventListener("popstate", this.D);
              }),
              (r.H = function () {
                !0 !== this.prefetchIgnore &&
                  (document.removeEventListener("mouseover", this.B),
                  document.removeEventListener("touchstart", this.B)),
                  document.removeEventListener("click", this.U),
                  window.removeEventListener("popstate", this.D);
              }),
              (r.B = function (e) {
                var t = this,
                  n = this.I(e);
                if (n) {
                  var r = this.dom.getHref(n);
                  this.prevent.checkHref(r) ||
                    this.cache.has(r) ||
                    this.cache.set(
                      r,
                      this.request(
                        r,
                        this.timeout,
                        this.onRequestError.bind(this, n)
                      ).catch(function (e) {
                        t.logger.error(e);
                      }),
                      "enter"
                    );
                }
              }),
              (r.U = function (e) {
                var t = this.I(e);
                if (t)
                  return this.transitions.isRunning && this.preventRunning
                    ? (e.preventDefault(), void e.stopPropagation())
                    : void this.go(this.dom.getHref(t), t, e);
              }),
              (r.D = function (e) {
                this.go(this.url.getHref(), "popstate", e);
              }),
              (r.I = function (e) {
                for (var t = e.target; t && !this.dom.getHref(t); )
                  t = t.parentNode;
                if (t && !this.prevent.checkLink(t, e, this.dom.getHref(t)))
                  return t;
              }),
              (r.q = function () {
                var e = this.url.getHref(),
                  t = {
                    container: this.dom.getContainer(),
                    html: this.dom.getHtml(),
                    namespace: this.dom.getNamespace(),
                    url: n({ href: e }, this.url.parse(e)),
                  };
                (this.C = {
                  current: t,
                  next: n({}, this.schemaPage),
                  trigger: void 0,
                }),
                  this.hooks.do("reset", this.data);
              }),
              t(e, [
                {
                  key: "data",
                  get: function () {
                    return this.C;
                  },
                },
                {
                  key: "wrapper",
                  get: function () {
                    return this._;
                  },
                },
              ]),
              e
            );
          })())();
        })();
      },
      842: function (e, t, n) {
        var r;
        (r = function () {
          return (function (e) {
            var t = {};
            function n(r) {
              if (t[r]) return t[r].exports;
              var i = (t[r] = { i: r, l: !1, exports: {} });
              return (
                e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
              );
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function (e, t, r) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: r });
              }),
              (n.r = function (e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                  return e;
                var r = Object.create(null);
                if (
                  (n.r(r),
                  Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var i in e)
                    n.d(
                      r,
                      i,
                      function (t) {
                        return e[t];
                      }.bind(null, i)
                    );
                return r;
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, "a", t), t;
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.p = ""),
              n((n.s = 20))
            );
          })([
            function (e, t) {
              var r = {};
              (e.exports = r),
                (function () {
                  (r._baseDelta = 1e3 / 60),
                    (r._nextId = 0),
                    (r._seed = 0),
                    (r._nowStartTime = +new Date()),
                    (r._warnedOnce = {}),
                    (r._decomp = null),
                    (r.extend = function (e, t) {
                      var n, i;
                      "boolean" == typeof t
                        ? ((n = 2), (i = t))
                        : ((n = 1), (i = !0));
                      for (var o = n; o < arguments.length; o++) {
                        var s = arguments[o];
                        if (s)
                          for (var a in s)
                            i && s[a] && s[a].constructor === Object
                              ? e[a] && e[a].constructor !== Object
                                ? (e[a] = s[a])
                                : ((e[a] = e[a] || {}), r.extend(e[a], i, s[a]))
                              : (e[a] = s[a]);
                      }
                      return e;
                    }),
                    (r.clone = function (e, t) {
                      return r.extend({}, t, e);
                    }),
                    (r.keys = function (e) {
                      if (Object.keys) return Object.keys(e);
                      var t = [];
                      for (var n in e) t.push(n);
                      return t;
                    }),
                    (r.values = function (e) {
                      var t = [];
                      if (Object.keys) {
                        for (var n = Object.keys(e), r = 0; r < n.length; r++)
                          t.push(e[n[r]]);
                        return t;
                      }
                      for (var i in e) t.push(e[i]);
                      return t;
                    }),
                    (r.get = function (e, t, n, r) {
                      t = t.split(".").slice(n, r);
                      for (var i = 0; i < t.length; i += 1) e = e[t[i]];
                      return e;
                    }),
                    (r.set = function (e, t, n, i, o) {
                      var s = t.split(".").slice(i, o);
                      return (r.get(e, t, 0, -1)[s[s.length - 1]] = n), n;
                    }),
                    (r.shuffle = function (e) {
                      for (var t = e.length - 1; t > 0; t--) {
                        var n = Math.floor(r.random() * (t + 1)),
                          i = e[t];
                        (e[t] = e[n]), (e[n] = i);
                      }
                      return e;
                    }),
                    (r.choose = function (e) {
                      return e[Math.floor(r.random() * e.length)];
                    }),
                    (r.isElement = function (e) {
                      return "undefined" != typeof HTMLElement
                        ? e instanceof HTMLElement
                        : !!(e && e.nodeType && e.nodeName);
                    }),
                    (r.isArray = function (e) {
                      return (
                        "[object Array]" === Object.prototype.toString.call(e)
                      );
                    }),
                    (r.isFunction = function (e) {
                      return "function" == typeof e;
                    }),
                    (r.isPlainObject = function (e) {
                      return "object" == typeof e && e.constructor === Object;
                    }),
                    (r.isString = function (e) {
                      return "[object String]" === toString.call(e);
                    }),
                    (r.clamp = function (e, t, n) {
                      return e < t ? t : e > n ? n : e;
                    }),
                    (r.sign = function (e) {
                      return e < 0 ? -1 : 1;
                    }),
                    (r.now = function () {
                      if ("undefined" != typeof window && window.performance) {
                        if (window.performance.now)
                          return window.performance.now();
                        if (window.performance.webkitNow)
                          return window.performance.webkitNow();
                      }
                      return Date.now
                        ? Date.now()
                        : new Date() - r._nowStartTime;
                    }),
                    (r.random = function (t, n) {
                      return (
                        (n = void 0 !== n ? n : 1),
                        (t = void 0 !== t ? t : 0) + e() * (n - t)
                      );
                    });
                  var e = function () {
                    return (
                      (r._seed = (9301 * r._seed + 49297) % 233280),
                      r._seed / 233280
                    );
                  };
                  (r.colorToNumber = function (e) {
                    return (
                      3 == (e = e.replace("#", "")).length &&
                        (e =
                          e.charAt(0) +
                          e.charAt(0) +
                          e.charAt(1) +
                          e.charAt(1) +
                          e.charAt(2) +
                          e.charAt(2)),
                      parseInt(e, 16)
                    );
                  }),
                    (r.logLevel = 1),
                    (r.log = function () {
                      console &&
                        r.logLevel > 0 &&
                        r.logLevel <= 3 &&
                        console.log.apply(
                          console,
                          ["matter-js:"].concat(
                            Array.prototype.slice.call(arguments)
                          )
                        );
                    }),
                    (r.info = function () {
                      console &&
                        r.logLevel > 0 &&
                        r.logLevel <= 2 &&
                        console.info.apply(
                          console,
                          ["matter-js:"].concat(
                            Array.prototype.slice.call(arguments)
                          )
                        );
                    }),
                    (r.warn = function () {
                      console &&
                        r.logLevel > 0 &&
                        r.logLevel <= 3 &&
                        console.warn.apply(
                          console,
                          ["matter-js:"].concat(
                            Array.prototype.slice.call(arguments)
                          )
                        );
                    }),
                    (r.warnOnce = function () {
                      var e = Array.prototype.slice.call(arguments).join(" ");
                      r._warnedOnce[e] || (r.warn(e), (r._warnedOnce[e] = !0));
                    }),
                    (r.deprecated = function (e, t, n) {
                      e[t] = r.chain(function () {
                        r.warnOnce("🔅 deprecated 🔅", n);
                      }, e[t]);
                    }),
                    (r.nextId = function () {
                      return r._nextId++;
                    }),
                    (r.indexOf = function (e, t) {
                      if (e.indexOf) return e.indexOf(t);
                      for (var n = 0; n < e.length; n++)
                        if (e[n] === t) return n;
                      return -1;
                    }),
                    (r.map = function (e, t) {
                      if (e.map) return e.map(t);
                      for (var n = [], r = 0; r < e.length; r += 1)
                        n.push(t(e[r]));
                      return n;
                    }),
                    (r.topologicalSort = function (e) {
                      var t = [],
                        n = [],
                        i = [];
                      for (var o in e)
                        n[o] || i[o] || r._topologicalSort(o, n, i, e, t);
                      return t;
                    }),
                    (r._topologicalSort = function (e, t, n, i, o) {
                      var s = i[e] || [];
                      n[e] = !0;
                      for (var a = 0; a < s.length; a += 1) {
                        var u = s[a];
                        n[u] || t[u] || r._topologicalSort(u, t, n, i, o);
                      }
                      (n[e] = !1), (t[e] = !0), o.push(e);
                    }),
                    (r.chain = function () {
                      for (var e = [], t = 0; t < arguments.length; t += 1) {
                        var n = arguments[t];
                        n._chained ? e.push.apply(e, n._chained) : e.push(n);
                      }
                      var r = function () {
                        for (
                          var t,
                            n = new Array(arguments.length),
                            r = 0,
                            i = arguments.length;
                          r < i;
                          r++
                        )
                          n[r] = arguments[r];
                        for (r = 0; r < e.length; r += 1) {
                          var o = e[r].apply(t, n);
                          void 0 !== o && (t = o);
                        }
                        return t;
                      };
                      return (r._chained = e), r;
                    }),
                    (r.chainPathBefore = function (e, t, n) {
                      return r.set(e, t, r.chain(n, r.get(e, t)));
                    }),
                    (r.chainPathAfter = function (e, t, n) {
                      return r.set(e, t, r.chain(r.get(e, t), n));
                    }),
                    (r.setDecomp = function (e) {
                      r._decomp = e;
                    }),
                    (r.getDecomp = function () {
                      var e = r._decomp;
                      try {
                        e ||
                          "undefined" == typeof window ||
                          (e = window.decomp),
                          e || void 0 === n.g || (e = n.g.decomp);
                      } catch (t) {
                        e = null;
                      }
                      return e;
                    });
                })();
            },
            function (e, t) {
              var n = {};
              (e.exports = n),
                (n.create = function (e) {
                  var t = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
                  return e && n.update(t, e), t;
                }),
                (n.update = function (e, t, n) {
                  (e.min.x = 1 / 0),
                    (e.max.x = -1 / 0),
                    (e.min.y = 1 / 0),
                    (e.max.y = -1 / 0);
                  for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.x > e.max.x && (e.max.x = i.x),
                      i.x < e.min.x && (e.min.x = i.x),
                      i.y > e.max.y && (e.max.y = i.y),
                      i.y < e.min.y && (e.min.y = i.y);
                  }
                  n &&
                    (n.x > 0 ? (e.max.x += n.x) : (e.min.x += n.x),
                    n.y > 0 ? (e.max.y += n.y) : (e.min.y += n.y));
                }),
                (n.contains = function (e, t) {
                  return (
                    t.x >= e.min.x &&
                    t.x <= e.max.x &&
                    t.y >= e.min.y &&
                    t.y <= e.max.y
                  );
                }),
                (n.overlaps = function (e, t) {
                  return (
                    e.min.x <= t.max.x &&
                    e.max.x >= t.min.x &&
                    e.max.y >= t.min.y &&
                    e.min.y <= t.max.y
                  );
                }),
                (n.translate = function (e, t) {
                  (e.min.x += t.x),
                    (e.max.x += t.x),
                    (e.min.y += t.y),
                    (e.max.y += t.y);
                }),
                (n.shift = function (e, t) {
                  var n = e.max.x - e.min.x,
                    r = e.max.y - e.min.y;
                  (e.min.x = t.x),
                    (e.max.x = t.x + n),
                    (e.min.y = t.y),
                    (e.max.y = t.y + r);
                });
            },
            function (e, t) {
              var n = {};
              (e.exports = n),
                (n.create = function (e, t) {
                  return { x: e || 0, y: t || 0 };
                }),
                (n.clone = function (e) {
                  return { x: e.x, y: e.y };
                }),
                (n.magnitude = function (e) {
                  return Math.sqrt(e.x * e.x + e.y * e.y);
                }),
                (n.magnitudeSquared = function (e) {
                  return e.x * e.x + e.y * e.y;
                }),
                (n.rotate = function (e, t, n) {
                  var r = Math.cos(t),
                    i = Math.sin(t);
                  n || (n = {});
                  var o = e.x * r - e.y * i;
                  return (n.y = e.x * i + e.y * r), (n.x = o), n;
                }),
                (n.rotateAbout = function (e, t, n, r) {
                  var i = Math.cos(t),
                    o = Math.sin(t);
                  r || (r = {});
                  var s = n.x + ((e.x - n.x) * i - (e.y - n.y) * o);
                  return (
                    (r.y = n.y + ((e.x - n.x) * o + (e.y - n.y) * i)),
                    (r.x = s),
                    r
                  );
                }),
                (n.normalise = function (e) {
                  var t = n.magnitude(e);
                  return 0 === t ? { x: 0, y: 0 } : { x: e.x / t, y: e.y / t };
                }),
                (n.dot = function (e, t) {
                  return e.x * t.x + e.y * t.y;
                }),
                (n.cross = function (e, t) {
                  return e.x * t.y - e.y * t.x;
                }),
                (n.cross3 = function (e, t, n) {
                  return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x);
                }),
                (n.add = function (e, t, n) {
                  return n || (n = {}), (n.x = e.x + t.x), (n.y = e.y + t.y), n;
                }),
                (n.sub = function (e, t, n) {
                  return n || (n = {}), (n.x = e.x - t.x), (n.y = e.y - t.y), n;
                }),
                (n.mult = function (e, t) {
                  return { x: e.x * t, y: e.y * t };
                }),
                (n.div = function (e, t) {
                  return { x: e.x / t, y: e.y / t };
                }),
                (n.perp = function (e, t) {
                  return { x: (t = !0 === t ? -1 : 1) * -e.y, y: t * e.x };
                }),
                (n.neg = function (e) {
                  return { x: -e.x, y: -e.y };
                }),
                (n.angle = function (e, t) {
                  return Math.atan2(t.y - e.y, t.x - e.x);
                }),
                (n._temp = [
                  n.create(),
                  n.create(),
                  n.create(),
                  n.create(),
                  n.create(),
                  n.create(),
                ]);
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(2),
                o = n(0);
              (r.create = function (e, t) {
                for (var n = [], r = 0; r < e.length; r++) {
                  var i = e[r],
                    o = { x: i.x, y: i.y, index: r, body: t, isInternal: !1 };
                  n.push(o);
                }
                return n;
              }),
                (r.fromPath = function (e, t) {
                  var n = [];
                  return (
                    e.replace(
                      /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                      function (e, t, r) {
                        n.push({ x: parseFloat(t), y: parseFloat(r) });
                      }
                    ),
                    r.create(n, t)
                  );
                }),
                (r.centre = function (e) {
                  for (
                    var t, n, o, s = r.area(e, !0), a = { x: 0, y: 0 }, u = 0;
                    u < e.length;
                    u++
                  )
                    (o = (u + 1) % e.length),
                      (t = i.cross(e[u], e[o])),
                      (n = i.mult(i.add(e[u], e[o]), t)),
                      (a = i.add(a, n));
                  return i.div(a, 6 * s);
                }),
                (r.mean = function (e) {
                  for (var t = { x: 0, y: 0 }, n = 0; n < e.length; n++)
                    (t.x += e[n].x), (t.y += e[n].y);
                  return i.div(t, e.length);
                }),
                (r.area = function (e, t) {
                  for (var n = 0, r = e.length - 1, i = 0; i < e.length; i++)
                    (n += (e[r].x - e[i].x) * (e[r].y + e[i].y)), (r = i);
                  return t ? n / 2 : Math.abs(n) / 2;
                }),
                (r.inertia = function (e, t) {
                  for (var n, r, o = 0, s = 0, a = e, u = 0; u < a.length; u++)
                    (r = (u + 1) % a.length),
                      (o +=
                        (n = Math.abs(i.cross(a[r], a[u]))) *
                        (i.dot(a[r], a[r]) +
                          i.dot(a[r], a[u]) +
                          i.dot(a[u], a[u]))),
                      (s += n);
                  return (t / 6) * (o / s);
                }),
                (r.translate = function (e, t, n) {
                  n = void 0 !== n ? n : 1;
                  var r,
                    i = e.length,
                    o = t.x * n,
                    s = t.y * n;
                  for (r = 0; r < i; r++) (e[r].x += o), (e[r].y += s);
                  return e;
                }),
                (r.rotate = function (e, t, n) {
                  if (0 !== t) {
                    var r,
                      i,
                      o,
                      s,
                      a = Math.cos(t),
                      u = Math.sin(t),
                      l = n.x,
                      c = n.y,
                      h = e.length;
                    for (s = 0; s < h; s++)
                      (i = (r = e[s]).x - l),
                        (o = r.y - c),
                        (r.x = l + (i * a - o * u)),
                        (r.y = c + (i * u + o * a));
                    return e;
                  }
                }),
                (r.contains = function (e, t) {
                  for (
                    var n, r = t.x, i = t.y, o = e.length, s = e[o - 1], a = 0;
                    a < o;
                    a++
                  ) {
                    if (
                      ((n = e[a]),
                      (r - s.x) * (n.y - s.y) + (i - s.y) * (s.x - n.x) > 0)
                    )
                      return !1;
                    s = n;
                  }
                  return !0;
                }),
                (r.scale = function (e, t, n, o) {
                  if (1 === t && 1 === n) return e;
                  var s, a;
                  o = o || r.centre(e);
                  for (var u = 0; u < e.length; u++)
                    (s = e[u]),
                      (a = i.sub(s, o)),
                      (e[u].x = o.x + a.x * t),
                      (e[u].y = o.y + a.y * n);
                  return e;
                }),
                (r.chamfer = function (e, t, n, r, s) {
                  (t = "number" == typeof t ? [t] : t || [8]),
                    (n = void 0 !== n ? n : -1),
                    (r = r || 2),
                    (s = s || 14);
                  for (var a = [], u = 0; u < e.length; u++) {
                    var l = e[u - 1 >= 0 ? u - 1 : e.length - 1],
                      c = e[u],
                      h = e[(u + 1) % e.length],
                      f = t[u < t.length ? u : t.length - 1];
                    if (0 !== f) {
                      var d = i.normalise({ x: c.y - l.y, y: l.x - c.x }),
                        p = i.normalise({ x: h.y - c.y, y: c.x - h.x }),
                        g = Math.sqrt(2 * Math.pow(f, 2)),
                        v = i.mult(o.clone(d), f),
                        m = i.normalise(i.mult(i.add(d, p), 0.5)),
                        y = i.sub(c, i.mult(m, g)),
                        D = n;
                      -1 === n && (D = 1.75 * Math.pow(f, 0.32)),
                        (D = o.clamp(D, r, s)) % 2 == 1 && (D += 1);
                      for (
                        var x = Math.acos(i.dot(d, p)) / D, b = 0;
                        b < D;
                        b++
                      )
                        a.push(i.add(i.rotate(v, x * b), y));
                    } else a.push(c);
                  }
                  return a;
                }),
                (r.clockwiseSort = function (e) {
                  var t = r.mean(e);
                  return (
                    e.sort(function (e, n) {
                      return i.angle(t, e) - i.angle(t, n);
                    }),
                    e
                  );
                }),
                (r.isConvex = function (e) {
                  var t,
                    n,
                    r,
                    i,
                    o = 0,
                    s = e.length;
                  if (s < 3) return null;
                  for (t = 0; t < s; t++)
                    if (
                      ((r = (t + 2) % s),
                      (i =
                        (e[(n = (t + 1) % s)].x - e[t].x) * (e[r].y - e[n].y)),
                      (i -= (e[n].y - e[t].y) * (e[r].x - e[n].x)) < 0
                        ? (o |= 1)
                        : i > 0 && (o |= 2),
                      3 === o)
                    )
                      return !1;
                  return 0 !== o || null;
                }),
                (r.hull = function (e) {
                  var t,
                    n,
                    r = [],
                    o = [];
                  for (
                    (e = e.slice(0)).sort(function (e, t) {
                      var n = e.x - t.x;
                      return 0 !== n ? n : e.y - t.y;
                    }),
                      n = 0;
                    n < e.length;
                    n += 1
                  ) {
                    for (
                      t = e[n];
                      o.length >= 2 &&
                      i.cross3(o[o.length - 2], o[o.length - 1], t) <= 0;

                    )
                      o.pop();
                    o.push(t);
                  }
                  for (n = e.length - 1; n >= 0; n -= 1) {
                    for (
                      t = e[n];
                      r.length >= 2 &&
                      i.cross3(r[r.length - 2], r[r.length - 1], t) <= 0;

                    )
                      r.pop();
                    r.push(t);
                  }
                  return r.pop(), o.pop(), r.concat(o);
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(3),
                o = n(2),
                s = n(7),
                a = n(0),
                u = n(1),
                l = n(11);
              !(function () {
                (r._timeCorrection = !0),
                  (r._inertiaScale = 4),
                  (r._nextCollidingGroupId = 1),
                  (r._nextNonCollidingGroupId = -1),
                  (r._nextCategory = 1),
                  (r._baseDelta = 1e3 / 60),
                  (r.create = function (t) {
                    var n = {
                        id: a.nextId(),
                        type: "body",
                        label: "Body",
                        parts: [],
                        plugin: {},
                        angle: 0,
                        vertices: i.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                        position: { x: 0, y: 0 },
                        force: { x: 0, y: 0 },
                        torque: 0,
                        positionImpulse: { x: 0, y: 0 },
                        constraintImpulse: { x: 0, y: 0, angle: 0 },
                        totalContacts: 0,
                        speed: 0,
                        angularSpeed: 0,
                        velocity: { x: 0, y: 0 },
                        angularVelocity: 0,
                        isSensor: !1,
                        isStatic: !1,
                        isSleeping: !1,
                        motion: 0,
                        sleepThreshold: 60,
                        density: 0.001,
                        restitution: 0,
                        friction: 0.1,
                        frictionStatic: 0.5,
                        frictionAir: 0.01,
                        collisionFilter: {
                          category: 1,
                          mask: 4294967295,
                          group: 0,
                        },
                        slop: 0.05,
                        timeScale: 1,
                        render: {
                          visible: !0,
                          opacity: 1,
                          strokeStyle: null,
                          fillStyle: null,
                          lineWidth: null,
                          sprite: {
                            xScale: 1,
                            yScale: 1,
                            xOffset: 0,
                            yOffset: 0,
                          },
                        },
                        events: null,
                        bounds: null,
                        chamfer: null,
                        circleRadius: 0,
                        positionPrev: null,
                        anglePrev: 0,
                        parent: null,
                        axes: null,
                        area: 0,
                        mass: 0,
                        inertia: 0,
                        deltaTime: 1e3 / 60,
                        _original: null,
                      },
                      r = a.extend(n, t);
                    return e(r, t), r;
                  }),
                  (r.nextGroup = function (e) {
                    return e
                      ? r._nextNonCollidingGroupId--
                      : r._nextCollidingGroupId++;
                  }),
                  (r.nextCategory = function () {
                    return (
                      (r._nextCategory = r._nextCategory << 1), r._nextCategory
                    );
                  });
                var e = function (e, t) {
                  (t = t || {}),
                    r.set(e, {
                      bounds: e.bounds || u.create(e.vertices),
                      positionPrev: e.positionPrev || o.clone(e.position),
                      anglePrev: e.anglePrev || e.angle,
                      vertices: e.vertices,
                      parts: e.parts || [e],
                      isStatic: e.isStatic,
                      isSleeping: e.isSleeping,
                      parent: e.parent || e,
                    }),
                    i.rotate(e.vertices, e.angle, e.position),
                    l.rotate(e.axes, e.angle),
                    u.update(e.bounds, e.vertices, e.velocity),
                    r.set(e, {
                      axes: t.axes || e.axes,
                      area: t.area || e.area,
                      mass: t.mass || e.mass,
                      inertia: t.inertia || e.inertia,
                    });
                  var n = e.isStatic
                      ? "#14151f"
                      : a.choose([
                          "#f19648",
                          "#f5d259",
                          "#f55a3c",
                          "#063e7b",
                          "#ececd1",
                        ]),
                    s = e.isStatic ? "#555" : "#ccc",
                    c = e.isStatic && null === e.render.fillStyle ? 1 : 0;
                  (e.render.fillStyle = e.render.fillStyle || n),
                    (e.render.strokeStyle = e.render.strokeStyle || s),
                    (e.render.lineWidth = e.render.lineWidth || c),
                    (e.render.sprite.xOffset +=
                      -(e.bounds.min.x - e.position.x) /
                      (e.bounds.max.x - e.bounds.min.x)),
                    (e.render.sprite.yOffset +=
                      -(e.bounds.min.y - e.position.y) /
                      (e.bounds.max.y - e.bounds.min.y));
                };
                (r.set = function (e, t, n) {
                  var i;
                  for (i in ("string" == typeof t &&
                    ((i = t), ((t = {})[i] = n)),
                  t))
                    if (Object.prototype.hasOwnProperty.call(t, i))
                      switch (((n = t[i]), i)) {
                        case "isStatic":
                          r.setStatic(e, n);
                          break;
                        case "isSleeping":
                          s.set(e, n);
                          break;
                        case "mass":
                          r.setMass(e, n);
                          break;
                        case "density":
                          r.setDensity(e, n);
                          break;
                        case "inertia":
                          r.setInertia(e, n);
                          break;
                        case "vertices":
                          r.setVertices(e, n);
                          break;
                        case "position":
                          r.setPosition(e, n);
                          break;
                        case "angle":
                          r.setAngle(e, n);
                          break;
                        case "velocity":
                          r.setVelocity(e, n);
                          break;
                        case "angularVelocity":
                          r.setAngularVelocity(e, n);
                          break;
                        case "speed":
                          r.setSpeed(e, n);
                          break;
                        case "angularSpeed":
                          r.setAngularSpeed(e, n);
                          break;
                        case "parts":
                          r.setParts(e, n);
                          break;
                        case "centre":
                          r.setCentre(e, n);
                          break;
                        default:
                          e[i] = n;
                      }
                }),
                  (r.setStatic = function (e, t) {
                    for (var n = 0; n < e.parts.length; n++) {
                      var r = e.parts[n];
                      (r.isStatic = t),
                        t
                          ? ((r._original = {
                              restitution: r.restitution,
                              friction: r.friction,
                              mass: r.mass,
                              inertia: r.inertia,
                              density: r.density,
                              inverseMass: r.inverseMass,
                              inverseInertia: r.inverseInertia,
                            }),
                            (r.restitution = 0),
                            (r.friction = 1),
                            (r.mass = r.inertia = r.density = 1 / 0),
                            (r.inverseMass = r.inverseInertia = 0),
                            (r.positionPrev.x = r.position.x),
                            (r.positionPrev.y = r.position.y),
                            (r.anglePrev = r.angle),
                            (r.angularVelocity = 0),
                            (r.speed = 0),
                            (r.angularSpeed = 0),
                            (r.motion = 0))
                          : r._original &&
                            ((r.restitution = r._original.restitution),
                            (r.friction = r._original.friction),
                            (r.mass = r._original.mass),
                            (r.inertia = r._original.inertia),
                            (r.density = r._original.density),
                            (r.inverseMass = r._original.inverseMass),
                            (r.inverseInertia = r._original.inverseInertia),
                            (r._original = null));
                    }
                  }),
                  (r.setMass = function (e, t) {
                    var n = e.inertia / (e.mass / 6);
                    (e.inertia = n * (t / 6)),
                      (e.inverseInertia = 1 / e.inertia),
                      (e.mass = t),
                      (e.inverseMass = 1 / e.mass),
                      (e.density = e.mass / e.area);
                  }),
                  (r.setDensity = function (e, t) {
                    r.setMass(e, t * e.area), (e.density = t);
                  }),
                  (r.setInertia = function (e, t) {
                    (e.inertia = t), (e.inverseInertia = 1 / e.inertia);
                  }),
                  (r.setVertices = function (e, t) {
                    t[0].body === e
                      ? (e.vertices = t)
                      : (e.vertices = i.create(t, e)),
                      (e.axes = l.fromVertices(e.vertices)),
                      (e.area = i.area(e.vertices)),
                      r.setMass(e, e.density * e.area);
                    var n = i.centre(e.vertices);
                    i.translate(e.vertices, n, -1),
                      r.setInertia(
                        e,
                        r._inertiaScale * i.inertia(e.vertices, e.mass)
                      ),
                      i.translate(e.vertices, e.position),
                      u.update(e.bounds, e.vertices, e.velocity);
                  }),
                  (r.setParts = function (e, t, n) {
                    var o;
                    for (
                      t = t.slice(0),
                        e.parts.length = 0,
                        e.parts.push(e),
                        e.parent = e,
                        o = 0;
                      o < t.length;
                      o++
                    ) {
                      var s = t[o];
                      s !== e && ((s.parent = e), e.parts.push(s));
                    }
                    if (1 !== e.parts.length) {
                      if ((n = void 0 === n || n)) {
                        var a = [];
                        for (o = 0; o < t.length; o++)
                          a = a.concat(t[o].vertices);
                        i.clockwiseSort(a);
                        var u = i.hull(a),
                          l = i.centre(u);
                        r.setVertices(e, u), i.translate(e.vertices, l);
                      }
                      var c = r._totalProperties(e);
                      (e.area = c.area),
                        (e.parent = e),
                        (e.position.x = c.centre.x),
                        (e.position.y = c.centre.y),
                        (e.positionPrev.x = c.centre.x),
                        (e.positionPrev.y = c.centre.y),
                        r.setMass(e, c.mass),
                        r.setInertia(e, c.inertia),
                        r.setPosition(e, c.centre);
                    }
                  }),
                  (r.setCentre = function (e, t, n) {
                    n
                      ? ((e.positionPrev.x += t.x),
                        (e.positionPrev.y += t.y),
                        (e.position.x += t.x),
                        (e.position.y += t.y))
                      : ((e.positionPrev.x =
                          t.x - (e.position.x - e.positionPrev.x)),
                        (e.positionPrev.y =
                          t.y - (e.position.y - e.positionPrev.y)),
                        (e.position.x = t.x),
                        (e.position.y = t.y));
                  }),
                  (r.setPosition = function (e, t, n) {
                    var r = o.sub(t, e.position);
                    n
                      ? ((e.positionPrev.x = e.position.x),
                        (e.positionPrev.y = e.position.y),
                        (e.velocity.x = r.x),
                        (e.velocity.y = r.y),
                        (e.speed = o.magnitude(r)))
                      : ((e.positionPrev.x += r.x), (e.positionPrev.y += r.y));
                    for (var s = 0; s < e.parts.length; s++) {
                      var a = e.parts[s];
                      (a.position.x += r.x),
                        (a.position.y += r.y),
                        i.translate(a.vertices, r),
                        u.update(a.bounds, a.vertices, e.velocity);
                    }
                  }),
                  (r.setAngle = function (e, t, n) {
                    var r = t - e.angle;
                    n
                      ? ((e.anglePrev = e.angle),
                        (e.angularVelocity = r),
                        (e.angularSpeed = Math.abs(r)))
                      : (e.anglePrev += r);
                    for (var s = 0; s < e.parts.length; s++) {
                      var a = e.parts[s];
                      (a.angle += r),
                        i.rotate(a.vertices, r, e.position),
                        l.rotate(a.axes, r),
                        u.update(a.bounds, a.vertices, e.velocity),
                        s > 0 &&
                          o.rotateAbout(a.position, r, e.position, a.position);
                    }
                  }),
                  (r.setVelocity = function (e, t) {
                    var n = e.deltaTime / r._baseDelta;
                    (e.positionPrev.x = e.position.x - t.x * n),
                      (e.positionPrev.y = e.position.y - t.y * n),
                      (e.velocity.x = (e.position.x - e.positionPrev.x) / n),
                      (e.velocity.y = (e.position.y - e.positionPrev.y) / n),
                      (e.speed = o.magnitude(e.velocity));
                  }),
                  (r.getVelocity = function (e) {
                    var t = r._baseDelta / e.deltaTime;
                    return {
                      x: (e.position.x - e.positionPrev.x) * t,
                      y: (e.position.y - e.positionPrev.y) * t,
                    };
                  }),
                  (r.getSpeed = function (e) {
                    return o.magnitude(r.getVelocity(e));
                  }),
                  (r.setSpeed = function (e, t) {
                    r.setVelocity(e, o.mult(o.normalise(r.getVelocity(e)), t));
                  }),
                  (r.setAngularVelocity = function (e, t) {
                    var n = e.deltaTime / r._baseDelta;
                    (e.anglePrev = e.angle - t * n),
                      (e.angularVelocity = (e.angle - e.anglePrev) / n),
                      (e.angularSpeed = Math.abs(e.angularVelocity));
                  }),
                  (r.getAngularVelocity = function (e) {
                    return (
                      ((e.angle - e.anglePrev) * r._baseDelta) / e.deltaTime
                    );
                  }),
                  (r.getAngularSpeed = function (e) {
                    return Math.abs(r.getAngularVelocity(e));
                  }),
                  (r.setAngularSpeed = function (e, t) {
                    r.setAngularVelocity(
                      e,
                      a.sign(r.getAngularVelocity(e)) * t
                    );
                  }),
                  (r.translate = function (e, t, n) {
                    r.setPosition(e, o.add(e.position, t), n);
                  }),
                  (r.rotate = function (e, t, n, i) {
                    if (n) {
                      var o = Math.cos(t),
                        s = Math.sin(t),
                        a = e.position.x - n.x,
                        u = e.position.y - n.y;
                      r.setPosition(
                        e,
                        { x: n.x + (a * o - u * s), y: n.y + (a * s + u * o) },
                        i
                      ),
                        r.setAngle(e, e.angle + t, i);
                    } else r.setAngle(e, e.angle + t, i);
                  }),
                  (r.scale = function (e, t, n, o) {
                    var s = 0,
                      a = 0;
                    o = o || e.position;
                    for (var c = 0; c < e.parts.length; c++) {
                      var h = e.parts[c];
                      i.scale(h.vertices, t, n, o),
                        (h.axes = l.fromVertices(h.vertices)),
                        (h.area = i.area(h.vertices)),
                        r.setMass(h, e.density * h.area),
                        i.translate(h.vertices, {
                          x: -h.position.x,
                          y: -h.position.y,
                        }),
                        r.setInertia(
                          h,
                          r._inertiaScale * i.inertia(h.vertices, h.mass)
                        ),
                        i.translate(h.vertices, {
                          x: h.position.x,
                          y: h.position.y,
                        }),
                        c > 0 && ((s += h.area), (a += h.inertia)),
                        (h.position.x = o.x + (h.position.x - o.x) * t),
                        (h.position.y = o.y + (h.position.y - o.y) * n),
                        u.update(h.bounds, h.vertices, e.velocity);
                    }
                    e.parts.length > 1 &&
                      ((e.area = s),
                      e.isStatic ||
                        (r.setMass(e, e.density * s), r.setInertia(e, a))),
                      e.circleRadius &&
                        (t === n
                          ? (e.circleRadius *= t)
                          : (e.circleRadius = null));
                  }),
                  (r.update = function (e, t) {
                    var n =
                        (t = (void 0 !== t ? t : 1e3 / 60) * e.timeScale) * t,
                      s = r._timeCorrection ? t / (e.deltaTime || t) : 1,
                      c = 1 - e.frictionAir * (t / a._baseDelta),
                      h = (e.position.x - e.positionPrev.x) * s,
                      f = (e.position.y - e.positionPrev.y) * s;
                    (e.velocity.x = h * c + (e.force.x / e.mass) * n),
                      (e.velocity.y = f * c + (e.force.y / e.mass) * n),
                      (e.positionPrev.x = e.position.x),
                      (e.positionPrev.y = e.position.y),
                      (e.position.x += e.velocity.x),
                      (e.position.y += e.velocity.y),
                      (e.deltaTime = t),
                      (e.angularVelocity =
                        (e.angle - e.anglePrev) * c * s +
                        (e.torque / e.inertia) * n),
                      (e.anglePrev = e.angle),
                      (e.angle += e.angularVelocity);
                    for (var d = 0; d < e.parts.length; d++) {
                      var p = e.parts[d];
                      i.translate(p.vertices, e.velocity),
                        d > 0 &&
                          ((p.position.x += e.velocity.x),
                          (p.position.y += e.velocity.y)),
                        0 !== e.angularVelocity &&
                          (i.rotate(p.vertices, e.angularVelocity, e.position),
                          l.rotate(p.axes, e.angularVelocity),
                          d > 0 &&
                            o.rotateAbout(
                              p.position,
                              e.angularVelocity,
                              e.position,
                              p.position
                            )),
                        u.update(p.bounds, p.vertices, e.velocity);
                    }
                  }),
                  (r.updateVelocities = function (e) {
                    var t = r._baseDelta / e.deltaTime,
                      n = e.velocity;
                    (n.x = (e.position.x - e.positionPrev.x) * t),
                      (n.y = (e.position.y - e.positionPrev.y) * t),
                      (e.speed = Math.sqrt(n.x * n.x + n.y * n.y)),
                      (e.angularVelocity = (e.angle - e.anglePrev) * t),
                      (e.angularSpeed = Math.abs(e.angularVelocity));
                  }),
                  (r.applyForce = function (e, t, n) {
                    var r = t.x - e.position.x,
                      i = t.y - e.position.y;
                    (e.force.x += n.x),
                      (e.force.y += n.y),
                      (e.torque += r * n.y - i * n.x);
                  }),
                  (r._totalProperties = function (e) {
                    for (
                      var t = {
                          mass: 0,
                          area: 0,
                          inertia: 0,
                          centre: { x: 0, y: 0 },
                        },
                        n = 1 === e.parts.length ? 0 : 1;
                      n < e.parts.length;
                      n++
                    ) {
                      var r = e.parts[n],
                        i = r.mass !== 1 / 0 ? r.mass : 1;
                      (t.mass += i),
                        (t.area += r.area),
                        (t.inertia += r.inertia),
                        (t.centre = o.add(t.centre, o.mult(r.position, i)));
                    }
                    return (t.centre = o.div(t.centre, t.mass)), t;
                  });
              })();
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(0);
              (r.on = function (e, t, n) {
                for (var r, i = t.split(" "), o = 0; o < i.length; o++)
                  (r = i[o]),
                    (e.events = e.events || {}),
                    (e.events[r] = e.events[r] || []),
                    e.events[r].push(n);
                return n;
              }),
                (r.off = function (e, t, n) {
                  if (t) {
                    "function" == typeof t &&
                      ((n = t), (t = i.keys(e.events).join(" ")));
                    for (var r = t.split(" "), o = 0; o < r.length; o++) {
                      var s = e.events[r[o]],
                        a = [];
                      if (n && s)
                        for (var u = 0; u < s.length; u++)
                          s[u] !== n && a.push(s[u]);
                      e.events[r[o]] = a;
                    }
                  } else e.events = {};
                }),
                (r.trigger = function (e, t, n) {
                  var r,
                    o,
                    s,
                    a,
                    u = e.events;
                  if (u && i.keys(u).length > 0) {
                    n || (n = {}), (r = t.split(" "));
                    for (var l = 0; l < r.length; l++)
                      if ((s = u[(o = r[l])])) {
                        ((a = i.clone(n, !1)).name = o), (a.source = e);
                        for (var c = 0; c < s.length; c++) s[c].apply(e, [a]);
                      }
                  }
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(5),
                o = n(0),
                s = n(1),
                a = n(4);
              (r.create = function (e) {
                return o.extend(
                  {
                    id: o.nextId(),
                    type: "composite",
                    parent: null,
                    isModified: !1,
                    bodies: [],
                    constraints: [],
                    composites: [],
                    label: "Composite",
                    plugin: {},
                    cache: {
                      allBodies: null,
                      allConstraints: null,
                      allComposites: null,
                    },
                  },
                  e
                );
              }),
                (r.setModified = function (e, t, n, i) {
                  if (
                    ((e.isModified = t),
                    t &&
                      e.cache &&
                      ((e.cache.allBodies = null),
                      (e.cache.allConstraints = null),
                      (e.cache.allComposites = null)),
                    n && e.parent && r.setModified(e.parent, t, n, i),
                    i)
                  )
                    for (var o = 0; o < e.composites.length; o++) {
                      var s = e.composites[o];
                      r.setModified(s, t, n, i);
                    }
                }),
                (r.add = function (e, t) {
                  var n = [].concat(t);
                  i.trigger(e, "beforeAdd", { object: t });
                  for (var s = 0; s < n.length; s++) {
                    var a = n[s];
                    switch (a.type) {
                      case "body":
                        if (a.parent !== a) {
                          o.warn(
                            "Composite.add: skipped adding a compound body part (you must add its parent instead)"
                          );
                          break;
                        }
                        r.addBody(e, a);
                        break;
                      case "constraint":
                        r.addConstraint(e, a);
                        break;
                      case "composite":
                        r.addComposite(e, a);
                        break;
                      case "mouseConstraint":
                        r.addConstraint(e, a.constraint);
                    }
                  }
                  return i.trigger(e, "afterAdd", { object: t }), e;
                }),
                (r.remove = function (e, t, n) {
                  var o = [].concat(t);
                  i.trigger(e, "beforeRemove", { object: t });
                  for (var s = 0; s < o.length; s++) {
                    var a = o[s];
                    switch (a.type) {
                      case "body":
                        r.removeBody(e, a, n);
                        break;
                      case "constraint":
                        r.removeConstraint(e, a, n);
                        break;
                      case "composite":
                        r.removeComposite(e, a, n);
                        break;
                      case "mouseConstraint":
                        r.removeConstraint(e, a.constraint);
                    }
                  }
                  return i.trigger(e, "afterRemove", { object: t }), e;
                }),
                (r.addComposite = function (e, t) {
                  return (
                    e.composites.push(t),
                    (t.parent = e),
                    r.setModified(e, !0, !0, !1),
                    e
                  );
                }),
                (r.removeComposite = function (e, t, n) {
                  var i = o.indexOf(e.composites, t);
                  if ((-1 !== i && r.removeCompositeAt(e, i), n))
                    for (var s = 0; s < e.composites.length; s++)
                      r.removeComposite(e.composites[s], t, !0);
                  return e;
                }),
                (r.removeCompositeAt = function (e, t) {
                  return (
                    e.composites.splice(t, 1), r.setModified(e, !0, !0, !1), e
                  );
                }),
                (r.addBody = function (e, t) {
                  return e.bodies.push(t), r.setModified(e, !0, !0, !1), e;
                }),
                (r.removeBody = function (e, t, n) {
                  var i = o.indexOf(e.bodies, t);
                  if ((-1 !== i && r.removeBodyAt(e, i), n))
                    for (var s = 0; s < e.composites.length; s++)
                      r.removeBody(e.composites[s], t, !0);
                  return e;
                }),
                (r.removeBodyAt = function (e, t) {
                  return e.bodies.splice(t, 1), r.setModified(e, !0, !0, !1), e;
                }),
                (r.addConstraint = function (e, t) {
                  return e.constraints.push(t), r.setModified(e, !0, !0, !1), e;
                }),
                (r.removeConstraint = function (e, t, n) {
                  var i = o.indexOf(e.constraints, t);
                  if ((-1 !== i && r.removeConstraintAt(e, i), n))
                    for (var s = 0; s < e.composites.length; s++)
                      r.removeConstraint(e.composites[s], t, !0);
                  return e;
                }),
                (r.removeConstraintAt = function (e, t) {
                  return (
                    e.constraints.splice(t, 1), r.setModified(e, !0, !0, !1), e
                  );
                }),
                (r.clear = function (e, t, n) {
                  if (n)
                    for (var i = 0; i < e.composites.length; i++)
                      r.clear(e.composites[i], t, !0);
                  return (
                    t
                      ? (e.bodies = e.bodies.filter(function (e) {
                          return e.isStatic;
                        }))
                      : (e.bodies.length = 0),
                    (e.constraints.length = 0),
                    (e.composites.length = 0),
                    r.setModified(e, !0, !0, !1),
                    e
                  );
                }),
                (r.allBodies = function (e) {
                  if (e.cache && e.cache.allBodies) return e.cache.allBodies;
                  for (
                    var t = [].concat(e.bodies), n = 0;
                    n < e.composites.length;
                    n++
                  )
                    t = t.concat(r.allBodies(e.composites[n]));
                  return e.cache && (e.cache.allBodies = t), t;
                }),
                (r.allConstraints = function (e) {
                  if (e.cache && e.cache.allConstraints)
                    return e.cache.allConstraints;
                  for (
                    var t = [].concat(e.constraints), n = 0;
                    n < e.composites.length;
                    n++
                  )
                    t = t.concat(r.allConstraints(e.composites[n]));
                  return e.cache && (e.cache.allConstraints = t), t;
                }),
                (r.allComposites = function (e) {
                  if (e.cache && e.cache.allComposites)
                    return e.cache.allComposites;
                  for (
                    var t = [].concat(e.composites), n = 0;
                    n < e.composites.length;
                    n++
                  )
                    t = t.concat(r.allComposites(e.composites[n]));
                  return e.cache && (e.cache.allComposites = t), t;
                }),
                (r.get = function (e, t, n) {
                  var i, o;
                  switch (n) {
                    case "body":
                      i = r.allBodies(e);
                      break;
                    case "constraint":
                      i = r.allConstraints(e);
                      break;
                    case "composite":
                      i = r.allComposites(e).concat(e);
                  }
                  return i
                    ? 0 ===
                      (o = i.filter(function (e) {
                        return e.id.toString() === t.toString();
                      })).length
                      ? null
                      : o[0]
                    : null;
                }),
                (r.move = function (e, t, n) {
                  return r.remove(e, t), r.add(n, t), e;
                }),
                (r.rebase = function (e) {
                  for (
                    var t = r
                        .allBodies(e)
                        .concat(r.allConstraints(e))
                        .concat(r.allComposites(e)),
                      n = 0;
                    n < t.length;
                    n++
                  )
                    t[n].id = o.nextId();
                  return e;
                }),
                (r.translate = function (e, t, n) {
                  for (
                    var i = n ? r.allBodies(e) : e.bodies, o = 0;
                    o < i.length;
                    o++
                  )
                    a.translate(i[o], t);
                  return e;
                }),
                (r.rotate = function (e, t, n, i) {
                  for (
                    var o = Math.cos(t),
                      s = Math.sin(t),
                      u = i ? r.allBodies(e) : e.bodies,
                      l = 0;
                    l < u.length;
                    l++
                  ) {
                    var c = u[l],
                      h = c.position.x - n.x,
                      f = c.position.y - n.y;
                    a.setPosition(c, {
                      x: n.x + (h * o - f * s),
                      y: n.y + (h * s + f * o),
                    }),
                      a.rotate(c, t);
                  }
                  return e;
                }),
                (r.scale = function (e, t, n, i, o) {
                  for (
                    var s = o ? r.allBodies(e) : e.bodies, u = 0;
                    u < s.length;
                    u++
                  ) {
                    var l = s[u],
                      c = l.position.x - i.x,
                      h = l.position.y - i.y;
                    a.setPosition(l, { x: i.x + c * t, y: i.y + h * n }),
                      a.scale(l, t, n);
                  }
                  return e;
                }),
                (r.bounds = function (e) {
                  for (
                    var t = r.allBodies(e), n = [], i = 0;
                    i < t.length;
                    i += 1
                  ) {
                    var o = t[i];
                    n.push(o.bounds.min, o.bounds.max);
                  }
                  return s.create(n);
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(4),
                o = n(5),
                s = n(0);
              (r._motionWakeThreshold = 0.18),
                (r._motionSleepThreshold = 0.08),
                (r._minBias = 0.9),
                (r.update = function (e, t) {
                  for (
                    var n = t / s._baseDelta,
                      o = r._motionSleepThreshold,
                      a = 0;
                    a < e.length;
                    a++
                  ) {
                    var u = e[a],
                      l = i.getSpeed(u),
                      c = i.getAngularSpeed(u),
                      h = l * l + c * c;
                    if (0 === u.force.x && 0 === u.force.y) {
                      var f = Math.min(u.motion, h),
                        d = Math.max(u.motion, h);
                      (u.motion = r._minBias * f + (1 - r._minBias) * d),
                        u.sleepThreshold > 0 && u.motion < o
                          ? ((u.sleepCounter += 1),
                            u.sleepCounter >= u.sleepThreshold / n &&
                              r.set(u, !0))
                          : u.sleepCounter > 0 && (u.sleepCounter -= 1);
                    } else r.set(u, !1);
                  }
                }),
                (r.afterCollisions = function (e) {
                  for (
                    var t = r._motionSleepThreshold, n = 0;
                    n < e.length;
                    n++
                  ) {
                    var i = e[n];
                    if (i.isActive) {
                      var o = i.collision,
                        s = o.bodyA.parent,
                        a = o.bodyB.parent;
                      if (
                        !(
                          (s.isSleeping && a.isSleeping) ||
                          s.isStatic ||
                          a.isStatic
                        ) &&
                        (s.isSleeping || a.isSleeping)
                      ) {
                        var u = s.isSleeping && !s.isStatic ? s : a,
                          l = u === s ? a : s;
                        !u.isStatic && l.motion > t && r.set(u, !1);
                      }
                    }
                  }
                }),
                (r.set = function (e, t) {
                  var n = e.isSleeping;
                  t
                    ? ((e.isSleeping = !0),
                      (e.sleepCounter = e.sleepThreshold),
                      (e.positionImpulse.x = 0),
                      (e.positionImpulse.y = 0),
                      (e.positionPrev.x = e.position.x),
                      (e.positionPrev.y = e.position.y),
                      (e.anglePrev = e.angle),
                      (e.speed = 0),
                      (e.angularSpeed = 0),
                      (e.motion = 0),
                      n || o.trigger(e, "sleepStart"))
                    : ((e.isSleeping = !1),
                      (e.sleepCounter = 0),
                      n && o.trigger(e, "sleepEnd"));
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i,
                o,
                s,
                a = n(3),
                u = n(9);
              (i = []),
                (o = { overlap: 0, axis: null }),
                (s = { overlap: 0, axis: null }),
                (r.create = function (e, t) {
                  return {
                    pair: null,
                    collided: !1,
                    bodyA: e,
                    bodyB: t,
                    parentA: e.parent,
                    parentB: t.parent,
                    depth: 0,
                    normal: { x: 0, y: 0 },
                    tangent: { x: 0, y: 0 },
                    penetration: { x: 0, y: 0 },
                    supports: [],
                  };
                }),
                (r.collides = function (e, t, n) {
                  if (
                    (r._overlapAxes(o, e.vertices, t.vertices, e.axes),
                    o.overlap <= 0)
                  )
                    return null;
                  if (
                    (r._overlapAxes(s, t.vertices, e.vertices, t.axes),
                    s.overlap <= 0)
                  )
                    return null;
                  var i,
                    l,
                    c = n && n.table[u.id(e, t)];
                  c
                    ? (i = c.collision)
                    : (((i = r.create(e, t)).collided = !0),
                      (i.bodyA = e.id < t.id ? e : t),
                      (i.bodyB = e.id < t.id ? t : e),
                      (i.parentA = i.bodyA.parent),
                      (i.parentB = i.bodyB.parent)),
                    (e = i.bodyA),
                    (t = i.bodyB),
                    (l = o.overlap < s.overlap ? o : s);
                  var h = i.normal,
                    f = i.supports,
                    d = l.axis,
                    p = d.x,
                    g = d.y;
                  p * (t.position.x - e.position.x) +
                    g * (t.position.y - e.position.y) <
                  0
                    ? ((h.x = p), (h.y = g))
                    : ((h.x = -p), (h.y = -g)),
                    (i.tangent.x = -h.y),
                    (i.tangent.y = h.x),
                    (i.depth = l.overlap),
                    (i.penetration.x = h.x * i.depth),
                    (i.penetration.y = h.y * i.depth);
                  var v = r._findSupports(e, t, h, 1),
                    m = 0;
                  if (
                    (a.contains(e.vertices, v[0]) && (f[m++] = v[0]),
                    a.contains(e.vertices, v[1]) && (f[m++] = v[1]),
                    m < 2)
                  ) {
                    var y = r._findSupports(t, e, h, -1);
                    a.contains(t.vertices, y[0]) && (f[m++] = y[0]),
                      m < 2 && a.contains(t.vertices, y[1]) && (f[m++] = y[1]);
                  }
                  return 0 === m && (f[m++] = v[0]), (f.length = m), i;
                }),
                (r._overlapAxes = function (e, t, n, r) {
                  var i,
                    o,
                    s,
                    a,
                    u,
                    l,
                    c = t.length,
                    h = n.length,
                    f = t[0].x,
                    d = t[0].y,
                    p = n[0].x,
                    g = n[0].y,
                    v = r.length,
                    m = Number.MAX_VALUE,
                    y = 0;
                  for (u = 0; u < v; u++) {
                    var D = r[u],
                      x = D.x,
                      b = D.y,
                      _ = f * x + d * b,
                      w = p * x + g * b,
                      C = _,
                      S = w;
                    for (l = 1; l < c; l += 1)
                      (a = t[l].x * x + t[l].y * b) > C
                        ? (C = a)
                        : a < _ && (_ = a);
                    for (l = 1; l < h; l += 1)
                      (a = n[l].x * x + n[l].y * b) > S
                        ? (S = a)
                        : a < w && (w = a);
                    if (
                      (i = (o = C - w) < (s = S - _) ? o : s) < m &&
                      ((m = i), (y = u), i <= 0)
                    )
                      break;
                  }
                  (e.axis = r[y]), (e.overlap = m);
                }),
                (r._projectToAxis = function (e, t, n) {
                  for (
                    var r = t[0].x * n.x + t[0].y * n.y, i = r, o = 1;
                    o < t.length;
                    o += 1
                  ) {
                    var s = t[o].x * n.x + t[o].y * n.y;
                    s > i ? (i = s) : s < r && (r = s);
                  }
                  (e.min = r), (e.max = i);
                }),
                (r._findSupports = function (e, t, n, r) {
                  var o,
                    s,
                    a,
                    u,
                    l,
                    c = t.vertices,
                    h = c.length,
                    f = e.position.x,
                    d = e.position.y,
                    p = n.x * r,
                    g = n.y * r,
                    v = Number.MAX_VALUE;
                  for (l = 0; l < h; l += 1)
                    (u = p * (f - (s = c[l]).x) + g * (d - s.y)) < v &&
                      ((v = u), (o = s));
                  return (
                    (v =
                      p * (f - (a = c[(h + o.index - 1) % h]).x) +
                      g * (d - a.y)),
                    p * (f - (s = c[(o.index + 1) % h]).x) + g * (d - s.y) < v
                      ? ((i[0] = o), (i[1] = s), i)
                      : ((i[0] = o), (i[1] = a), i)
                  );
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(16);
              (r.create = function (e, t) {
                var n = e.bodyA,
                  i = e.bodyB,
                  o = {
                    id: r.id(n, i),
                    bodyA: n,
                    bodyB: i,
                    collision: e,
                    contacts: [],
                    activeContacts: [],
                    separation: 0,
                    isActive: !0,
                    confirmedActive: !0,
                    isSensor: n.isSensor || i.isSensor,
                    timeCreated: t,
                    timeUpdated: t,
                    inverseMass: 0,
                    friction: 0,
                    frictionStatic: 0,
                    restitution: 0,
                    slop: 0,
                  };
                return r.update(o, e, t), o;
              }),
                (r.update = function (e, t, n) {
                  var r = e.contacts,
                    o = t.supports,
                    s = e.activeContacts,
                    a = t.parentA,
                    u = t.parentB,
                    l = a.vertices.length;
                  (e.isActive = !0),
                    (e.timeUpdated = n),
                    (e.collision = t),
                    (e.separation = t.depth),
                    (e.inverseMass = a.inverseMass + u.inverseMass),
                    (e.friction =
                      a.friction < u.friction ? a.friction : u.friction),
                    (e.frictionStatic =
                      a.frictionStatic > u.frictionStatic
                        ? a.frictionStatic
                        : u.frictionStatic),
                    (e.restitution =
                      a.restitution > u.restitution
                        ? a.restitution
                        : u.restitution),
                    (e.slop = a.slop > u.slop ? a.slop : u.slop),
                    (t.pair = e),
                    (s.length = 0);
                  for (var c = 0; c < o.length; c++) {
                    var h = o[c],
                      f = h.body === a ? h.index : l + h.index,
                      d = r[f];
                    d ? s.push(d) : s.push((r[f] = i.create(h)));
                  }
                }),
                (r.setActive = function (e, t, n) {
                  t
                    ? ((e.isActive = !0), (e.timeUpdated = n))
                    : ((e.isActive = !1), (e.activeContacts.length = 0));
                }),
                (r.id = function (e, t) {
                  return e.id < t.id
                    ? "A" + e.id + "B" + t.id
                    : "A" + t.id + "B" + e.id;
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(3),
                o = n(2),
                s = n(7),
                a = n(1),
                u = n(11),
                l = n(0);
              (r._warming = 0.4),
                (r._torqueDampen = 1),
                (r._minLength = 1e-6),
                (r.create = function (e) {
                  var t = e;
                  t.bodyA && !t.pointA && (t.pointA = { x: 0, y: 0 }),
                    t.bodyB && !t.pointB && (t.pointB = { x: 0, y: 0 });
                  var n = t.bodyA
                      ? o.add(t.bodyA.position, t.pointA)
                      : t.pointA,
                    r = t.bodyB ? o.add(t.bodyB.position, t.pointB) : t.pointB,
                    i = o.magnitude(o.sub(n, r));
                  (t.length = void 0 !== t.length ? t.length : i),
                    (t.id = t.id || l.nextId()),
                    (t.label = t.label || "Constraint"),
                    (t.type = "constraint"),
                    (t.stiffness = t.stiffness || (t.length > 0 ? 1 : 0.7)),
                    (t.damping = t.damping || 0),
                    (t.angularStiffness = t.angularStiffness || 0),
                    (t.angleA = t.bodyA ? t.bodyA.angle : t.angleA),
                    (t.angleB = t.bodyB ? t.bodyB.angle : t.angleB),
                    (t.plugin = {});
                  var s = {
                    visible: !0,
                    lineWidth: 2,
                    strokeStyle: "#ffffff",
                    type: "line",
                    anchors: !0,
                  };
                  return (
                    0 === t.length && t.stiffness > 0.1
                      ? ((s.type = "pin"), (s.anchors = !1))
                      : t.stiffness < 0.9 && (s.type = "spring"),
                    (t.render = l.extend(s, t.render)),
                    t
                  );
                }),
                (r.preSolveAll = function (e) {
                  for (var t = 0; t < e.length; t += 1) {
                    var n = e[t],
                      r = n.constraintImpulse;
                    n.isStatic ||
                      (0 === r.x && 0 === r.y && 0 === r.angle) ||
                      ((n.position.x += r.x),
                      (n.position.y += r.y),
                      (n.angle += r.angle));
                  }
                }),
                (r.solveAll = function (e, t) {
                  for (
                    var n = l.clamp(t / l._baseDelta, 0, 1), i = 0;
                    i < e.length;
                    i += 1
                  ) {
                    var o = e[i],
                      s = !o.bodyA || (o.bodyA && o.bodyA.isStatic),
                      a = !o.bodyB || (o.bodyB && o.bodyB.isStatic);
                    (s || a) && r.solve(e[i], n);
                  }
                  for (i = 0; i < e.length; i += 1)
                    (s = !(o = e[i]).bodyA || (o.bodyA && o.bodyA.isStatic)),
                      (a = !o.bodyB || (o.bodyB && o.bodyB.isStatic)),
                      s || a || r.solve(e[i], n);
                }),
                (r.solve = function (e, t) {
                  var n = e.bodyA,
                    i = e.bodyB,
                    s = e.pointA,
                    a = e.pointB;
                  if (n || i) {
                    n &&
                      !n.isStatic &&
                      (o.rotate(s, n.angle - e.angleA, s),
                      (e.angleA = n.angle)),
                      i &&
                        !i.isStatic &&
                        (o.rotate(a, i.angle - e.angleB, a),
                        (e.angleB = i.angle));
                    var u = s,
                      l = a;
                    if (
                      (n && (u = o.add(n.position, s)),
                      i && (l = o.add(i.position, a)),
                      u && l)
                    ) {
                      var c = o.sub(u, l),
                        h = o.magnitude(c);
                      h < r._minLength && (h = r._minLength);
                      var f,
                        d,
                        p,
                        g,
                        v,
                        m = (h - e.length) / h,
                        y =
                          e.stiffness >= 1 || 0 === e.length
                            ? e.stiffness * t
                            : e.stiffness * t * t,
                        D = e.damping * t,
                        x = o.mult(c, m * y),
                        b = (n ? n.inverseMass : 0) + (i ? i.inverseMass : 0),
                        _ =
                          b +
                          ((n ? n.inverseInertia : 0) +
                            (i ? i.inverseInertia : 0));
                      if (D > 0) {
                        var w = o.create();
                        (p = o.div(c, h)),
                          (v = o.sub(
                            (i && o.sub(i.position, i.positionPrev)) || w,
                            (n && o.sub(n.position, n.positionPrev)) || w
                          )),
                          (g = o.dot(p, v));
                      }
                      n &&
                        !n.isStatic &&
                        ((d = n.inverseMass / b),
                        (n.constraintImpulse.x -= x.x * d),
                        (n.constraintImpulse.y -= x.y * d),
                        (n.position.x -= x.x * d),
                        (n.position.y -= x.y * d),
                        D > 0 &&
                          ((n.positionPrev.x -= D * p.x * g * d),
                          (n.positionPrev.y -= D * p.y * g * d)),
                        (f =
                          (o.cross(s, x) / _) *
                          r._torqueDampen *
                          n.inverseInertia *
                          (1 - e.angularStiffness)),
                        (n.constraintImpulse.angle -= f),
                        (n.angle -= f)),
                        i &&
                          !i.isStatic &&
                          ((d = i.inverseMass / b),
                          (i.constraintImpulse.x += x.x * d),
                          (i.constraintImpulse.y += x.y * d),
                          (i.position.x += x.x * d),
                          (i.position.y += x.y * d),
                          D > 0 &&
                            ((i.positionPrev.x += D * p.x * g * d),
                            (i.positionPrev.y += D * p.y * g * d)),
                          (f =
                            (o.cross(a, x) / _) *
                            r._torqueDampen *
                            i.inverseInertia *
                            (1 - e.angularStiffness)),
                          (i.constraintImpulse.angle += f),
                          (i.angle += f));
                    }
                  }
                }),
                (r.postSolveAll = function (e) {
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t],
                      l = n.constraintImpulse;
                    if (
                      !(n.isStatic || (0 === l.x && 0 === l.y && 0 === l.angle))
                    ) {
                      s.set(n, !1);
                      for (var c = 0; c < n.parts.length; c++) {
                        var h = n.parts[c];
                        i.translate(h.vertices, l),
                          c > 0 &&
                            ((h.position.x += l.x), (h.position.y += l.y)),
                          0 !== l.angle &&
                            (i.rotate(h.vertices, l.angle, n.position),
                            u.rotate(h.axes, l.angle),
                            c > 0 &&
                              o.rotateAbout(
                                h.position,
                                l.angle,
                                n.position,
                                h.position
                              )),
                          a.update(h.bounds, h.vertices, n.velocity);
                      }
                      (l.angle *= r._warming),
                        (l.x *= r._warming),
                        (l.y *= r._warming);
                    }
                  }
                }),
                (r.pointAWorld = function (e) {
                  return {
                    x:
                      (e.bodyA ? e.bodyA.position.x : 0) +
                      (e.pointA ? e.pointA.x : 0),
                    y:
                      (e.bodyA ? e.bodyA.position.y : 0) +
                      (e.pointA ? e.pointA.y : 0),
                  };
                }),
                (r.pointBWorld = function (e) {
                  return {
                    x:
                      (e.bodyB ? e.bodyB.position.x : 0) +
                      (e.pointB ? e.pointB.x : 0),
                    y:
                      (e.bodyB ? e.bodyB.position.y : 0) +
                      (e.pointB ? e.pointB.y : 0),
                  };
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(2),
                o = n(0);
              (r.fromVertices = function (e) {
                for (var t = {}, n = 0; n < e.length; n++) {
                  var r = (n + 1) % e.length,
                    s = i.normalise({ x: e[r].y - e[n].y, y: e[n].x - e[r].x }),
                    a = 0 === s.y ? 1 / 0 : s.x / s.y;
                  t[(a = a.toFixed(3).toString())] = s;
                }
                return o.values(t);
              }),
                (r.rotate = function (e, t) {
                  if (0 !== t)
                    for (
                      var n = Math.cos(t), r = Math.sin(t), i = 0;
                      i < e.length;
                      i++
                    ) {
                      var o,
                        s = e[i];
                      (o = s.x * n - s.y * r),
                        (s.y = s.x * r + s.y * n),
                        (s.x = o);
                    }
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(3),
                o = n(0),
                s = n(4),
                a = n(1),
                u = n(2);
              (r.rectangle = function (e, t, n, r, a) {
                a = a || {};
                var u = {
                  label: "Rectangle Body",
                  position: { x: e, y: t },
                  vertices: i.fromPath(
                    "L 0 0 L " + n + " 0 L " + n + " " + r + " L 0 " + r
                  ),
                };
                if (a.chamfer) {
                  var l = a.chamfer;
                  (u.vertices = i.chamfer(
                    u.vertices,
                    l.radius,
                    l.quality,
                    l.qualityMin,
                    l.qualityMax
                  )),
                    delete a.chamfer;
                }
                return s.create(o.extend({}, u, a));
              }),
                (r.trapezoid = function (e, t, n, r, a, u) {
                  u = u || {};
                  var l,
                    c = n * (a *= 0.5),
                    h = c + (1 - 2 * a) * n,
                    f = h + c;
                  l =
                    a < 0.5
                      ? "L 0 0 L " +
                        c +
                        " " +
                        -r +
                        " L " +
                        h +
                        " " +
                        -r +
                        " L " +
                        f +
                        " 0"
                      : "L 0 0 L " + h + " " + -r + " L " + f + " 0";
                  var d = {
                    label: "Trapezoid Body",
                    position: { x: e, y: t },
                    vertices: i.fromPath(l),
                  };
                  if (u.chamfer) {
                    var p = u.chamfer;
                    (d.vertices = i.chamfer(
                      d.vertices,
                      p.radius,
                      p.quality,
                      p.qualityMin,
                      p.qualityMax
                    )),
                      delete u.chamfer;
                  }
                  return s.create(o.extend({}, d, u));
                }),
                (r.circle = function (e, t, n, i, s) {
                  i = i || {};
                  var a = { label: "Circle Body", circleRadius: n };
                  s = s || 25;
                  var u = Math.ceil(Math.max(10, Math.min(s, n)));
                  return (
                    u % 2 == 1 && (u += 1),
                    r.polygon(e, t, u, n, o.extend({}, a, i))
                  );
                }),
                (r.polygon = function (e, t, n, a, u) {
                  if (((u = u || {}), n < 3)) return r.circle(e, t, a, u);
                  for (
                    var l = (2 * Math.PI) / n, c = "", h = 0.5 * l, f = 0;
                    f < n;
                    f += 1
                  ) {
                    var d = h + f * l,
                      p = Math.cos(d) * a,
                      g = Math.sin(d) * a;
                    c += "L " + p.toFixed(3) + " " + g.toFixed(3) + " ";
                  }
                  var v = {
                    label: "Polygon Body",
                    position: { x: e, y: t },
                    vertices: i.fromPath(c),
                  };
                  if (u.chamfer) {
                    var m = u.chamfer;
                    (v.vertices = i.chamfer(
                      v.vertices,
                      m.radius,
                      m.quality,
                      m.qualityMin,
                      m.qualityMax
                    )),
                      delete u.chamfer;
                  }
                  return s.create(o.extend({}, v, u));
                }),
                (r.fromVertices = function (e, t, n, r, l, c, h, f) {
                  var d,
                    p,
                    g,
                    v,
                    m,
                    y,
                    D,
                    x,
                    b,
                    _,
                    w = o.getDecomp();
                  for (
                    d = Boolean(w && w.quickDecomp),
                      r = r || {},
                      g = [],
                      l = void 0 !== l && l,
                      c = void 0 !== c ? c : 0.01,
                      h = void 0 !== h ? h : 10,
                      f = void 0 !== f ? f : 0.01,
                      o.isArray(n[0]) || (n = [n]),
                      b = 0;
                    b < n.length;
                    b += 1
                  )
                    if (
                      ((m = n[b]),
                      !(v = i.isConvex(m)) &&
                        !d &&
                        o.warnOnce(
                          "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                        ),
                      v || !d)
                    )
                      (m = v ? i.clockwiseSort(m) : i.hull(m)),
                        g.push({ position: { x: e, y: t }, vertices: m });
                    else {
                      var C = m.map(function (e) {
                        return [e.x, e.y];
                      });
                      w.makeCCW(C),
                        !1 !== c && w.removeCollinearPoints(C, c),
                        !1 !== f &&
                          w.removeDuplicatePoints &&
                          w.removeDuplicatePoints(C, f);
                      var S = w.quickDecomp(C);
                      for (y = 0; y < S.length; y++) {
                        var E = S[y].map(function (e) {
                          return { x: e[0], y: e[1] };
                        });
                        (h > 0 && i.area(E) < h) ||
                          g.push({ position: i.centre(E), vertices: E });
                      }
                    }
                  for (y = 0; y < g.length; y++)
                    g[y] = s.create(o.extend(g[y], r));
                  if (l)
                    for (y = 0; y < g.length; y++) {
                      var A = g[y];
                      for (D = y + 1; D < g.length; D++) {
                        var T = g[D];
                        if (a.overlaps(A.bounds, T.bounds)) {
                          var F = A.vertices,
                            P = T.vertices;
                          for (x = 0; x < A.vertices.length; x++)
                            for (_ = 0; _ < T.vertices.length; _++) {
                              var k = u.magnitudeSquared(
                                  u.sub(F[(x + 1) % F.length], P[_])
                                ),
                                M = u.magnitudeSquared(
                                  u.sub(F[x], P[(_ + 1) % P.length])
                                );
                              k < 5 &&
                                M < 5 &&
                                ((F[x].isInternal = !0),
                                (P[_].isInternal = !0));
                            }
                        }
                      }
                    }
                  return g.length > 1
                    ? ((p = s.create(o.extend({ parts: g.slice(0) }, r))),
                      s.setPosition(p, { x: e, y: t }),
                      p)
                    : g[0];
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(0),
                o = n(8);
              (r.create = function (e) {
                return i.extend({ bodies: [], pairs: null }, e);
              }),
                (r.setBodies = function (e, t) {
                  e.bodies = t.slice(0);
                }),
                (r.clear = function (e) {
                  e.bodies = [];
                }),
                (r.collisions = function (e) {
                  var t,
                    n,
                    i = [],
                    s = e.pairs,
                    a = e.bodies,
                    u = a.length,
                    l = r.canCollide,
                    c = o.collides;
                  for (a.sort(r._compareBoundsX), t = 0; t < u; t++) {
                    var h = a[t],
                      f = h.bounds,
                      d = h.bounds.max.x,
                      p = h.bounds.max.y,
                      g = h.bounds.min.y,
                      v = h.isStatic || h.isSleeping,
                      m = h.parts.length,
                      y = 1 === m;
                    for (n = t + 1; n < u; n++) {
                      var D = a[n];
                      if ((A = D.bounds).min.x > d) break;
                      if (
                        !(p < A.min.y || g > A.max.y) &&
                        (!v || (!D.isStatic && !D.isSleeping)) &&
                        l(h.collisionFilter, D.collisionFilter)
                      ) {
                        var x = D.parts.length;
                        if (y && 1 === x) (S = c(h, D, s)) && i.push(S);
                        else
                          for (
                            var b = x > 1 ? 1 : 0, _ = m > 1 ? 1 : 0;
                            _ < m;
                            _++
                          )
                            for (
                              var w = h.parts[_], C = ((f = w.bounds), b);
                              C < x;
                              C++
                            ) {
                              var S,
                                E = D.parts[C],
                                A = E.bounds;
                              f.min.x > A.max.x ||
                                f.max.x < A.min.x ||
                                f.max.y < A.min.y ||
                                f.min.y > A.max.y ||
                                ((S = c(w, E, s)) && i.push(S));
                            }
                      }
                    }
                  }
                  return i;
                }),
                (r.canCollide = function (e, t) {
                  return e.group === t.group && 0 !== e.group
                    ? e.group > 0
                    : 0 != (e.mask & t.category) && 0 != (t.mask & e.category);
                }),
                (r._compareBoundsX = function (e, t) {
                  return e.bounds.min.x - t.bounds.min.x;
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(0);
              (r.create = function (e) {
                var t = {};
                return (
                  e ||
                    i.log(
                      "Mouse.create: element was undefined, defaulting to document.body",
                      "warn"
                    ),
                  (t.element = e || document.body),
                  (t.absolute = { x: 0, y: 0 }),
                  (t.position = { x: 0, y: 0 }),
                  (t.mousedownPosition = { x: 0, y: 0 }),
                  (t.mouseupPosition = { x: 0, y: 0 }),
                  (t.offset = { x: 0, y: 0 }),
                  (t.scale = { x: 1, y: 1 }),
                  (t.wheelDelta = 0),
                  (t.button = -1),
                  (t.pixelRatio =
                    parseInt(t.element.getAttribute("data-pixel-ratio"), 10) ||
                    1),
                  (t.sourceEvents = {
                    mousemove: null,
                    mousedown: null,
                    mouseup: null,
                    mousewheel: null,
                  }),
                  (t.mousemove = function (e) {
                    var n = r._getRelativeMousePosition(
                      e,
                      t.element,
                      t.pixelRatio
                    );
                    e.changedTouches && ((t.button = 0), e.preventDefault()),
                      (t.absolute.x = n.x),
                      (t.absolute.y = n.y),
                      (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                      (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                      (t.sourceEvents.mousemove = e);
                  }),
                  (t.mousedown = function (e) {
                    var n = r._getRelativeMousePosition(
                      e,
                      t.element,
                      t.pixelRatio
                    );
                    e.changedTouches
                      ? ((t.button = 0), e.preventDefault())
                      : (t.button = e.button),
                      (t.absolute.x = n.x),
                      (t.absolute.y = n.y),
                      (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                      (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                      (t.mousedownPosition.x = t.position.x),
                      (t.mousedownPosition.y = t.position.y),
                      (t.sourceEvents.mousedown = e);
                  }),
                  (t.mouseup = function (e) {
                    var n = r._getRelativeMousePosition(
                      e,
                      t.element,
                      t.pixelRatio
                    );
                    e.changedTouches && e.preventDefault(),
                      (t.button = -1),
                      (t.absolute.x = n.x),
                      (t.absolute.y = n.y),
                      (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                      (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                      (t.mouseupPosition.x = t.position.x),
                      (t.mouseupPosition.y = t.position.y),
                      (t.sourceEvents.mouseup = e);
                  }),
                  (t.mousewheel = function (e) {
                    (t.wheelDelta = Math.max(
                      -1,
                      Math.min(1, e.wheelDelta || -e.detail)
                    )),
                      e.preventDefault();
                  }),
                  r.setElement(t, t.element),
                  t
                );
              }),
                (r.setElement = function (e, t) {
                  (e.element = t),
                    t.addEventListener("mousemove", e.mousemove),
                    t.addEventListener("mousedown", e.mousedown),
                    t.addEventListener("mouseup", e.mouseup),
                    t.addEventListener("mousewheel", e.mousewheel),
                    t.addEventListener("DOMMouseScroll", e.mousewheel),
                    t.addEventListener("touchmove", e.mousemove),
                    t.addEventListener("touchstart", e.mousedown),
                    t.addEventListener("touchend", e.mouseup);
                }),
                (r.clearSourceEvents = function (e) {
                  (e.sourceEvents.mousemove = null),
                    (e.sourceEvents.mousedown = null),
                    (e.sourceEvents.mouseup = null),
                    (e.sourceEvents.mousewheel = null),
                    (e.wheelDelta = 0);
                }),
                (r.setOffset = function (e, t) {
                  (e.offset.x = t.x),
                    (e.offset.y = t.y),
                    (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
                    (e.position.y = e.absolute.y * e.scale.y + e.offset.y);
                }),
                (r.setScale = function (e, t) {
                  (e.scale.x = t.x),
                    (e.scale.y = t.y),
                    (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
                    (e.position.y = e.absolute.y * e.scale.y + e.offset.y);
                }),
                (r._getRelativeMousePosition = function (e, t, n) {
                  var r,
                    i,
                    o = t.getBoundingClientRect(),
                    s =
                      document.documentElement ||
                      document.body.parentNode ||
                      document.body,
                    a =
                      void 0 !== window.pageXOffset
                        ? window.pageXOffset
                        : s.scrollLeft,
                    u =
                      void 0 !== window.pageYOffset
                        ? window.pageYOffset
                        : s.scrollTop,
                    l = e.changedTouches;
                  return (
                    l
                      ? ((r = l[0].pageX - o.left - a),
                        (i = l[0].pageY - o.top - u))
                      : ((r = e.pageX - o.left - a), (i = e.pageY - o.top - u)),
                    {
                      x: r / ((t.clientWidth / (t.width || t.clientWidth)) * n),
                      y:
                        i /
                        ((t.clientHeight / (t.height || t.clientHeight)) * n),
                    }
                  );
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(0);
              (r._registry = {}),
                (r.register = function (e) {
                  if (
                    (r.isPlugin(e) ||
                      i.warn(
                        "Plugin.register:",
                        r.toString(e),
                        "does not implement all required fields."
                      ),
                    e.name in r._registry)
                  ) {
                    var t = r._registry[e.name],
                      n = r.versionParse(e.version).number,
                      o = r.versionParse(t.version).number;
                    n > o
                      ? (i.warn(
                          "Plugin.register:",
                          r.toString(t),
                          "was upgraded to",
                          r.toString(e)
                        ),
                        (r._registry[e.name] = e))
                      : n < o
                      ? i.warn(
                          "Plugin.register:",
                          r.toString(t),
                          "can not be downgraded to",
                          r.toString(e)
                        )
                      : e !== t &&
                        i.warn(
                          "Plugin.register:",
                          r.toString(e),
                          "is already registered to different plugin object"
                        );
                  } else r._registry[e.name] = e;
                  return e;
                }),
                (r.resolve = function (e) {
                  return r._registry[r.dependencyParse(e).name];
                }),
                (r.toString = function (e) {
                  return "string" == typeof e
                    ? e
                    : (e.name || "anonymous") +
                        "@" +
                        (e.version || e.range || "0.0.0");
                }),
                (r.isPlugin = function (e) {
                  return e && e.name && e.version && e.install;
                }),
                (r.isUsed = function (e, t) {
                  return e.used.indexOf(t) > -1;
                }),
                (r.isFor = function (e, t) {
                  var n = e.for && r.dependencyParse(e.for);
                  return (
                    !e.for ||
                    (t.name === n.name &&
                      r.versionSatisfies(t.version, n.range))
                  );
                }),
                (r.use = function (e, t) {
                  if (
                    ((e.uses = (e.uses || []).concat(t || [])),
                    0 !== e.uses.length)
                  ) {
                    for (
                      var n = r.dependencies(e),
                        o = i.topologicalSort(n),
                        s = [],
                        a = 0;
                      a < o.length;
                      a += 1
                    )
                      if (o[a] !== e.name) {
                        var u = r.resolve(o[a]);
                        u
                          ? r.isUsed(e, u.name) ||
                            (r.isFor(u, e) ||
                              (i.warn(
                                "Plugin.use:",
                                r.toString(u),
                                "is for",
                                u.for,
                                "but installed on",
                                r.toString(e) + "."
                              ),
                              (u._warned = !0)),
                            u.install
                              ? u.install(e)
                              : (i.warn(
                                  "Plugin.use:",
                                  r.toString(u),
                                  "does not specify an install function."
                                ),
                                (u._warned = !0)),
                            u._warned
                              ? (s.push("🔶 " + r.toString(u)),
                                delete u._warned)
                              : s.push("✅ " + r.toString(u)),
                            e.used.push(u.name))
                          : s.push("❌ " + o[a]);
                      }
                    s.length > 0 && i.info(s.join("  "));
                  } else
                    i.warn(
                      "Plugin.use:",
                      r.toString(e),
                      "does not specify any dependencies to install."
                    );
                }),
                (r.dependencies = function (e, t) {
                  var n = r.dependencyParse(e),
                    o = n.name;
                  if (!(o in (t = t || {}))) {
                    (e = r.resolve(e) || e),
                      (t[o] = i.map(e.uses || [], function (t) {
                        r.isPlugin(t) && r.register(t);
                        var o = r.dependencyParse(t),
                          s = r.resolve(t);
                        return (
                          s && !r.versionSatisfies(s.version, o.range)
                            ? (i.warn(
                                "Plugin.dependencies:",
                                r.toString(s),
                                "does not satisfy",
                                r.toString(o),
                                "used by",
                                r.toString(n) + "."
                              ),
                              (s._warned = !0),
                              (e._warned = !0))
                            : s ||
                              (i.warn(
                                "Plugin.dependencies:",
                                r.toString(t),
                                "used by",
                                r.toString(n),
                                "could not be resolved."
                              ),
                              (e._warned = !0)),
                          o.name
                        );
                      }));
                    for (var s = 0; s < t[o].length; s += 1)
                      r.dependencies(t[o][s], t);
                    return t;
                  }
                }),
                (r.dependencyParse = function (e) {
                  return i.isString(e)
                    ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(
                        e
                      ) ||
                        i.warn(
                          "Plugin.dependencyParse:",
                          e,
                          "is not a valid dependency string."
                        ),
                      { name: e.split("@")[0], range: e.split("@")[1] || "*" })
                    : { name: e.name, range: e.range || e.version };
                }),
                (r.versionParse = function (e) {
                  var t =
                    /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                  t.test(e) ||
                    i.warn(
                      "Plugin.versionParse:",
                      e,
                      "is not a valid version or range."
                    );
                  var n = t.exec(e),
                    r = Number(n[4]),
                    o = Number(n[5]),
                    s = Number(n[6]);
                  return {
                    isRange: Boolean(n[1] || n[2]),
                    version: n[3],
                    range: e,
                    operator: n[1] || n[2] || "",
                    major: r,
                    minor: o,
                    patch: s,
                    parts: [r, o, s],
                    prerelease: n[7],
                    number: 1e8 * r + 1e4 * o + s,
                  };
                }),
                (r.versionSatisfies = function (e, t) {
                  t = t || "*";
                  var n = r.versionParse(t),
                    i = r.versionParse(e);
                  if (n.isRange) {
                    if ("*" === n.operator || "*" === e) return !0;
                    if (">" === n.operator) return i.number > n.number;
                    if (">=" === n.operator) return i.number >= n.number;
                    if ("~" === n.operator)
                      return (
                        i.major === n.major &&
                        i.minor === n.minor &&
                        i.patch >= n.patch
                      );
                    if ("^" === n.operator)
                      return n.major > 0
                        ? i.major === n.major && i.number >= n.number
                        : n.minor > 0
                        ? i.minor === n.minor && i.patch >= n.patch
                        : i.patch === n.patch;
                  }
                  return e === t || "*" === e;
                });
            },
            function (e, t) {
              var n = {};
              (e.exports = n),
                (n.create = function (e) {
                  return { vertex: e, normalImpulse: 0, tangentImpulse: 0 };
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(7),
                o = n(18),
                s = n(13),
                a = n(19),
                u = n(5),
                l = n(6),
                c = n(10),
                h = n(0),
                f = n(4);
              (r.create = function (e) {
                e = e || {};
                var t = h.extend(
                  {
                    positionIterations: 6,
                    velocityIterations: 4,
                    constraintIterations: 2,
                    enableSleeping: !1,
                    events: [],
                    plugin: {},
                    gravity: { x: 0, y: 1, scale: 0.001 },
                    timing: {
                      timestamp: 0,
                      timeScale: 1,
                      lastDelta: 0,
                      lastElapsed: 0,
                    },
                  },
                  e
                );
                return (
                  (t.world = e.world || l.create({ label: "World" })),
                  (t.pairs = e.pairs || a.create()),
                  (t.detector = e.detector || s.create()),
                  (t.grid = { buckets: [] }),
                  (t.world.gravity = t.gravity),
                  (t.broadphase = t.grid),
                  (t.metrics = {}),
                  t
                );
              }),
                (r.update = function (e, t) {
                  var n,
                    f = h.now(),
                    d = e.world,
                    p = e.detector,
                    g = e.pairs,
                    v = e.timing,
                    m = v.timestamp;
                  (t = void 0 !== t ? t : h._baseDelta),
                    (t *= v.timeScale),
                    (v.timestamp += t),
                    (v.lastDelta = t);
                  var y = { timestamp: v.timestamp, delta: t };
                  u.trigger(e, "beforeUpdate", y);
                  var D = l.allBodies(d),
                    x = l.allConstraints(d);
                  for (
                    d.isModified &&
                      (s.setBodies(p, D), l.setModified(d, !1, !1, !0)),
                      e.enableSleeping && i.update(D, t),
                      r._bodiesApplyGravity(D, e.gravity),
                      t > 0 && r._bodiesUpdate(D, t),
                      c.preSolveAll(D),
                      n = 0;
                    n < e.constraintIterations;
                    n++
                  )
                    c.solveAll(x, t);
                  c.postSolveAll(D), (p.pairs = e.pairs);
                  var b = s.collisions(p);
                  a.update(g, b, m),
                    e.enableSleeping && i.afterCollisions(g.list),
                    g.collisionStart.length > 0 &&
                      u.trigger(e, "collisionStart", {
                        pairs: g.collisionStart,
                      });
                  var _ = h.clamp(20 / e.positionIterations, 0, 1);
                  for (
                    o.preSolvePosition(g.list), n = 0;
                    n < e.positionIterations;
                    n++
                  )
                    o.solvePosition(g.list, t, _);
                  for (
                    o.postSolvePosition(D), c.preSolveAll(D), n = 0;
                    n < e.constraintIterations;
                    n++
                  )
                    c.solveAll(x, t);
                  for (
                    c.postSolveAll(D), o.preSolveVelocity(g.list), n = 0;
                    n < e.velocityIterations;
                    n++
                  )
                    o.solveVelocity(g.list, t);
                  return (
                    r._bodiesUpdateVelocities(D),
                    g.collisionActive.length > 0 &&
                      u.trigger(e, "collisionActive", {
                        pairs: g.collisionActive,
                      }),
                    g.collisionEnd.length > 0 &&
                      u.trigger(e, "collisionEnd", { pairs: g.collisionEnd }),
                    r._bodiesClearForces(D),
                    u.trigger(e, "afterUpdate", y),
                    (e.timing.lastElapsed = h.now() - f),
                    e
                  );
                }),
                (r.merge = function (e, t) {
                  if ((h.extend(e, t), t.world)) {
                    (e.world = t.world), r.clear(e);
                    for (
                      var n = l.allBodies(e.world), o = 0;
                      o < n.length;
                      o++
                    ) {
                      var s = n[o];
                      i.set(s, !1), (s.id = h.nextId());
                    }
                  }
                }),
                (r.clear = function (e) {
                  a.clear(e.pairs), s.clear(e.detector);
                }),
                (r._bodiesClearForces = function (e) {
                  for (var t = e.length, n = 0; n < t; n++) {
                    var r = e[n];
                    (r.force.x = 0), (r.force.y = 0), (r.torque = 0);
                  }
                }),
                (r._bodiesApplyGravity = function (e, t) {
                  var n = void 0 !== t.scale ? t.scale : 0.001,
                    r = e.length;
                  if ((0 !== t.x || 0 !== t.y) && 0 !== n)
                    for (var i = 0; i < r; i++) {
                      var o = e[i];
                      o.isStatic ||
                        o.isSleeping ||
                        ((o.force.y += o.mass * t.y * n),
                        (o.force.x += o.mass * t.x * n));
                    }
                }),
                (r._bodiesUpdate = function (e, t) {
                  for (var n = e.length, r = 0; r < n; r++) {
                    var i = e[r];
                    i.isStatic || i.isSleeping || f.update(i, t);
                  }
                }),
                (r._bodiesUpdateVelocities = function (e) {
                  for (var t = e.length, n = 0; n < t; n++)
                    f.updateVelocities(e[n]);
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(3),
                o = n(0),
                s = n(1);
              (r._restingThresh = 2),
                (r._restingThreshTangent = Math.sqrt(6)),
                (r._positionDampen = 0.9),
                (r._positionWarming = 0.8),
                (r._frictionNormalMultiplier = 5),
                (r._frictionMaxStatic = Number.MAX_VALUE),
                (r.preSolvePosition = function (e) {
                  var t,
                    n,
                    r,
                    i = e.length;
                  for (t = 0; t < i; t++)
                    (n = e[t]).isActive &&
                      ((r = n.activeContacts.length),
                      (n.collision.parentA.totalContacts += r),
                      (n.collision.parentB.totalContacts += r));
                }),
                (r.solvePosition = function (e, t, n) {
                  var i,
                    s,
                    a,
                    u,
                    l,
                    c,
                    h,
                    f,
                    d = r._positionDampen * (n || 1),
                    p = o.clamp(t / o._baseDelta, 0, 1),
                    g = e.length;
                  for (i = 0; i < g; i++)
                    (s = e[i]).isActive &&
                      !s.isSensor &&
                      ((u = (a = s.collision).parentA),
                      (l = a.parentB),
                      (c = a.normal),
                      (s.separation =
                        c.x *
                          (l.positionImpulse.x +
                            a.penetration.x -
                            u.positionImpulse.x) +
                        c.y *
                          (l.positionImpulse.y +
                            a.penetration.y -
                            u.positionImpulse.y)));
                  for (i = 0; i < g; i++)
                    (s = e[i]).isActive &&
                      !s.isSensor &&
                      ((u = (a = s.collision).parentA),
                      (l = a.parentB),
                      (c = a.normal),
                      (f = s.separation - s.slop * p),
                      (u.isStatic || l.isStatic) && (f *= 2),
                      u.isStatic ||
                        u.isSleeping ||
                        ((h = d / u.totalContacts),
                        (u.positionImpulse.x += c.x * f * h),
                        (u.positionImpulse.y += c.y * f * h)),
                      l.isStatic ||
                        l.isSleeping ||
                        ((h = d / l.totalContacts),
                        (l.positionImpulse.x -= c.x * f * h),
                        (l.positionImpulse.y -= c.y * f * h)));
                }),
                (r.postSolvePosition = function (e) {
                  for (
                    var t = r._positionWarming,
                      n = e.length,
                      o = i.translate,
                      a = s.update,
                      u = 0;
                    u < n;
                    u++
                  ) {
                    var l = e[u],
                      c = l.positionImpulse,
                      h = c.x,
                      f = c.y,
                      d = l.velocity;
                    if (((l.totalContacts = 0), 0 !== h || 0 !== f)) {
                      for (var p = 0; p < l.parts.length; p++) {
                        var g = l.parts[p];
                        o(g.vertices, c),
                          a(g.bounds, g.vertices, d),
                          (g.position.x += h),
                          (g.position.y += f);
                      }
                      (l.positionPrev.x += h),
                        (l.positionPrev.y += f),
                        h * d.x + f * d.y < 0
                          ? ((c.x = 0), (c.y = 0))
                          : ((c.x *= t), (c.y *= t));
                    }
                  }
                }),
                (r.preSolveVelocity = function (e) {
                  var t,
                    n,
                    r = e.length;
                  for (t = 0; t < r; t++) {
                    var i = e[t];
                    if (i.isActive && !i.isSensor) {
                      var o = i.activeContacts,
                        s = o.length,
                        a = i.collision,
                        u = a.parentA,
                        l = a.parentB,
                        c = a.normal,
                        h = a.tangent;
                      for (n = 0; n < s; n++) {
                        var f = o[n],
                          d = f.vertex,
                          p = f.normalImpulse,
                          g = f.tangentImpulse;
                        if (0 !== p || 0 !== g) {
                          var v = c.x * p + h.x * g,
                            m = c.y * p + h.y * g;
                          u.isStatic ||
                            u.isSleeping ||
                            ((u.positionPrev.x += v * u.inverseMass),
                            (u.positionPrev.y += m * u.inverseMass),
                            (u.anglePrev +=
                              u.inverseInertia *
                              ((d.x - u.position.x) * m -
                                (d.y - u.position.y) * v))),
                            l.isStatic ||
                              l.isSleeping ||
                              ((l.positionPrev.x -= v * l.inverseMass),
                              (l.positionPrev.y -= m * l.inverseMass),
                              (l.anglePrev -=
                                l.inverseInertia *
                                ((d.x - l.position.x) * m -
                                  (d.y - l.position.y) * v)));
                        }
                      }
                    }
                  }
                }),
                (r.solveVelocity = function (e, t) {
                  var n,
                    i,
                    s,
                    a,
                    u = t / o._baseDelta,
                    l = u * u * u,
                    c = -r._restingThresh * u,
                    h = r._restingThreshTangent,
                    f = r._frictionNormalMultiplier * u,
                    d = r._frictionMaxStatic,
                    p = e.length;
                  for (s = 0; s < p; s++) {
                    var g = e[s];
                    if (g.isActive && !g.isSensor) {
                      var v = g.collision,
                        m = v.parentA,
                        y = v.parentB,
                        D = m.velocity,
                        x = y.velocity,
                        b = v.normal.x,
                        _ = v.normal.y,
                        w = v.tangent.x,
                        C = v.tangent.y,
                        S = g.activeContacts,
                        E = S.length,
                        A = 1 / E,
                        T = m.inverseMass + y.inverseMass,
                        F = g.friction * g.frictionStatic * f;
                      for (
                        D.x = m.position.x - m.positionPrev.x,
                          D.y = m.position.y - m.positionPrev.y,
                          x.x = y.position.x - y.positionPrev.x,
                          x.y = y.position.y - y.positionPrev.y,
                          m.angularVelocity = m.angle - m.anglePrev,
                          y.angularVelocity = y.angle - y.anglePrev,
                          a = 0;
                        a < E;
                        a++
                      ) {
                        var P = S[a],
                          k = P.vertex,
                          M = k.x - m.position.x,
                          B = k.y - m.position.y,
                          O = k.x - y.position.x,
                          R = k.y - y.position.y,
                          I = D.x - B * m.angularVelocity,
                          L = D.y + M * m.angularVelocity,
                          q = I - (x.x - R * y.angularVelocity),
                          j = L - (x.y + O * y.angularVelocity),
                          V = b * q + _ * j,
                          N = w * q + C * j,
                          H = g.separation + V,
                          Y = Math.min(H, 1),
                          W = (Y = H < 0 ? 0 : Y) * F;
                        N < -W || N > W
                          ? ((i = N > 0 ? N : -N),
                            (n = g.friction * (N > 0 ? 1 : -1) * l) < -i
                              ? (n = -i)
                              : n > i && (n = i))
                          : ((n = N), (i = d));
                        var z = M * _ - B * b,
                          X = O * _ - R * b,
                          U =
                            A /
                            (T +
                              m.inverseInertia * z * z +
                              y.inverseInertia * X * X),
                          G = (1 + g.restitution) * V * U;
                        if (((n *= U), V < c)) P.normalImpulse = 0;
                        else {
                          var $ = P.normalImpulse;
                          (P.normalImpulse += G),
                            P.normalImpulse > 0 && (P.normalImpulse = 0),
                            (G = P.normalImpulse - $);
                        }
                        if (N < -h || N > h) P.tangentImpulse = 0;
                        else {
                          var K = P.tangentImpulse;
                          (P.tangentImpulse += n),
                            P.tangentImpulse < -i && (P.tangentImpulse = -i),
                            P.tangentImpulse > i && (P.tangentImpulse = i),
                            (n = P.tangentImpulse - K);
                        }
                        var Q = b * G + w * n,
                          Z = _ * G + C * n;
                        m.isStatic ||
                          m.isSleeping ||
                          ((m.positionPrev.x += Q * m.inverseMass),
                          (m.positionPrev.y += Z * m.inverseMass),
                          (m.anglePrev += (M * Z - B * Q) * m.inverseInertia)),
                          y.isStatic ||
                            y.isSleeping ||
                            ((y.positionPrev.x -= Q * y.inverseMass),
                            (y.positionPrev.y -= Z * y.inverseMass),
                            (y.anglePrev -=
                              (O * Z - R * Q) * y.inverseInertia));
                      }
                    }
                  }
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(9),
                o = n(0);
              (r.create = function (e) {
                return o.extend(
                  {
                    table: {},
                    list: [],
                    collisionStart: [],
                    collisionActive: [],
                    collisionEnd: [],
                  },
                  e
                );
              }),
                (r.update = function (e, t, n) {
                  var r,
                    o,
                    s,
                    a,
                    u = e.list,
                    l = u.length,
                    c = e.table,
                    h = t.length,
                    f = e.collisionStart,
                    d = e.collisionEnd,
                    p = e.collisionActive;
                  for (
                    f.length = 0, d.length = 0, p.length = 0, a = 0;
                    a < l;
                    a++
                  )
                    u[a].confirmedActive = !1;
                  for (a = 0; a < h; a++)
                    (s = (r = t[a]).pair)
                      ? (s.isActive ? p.push(s) : f.push(s),
                        i.update(s, r, n),
                        (s.confirmedActive = !0))
                      : ((c[(s = i.create(r, n)).id] = s),
                        f.push(s),
                        u.push(s));
                  var g = [];
                  for (l = u.length, a = 0; a < l; a++)
                    (s = u[a]).confirmedActive ||
                      (i.setActive(s, !1, n),
                      d.push(s),
                      s.collision.bodyA.isSleeping ||
                        s.collision.bodyB.isSleeping ||
                        g.push(a));
                  for (a = 0; a < g.length; a++)
                    (s = u[(o = g[a] - a)]), u.splice(o, 1), delete c[s.id];
                }),
                (r.clear = function (e) {
                  return (
                    (e.table = {}),
                    (e.list.length = 0),
                    (e.collisionStart.length = 0),
                    (e.collisionActive.length = 0),
                    (e.collisionEnd.length = 0),
                    e
                  );
                });
            },
            function (e, t, n) {
              var r = (e.exports = n(21));
              (r.Axes = n(11)),
                (r.Bodies = n(12)),
                (r.Body = n(4)),
                (r.Bounds = n(1)),
                (r.Collision = n(8)),
                (r.Common = n(0)),
                (r.Composite = n(6)),
                (r.Composites = n(22)),
                (r.Constraint = n(10)),
                (r.Contact = n(16)),
                (r.Detector = n(13)),
                (r.Engine = n(17)),
                (r.Events = n(5)),
                (r.Grid = n(23)),
                (r.Mouse = n(14)),
                (r.MouseConstraint = n(24)),
                (r.Pair = n(9)),
                (r.Pairs = n(19)),
                (r.Plugin = n(15)),
                (r.Query = n(25)),
                (r.Render = n(26)),
                (r.Resolver = n(18)),
                (r.Runner = n(27)),
                (r.SAT = n(28)),
                (r.Sleeping = n(7)),
                (r.Svg = n(29)),
                (r.Vector = n(2)),
                (r.Vertices = n(3)),
                (r.World = n(30)),
                (r.Engine.run = r.Runner.run),
                r.Common.deprecated(
                  r.Engine,
                  "run",
                  "Engine.run ➤ use Matter.Runner.run(engine) instead"
                );
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(15),
                o = n(0);
              (r.name = "matter-js"),
                (r.version = "0.19.0"),
                (r.uses = []),
                (r.used = []),
                (r.use = function () {
                  i.use(r, Array.prototype.slice.call(arguments));
                }),
                (r.before = function (e, t) {
                  return (
                    (e = e.replace(/^Matter./, "")), o.chainPathBefore(r, e, t)
                  );
                }),
                (r.after = function (e, t) {
                  return (
                    (e = e.replace(/^Matter./, "")), o.chainPathAfter(r, e, t)
                  );
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(6),
                o = n(10),
                s = n(0),
                a = n(4),
                u = n(12),
                l = s.deprecated;
              (r.stack = function (e, t, n, r, o, s, u) {
                for (
                  var l,
                    c = i.create({ label: "Stack" }),
                    h = e,
                    f = t,
                    d = 0,
                    p = 0;
                  p < r;
                  p++
                ) {
                  for (var g = 0, v = 0; v < n; v++) {
                    var m = u(h, f, v, p, l, d);
                    if (m) {
                      var y = m.bounds.max.y - m.bounds.min.y,
                        D = m.bounds.max.x - m.bounds.min.x;
                      y > g && (g = y),
                        a.translate(m, { x: 0.5 * D, y: 0.5 * y }),
                        (h = m.bounds.max.x + o),
                        i.addBody(c, m),
                        (l = m),
                        (d += 1);
                    } else h += o;
                  }
                  (f += g + s), (h = e);
                }
                return c;
              }),
                (r.chain = function (e, t, n, r, a, u) {
                  for (var l = e.bodies, c = 1; c < l.length; c++) {
                    var h = l[c - 1],
                      f = l[c],
                      d = h.bounds.max.y - h.bounds.min.y,
                      p = h.bounds.max.x - h.bounds.min.x,
                      g = f.bounds.max.y - f.bounds.min.y,
                      v = {
                        bodyA: h,
                        pointA: { x: p * t, y: d * n },
                        bodyB: f,
                        pointB: {
                          x: (f.bounds.max.x - f.bounds.min.x) * r,
                          y: g * a,
                        },
                      },
                      m = s.extend(v, u);
                    i.addConstraint(e, o.create(m));
                  }
                  return (e.label += " Chain"), e;
                }),
                (r.mesh = function (e, t, n, r, a) {
                  var u,
                    l,
                    c,
                    h,
                    f,
                    d = e.bodies;
                  for (u = 0; u < n; u++) {
                    for (l = 1; l < t; l++)
                      (c = d[l - 1 + u * t]),
                        (h = d[l + u * t]),
                        i.addConstraint(
                          e,
                          o.create(s.extend({ bodyA: c, bodyB: h }, a))
                        );
                    if (u > 0)
                      for (l = 0; l < t; l++)
                        (c = d[l + (u - 1) * t]),
                          (h = d[l + u * t]),
                          i.addConstraint(
                            e,
                            o.create(s.extend({ bodyA: c, bodyB: h }, a))
                          ),
                          r &&
                            l > 0 &&
                            ((f = d[l - 1 + (u - 1) * t]),
                            i.addConstraint(
                              e,
                              o.create(s.extend({ bodyA: f, bodyB: h }, a))
                            )),
                          r &&
                            l < t - 1 &&
                            ((f = d[l + 1 + (u - 1) * t]),
                            i.addConstraint(
                              e,
                              o.create(s.extend({ bodyA: f, bodyB: h }, a))
                            ));
                  }
                  return (e.label += " Mesh"), e;
                }),
                (r.pyramid = function (e, t, n, i, o, s, u) {
                  return r.stack(e, t, n, i, o, s, function (t, r, s, l, c, h) {
                    var f = Math.min(i, Math.ceil(n / 2)),
                      d = c ? c.bounds.max.x - c.bounds.min.x : 0;
                    if (!(l > f || s < (l = f - l) || s > n - 1 - l))
                      return (
                        1 === h &&
                          a.translate(c, {
                            x: (s + (n % 2 == 1 ? 1 : -1)) * d,
                            y: 0,
                          }),
                        u(e + (c ? s * d : 0) + s * o, r, s, l, c, h)
                      );
                  });
                }),
                (r.newtonsCradle = function (e, t, n, r, s) {
                  for (
                    var a = i.create({ label: "Newtons Cradle" }), l = 0;
                    l < n;
                    l++
                  ) {
                    var c = u.circle(e + l * (1.9 * r), t + s, r, {
                        inertia: 1 / 0,
                        restitution: 1,
                        friction: 0,
                        frictionAir: 1e-4,
                        slop: 1,
                      }),
                      h = o.create({
                        pointA: { x: e + l * (1.9 * r), y: t },
                        bodyB: c,
                      });
                    i.addBody(a, c), i.addConstraint(a, h);
                  }
                  return a;
                }),
                l(
                  r,
                  "newtonsCradle",
                  "Composites.newtonsCradle ➤ moved to newtonsCradle example"
                ),
                (r.car = function (e, t, n, r, s) {
                  var l = a.nextGroup(!0),
                    c = 0.5 * -n + 20,
                    h = 0.5 * n - 20,
                    f = i.create({ label: "Car" }),
                    d = u.rectangle(e, t, n, r, {
                      collisionFilter: { group: l },
                      chamfer: { radius: 0.5 * r },
                      density: 2e-4,
                    }),
                    p = u.circle(e + c, t + 0, s, {
                      collisionFilter: { group: l },
                      friction: 0.8,
                    }),
                    g = u.circle(e + h, t + 0, s, {
                      collisionFilter: { group: l },
                      friction: 0.8,
                    }),
                    v = o.create({
                      bodyB: d,
                      pointB: { x: c, y: 0 },
                      bodyA: p,
                      stiffness: 1,
                      length: 0,
                    }),
                    m = o.create({
                      bodyB: d,
                      pointB: { x: h, y: 0 },
                      bodyA: g,
                      stiffness: 1,
                      length: 0,
                    });
                  return (
                    i.addBody(f, d),
                    i.addBody(f, p),
                    i.addBody(f, g),
                    i.addConstraint(f, v),
                    i.addConstraint(f, m),
                    f
                  );
                }),
                l(r, "car", "Composites.car ➤ moved to car example"),
                (r.softBody = function (e, t, n, i, o, a, l, c, h, f) {
                  (h = s.extend({ inertia: 1 / 0 }, h)),
                    (f = s.extend(
                      { stiffness: 0.2, render: { type: "line", anchors: !1 } },
                      f
                    ));
                  var d = r.stack(e, t, n, i, o, a, function (e, t) {
                    return u.circle(e, t, c, h);
                  });
                  return r.mesh(d, n, i, l, f), (d.label = "Soft Body"), d;
                }),
                l(
                  r,
                  "softBody",
                  "Composites.softBody ➤ moved to softBody and cloth examples"
                );
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(9),
                o = n(0),
                s = o.deprecated;
              (r.create = function (e) {
                return o.extend(
                  {
                    buckets: {},
                    pairs: {},
                    pairsList: [],
                    bucketWidth: 48,
                    bucketHeight: 48,
                  },
                  e
                );
              }),
                (r.update = function (e, t, n, i) {
                  var o,
                    s,
                    a,
                    u,
                    l,
                    c = n.world,
                    h = e.buckets,
                    f = !1;
                  for (o = 0; o < t.length; o++) {
                    var d = t[o];
                    if (
                      (!d.isSleeping || i) &&
                      (!c.bounds ||
                        !(
                          d.bounds.max.x < c.bounds.min.x ||
                          d.bounds.min.x > c.bounds.max.x ||
                          d.bounds.max.y < c.bounds.min.y ||
                          d.bounds.min.y > c.bounds.max.y
                        ))
                    ) {
                      var p = r._getRegion(e, d);
                      if (!d.region || p.id !== d.region.id || i) {
                        (d.region && !i) || (d.region = p);
                        var g = r._regionUnion(p, d.region);
                        for (s = g.startCol; s <= g.endCol; s++)
                          for (a = g.startRow; a <= g.endRow; a++) {
                            u = h[(l = r._getBucketId(s, a))];
                            var v =
                                s >= p.startCol &&
                                s <= p.endCol &&
                                a >= p.startRow &&
                                a <= p.endRow,
                              m =
                                s >= d.region.startCol &&
                                s <= d.region.endCol &&
                                a >= d.region.startRow &&
                                a <= d.region.endRow;
                            !v && m && m && u && r._bucketRemoveBody(e, u, d),
                              (d.region === p || (v && !m) || i) &&
                                (u || (u = r._createBucket(h, l)),
                                r._bucketAddBody(e, u, d));
                          }
                        (d.region = p), (f = !0);
                      }
                    }
                  }
                  f && (e.pairsList = r._createActivePairsList(e));
                }),
                s(r, "update", "Grid.update ➤ replaced by Matter.Detector"),
                (r.clear = function (e) {
                  (e.buckets = {}), (e.pairs = {}), (e.pairsList = []);
                }),
                s(r, "clear", "Grid.clear ➤ replaced by Matter.Detector"),
                (r._regionUnion = function (e, t) {
                  var n = Math.min(e.startCol, t.startCol),
                    i = Math.max(e.endCol, t.endCol),
                    o = Math.min(e.startRow, t.startRow),
                    s = Math.max(e.endRow, t.endRow);
                  return r._createRegion(n, i, o, s);
                }),
                (r._getRegion = function (e, t) {
                  var n = t.bounds,
                    i = Math.floor(n.min.x / e.bucketWidth),
                    o = Math.floor(n.max.x / e.bucketWidth),
                    s = Math.floor(n.min.y / e.bucketHeight),
                    a = Math.floor(n.max.y / e.bucketHeight);
                  return r._createRegion(i, o, s, a);
                }),
                (r._createRegion = function (e, t, n, r) {
                  return {
                    id: e + "," + t + "," + n + "," + r,
                    startCol: e,
                    endCol: t,
                    startRow: n,
                    endRow: r,
                  };
                }),
                (r._getBucketId = function (e, t) {
                  return "C" + e + "R" + t;
                }),
                (r._createBucket = function (e, t) {
                  return (e[t] = []);
                }),
                (r._bucketAddBody = function (e, t, n) {
                  var r,
                    o = e.pairs,
                    s = i.id,
                    a = t.length;
                  for (r = 0; r < a; r++) {
                    var u = t[r];
                    if (!(n.id === u.id || (n.isStatic && u.isStatic))) {
                      var l = s(n, u),
                        c = o[l];
                      c ? (c[2] += 1) : (o[l] = [n, u, 1]);
                    }
                  }
                  t.push(n);
                }),
                (r._bucketRemoveBody = function (e, t, n) {
                  var r,
                    s = e.pairs,
                    a = i.id;
                  t.splice(o.indexOf(t, n), 1);
                  var u = t.length;
                  for (r = 0; r < u; r++) {
                    var l = s[a(n, t[r])];
                    l && (l[2] -= 1);
                  }
                }),
                (r._createActivePairsList = function (e) {
                  var t,
                    n,
                    r = e.pairs,
                    i = o.keys(r),
                    s = i.length,
                    a = [];
                  for (n = 0; n < s; n++)
                    (t = r[i[n]])[2] > 0 ? a.push(t) : delete r[i[n]];
                  return a;
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(3),
                o = n(7),
                s = n(14),
                a = n(5),
                u = n(13),
                l = n(10),
                c = n(6),
                h = n(0),
                f = n(1);
              (r.create = function (e, t) {
                var n = (e ? e.mouse : null) || (t ? t.mouse : null);
                n ||
                  (e && e.render && e.render.canvas
                    ? (n = s.create(e.render.canvas))
                    : t && t.element
                    ? (n = s.create(t.element))
                    : ((n = s.create()),
                      h.warn(
                        "MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected"
                      )));
                var i = {
                    type: "mouseConstraint",
                    mouse: n,
                    element: null,
                    body: null,
                    constraint: l.create({
                      label: "Mouse Constraint",
                      pointA: n.position,
                      pointB: { x: 0, y: 0 },
                      length: 0.01,
                      stiffness: 0.1,
                      angularStiffness: 1,
                      render: { strokeStyle: "#90EE90", lineWidth: 3 },
                    }),
                    collisionFilter: {
                      category: 1,
                      mask: 4294967295,
                      group: 0,
                    },
                  },
                  o = h.extend(i, t);
                return (
                  a.on(e, "beforeUpdate", function () {
                    var t = c.allBodies(e.world);
                    r.update(o, t), r._triggerEvents(o);
                  }),
                  o
                );
              }),
                (r.update = function (e, t) {
                  var n = e.mouse,
                    r = e.constraint,
                    s = e.body;
                  if (0 === n.button) {
                    if (r.bodyB) o.set(r.bodyB, !1), (r.pointA = n.position);
                    else
                      for (var l = 0; l < t.length; l++)
                        if (
                          ((s = t[l]),
                          f.contains(s.bounds, n.position) &&
                            u.canCollide(s.collisionFilter, e.collisionFilter))
                        )
                          for (
                            var c = s.parts.length > 1 ? 1 : 0;
                            c < s.parts.length;
                            c++
                          ) {
                            var h = s.parts[c];
                            if (i.contains(h.vertices, n.position)) {
                              (r.pointA = n.position),
                                (r.bodyB = e.body = s),
                                (r.pointB = {
                                  x: n.position.x - s.position.x,
                                  y: n.position.y - s.position.y,
                                }),
                                (r.angleB = s.angle),
                                o.set(s, !1),
                                a.trigger(e, "startdrag", {
                                  mouse: n,
                                  body: s,
                                });
                              break;
                            }
                          }
                  } else
                    (r.bodyB = e.body = null),
                      (r.pointB = null),
                      s && a.trigger(e, "enddrag", { mouse: n, body: s });
                }),
                (r._triggerEvents = function (e) {
                  var t = e.mouse,
                    n = t.sourceEvents;
                  n.mousemove && a.trigger(e, "mousemove", { mouse: t }),
                    n.mousedown && a.trigger(e, "mousedown", { mouse: t }),
                    n.mouseup && a.trigger(e, "mouseup", { mouse: t }),
                    s.clearSourceEvents(t);
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(2),
                o = n(8),
                s = n(1),
                a = n(12),
                u = n(3);
              (r.collides = function (e, t) {
                for (
                  var n = [],
                    r = t.length,
                    i = e.bounds,
                    a = o.collides,
                    u = s.overlaps,
                    l = 0;
                  l < r;
                  l++
                ) {
                  var c = t[l],
                    h = c.parts.length,
                    f = 1 === h ? 0 : 1;
                  if (u(c.bounds, i))
                    for (var d = f; d < h; d++) {
                      var p = c.parts[d];
                      if (u(p.bounds, i)) {
                        var g = a(p, e);
                        if (g) {
                          n.push(g);
                          break;
                        }
                      }
                    }
                }
                return n;
              }),
                (r.ray = function (e, t, n, o) {
                  o = o || 1e-100;
                  for (
                    var s = i.angle(t, n),
                      u = i.magnitude(i.sub(t, n)),
                      l = 0.5 * (n.x + t.x),
                      c = 0.5 * (n.y + t.y),
                      h = a.rectangle(l, c, u, o, { angle: s }),
                      f = r.collides(h, e),
                      d = 0;
                    d < f.length;
                    d += 1
                  ) {
                    var p = f[d];
                    p.body = p.bodyB = p.bodyA;
                  }
                  return f;
                }),
                (r.region = function (e, t, n) {
                  for (var r = [], i = 0; i < e.length; i++) {
                    var o = e[i],
                      a = s.overlaps(o.bounds, t);
                    ((a && !n) || (!a && n)) && r.push(o);
                  }
                  return r;
                }),
                (r.point = function (e, t) {
                  for (var n = [], r = 0; r < e.length; r++) {
                    var i = e[r];
                    if (s.contains(i.bounds, t))
                      for (
                        var o = 1 === i.parts.length ? 0 : 1;
                        o < i.parts.length;
                        o++
                      ) {
                        var a = i.parts[o];
                        if (
                          s.contains(a.bounds, t) &&
                          u.contains(a.vertices, t)
                        ) {
                          n.push(i);
                          break;
                        }
                      }
                  }
                  return n;
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(4),
                o = n(0),
                s = n(6),
                a = n(1),
                u = n(5),
                l = n(2),
                c = n(14);
              !(function () {
                var e, t;
                "undefined" != typeof window &&
                  ((e =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (e) {
                      window.setTimeout(function () {
                        e(o.now());
                      }, 1e3 / 60);
                    }),
                  (t =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.msCancelAnimationFrame)),
                  (r._goodFps = 30),
                  (r._goodDelta = 1e3 / 60),
                  (r.create = function (e) {
                    var t = {
                        engine: null,
                        element: null,
                        canvas: null,
                        mouse: null,
                        frameRequestId: null,
                        timing: {
                          historySize: 60,
                          delta: 0,
                          deltaHistory: [],
                          lastTime: 0,
                          lastTimestamp: 0,
                          lastElapsed: 0,
                          timestampElapsed: 0,
                          timestampElapsedHistory: [],
                          engineDeltaHistory: [],
                          engineElapsedHistory: [],
                          elapsedHistory: [],
                        },
                        options: {
                          width: 800,
                          height: 600,
                          pixelRatio: 1,
                          background: "#14151f",
                          wireframeBackground: "#14151f",
                          hasBounds: !!e.bounds,
                          enabled: !0,
                          wireframes: !0,
                          showSleeping: !0,
                          showDebug: !1,
                          showStats: !1,
                          showPerformance: !1,
                          showBounds: !1,
                          showVelocity: !1,
                          showCollisions: !1,
                          showSeparations: !1,
                          showAxes: !1,
                          showPositions: !1,
                          showAngleIndicator: !1,
                          showIds: !1,
                          showVertexNumbers: !1,
                          showConvexHulls: !1,
                          showInternalEdges: !1,
                          showMousePosition: !1,
                        },
                      },
                      n = o.extend(t, e);
                    return (
                      n.canvas &&
                        ((n.canvas.width = n.options.width || n.canvas.width),
                        (n.canvas.height =
                          n.options.height || n.canvas.height)),
                      (n.mouse = e.mouse),
                      (n.engine = e.engine),
                      (n.canvas =
                        n.canvas || f(n.options.width, n.options.height)),
                      (n.context = n.canvas.getContext("2d")),
                      (n.textures = {}),
                      (n.bounds = n.bounds || {
                        min: { x: 0, y: 0 },
                        max: { x: n.canvas.width, y: n.canvas.height },
                      }),
                      (n.controller = r),
                      (n.options.showBroadphase = !1),
                      1 !== n.options.pixelRatio &&
                        r.setPixelRatio(n, n.options.pixelRatio),
                      o.isElement(n.element) && n.element.appendChild(n.canvas),
                      n
                    );
                  }),
                  (r.run = function (t) {
                    !(function i(o) {
                      (t.frameRequestId = e(i)),
                        n(t, o),
                        r.world(t, o),
                        (t.options.showStats || t.options.showDebug) &&
                          r.stats(t, t.context, o),
                        (t.options.showPerformance || t.options.showDebug) &&
                          r.performance(t, t.context, o);
                    })();
                  }),
                  (r.stop = function (e) {
                    t(e.frameRequestId);
                  }),
                  (r.setPixelRatio = function (e, t) {
                    var n = e.options,
                      r = e.canvas;
                    "auto" === t && (t = d(r)),
                      (n.pixelRatio = t),
                      r.setAttribute("data-pixel-ratio", t),
                      (r.width = n.width * t),
                      (r.height = n.height * t),
                      (r.style.width = n.width + "px"),
                      (r.style.height = n.height + "px");
                  }),
                  (r.lookAt = function (e, t, n, r) {
                    (r = void 0 === r || r),
                      (t = o.isArray(t) ? t : [t]),
                      (n = n || { x: 0, y: 0 });
                    for (
                      var i = {
                          min: { x: 1 / 0, y: 1 / 0 },
                          max: { x: -1 / 0, y: -1 / 0 },
                        },
                        s = 0;
                      s < t.length;
                      s += 1
                    ) {
                      var a = t[s],
                        u = a.bounds ? a.bounds.min : a.min || a.position || a,
                        l = a.bounds ? a.bounds.max : a.max || a.position || a;
                      u &&
                        l &&
                        (u.x < i.min.x && (i.min.x = u.x),
                        l.x > i.max.x && (i.max.x = l.x),
                        u.y < i.min.y && (i.min.y = u.y),
                        l.y > i.max.y && (i.max.y = l.y));
                    }
                    var h = i.max.x - i.min.x + 2 * n.x,
                      f = i.max.y - i.min.y + 2 * n.y,
                      d = e.canvas.height,
                      p = e.canvas.width / d,
                      g = h / f,
                      v = 1,
                      m = 1;
                    g > p ? (m = g / p) : (v = p / g),
                      (e.options.hasBounds = !0),
                      (e.bounds.min.x = i.min.x),
                      (e.bounds.max.x = i.min.x + h * v),
                      (e.bounds.min.y = i.min.y),
                      (e.bounds.max.y = i.min.y + f * m),
                      r &&
                        ((e.bounds.min.x += 0.5 * h - h * v * 0.5),
                        (e.bounds.max.x += 0.5 * h - h * v * 0.5),
                        (e.bounds.min.y += 0.5 * f - f * m * 0.5),
                        (e.bounds.max.y += 0.5 * f - f * m * 0.5)),
                      (e.bounds.min.x -= n.x),
                      (e.bounds.max.x -= n.x),
                      (e.bounds.min.y -= n.y),
                      (e.bounds.max.y -= n.y),
                      e.mouse &&
                        (c.setScale(e.mouse, {
                          x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                          y:
                            (e.bounds.max.y - e.bounds.min.y) / e.canvas.height,
                        }),
                        c.setOffset(e.mouse, e.bounds.min));
                  }),
                  (r.startViewTransform = function (e) {
                    var t = e.bounds.max.x - e.bounds.min.x,
                      n = e.bounds.max.y - e.bounds.min.y,
                      r = t / e.options.width,
                      i = n / e.options.height;
                    e.context.setTransform(
                      e.options.pixelRatio / r,
                      0,
                      0,
                      e.options.pixelRatio / i,
                      0,
                      0
                    ),
                      e.context.translate(-e.bounds.min.x, -e.bounds.min.y);
                  }),
                  (r.endViewTransform = function (e) {
                    e.context.setTransform(
                      e.options.pixelRatio,
                      0,
                      0,
                      e.options.pixelRatio,
                      0,
                      0
                    );
                  }),
                  (r.world = function (e, t) {
                    var n,
                      i = o.now(),
                      h = e.engine,
                      f = h.world,
                      d = e.canvas,
                      p = e.context,
                      v = e.options,
                      m = e.timing,
                      y = s.allBodies(f),
                      D = s.allConstraints(f),
                      x = v.wireframes ? v.wireframeBackground : v.background,
                      b = [],
                      _ = [],
                      w = { timestamp: h.timing.timestamp };
                    if (
                      (u.trigger(e, "beforeRender", w),
                      e.currentBackground !== x && g(e, x),
                      (p.globalCompositeOperation = "source-in"),
                      (p.fillStyle = "transparent"),
                      p.fillRect(0, 0, d.width, d.height),
                      (p.globalCompositeOperation = "source-over"),
                      v.hasBounds)
                    ) {
                      for (n = 0; n < y.length; n++) {
                        var C = y[n];
                        a.overlaps(C.bounds, e.bounds) && b.push(C);
                      }
                      for (n = 0; n < D.length; n++) {
                        var S = D[n],
                          E = S.bodyA,
                          A = S.bodyB,
                          T = S.pointA,
                          F = S.pointB;
                        E && (T = l.add(E.position, S.pointA)),
                          A && (F = l.add(A.position, S.pointB)),
                          T &&
                            F &&
                            (a.contains(e.bounds, T) ||
                              a.contains(e.bounds, F)) &&
                            _.push(S);
                      }
                      r.startViewTransform(e),
                        e.mouse &&
                          (c.setScale(e.mouse, {
                            x:
                              (e.bounds.max.x - e.bounds.min.x) /
                              e.options.width,
                            y:
                              (e.bounds.max.y - e.bounds.min.y) /
                              e.options.height,
                          }),
                          c.setOffset(e.mouse, e.bounds.min));
                    } else
                      (_ = D),
                        (b = y),
                        1 !== e.options.pixelRatio &&
                          e.context.setTransform(
                            e.options.pixelRatio,
                            0,
                            0,
                            e.options.pixelRatio,
                            0,
                            0
                          );
                    !v.wireframes || (h.enableSleeping && v.showSleeping)
                      ? r.bodies(e, b, p)
                      : (v.showConvexHulls && r.bodyConvexHulls(e, b, p),
                        r.bodyWireframes(e, b, p)),
                      v.showBounds && r.bodyBounds(e, b, p),
                      (v.showAxes || v.showAngleIndicator) &&
                        r.bodyAxes(e, b, p),
                      v.showPositions && r.bodyPositions(e, b, p),
                      v.showVelocity && r.bodyVelocity(e, b, p),
                      v.showIds && r.bodyIds(e, b, p),
                      v.showSeparations && r.separations(e, h.pairs.list, p),
                      v.showCollisions && r.collisions(e, h.pairs.list, p),
                      v.showVertexNumbers && r.vertexNumbers(e, b, p),
                      v.showMousePosition && r.mousePosition(e, e.mouse, p),
                      r.constraints(_, p),
                      v.hasBounds && r.endViewTransform(e),
                      u.trigger(e, "afterRender", w),
                      (m.lastElapsed = o.now() - i);
                  }),
                  (r.stats = function (e, t, n) {
                    for (
                      var r = e.engine,
                        i = r.world,
                        o = s.allBodies(i),
                        a = 0,
                        u = 0,
                        l = 0;
                      l < o.length;
                      l += 1
                    )
                      a += o[l].parts.length;
                    var c = {
                      Part: a,
                      Body: o.length,
                      Cons: s.allConstraints(i).length,
                      Comp: s.allComposites(i).length,
                      Pair: r.pairs.list.length,
                    };
                    for (var h in ((t.fillStyle = "#0e0f19"),
                    t.fillRect(u, 0, 302.5, 44),
                    (t.font = "12px Arial"),
                    (t.textBaseline = "top"),
                    (t.textAlign = "right"),
                    c)) {
                      var f = c[h];
                      (t.fillStyle = "#aaa"),
                        t.fillText(h, u + 55, 8),
                        (t.fillStyle = "#eee"),
                        t.fillText(f, u + 55, 26),
                        (u += 55);
                    }
                  }),
                  (r.performance = function (e, t) {
                    var n = e.engine,
                      i = e.timing,
                      o = i.deltaHistory,
                      s = i.elapsedHistory,
                      a = i.timestampElapsedHistory,
                      u = i.engineDeltaHistory,
                      l = i.engineElapsedHistory,
                      c = n.timing.lastDelta,
                      f = h(o),
                      d = h(s),
                      p = h(u),
                      g = h(l),
                      v = h(a) / f || 0,
                      m = 1e3 / f || 0,
                      y = 60;
                    (t.fillStyle = "#0e0f19"),
                      t.fillRect(0, 50, 370, 34),
                      r.status(
                        t,
                        10,
                        69,
                        y,
                        4,
                        o.length,
                        Math.round(m) + " fps",
                        m / r._goodFps,
                        function (e) {
                          return o[e] / f - 1;
                        }
                      ),
                      r.status(
                        t,
                        82,
                        69,
                        y,
                        4,
                        u.length,
                        c.toFixed(2) + " dt",
                        r._goodDelta / c,
                        function (e) {
                          return u[e] / p - 1;
                        }
                      ),
                      r.status(
                        t,
                        154,
                        69,
                        y,
                        4,
                        l.length,
                        g.toFixed(2) + " ut",
                        1 - g / r._goodFps,
                        function (e) {
                          return l[e] / g - 1;
                        }
                      ),
                      r.status(
                        t,
                        226,
                        69,
                        y,
                        4,
                        s.length,
                        d.toFixed(2) + " rt",
                        1 - d / r._goodFps,
                        function (e) {
                          return s[e] / d - 1;
                        }
                      ),
                      r.status(
                        t,
                        298,
                        69,
                        y,
                        4,
                        a.length,
                        v.toFixed(2) + " x",
                        v * v * v,
                        function (e) {
                          return (a[e] / o[e] / v || 0) - 1;
                        }
                      );
                  }),
                  (r.status = function (e, t, n, r, i, s, a, u, l) {
                    (e.strokeStyle = "#888"),
                      (e.fillStyle = "#444"),
                      (e.lineWidth = 1),
                      e.fillRect(t, n + 7, r, 1),
                      e.beginPath(),
                      e.moveTo(t, n + 7 - i * o.clamp(0.4 * l(0), -2, 2));
                    for (var c = 0; c < r; c += 1)
                      e.lineTo(
                        t + c,
                        n + 7 - (c < s ? i * o.clamp(0.4 * l(c), -2, 2) : 0)
                      );
                    e.stroke(),
                      (e.fillStyle =
                        "hsl(" + o.clamp(25 + 95 * u, 0, 120) + ",100%,60%)"),
                      e.fillRect(t, n - 7, 4, 4),
                      (e.font = "12px Arial"),
                      (e.textBaseline = "middle"),
                      (e.textAlign = "right"),
                      (e.fillStyle = "#eee"),
                      e.fillText(a, t + r, n - 5);
                  }),
                  (r.constraints = function (e, t) {
                    for (var n = t, r = 0; r < e.length; r++) {
                      var i = e[r];
                      if (i.render.visible && i.pointA && i.pointB) {
                        var s,
                          a,
                          u = i.bodyA,
                          c = i.bodyB;
                        if (
                          ((s = u ? l.add(u.position, i.pointA) : i.pointA),
                          "pin" === i.render.type)
                        )
                          n.beginPath(),
                            n.arc(s.x, s.y, 3, 0, 2 * Math.PI),
                            n.closePath();
                        else {
                          if (
                            ((a = c ? l.add(c.position, i.pointB) : i.pointB),
                            n.beginPath(),
                            n.moveTo(s.x, s.y),
                            "spring" === i.render.type)
                          )
                            for (
                              var h,
                                f = l.sub(a, s),
                                d = l.perp(l.normalise(f)),
                                p = Math.ceil(o.clamp(i.length / 5, 12, 20)),
                                g = 1;
                              g < p;
                              g += 1
                            )
                              (h = g % 2 == 0 ? 1 : -1),
                                n.lineTo(
                                  s.x + f.x * (g / p) + d.x * h * 4,
                                  s.y + f.y * (g / p) + d.y * h * 4
                                );
                          n.lineTo(a.x, a.y);
                        }
                        i.render.lineWidth &&
                          ((n.lineWidth = i.render.lineWidth),
                          (n.strokeStyle = i.render.strokeStyle),
                          n.stroke()),
                          i.render.anchors &&
                            ((n.fillStyle = i.render.strokeStyle),
                            n.beginPath(),
                            n.arc(s.x, s.y, 3, 0, 2 * Math.PI),
                            n.arc(a.x, a.y, 3, 0, 2 * Math.PI),
                            n.closePath(),
                            n.fill());
                      }
                    }
                  }),
                  (r.bodies = function (e, t, n) {
                    var r,
                      i,
                      o,
                      s,
                      a = n,
                      u = (e.engine, e.options),
                      l = u.showInternalEdges || !u.wireframes;
                    for (o = 0; o < t.length; o++)
                      if ((r = t[o]).render.visible)
                        for (
                          s = r.parts.length > 1 ? 1 : 0;
                          s < r.parts.length;
                          s++
                        )
                          if ((i = r.parts[s]).render.visible) {
                            if (
                              (u.showSleeping && r.isSleeping
                                ? (a.globalAlpha = 0.5 * i.render.opacity)
                                : 1 !== i.render.opacity &&
                                  (a.globalAlpha = i.render.opacity),
                              i.render.sprite &&
                                i.render.sprite.texture &&
                                !u.wireframes)
                            ) {
                              var c = i.render.sprite,
                                h = p(e, c.texture);
                              a.translate(i.position.x, i.position.y),
                                a.rotate(i.angle),
                                a.drawImage(
                                  h,
                                  h.width * -c.xOffset * c.xScale,
                                  h.height * -c.yOffset * c.yScale,
                                  h.width * c.xScale,
                                  h.height * c.yScale
                                ),
                                a.rotate(-i.angle),
                                a.translate(-i.position.x, -i.position.y);
                            } else {
                              if (i.circleRadius)
                                a.beginPath(),
                                  a.arc(
                                    i.position.x,
                                    i.position.y,
                                    i.circleRadius,
                                    0,
                                    2 * Math.PI
                                  );
                              else {
                                a.beginPath(),
                                  a.moveTo(i.vertices[0].x, i.vertices[0].y);
                                for (var f = 1; f < i.vertices.length; f++)
                                  !i.vertices[f - 1].isInternal || l
                                    ? a.lineTo(i.vertices[f].x, i.vertices[f].y)
                                    : a.moveTo(
                                        i.vertices[f].x,
                                        i.vertices[f].y
                                      ),
                                    i.vertices[f].isInternal &&
                                      !l &&
                                      a.moveTo(
                                        i.vertices[(f + 1) % i.vertices.length]
                                          .x,
                                        i.vertices[(f + 1) % i.vertices.length]
                                          .y
                                      );
                                a.lineTo(i.vertices[0].x, i.vertices[0].y),
                                  a.closePath();
                              }
                              u.wireframes
                                ? ((a.lineWidth = 1),
                                  (a.strokeStyle = "#bbb"),
                                  a.stroke())
                                : ((a.fillStyle = i.render.fillStyle),
                                  i.render.lineWidth &&
                                    ((a.lineWidth = i.render.lineWidth),
                                    (a.strokeStyle = i.render.strokeStyle),
                                    a.stroke()),
                                  a.fill());
                            }
                            a.globalAlpha = 1;
                          }
                  }),
                  (r.bodyWireframes = function (e, t, n) {
                    var r,
                      i,
                      o,
                      s,
                      a,
                      u = n,
                      l = e.options.showInternalEdges;
                    for (u.beginPath(), o = 0; o < t.length; o++)
                      if ((r = t[o]).render.visible)
                        for (
                          a = r.parts.length > 1 ? 1 : 0;
                          a < r.parts.length;
                          a++
                        ) {
                          for (
                            i = r.parts[a],
                              u.moveTo(i.vertices[0].x, i.vertices[0].y),
                              s = 1;
                            s < i.vertices.length;
                            s++
                          )
                            !i.vertices[s - 1].isInternal || l
                              ? u.lineTo(i.vertices[s].x, i.vertices[s].y)
                              : u.moveTo(i.vertices[s].x, i.vertices[s].y),
                              i.vertices[s].isInternal &&
                                !l &&
                                u.moveTo(
                                  i.vertices[(s + 1) % i.vertices.length].x,
                                  i.vertices[(s + 1) % i.vertices.length].y
                                );
                          u.lineTo(i.vertices[0].x, i.vertices[0].y);
                        }
                    (u.lineWidth = 1), (u.strokeStyle = "#bbb"), u.stroke();
                  }),
                  (r.bodyConvexHulls = function (e, t, n) {
                    var r,
                      i,
                      o,
                      s = n;
                    for (s.beginPath(), i = 0; i < t.length; i++)
                      if ((r = t[i]).render.visible && 1 !== r.parts.length) {
                        for (
                          s.moveTo(r.vertices[0].x, r.vertices[0].y), o = 1;
                          o < r.vertices.length;
                          o++
                        )
                          s.lineTo(r.vertices[o].x, r.vertices[o].y);
                        s.lineTo(r.vertices[0].x, r.vertices[0].y);
                      }
                    (s.lineWidth = 1),
                      (s.strokeStyle = "rgba(255,255,255,0.2)"),
                      s.stroke();
                  }),
                  (r.vertexNumbers = function (e, t, n) {
                    var r,
                      i,
                      o,
                      s = n;
                    for (r = 0; r < t.length; r++) {
                      var a = t[r].parts;
                      for (o = a.length > 1 ? 1 : 0; o < a.length; o++) {
                        var u = a[o];
                        for (i = 0; i < u.vertices.length; i++)
                          (s.fillStyle = "rgba(255,255,255,0.2)"),
                            s.fillText(
                              r + "_" + i,
                              u.position.x +
                                0.8 * (u.vertices[i].x - u.position.x),
                              u.position.y +
                                0.8 * (u.vertices[i].y - u.position.y)
                            );
                      }
                    }
                  }),
                  (r.mousePosition = function (e, t, n) {
                    var r = n;
                    (r.fillStyle = "rgba(255,255,255,0.8)"),
                      r.fillText(
                        t.position.x + "  " + t.position.y,
                        t.position.x + 5,
                        t.position.y - 5
                      );
                  }),
                  (r.bodyBounds = function (e, t, n) {
                    var r = n,
                      i = (e.engine, e.options);
                    r.beginPath();
                    for (var o = 0; o < t.length; o++)
                      if (t[o].render.visible)
                        for (
                          var s = t[o].parts, a = s.length > 1 ? 1 : 0;
                          a < s.length;
                          a++
                        ) {
                          var u = s[a];
                          r.rect(
                            u.bounds.min.x,
                            u.bounds.min.y,
                            u.bounds.max.x - u.bounds.min.x,
                            u.bounds.max.y - u.bounds.min.y
                          );
                        }
                    i.wireframes
                      ? (r.strokeStyle = "rgba(255,255,255,0.08)")
                      : (r.strokeStyle = "rgba(0,0,0,0.1)"),
                      (r.lineWidth = 1),
                      r.stroke();
                  }),
                  (r.bodyAxes = function (e, t, n) {
                    var r,
                      i,
                      o,
                      s,
                      a = n,
                      u = (e.engine, e.options);
                    for (a.beginPath(), i = 0; i < t.length; i++) {
                      var l = t[i],
                        c = l.parts;
                      if (l.render.visible)
                        if (u.showAxes)
                          for (o = c.length > 1 ? 1 : 0; o < c.length; o++)
                            for (r = c[o], s = 0; s < r.axes.length; s++) {
                              var h = r.axes[s];
                              a.moveTo(r.position.x, r.position.y),
                                a.lineTo(
                                  r.position.x + 20 * h.x,
                                  r.position.y + 20 * h.y
                                );
                            }
                        else
                          for (o = c.length > 1 ? 1 : 0; o < c.length; o++)
                            for (r = c[o], s = 0; s < r.axes.length; s++)
                              a.moveTo(r.position.x, r.position.y),
                                a.lineTo(
                                  (r.vertices[0].x +
                                    r.vertices[r.vertices.length - 1].x) /
                                    2,
                                  (r.vertices[0].y +
                                    r.vertices[r.vertices.length - 1].y) /
                                    2
                                );
                    }
                    u.wireframes
                      ? ((a.strokeStyle = "indianred"), (a.lineWidth = 1))
                      : ((a.strokeStyle = "rgba(255, 255, 255, 0.4)"),
                        (a.globalCompositeOperation = "overlay"),
                        (a.lineWidth = 2)),
                      a.stroke(),
                      (a.globalCompositeOperation = "source-over");
                  }),
                  (r.bodyPositions = function (e, t, n) {
                    var r,
                      i,
                      o,
                      s,
                      a = n,
                      u = (e.engine, e.options);
                    for (a.beginPath(), o = 0; o < t.length; o++)
                      if ((r = t[o]).render.visible)
                        for (s = 0; s < r.parts.length; s++)
                          (i = r.parts[s]),
                            a.arc(
                              i.position.x,
                              i.position.y,
                              3,
                              0,
                              2 * Math.PI,
                              !1
                            ),
                            a.closePath();
                    for (
                      u.wireframes
                        ? (a.fillStyle = "indianred")
                        : (a.fillStyle = "rgba(0,0,0,0.5)"),
                        a.fill(),
                        a.beginPath(),
                        o = 0;
                      o < t.length;
                      o++
                    )
                      (r = t[o]).render.visible &&
                        (a.arc(
                          r.positionPrev.x,
                          r.positionPrev.y,
                          2,
                          0,
                          2 * Math.PI,
                          !1
                        ),
                        a.closePath());
                    (a.fillStyle = "rgba(255,165,0,0.8)"), a.fill();
                  }),
                  (r.bodyVelocity = function (e, t, n) {
                    var r = n;
                    r.beginPath();
                    for (var o = 0; o < t.length; o++) {
                      var s = t[o];
                      if (s.render.visible) {
                        var a = i.getVelocity(s);
                        r.moveTo(s.position.x, s.position.y),
                          r.lineTo(s.position.x + a.x, s.position.y + a.y);
                      }
                    }
                    (r.lineWidth = 3),
                      (r.strokeStyle = "cornflowerblue"),
                      r.stroke();
                  }),
                  (r.bodyIds = function (e, t, n) {
                    var r,
                      i,
                      o = n;
                    for (r = 0; r < t.length; r++)
                      if (t[r].render.visible) {
                        var s = t[r].parts;
                        for (i = s.length > 1 ? 1 : 0; i < s.length; i++) {
                          var a = s[i];
                          (o.font = "12px Arial"),
                            (o.fillStyle = "rgba(255,255,255,0.5)"),
                            o.fillText(
                              a.id,
                              a.position.x + 10,
                              a.position.y - 10
                            );
                        }
                      }
                  }),
                  (r.collisions = function (e, t, n) {
                    var r,
                      i,
                      o,
                      s,
                      a = n,
                      u = e.options;
                    for (a.beginPath(), o = 0; o < t.length; o++)
                      if ((r = t[o]).isActive)
                        for (
                          i = r.collision, s = 0;
                          s < r.activeContacts.length;
                          s++
                        ) {
                          var l = r.activeContacts[s].vertex;
                          a.rect(l.x - 1.5, l.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      u.wireframes
                        ? (a.fillStyle = "rgba(255,255,255,0.7)")
                        : (a.fillStyle = "orange"),
                        a.fill(),
                        a.beginPath(),
                        o = 0;
                      o < t.length;
                      o++
                    )
                      if (
                        (r = t[o]).isActive &&
                        ((i = r.collision), r.activeContacts.length > 0)
                      ) {
                        var c = r.activeContacts[0].vertex.x,
                          h = r.activeContacts[0].vertex.y;
                        2 === r.activeContacts.length &&
                          ((c =
                            (r.activeContacts[0].vertex.x +
                              r.activeContacts[1].vertex.x) /
                            2),
                          (h =
                            (r.activeContacts[0].vertex.y +
                              r.activeContacts[1].vertex.y) /
                            2)),
                          i.bodyB === i.supports[0].body ||
                          !0 === i.bodyA.isStatic
                            ? a.moveTo(c - 8 * i.normal.x, h - 8 * i.normal.y)
                            : a.moveTo(c + 8 * i.normal.x, h + 8 * i.normal.y),
                          a.lineTo(c, h);
                      }
                    u.wireframes
                      ? (a.strokeStyle = "rgba(255,165,0,0.7)")
                      : (a.strokeStyle = "orange"),
                      (a.lineWidth = 1),
                      a.stroke();
                  }),
                  (r.separations = function (e, t, n) {
                    var r,
                      i,
                      o,
                      s,
                      a,
                      u = n,
                      l = e.options;
                    for (u.beginPath(), a = 0; a < t.length; a++)
                      if ((r = t[a]).isActive) {
                        o = (i = r.collision).bodyA;
                        var c = 1;
                        (s = i.bodyB).isStatic || o.isStatic || (c = 0.5),
                          s.isStatic && (c = 0),
                          u.moveTo(s.position.x, s.position.y),
                          u.lineTo(
                            s.position.x - i.penetration.x * c,
                            s.position.y - i.penetration.y * c
                          ),
                          (c = 1),
                          s.isStatic || o.isStatic || (c = 0.5),
                          o.isStatic && (c = 0),
                          u.moveTo(o.position.x, o.position.y),
                          u.lineTo(
                            o.position.x + i.penetration.x * c,
                            o.position.y + i.penetration.y * c
                          );
                      }
                    l.wireframes
                      ? (u.strokeStyle = "rgba(255,165,0,0.5)")
                      : (u.strokeStyle = "orange"),
                      u.stroke();
                  }),
                  (r.inspector = function (e, t) {
                    e.engine;
                    var n,
                      r = e.selected,
                      i = e.render,
                      o = i.options;
                    if (o.hasBounds) {
                      var s = i.bounds.max.x - i.bounds.min.x,
                        a = i.bounds.max.y - i.bounds.min.y,
                        u = s / i.options.width,
                        l = a / i.options.height;
                      t.scale(1 / u, 1 / l),
                        t.translate(-i.bounds.min.x, -i.bounds.min.y);
                    }
                    for (var c = 0; c < r.length; c++) {
                      var h = r[c].data;
                      switch (
                        (t.translate(0.5, 0.5),
                        (t.lineWidth = 1),
                        (t.strokeStyle = "rgba(255,165,0,0.9)"),
                        t.setLineDash([1, 2]),
                        h.type)
                      ) {
                        case "body":
                          (n = h.bounds),
                            t.beginPath(),
                            t.rect(
                              Math.floor(n.min.x - 3),
                              Math.floor(n.min.y - 3),
                              Math.floor(n.max.x - n.min.x + 6),
                              Math.floor(n.max.y - n.min.y + 6)
                            ),
                            t.closePath(),
                            t.stroke();
                          break;
                        case "constraint":
                          var f = h.pointA;
                          h.bodyA && (f = h.pointB),
                            t.beginPath(),
                            t.arc(f.x, f.y, 10, 0, 2 * Math.PI),
                            t.closePath(),
                            t.stroke();
                      }
                      t.setLineDash([]), t.translate(-0.5, -0.5);
                    }
                    null !== e.selectStart &&
                      (t.translate(0.5, 0.5),
                      (t.lineWidth = 1),
                      (t.strokeStyle = "rgba(255,165,0,0.6)"),
                      (t.fillStyle = "rgba(255,165,0,0.1)"),
                      (n = e.selectBounds),
                      t.beginPath(),
                      t.rect(
                        Math.floor(n.min.x),
                        Math.floor(n.min.y),
                        Math.floor(n.max.x - n.min.x),
                        Math.floor(n.max.y - n.min.y)
                      ),
                      t.closePath(),
                      t.stroke(),
                      t.fill(),
                      t.translate(-0.5, -0.5)),
                      o.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0);
                  });
                var n = function (e, t) {
                    var n = e.engine,
                      i = e.timing,
                      o = i.historySize,
                      s = n.timing.timestamp;
                    (i.delta = t - i.lastTime || r._goodDelta),
                      (i.lastTime = t),
                      (i.timestampElapsed = s - i.lastTimestamp || 0),
                      (i.lastTimestamp = s),
                      i.deltaHistory.unshift(i.delta),
                      (i.deltaHistory.length = Math.min(
                        i.deltaHistory.length,
                        o
                      )),
                      i.engineDeltaHistory.unshift(n.timing.lastDelta),
                      (i.engineDeltaHistory.length = Math.min(
                        i.engineDeltaHistory.length,
                        o
                      )),
                      i.timestampElapsedHistory.unshift(i.timestampElapsed),
                      (i.timestampElapsedHistory.length = Math.min(
                        i.timestampElapsedHistory.length,
                        o
                      )),
                      i.engineElapsedHistory.unshift(n.timing.lastElapsed),
                      (i.engineElapsedHistory.length = Math.min(
                        i.engineElapsedHistory.length,
                        o
                      )),
                      i.elapsedHistory.unshift(i.lastElapsed),
                      (i.elapsedHistory.length = Math.min(
                        i.elapsedHistory.length,
                        o
                      ));
                  },
                  h = function (e) {
                    for (var t = 0, n = 0; n < e.length; n += 1) t += e[n];
                    return t / e.length || 0;
                  },
                  f = function (e, t) {
                    var n = document.createElement("canvas");
                    return (
                      (n.width = e),
                      (n.height = t),
                      (n.oncontextmenu = function () {
                        return !1;
                      }),
                      (n.onselectstart = function () {
                        return !1;
                      }),
                      n
                    );
                  },
                  d = function (e) {
                    var t = e.getContext("2d");
                    return (
                      (window.devicePixelRatio || 1) /
                      (t.webkitBackingStorePixelRatio ||
                        t.mozBackingStorePixelRatio ||
                        t.msBackingStorePixelRatio ||
                        t.oBackingStorePixelRatio ||
                        t.backingStorePixelRatio ||
                        1)
                    );
                  },
                  p = function (e, t) {
                    var n = e.textures[t];
                    return (
                      n || (((n = e.textures[t] = new Image()).src = t), n)
                    );
                  },
                  g = function (e, t) {
                    var n = t;
                    /(jpg|gif|png)$/.test(t) && (n = "url(" + t + ")"),
                      (e.canvas.style.background = n),
                      (e.canvas.style.backgroundSize = "contain"),
                      (e.currentBackground = t);
                  };
              })();
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i,
                o,
                s,
                a = n(5),
                u = n(17),
                l = n(0);
              "undefined" != typeof window &&
                ((i =
                  window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.msRequestAnimationFrame),
                (o =
                  window.cancelAnimationFrame ||
                  window.mozCancelAnimationFrame ||
                  window.webkitCancelAnimationFrame ||
                  window.msCancelAnimationFrame)),
                i ||
                  ((i = function (e) {
                    s = setTimeout(function () {
                      e(l.now());
                    }, 1e3 / 60);
                  }),
                  (o = function () {
                    clearTimeout(s);
                  })),
                (r.create = function (e) {
                  var t = l.extend(
                    {
                      fps: 60,
                      deltaSampleSize: 60,
                      counterTimestamp: 0,
                      frameCounter: 0,
                      deltaHistory: [],
                      timePrev: null,
                      frameRequestId: null,
                      isFixed: !1,
                      enabled: !0,
                    },
                    e
                  );
                  return (
                    (t.delta = t.delta || 1e3 / t.fps),
                    (t.deltaMin = t.deltaMin || 1e3 / t.fps),
                    (t.deltaMax = t.deltaMax || 1e3 / (0.5 * t.fps)),
                    (t.fps = 1e3 / t.delta),
                    t
                  );
                }),
                (r.run = function (e, t) {
                  return (
                    void 0 !== e.positionIterations &&
                      ((t = e), (e = r.create())),
                    (function n(o) {
                      (e.frameRequestId = i(n)),
                        o && e.enabled && r.tick(e, t, o);
                    })(),
                    e
                  );
                }),
                (r.tick = function (e, t, n) {
                  var r,
                    i = t.timing;
                  e.isFixed
                    ? (r = e.delta)
                    : ((r = n - e.timePrev || e.delta),
                      (e.timePrev = n),
                      e.deltaHistory.push(r),
                      (e.deltaHistory = e.deltaHistory.slice(
                        -e.deltaSampleSize
                      )),
                      (r =
                        (r =
                          (r = Math.min.apply(null, e.deltaHistory)) <
                          e.deltaMin
                            ? e.deltaMin
                            : r) > e.deltaMax
                          ? e.deltaMax
                          : r),
                      (e.delta = r));
                  var o = { timestamp: i.timestamp };
                  a.trigger(e, "beforeTick", o),
                    (e.frameCounter += 1),
                    n - e.counterTimestamp >= 1e3 &&
                      ((e.fps =
                        e.frameCounter * ((n - e.counterTimestamp) / 1e3)),
                      (e.counterTimestamp = n),
                      (e.frameCounter = 0)),
                    a.trigger(e, "tick", o),
                    a.trigger(e, "beforeUpdate", o),
                    u.update(t, r),
                    a.trigger(e, "afterUpdate", o),
                    a.trigger(e, "afterTick", o);
                }),
                (r.stop = function (e) {
                  o(e.frameRequestId);
                }),
                (r.start = function (e, t) {
                  r.run(e, t);
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(8),
                o = n(0).deprecated;
              (r.collides = function (e, t) {
                return i.collides(e, t);
              }),
                o(
                  r,
                  "collides",
                  "SAT.collides ➤ replaced by Collision.collides"
                );
            },
            function (e, t, n) {
              var r = {};
              (e.exports = r), n(1);
              var i = n(0);
              (r.pathToVertices = function (e, t) {
                "undefined" == typeof window ||
                  "SVGPathSeg" in window ||
                  i.warn(
                    "Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required."
                  );
                var n,
                  o,
                  s,
                  a,
                  u,
                  l,
                  c,
                  h,
                  f,
                  d,
                  p,
                  g = [],
                  v = 0,
                  m = 0,
                  y = 0;
                t = t || 15;
                var D = function (e, t, n) {
                    var r = n % 2 == 1 && n > 1;
                    if (!f || e != f.x || t != f.y) {
                      f && r ? ((d = f.x), (p = f.y)) : ((d = 0), (p = 0));
                      var i = { x: d + e, y: p + t };
                      (!r && f) || (f = i), g.push(i), (m = d + e), (y = p + t);
                    }
                  },
                  x = function (e) {
                    var t = e.pathSegTypeAsLetter.toUpperCase();
                    if ("Z" !== t) {
                      switch (t) {
                        case "M":
                        case "L":
                        case "T":
                        case "C":
                        case "S":
                        case "Q":
                          (m = e.x), (y = e.y);
                          break;
                        case "H":
                          m = e.x;
                          break;
                        case "V":
                          y = e.y;
                      }
                      D(m, y, e.pathSegType);
                    }
                  };
                for (
                  r._svgPathToAbsolute(e),
                    s = e.getTotalLength(),
                    l = [],
                    n = 0;
                  n < e.pathSegList.numberOfItems;
                  n += 1
                )
                  l.push(e.pathSegList.getItem(n));
                for (c = l.concat(); v < s; ) {
                  if ((u = l[e.getPathSegAtLength(v)]) != h) {
                    for (; c.length && c[0] != u; ) x(c.shift());
                    h = u;
                  }
                  switch (u.pathSegTypeAsLetter.toUpperCase()) {
                    case "C":
                    case "T":
                    case "S":
                    case "Q":
                    case "A":
                      (a = e.getPointAtLength(v)), D(a.x, a.y, 0);
                  }
                  v += t;
                }
                for (n = 0, o = c.length; n < o; ++n) x(c[n]);
                return g;
              }),
                (r._svgPathToAbsolute = function (e) {
                  for (
                    var t,
                      n,
                      r,
                      i,
                      o,
                      s,
                      a = e.pathSegList,
                      u = 0,
                      l = 0,
                      c = a.numberOfItems,
                      h = 0;
                    h < c;
                    ++h
                  ) {
                    var f = a.getItem(h),
                      d = f.pathSegTypeAsLetter;
                    if (/[MLHVCSQTA]/.test(d))
                      "x" in f && (u = f.x), "y" in f && (l = f.y);
                    else
                      switch (
                        ("x1" in f && (r = u + f.x1),
                        "x2" in f && (o = u + f.x2),
                        "y1" in f && (i = l + f.y1),
                        "y2" in f && (s = l + f.y2),
                        "x" in f && (u += f.x),
                        "y" in f && (l += f.y),
                        d)
                      ) {
                        case "m":
                          a.replaceItem(e.createSVGPathSegMovetoAbs(u, l), h);
                          break;
                        case "l":
                          a.replaceItem(e.createSVGPathSegLinetoAbs(u, l), h);
                          break;
                        case "h":
                          a.replaceItem(
                            e.createSVGPathSegLinetoHorizontalAbs(u),
                            h
                          );
                          break;
                        case "v":
                          a.replaceItem(
                            e.createSVGPathSegLinetoVerticalAbs(l),
                            h
                          );
                          break;
                        case "c":
                          a.replaceItem(
                            e.createSVGPathSegCurvetoCubicAbs(u, l, r, i, o, s),
                            h
                          );
                          break;
                        case "s":
                          a.replaceItem(
                            e.createSVGPathSegCurvetoCubicSmoothAbs(u, l, o, s),
                            h
                          );
                          break;
                        case "q":
                          a.replaceItem(
                            e.createSVGPathSegCurvetoQuadraticAbs(u, l, r, i),
                            h
                          );
                          break;
                        case "t":
                          a.replaceItem(
                            e.createSVGPathSegCurvetoQuadraticSmoothAbs(u, l),
                            h
                          );
                          break;
                        case "a":
                          a.replaceItem(
                            e.createSVGPathSegArcAbs(
                              u,
                              l,
                              f.r1,
                              f.r2,
                              f.angle,
                              f.largeArcFlag,
                              f.sweepFlag
                            ),
                            h
                          );
                          break;
                        case "z":
                        case "Z":
                          (u = t), (l = n);
                      }
                    ("M" != d && "m" != d) || ((t = u), (n = l));
                  }
                });
            },
            function (e, t, n) {
              var r = {};
              e.exports = r;
              var i = n(6);
              n(0),
                (r.create = i.create),
                (r.add = i.add),
                (r.remove = i.remove),
                (r.clear = i.clear),
                (r.addComposite = i.addComposite),
                (r.addBody = i.addBody),
                (r.addConstraint = i.addConstraint);
            },
          ]);
        }),
          (e.exports = r());
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    });
  var r = {};
  !(function () {
    "use strict";
    function e(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function t(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t);
    }
    n.d(r, {
      R: function () {
        return nh;
      },
    });
    var i,
      o,
      s,
      a,
      u,
      l,
      c,
      h,
      f,
      d,
      p,
      g,
      v,
      m = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      y = { duration: 0.5, overwrite: !1, delay: 0 },
      D = 1e8,
      x = 1e-8,
      b = 2 * Math.PI,
      _ = b / 4,
      w = 0,
      C = Math.sqrt,
      S = Math.cos,
      E = Math.sin,
      A = function (e) {
        return "string" == typeof e;
      },
      T = function (e) {
        return "function" == typeof e;
      },
      F = function (e) {
        return "number" == typeof e;
      },
      P = function (e) {
        return void 0 === e;
      },
      k = function (e) {
        return "object" == typeof e;
      },
      M = function (e) {
        return !1 !== e;
      },
      B = function () {
        return "undefined" != typeof window;
      },
      O = function (e) {
        return T(e) || A(e);
      },
      R =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      I = Array.isArray,
      L = /(?:-?\.?\d|\.)+/gi,
      q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      j = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      V = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      N = /[+-]=-?[.\d]+/,
      H = /[^,'"\[\]\s]+/gi,
      Y = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      W = {},
      z = {},
      X = function (e) {
        return (z = ye(e, W)) && ln;
      },
      U = function (e, t) {
        return console.warn(
          "Invalid property",
          e,
          "set to",
          t,
          "Missing plugin? gsap.registerPlugin()"
        );
      },
      G = function (e, t) {
        return !t && console.warn(e);
      },
      $ = function (e, t) {
        return (e && (W[e] = t) && z && (z[e] = t)) || W;
      },
      K = function () {
        return 0;
      },
      Q = {},
      Z = [],
      J = {},
      ee = {},
      te = {},
      ne = 30,
      re = [],
      ie = "",
      oe = function (e) {
        var t,
          n,
          r = e[0];
        if ((k(r) || T(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
          for (n = re.length; n-- && !re[n].targetTest(r); );
          t = re[n];
        }
        for (n = e.length; n--; )
          (e[n] && (e[n]._gsap || (e[n]._gsap = new kt(e[n], t)))) ||
            e.splice(n, 1);
        return e;
      },
      se = function (e) {
        return e._gsap || oe(Ke(e))[0]._gsap;
      },
      ae = function (e, t, n) {
        return (n = e[t]) && T(n)
          ? e[t]()
          : (P(n) && e.getAttribute && e.getAttribute(t)) || n;
      },
      ue = function (e, t) {
        return (e = e.split(",")).forEach(t) || e;
      },
      le = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      },
      ce = function (e) {
        return Math.round(1e7 * e) / 1e7 || 0;
      },
      he = function (e, t) {
        var n = t.charAt(0),
          r = parseFloat(t.substr(2));
        return (
          (e = parseFloat(e)),
          "+" === n ? e + r : "-" === n ? e - r : "*" === n ? e * r : e / r
        );
      },
      fe = function (e, t) {
        for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; );
        return r < n;
      },
      de = function () {
        var e,
          t,
          n = Z.length,
          r = Z.slice(0);
        for (J = {}, Z.length = 0, e = 0; e < n; e++)
          (t = r[e]) &&
            t._lazy &&
            (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
      },
      pe = function (e, t, n, r) {
        Z.length && de(), e.render(t, n, r), Z.length && de();
      },
      ge = function (e) {
        var t = parseFloat(e);
        return (t || 0 === t) && (e + "").match(H).length < 2
          ? t
          : A(e)
          ? e.trim()
          : e;
      },
      ve = function (e) {
        return e;
      },
      me = function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e;
      },
      ye = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      },
      De = function e(t, n) {
        for (var r in n)
          "__proto__" !== r &&
            "constructor" !== r &&
            "prototype" !== r &&
            (t[r] = k(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
        return t;
      },
      xe = function (e, t) {
        var n,
          r = {};
        for (n in e) n in t || (r[n] = e[n]);
        return r;
      },
      be = function (e) {
        var t,
          n = e.parent || o,
          r = e.keyframes
            ? ((t = I(e.keyframes)),
              function (e, n) {
                for (var r in n)
                  r in e ||
                    ("duration" === r && t) ||
                    "ease" === r ||
                    (e[r] = n[r]);
              })
            : me;
        if (M(e.inherit))
          for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
        return e;
      },
      _e = function (e, t, n, r, i) {
        void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
        var o,
          s = e[r];
        if (i) for (o = t[i]; s && s[i] > o; ) s = s._prev;
        return (
          s
            ? ((t._next = s._next), (s._next = t))
            : ((t._next = e[n]), (e[n] = t)),
          t._next ? (t._next._prev = t) : (e[r] = t),
          (t._prev = s),
          (t.parent = t._dp = e),
          t
        );
      },
      we = function (e, t, n, r) {
        void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
        var i = t._prev,
          o = t._next;
        i ? (i._next = o) : e[n] === t && (e[n] = o),
          o ? (o._prev = i) : e[r] === t && (e[r] = i),
          (t._next = t._prev = t.parent = null);
      },
      Ce = function (e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
          (e._act = 0);
      },
      Se = function (e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
          for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
        return e;
      },
      Ee = function (e) {
        for (var t = e.parent; t && t.parent; )
          (t._dirty = 1), t.totalDuration(), (t = t.parent);
        return e;
      },
      Ae = function e(t) {
        return !t || (t._ts && e(t.parent));
      },
      Te = function (e) {
        return e._repeat ? Fe(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
      },
      Fe = function (e, t) {
        var n = Math.floor((e /= t));
        return e && n === e ? n - 1 : n;
      },
      Pe = function (e, t) {
        return (
          (e - t._start) * t._ts +
          (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        );
      },
      ke = function (e) {
        return (e._end = ce(
          e._start + (e._tDur / Math.abs(e._ts || e._rts || x) || 0)
        ));
      },
      Me = function (e, t) {
        var n = e._dp;
        return (
          n &&
            n.smoothChildTiming &&
            e._ts &&
            ((e._start = ce(
              n._time -
                (e._ts > 0
                  ? t / e._ts
                  : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
            )),
            ke(e),
            n._dirty || Se(n, e)),
          e
        );
      },
      Be = function (e, t) {
        var n;
        if (
          ((t._time || (t._initted && !t._dur)) &&
            ((n = Pe(e.rawTime(), t)),
            (!t._dur || ze(0, t.totalDuration(), n) - t._tTime > x) &&
              t.render(n, !0)),
          Se(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
        ) {
          if (e._dur < e.duration())
            for (n = e; n._dp; )
              n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
          e._zTime = -1e-8;
        }
      },
      Oe = function (e, t, n, r) {
        return (
          t.parent && Ce(t),
          (t._start = ce(
            (F(n) ? n : n || e !== o ? He(e, n, t) : e._time) + t._delay
          )),
          (t._end = ce(
            t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
          )),
          _e(e, t, "_first", "_last", e._sort ? "_start" : 0),
          qe(t) || (e._recent = t),
          r || Be(e, t),
          e
        );
      },
      Re = function (e, t) {
        return (
          (W.ScrollTrigger || U("scrollTrigger", t)) &&
          W.ScrollTrigger.create(t, e)
        );
      },
      Ie = function (e, t, n, r) {
        return (
          jt(e, t),
          e._initted
            ? !n &&
              e._pt &&
              ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
              c !== yt.frame
              ? (Z.push(e), (e._lazy = [t, r]), 1)
              : void 0
            : 1
        );
      },
      Le = function e(t) {
        var n = t.parent;
        return (
          n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
        );
      },
      qe = function (e) {
        var t = e.data;
        return "isFromStart" === t || "isStart" === t;
      },
      je = function (e, t, n, r) {
        var i = e._repeat,
          o = ce(t) || 0,
          s = e._tTime / e._tDur;
        return (
          s && !r && (e._time *= o / e._dur),
          (e._dur = o),
          (e._tDur = i ? (i < 0 ? 1e10 : ce(o * (i + 1) + e._rDelay * i)) : o),
          s > 0 && !r ? Me(e, (e._tTime = e._tDur * s)) : e.parent && ke(e),
          n || Se(e.parent, e),
          e
        );
      },
      Ve = function (e) {
        return e instanceof Bt ? Se(e) : je(e, e._dur);
      },
      Ne = { _start: 0, endTime: K, totalDuration: K },
      He = function e(t, n, r) {
        var i,
          o,
          s,
          a = t.labels,
          u = t._recent || Ne,
          l = t.duration() >= D ? u.endTime(!1) : t._dur;
        return A(n) && (isNaN(n) || n in a)
          ? ((o = n.charAt(0)),
            (s = "%" === n.substr(-1)),
            (i = n.indexOf("=")),
            "<" === o || ">" === o
              ? (i >= 0 && (n = n.replace(/=/, "")),
                ("<" === o ? u._start : u.endTime(u._repeat >= 0)) +
                  (parseFloat(n.substr(1)) || 0) *
                    (s ? (i < 0 ? u : r).totalDuration() / 100 : 1))
              : i < 0
              ? (n in a || (a[n] = l), a[n])
              : ((o = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                s && r && (o = (o / 100) * (I(r) ? r[0] : r).totalDuration()),
                i > 1 ? e(t, n.substr(0, i - 1), r) + o : l + o))
          : null == n
          ? l
          : +n;
      },
      Ye = function (e, t, n) {
        var r,
          i,
          o = F(t[1]),
          s = (o ? 2 : 1) + (e < 2 ? 0 : 1),
          a = t[s];
        if ((o && (a.duration = t[1]), (a.parent = n), e)) {
          for (r = a, i = n; i && !("immediateRender" in r); )
            (r = i.vars.defaults || {}), (i = M(i.vars.inherit) && i.parent);
          (a.immediateRender = M(r.immediateRender)),
            e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]);
        }
        return new Wt(t[0], a, t[s + 1]);
      },
      We = function (e, t) {
        return e || 0 === e ? t(e) : t;
      },
      ze = function (e, t, n) {
        return n < e ? e : n > t ? t : n;
      },
      Xe = function (e, t) {
        return A(e) && (t = Y.exec(e)) ? t[1] : "";
      },
      Ue = [].slice,
      Ge = function (e, t) {
        return (
          e &&
          k(e) &&
          "length" in e &&
          ((!t && !e.length) || (e.length - 1 in e && k(e[0]))) &&
          !e.nodeType &&
          e !== s
        );
      },
      $e = function (e, t, n) {
        return (
          void 0 === n && (n = []),
          e.forEach(function (e) {
            var r;
            return (A(e) && !t) || Ge(e, 1)
              ? (r = n).push.apply(r, Ke(e))
              : n.push(e);
          }) || n
        );
      },
      Ke = function (e, t, n) {
        return !A(e) || n || (!a && Dt())
          ? I(e)
            ? $e(e, n)
            : Ge(e)
            ? Ue.call(e, 0)
            : e
            ? [e]
            : []
          : Ue.call((t || u).querySelectorAll(e), 0);
      },
      Qe = function (e) {
        return e.sort(function () {
          return 0.5 - Math.random();
        });
      },
      Ze = function (e) {
        if (T(e)) return e;
        var t = k(e) ? e : { each: e },
          n = Et(t.ease),
          r = t.from || 0,
          i = parseFloat(t.base) || 0,
          o = {},
          s = r > 0 && r < 1,
          a = isNaN(r) || s,
          u = t.axis,
          l = r,
          c = r;
        return (
          A(r)
            ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
            : !s && a && ((l = r[0]), (c = r[1])),
          function (e, s, h) {
            var f,
              d,
              p,
              g,
              v,
              m,
              y,
              x,
              b,
              _ = (h || t).length,
              w = o[_];
            if (!w) {
              if (!(b = "auto" === t.grid ? 0 : (t.grid || [1, D])[1])) {
                for (
                  y = -D;
                  y < (y = h[b++].getBoundingClientRect().left) && b < _;

                );
                b--;
              }
              for (
                w = o[_] = [],
                  f = a ? Math.min(b, _) * l - 0.5 : r % b,
                  d = b === D ? 0 : a ? (_ * c) / b - 0.5 : (r / b) | 0,
                  y = 0,
                  x = D,
                  m = 0;
                m < _;
                m++
              )
                (p = (m % b) - f),
                  (g = d - ((m / b) | 0)),
                  (w[m] = v =
                    u ? Math.abs("y" === u ? g : p) : C(p * p + g * g)),
                  v > y && (y = v),
                  v < x && (x = v);
              "random" === r && Qe(w),
                (w.max = y - x),
                (w.min = x),
                (w.v = _ =
                  (parseFloat(t.amount) ||
                    parseFloat(t.each) *
                      (b > _
                        ? _ - 1
                        : u
                        ? "y" === u
                          ? _ / b
                          : b
                        : Math.max(b, _ / b)) ||
                    0) * ("edges" === r ? -1 : 1)),
                (w.b = _ < 0 ? i - _ : i),
                (w.u = Xe(t.amount || t.each) || 0),
                (n = n && _ < 0 ? Ct(n) : n);
            }
            return (
              (_ = (w[e] - w.min) / w.max || 0),
              ce(w.b + (n ? n(_) : _) * w.v) + w.u
            );
          }
        );
      },
      Je = function (e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function (n) {
          var r = Math.round(parseFloat(n) / e) * e * t;
          return (r - (r % 1)) / t + (F(n) ? 0 : Xe(n));
        };
      },
      et = function (e, t) {
        var n,
          r,
          i = I(e);
        return (
          !i &&
            k(e) &&
            ((n = i = e.radius || D),
            e.values
              ? ((e = Ke(e.values)), (r = !F(e[0])) && (n *= n))
              : (e = Je(e.increment))),
          We(
            t,
            i
              ? T(e)
                ? function (t) {
                    return (r = e(t)), Math.abs(r - t) <= n ? r : t;
                  }
                : function (t) {
                    for (
                      var i,
                        o,
                        s = parseFloat(r ? t.x : t),
                        a = parseFloat(r ? t.y : 0),
                        u = D,
                        l = 0,
                        c = e.length;
                      c--;

                    )
                      (i = r
                        ? (i = e[c].x - s) * i + (o = e[c].y - a) * o
                        : Math.abs(e[c] - s)) < u && ((u = i), (l = c));
                    return (
                      (l = !n || u <= n ? e[l] : t),
                      r || l === t || F(t) ? l : l + Xe(t)
                    );
                  }
              : Je(e)
          )
        );
      },
      tt = function (e, t, n, r) {
        return We(I(e) ? !t : !0 === n ? !!(n = 0) : !r, function () {
          return I(e)
            ? e[~~(Math.random() * e.length)]
            : (n = n || 1e-5) &&
                (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n
                  ) *
                    n *
                    r
                ) / r;
        });
      },
      nt = function (e, t, n) {
        return We(n, function (n) {
          return e[~~t(n)];
        });
      },
      rt = function (e) {
        for (var t, n, r, i, o = 0, s = ""; ~(t = e.indexOf("random(", o)); )
          (r = e.indexOf(")", t)),
            (i = "[" === e.charAt(t + 7)),
            (n = e.substr(t + 7, r - t - 7).match(i ? H : L)),
            (s +=
              e.substr(o, t - o) +
              tt(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
            (o = r + 1);
        return s + e.substr(o, e.length - o);
      },
      it = function (e, t, n, r, i) {
        var o = t - e,
          s = r - n;
        return We(i, function (t) {
          return n + (((t - e) / o) * s || 0);
        });
      },
      ot = function (e, t, n) {
        var r,
          i,
          o,
          s = e.labels,
          a = D;
        for (r in s)
          (i = s[r] - t) < 0 == !!n &&
            i &&
            a > (i = Math.abs(i)) &&
            ((o = r), (a = i));
        return o;
      },
      st = function (e, t, n) {
        var r,
          i,
          o = e.vars,
          s = o[t];
        if (s)
          return (
            (r = o[t + "Params"]),
            (i = o.callbackScope || e),
            n && Z.length && de(),
            r ? s.apply(i, r) : s.call(i)
          );
      },
      at = function (e) {
        return (
          Ce(e),
          e.scrollTrigger && e.scrollTrigger.kill(!1),
          e.progress() < 1 && st(e, "onInterrupt"),
          e
        );
      },
      ut = function (e) {
        var t = (e = (!e.name && e.default) || e).name,
          n = T(e),
          r =
            t && !n && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          i = {
            init: K,
            render: Jt,
            add: Lt,
            kill: tn,
            modifier: en,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: $t,
            aliases: {},
            register: 0,
          };
        if ((Dt(), e !== r)) {
          if (ee[t]) return;
          me(r, me(xe(e, i), o)),
            ye(r.prototype, ye(i, xe(e, o))),
            (ee[(r.prop = t)] = r),
            e.targetTest && (re.push(r), (Q[t] = 1)),
            (t =
              ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        $(t, r), e.register && e.register(ln, r, on);
      },
      lt = 255,
      ct = {
        aqua: [0, lt, lt],
        lime: [0, lt, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, lt],
        navy: [0, 0, 128],
        white: [lt, lt, lt],
        olive: [128, 128, 0],
        yellow: [lt, lt, 0],
        orange: [lt, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [lt, 0, 0],
        pink: [lt, 192, 203],
        cyan: [0, lt, lt],
        transparent: [lt, lt, lt, 0],
      },
      ht = function (e, t, n) {
        return (
          ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
            ? t + (n - t) * e * 6
            : e < 0.5
            ? n
            : 3 * e < 2
            ? t + (n - t) * (2 / 3 - e) * 6
            : t) *
            lt +
            0.5) |
          0
        );
      },
      ft = function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c,
          h,
          f,
          d = e ? (F(e) ? [e >> 16, (e >> 8) & lt, e & lt] : 0) : ct.black;
        if (!d) {
          if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), ct[e]))
            d = ct[e];
          else if ("#" === e.charAt(0)) {
            if (
              (e.length < 6 &&
                ((r = e.charAt(1)),
                (i = e.charAt(2)),
                (o = e.charAt(3)),
                (e =
                  "#" +
                  r +
                  r +
                  i +
                  i +
                  o +
                  o +
                  (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))),
              9 === e.length)
            )
              return [
                (d = parseInt(e.substr(1, 6), 16)) >> 16,
                (d >> 8) & lt,
                d & lt,
                parseInt(e.substr(7), 16) / 255,
              ];
            d = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & lt, e & lt];
          } else if ("hsl" === e.substr(0, 3))
            if (((d = f = e.match(L)), t)) {
              if (~e.indexOf("="))
                return (d = e.match(q)), n && d.length < 4 && (d[3] = 1), d;
            } else
              (s = (+d[0] % 360) / 360),
                (a = +d[1] / 100),
                (r =
                  2 * (u = +d[2] / 100) -
                  (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
                d.length > 3 && (d[3] *= 1),
                (d[0] = ht(s + 1 / 3, r, i)),
                (d[1] = ht(s, r, i)),
                (d[2] = ht(s - 1 / 3, r, i));
          else d = e.match(L) || ct.transparent;
          d = d.map(Number);
        }
        return (
          t &&
            !f &&
            ((r = d[0] / lt),
            (i = d[1] / lt),
            (o = d[2] / lt),
            (u = ((l = Math.max(r, i, o)) + (c = Math.min(r, i, o))) / 2),
            l === c
              ? (s = a = 0)
              : ((h = l - c),
                (a = u > 0.5 ? h / (2 - l - c) : h / (l + c)),
                (s =
                  l === r
                    ? (i - o) / h + (i < o ? 6 : 0)
                    : l === i
                    ? (o - r) / h + 2
                    : (r - i) / h + 4),
                (s *= 60)),
            (d[0] = ~~(s + 0.5)),
            (d[1] = ~~(100 * a + 0.5)),
            (d[2] = ~~(100 * u + 0.5))),
          n && d.length < 4 && (d[3] = 1),
          d
        );
      },
      dt = function (e) {
        var t = [],
          n = [],
          r = -1;
        return (
          e.split(gt).forEach(function (e) {
            var i = e.match(j) || [];
            t.push.apply(t, i), n.push((r += i.length + 1));
          }),
          (t.c = n),
          t
        );
      },
      pt = function (e, t, n) {
        var r,
          i,
          o,
          s,
          a = "",
          u = (e + a).match(gt),
          l = t ? "hsla(" : "rgba(",
          c = 0;
        if (!u) return e;
        if (
          ((u = u.map(function (e) {
            return (
              (e = ft(e, t, 1)) &&
              l +
                (t
                  ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                  : e.join(",")) +
                ")"
            );
          })),
          n && ((o = dt(e)), (r = n.c).join(a) !== o.c.join(a)))
        )
          for (s = (i = e.replace(gt, "1").split(j)).length - 1; c < s; c++)
            a +=
              i[c] +
              (~r.indexOf(c)
                ? u.shift() || l + "0,0,0,0)"
                : (o.length ? o : u.length ? u : n).shift());
        if (!i)
          for (s = (i = e.split(gt)).length - 1; c < s; c++) a += i[c] + u[c];
        return a + i[s];
      },
      gt = (function () {
        var e,
          t =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (e in ct) t += "|" + e + "\\b";
        return new RegExp(t + ")", "gi");
      })(),
      vt = /hsl[a]?\(/,
      mt = function (e) {
        var t,
          n = e.join(" ");
        if (((gt.lastIndex = 0), gt.test(n)))
          return (
            (t = vt.test(n)),
            (e[1] = pt(e[1], t)),
            (e[0] = pt(e[0], t, dt(e[1]))),
            !0
          );
      },
      yt = (function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          c = Date.now,
          h = 500,
          d = 33,
          p = c(),
          g = p,
          v = 1e3 / 240,
          m = v,
          y = [],
          D = function n(s) {
            var a,
              u,
              l,
              f,
              D = c() - g,
              x = !0 === s;
            if (
              (D > h && (p += D - d),
              ((a = (l = (g += D) - p) - m) > 0 || x) &&
                ((f = ++r.frame),
                (i = l - 1e3 * r.time),
                (r.time = l /= 1e3),
                (m += a + (a >= v ? 4 : v - a)),
                (u = 1)),
              x || (e = t(n)),
              u)
            )
              for (o = 0; o < y.length; o++) y[o](l, i, f, s);
          };
        return (r = {
          time: 0,
          frame: 0,
          tick: function () {
            D(!0);
          },
          deltaRatio: function (e) {
            return i / (1e3 / (e || 60));
          },
          wake: function () {
            l &&
              (!a &&
                B() &&
                ((s = a = window),
                (u = s.document || {}),
                (W.gsap = ln),
                (s.gsapVersions || (s.gsapVersions = [])).push(ln.version),
                X(z || s.GreenSockGlobals || (!s.gsap && s) || {}),
                (n = s.requestAnimationFrame)),
              e && r.sleep(),
              (t =
                n ||
                function (e) {
                  return setTimeout(e, (m - 1e3 * r.time + 1) | 0);
                }),
              (f = 1),
              D(2));
          },
          sleep: function () {
            (n ? s.cancelAnimationFrame : clearTimeout)(e), (f = 0), (t = K);
          },
          lagSmoothing: function (e, t) {
            (h = e || 1e8), (d = Math.min(t, h, 0));
          },
          fps: function (e) {
            (v = 1e3 / (e || 240)), (m = 1e3 * r.time + v);
          },
          add: function (e, t, n) {
            var i = t
              ? function (t, n, o, s) {
                  e(t, n, o, s), r.remove(i);
                }
              : e;
            return r.remove(e), y[n ? "unshift" : "push"](i), Dt(), i;
          },
          remove: function (e, t) {
            ~(t = y.indexOf(e)) && y.splice(t, 1) && o >= t && o--;
          },
          _listeners: y,
        });
      })(),
      Dt = function () {
        return !f && yt.wake();
      },
      xt = {},
      bt = /^[\d.\-M][\d.\-,\s]/,
      _t = /["']/g,
      wt = function (e) {
        for (
          var t,
            n,
            r,
            i = {},
            o = e.substr(1, e.length - 3).split(":"),
            s = o[0],
            a = 1,
            u = o.length;
          a < u;
          a++
        )
          (n = o[a]),
            (t = a !== u - 1 ? n.lastIndexOf(",") : n.length),
            (r = n.substr(0, t)),
            (i[s] = isNaN(r) ? r.replace(_t, "").trim() : +r),
            (s = n.substr(t + 1).trim());
        return i;
      },
      Ct = function (e) {
        return function (t) {
          return 1 - e(1 - t);
        };
      },
      St = function e(t, n) {
        for (var r, i = t._first; i; )
          i instanceof Bt
            ? e(i, n)
            : !i.vars.yoyoEase ||
              (i._yoyo && i._repeat) ||
              i._yoyo === n ||
              (i.timeline
                ? e(i.timeline, n)
                : ((r = i._ease),
                  (i._ease = i._yEase),
                  (i._yEase = r),
                  (i._yoyo = n))),
            (i = i._next);
      },
      Et = function (e, t) {
        return (
          (e &&
            (T(e)
              ? e
              : xt[e] ||
                (function (e) {
                  var t,
                    n,
                    r,
                    i,
                    o = (e + "").split("("),
                    s = xt[o[0]];
                  return s && o.length > 1 && s.config
                    ? s.config.apply(
                        null,
                        ~e.indexOf("{")
                          ? [wt(o[1])]
                          : ((t = e),
                            (n = t.indexOf("(") + 1),
                            (r = t.indexOf(")")),
                            (i = t.indexOf("(", n)),
                            t.substring(
                              n,
                              ~i && i < r ? t.indexOf(")", r + 1) : r
                            ))
                              .split(",")
                              .map(ge)
                      )
                    : xt._CE && bt.test(e)
                    ? xt._CE("", e)
                    : s;
                })(e))) ||
          t
        );
      },
      At = function (e, t, n, r) {
        void 0 === n &&
          (n = function (e) {
            return 1 - t(1 - e);
          }),
          void 0 === r &&
            (r = function (e) {
              return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
            });
        var i,
          o = { easeIn: t, easeOut: n, easeInOut: r };
        return (
          ue(e, function (e) {
            for (var t in ((xt[e] = W[e] = o),
            (xt[(i = e.toLowerCase())] = n),
            o))
              xt[
                i +
                  ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")
              ] = xt[e + "." + t] = o[t];
          }),
          o
        );
      },
      Tt = function (e) {
        return function (t) {
          return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
        };
      },
      Ft = function e(t, n, r) {
        var i = n >= 1 ? n : 1,
          o = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
          s = (o / b) * (Math.asin(1 / i) || 0),
          a = function (e) {
            return 1 === e ? 1 : i * Math.pow(2, -10 * e) * E((e - s) * o) + 1;
          },
          u =
            "out" === t
              ? a
              : "in" === t
              ? function (e) {
                  return 1 - a(1 - e);
                }
              : Tt(a);
        return (
          (o = b / o),
          (u.config = function (n, r) {
            return e(t, n, r);
          }),
          u
        );
      },
      Pt = function e(t, n) {
        void 0 === n && (n = 1.70158);
        var r = function (e) {
            return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
          },
          i =
            "out" === t
              ? r
              : "in" === t
              ? function (e) {
                  return 1 - r(1 - e);
                }
              : Tt(r);
        return (
          (i.config = function (n) {
            return e(t, n);
          }),
          i
        );
      };
    ue("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
      var n = t < 5 ? t + 1 : t;
      At(
        e + ",Power" + (n - 1),
        t
          ? function (e) {
              return Math.pow(e, n);
            }
          : function (e) {
              return e;
            },
        function (e) {
          return 1 - Math.pow(1 - e, n);
        },
        function (e) {
          return e < 0.5
            ? Math.pow(2 * e, n) / 2
            : 1 - Math.pow(2 * (1 - e), n) / 2;
        }
      );
    }),
      (xt.Linear.easeNone = xt.none = xt.Linear.easeIn),
      At("Elastic", Ft("in"), Ft("out"), Ft()),
      (d = 7.5625),
      (g = 1 / (p = 2.75)),
      At(
        "Bounce",
        function (e) {
          return 1 - v(1 - e);
        },
        (v = function (e) {
          return e < g
            ? d * e * e
            : e < 0.7272727272727273
            ? d * Math.pow(e - 1.5 / p, 2) + 0.75
            : e < 0.9090909090909092
            ? d * (e -= 2.25 / p) * e + 0.9375
            : d * Math.pow(e - 2.625 / p, 2) + 0.984375;
        })
      ),
      At("Expo", function (e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0;
      }),
      At("Circ", function (e) {
        return -(C(1 - e * e) - 1);
      }),
      At("Sine", function (e) {
        return 1 === e ? 1 : 1 - S(e * _);
      }),
      At("Back", Pt("in"), Pt("out"), Pt()),
      (xt.SteppedEase =
        xt.steps =
        W.SteppedEase =
          {
            config: function (e, t) {
              void 0 === e && (e = 1);
              var n = 1 / e,
                r = e + (t ? 0 : 1),
                i = t ? 1 : 0;
              return function (e) {
                return (((r * ze(0, 0.99999999, e)) | 0) + i) * n;
              };
            },
          }),
      (y.ease = xt["quad.out"]),
      ue(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (e) {
          return (ie += e + "," + e + "Params,");
        }
      );
    var kt = function (e, t) {
        (this.id = w++),
          (e._gsap = this),
          (this.target = e),
          (this.harness = t),
          (this.get = t ? t.get : ae),
          (this.set = t ? t.getSetter : $t);
      },
      Mt = (function () {
        function e(e) {
          (this.vars = e),
            (this._delay = +e.delay || 0),
            (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
              ((this._rDelay = e.repeatDelay || 0),
              (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
            (this._ts = 1),
            je(this, +e.duration, 1, 1),
            (this.data = e.data),
            f || yt.wake();
        }
        var t = e.prototype;
        return (
          (t.delay = function (e) {
            return e || 0 === e
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + e - this._delay),
                (this._delay = e),
                this)
              : this._delay;
          }),
          (t.duration = function (e) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
                )
              : this.totalDuration() && this._dur;
          }),
          (t.totalDuration = function (e) {
            return arguments.length
              ? ((this._dirty = 0),
                je(
                  this,
                  this._repeat < 0
                    ? e
                    : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (t.totalTime = function (e, t) {
            if ((Dt(), !arguments.length)) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (
                Me(this, e), !n._dp || n.parent || Be(n, this);
                n && n.parent;

              )
                n.parent._time !==
                  n._start +
                    (n._ts >= 0
                      ? n._tTime / n._ts
                      : (n.totalDuration() - n._tTime) / -n._ts) &&
                  n.totalTime(n._tTime, !0),
                  (n = n.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && e < this._tDur) ||
                  (this._ts < 0 && e > 0) ||
                  (!this._tDur && !e)) &&
                Oe(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== e ||
                (!this._dur && !t) ||
                (this._initted && Math.abs(this._zTime) === x) ||
                (!e && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = e), pe(this, e, t)),
              this
            );
          }),
          (t.time = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), e + Te(this)) %
                    (this._dur + this._rDelay) || (e ? this._dur : 0),
                  t
                )
              : this._time;
          }),
          (t.totalProgress = function (e, t) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * e, t)
              : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.ratio;
          }),
          (t.progress = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                    Te(this),
                  t
                )
              : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.ratio;
          }),
          (t.iteration = function (e, t) {
            var n = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (e - 1) * n, t)
              : this._repeat
              ? Fe(this._tTime, n) + 1
              : 1;
          }),
          (t.timeScale = function (e) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === e) return this;
            var t =
              this.parent && this._ts
                ? Pe(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +e || 0),
              (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
              this.totalTime(ze(-this._delay, this._tDur, t), !0),
              ke(this),
              Ee(this)
            );
          }),
          (t.paused = function (e) {
            return arguments.length
              ? (this._ps !== e &&
                  ((this._ps = e),
                  e
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (Dt(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          Math.abs(this._zTime) !== x &&
                          (this._tTime -= x)
                      ))),
                this)
              : this._ps;
          }),
          (t.startTime = function (e) {
            if (arguments.length) {
              this._start = e;
              var t = this.parent || this._dp;
              return (
                t && (t._sort || !this.parent) && Oe(t, this, e - this._delay),
                this
              );
            }
            return this._start;
          }),
          (t.endTime = function (e) {
            return (
              this._start +
              (M(e) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts || 1)
            );
          }),
          (t.rawTime = function (e) {
            var t = this.parent || this._dp;
            return t
              ? e &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                ? Pe(t.rawTime(e), this)
                : this._tTime
              : this._tTime;
          }),
          (t.globalTime = function (e) {
            for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
              (n = t._start + n / (t._ts || 1)), (t = t._dp);
            return n;
          }),
          (t.repeat = function (e) {
            return arguments.length
              ? ((this._repeat = e === 1 / 0 ? -2 : e), Ve(this))
              : -2 === this._repeat
              ? 1 / 0
              : this._repeat;
          }),
          (t.repeatDelay = function (e) {
            if (arguments.length) {
              var t = this._time;
              return (this._rDelay = e), Ve(this), t ? this.time(t) : this;
            }
            return this._rDelay;
          }),
          (t.yoyo = function (e) {
            return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
          }),
          (t.seek = function (e, t) {
            return this.totalTime(He(this, e), M(t));
          }),
          (t.restart = function (e, t) {
            return this.play().totalTime(e ? -this._delay : 0, M(t));
          }),
          (t.play = function (e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
          }),
          (t.reverse = function (e, t) {
            return (
              null != e && this.seek(e || this.totalDuration(), t),
              this.reversed(!0).paused(!1)
            );
          }),
          (t.pause = function (e, t) {
            return null != e && this.seek(e, t), this.paused(!0);
          }),
          (t.resume = function () {
            return this.paused(!1);
          }),
          (t.reversed = function (e) {
            return arguments.length
              ? (!!e !== this.reversed() &&
                  this.timeScale(-this._rts || (e ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (t.invalidate = function () {
            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
          }),
          (t.isActive = function () {
            var e,
              t = this.parent || this._dp,
              n = this._start;
            return !(
              t &&
              !(
                this._ts &&
                this._initted &&
                t.isActive() &&
                (e = t.rawTime(!0)) >= n &&
                e < this.endTime(!0) - x
              )
            );
          }),
          (t.eventCallback = function (e, t, n) {
            var r = this.vars;
            return arguments.length > 1
              ? (t
                  ? ((r[e] = t),
                    n && (r[e + "Params"] = n),
                    "onUpdate" === e && (this._onUpdate = t))
                  : delete r[e],
                this)
              : r[e];
          }),
          (t.then = function (e) {
            var t = this;
            return new Promise(function (n) {
              var r = T(e) ? e : ve,
                i = function () {
                  var e = t.then;
                  (t.then = null),
                    T(r) && (r = r(t)) && (r.then || r === t) && (t.then = e),
                    n(r),
                    (t.then = e);
                };
              (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
              (!t._tTime && t._ts < 0)
                ? i()
                : (t._prom = i);
            });
          }),
          (t.kill = function () {
            at(this);
          }),
          e
        );
      })();
    me(Mt.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Bt = (function (n) {
      function r(t, r) {
        var i;
        return (
          void 0 === t && (t = {}),
          ((i = n.call(this, t) || this).labels = {}),
          (i.smoothChildTiming = !!t.smoothChildTiming),
          (i.autoRemoveChildren = !!t.autoRemoveChildren),
          (i._sort = M(t.sortChildren)),
          o && Oe(t.parent || o, e(i), r),
          t.reversed && i.reverse(),
          t.paused && i.paused(!0),
          t.scrollTrigger && Re(e(i), t.scrollTrigger),
          i
        );
      }
      t(r, n);
      var i = r.prototype;
      return (
        (i.to = function (e, t, n) {
          return Ye(0, arguments, this), this;
        }),
        (i.from = function (e, t, n) {
          return Ye(1, arguments, this), this;
        }),
        (i.fromTo = function (e, t, n, r) {
          return Ye(2, arguments, this), this;
        }),
        (i.set = function (e, t, n) {
          return (
            (t.duration = 0),
            (t.parent = this),
            be(t).repeatDelay || (t.repeat = 0),
            (t.immediateRender = !!t.immediateRender),
            new Wt(e, t, He(this, n), 1),
            this
          );
        }),
        (i.call = function (e, t, n) {
          return Oe(this, Wt.delayedCall(0, e, t), n);
        }),
        (i.staggerTo = function (e, t, n, r, i, o, s) {
          return (
            (n.duration = t),
            (n.stagger = n.stagger || r),
            (n.onComplete = o),
            (n.onCompleteParams = s),
            (n.parent = this),
            new Wt(e, n, He(this, i)),
            this
          );
        }),
        (i.staggerFrom = function (e, t, n, r, i, o, s) {
          return (
            (n.runBackwards = 1),
            (be(n).immediateRender = M(n.immediateRender)),
            this.staggerTo(e, t, n, r, i, o, s)
          );
        }),
        (i.staggerFromTo = function (e, t, n, r, i, o, s, a) {
          return (
            (r.startAt = n),
            (be(r).immediateRender = M(r.immediateRender)),
            this.staggerTo(e, t, r, i, o, s, a)
          );
        }),
        (i.render = function (e, t, n) {
          var r,
            i,
            s,
            a,
            u,
            l,
            c,
            h,
            f,
            d,
            p,
            g,
            v = this._time,
            m = this._dirty ? this.totalDuration() : this._tDur,
            y = this._dur,
            D = e <= 0 ? 0 : ce(e),
            b = this._zTime < 0 != e < 0 && (this._initted || !y);
          if (
            (this !== o && D > m && e >= 0 && (D = m),
            D !== this._tTime || n || b)
          ) {
            if (
              (v !== this._time &&
                y &&
                ((D += this._time - v), (e += this._time - v)),
              (r = D),
              (f = this._start),
              (l = !(h = this._ts)),
              b && (y || (v = this._zTime), (e || !t) && (this._zTime = e)),
              this._repeat)
            ) {
              if (
                ((p = this._yoyo),
                (u = y + this._rDelay),
                this._repeat < -1 && e < 0)
              )
                return this.totalTime(100 * u + e, t, n);
              if (
                ((r = ce(D % u)),
                D === m
                  ? ((a = this._repeat), (r = y))
                  : ((a = ~~(D / u)) && a === D / u && ((r = y), a--),
                    r > y && (r = y)),
                (d = Fe(this._tTime, u)),
                !v && this._tTime && d !== a && (d = a),
                p && 1 & a && ((r = y - r), (g = 1)),
                a !== d && !this._lock)
              ) {
                var _ = p && 1 & d,
                  w = _ === (p && 1 & a);
                if (
                  (a < d && (_ = !_),
                  (v = _ ? 0 : y),
                  (this._lock = 1),
                  (this.render(v || (g ? 0 : ce(a * u)), t, !y)._lock = 0),
                  (this._tTime = D),
                  !t && this.parent && st(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !g &&
                    (this.invalidate()._lock = 1),
                  (v && v !== this._time) ||
                    l !== !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (
                  ((y = this._dur),
                  (m = this._tDur),
                  w &&
                    ((this._lock = 2),
                    (v = _ ? y : -1e-4),
                    this.render(v, !0),
                    this.vars.repeatRefresh && !g && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !l)
                )
                  return this;
                St(this, g);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                ((c = (function (e, t, n) {
                  var r;
                  if (n > t)
                    for (r = e._first; r && r._start <= n; ) {
                      if ("isPause" === r.data && r._start > t) return r;
                      r = r._next;
                    }
                  else
                    for (r = e._last; r && r._start >= n; ) {
                      if ("isPause" === r.data && r._start < t) return r;
                      r = r._prev;
                    }
                })(this, ce(v), ce(r))),
                c && (D -= r - (r = c._start))),
              (this._tTime = D),
              (this._time = r),
              (this._act = !h),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = e),
                (v = 0)),
              !v && r && !t && (st(this, "onStart"), this._tTime !== D))
            )
              return this;
            if (r >= v && e >= 0)
              for (i = this._first; i; ) {
                if (
                  ((s = i._next), (i._act || r >= i._start) && i._ts && c !== i)
                ) {
                  if (i.parent !== this) return this.render(e, t, n);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (r - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (r - i._start) * i._ts,
                      t,
                      n
                    ),
                    r !== this._time || (!this._ts && !l))
                  ) {
                    (c = 0), s && (D += this._zTime = -1e-8);
                    break;
                  }
                }
                i = s;
              }
            else {
              i = this._last;
              for (var C = e < 0 ? e : r; i; ) {
                if (
                  ((s = i._prev), (i._act || C <= i._end) && i._ts && c !== i)
                ) {
                  if (i.parent !== this) return this.render(e, t, n);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (C - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (C - i._start) * i._ts,
                      t,
                      n
                    ),
                    r !== this._time || (!this._ts && !l))
                  ) {
                    (c = 0), s && (D += this._zTime = C ? -1e-8 : x);
                    break;
                  }
                }
                i = s;
              }
            }
            if (
              c &&
              !t &&
              (this.pause(),
              (c.render(r >= v ? 0 : -1e-8)._zTime = r >= v ? 1 : -1),
              this._ts)
            )
              return (this._start = f), ke(this), this.render(e, t, n);
            this._onUpdate && !t && st(this, "onUpdate", !0),
              ((D === m && this._tTime >= this.totalDuration()) || (!D && v)) &&
                ((f !== this._start && Math.abs(h) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((e || !y) &&
                    ((D === m && this._ts > 0) || (!D && this._ts < 0)) &&
                    Ce(this, 1),
                  t ||
                    (e < 0 && !v) ||
                    (!D && !v && m) ||
                    (st(
                      this,
                      D === m && e >= 0 ? "onComplete" : "onReverseComplete",
                      !0
                    ),
                    this._prom &&
                      !(D < m && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (i.add = function (e, t) {
          var n = this;
          if ((F(t) || (t = He(this, t, e)), !(e instanceof Mt))) {
            if (I(e))
              return (
                e.forEach(function (e) {
                  return n.add(e, t);
                }),
                this
              );
            if (A(e)) return this.addLabel(e, t);
            if (!T(e)) return this;
            e = Wt.delayedCall(0, e);
          }
          return this !== e ? Oe(this, e, t) : this;
        }),
        (i.getChildren = function (e, t, n, r) {
          void 0 === e && (e = !0),
            void 0 === t && (t = !0),
            void 0 === n && (n = !0),
            void 0 === r && (r = -D);
          for (var i = [], o = this._first; o; )
            o._start >= r &&
              (o instanceof Wt
                ? t && i.push(o)
                : (n && i.push(o),
                  e && i.push.apply(i, o.getChildren(!0, t, n)))),
              (o = o._next);
          return i;
        }),
        (i.getById = function (e) {
          for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
            if (t[n].vars.id === e) return t[n];
        }),
        (i.remove = function (e) {
          return A(e)
            ? this.removeLabel(e)
            : T(e)
            ? this.killTweensOf(e)
            : (we(this, e),
              e === this._recent && (this._recent = this._last),
              Se(this));
        }),
        (i.totalTime = function (e, t) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = ce(
                  yt.time -
                    (this._ts > 0
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts)
                )),
              n.prototype.totalTime.call(this, e, t),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (i.addLabel = function (e, t) {
          return (this.labels[e] = He(this, t)), this;
        }),
        (i.removeLabel = function (e) {
          return delete this.labels[e], this;
        }),
        (i.addPause = function (e, t, n) {
          var r = Wt.delayedCall(0, t || K, n);
          return (
            (r.data = "isPause"), (this._hasPause = 1), Oe(this, r, He(this, e))
          );
        }),
        (i.removePause = function (e) {
          var t = this._first;
          for (e = He(this, e); t; )
            t._start === e && "isPause" === t.data && Ce(t), (t = t._next);
        }),
        (i.killTweensOf = function (e, t, n) {
          for (var r = this.getTweensOf(e, n), i = r.length; i--; )
            Ot !== r[i] && r[i].kill(e, t);
          return this;
        }),
        (i.getTweensOf = function (e, t) {
          for (var n, r = [], i = Ke(e), o = this._first, s = F(t); o; )
            o instanceof Wt
              ? fe(o._targets, i) &&
                (s
                  ? (!Ot || (o._initted && o._ts)) &&
                    o.globalTime(0) <= t &&
                    o.globalTime(o.totalDuration()) > t
                  : !t || o.isActive()) &&
                r.push(o)
              : (n = o.getTweensOf(i, t)).length && r.push.apply(r, n),
              (o = o._next);
          return r;
        }),
        (i.tweenTo = function (e, t) {
          t = t || {};
          var n,
            r = this,
            i = He(r, e),
            o = t,
            s = o.startAt,
            a = o.onStart,
            u = o.onStartParams,
            l = o.immediateRender,
            c = Wt.to(
              r,
              me(
                {
                  ease: t.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: i,
                  overwrite: "auto",
                  duration:
                    t.duration ||
                    Math.abs(
                      (i - (s && "time" in s ? s.time : r._time)) /
                        r.timeScale()
                    ) ||
                    x,
                  onStart: function () {
                    if ((r.pause(), !n)) {
                      var e =
                        t.duration ||
                        Math.abs(
                          (i - (s && "time" in s ? s.time : r._time)) /
                            r.timeScale()
                        );
                      c._dur !== e && je(c, e, 0, 1).render(c._time, !0, !0),
                        (n = 1);
                    }
                    a && a.apply(c, u || []);
                  },
                },
                t
              )
            );
          return l ? c.render(0) : c;
        }),
        (i.tweenFromTo = function (e, t, n) {
          return this.tweenTo(t, me({ startAt: { time: He(this, e) } }, n));
        }),
        (i.recent = function () {
          return this._recent;
        }),
        (i.nextLabel = function (e) {
          return void 0 === e && (e = this._time), ot(this, He(this, e));
        }),
        (i.previousLabel = function (e) {
          return void 0 === e && (e = this._time), ot(this, He(this, e), 1);
        }),
        (i.currentLabel = function (e) {
          return arguments.length
            ? this.seek(e, !0)
            : this.previousLabel(this._time + x);
        }),
        (i.shiftChildren = function (e, t, n) {
          void 0 === n && (n = 0);
          for (var r, i = this._first, o = this.labels; i; )
            i._start >= n && ((i._start += e), (i._end += e)), (i = i._next);
          if (t) for (r in o) o[r] >= n && (o[r] += e);
          return Se(this);
        }),
        (i.invalidate = function () {
          var e = this._first;
          for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
          return n.prototype.invalidate.call(this);
        }),
        (i.clear = function (e) {
          void 0 === e && (e = !0);
          for (var t, n = this._first; n; )
            (t = n._next), this.remove(n), (n = t);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            e && (this.labels = {}),
            Se(this)
          );
        }),
        (i.totalDuration = function (e) {
          var t,
            n,
            r,
            i = 0,
            s = this,
            a = s._last,
            u = D;
          if (arguments.length)
            return s.timeScale(
              (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                (s.reversed() ? -e : e)
            );
          if (s._dirty) {
            for (r = s.parent; a; )
              (t = a._prev),
                a._dirty && a.totalDuration(),
                (n = a._start) > u && s._sort && a._ts && !s._lock
                  ? ((s._lock = 1), (Oe(s, a, n - a._delay, 1)._lock = 0))
                  : (u = n),
                n < 0 &&
                  a._ts &&
                  ((i -= n),
                  ((!r && !s._dp) || (r && r.smoothChildTiming)) &&
                    ((s._start += n / s._ts), (s._time -= n), (s._tTime -= n)),
                  s.shiftChildren(-n, !1, -Infinity),
                  (u = 0)),
                a._end > i && a._ts && (i = a._end),
                (a = t);
            je(s, s === o && s._time > i ? s._time : i, 1, 1), (s._dirty = 0);
          }
          return s._tDur;
        }),
        (r.updateRoot = function (e) {
          if ((o._ts && (pe(o, Pe(e, o)), (c = yt.frame)), yt.frame >= ne)) {
            ne += m.autoSleep || 120;
            var t = o._first;
            if ((!t || !t._ts) && m.autoSleep && yt._listeners.length < 2) {
              for (; t && !t._ts; ) t = t._next;
              t || yt.sleep();
            }
          }
        }),
        r
      );
    })(Mt);
    me(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Ot,
      Rt,
      It = function (e, t, n, r, i, o, s) {
        var a,
          u,
          l,
          c,
          h,
          f,
          d,
          p,
          g = new on(this._pt, e, t, 0, 1, Zt, null, i),
          v = 0,
          m = 0;
        for (
          g.b = n,
            g.e = r,
            n += "",
            (d = ~(r += "").indexOf("random(")) && (r = rt(r)),
            o && (o((p = [n, r]), e, t), (n = p[0]), (r = p[1])),
            u = n.match(V) || [];
          (a = V.exec(r));

        )
          (c = a[0]),
            (h = r.substring(v, a.index)),
            l ? (l = (l + 1) % 5) : "rgba(" === h.substr(-5) && (l = 1),
            c !== u[m++] &&
              ((f = parseFloat(u[m - 1]) || 0),
              (g._pt = {
                _next: g._pt,
                p: h || 1 === m ? h : ",",
                s: f,
                c: "=" === c.charAt(1) ? he(f, c) - f : parseFloat(c) - f,
                m: l && l < 4 ? Math.round : 0,
              }),
              (v = V.lastIndex));
        return (
          (g.c = v < r.length ? r.substring(v, r.length) : ""),
          (g.fp = s),
          (N.test(r) || d) && (g.e = 0),
          (this._pt = g),
          g
        );
      },
      Lt = function (e, t, n, r, i, o, s, a, u) {
        T(r) && (r = r(i || 0, e, o));
        var l,
          c = e[t],
          h =
            "get" !== n
              ? n
              : T(c)
              ? u
                ? e[
                    t.indexOf("set") || !T(e["get" + t.substr(3)])
                      ? t
                      : "get" + t.substr(3)
                  ](u)
                : e[t]()
              : c,
          f = T(c) ? (u ? Ut : Xt) : zt;
        if (
          (A(r) &&
            (~r.indexOf("random(") && (r = rt(r)),
            "=" === r.charAt(1) &&
              ((l = he(h, r) + (Xe(h) || 0)) || 0 === l) &&
              (r = l)),
          h !== r || Rt)
        )
          return isNaN(h * r) || "" === r
            ? (!c && !(t in e) && U(t, r),
              It.call(this, e, t, h, r, f, a || m.stringFilter, u))
            : ((l = new on(
                this._pt,
                e,
                t,
                +h || 0,
                r - (h || 0),
                "boolean" == typeof c ? Qt : Kt,
                0,
                f
              )),
              u && (l.fp = u),
              s && l.modifier(s, this, e),
              (this._pt = l));
      },
      qt = function (e, t, n, r, i, o) {
        var s, a, u, l;
        if (
          ee[e] &&
          !1 !==
            (s = new ee[e]()).init(
              i,
              s.rawVars
                ? t[e]
                : (function (e, t, n, r, i) {
                    if (
                      (T(e) && (e = Nt(e, i, t, n, r)),
                      !k(e) || (e.style && e.nodeType) || I(e) || R(e))
                    )
                      return A(e) ? Nt(e, i, t, n, r) : e;
                    var o,
                      s = {};
                    for (o in e) s[o] = Nt(e[o], i, t, n, r);
                    return s;
                  })(t[e], r, i, o, n),
              n,
              r,
              o
            ) &&
          ((n._pt = a = new on(n._pt, i, e, 0, 1, s.render, s, 0, s.priority)),
          n !== h)
        )
          for (
            u = n._ptLookup[n._targets.indexOf(i)], l = s._props.length;
            l--;

          )
            u[s._props[l]] = a;
        return s;
      },
      jt = function e(t, n) {
        var r,
          s,
          a,
          u,
          l,
          c,
          h,
          f,
          d,
          p,
          g,
          v,
          m,
          b = t.vars,
          _ = b.ease,
          w = b.startAt,
          C = b.immediateRender,
          S = b.lazy,
          E = b.onUpdate,
          A = b.onUpdateParams,
          T = b.callbackScope,
          F = b.runBackwards,
          P = b.yoyoEase,
          k = b.keyframes,
          B = b.autoRevert,
          O = t._dur,
          R = t._startAt,
          I = t._targets,
          L = t.parent,
          q = L && "nested" === L.data ? L.parent._targets : I,
          j = "auto" === t._overwrite && !i,
          V = t.timeline;
        if (
          (V && (!k || !_) && (_ = "none"),
          (t._ease = Et(_, y.ease)),
          (t._yEase = P ? Ct(Et(!0 === P ? _ : P, y.ease)) : 0),
          P &&
            t._yoyo &&
            !t._repeat &&
            ((P = t._yEase), (t._yEase = t._ease), (t._ease = P)),
          (t._from = !V && !!b.runBackwards),
          !V || (k && !b.stagger))
        ) {
          if (
            ((v = (f = I[0] ? se(I[0]).harness : 0) && b[f.prop]),
            (r = xe(b, Q)),
            R && (Ce(R.render(-1, !0)), (R._lazy = 0)),
            w)
          )
            if (
              (Ce(
                (t._startAt = Wt.set(
                  I,
                  me(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: L,
                      immediateRender: !0,
                      lazy: M(S),
                      startAt: null,
                      delay: 0,
                      onUpdate: E,
                      onUpdateParams: A,
                      callbackScope: T,
                      stagger: 0,
                    },
                    w
                  )
                ))
              ),
              n < 0 && !C && !B && t._startAt.render(-1, !0),
              C)
            ) {
              if ((n > 0 && !B && (t._startAt = 0), O && n <= 0))
                return void (n && (t._zTime = n));
            } else !1 === B && (t._startAt = 0);
          else if (F && O)
            if (R) !B && (t._startAt = 0);
            else if (
              (n && (C = !1),
              (a = me(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: C && M(S),
                  immediateRender: C,
                  stagger: 0,
                  parent: L,
                },
                r
              )),
              v && (a[f.prop] = v),
              Ce((t._startAt = Wt.set(I, a))),
              n < 0 && t._startAt.render(-1, !0),
              (t._zTime = n),
              C)
            ) {
              if (!n) return;
            } else e(t._startAt, x);
          for (
            t._pt = t._ptCache = 0, S = (O && M(S)) || (S && !O), s = 0;
            s < I.length;
            s++
          ) {
            if (
              ((h = (l = I[s])._gsap || oe(I)[s]._gsap),
              (t._ptLookup[s] = p = {}),
              J[h.id] && Z.length && de(),
              (g = q === I ? s : q.indexOf(l)),
              f &&
                !1 !== (d = new f()).init(l, v || r, t, g, q) &&
                ((t._pt = u =
                  new on(t._pt, l, d.name, 0, 1, d.render, d, 0, d.priority)),
                d._props.forEach(function (e) {
                  p[e] = u;
                }),
                d.priority && (c = 1)),
              !f || v)
            )
              for (a in r)
                ee[a] && (d = qt(a, r, t, g, l, q))
                  ? d.priority && (c = 1)
                  : (p[a] = u =
                      Lt.call(t, l, a, "get", r[a], g, q, 0, b.stringFilter));
            t._op && t._op[s] && t.kill(l, t._op[s]),
              j &&
                t._pt &&
                ((Ot = t),
                o.killTweensOf(l, p, t.globalTime(n)),
                (m = !t.parent),
                (Ot = 0)),
              t._pt && S && (J[h.id] = 1);
          }
          c && rn(t), t._onInit && t._onInit(t);
        }
        (t._onUpdate = E),
          (t._initted = (!t._op || t._pt) && !m),
          k && n <= 0 && V.render(D, !0, !0);
      },
      Vt = function (e, t, n, r) {
        var i,
          o,
          s = t.ease || r || "power1.inOut";
        if (I(t))
          (o = n[e] || (n[e] = [])),
            t.forEach(function (e, n) {
              return o.push({ t: (n / (t.length - 1)) * 100, v: e, e: s });
            });
        else
          for (i in t)
            (o = n[i] || (n[i] = [])),
              "ease" === i || o.push({ t: parseFloat(e), v: t[i], e: s });
      },
      Nt = function (e, t, n, r, i) {
        return T(e)
          ? e.call(t, n, r, i)
          : A(e) && ~e.indexOf("random(")
          ? rt(e)
          : e;
      },
      Ht = ie + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      Yt = {};
    ue(Ht + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
      return (Yt[e] = 1);
    });
    var Wt = (function (n) {
      function r(t, r, s, a) {
        var u;
        "number" == typeof r && ((s.duration = r), (r = s), (s = null));
        var l,
          c,
          h,
          f,
          d,
          p,
          g,
          v,
          y = (u = n.call(this, a ? r : be(r)) || this).vars,
          D = y.duration,
          x = y.delay,
          b = y.immediateRender,
          _ = y.stagger,
          w = y.overwrite,
          C = y.keyframes,
          S = y.defaults,
          E = y.scrollTrigger,
          A = y.yoyoEase,
          T = r.parent || o,
          P = (I(t) || R(t) ? F(t[0]) : "length" in r) ? [t] : Ke(t);
        if (
          ((u._targets = P.length
            ? oe(P)
            : G(
                "GSAP target " + t + " not found. https://greensock.com",
                !m.nullTargetWarn
              ) || []),
          (u._ptLookup = []),
          (u._overwrite = w),
          C || _ || O(D) || O(x))
        ) {
          if (
            ((r = u.vars),
            (l = u.timeline =
              new Bt({ data: "nested", defaults: S || {} })).kill(),
            (l.parent = l._dp = e(u)),
            (l._start = 0),
            _ || O(D) || O(x))
          ) {
            if (((f = P.length), (g = _ && Ze(_)), k(_)))
              for (d in _) ~Ht.indexOf(d) && (v || (v = {}), (v[d] = _[d]));
            for (c = 0; c < f; c++)
              ((h = xe(r, Yt)).stagger = 0),
                A && (h.yoyoEase = A),
                v && ye(h, v),
                (p = P[c]),
                (h.duration = +Nt(D, e(u), c, p, P)),
                (h.delay = (+Nt(x, e(u), c, p, P) || 0) - u._delay),
                !_ &&
                  1 === f &&
                  h.delay &&
                  ((u._delay = x = h.delay), (u._start += x), (h.delay = 0)),
                l.to(p, h, g ? g(c, p, P) : 0),
                (l._ease = xt.none);
            l.duration() ? (D = x = 0) : (u.timeline = 0);
          } else if (C) {
            be(me(l.vars.defaults, { ease: "none" })),
              (l._ease = Et(C.ease || r.ease || "none"));
            var B,
              L,
              q,
              j = 0;
            if (I(C))
              C.forEach(function (e) {
                return l.to(P, e, ">");
              });
            else {
              for (d in ((h = {}), C))
                "ease" === d || "easeEach" === d || Vt(d, C[d], h, C.easeEach);
              for (d in h)
                for (
                  B = h[d].sort(function (e, t) {
                    return e.t - t.t;
                  }),
                    j = 0,
                    c = 0;
                  c < B.length;
                  c++
                )
                  ((q = {
                    ease: (L = B[c]).e,
                    duration: ((L.t - (c ? B[c - 1].t : 0)) / 100) * D,
                  })[d] = L.v),
                    l.to(P, q, j),
                    (j += q.duration);
              l.duration() < D && l.to({}, { duration: D - l.duration() });
            }
          }
          D || u.duration((D = l.duration()));
        } else u.timeline = 0;
        return (
          !0 !== w || i || ((Ot = e(u)), o.killTweensOf(P), (Ot = 0)),
          Oe(T, e(u), s),
          r.reversed && u.reverse(),
          r.paused && u.paused(!0),
          (b ||
            (!D &&
              !C &&
              u._start === ce(T._time) &&
              M(b) &&
              Ae(e(u)) &&
              "nested" !== T.data)) &&
            ((u._tTime = -1e-8), u.render(Math.max(0, -x))),
          E && Re(e(u), E),
          u
        );
      }
      t(r, n);
      var s = r.prototype;
      return (
        (s.render = function (e, t, n) {
          var r,
            i,
            o,
            s,
            a,
            u,
            l,
            c,
            h,
            f = this._time,
            d = this._tDur,
            p = this._dur,
            g = e > d - x && e >= 0 ? d : e < x ? 0 : e;
          if (p) {
            if (
              g !== this._tTime ||
              !e ||
              n ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 != e < 0)
            ) {
              if (((r = g), (c = this.timeline), this._repeat)) {
                if (((s = p + this._rDelay), this._repeat < -1 && e < 0))
                  return this.totalTime(100 * s + e, t, n);
                if (
                  ((r = ce(g % s)),
                  g === d
                    ? ((o = this._repeat), (r = p))
                    : ((o = ~~(g / s)) && o === g / s && ((r = p), o--),
                      r > p && (r = p)),
                  (u = this._yoyo && 1 & o) && ((h = this._yEase), (r = p - r)),
                  (a = Fe(this._tTime, s)),
                  r === f && !n && this._initted)
                )
                  return (this._tTime = g), this;
                o !== a &&
                  (c && this._yEase && St(c, u),
                  !this.vars.repeatRefresh ||
                    u ||
                    this._lock ||
                    ((this._lock = n = 1),
                    (this.render(ce(s * o), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (Ie(this, e < 0 ? e : r, n, t))
                  return (this._tTime = 0), this;
                if (f !== this._time) return this;
                if (p !== this._dur) return this.render(e, t, n);
              }
              if (
                ((this._tTime = g),
                (this._time = r),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                (this.ratio = l = (h || this._ease)(r / p)),
                this._from && (this.ratio = l = 1 - l),
                r && !f && !t && (st(this, "onStart"), this._tTime !== g))
              )
                return this;
              for (i = this._pt; i; ) i.r(l, i.d), (i = i._next);
              (c &&
                c.render(
                  e < 0 ? e : !r && u ? -1e-8 : c._dur * c._ease(r / this._dur),
                  t,
                  n
                )) ||
                (this._startAt && (this._zTime = e)),
                this._onUpdate &&
                  !t &&
                  (e < 0 && this._startAt && this._startAt.render(e, !0, n),
                  st(this, "onUpdate")),
                this._repeat &&
                  o !== a &&
                  this.vars.onRepeat &&
                  !t &&
                  this.parent &&
                  st(this, "onRepeat"),
                (g !== this._tDur && g) ||
                  this._tTime !== g ||
                  (e < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(e, !0, !0),
                  (e || !p) &&
                    ((g === this._tDur && this._ts > 0) ||
                      (!g && this._ts < 0)) &&
                    Ce(this, 1),
                  t ||
                    (e < 0 && !f) ||
                    (!g && !f) ||
                    (st(this, g === d ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(g < d && this.timeScale() > 0) &&
                      this._prom()));
            }
          } else
            !(function (e, t, n, r) {
              var i,
                o,
                s,
                a = e.ratio,
                u =
                  t < 0 ||
                  (!t &&
                    ((!e._start && Le(e) && (e._initted || !qe(e))) ||
                      ((e._ts < 0 || e._dp._ts < 0) && !qe(e))))
                    ? 0
                    : 1,
                l = e._rDelay,
                c = 0;
              if (
                (l &&
                  e._repeat &&
                  ((c = ze(0, e._tDur, t)),
                  (o = Fe(c, l)),
                  e._yoyo && 1 & o && (u = 1 - u),
                  o !== Fe(e._tTime, l) &&
                    ((a = 1 - u),
                    e.vars.repeatRefresh && e._initted && e.invalidate())),
                u !== a || r || e._zTime === x || (!t && e._zTime))
              ) {
                if (!e._initted && Ie(e, t, r, n)) return;
                for (
                  s = e._zTime,
                    e._zTime = t || (n ? x : 0),
                    n || (n = t && !s),
                    e.ratio = u,
                    e._from && (u = 1 - u),
                    e._time = 0,
                    e._tTime = c,
                    i = e._pt;
                  i;

                )
                  i.r(u, i.d), (i = i._next);
                e._startAt && t < 0 && e._startAt.render(t, !0, !0),
                  e._onUpdate && !n && st(e, "onUpdate"),
                  c && e._repeat && !n && e.parent && st(e, "onRepeat"),
                  (t >= e._tDur || t < 0) &&
                    e.ratio === u &&
                    (u && Ce(e, 1),
                    n ||
                      (st(e, u ? "onComplete" : "onReverseComplete", !0),
                      e._prom && e._prom()));
              } else e._zTime || (e._zTime = t);
            })(this, e, t, n);
          return this;
        }),
        (s.targets = function () {
          return this._targets;
        }),
        (s.invalidate = function () {
          return (
            (this._pt =
              this._op =
              this._startAt =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            n.prototype.invalidate.call(this)
          );
        }),
        (s.resetTo = function (e, t, n, r) {
          f || yt.wake(), this._ts || this.play();
          var i = Math.min(
            this._dur,
            (this._dp._time - this._start) * this._ts
          );
          return (
            this._initted || jt(this, i),
            (function (e, t, n, r, i, o, s) {
              var a,
                u,
                l,
                c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
              if (!c)
                for (
                  c = e._ptCache[t] = [],
                    u = e._ptLookup,
                    l = e._targets.length;
                  l--;

                ) {
                  if ((a = u[l][t]) && a.d && a.d._pt)
                    for (a = a.d._pt; a && a.p !== t; ) a = a._next;
                  if (!a)
                    return (Rt = 1), (e.vars[t] = "+=0"), jt(e, s), (Rt = 0), 1;
                  c.push(a);
                }
              for (l = c.length; l--; )
                ((a = c[l]).s =
                  (!r && 0 !== r) || i ? a.s + (r || 0) + o * a.c : r),
                  (a.c = n - a.s),
                  a.e && (a.e = le(n) + Xe(a.e)),
                  a.b && (a.b = a.s + Xe(a.b));
            })(this, e, t, n, r, this._ease(i / this._dur), i)
              ? this.resetTo(e, t, n, r)
              : (Me(this, 0),
                this.parent ||
                  _e(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0
                  ),
                this.render(0))
          );
        }),
        (s.kill = function (e, t) {
          if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t))))
            return (this._lazy = this._pt = 0), this.parent ? at(this) : this;
          if (this.timeline) {
            var n = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(e, t, Ot && !0 !== Ot.vars.overwrite)
                ._first || at(this),
              this.parent &&
                n !== this.timeline.totalDuration() &&
                je(this, (this._dur * this.timeline._tDur) / n, 0, 1),
              this
            );
          }
          var r,
            i,
            o,
            s,
            a,
            u,
            l,
            c = this._targets,
            h = e ? Ke(e) : c,
            f = this._ptLookup,
            d = this._pt;
          if (
            (!t || "all" === t) &&
            (function (e, t) {
              for (
                var n = e.length, r = n === t.length;
                r && n-- && e[n] === t[n];

              );
              return n < 0;
            })(c, h)
          )
            return "all" === t && (this._pt = 0), at(this);
          for (
            r = this._op = this._op || [],
              "all" !== t &&
                (A(t) &&
                  ((a = {}),
                  ue(t, function (e) {
                    return (a[e] = 1);
                  }),
                  (t = a)),
                (t = (function (e, t) {
                  var n,
                    r,
                    i,
                    o,
                    s = e[0] ? se(e[0]).harness : 0,
                    a = s && s.aliases;
                  if (!a) return t;
                  for (r in ((n = ye({}, t)), a))
                    if ((r in n))
                      for (i = (o = a[r].split(",")).length; i--; )
                        n[o[i]] = n[r];
                  return n;
                })(c, t))),
              l = c.length;
            l--;

          )
            if (~h.indexOf(c[l]))
              for (a in ((i = f[l]),
              "all" === t
                ? ((r[l] = t), (s = i), (o = {}))
                : ((o = r[l] = r[l] || {}), (s = t)),
              s))
                (u = i && i[a]) &&
                  (("kill" in u.d && !0 !== u.d.kill(a)) || we(this, u, "_pt"),
                  delete i[a]),
                  "all" !== o && (o[a] = 1);
          return this._initted && !this._pt && d && at(this), this;
        }),
        (r.to = function (e, t) {
          return new r(e, t, arguments[2]);
        }),
        (r.from = function (e, t) {
          return Ye(1, arguments);
        }),
        (r.delayedCall = function (e, t, n, i) {
          return new r(t, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: t,
            onReverseComplete: t,
            onCompleteParams: n,
            onReverseCompleteParams: n,
            callbackScope: i,
          });
        }),
        (r.fromTo = function (e, t, n) {
          return Ye(2, arguments);
        }),
        (r.set = function (e, t) {
          return (t.duration = 0), t.repeatDelay || (t.repeat = 0), new r(e, t);
        }),
        (r.killTweensOf = function (e, t, n) {
          return o.killTweensOf(e, t, n);
        }),
        r
      );
    })(Mt);
    me(Wt.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      ue("staggerTo,staggerFrom,staggerFromTo", function (e) {
        Wt[e] = function () {
          var t = new Bt(),
            n = Ue.call(arguments, 0);
          return (
            n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
          );
        };
      });
    var zt = function (e, t, n) {
        return (e[t] = n);
      },
      Xt = function (e, t, n) {
        return e[t](n);
      },
      Ut = function (e, t, n, r) {
        return e[t](r.fp, n);
      },
      Gt = function (e, t, n) {
        return e.setAttribute(t, n);
      },
      $t = function (e, t) {
        return T(e[t]) ? Xt : P(e[t]) && e.setAttribute ? Gt : zt;
      },
      Kt = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
      },
      Qt = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t);
      },
      Zt = function (e, t) {
        var n = t._pt,
          r = "";
        if (!e && t.b) r = t.b;
        else if (1 === e && t.e) r = t.e;
        else {
          for (; n; )
            (r =
              n.p +
              (n.m
                ? n.m(n.s + n.c * e)
                : Math.round(1e4 * (n.s + n.c * e)) / 1e4) +
              r),
              (n = n._next);
          r += t.c;
        }
        t.set(t.t, t.p, r, t);
      },
      Jt = function (e, t) {
        for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
      },
      en = function (e, t, n, r) {
        for (var i, o = this._pt; o; )
          (i = o._next), o.p === r && o.modifier(e, t, n), (o = i);
      },
      tn = function (e) {
        for (var t, n, r = this._pt; r; )
          (n = r._next),
            (r.p === e && !r.op) || r.op === e
              ? we(this, r, "_pt")
              : r.dep || (t = 1),
            (r = n);
        return !t;
      },
      nn = function (e, t, n, r) {
        r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
      },
      rn = function (e) {
        for (var t, n, r, i, o = e._pt; o; ) {
          for (t = o._next, n = r; n && n.pr > o.pr; ) n = n._next;
          (o._prev = n ? n._prev : i) ? (o._prev._next = o) : (r = o),
            (o._next = n) ? (n._prev = o) : (i = o),
            (o = t);
        }
        e._pt = r;
      },
      on = (function () {
        function e(e, t, n, r, i, o, s, a, u) {
          (this.t = t),
            (this.s = r),
            (this.c = i),
            (this.p = n),
            (this.r = o || Kt),
            (this.d = s || this),
            (this.set = a || zt),
            (this.pr = u || 0),
            (this._next = e),
            e && (e._prev = this);
        }
        return (
          (e.prototype.modifier = function (e, t, n) {
            (this.mSet = this.mSet || this.set),
              (this.set = nn),
              (this.m = e),
              (this.mt = n),
              (this.tween = t);
          }),
          e
        );
      })();
    ue(
      ie +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (e) {
        return (Q[e] = 1);
      }
    ),
      (W.TweenMax = W.TweenLite = Wt),
      (W.TimelineLite = W.TimelineMax = Bt),
      (o = new Bt({
        sortChildren: !1,
        defaults: y,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (m.stringFilter = mt);
    var sn = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        t.forEach(function (e) {
          return ut(e);
        });
      },
      timeline: function (e) {
        return new Bt(e);
      },
      getTweensOf: function (e, t) {
        return o.getTweensOf(e, t);
      },
      getProperty: function (e, t, n, r) {
        A(e) && (e = Ke(e)[0]);
        var i = se(e || {}).get,
          o = n ? ve : ge;
        return (
          "native" === n && (n = ""),
          e
            ? t
              ? o(((ee[t] && ee[t].get) || i)(e, t, n, r))
              : function (t, n, r) {
                  return o(((ee[t] && ee[t].get) || i)(e, t, n, r));
                }
            : e
        );
      },
      quickSetter: function (e, t, n) {
        if ((e = Ke(e)).length > 1) {
          var r = e.map(function (e) {
              return ln.quickSetter(e, t, n);
            }),
            i = r.length;
          return function (e) {
            for (var t = i; t--; ) r[t](e);
          };
        }
        e = e[0] || {};
        var o = ee[t],
          s = se(e),
          a = (s.harness && (s.harness.aliases || {})[t]) || t,
          u = o
            ? function (t) {
                var r = new o();
                (h._pt = 0),
                  r.init(e, n ? t + n : t, h, 0, [e]),
                  r.render(1, r),
                  h._pt && Jt(1, h);
              }
            : s.set(e, a);
        return o
          ? u
          : function (t) {
              return u(e, a, n ? t + n : t, s, 1);
            };
      },
      quickTo: function (e, t, n) {
        var r,
          i = ln.to(
            e,
            ye((((r = {})[t] = "+=0.1"), (r.paused = !0), r), n || {})
          ),
          o = function (e, n, r) {
            return i.resetTo(t, e, n, r);
          };
        return (o.tween = i), o;
      },
      isTweening: function (e) {
        return o.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = Et(e.ease, y.ease)), De(y, e || {});
      },
      config: function (e) {
        return De(m, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          n = e.effect,
          r = e.plugins,
          i = e.defaults,
          o = e.extendTimeline;
        (r || "").split(",").forEach(function (e) {
          return (
            e && !ee[e] && !W[e] && G(t + " effect requires " + e + " plugin.")
          );
        }),
          (te[t] = function (e, t, r) {
            return n(Ke(e), me(t || {}, i), r);
          }),
          o &&
            (Bt.prototype[t] = function (e, n, r) {
              return this.add(te[t](e, k(n) ? n : (r = n) && {}, this), r);
            });
      },
      registerEase: function (e, t) {
        xt[e] = Et(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? Et(e, t) : xt;
      },
      getById: function (e) {
        return o.getById(e);
      },
      exportRoot: function (e, t) {
        void 0 === e && (e = {});
        var n,
          r,
          i = new Bt(e);
        for (
          i.smoothChildTiming = M(e.smoothChildTiming),
            o.remove(i),
            i._dp = 0,
            i._time = i._tTime = o._time,
            n = o._first;
          n;

        )
          (r = n._next),
            (!t &&
              !n._dur &&
              n instanceof Wt &&
              n.vars.onComplete === n._targets[0]) ||
              Oe(i, n, n._start - n._delay),
            (n = r);
        return Oe(o, i, 0), i;
      },
      utils: {
        wrap: function e(t, n, r) {
          var i = n - t;
          return I(t)
            ? nt(t, e(0, t.length), n)
            : We(r, function (e) {
                return ((i + ((e - t) % i)) % i) + t;
              });
        },
        wrapYoyo: function e(t, n, r) {
          var i = n - t,
            o = 2 * i;
          return I(t)
            ? nt(t, e(0, t.length - 1), n)
            : We(r, function (e) {
                return t + ((e = (o + ((e - t) % o)) % o || 0) > i ? o - e : e);
              });
        },
        distribute: Ze,
        random: tt,
        snap: et,
        normalize: function (e, t, n) {
          return it(e, t, 0, 1, n);
        },
        getUnit: Xe,
        clamp: function (e, t, n) {
          return We(n, function (n) {
            return ze(e, t, n);
          });
        },
        splitColor: ft,
        toArray: Ke,
        selector: function (e) {
          return (
            (e = Ke(e)[0] || G("Invalid scope") || {}),
            function (t) {
              var n = e.current || e.nativeElement || e;
              return Ke(
                t,
                n.querySelectorAll
                  ? n
                  : n === e
                  ? G("Invalid scope") || u.createElement("div")
                  : e
              );
            }
          );
        },
        mapRange: it,
        pipe: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function (e) {
            return t.reduce(function (e, t) {
              return t(e);
            }, e);
          };
        },
        unitize: function (e, t) {
          return function (n) {
            return e(parseFloat(n)) + (t || Xe(n));
          };
        },
        interpolate: function e(t, n, r, i) {
          var o = isNaN(t + n)
            ? 0
            : function (e) {
                return (1 - e) * t + e * n;
              };
          if (!o) {
            var s,
              a,
              u,
              l,
              c,
              h = A(t),
              f = {};
            if ((!0 === r && (i = 1) && (r = null), h))
              (t = { p: t }), (n = { p: n });
            else if (I(t) && !I(n)) {
              for (u = [], l = t.length, c = l - 2, a = 1; a < l; a++)
                u.push(e(t[a - 1], t[a]));
              l--,
                (o = function (e) {
                  e *= l;
                  var t = Math.min(c, ~~e);
                  return u[t](e - t);
                }),
                (r = n);
            } else i || (t = ye(I(t) ? [] : {}, t));
            if (!u) {
              for (s in n) Lt.call(f, t, s, "get", n[s]);
              o = function (e) {
                return Jt(e, f) || (h ? t.p : t);
              };
            }
          }
          return We(r, o);
        },
        shuffle: Qe,
      },
      install: X,
      effects: te,
      ticker: yt,
      updateRoot: Bt.updateRoot,
      plugins: ee,
      globalTimeline: o,
      core: {
        PropTween: on,
        globals: $,
        Tween: Wt,
        Timeline: Bt,
        Animation: Mt,
        getCache: se,
        _removeLinkedListItem: we,
        suppressOverwrites: function (e) {
          return (i = e);
        },
      },
    };
    ue("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
      return (sn[e] = Wt[e]);
    }),
      yt.add(Bt.updateRoot),
      (h = sn.to({}, { duration: 0 }));
    var an = function (e, t) {
        for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
          n = n._next;
        return n;
      },
      un = function (e, t) {
        return {
          name: e,
          rawVars: 1,
          init: function (e, n, r) {
            r._onInit = function (e) {
              var r, i;
              if (
                (A(n) &&
                  ((r = {}),
                  ue(n, function (e) {
                    return (r[e] = 1);
                  }),
                  (n = r)),
                t)
              ) {
                for (i in ((r = {}), n)) r[i] = t(n[i]);
                n = r;
              }
              !(function (e, t) {
                var n,
                  r,
                  i,
                  o = e._targets;
                for (n in t)
                  for (r = o.length; r--; )
                    (i = e._ptLookup[r][n]) &&
                      (i = i.d) &&
                      (i._pt && (i = an(i, n)),
                      i && i.modifier && i.modifier(t[n], e, o[r], n));
              })(e, n);
            };
          },
        };
      },
      ln =
        sn.registerPlugin(
          {
            name: "attr",
            init: function (e, t, n, r, i) {
              var o, s;
              for (o in t)
                (s = this.add(
                  e,
                  "setAttribute",
                  (e.getAttribute(o) || 0) + "",
                  t[o],
                  r,
                  i,
                  0,
                  0,
                  o
                )) && (s.op = o),
                  this._props.push(o);
            },
          },
          {
            name: "endArray",
            init: function (e, t) {
              for (var n = t.length; n--; ) this.add(e, n, e[n] || 0, t[n]);
            },
          },
          un("roundProps", Je),
          un("modifiers"),
          un("snap", et)
        ) || sn;
    (Wt.version = Bt.version = ln.version = "3.10.4"), (l = 1), B() && Dt();
    xt.Power0,
      xt.Power1,
      xt.Power2,
      xt.Power3,
      xt.Power4,
      xt.Linear,
      xt.Quad,
      xt.Cubic,
      xt.Quart,
      xt.Quint,
      xt.Strong,
      xt.Elastic,
      xt.Back,
      xt.SteppedEase,
      xt.Bounce,
      xt.Sine,
      xt.Expo,
      xt.Circ;
    var cn,
      hn,
      fn,
      dn,
      pn,
      gn,
      vn,
      mn = {},
      yn = 180 / Math.PI,
      Dn = Math.PI / 180,
      xn = Math.atan2,
      bn = /([A-Z])/g,
      _n = /(left|right|width|margin|padding|x)/i,
      wn = /[\s,\(]\S/,
      Cn = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      Sn = function (e, t) {
        return t.set(
          t.t,
          t.p,
          Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
          t
        );
      },
      En = function (e, t) {
        return t.set(
          t.t,
          t.p,
          1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
          t
        );
      },
      An = function (e, t) {
        return t.set(
          t.t,
          t.p,
          e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
          t
        );
      },
      Tn = function (e, t) {
        var n = t.s + t.c * e;
        t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
      },
      Fn = function (e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t);
      },
      Pn = function (e, t) {
        return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
      },
      kn = function (e, t, n) {
        return (e.style[t] = n);
      },
      Mn = function (e, t, n) {
        return e.style.setProperty(t, n);
      },
      Bn = function (e, t, n) {
        return (e._gsap[t] = n);
      },
      On = function (e, t, n) {
        return (e._gsap.scaleX = e._gsap.scaleY = n);
      },
      Rn = function (e, t, n, r, i) {
        var o = e._gsap;
        (o.scaleX = o.scaleY = n), o.renderTransform(i, o);
      },
      In = function (e, t, n, r, i) {
        var o = e._gsap;
        (o[t] = n), o.renderTransform(i, o);
      },
      Ln = "transform",
      qn = Ln + "Origin",
      jn = function (e, t) {
        var n = hn.createElementNS
          ? hn.createElementNS(
              (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              e
            )
          : hn.createElement(e);
        return n.style ? n : hn.createElement(e);
      },
      Vn = function e(t, n, r) {
        var i = getComputedStyle(t);
        return (
          i[n] ||
          i.getPropertyValue(n.replace(bn, "-$1").toLowerCase()) ||
          i.getPropertyValue(n) ||
          (!r && e(t, Hn(n) || n, 1)) ||
          ""
        );
      },
      Nn = "O,Moz,ms,Ms,Webkit".split(","),
      Hn = function (e, t, n) {
        var r = (t || pn).style,
          i = 5;
        if (e in r && !n) return e;
        for (
          e = e.charAt(0).toUpperCase() + e.substr(1);
          i-- && !(Nn[i] + e in r);

        );
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Nn[i] : "") + e;
      },
      Yn = function () {
        "undefined" != typeof window &&
          window.document &&
          ((cn = window),
          (hn = cn.document),
          (fn = hn.documentElement),
          (pn = jn("div") || { style: {} }),
          jn("div"),
          (Ln = Hn(Ln)),
          (qn = Ln + "Origin"),
          (pn.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (vn = !!Hn("perspective")),
          (dn = 1));
      },
      Wn = function e(t) {
        var n,
          r = jn(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
              "http://www.w3.org/2000/svg"
          ),
          i = this.parentNode,
          o = this.nextSibling,
          s = this.style.cssText;
        if (
          (fn.appendChild(r),
          r.appendChild(this),
          (this.style.display = "block"),
          t)
        )
          try {
            (n = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = e);
          } catch (e) {}
        else this._gsapBBox && (n = this._gsapBBox());
        return (
          i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
          fn.removeChild(r),
          (this.style.cssText = s),
          n
        );
      },
      zn = function (e, t) {
        for (var n = t.length; n--; )
          if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
      },
      Xn = function (e) {
        var t;
        try {
          t = e.getBBox();
        } catch (n) {
          t = Wn.call(e, !0);
        }
        return (
          (t && (t.width || t.height)) ||
            e.getBBox === Wn ||
            (t = Wn.call(e, !0)),
          !t || t.width || t.x || t.y
            ? t
            : {
                x: +zn(e, ["x", "cx", "x1"]) || 0,
                y: +zn(e, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      Un = function (e) {
        return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !Xn(e));
      },
      Gn = function (e, t) {
        if (t) {
          var n = e.style;
          t in mn && t !== qn && (t = Ln),
            n.removeProperty
              ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) ||
                  (t = "-" + t),
                n.removeProperty(t.replace(bn, "-$1").toLowerCase()))
              : n.removeAttribute(t);
        }
      },
      $n = function (e, t, n, r, i, o) {
        var s = new on(e._pt, t, n, 0, 1, o ? Pn : Fn);
        return (e._pt = s), (s.b = r), (s.e = i), e._props.push(n), s;
      },
      Kn = { deg: 1, rad: 1, turn: 1 },
      Qn = function e(t, n, r, i) {
        var o,
          s,
          a,
          u,
          l = parseFloat(r) || 0,
          c = (r + "").trim().substr((l + "").length) || "px",
          h = pn.style,
          f = _n.test(n),
          d = "svg" === t.tagName.toLowerCase(),
          p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
          g = 100,
          v = "px" === i,
          m = "%" === i;
        return i === c || !l || Kn[i] || Kn[c]
          ? l
          : ("px" !== c && !v && (l = e(t, n, r, "px")),
            (u = t.getCTM && Un(t)),
            (!m && "%" !== c) || (!mn[n] && !~n.indexOf("adius"))
              ? ((h[f ? "width" : "height"] = g + (v ? c : i)),
                (s =
                  ~n.indexOf("adius") || ("em" === i && t.appendChild && !d)
                    ? t
                    : t.parentNode),
                u && (s = (t.ownerSVGElement || {}).parentNode),
                (s && s !== hn && s.appendChild) || (s = hn.body),
                (a = s._gsap) && m && a.width && f && a.time === yt.time
                  ? le((l / a.width) * g)
                  : ((m || "%" === c) && (h.position = Vn(t, "position")),
                    s === t && (h.position = "static"),
                    s.appendChild(pn),
                    (o = pn[p]),
                    s.removeChild(pn),
                    (h.position = "absolute"),
                    f && m && (((a = se(s)).time = yt.time), (a.width = s[p])),
                    le(v ? (o * l) / g : o && l ? (g / o) * l : 0)))
              : ((o = u ? t.getBBox()[f ? "width" : "height"] : t[p]),
                le(m ? (l / o) * g : (l / 100) * o)));
      },
      Zn = function (e, t, n, r) {
        var i;
        return (
          dn || Yn(),
          t in Cn &&
            "transform" !== t &&
            ~(t = Cn[t]).indexOf(",") &&
            (t = t.split(",")[0]),
          mn[t] && "transform" !== t
            ? ((i = lr(e, r)),
              (i =
                "transformOrigin" !== t
                  ? i[t]
                  : i.svg
                  ? i.origin
                  : cr(Vn(e, qn)) + " " + i.zOrigin + "px"))
            : (!(i = e.style[t]) ||
                "auto" === i ||
                r ||
                ~(i + "").indexOf("calc(")) &&
              (i =
                (nr[t] && nr[t](e, t, n)) ||
                Vn(e, t) ||
                ae(e, t) ||
                ("opacity" === t ? 1 : 0)),
          n && !~(i + "").trim().indexOf(" ") ? Qn(e, t, i, n) + n : i
        );
      },
      Jn = function (e, t, n, r) {
        if (!n || "none" === n) {
          var i = Hn(t, e, 1),
            o = i && Vn(e, i, 1);
          o && o !== n
            ? ((t = i), (n = o))
            : "borderColor" === t && (n = Vn(e, "borderTopColor"));
        }
        var s,
          a,
          u,
          l,
          c,
          h,
          f,
          d,
          p,
          g,
          v,
          y = new on(this._pt, e.style, t, 0, 1, Zt),
          D = 0,
          x = 0;
        if (
          ((y.b = n),
          (y.e = r),
          (n += ""),
          "auto" === (r += "") &&
            ((e.style[t] = r), (r = Vn(e, t) || r), (e.style[t] = n)),
          mt((s = [n, r])),
          (r = s[1]),
          (u = (n = s[0]).match(j) || []),
          (r.match(j) || []).length)
        ) {
          for (; (a = j.exec(r)); )
            (f = a[0]),
              (p = r.substring(D, a.index)),
              c
                ? (c = (c + 1) % 5)
                : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                  (c = 1),
              f !== (h = u[x++] || "") &&
                ((l = parseFloat(h) || 0),
                (v = h.substr((l + "").length)),
                "=" === f.charAt(1) && (f = he(l, f) + v),
                (d = parseFloat(f)),
                (g = f.substr((d + "").length)),
                (D = j.lastIndex - g.length),
                g ||
                  ((g = g || m.units[t] || v),
                  D === r.length && ((r += g), (y.e += g))),
                v !== g && (l = Qn(e, t, h, g) || 0),
                (y._pt = {
                  _next: y._pt,
                  p: p || 1 === x ? p : ",",
                  s: l,
                  c: d - l,
                  m: (c && c < 4) || "zIndex" === t ? Math.round : 0,
                }));
          y.c = D < r.length ? r.substring(D, r.length) : "";
        } else y.r = "display" === t && "none" === r ? Pn : Fn;
        return N.test(r) && (y.e = 0), (this._pt = y), y;
      },
      er = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      tr = function (e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
          var n,
            r,
            i,
            o = t.t,
            s = o.style,
            a = t.u,
            u = o._gsap;
          if ("all" === a || !0 === a) (s.cssText = ""), (r = 1);
          else
            for (i = (a = a.split(",")).length; --i > -1; )
              (n = a[i]),
                mn[n] && ((r = 1), (n = "transformOrigin" === n ? qn : Ln)),
                Gn(o, n);
          r &&
            (Gn(o, Ln),
            u &&
              (u.svg && o.removeAttribute("transform"),
              lr(o, 1),
              (u.uncache = 1)));
        }
      },
      nr = {
        clearProps: function (e, t, n, r, i) {
          if ("isFromStart" !== i.data) {
            var o = (e._pt = new on(e._pt, t, n, 0, 0, tr));
            return (o.u = r), (o.pr = -10), (o.tween = i), e._props.push(n), 1;
          }
        },
      },
      rr = [1, 0, 0, 1, 0, 0],
      ir = {},
      or = function (e) {
        return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
      },
      sr = function (e) {
        var t = Vn(e, Ln);
        return or(t) ? rr : t.substr(7).match(q).map(le);
      },
      ar = function (e, t) {
        var n,
          r,
          i,
          o,
          s = e._gsap || se(e),
          a = e.style,
          u = sr(e);
        return s.svg && e.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (u = [
              (i = e.transform.baseVal.consolidate().matrix).a,
              i.b,
              i.c,
              i.d,
              i.e,
              i.f,
            ]).join(",")
            ? rr
            : u
          : (u !== rr ||
              e.offsetParent ||
              e === fn ||
              s.svg ||
              ((i = a.display),
              (a.display = "block"),
              ((n = e.parentNode) && e.offsetParent) ||
                ((o = 1), (r = e.nextSibling), fn.appendChild(e)),
              (u = sr(e)),
              i ? (a.display = i) : Gn(e, "display"),
              o &&
                (r
                  ? n.insertBefore(e, r)
                  : n
                  ? n.appendChild(e)
                  : fn.removeChild(e))),
            t && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
      },
      ur = function (e, t, n, r, i, o) {
        var s,
          a,
          u,
          l = e._gsap,
          c = i || ar(e, !0),
          h = l.xOrigin || 0,
          f = l.yOrigin || 0,
          d = l.xOffset || 0,
          p = l.yOffset || 0,
          g = c[0],
          v = c[1],
          m = c[2],
          y = c[3],
          D = c[4],
          x = c[5],
          b = t.split(" "),
          _ = parseFloat(b[0]) || 0,
          w = parseFloat(b[1]) || 0;
        n
          ? c !== rr &&
            (a = g * y - v * m) &&
            ((u = _ * (-v / a) + w * (g / a) - (g * x - v * D) / a),
            (_ = _ * (y / a) + w * (-m / a) + (m * x - y * D) / a),
            (w = u))
          : ((_ =
              (s = Xn(e)).x + (~b[0].indexOf("%") ? (_ / 100) * s.width : _)),
            (w =
              s.y + (~(b[1] || b[0]).indexOf("%") ? (w / 100) * s.height : w))),
          r || (!1 !== r && l.smooth)
            ? ((D = _ - h),
              (x = w - f),
              (l.xOffset = d + (D * g + x * m) - D),
              (l.yOffset = p + (D * v + x * y) - x))
            : (l.xOffset = l.yOffset = 0),
          (l.xOrigin = _),
          (l.yOrigin = w),
          (l.smooth = !!r),
          (l.origin = t),
          (l.originIsAbsolute = !!n),
          (e.style[qn] = "0px 0px"),
          o &&
            ($n(o, l, "xOrigin", h, _),
            $n(o, l, "yOrigin", f, w),
            $n(o, l, "xOffset", d, l.xOffset),
            $n(o, l, "yOffset", p, l.yOffset)),
          e.setAttribute("data-svg-origin", _ + " " + w);
      },
      lr = function (e, t) {
        var n = e._gsap || new kt(e);
        if ("x" in n && !t && !n.uncache) return n;
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c,
          h,
          f,
          d,
          p,
          g,
          v,
          y,
          D,
          x,
          b,
          _,
          w,
          C,
          S,
          E,
          A,
          T,
          F,
          P,
          k,
          M,
          B,
          O,
          R,
          I = e.style,
          L = n.scaleX < 0,
          q = "px",
          j = "deg",
          V = Vn(e, qn) || "0";
        return (
          (r = i = o = u = l = c = h = f = d = 0),
          (s = a = 1),
          (n.svg = !(!e.getCTM || !Un(e))),
          (v = ar(e, n.svg)),
          n.svg &&
            ((A =
              (!n.uncache || "0px 0px" === V) &&
              !t &&
              e.getAttribute("data-svg-origin")),
            ur(e, A || V, !!A || n.originIsAbsolute, !1 !== n.smooth, v)),
          (p = n.xOrigin || 0),
          (g = n.yOrigin || 0),
          v !== rr &&
            ((b = v[0]),
            (_ = v[1]),
            (w = v[2]),
            (C = v[3]),
            (r = S = v[4]),
            (i = E = v[5]),
            6 === v.length
              ? ((s = Math.sqrt(b * b + _ * _)),
                (a = Math.sqrt(C * C + w * w)),
                (u = b || _ ? xn(_, b) * yn : 0),
                (h = w || C ? xn(w, C) * yn + u : 0) &&
                  (a *= Math.abs(Math.cos(h * Dn))),
                n.svg &&
                  ((r -= p - (p * b + g * w)), (i -= g - (p * _ + g * C))))
              : ((R = v[6]),
                (B = v[7]),
                (P = v[8]),
                (k = v[9]),
                (M = v[10]),
                (O = v[11]),
                (r = v[12]),
                (i = v[13]),
                (o = v[14]),
                (l = (y = xn(R, M)) * yn),
                y &&
                  ((A = S * (D = Math.cos(-y)) + P * (x = Math.sin(-y))),
                  (T = E * D + k * x),
                  (F = R * D + M * x),
                  (P = S * -x + P * D),
                  (k = E * -x + k * D),
                  (M = R * -x + M * D),
                  (O = B * -x + O * D),
                  (S = A),
                  (E = T),
                  (R = F)),
                (c = (y = xn(-w, M)) * yn),
                y &&
                  ((D = Math.cos(-y)),
                  (O = C * (x = Math.sin(-y)) + O * D),
                  (b = A = b * D - P * x),
                  (_ = T = _ * D - k * x),
                  (w = F = w * D - M * x)),
                (u = (y = xn(_, b)) * yn),
                y &&
                  ((A = b * (D = Math.cos(y)) + _ * (x = Math.sin(y))),
                  (T = S * D + E * x),
                  (_ = _ * D - b * x),
                  (E = E * D - S * x),
                  (b = A),
                  (S = T)),
                l &&
                  Math.abs(l) + Math.abs(u) > 359.9 &&
                  ((l = u = 0), (c = 180 - c)),
                (s = le(Math.sqrt(b * b + _ * _ + w * w))),
                (a = le(Math.sqrt(E * E + R * R))),
                (y = xn(S, E)),
                (h = Math.abs(y) > 2e-4 ? y * yn : 0),
                (d = O ? 1 / (O < 0 ? -O : O) : 0)),
            n.svg &&
              ((A = e.getAttribute("transform")),
              (n.forceCSS = e.setAttribute("transform", "") || !or(Vn(e, Ln))),
              A && e.setAttribute("transform", A))),
          Math.abs(h) > 90 &&
            Math.abs(h) < 270 &&
            (L
              ? ((s *= -1),
                (h += u <= 0 ? 180 : -180),
                (u += u <= 0 ? 180 : -180))
              : ((a *= -1), (h += h <= 0 ? 180 : -180))),
          (t = t || n.uncache),
          (n.x =
            r -
            ((n.xPercent =
              r &&
              ((!t && n.xPercent) ||
                (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
              ? (e.offsetWidth * n.xPercent) / 100
              : 0) +
            q),
          (n.y =
            i -
            ((n.yPercent =
              i &&
              ((!t && n.yPercent) ||
                (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
              ? (e.offsetHeight * n.yPercent) / 100
              : 0) +
            q),
          (n.z = o + q),
          (n.scaleX = le(s)),
          (n.scaleY = le(a)),
          (n.rotation = le(u) + j),
          (n.rotationX = le(l) + j),
          (n.rotationY = le(c) + j),
          (n.skewX = h + j),
          (n.skewY = f + j),
          (n.transformPerspective = d + q),
          (n.zOrigin = parseFloat(V.split(" ")[2]) || 0) && (I[qn] = cr(V)),
          (n.xOffset = n.yOffset = 0),
          (n.force3D = m.force3D),
          (n.renderTransform = n.svg ? mr : vn ? vr : fr),
          (n.uncache = 0),
          n
        );
      },
      cr = function (e) {
        return (e = e.split(" "))[0] + " " + e[1];
      },
      hr = function (e, t, n) {
        var r = Xe(t);
        return le(parseFloat(t) + parseFloat(Qn(e, "x", n + "px", r))) + r;
      },
      fr = function (e, t) {
        (t.z = "0px"),
          (t.rotationY = t.rotationX = "0deg"),
          (t.force3D = 0),
          vr(e, t);
      },
      dr = "0deg",
      pr = "0px",
      gr = ") ",
      vr = function (e, t) {
        var n = t || this,
          r = n.xPercent,
          i = n.yPercent,
          o = n.x,
          s = n.y,
          a = n.z,
          u = n.rotation,
          l = n.rotationY,
          c = n.rotationX,
          h = n.skewX,
          f = n.skewY,
          d = n.scaleX,
          p = n.scaleY,
          g = n.transformPerspective,
          v = n.force3D,
          m = n.target,
          y = n.zOrigin,
          D = "",
          x = ("auto" === v && e && 1 !== e) || !0 === v;
        if (y && (c !== dr || l !== dr)) {
          var b,
            _ = parseFloat(l) * Dn,
            w = Math.sin(_),
            C = Math.cos(_);
          (_ = parseFloat(c) * Dn),
            (b = Math.cos(_)),
            (o = hr(m, o, w * b * -y)),
            (s = hr(m, s, -Math.sin(_) * -y)),
            (a = hr(m, a, C * b * -y + y));
        }
        g !== pr && (D += "perspective(" + g + gr),
          (r || i) && (D += "translate(" + r + "%, " + i + "%) "),
          (x || o !== pr || s !== pr || a !== pr) &&
            (D +=
              a !== pr || x
                ? "translate3d(" + o + ", " + s + ", " + a + ") "
                : "translate(" + o + ", " + s + gr),
          u !== dr && (D += "rotate(" + u + gr),
          l !== dr && (D += "rotateY(" + l + gr),
          c !== dr && (D += "rotateX(" + c + gr),
          (h === dr && f === dr) || (D += "skew(" + h + ", " + f + gr),
          (1 === d && 1 === p) || (D += "scale(" + d + ", " + p + gr),
          (m.style[Ln] = D || "translate(0, 0)");
      },
      mr = function (e, t) {
        var n,
          r,
          i,
          o,
          s,
          a = t || this,
          u = a.xPercent,
          l = a.yPercent,
          c = a.x,
          h = a.y,
          f = a.rotation,
          d = a.skewX,
          p = a.skewY,
          g = a.scaleX,
          v = a.scaleY,
          m = a.target,
          y = a.xOrigin,
          D = a.yOrigin,
          x = a.xOffset,
          b = a.yOffset,
          _ = a.forceCSS,
          w = parseFloat(c),
          C = parseFloat(h);
        (f = parseFloat(f)),
          (d = parseFloat(d)),
          (p = parseFloat(p)) && ((d += p = parseFloat(p)), (f += p)),
          f || d
            ? ((f *= Dn),
              (d *= Dn),
              (n = Math.cos(f) * g),
              (r = Math.sin(f) * g),
              (i = Math.sin(f - d) * -v),
              (o = Math.cos(f - d) * v),
              d &&
                ((p *= Dn),
                (s = Math.tan(d - p)),
                (i *= s = Math.sqrt(1 + s * s)),
                (o *= s),
                p &&
                  ((s = Math.tan(p)),
                  (n *= s = Math.sqrt(1 + s * s)),
                  (r *= s))),
              (n = le(n)),
              (r = le(r)),
              (i = le(i)),
              (o = le(o)))
            : ((n = g), (o = v), (r = i = 0)),
          ((w && !~(c + "").indexOf("px")) ||
            (C && !~(h + "").indexOf("px"))) &&
            ((w = Qn(m, "x", c, "px")), (C = Qn(m, "y", h, "px"))),
          (y || D || x || b) &&
            ((w = le(w + y - (y * n + D * i) + x)),
            (C = le(C + D - (y * r + D * o) + b))),
          (u || l) &&
            ((s = m.getBBox()),
            (w = le(w + (u / 100) * s.width)),
            (C = le(C + (l / 100) * s.height))),
          (s =
            "matrix(" +
            n +
            "," +
            r +
            "," +
            i +
            "," +
            o +
            "," +
            w +
            "," +
            C +
            ")"),
          m.setAttribute("transform", s),
          _ && (m.style[Ln] = s);
      },
      yr = function (e, t, n, r, i) {
        var o,
          s,
          a = 360,
          u = A(i),
          l = parseFloat(i) * (u && ~i.indexOf("rad") ? yn : 1) - r,
          c = r + l + "deg";
        return (
          u &&
            ("short" === (o = i.split("_")[1]) &&
              (l %= a) !== l % 180 &&
              (l += l < 0 ? a : -360),
            "cw" === o && l < 0
              ? (l = ((l + 36e9) % a) - ~~(l / a) * a)
              : "ccw" === o && l > 0 && (l = ((l - 36e9) % a) - ~~(l / a) * a)),
          (e._pt = s = new on(e._pt, t, n, r, l, En)),
          (s.e = c),
          (s.u = "deg"),
          e._props.push(n),
          s
        );
      },
      Dr = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      },
      xr = function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = Dr({}, n._gsap),
          h = n.style;
        for (i in (c.svg
          ? ((o = n.getAttribute("transform")),
            n.setAttribute("transform", ""),
            (h[Ln] = t),
            (r = lr(n, 1)),
            Gn(n, Ln),
            n.setAttribute("transform", o))
          : ((o = getComputedStyle(n)[Ln]),
            (h[Ln] = t),
            (r = lr(n, 1)),
            (h[Ln] = o)),
        mn))
          (o = c[i]) !== (s = r[i]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
            ((a = Xe(o) !== (l = Xe(s)) ? Qn(n, i, o, l) : parseFloat(o)),
            (u = parseFloat(s)),
            (e._pt = new on(e._pt, r, i, a, u - a, Sn)),
            (e._pt.u = l || 0),
            e._props.push(i));
        Dr(r, c);
      };
    ue("padding,margin,Width,Radius", function (e, t) {
      var n = "Top",
        r = "Right",
        i = "Bottom",
        o = "Left",
        s = (t < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function (
          n
        ) {
          return t < 2 ? e + n : "border" + n + e;
        });
      nr[t > 1 ? "border" + e : e] = function (e, t, n, r, i) {
        var o, a;
        if (arguments.length < 4)
          return (
            (o = s.map(function (t) {
              return Zn(e, t, n);
            })),
            5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
          );
        (o = (r + "").split(" ")),
          (a = {}),
          s.forEach(function (e, t) {
            return (a[e] = o[t] = o[t] || o[((t - 1) / 2) | 0]);
          }),
          e.init(t, a, i);
      };
    });
    var br,
      _r,
      wr,
      Cr = {
        name: "css",
        register: Yn,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, n, r, i) {
          var o,
            s,
            a,
            u,
            l,
            c,
            h,
            f,
            d,
            p,
            g,
            v,
            y,
            D,
            x,
            b,
            _,
            w,
            C,
            S = this._props,
            E = e.style,
            T = n.vars.startAt;
          for (h in (dn || Yn(), t))
            if (
              "autoRound" !== h &&
              ((s = t[h]), !ee[h] || !qt(h, t, n, r, e, i))
            )
              if (
                ((l = typeof s),
                (c = nr[h]),
                "function" === l && (l = typeof (s = s.call(n, r, e, i))),
                "string" === l && ~s.indexOf("random(") && (s = rt(s)),
                c)
              )
                c(this, e, h, s, n) && (x = 1);
              else if ("--" === h.substr(0, 2))
                (o = (getComputedStyle(e).getPropertyValue(h) + "").trim()),
                  (s += ""),
                  (gt.lastIndex = 0),
                  gt.test(o) || ((f = Xe(o)), (d = Xe(s))),
                  d ? f !== d && (o = Qn(e, h, o, d) + d) : f && (s += f),
                  this.add(E, "setProperty", o, s, r, i, 0, 0, h),
                  S.push(h);
              else if ("undefined" !== l) {
                if (
                  (T && h in T
                    ? ((o =
                        "function" == typeof T[h]
                          ? T[h].call(n, r, e, i)
                          : T[h]),
                      A(o) && ~o.indexOf("random(") && (o = rt(o)),
                      Xe(o + "") || (o += m.units[h] || Xe(Zn(e, h)) || ""),
                      "=" === (o + "").charAt(1) && (o = Zn(e, h)))
                    : (o = Zn(e, h)),
                  (u = parseFloat(o)),
                  (p =
                    "string" === l && "=" === s.charAt(1) && s.substr(0, 2)) &&
                    (s = s.substr(2)),
                  (a = parseFloat(s)),
                  h in Cn &&
                    ("autoAlpha" === h &&
                      (1 === u &&
                        "hidden" === Zn(e, "visibility") &&
                        a &&
                        (u = 0),
                      $n(
                        this,
                        E,
                        "visibility",
                        u ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a
                      )),
                    "scale" !== h &&
                      "transform" !== h &&
                      ~(h = Cn[h]).indexOf(",") &&
                      (h = h.split(",")[0])),
                  (g = h in mn))
                )
                  if (
                    (v ||
                      (((y = e._gsap).renderTransform && !t.parseTransform) ||
                        lr(e, t.parseTransform),
                      (D = !1 !== t.smoothOrigin && y.smooth),
                      ((v = this._pt =
                        new on(
                          this._pt,
                          E,
                          Ln,
                          0,
                          1,
                          y.renderTransform,
                          y,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === h)
                  )
                    (this._pt = new on(
                      this._pt,
                      y,
                      "scaleY",
                      y.scaleY,
                      (p ? he(y.scaleY, p + a) : a) - y.scaleY || 0
                    )),
                      S.push("scaleY", h),
                      (h += "X");
                  else {
                    if ("transformOrigin" === h) {
                      (_ = void 0),
                        (w = void 0),
                        (C = void 0),
                        (_ = (b = s).split(" ")),
                        (w = _[0]),
                        (C = _[1] || "50%"),
                        ("top" !== w &&
                          "bottom" !== w &&
                          "left" !== C &&
                          "right" !== C) ||
                          ((b = w), (w = C), (C = b)),
                        (_[0] = er[w] || w),
                        (_[1] = er[C] || C),
                        (s = _.join(" ")),
                        y.svg
                          ? ur(e, s, 0, D, 0, this)
                          : ((d = parseFloat(s.split(" ")[2]) || 0) !==
                              y.zOrigin && $n(this, y, "zOrigin", y.zOrigin, d),
                            $n(this, E, h, cr(o), cr(s)));
                      continue;
                    }
                    if ("svgOrigin" === h) {
                      ur(e, s, 1, D, 0, this);
                      continue;
                    }
                    if (h in ir) {
                      yr(this, y, h, u, p ? he(u, p + s) : s);
                      continue;
                    }
                    if ("smoothOrigin" === h) {
                      $n(this, y, "smooth", y.smooth, s);
                      continue;
                    }
                    if ("force3D" === h) {
                      y[h] = s;
                      continue;
                    }
                    if ("transform" === h) {
                      xr(this, s, e);
                      continue;
                    }
                  }
                else h in E || (h = Hn(h) || h);
                if (
                  g ||
                  ((a || 0 === a) && (u || 0 === u) && !wn.test(s) && h in E)
                )
                  a || (a = 0),
                    (f = (o + "").substr((u + "").length)) !==
                      (d = Xe(s) || (h in m.units ? m.units[h] : f)) &&
                      (u = Qn(e, h, o, d)),
                    (this._pt = new on(
                      this._pt,
                      g ? y : E,
                      h,
                      u,
                      (p ? he(u, p + a) : a) - u,
                      g || ("px" !== d && "zIndex" !== h) || !1 === t.autoRound
                        ? Sn
                        : Tn
                    )),
                    (this._pt.u = d || 0),
                    f !== d &&
                      "%" !== d &&
                      ((this._pt.b = o), (this._pt.r = An));
                else if (h in E) Jn.call(this, e, h, o, p ? p + s : s);
                else {
                  if (!(h in e)) {
                    U(h, s);
                    continue;
                  }
                  this.add(e, h, o || e[h], p ? p + s : s, r, i);
                }
                S.push(h);
              }
          x && rn(this);
        },
        get: Zn,
        aliases: Cn,
        getSetter: function (e, t, n) {
          var r = Cn[t];
          return (
            r && r.indexOf(",") < 0 && (t = r),
            t in mn && t !== qn && (e._gsap.x || Zn(e, "x"))
              ? n && gn === n
                ? "scale" === t
                  ? On
                  : Bn
                : (gn = n || {}) && ("scale" === t ? Rn : In)
              : e.style && !P(e.style[t])
              ? kn
              : ~t.indexOf("-")
              ? Mn
              : $t(e, t)
          );
        },
        core: { _removeProperty: Gn, _getMatrix: ar },
      };
    (ln.utils.checkPrefix = Hn),
      (wr = ue(
        (br = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
          "," +
          (_r = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (e) {
          mn[e] = 1;
        }
      )),
      ue(_r, function (e) {
        (m.units[e] = "deg"), (ir[e] = 1);
      }),
      (Cn[wr[13]] = br + "," + _r),
      ue(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (e) {
          var t = e.split(":");
          Cn[t[1]] = wr[t[0]];
        }
      ),
      ue(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (e) {
          m.units[e] = "px";
        }
      ),
      ln.registerPlugin(Cr);
    var Sr = ln.registerPlugin(Cr) || ln,
      Er = (Sr.core.Tween, /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
      Ar = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
      Tr = Math.PI / 180,
      Fr = (Math.PI, Math.sin),
      Pr = Math.cos,
      kr = Math.abs,
      Mr = Math.sqrt,
      Br =
        (Math.atan2,
        function (e) {
          return "number" == typeof e;
        }),
      Or = 1e5,
      Rr = function (e) {
        return Math.round(e * Or) / Or || 0;
      };
    function Ir(e, t, n, r, i, o, s, a, u) {
      if (e !== a || t !== u) {
        (n = kr(n)), (r = kr(r));
        var l = (i % 360) * Tr,
          c = Pr(l),
          h = Fr(l),
          f = Math.PI,
          d = 2 * f,
          p = (e - a) / 2,
          g = (t - u) / 2,
          v = c * p + h * g,
          m = -h * p + c * g,
          y = v * v,
          D = m * m,
          x = y / (n * n) + D / (r * r);
        x > 1 && ((n = Mr(x) * n), (r = Mr(x) * r));
        var b = n * n,
          _ = r * r,
          w = (b * _ - b * D - _ * y) / (b * D + _ * y);
        w < 0 && (w = 0);
        var C = (o === s ? -1 : 1) * Mr(w),
          S = C * ((n * m) / r),
          E = C * ((-r * v) / n),
          A = (e + a) / 2 + (c * S - h * E),
          T = (t + u) / 2 + (h * S + c * E),
          F = (v - S) / n,
          P = (m - E) / r,
          k = (-v - S) / n,
          M = (-m - E) / r,
          B = F * F + P * P,
          O = (P < 0 ? -1 : 1) * Math.acos(F / Mr(B)),
          R =
            (F * M - P * k < 0 ? -1 : 1) *
            Math.acos((F * k + P * M) / Mr(B * (k * k + M * M)));
        isNaN(R) && (R = f),
          !s && R > 0 ? (R -= d) : s && R < 0 && (R += d),
          (O %= d),
          (R %= d);
        var I,
          L = Math.ceil(kr(R) / (d / 4)),
          q = [],
          j = R / L,
          V = ((4 / 3) * Fr(j / 2)) / (1 + Pr(j / 2)),
          N = c * n,
          H = h * n,
          Y = h * -r,
          W = c * r;
        for (I = 0; I < L; I++)
          (v = Pr((i = O + I * j))),
            (m = Fr(i)),
            (F = Pr((i += j))),
            (P = Fr(i)),
            q.push(v - V * m, m + V * v, F + V * P, P - V * F, F, P);
        for (I = 0; I < q.length; I += 2)
          (v = q[I]),
            (m = q[I + 1]),
            (q[I] = v * N + m * Y + A),
            (q[I + 1] = v * H + m * W + T);
        return (q[I - 2] = a), (q[I - 1] = u), q;
      }
    }
    function Lr(e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a,
        u,
        l,
        c,
        h,
        f,
        d,
        p,
        g,
        v =
          (e + "")
            .replace(Ar, function (e) {
              var t = +e;
              return t < 1e-4 && t > -1e-4 ? 0 : t;
            })
            .match(Er) || [],
        m = [],
        y = 0,
        D = 0,
        x = 2 / 3,
        b = v.length,
        _ = 0,
        w = "ERROR: malformed path: " + e,
        C = function (e, t, n, r) {
          (c = (n - e) / 3),
            (h = (r - t) / 3),
            a.push(e + c, t + h, n - c, r - h, n, r);
        };
      if (!e || !isNaN(v[0]) || isNaN(v[1])) return console.log(w), m;
      for (t = 0; t < b; t++)
        if (
          ((d = o),
          isNaN(v[t]) ? (s = (o = v[t].toUpperCase()) !== v[t]) : t--,
          (r = +v[t + 1]),
          (i = +v[t + 2]),
          s && ((r += y), (i += D)),
          t || ((u = r), (l = i)),
          "M" === o)
        )
          a && (a.length < 8 ? (m.length -= 1) : (_ += a.length)),
            (y = u = r),
            (D = l = i),
            (a = [r, i]),
            m.push(a),
            (t += 2),
            (o = "L");
        else if ("C" === o)
          a || (a = [0, 0]),
            s || (y = D = 0),
            a.push(
              r,
              i,
              y + 1 * v[t + 3],
              D + 1 * v[t + 4],
              (y += 1 * v[t + 5]),
              (D += 1 * v[t + 6])
            ),
            (t += 6);
        else if ("S" === o)
          (c = y),
            (h = D),
            ("C" !== d && "S" !== d) ||
              ((c += y - a[a.length - 4]), (h += D - a[a.length - 3])),
            s || (y = D = 0),
            a.push(c, h, r, i, (y += 1 * v[t + 3]), (D += 1 * v[t + 4])),
            (t += 4);
        else if ("Q" === o)
          (c = y + (r - y) * x),
            (h = D + (i - D) * x),
            s || (y = D = 0),
            (y += 1 * v[t + 3]),
            (D += 1 * v[t + 4]),
            a.push(c, h, y + (r - y) * x, D + (i - D) * x, y, D),
            (t += 4);
        else if ("T" === o)
          (c = y - a[a.length - 4]),
            (h = D - a[a.length - 3]),
            a.push(
              y + c,
              D + h,
              r + (y + 1.5 * c - r) * x,
              i + (D + 1.5 * h - i) * x,
              (y = r),
              (D = i)
            ),
            (t += 2);
        else if ("H" === o) C(y, D, (y = r), D), (t += 1);
        else if ("V" === o) C(y, D, y, (D = r + (s ? D - y : 0))), (t += 1);
        else if ("L" === o || "Z" === o)
          "Z" === o && ((r = u), (i = l), (a.closed = !0)),
            ("L" === o || kr(y - r) > 0.5 || kr(D - i) > 0.5) &&
              (C(y, D, r, i), "L" === o && (t += 2)),
            (y = r),
            (D = i);
        else if ("A" === o) {
          if (
            ((p = v[t + 4]),
            (g = v[t + 5]),
            (c = v[t + 6]),
            (h = v[t + 7]),
            (n = 7),
            p.length > 1 &&
              (p.length < 3
                ? ((h = c), (c = g), n--)
                : ((h = g), (c = p.substr(2)), (n -= 2)),
              (g = p.charAt(1)),
              (p = p.charAt(0))),
            (f = Ir(
              y,
              D,
              +v[t + 1],
              +v[t + 2],
              +v[t + 3],
              +p,
              +g,
              (s ? y : 0) + 1 * c,
              (s ? D : 0) + 1 * h
            )),
            (t += n),
            f)
          )
            for (n = 0; n < f.length; n++) a.push(f[n]);
          (y = a[a.length - 2]), (D = a[a.length - 1]);
        } else console.log(w);
      return (
        (t = a.length) < 6
          ? (m.pop(), (t = 0))
          : a[0] === a[t - 2] && a[1] === a[t - 1] && (a.closed = !0),
        (m.totalPoints = _ + t),
        m
      );
    }
    function qr(e) {
      Br(e[0]) && (e = [e]);
      var t,
        n,
        r,
        i,
        o = "",
        s = e.length;
      for (n = 0; n < s; n++) {
        for (
          i = e[n],
            o += "M" + Rr(i[0]) + "," + Rr(i[1]) + " C",
            t = i.length,
            r = 2;
          r < t;
          r++
        )
          o +=
            Rr(i[r++]) +
            "," +
            Rr(i[r++]) +
            " " +
            Rr(i[r++]) +
            "," +
            Rr(i[r++]) +
            " " +
            Rr(i[r++]) +
            "," +
            Rr(i[r]) +
            " ";
        i.closed && (o += "z");
      }
      return o;
    }
    var jr,
      Vr,
      Nr = function () {
        return (
          jr ||
          ("undefined" != typeof window &&
            (jr = window.gsap) &&
            jr.registerPlugin &&
            jr)
        );
      },
      Hr = function () {
        (jr = Nr())
          ? (jr.registerEase("_CE", Ur.create), (Vr = 1))
          : console.warn("Please gsap.registerPlugin(CustomEase)");
      },
      Yr = function (e) {
        return ~~(1e3 * e + (e < 0 ? -0.5 : 0.5)) / 1e3;
      },
      Wr = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      zr = /[cLlsSaAhHvVtTqQ]/g,
      Xr = function e(t, n, r, i, o, s, a, u, l, c, h) {
        var f,
          d = (t + r) / 2,
          p = (n + i) / 2,
          g = (r + o) / 2,
          v = (i + s) / 2,
          m = (o + a) / 2,
          y = (s + u) / 2,
          D = (d + g) / 2,
          x = (p + v) / 2,
          b = (g + m) / 2,
          _ = (v + y) / 2,
          w = (D + b) / 2,
          C = (x + _) / 2,
          S = a - t,
          E = u - n,
          A = Math.abs((r - a) * E - (i - u) * S),
          T = Math.abs((o - a) * E - (s - u) * S);
        return (
          c ||
            ((c = [
              { x: t, y: n },
              { x: a, y: u },
            ]),
            (h = 1)),
          c.splice(h || c.length - 1, 0, { x: w, y: C }),
          (A + T) * (A + T) > l * (S * S + E * E) &&
            ((f = c.length),
            e(t, n, d, p, D, x, w, C, l, c, h),
            e(w, C, b, _, m, y, a, u, l, c, h + 1 + (c.length - f))),
          c
        );
      },
      Ur = (function () {
        function e(e, t, n) {
          Vr || Hr(), (this.id = e), this.setData(t, n);
        }
        var t = e.prototype;
        return (
          (t.setData = function (e, t) {
            t = t || {};
            var n,
              r,
              i,
              o,
              s,
              a,
              u,
              l,
              c,
              h = (e = e || "0,0,1,1").match(Wr),
              f = 1,
              d = [],
              p = [],
              g = t.precision || 1,
              v = g <= 1;
            if (
              ((this.data = e),
              (zr.test(e) || (~e.indexOf("M") && e.indexOf("C") < 0)) &&
                (h = Lr(e)[0]),
              4 === (n = h.length))
            )
              h.unshift(0, 0), h.push(1, 1), (n = 8);
            else if ((n - 2) % 6) throw "Invalid CustomEase";
            for (
              (0 == +h[0] && 1 == +h[n - 2]) ||
                (function (e, t, n) {
                  n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
                  var r,
                    i = -1 * +e[0],
                    o = -n,
                    s = e.length,
                    a = 1 / (+e[s - 2] + i),
                    u =
                      -t ||
                      (Math.abs(+e[s - 1] - +e[1]) < 0.01 * (+e[s - 2] - +e[0])
                        ? (function (e) {
                            var t,
                              n = e.length,
                              r = 1e20;
                            for (t = 1; t < n; t += 6) +e[t] < r && (r = +e[t]);
                            return r;
                          })(e) + o
                        : +e[s - 1] + o);
                  for (u = u ? 1 / u : -a, r = 0; r < s; r += 2)
                    (e[r] = (+e[r] + i) * a), (e[r + 1] = (+e[r + 1] + o) * u);
                })(h, t.height, t.originY),
                this.segment = h,
                o = 2;
              o < n;
              o += 6
            )
              (r = { x: +h[o - 2], y: +h[o - 1] }),
                (i = { x: +h[o + 4], y: +h[o + 5] }),
                d.push(r, i),
                Xr(
                  r.x,
                  r.y,
                  +h[o],
                  +h[o + 1],
                  +h[o + 2],
                  +h[o + 3],
                  i.x,
                  i.y,
                  1 / (2e5 * g),
                  d,
                  d.length - 1
                );
            for (n = d.length, o = 0; o < n; o++)
              (u = d[o]),
                (l = d[o - 1] || u),
                (u.x > l.x || (l.y !== u.y && l.x === u.x) || u === l) &&
                u.x <= 1
                  ? ((l.cx = u.x - l.x),
                    (l.cy = u.y - l.y),
                    (l.n = u),
                    (l.nx = u.x),
                    v &&
                      o > 1 &&
                      Math.abs(l.cy / l.cx - d[o - 2].cy / d[o - 2].cx) > 2 &&
                      (v = 0),
                    l.cx < f &&
                      (l.cx
                        ? (f = l.cx)
                        : ((l.cx = 0.001),
                          o === n - 1 &&
                            ((l.x -= 0.001),
                            (f = Math.min(f, 0.001)),
                            (v = 0)))))
                  : (d.splice(o--, 1), n--);
            if (((s = 1 / (n = (1 / f + 1) | 0)), (a = 0), (u = d[0]), v)) {
              for (o = 0; o < n; o++)
                (c = o * s),
                  u.nx < c && (u = d[++a]),
                  (r = u.y + ((c - u.x) / u.cx) * u.cy),
                  (p[o] = { x: c, cx: s, y: r, cy: 0, nx: 9 }),
                  o && (p[o - 1].cy = r - p[o - 1].y);
              p[n - 1].cy = d[d.length - 1].y - r;
            } else {
              for (o = 0; o < n; o++) u.nx < o * s && (u = d[++a]), (p[o] = u);
              a < d.length - 1 && (p[o - 1] = d[d.length - 2]);
            }
            return (
              (this.ease = function (e) {
                var t = p[(e * n) | 0] || p[n - 1];
                return t.nx < e && (t = t.n), t.y + ((e - t.x) / t.cx) * t.cy;
              }),
              (this.ease.custom = this),
              this.id && jr && jr.registerEase(this.id, this.ease),
              this
            );
          }),
          (t.getSVGData = function (t) {
            return e.getSVGData(this, t);
          }),
          (e.create = function (t, n, r) {
            return new e(t, n, r).ease;
          }),
          (e.register = function (e) {
            (jr = e), Hr();
          }),
          (e.get = function (e) {
            return jr.parseEase(e);
          }),
          (e.getSVGData = function (t, n) {
            var r,
              i,
              o,
              s,
              a,
              u,
              l,
              c,
              h,
              f,
              d = (n = n || {}).width || 100,
              p = n.height || 100,
              g = n.x || 0,
              v = (n.y || 0) + p,
              m = jr.utils.toArray(n.path)[0];
            if (
              (n.invert && ((p = -p), (v = 0)),
              "string" == typeof t && (t = jr.parseEase(t)),
              t.custom && (t = t.custom),
              t instanceof e)
            )
              r = qr(
                (function (e, t, n, r, i, o, s) {
                  for (var a, u, l, c, h, f = e.length; --f > -1; )
                    for (u = (a = e[f]).length, l = 0; l < u; l += 2)
                      (c = a[l]),
                        (h = a[l + 1]),
                        (a[l] = c * t + h * r + o),
                        (a[l + 1] = c * n + h * i + s);
                  return (e._dirty = 1), e;
                })([t.segment], d, 0, 0, -p, g, v)
              );
            else {
              for (
                r = [g, v],
                  s = 1 / (l = Math.max(5, 200 * (n.precision || 1))),
                  c = 5 / (l += 2),
                  h = Yr(g + s * d),
                  i = ((f = Yr(v + t(s) * -p)) - v) / (h - g),
                  o = 2;
                o < l;
                o++
              )
                (a = Yr(g + o * s * d)),
                  (u = Yr(v + t(o * s) * -p)),
                  (Math.abs((u - f) / (a - h) - i) > c || o === l - 1) &&
                    (r.push(h, f), (i = (u - f) / (a - h))),
                  (h = a),
                  (f = u);
              r = "M" + r.join(",");
            }
            return m && m.setAttribute("d", r), r;
          }),
          e
        );
      })();
    Nr() && jr.registerPlugin(Ur), (Ur.version = "3.10.4");
    var Gr =
      /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    function $r(e) {
      var t = e.nodeType,
        n = "";
      if (1 === t || 9 === t || 11 === t) {
        if ("string" == typeof e.textContent) return e.textContent;
        for (e = e.firstChild; e; e = e.nextSibling) n += $r(e);
      } else if (3 === t || 4 === t) return e.nodeValue;
      return n;
    }
    var Kr,
      Qr,
      Zr,
      Jr = /(?:\r|\n|\t\t)/g,
      ei = /(?:\s\s+)/g,
      ti = function (e) {
        return Qr.getComputedStyle(e);
      },
      ni = Array.isArray,
      ri = [].slice,
      ii = function (e, t) {
        var n;
        return ni(e)
          ? e
          : "string" == (n = typeof e) && !t && e
          ? ri.call(Kr.querySelectorAll(e), 0)
          : e && "object" === n && "length" in e
          ? ri.call(e, 0)
          : e
          ? [e]
          : [];
      },
      oi = function (e) {
        return "absolute" === e.position || !0 === e.absolute;
      },
      si = function (e, t) {
        for (var n, r = t.length; --r > -1; )
          if (((n = t[r]), e.substr(0, n.length) === n)) return n.length;
      },
      ai = function (e, t) {
        void 0 === e && (e = "");
        var n = ~e.indexOf("++"),
          r = 1;
        return (
          n && (e = e.split("++").join("")),
          function () {
            return (
              "<" +
              t +
              " style='position:relative;display:inline-block;'" +
              (e ? " class='" + e + (n ? r++ : "") + "'>" : ">")
            );
          }
        );
      },
      ui = function e(t, n, r) {
        var i = t.nodeType;
        if (1 === i || 9 === i || 11 === i)
          for (t = t.firstChild; t; t = t.nextSibling) e(t, n, r);
        else
          (3 !== i && 4 !== i) || (t.nodeValue = t.nodeValue.split(n).join(r));
      },
      li = function (e, t) {
        for (var n = t.length; --n > -1; ) e.push(t[n]);
      },
      ci = function (e, t, n) {
        for (var r; e && e !== t; ) {
          if ((r = e._next || e.nextSibling))
            return r.textContent.charAt(0) === n;
          e = e.parentNode || e._parent;
        }
      },
      hi = function e(t) {
        var n,
          r,
          i = ii(t.childNodes),
          o = i.length;
        for (n = 0; n < o; n++)
          (r = i[n])._isSplit
            ? e(r)
            : n && r.previousSibling && 3 === r.previousSibling.nodeType
            ? ((r.previousSibling.nodeValue +=
                3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue),
              t.removeChild(r))
            : 3 !== r.nodeType &&
              (t.insertBefore(r.firstChild, r), t.removeChild(r));
      },
      fi = function (e, t) {
        return parseFloat(t[e]) || 0;
      },
      di = function (e, t, n, r, i, o, s) {
        var a,
          u,
          l,
          c,
          h,
          f,
          d,
          p,
          g,
          v,
          m,
          y,
          D = ti(e),
          x = fi("paddingLeft", D),
          b = -999,
          _ = fi("borderBottomWidth", D) + fi("borderTopWidth", D),
          w = fi("borderLeftWidth", D) + fi("borderRightWidth", D),
          C = fi("paddingTop", D) + fi("paddingBottom", D),
          S = fi("paddingLeft", D) + fi("paddingRight", D),
          E = fi("fontSize", D) * (t.lineThreshold || 0.2),
          A = D.textAlign,
          T = [],
          F = [],
          P = [],
          k = t.wordDelimiter || " ",
          M = t.tag ? t.tag : t.span ? "span" : "div",
          B = t.type || t.split || "chars,words,lines",
          O = i && ~B.indexOf("lines") ? [] : null,
          R = ~B.indexOf("words"),
          I = ~B.indexOf("chars"),
          L = oi(t),
          q = t.linesClass,
          j = ~(q || "").indexOf("++"),
          V = [],
          N = "flex" === D.display,
          H = e.style.display;
        for (
          j && (q = q.split("++").join("")),
            N && (e.style.display = "block"),
            l = (u = e.getElementsByTagName("*")).length,
            h = [],
            a = 0;
          a < l;
          a++
        )
          h[a] = u[a];
        if (O || L)
          for (a = 0; a < l; a++)
            ((f = (c = h[a]).parentNode === e) || L || (I && !R)) &&
              ((y = c.offsetTop),
              O &&
                f &&
                Math.abs(y - b) > E &&
                ("BR" !== c.nodeName || 0 === a) &&
                ((d = []), O.push(d), (b = y)),
              L &&
                ((c._x = c.offsetLeft),
                (c._y = y),
                (c._w = c.offsetWidth),
                (c._h = c.offsetHeight)),
              O &&
                (((c._isSplit && f) ||
                  (!I && f) ||
                  (R && f) ||
                  (!R &&
                    c.parentNode.parentNode === e &&
                    !c.parentNode._isSplit)) &&
                  (d.push(c), (c._x -= x), ci(c, e, k) && (c._wordEnd = !0)),
                "BR" === c.nodeName &&
                  ((c.nextSibling && "BR" === c.nextSibling.nodeName) ||
                    0 === a) &&
                  O.push([])));
        for (a = 0; a < l; a++)
          if (((f = (c = h[a]).parentNode === e), "BR" !== c.nodeName))
            if (
              (L &&
                ((g = c.style),
                R ||
                  f ||
                  ((c._x += c.parentNode._x), (c._y += c.parentNode._y)),
                (g.left = c._x + "px"),
                (g.top = c._y + "px"),
                (g.position = "absolute"),
                (g.display = "block"),
                (g.width = c._w + 1 + "px"),
                (g.height = c._h + "px")),
              !R && I)
            )
              if (c._isSplit)
                for (
                  c._next = u = c.nextSibling, c.parentNode.appendChild(c);
                  u && 3 === u.nodeType && " " === u.textContent;

                )
                  (c._next = u.nextSibling),
                    c.parentNode.appendChild(u),
                    (u = u.nextSibling);
              else
                c.parentNode._isSplit
                  ? ((c._parent = c.parentNode),
                    !c.previousSibling &&
                      c.firstChild &&
                      (c.firstChild._isFirst = !0),
                    c.nextSibling &&
                      " " === c.nextSibling.textContent &&
                      !c.nextSibling.nextSibling &&
                      V.push(c.nextSibling),
                    (c._next =
                      c.nextSibling && c.nextSibling._isFirst
                        ? null
                        : c.nextSibling),
                    c.parentNode.removeChild(c),
                    h.splice(a--, 1),
                    l--)
                  : f ||
                    ((y = !c.nextSibling && ci(c.parentNode, e, k)),
                    c.parentNode._parent && c.parentNode._parent.appendChild(c),
                    y && c.parentNode.appendChild(Kr.createTextNode(" ")),
                    "span" === M && (c.style.display = "inline"),
                    T.push(c));
            else
              c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML
                ? F.push(c)
                : I &&
                  !c._isSplit &&
                  ("span" === M && (c.style.display = "inline"), T.push(c));
          else
            O || L
              ? (c.parentNode && c.parentNode.removeChild(c),
                h.splice(a--, 1),
                l--)
              : R || e.appendChild(c);
        for (a = V.length; --a > -1; ) V[a].parentNode.removeChild(V[a]);
        if (O) {
          for (
            L &&
              ((v = Kr.createElement(M)),
              e.appendChild(v),
              (m = v.offsetWidth + "px"),
              (y = v.offsetParent === e ? 0 : e.offsetLeft),
              e.removeChild(v)),
              g = e.style.cssText,
              e.style.cssText = "display:none;";
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (p = " " === k && (!L || (!R && !I)), a = 0; a < O.length; a++) {
            for (
              d = O[a],
                (v = Kr.createElement(M)).style.cssText =
                  "display:block;text-align:" +
                  A +
                  ";position:" +
                  (L ? "absolute;" : "relative;"),
                q && (v.className = q + (j ? a + 1 : "")),
                P.push(v),
                l = d.length,
                u = 0;
              u < l;
              u++
            )
              "BR" !== d[u].nodeName &&
                ((c = d[u]),
                v.appendChild(c),
                p && c._wordEnd && v.appendChild(Kr.createTextNode(" ")),
                L &&
                  (0 === u &&
                    ((v.style.top = c._y + "px"),
                    (v.style.left = x + y + "px")),
                  (c.style.top = "0px"),
                  y && (c.style.left = c._x - y + "px")));
            0 === l
              ? (v.innerHTML = "&nbsp;")
              : R || I || (hi(v), ui(v, String.fromCharCode(160), " ")),
              L && ((v.style.width = m), (v.style.height = c._h + "px")),
              e.appendChild(v);
          }
          e.style.cssText = g;
        }
        L &&
          (s > e.clientHeight &&
            ((e.style.height = s - C + "px"),
            e.clientHeight < s && (e.style.height = s + _ + "px")),
          o > e.clientWidth &&
            ((e.style.width = o - S + "px"),
            e.clientWidth < o && (e.style.width = o + w + "px"))),
          N && (H ? (e.style.display = H) : e.style.removeProperty("display")),
          li(n, T),
          R && li(r, F),
          li(i, P);
      },
      pi = function (e, t, n, r) {
        var i,
          o,
          s,
          a,
          u,
          l,
          c,
          h,
          f = t.tag ? t.tag : t.span ? "span" : "div",
          d = ~(t.type || t.split || "chars,words,lines").indexOf("chars"),
          p = oi(t),
          g = t.wordDelimiter || " ",
          v = " " !== g ? "" : p ? "&#173; " : " ",
          m = "</" + f + ">",
          y = 1,
          D = t.specialChars
            ? "function" == typeof t.specialChars
              ? t.specialChars
              : si
            : null,
          x = Kr.createElement("div"),
          b = e.parentNode;
        for (
          b.insertBefore(x, e),
            x.textContent = e.nodeValue,
            b.removeChild(e),
            c = -1 !== (i = $r((e = x))).indexOf("<"),
            !1 !== t.reduceWhiteSpace &&
              (i = i.replace(ei, " ").replace(Jr, "")),
            c && (i = i.split("<").join("{{LT}}")),
            u = i.length,
            o = (" " === i.charAt(0) ? v : "") + n(),
            s = 0;
          s < u;
          s++
        )
          if (((l = i.charAt(s)), D && (h = D(i.substr(s), t.specialChars))))
            (l = i.substr(s, h || 1)),
              (o += d && " " !== l ? r() + l + "</" + f + ">" : l),
              (s += h - 1);
          else if (l === g && i.charAt(s - 1) !== g && s) {
            for (o += y ? m : "", y = 0; i.charAt(s + 1) === g; ) (o += v), s++;
            s === u - 1
              ? (o += v)
              : ")" !== i.charAt(s + 1) && ((o += v + n()), (y = 1));
          } else
            "{" === l && "{{LT}}" === i.substr(s, 6)
              ? ((o += d ? r() + "{{LT}}</" + f + ">" : "{{LT}}"), (s += 5))
              : (l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319) ||
                (i.charCodeAt(s + 1) >= 65024 && i.charCodeAt(s + 1) <= 65039)
              ? ((a = ((i.substr(s, 12).split(Gr) || [])[1] || "").length || 2),
                (o +=
                  d && " " !== l
                    ? r() + i.substr(s, a) + "</" + f + ">"
                    : i.substr(s, a)),
                (s += a - 1))
              : (o += d && " " !== l ? r() + l + "</" + f + ">" : l);
        (e.outerHTML = o + (y ? m : "")), c && ui(b, "{{LT}}", "<");
      },
      gi = function e(t, n, r, i) {
        var o,
          s,
          a = ii(t.childNodes),
          u = a.length,
          l = oi(n);
        if (3 !== t.nodeType || u > 1) {
          for (n.absolute = !1, o = 0; o < u; o++)
            ((s = a[o])._next = s._isFirst = s._parent = s._wordEnd = null),
              (3 !== s.nodeType || /\S+/.test(s.nodeValue)) &&
                (l &&
                  3 !== s.nodeType &&
                  "inline" === ti(s).display &&
                  ((s.style.display = "inline-block"),
                  (s.style.position = "relative")),
                (s._isSplit = !0),
                e(s, n, r, i));
          return (n.absolute = l), void (t._isSplit = !0);
        }
        pi(t, n, r, i);
      },
      vi = (function () {
        function e(e, t) {
          Zr || ((Kr = document), (Qr = window), (Zr = 1)),
            (this.elements = ii(e)),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this._originals = []),
            (this.vars = t || {}),
            this.split(t);
        }
        var t = e.prototype;
        return (
          (t.split = function (e) {
            this.isSplit && this.revert(),
              (this.vars = e = e || this.vars),
              (this._originals.length =
                this.chars.length =
                this.words.length =
                this.lines.length =
                  0);
            for (
              var t,
                n,
                r,
                i = this.elements.length,
                o = e.tag ? e.tag : e.span ? "span" : "div",
                s = ai(e.wordsClass, o),
                a = ai(e.charsClass, o);
              --i > -1;

            )
              (r = this.elements[i]),
                (this._originals[i] = r.innerHTML),
                (t = r.clientHeight),
                (n = r.clientWidth),
                gi(r, e, s, a),
                di(r, e, this.chars, this.words, this.lines, n, t);
            return (
              this.chars.reverse(),
              this.words.reverse(),
              this.lines.reverse(),
              (this.isSplit = !0),
              this
            );
          }),
          (t.revert = function () {
            var e = this._originals;
            if (!e) throw "revert() call wasn't scoped properly.";
            return (
              this.elements.forEach(function (t, n) {
                return (t.innerHTML = e[n]);
              }),
              (this.chars = []),
              (this.words = []),
              (this.lines = []),
              (this.isSplit = !1),
              this
            );
          }),
          (e.create = function (t, n) {
            return new e(t, n);
          }),
          e
        );
      })();
    vi.version = "3.10.4";
    var mi,
      yi,
      Di,
      xi,
      bi,
      _i,
      wi = function () {
        return "undefined" != typeof window;
      },
      Ci = function () {
        return mi || (wi() && (mi = window.gsap) && mi.registerPlugin && mi);
      },
      Si = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      Ei = {
        rect: ["width", "height"],
        circle: ["r", "r"],
        ellipse: ["rx", "ry"],
        line: ["x2", "y2"],
      },
      Ai = function (e) {
        return Math.round(1e4 * e) / 1e4;
      },
      Ti = function (e) {
        return parseFloat(e) || 0;
      },
      Fi = function (e, t) {
        var n = Ti(e);
        return ~e.indexOf("%") ? (n / 100) * t : n;
      },
      Pi = function (e, t) {
        return Ti(e.getAttribute(t));
      },
      ki = Math.sqrt,
      Mi = function (e, t, n, r, i, o) {
        return ki(
          Math.pow((Ti(n) - Ti(e)) * i, 2) + Math.pow((Ti(r) - Ti(t)) * o, 2)
        );
      },
      Bi = function (e) {
        return console.warn(e);
      },
      Oi = function (e) {
        return "non-scaling-stroke" === e.getAttribute("vector-effect");
      },
      Ri = function (e) {
        if (!(e = yi(e)[0])) return 0;
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          u = e.tagName.toLowerCase(),
          l = e.style,
          c = 1,
          h = 1;
        Oi(e) &&
          ((h = e.getScreenCTM()),
          (c = ki(h.a * h.a + h.b * h.b)),
          (h = ki(h.d * h.d + h.c * h.c)));
        try {
          n = e.getBBox();
        } catch (e) {
          Bi(
            "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
          );
        }
        var f = n || { x: 0, y: 0, width: 0, height: 0 },
          d = f.x,
          p = f.y,
          g = f.width,
          v = f.height;
        if (
          ((n && (g || v)) ||
            !Ei[u] ||
            ((g = Pi(e, Ei[u][0])),
            (v = Pi(e, Ei[u][1])),
            "rect" !== u && "line" !== u && ((g *= 2), (v *= 2)),
            "line" === u &&
              ((d = Pi(e, "x1")),
              (p = Pi(e, "y1")),
              (g = Math.abs(g - d)),
              (v = Math.abs(v - p)))),
          "path" === u)
        )
          (i = l.strokeDasharray),
            (l.strokeDasharray = "none"),
            (t = e.getTotalLength() || 0),
            Ai(c) !== Ai(h) &&
              !_i &&
              (_i = 1) &&
              Bi(
                "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
              ),
            (t *= (c + h) / 2),
            (l.strokeDasharray = i);
        else if ("rect" === u) t = 2 * g * c + 2 * v * h;
        else if ("line" === u) t = Mi(d, p, d + g, p + v, c, h);
        else if ("polyline" === u || "polygon" === u)
          for (
            r = e.getAttribute("points").match(Si) || [],
              "polygon" === u && r.push(r[0], r[1]),
              t = 0,
              o = 2;
            o < r.length;
            o += 2
          )
            t += Mi(r[o - 2], r[o - 1], r[o], r[o + 1], c, h) || 0;
        else
          ("circle" !== u && "ellipse" !== u) ||
            ((s = (g / 2) * c),
            (a = (v / 2) * h),
            (t = Math.PI * (3 * (s + a) - ki((3 * s + a) * (s + 3 * a)))));
        return t || 0;
      },
      Ii = function (e, t) {
        if (!(e = yi(e)[0])) return [0, 0];
        t || (t = Ri(e) + 1);
        var n = Di.getComputedStyle(e),
          r = n.strokeDasharray || "",
          i = Ti(n.strokeDashoffset),
          o = r.indexOf(",");
        return (
          o < 0 && (o = r.indexOf(" ")),
          (r = o < 0 ? t : Ti(r.substr(0, o))) > t && (r = t),
          [-i || 0, r - i || 0]
        );
      },
      Li = function () {
        wi() &&
          (document,
          (Di = window),
          (bi = mi = Ci()),
          (yi = mi.utils.toArray),
          (xi = -1 !== ((Di.navigator || {}).userAgent || "").indexOf("Edge")));
      },
      qi = {
        version: "3.10.4",
        name: "drawSVG",
        register: function (e) {
          (mi = e), Li();
        },
        init: function (e, t, n, r, i) {
          if (!e.getBBox) return !1;
          bi || Li();
          var o,
            s,
            a,
            u = Ri(e);
          return (
            (this._style = e.style),
            (this._target = e),
            t + "" == "true"
              ? (t = "0 100%")
              : t
              ? -1 === (t + "").indexOf(" ") && (t = "0 " + t)
              : (t = "0 0"),
            (s = (function (e, t, n) {
              var r,
                i,
                o = e.indexOf(" ");
              return (
                o < 0
                  ? ((r = void 0 !== n ? n + "" : e), (i = e))
                  : ((r = e.substr(0, o)), (i = e.substr(o + 1))),
                (r = Fi(r, t)) > (i = Fi(i, t)) ? [i, r] : [r, i]
              );
            })(t, u, (o = Ii(e, u))[0])),
            (this._length = Ai(u)),
            (this._dash = Ai(o[1] - o[0])),
            (this._offset = Ai(-o[0])),
            (this._dashPT = this.add(
              this,
              "_dash",
              this._dash,
              Ai(s[1] - s[0])
            )),
            (this._offsetPT = this.add(
              this,
              "_offset",
              this._offset,
              Ai(-s[0])
            )),
            xi &&
              (a = Di.getComputedStyle(e)).strokeLinecap !== a.strokeLinejoin &&
              ((s = Ti(a.strokeMiterlimit)),
              this.add(e.style, "strokeMiterlimit", s, s + 0.01)),
            (this._live = Oi(e) || ~(t + "").indexOf("live")),
            (this._nowrap = ~(t + "").indexOf("nowrap")),
            this._props.push("drawSVG"),
            1
          );
        },
        render: function (e, t) {
          var n,
            r,
            i,
            o,
            s = t._pt,
            a = t._style;
          if (s) {
            for (
              t._live &&
              (n = Ri(t._target)) !== t._length &&
              ((r = n / t._length),
              (t._length = n),
              t._offsetPT && ((t._offsetPT.s *= r), (t._offsetPT.c *= r)),
              t._dashPT
                ? ((t._dashPT.s *= r), (t._dashPT.c *= r))
                : (t._dash *= r));
              s;

            )
              s.r(e, s.d), (s = s._next);
            (i = t._dash || (e && 1 !== e && 1e-4) || 0),
              (n = t._length - i + 0.1),
              (o = t._offset),
              i &&
                o &&
                i + Math.abs(o % t._length) > t._length - 0.2 &&
                (o += o < 0 ? 0.1 : -0.1) &&
                (n += 0.1),
              (a.strokeDashoffset = i ? o : o + 0.001),
              (a.strokeDasharray =
                n < 0.2
                  ? "none"
                  : i
                  ? i + "px," + (t._nowrap ? 999999 : n) + "px"
                  : "0px, 999999px");
          }
        },
        getLength: Ri,
        getPosition: Ii,
      };
    Ci() && mi.registerPlugin(qi),
      Sr.registerPlugin(Ur),
      Sr.registerPlugin(vi),
      Sr.registerPlugin(qi),
      Ur.create("app.inOut", ".51,0,.58,1"),
      Ur.create("app.out", ".33,0,.18,1"),
      Ur.create("app.ease", ".33,0,.67,1"),
      Ur.create("avtrs.app", ".645, .045, .355, 1"),
      Sr.defaults({ duration: 0.4, ease: "power2.out" });
    const ji = window.innerWidth,
      Vi = (window.innerHeight, window.innerWidth > 1100);
    window.innerWidth,
      /constructor/i.test(window.HTMLElement) ||
        (
          !window.safari ||
          ("undefined" != typeof safari && window.safari.pushNotification)
        ).toString();
    Number.prototype.pad = function (e) {
      return this.toString().padStart(e, "0");
    };
    window.addEventListener(
      "resize",
      (function (e, t, n) {
        let r;
        return function () {
          const i = this,
            o = arguments,
            s = function () {
              (r = null), n || e.apply(i, o);
            },
            a = n && !r;
          clearTimeout(r), (r = setTimeout(s, t)), a && e.apply(i, o);
        };
      })(() => {
        const e = window.innerWidth > 1100;
        window.innerWidth === ji ||
          (!e && e === Vi) ||
          setTimeout(() => {
            window.location.reload();
          }, 0);
      }, 600)
    );
    const Ni = (e, t) =>
      Sr.timeline({ defaults: { ease: "power4.out", duration: 1.2 } })
        .fromTo(e, { y: 0 }, { y: "-100%", immediateRender: !1 })
        .fromTo(t, { y: "100%" }, { y: 0, immediateRender: !1 }, "<.12");
    let Hi = null;
    const Yi = () => {
      const e = document.querySelector("#prldr .lines svg path"),
        t = document.querySelectorAll("#prldr .prgs .nmbr"),
        n = (-10 / 11) * 100;
      Hi = Sr.timeline({
        paused: 1,
        onUpdate: () => {},
        defaults: { ease: "none" },
      })
        .add("s")
        .add(
          ((e, t) => {
            const n = e.getTotalLength();
            return (
              (e.style.strokeDasharray = n),
              Sr.fromTo(
                e,
                { strokeDashoffset: n },
                { strokeDashoffset: 0, ease: "none", duration: t || 1 }
              )
            );
          })(e, 10),
          "s"
        )
        .to(t[2], { y: n + "%", duration: 1 }, "s");
      for (let e = 0; e < 9; e++)
        Hi.fromTo(t[2], { y: 0 }, { y: n + "%", duration: 1 }, ">");
      Hi.to(t[1], { y: n + "%", duration: 10 }, "s").to(
        t[0],
        { y: "-50%", duration: 3 },
        "s+=7"
      );
    };
    function Wi(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var zi,
      Xi,
      Ui,
      Gi,
      $i,
      Ki,
      Qi,
      Zi,
      Ji,
      eo,
      to,
      no,
      ro,
      io = function () {
        return "undefined" != typeof window;
      },
      oo = function () {
        return zi || (io() && (zi = window.gsap) && zi.registerPlugin && zi);
      },
      so =
        (Date.now,
        function (e) {
          var t = Gi.querySelector(".ScrollSmoother-wrapper");
          return (
            t ||
              ((t = Gi.createElement("div")).classList.add(
                "ScrollSmoother-wrapper"
              ),
              e.parentNode.insertBefore(t, e),
              t.appendChild(e)),
            t
          );
        }),
      ao = (function () {
        function e(t) {
          var n = this;
          Xi ||
            e.register(zi) ||
            console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
            (t = this.vars = t || {}),
            eo && eo.kill(),
            (eo = this);
          var r,
            i,
            o,
            s,
            a,
            u,
            l,
            c,
            h,
            f,
            d,
            p,
            g,
            v,
            m = t,
            y = m.smoothTouch,
            D = m.onUpdate,
            x = m.onStop,
            b = m.smooth,
            _ = m.onFocusIn,
            w = m.normalizeScroll,
            C = Ji.getScrollFunc(Ui),
            S =
              1 === Ji.isTouch
                ? !0 === y
                  ? 0.8
                  : parseFloat(y) || 0
                : 0 === b || !1 === b
                ? 0
                : parseFloat(b) || 0.8,
            E = 0,
            A = 0,
            T = 1,
            F = no(0),
            P = function () {
              return F.update(-E);
            },
            k = { y: 0 },
            M = function () {
              return (r.style.overflow = "visible");
            },
            B = function (e) {
              e.update();
              var t = e.getTween();
              t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)),
                (g = !1),
                e.animation.progress(e.progress, !0);
            },
            O = function (e, t) {
              ((e !== E && !f) || t) &&
                (S &&
                  (r.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    e +
                    ", 0, 1)"),
                (A = e - E),
                (E = e),
                Ji.isUpdating || Ji.update());
            },
            R = function (e) {
              return arguments.length
                ? (f ? (E = -e) : O(-e), (k.y = -e), (g = !0), C(e), this)
                : -E - C.offset;
            },
            I = function (e) {
              (i.scrollTop = 0),
                (_ && !1 === _(n, e)) ||
                  (Ji.isInViewport(e.target) ||
                    e.target === v ||
                    n.scrollTo(e.target, !1, "center center"),
                  (v = e.target));
            },
            L = function (e, t) {
              var n, r, i, o;
              a.forEach(function (t) {
                (n = t.pins),
                  (o = t.markers),
                  e.forEach(function (e) {
                    (e.trigger !== t.trigger &&
                      e.pinnedContainer !== t.trigger) ||
                      t === e ||
                      ((r = e.start),
                      (i = (r - t.start - t.offset) / t.ratio - (r - t.start)),
                      n.forEach(function (e) {
                        return (i -= e.distance / t.ratio - e.distance);
                      }),
                      e.setPositions(r + i, e.end + i),
                      e.markerStart &&
                        o.push(
                          zi.quickSetter(
                            [e.markerStart, e.markerEnd],
                            "y",
                            "px"
                          )
                        ),
                      e.pin &&
                        e.end > 0 &&
                        ((i = e.end - e.start),
                        n.push({
                          start: e.start,
                          end: e.end,
                          distance: i,
                          trig: e,
                        }),
                        t.setPositions(t.start, t.end + i),
                        t.vars.onRefresh(t)));
                  });
              });
            },
            q = function () {
              M(),
                requestAnimationFrame(M),
                a &&
                  (a.forEach(function (e) {
                    var t = e.start,
                      n = e.auto
                        ? Math.min(Ji.maxScroll(e.scroller), e.end)
                        : t + (e.end - t) / e.ratio,
                      r = (n - e.end) / 2;
                    (t -= r),
                      (n -= r),
                      (e.offset = r || 1e-4),
                      (e.pins.length = 0),
                      e.setPositions(Math.min(t, n), Math.max(t, n)),
                      e.vars.onRefresh(e);
                  }),
                  L(Ji.sort())),
                F.reset();
            },
            j = function () {
              return (
                a &&
                a.forEach(function (e) {
                  return e.vars.onRefresh(e);
                })
              );
            },
            V = function () {
              return (
                a &&
                  a.forEach(function (e) {
                    return e.vars.onRefreshInit(e);
                  }),
                j
              );
            },
            N = function (e, t, n, r) {
              return function () {
                var i = "function" == typeof t ? t(n, r) : t;
                return (
                  i ||
                    0 === i ||
                    (i =
                      r.getAttribute("data-" + e) || ("speed" === e ? 1 : 0)),
                  r.setAttribute("data-" + e, i),
                  "auto" === i ? i : parseFloat(i)
                );
              };
            },
            H = function (e, t, n, r) {
              var o,
                s,
                u,
                l,
                c,
                h,
                f = N("speed", t, r, e),
                d = N("lag", n, r, e),
                p = zi.getProperty(e, "y"),
                g = e._gsap,
                v = function () {
                  (t = f()),
                    (n = d()),
                    (o = parseFloat(t) || 1),
                    (c = (u = "auto" === t) ? 0 : 0.5),
                    l && l.kill(),
                    (l =
                      n &&
                      zi.to(e, {
                        ease: to,
                        overwrite: !1,
                        y: "+=0",
                        duration: n,
                      })),
                    s && ((s.ratio = o), (s.autoSpeed = u));
                },
                m = function () {
                  (g.y = p + "px"), g.renderTransform(1), v();
                },
                y = [],
                D = [],
                x = 0,
                b = function (t) {
                  if (u) {
                    m();
                    var n = (function (e, t) {
                      var n,
                        r,
                        i = e.parentNode || $i,
                        o = e.getBoundingClientRect(),
                        s = i.getBoundingClientRect(),
                        a = s.top - o.top,
                        u = s.bottom - o.bottom,
                        l = (Math.abs(a) > Math.abs(u) ? a : u) / (1 - t),
                        c = -l * t;
                      return (
                        l > 0 &&
                          ((c +=
                            -(r =
                              0.5 ==
                              (n = s.height / (Ui.innerHeight + s.height))
                                ? 2 * s.height
                                : 2 *
                                  Math.min(s.height, (-l * n) / (2 * n - 1))) /
                            2),
                          (l += r)),
                        { change: l, offset: c }
                      );
                    })(e, Zi(0, 1, -t.start / (t.end - t.start)));
                    (x = n.change), (h = n.offset);
                  } else (x = (t.end - t.start) * (1 - o)), (h = 0);
                  y.forEach(function (e) {
                    return (x -= e.distance * (1 - o));
                  }),
                    t.vars.onUpdate(t),
                    l && l.progress(1);
                };
              return (
                v(),
                (1 !== o || u || l) &&
                  (b(
                    (s = Ji.create({
                      trigger: u ? e.parentNode : e,
                      scroller: i,
                      scrub: !0,
                      refreshPriority: -999,
                      onRefreshInit: m,
                      onRefresh: b,
                      onKill: function (e) {
                        var t = a.indexOf(e);
                        t >= 0 && a.splice(t, 1), m();
                      },
                      onUpdate: function (e) {
                        var t,
                          n,
                          r,
                          i,
                          o = p + x * (e.progress - c),
                          s = y.length,
                          a = 0;
                        if (e.offset) {
                          if (s) {
                            for (n = -E, r = e.end; s--; ) {
                              if (
                                (t = y[s]).trig.isActive ||
                                (n >= t.start && n <= t.end)
                              )
                                return void (
                                  l &&
                                  ((t.trig.progress +=
                                    t.trig.direction < 0 ? 0.001 : -0.001),
                                  t.trig.update(0, 0, 1),
                                  l.resetTo("y", parseFloat(g.y), -A, !0),
                                  T && l.progress(1))
                                );
                              n > t.end && (a += t.distance), (r -= t.distance);
                            }
                            o =
                              p +
                              a +
                              x *
                                ((zi.utils.clamp(e.start, e.end, n) -
                                  e.start -
                                  a) /
                                  (r - e.start) -
                                  c);
                          }
                          (i = o + h),
                            (o = Math.round(1e5 * i) / 1e5 || 0),
                            D.length &&
                              !u &&
                              D.forEach(function (e) {
                                return e(o - a);
                              }),
                            l
                              ? (l.resetTo("y", o, -A, !0), T && l.progress(1))
                              : ((g.y = o + "px"), g.renderTransform(1));
                        }
                      },
                    }))
                  ),
                  (zi.core.getCache(s.trigger).stRevert = V),
                  (s.startY = p),
                  (s.pins = y),
                  (s.markers = D),
                  (s.ratio = o),
                  (s.autoSpeed = u),
                  (e.style.willChange = "transform")),
                s
              );
            };
          function Y() {
            return (
              (o = r.clientHeight),
              (r.style.overflow = "visible"),
              (Ki.style.height = o + "px"),
              o - Ui.innerHeight
            );
          }
          Ji.addEventListener("refresh", q),
            zi.delayedCall(0.5, function () {
              return (T = 0);
            }),
            (this.scrollTop = R),
            (this.scrollTo = function (e, t, r) {
              var i = zi.utils.clamp(
                0,
                Ji.maxScroll(Ui),
                isNaN(e) ? n.offset(e, r) : +e
              );
              t
                ? f
                  ? zi.to(n, {
                      duration: S,
                      scrollTop: i,
                      overwrite: "auto",
                      ease: to,
                    })
                  : C(i)
                : R(i);
            }),
            (this.offset = function (e, t) {
              var n,
                r = (e = Qi(e)[0]).style.cssText,
                i = Ji.create({ trigger: e, start: t || "top top" });
              return (
                a && L([i]),
                (n = i.start),
                i.kill(!1),
                (e.style.cssText = r),
                (zi.core.getCache(e).uncache = 1),
                n
              );
            }),
            (this.content = function (e) {
              if (arguments.length) {
                var t = Qi(e || "#smooth-content")[0] || Ki.children[0];
                return (
                  t !== r &&
                    ((h = (r = t).getAttribute("style") || ""),
                    zi.set(r, {
                      overflow: "visible",
                      width: "100%",
                      boxSizing: "border-box",
                    })),
                  this
                );
              }
              return r;
            }),
            (this.wrapper = function (e) {
              return arguments.length
                ? ((i = Qi(e || "#smooth-wrapper")[0] || so(r)),
                  (c = i.getAttribute("style") || ""),
                  Y(),
                  zi.set(
                    i,
                    S
                      ? {
                          overflow: "hidden",
                          position: "fixed",
                          height: "100%",
                          width: "100%",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                        }
                      : {
                          overflow: "visible",
                          position: "relative",
                          width: "100%",
                          height: "auto",
                          top: "auto",
                          bottom: "auto",
                          left: "auto",
                          right: "auto",
                        }
                  ),
                  this)
                : i;
            }),
            (this.effects = function (e, t) {
              var n;
              if ((a || (a = []), !e)) return a.slice(0);
              (e = Qi(e)).forEach(function (e) {
                for (var t = a.length; t--; )
                  a[t].trigger === e && (a[t].kill(), a.splice(t, 1));
              });
              var r,
                i,
                o = (t = t || {}),
                s = o.speed,
                u = o.lag,
                l = [];
              for (r = 0; r < e.length; r++)
                (i = H(e[r], s, u, r)) && l.push(i);
              return (n = a).push.apply(n, l), l;
            }),
            (this.sections = function (e, t) {
              var n;
              if ((u || (u = []), !e)) return u.slice(0);
              var r = Qi(e).map(function (e) {
                return Ji.create({
                  trigger: e,
                  start: "top 120%",
                  end: "bottom -20%",
                  onToggle: function (t) {
                    (e.style.opacity = t.isActive ? "1" : "0"),
                      (e.style.pointerEvents = t.isActive ? "all" : "none");
                  },
                });
              });
              return (
                t && t.add ? (n = u).push.apply(n, r) : (u = r.slice(0)), r
              );
            }),
            this.content(t.content),
            this.wrapper(t.wrapper),
            (this.render = function (e) {
              return O(e || 0 === e ? e : E);
            }),
            (this.getVelocity = function () {
              return F.getVelocity(-E);
            }),
            Ji.scrollerProxy(i, {
              scrollTop: R,
              scrollHeight: function () {
                return Y() && Ki.scrollHeight;
              },
              fixedMarkers: !1 !== t.fixedMarkers && !!S,
              content: r,
              getBoundingClientRect: function () {
                return {
                  top: 0,
                  left: 0,
                  width: Ui.innerWidth,
                  height: Ui.innerHeight,
                };
              },
            }),
            Ji.defaults({ scroller: i });
          var W = Ji.getAll().filter(function (e) {
            return e.scroller === Ui || e.scroller === i;
          });
          W.forEach(function (e) {
            return e.revert(!0);
          }),
            (s = Ji.create({
              animation: zi.to(k, {
                y: function () {
                  return -Y();
                },
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                onUpdate: function () {
                  var e = g;
                  e && ((k.y = E), B(s)), O(k.y, e), P(), D && !f && D(n);
                },
              }),
              onRefreshInit: function () {
                (p = E), (k.y = i.scrollTop = 0);
              },
              id: "ScrollSmoother",
              scroller: Ui,
              invalidateOnRefresh: !0,
              start: 0,
              refreshPriority: -9999,
              end: Y,
              onScrubComplete: function () {
                F.reset(), x && x(n);
              },
              scrub: S || !0,
              onRefresh: function (e) {
                B(e),
                  (k.y = -C()),
                  O(k.y),
                  T || e.animation.progress(zi.utils.clamp(0, 1, p / -e.end));
              },
            })),
            (this.smooth = function (e) {
              return (
                (S = e),
                arguments.length
                  ? s.scrubDuration(e)
                  : s.getTween()
                  ? s.getTween().duration()
                  : 0
              );
            }),
            s.getTween() && (s.getTween().vars.ease = t.ease || to),
            (this.scrollTrigger = s),
            t.effects &&
              this.effects(
                !0 === t.effects ? "[data-speed], [data-lag]" : t.effects,
                {}
              ),
            t.sections &&
              this.sections(!0 === t.sections ? "[data-section]" : t.sections),
            W.forEach(function (e) {
              (e.vars.scroller = i), e.init(e.vars, e.animation);
            }),
            (this.paused = function (e, t) {
              return arguments.length
                ? (!!f !== e &&
                    (e
                      ? (s.getTween() && s.getTween().pause(),
                        C(-E),
                        F.reset(),
                        (d = Ji.normalizeScroll()) && d.disable(),
                        ((f = Ji.observe({
                          preventDefault: !0,
                          type: "wheel,touch,scroll",
                          debounce: !1,
                          allowClicks: !0,
                          onChangeY: function () {
                            return R(-E);
                          },
                        })).nested = ro(
                          $i,
                          "wheel,touch,scroll",
                          !0,
                          !1 !== t
                        )))
                      : (f.nested.kill(),
                        f.kill(),
                        (f = 0),
                        d && d.enable(),
                        (s.progress = (-E - s.start) / (s.end - s.start)),
                        B(s))),
                  this)
                : !!f;
            }),
            (this.kill = function () {
              n.paused(!1), B(s), s.kill();
              for (var e = (a || []).concat(u || []), t = e.length; t--; )
                e[t].kill();
              Ji.scrollerProxy(i),
                Ji.removeEventListener("refresh", q),
                Ki.style.removeProperty("height"),
                (i.style.cssText = c),
                (r.style.cssText = h);
              var o = Ji.defaults({});
              o && o.scroller === i && Ji.defaults({ scroller: Ui }),
                n.normalizer && Ji.normalizeScroll(!1),
                clearInterval(l),
                (eo = null),
                Ui.removeEventListener("focusin", I);
            }),
            (this.refresh = function (e, t) {
              return s.refresh(e, t);
            }),
            w &&
              (this.normalizer = Ji.normalizeScroll(
                !0 === w ? { debounce: !0, content: r } : w
              )),
            Ji.config(t),
            "overscrollBehavior" in Ui.getComputedStyle(Ki) &&
              zi.set([Ki, $i], { overscrollBehavior: "none" }),
            "scrollBehavior" in Ui.getComputedStyle(Ki) &&
              zi.set([Ki, $i], { scrollBehavior: "auto" }),
            Ui.addEventListener("focusin", I),
            (l = setInterval(P, 250)),
            "loading" === Gi.readyState ||
              requestAnimationFrame(function () {
                return Ji.refresh();
              });
        }
        var t, n, r;
        return (
          (e.register = function (t) {
            return (
              Xi ||
                ((zi = t || oo()),
                io() &&
                  window.document &&
                  ((Ui = window),
                  (Gi = document),
                  ($i = Gi.documentElement),
                  (Ki = Gi.body)),
                zi &&
                  ((Qi = zi.utils.toArray),
                  (Zi = zi.utils.clamp),
                  (to = zi.parseEase("expo")),
                  (Ji = zi.core.globals().ScrollTrigger),
                  zi.core.globals("ScrollSmoother", e),
                  Ki &&
                    Ji &&
                    ([Ui, Gi, $i, Ki],
                    (no = Ji.core._getVelocityProp),
                    (ro = Ji.core._inputObserver),
                    (e.refresh = Ji.refresh),
                    (Xi = 1)))),
              Xi
            );
          }),
          (t = e),
          (n = [
            {
              key: "progress",
              get: function () {
                return this.scrollTrigger.animation._time / 100;
              },
            },
          ]) && Wi(t.prototype, n),
          r && Wi(t, r),
          e
        );
      })();
    function uo(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    (ao.version = "3.10.4"),
      (ao.create = function (e) {
        return eo && e && eo.content() === Qi(e.content)[0] ? eo : new ao(e);
      }),
      (ao.get = function () {
        return eo;
      }),
      oo() && zi.registerPlugin(ao);
    var lo,
      co,
      ho,
      fo,
      po,
      go,
      vo,
      mo,
      yo,
      Do,
      xo,
      bo,
      _o = function () {
        return (
          lo ||
          ("undefined" != typeof window &&
            (lo = window.gsap) &&
            lo.registerPlugin &&
            lo)
        );
      },
      wo = 1,
      Co = [],
      So = [],
      Eo = [],
      Ao = Date.now,
      To = function (e, t) {
        return t;
      },
      Fo = function (e, t) {
        return ~Eo.indexOf(e) && Eo[Eo.indexOf(e) + 1][t];
      },
      Po = function (e) {
        return !!~Do.indexOf(e);
      },
      ko = function (e, t, n, r, i) {
        return e.addEventListener(t, n, { passive: !r, capture: !!i });
      },
      Mo = function (e, t, n, r) {
        return e.removeEventListener(t, n, !!r);
      },
      Bo = "scrollLeft",
      Oo = "scrollTop",
      Ro = function () {
        return (xo && xo.isPressed) || So.cache++;
      },
      Io = function (e, t) {
        var n = function n(r) {
          if (r || 0 === r) {
            wo && (ho.history.scrollRestoration = "manual");
            var i = xo && xo.isPressed;
            (r = n.v = Math.round(r) || (xo && xo.iOS ? 1 : 0)),
              e(r),
              (n.cacheID = So.cache),
              i && To("ss", r);
          } else
            (t || So.cache !== n.cacheID || To("ref")) &&
              ((n.cacheID = So.cache), (n.v = e()));
          return n.v + n.offset;
        };
        return (n.offset = 0), e && n;
      },
      Lo = {
        s: Bo,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: Io(function (e) {
          return arguments.length
            ? ho.scrollTo(e, qo.sc())
            : ho.pageXOffset || fo[Bo] || po[Bo] || go[Bo] || 0;
        }),
      },
      qo = {
        s: Oo,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Lo,
        sc: Io(function (e) {
          return arguments.length
            ? ho.scrollTo(Lo.sc(), e)
            : ho.pageYOffset || fo[Oo] || po[Oo] || go[Oo] || 0;
        }),
      },
      jo = function (e) {
        return (
          lo.utils.toArray(e)[0] ||
          ("string" == typeof e && !1 !== lo.config().nullTargetWarn
            ? console.warn("Element not found:", e)
            : null)
        );
      },
      Vo = function (e, t) {
        var n = t.s,
          r = t.sc,
          i = So.indexOf(e),
          o = r === qo.sc ? 1 : 2;
        return (
          !~i && (i = So.push(e) - 1),
          So[i + o] ||
            (So[i + o] =
              Io(Fo(e, n), !0) ||
              (Po(e)
                ? r
                : Io(function (t) {
                    return arguments.length ? (e[n] = t) : e[n];
                  })))
        );
      },
      No = function (e, t, n) {
        var r = e,
          i = e,
          o = Ao(),
          s = o,
          a = t || 50,
          u = Math.max(500, 3 * a),
          l = function (e, t) {
            var u = Ao();
            t || u - o > a
              ? ((i = r), (r = e), (s = o), (o = u))
              : n
              ? (r += e)
              : (r = i + ((e - i) / (u - s)) * (o - s));
          };
        return {
          update: l,
          reset: function () {
            (i = r = n ? 0 : r), (s = o = 0);
          },
          getVelocity: function (e) {
            var t = s,
              a = i,
              c = Ao();
            return (
              (e || 0 === e) && e !== r && l(e),
              o === s || c - s > u
                ? 0
                : ((r + (n ? a : -a)) / ((n ? c : o) - t)) * 1e3
            );
          },
        };
      },
      Ho = function (e, t) {
        return (
          t && !e._gsapAllow && e.preventDefault(),
          e.changedTouches ? e.changedTouches[0] : e
        );
      },
      Yo = function (e) {
        var t = Math.max.apply(Math, e),
          n = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(n) ? t : n;
      },
      Wo = function () {
        var e, t, n, r;
        (yo = lo.core.globals().ScrollTrigger) &&
          yo.core &&
          ((e = yo.core),
          (t = e.bridge || {}),
          (n = e._scrollers),
          (r = e._proxies),
          n.push.apply(n, So),
          r.push.apply(r, Eo),
          (So = n),
          (Eo = r),
          (To = function (e, n) {
            return t[e](n);
          }));
      },
      zo = function (e) {
        return (
          (lo = e || _o()) &&
            "undefined" != typeof document &&
            document.body &&
            ((ho = window),
            (fo = document),
            (po = fo.documentElement),
            (go = fo.body),
            (Do = [ho, fo, po, go]),
            lo.utils.clamp,
            (mo = "onpointerenter" in go ? "pointer" : "mouse"),
            (vo = Xo.isTouch =
              ho.matchMedia &&
              ho.matchMedia("(hover: none), (pointer: coarse)").matches
                ? 1
                : "ontouchstart" in ho ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0
                ? 2
                : 0),
            (bo = Xo.eventTypes =
              (
                "ontouchstart" in po
                  ? "touchstart,touchmove,touchcancel,touchend"
                  : "onpointerdown" in po
                  ? "pointerdown,pointermove,pointercancel,pointerup"
                  : "mousedown,mousemove,mouseup,mouseup"
              ).split(",")),
            setTimeout(function () {
              return (wo = 0);
            }, 500),
            Wo(),
            (co = 1)),
          co
        );
      };
    (Lo.op = qo), (So.cache = 0);
    var Xo = (function () {
      function e(e) {
        this.init(e);
      }
      var t, n, r;
      return (
        (e.prototype.init = function (e) {
          co || zo(lo) || console.warn("Please gsap.registerPlugin(Observer)"),
            yo || Wo();
          var t = e.tolerance,
            n = e.dragMinimum,
            r = e.type,
            i = e.target,
            o = e.lineHeight,
            s = e.debounce,
            a = e.preventDefault,
            u = e.onStop,
            l = e.onStopDelay,
            c = e.ignore,
            h = e.wheelSpeed,
            f = e.event,
            d = e.onDragStart,
            p = e.onDragEnd,
            g = e.onDrag,
            v = e.onPress,
            m = e.onRelease,
            y = e.onRight,
            D = e.onLeft,
            x = e.onUp,
            b = e.onDown,
            _ = e.onChangeX,
            w = e.onChangeY,
            C = e.onChange,
            S = e.onToggleX,
            E = e.onToggleY,
            A = e.onHover,
            T = e.onHoverEnd,
            F = e.onMove,
            P = e.ignoreCheck,
            k = e.isNormalizer,
            M = e.onGestureStart,
            B = e.onGestureEnd,
            O = e.onWheel,
            R = e.onEnable,
            I = e.onDisable,
            L = e.onClick,
            q = e.scrollSpeed,
            j = e.capture,
            V = e.allowClicks,
            N = e.lockAxis,
            H = e.onLockAxis;
          (this.target = i = jo(i) || po),
            (this.vars = e),
            c && (c = lo.utils.toArray(c)),
            (t = t || 0),
            (n = n || 0),
            (h = h || 1),
            (q = q || 1),
            (r = r || "wheel,touch,pointer"),
            (s = !1 !== s),
            o || (o = parseFloat(ho.getComputedStyle(go).lineHeight) || 22);
          var Y,
            W,
            z,
            X,
            U,
            G,
            $,
            K = this,
            Q = 0,
            Z = 0,
            J = Vo(i, Lo),
            ee = Vo(i, qo),
            te = J(),
            ne = ee(),
            re =
              ~r.indexOf("touch") &&
              !~r.indexOf("pointer") &&
              "pointerdown" === bo[0],
            ie = Po(i),
            oe = i.ownerDocument || fo,
            se = [0, 0, 0],
            ae = [0, 0, 0],
            ue = 0,
            le = function () {
              return (ue = Ao());
            },
            ce = function (e, t) {
              return (
                ((K.event = e) && c && ~c.indexOf(e.target)) ||
                (t && re && "touch" !== e.pointerType) ||
                (P && P(e, t))
              );
            },
            he = function () {
              var e = (K.deltaX = Yo(se)),
                n = (K.deltaY = Yo(ae)),
                r = Math.abs(e) >= t,
                i = Math.abs(n) >= t;
              C && (r || i) && C(K, e, n, se, ae),
                r &&
                  (y && K.deltaX > 0 && y(K),
                  D && K.deltaX < 0 && D(K),
                  _ && _(K),
                  S && K.deltaX < 0 != Q < 0 && S(K),
                  (Q = K.deltaX),
                  (se[0] = se[1] = se[2] = 0)),
                i &&
                  (b && K.deltaY > 0 && b(K),
                  x && K.deltaY < 0 && x(K),
                  w && w(K),
                  E && K.deltaY < 0 != Z < 0 && E(K),
                  (Z = K.deltaY),
                  (ae[0] = ae[1] = ae[2] = 0)),
                (X || z) &&
                  (F && F(K),
                  H && G && H(K),
                  z && (g(K), (z = !1)),
                  (X = G = !1)),
                U && (O(K), (U = !1)),
                (Y = 0);
            },
            fe = function (e, t, n) {
              (se[n] += e),
                (ae[n] += t),
                K._vx.update(e),
                K._vy.update(t),
                s ? Y || (Y = requestAnimationFrame(he)) : he();
            },
            de = function (e, t) {
              "y" !== $ && ((se[2] += e), K._vx.update(e, !0)),
                "x" !== $ && ((ae[2] += t), K._vy.update(t, !0)),
                N &&
                  !$ &&
                  ((K.axis = $ = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                  (G = !0)),
                s ? Y || (Y = requestAnimationFrame(he)) : he();
            },
            pe = function (e) {
              if (!ce(e, 1)) {
                var t = (e = Ho(e, a)).clientX,
                  r = e.clientY,
                  i = t - K.x,
                  o = r - K.y,
                  s = K.isDragging;
                (K.x = t),
                  (K.y = r),
                  (s ||
                    Math.abs(K.startX - t) >= n ||
                    Math.abs(K.startY - r) >= n) &&
                    (g && (z = !0),
                    s || (K.isDragging = !0),
                    de(i, o),
                    s || (d && d(K)));
              }
            },
            ge = (K.onPress = function (e) {
              ce(e, 1) ||
                ((K.axis = $ = null),
                W.pause(),
                (K.isPressed = !0),
                (e = Ho(e)),
                (Q = Z = 0),
                (K.startX = K.x = e.clientX),
                (K.startY = K.y = e.clientY),
                K._vx.reset(),
                K._vy.reset(),
                ko(k ? i : oe, bo[1], pe, a, !0),
                (K.deltaX = K.deltaY = 0),
                v && v(K));
            }),
            ve = function (e) {
              if (!ce(e, 1)) {
                Mo(k ? i : oe, bo[1], pe, !0);
                var t =
                    K.isDragging &&
                    (Math.abs(K.x - K.startX) > 3 ||
                      Math.abs(K.y - K.startY) > 3),
                  n = Ho(e);
                t ||
                  (K._vx.reset(),
                  K._vy.reset(),
                  a &&
                    V &&
                    lo.delayedCall(0.08, function () {
                      if (Ao() - ue > 300 && !e.defaultPrevented)
                        if (e.target.click) e.target.click();
                        else if (oe.createEvent) {
                          var t = oe.createEvent("MouseEvents");
                          t.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            ho,
                            1,
                            n.screenX,
                            n.screenY,
                            n.clientX,
                            n.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                            e.target.dispatchEvent(t);
                        }
                    })),
                  (K.isDragging = K.isGesturing = K.isPressed = !1),
                  u && !k && W.restart(!0),
                  p && t && p(K),
                  m && m(K, t);
              }
            },
            me = function (e) {
              return (
                e.touches &&
                e.touches.length > 1 &&
                (K.isGesturing = !0) &&
                M(e, K.isDragging)
              );
            },
            ye = function () {
              return (K.isGesturing = !1) || B(K);
            },
            De = function (e) {
              if (!ce(e)) {
                var t = J(),
                  n = ee();
                fe((t - te) * q, (n - ne) * q, 1),
                  (te = t),
                  (ne = n),
                  u && W.restart(!0);
              }
            },
            xe = function (e) {
              if (!ce(e)) {
                (e = Ho(e, a)), O && (U = !0);
                var t =
                  (1 === e.deltaMode
                    ? o
                    : 2 === e.deltaMode
                    ? ho.innerHeight
                    : 1) * h;
                fe(e.deltaX * t, e.deltaY * t, 0), u && !k && W.restart(!0);
              }
            },
            be = function (e) {
              if (!ce(e)) {
                var t = e.clientX,
                  n = e.clientY,
                  r = t - K.x,
                  i = n - K.y;
                (K.x = t), (K.y = n), (X = !0), (r || i) && de(r, i);
              }
            },
            _e = function (e) {
              (K.event = e), A(K);
            },
            we = function (e) {
              (K.event = e), T(K);
            },
            Ce = function (e) {
              return ce(e) || (Ho(e, a) && L(K));
            };
          (W = K._dc =
            lo
              .delayedCall(l || 0.25, function () {
                K._vx.reset(), K._vy.reset(), W.pause(), u && u(K);
              })
              .pause()),
            (K.deltaX = K.deltaY = 0),
            (K._vx = No(0, 50, !0)),
            (K._vy = No(0, 50, !0)),
            (K.scrollX = J),
            (K.scrollY = ee),
            (K.isDragging = K.isGesturing = K.isPressed = !1),
            (K.enable = function (e) {
              return (
                K.isEnabled ||
                  (ko(ie ? oe : i, "scroll", Ro),
                  r.indexOf("scroll") >= 0 &&
                    ko(ie ? oe : i, "scroll", De, a, j),
                  r.indexOf("wheel") >= 0 && ko(i, "wheel", xe, a, j),
                  ((r.indexOf("touch") >= 0 && vo) ||
                    r.indexOf("pointer") >= 0) &&
                    (ko(i, bo[0], ge, a, j),
                    ko(oe, bo[2], ve),
                    ko(oe, bo[3], ve),
                    V && ko(i, "click", le, !1, !0),
                    L && ko(i, "click", Ce),
                    M && ko(oe, "gesturestart", me),
                    B && ko(oe, "gestureend", ye),
                    A && ko(i, mo + "enter", _e),
                    T && ko(i, mo + "leave", we),
                    F && ko(i, mo + "move", be)),
                  (K.isEnabled = !0),
                  e && e.type && ge(e),
                  R && R(K)),
                K
              );
            }),
            (K.disable = function () {
              K.isEnabled &&
                (Co.filter(function (e) {
                  return e !== K && Po(e.target);
                }).length || Mo(ie ? oe : i, "scroll", Ro),
                K.isPressed &&
                  (K._vx.reset(), K._vy.reset(), Mo(k ? i : oe, bo[1], pe, !0)),
                Mo(ie ? oe : i, "scroll", De, j),
                Mo(i, "wheel", xe, j),
                Mo(i, bo[0], ge, j),
                Mo(oe, bo[2], ve),
                Mo(oe, bo[3], ve),
                Mo(i, "click", le, !0),
                Mo(i, "click", Ce),
                Mo(oe, "gesturestart", me),
                Mo(oe, "gestureend", ye),
                Mo(i, mo + "enter", _e),
                Mo(i, mo + "leave", we),
                Mo(i, mo + "move", be),
                (K.isEnabled = K.isPressed = K.isDragging = !1),
                I && I(K));
            }),
            (K.kill = function () {
              K.disable();
              var e = Co.indexOf(K);
              e >= 0 && Co.splice(e, 1), xo === K && (xo = 0);
            }),
            Co.push(K),
            k && Po(i) && (xo = K),
            K.enable(f);
        }),
        (t = e),
        (n = [
          {
            key: "velocityX",
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: "velocityY",
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]) && uo(t.prototype, n),
        r && uo(t, r),
        e
      );
    })();
    (Xo.version = "3.10.4"),
      (Xo.create = function (e) {
        return new Xo(e);
      }),
      (Xo.register = zo),
      (Xo.getAll = function () {
        return Co.slice();
      }),
      (Xo.getById = function (e) {
        return Co.filter(function (t) {
          return t.vars.id === e;
        })[0];
      }),
      _o() && lo.registerPlugin(Xo);
    var Uo,
      Go,
      $o,
      Ko,
      Qo,
      Zo,
      Jo,
      es,
      ts,
      ns,
      rs,
      is,
      os,
      ss,
      as,
      us,
      ls,
      cs,
      hs,
      fs,
      ds,
      ps,
      gs,
      vs,
      ms,
      ys,
      Ds,
      xs,
      bs,
      _s,
      ws,
      Cs,
      Ss,
      Es = 1,
      As = Date.now,
      Ts = As(),
      Fs = 0,
      Ps = 0,
      ks = function () {
        return (ss = 1);
      },
      Ms = function () {
        return (ss = 0);
      },
      Bs = function (e) {
        return e;
      },
      Os = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      },
      Rs = function () {
        return "undefined" != typeof window;
      },
      Is = function () {
        return Uo || (Rs() && (Uo = window.gsap) && Uo.registerPlugin && Uo);
      },
      Ls = function (e) {
        return !!~Jo.indexOf(e);
      },
      qs = function (e) {
        return (
          Fo(e, "getBoundingClientRect") ||
          (Ls(e)
            ? function () {
                return (
                  (Ja.width = $o.innerWidth), (Ja.height = $o.innerHeight), Ja
                );
              }
            : function () {
                return fa(e);
              })
        );
      },
      js = function (e, t) {
        var n = t.s,
          r = t.d2,
          i = t.d,
          o = t.a;
        return (n = "scroll" + r) && (o = Fo(e, n))
          ? o() - qs(e)()[i]
          : Ls(e)
          ? (Qo[n] || Zo[n]) -
            ($o["inner" + r] || Qo["client" + r] || Zo["client" + r])
          : e[n] - e["offset" + r];
      },
      Vs = function (e, t) {
        for (var n = 0; n < hs.length; n += 3)
          (!t || ~t.indexOf(hs[n + 1])) && e(hs[n], hs[n + 1], hs[n + 2]);
      },
      Ns = function (e) {
        return "string" == typeof e;
      },
      Hs = function (e) {
        return "function" == typeof e;
      },
      Ys = function (e) {
        return "number" == typeof e;
      },
      Ws = function (e) {
        return "object" == typeof e;
      },
      zs = function (e) {
        return Hs(e) && e();
      },
      Xs = function (e, t) {
        return function () {
          var n = zs(e),
            r = zs(t);
          return function () {
            zs(n), zs(r);
          };
        };
      },
      Us = function (e, t, n) {
        return e && e.progress(t ? 0 : 1) && n && e.pause();
      },
      Gs = function (e, t) {
        if (e.enabled) {
          var n = t(e);
          n && n.totalTime && (e.callbackAnimation = n);
        }
      },
      $s = Math.abs,
      Ks = "left",
      Qs = "right",
      Zs = "bottom",
      Js = "width",
      ea = "height",
      ta = "Right",
      na = "Left",
      ra = "Top",
      ia = "Bottom",
      oa = "padding",
      sa = "margin",
      aa = "Width",
      ua = "Height",
      la = "px",
      ca = function (e) {
        return $o.getComputedStyle(e);
      },
      ha = function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e;
      },
      fa = function (e, t) {
        var n =
            t &&
            "matrix(1, 0, 0, 1, 0, 0)" !== ca(e)[as] &&
            Uo.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            }).progress(1),
          r = e.getBoundingClientRect();
        return n && n.progress(0).kill(), r;
      },
      da = function (e, t) {
        var n = t.d2;
        return e["offset" + n] || e["client" + n] || 0;
      },
      pa = function (e) {
        var t,
          n = [],
          r = e.labels,
          i = e.duration();
        for (t in r) n.push(r[t] / i);
        return n;
      },
      ga = function (e) {
        var t = Uo.utils.snap(e),
          n =
            Array.isArray(e) &&
            e.slice(0).sort(function (e, t) {
              return e - t;
            });
        return n
          ? function (e, r, i) {
              var o;
              if ((void 0 === i && (i = 0.001), !r)) return t(e);
              if (r > 0) {
                for (e -= i, o = 0; o < n.length; o++)
                  if (n[o] >= e) return n[o];
                return n[o - 1];
              }
              for (o = n.length, e += i; o--; ) if (n[o] <= e) return n[o];
              return n[0];
            }
          : function (n, r, i) {
              void 0 === i && (i = 0.001);
              var o = t(n);
              return !r || Math.abs(o - n) < i || o - n < 0 == r < 0
                ? o
                : t(r < 0 ? n - e : n + e);
            };
      },
      va = function (e, t, n, r) {
        return n.split(",").forEach(function (n) {
          return e(t, n, r);
        });
      },
      ma = function (e, t, n, r, i) {
        return e.addEventListener(t, n, { passive: !r, capture: !!i });
      },
      ya = function (e, t, n, r) {
        return e.removeEventListener(t, n, !!r);
      },
      Da = function (e, t, n) {
        return n && n.wheelHandler && e(t, "wheel", n);
      },
      xa = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      ba = { toggleActions: "play", anticipatePin: 0 },
      _a = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      wa = function (e, t) {
        if (Ns(e)) {
          var n = e.indexOf("="),
            r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
          ~n &&
            (e.indexOf("%") > n && (r *= t / 100), (e = e.substr(0, n - 1))),
            (e =
              r +
              (e in _a
                ? _a[e] * t
                : ~e.indexOf("%")
                ? (parseFloat(e) * t) / 100
                : parseFloat(e) || 0));
        }
        return e;
      },
      Ca = function (e, t, n, r, i, o, s, a) {
        var u = i.startColor,
          l = i.endColor,
          c = i.fontSize,
          h = i.indent,
          f = i.fontWeight,
          d = Ko.createElement("div"),
          p = Ls(n) || "fixed" === Fo(n, "pinType"),
          g = -1 !== e.indexOf("scroller"),
          v = p ? Zo : n,
          m = -1 !== e.indexOf("start"),
          y = m ? u : l,
          D =
            "border-color:" +
            y +
            ";font-size:" +
            c +
            ";color:" +
            y +
            ";font-weight:" +
            f +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (D += "position:" + ((g || a) && p ? "fixed;" : "absolute;")),
          (g || a || !p) &&
            (D += (r === qo ? Qs : Zs) + ":" + (o + parseFloat(h)) + "px;"),
          s &&
            (D +=
              "box-sizing:border-box;text-align:left;width:" +
              s.offsetWidth +
              "px;"),
          (d._isStart = m),
          d.setAttribute(
            "class",
            "gsap-marker-" + e + (t ? " marker-" + t : "")
          ),
          (d.style.cssText = D),
          (d.innerText = t || 0 === t ? e + "-" + t : e),
          v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d),
          (d._offset = d["offset" + r.op.d2]),
          Sa(d, 0, r, m),
          d
        );
      },
      Sa = function (e, t, n, r) {
        var i = { display: "block" },
          o = n[r ? "os2" : "p2"],
          s = n[r ? "p2" : "os2"];
        (e._isFlipped = r),
          (i[n.a + "Percent"] = r ? -100 : 0),
          (i[n.a] = r ? "1px" : 0),
          (i["border" + o + aa] = 1),
          (i["border" + s + aa] = 0),
          (i[n.p] = t + "px"),
          Uo.set(e, i);
      },
      Ea = [],
      Aa = {},
      Ta = function () {
        return As() - Fs > 34 && Xa();
      },
      Fa = function () {
        (!gs || !gs.isPressed || gs.startX > Zo.clientWidth) &&
          (So.cache++,
          bs || (bs = requestAnimationFrame(Xa)),
          Fs || La("scrollStart"),
          (Fs = As()));
      },
      Pa = function () {
        (ys = $o.innerWidth), (ms = $o.innerHeight);
      },
      ka = function () {
        So.cache++,
          !os &&
            !ps &&
            !Ko.fullscreenElement &&
            !Ko.webkitFullscreenElement &&
            (!vs ||
              ys !== $o.innerWidth ||
              Math.abs($o.innerHeight - ms) > 0.25 * $o.innerHeight) &&
            es.restart(!0);
      },
      Ma = {},
      Ba = [],
      Oa = [],
      Ra = function (e) {
        var t,
          n = Uo.ticker.frame,
          r = [],
          i = 0;
        if (ws !== n || Es) {
          for (Va(); i < Oa.length; i += 4)
            (t = $o.matchMedia(Oa[i]).matches) !== Oa[i + 3] &&
              ((Oa[i + 3] = t),
              t ? r.push(i) : Va(1, Oa[i]) || (Hs(Oa[i + 2]) && Oa[i + 2]()));
          for (ja(), i = 0; i < r.length; i++)
            (t = r[i]), (_s = Oa[t]), (Oa[t + 2] = Oa[t + 1](e));
          (_s = 0), Go && Ya(0, 1), (ws = n), La("matchMedia");
        }
      },
      Ia = function e() {
        return ya(iu, "scrollEnd", e) || Ya(!0);
      },
      La = function (e) {
        return (
          (Ma[e] &&
            Ma[e].map(function (e) {
              return e();
            })) ||
          Ba
        );
      },
      qa = [],
      ja = function (e) {
        for (var t = 0; t < qa.length; t += 5)
          (e && qa[t + 4] !== e) ||
            ((qa[t].style.cssText = qa[t + 1]),
            qa[t].getBBox && qa[t].setAttribute("transform", qa[t + 2] || ""),
            (qa[t + 3].uncache = 1));
      },
      Va = function (e, t) {
        var n;
        for (us = 0; us < Ea.length; us++)
          (n = Ea[us]), (t && n.media !== t) || (e ? n.kill(1) : n.revert());
        t && ja(t), t || La("revert");
      },
      Na = function () {
        return (
          So.cache++ &&
          So.forEach(function (e) {
            return "function" == typeof e && (e.rec = 0);
          })
        );
      },
      Ha = 0,
      Ya = function (e, t) {
        if (!Fs || e) {
          Cs = !0;
          var n = La("refreshInit");
          fs && iu.sort(),
            t || Va(),
            Ea.slice(0).forEach(function (e) {
              return e.refresh();
            }),
            Ea.forEach(function (e) {
              return (
                "max" === e.vars.end &&
                e.setPositions(e.start, js(e.scroller, e._dir))
              );
            }),
            n.forEach(function (e) {
              return e && e.render && e.render(-1);
            }),
            Na(),
            es.pause(),
            Ha++,
            (Cs = !1),
            La("refresh");
        } else ma(iu, "scrollEnd", Ia);
      },
      Wa = 0,
      za = 1,
      Xa = function () {
        if (!Cs) {
          (iu.isUpdating = !0), Ss && Ss.update(0);
          var e = Ea.length,
            t = As(),
            n = t - Ts >= 50,
            r = e && Ea[0].scroll();
          if (
            ((za = Wa > r ? -1 : 1),
            (Wa = r),
            n &&
              (Fs && !ss && t - Fs > 200 && ((Fs = 0), La("scrollEnd")),
              (rs = Ts),
              (Ts = t)),
            za < 0)
          ) {
            for (us = e; us-- > 0; ) Ea[us] && Ea[us].update(0, n);
            za = 1;
          } else for (us = 0; us < e; us++) Ea[us] && Ea[us].update(0, n);
          iu.isUpdating = !1;
        }
        bs = 0;
      },
      Ua = [
        Ks,
        "top",
        Zs,
        Qs,
        sa + ia,
        sa + ta,
        sa + ra,
        sa + na,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
      ],
      Ga = Ua.concat([
        Js,
        ea,
        "boxSizing",
        "max" + aa,
        "max" + ua,
        "position",
        sa,
        oa,
        oa + ra,
        oa + ta,
        oa + ia,
        oa + na,
      ]),
      $a = function (e, t, n, r) {
        if (e.parentNode !== t) {
          for (var i, o = Ua.length, s = t.style, a = e.style; o--; )
            s[(i = Ua[o])] = n[i];
          (s.position = "absolute" === n.position ? "absolute" : "relative"),
            "inline" === n.display && (s.display = "inline-block"),
            (a[Zs] = a[Qs] = s.flexBasis = "auto"),
            (s.overflow = "visible"),
            (s.boxSizing = "border-box"),
            (s[Js] = da(e, Lo) + la),
            (s[ea] = da(e, qo) + la),
            (s[oa] = a[sa] = a.top = a[Ks] = "0"),
            Qa(r),
            (a[Js] = a["max" + aa] = n[Js]),
            (a[ea] = a["max" + ua] = n[ea]),
            (a[oa] = n[oa]),
            e.parentNode.insertBefore(t, e),
            t.appendChild(e);
        }
      },
      Ka = /([A-Z])/g,
      Qa = function (e) {
        if (e) {
          var t,
            n,
            r = e.t.style,
            i = e.length,
            o = 0;
          for ((e.t._gsap || Uo.core.getCache(e.t)).uncache = 1; o < i; o += 2)
            (n = e[o + 1]),
              (t = e[o]),
              n
                ? (r[t] = n)
                : r[t] && r.removeProperty(t.replace(Ka, "-$1").toLowerCase());
        }
      },
      Za = function (e) {
        for (var t = Ga.length, n = e.style, r = [], i = 0; i < t; i++)
          r.push(Ga[i], n[Ga[i]]);
        return (r.t = e), r;
      },
      Ja = { left: 0, top: 0 },
      eu = function (e, t, n, r, i, o, s, a, u, l, c, h, f) {
        Hs(e) && (e = e(a)),
          Ns(e) &&
            "max" === e.substr(0, 3) &&
            (e = h + ("=" === e.charAt(4) ? wa("0" + e.substr(3), n) : 0));
        var d,
          p,
          g,
          v = f ? f.time() : 0;
        if ((f && f.seek(0), Ys(e))) s && Sa(s, n, r, !0);
        else {
          Hs(t) && (t = t(a));
          var m,
            y,
            D,
            x,
            b = e.split(" ");
          (g = jo(t) || Zo),
            ((m = fa(g) || {}) && (m.left || m.top)) ||
              "none" !== ca(g).display ||
              ((x = g.style.display),
              (g.style.display = "block"),
              (m = fa(g)),
              x ? (g.style.display = x) : g.style.removeProperty("display")),
            (y = wa(b[0], m[r.d])),
            (D = wa(b[1] || "0", n)),
            (e = m[r.p] - u[r.p] - l + y + i - D),
            s && Sa(s, D, r, n - D < 20 || (s._isStart && D > 20)),
            (n -= n - D);
        }
        if (o) {
          var _ = e + n,
            w = o._isStart;
          (d = "scroll" + r.d2),
            Sa(
              o,
              _,
              r,
              (w && _ > 20) ||
                (!w && (c ? Math.max(Zo[d], Qo[d]) : o.parentNode[d]) <= _ + 1)
            ),
            c &&
              ((u = fa(s)),
              c && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + la));
        }
        return (
          f &&
            g &&
            ((d = fa(g)),
            f.seek(h),
            (p = fa(g)),
            (f._caScrollDist = d[r.p] - p[r.p]),
            (e = (e / f._caScrollDist) * h)),
          f && f.seek(v),
          f ? e : Math.round(e)
        );
      },
      tu = /(webkit|moz|length|cssText|inset)/i,
      nu = function (e, t, n, r) {
        if (e.parentNode !== t) {
          var i,
            o,
            s = e.style;
          if (t === Zo) {
            for (i in ((e._stOrig = s.cssText), (o = ca(e))))
              +i ||
                tu.test(i) ||
                !o[i] ||
                "string" != typeof s[i] ||
                "0" === i ||
                (s[i] = o[i]);
            (s.top = n), (s.left = r);
          } else s.cssText = e._stOrig;
          (Uo.core.getCache(e).uncache = 1), t.appendChild(e);
        }
      },
      ru = function (e, t) {
        var n,
          r,
          i = Vo(e, t),
          o = "_scroll" + t.p2,
          s = function t(s, a, u, l, c) {
            var h = t.tween,
              f = a.onComplete,
              d = {};
            return (
              (u = u || i()),
              (c = (l && c) || 0),
              (l = l || s - u),
              h && h.kill(),
              (n = Math.round(u)),
              (a[o] = s),
              (a.modifiers = d),
              (d[o] = function (e) {
                return (
                  (e = Os(i())) !== n &&
                  e !== r &&
                  Math.abs(e - n) > 2 &&
                  Math.abs(e - r) > 2
                    ? (h.kill(), (t.tween = 0))
                    : (e = u + l * h.ratio + c * h.ratio * h.ratio),
                  (r = n),
                  (n = Os(e))
                );
              }),
              (a.onComplete = function () {
                (t.tween = 0), f && f.call(h);
              }),
              (h = t.tween = Uo.to(e, a))
            );
          };
        return (
          (e[o] = i),
          (i.wheelHandler = function () {
            return s.tween && s.tween.kill() && (s.tween = 0);
          }),
          ma(e, "wheel", i.wheelHandler),
          s
        );
      },
      iu = (function () {
        function e(t, n) {
          Go ||
            e.register(Uo) ||
            console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            this.init(t, n);
        }
        return (
          (e.prototype.init = function (t, n) {
            if (
              ((this.progress = this.start = 0),
              this.vars && this.kill(!0, !0),
              Ps)
            ) {
              var r,
                i,
                o,
                s,
                a,
                u,
                l,
                c,
                h,
                f,
                d,
                p,
                g,
                v,
                m,
                y,
                D,
                x,
                b,
                _,
                w,
                C,
                S,
                E,
                A,
                T,
                F,
                P,
                k,
                M,
                B,
                O,
                R,
                I,
                L,
                q,
                j,
                V,
                N,
                H,
                Y,
                W = (t = ha(
                  Ns(t) || Ys(t) || t.nodeType ? { trigger: t } : t,
                  ba
                )),
                z = W.onUpdate,
                X = W.toggleClass,
                U = W.id,
                G = W.onToggle,
                $ = W.onRefresh,
                K = W.scrub,
                Q = W.trigger,
                Z = W.pin,
                J = W.pinSpacing,
                ee = W.invalidateOnRefresh,
                te = W.anticipatePin,
                ne = W.onScrubComplete,
                re = W.onSnapComplete,
                ie = W.once,
                oe = W.snap,
                se = W.pinReparent,
                ae = W.pinSpacer,
                ue = W.containerAnimation,
                le = W.fastScrollEnd,
                ce = W.preventOverlaps,
                he =
                  t.horizontal || (t.containerAnimation && !1 !== t.horizontal)
                    ? Lo
                    : qo,
                fe = !K && 0 !== K,
                de = jo(t.scroller || $o),
                pe = Uo.core.getCache(de),
                ge = Ls(de),
                ve =
                  "fixed" ===
                  ("pinType" in t
                    ? t.pinType
                    : Fo(de, "pinType") || (ge && "fixed")),
                me = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                ye = fe && t.toggleActions.split(" "),
                De = "markers" in t ? t.markers : ba.markers,
                xe = ge ? 0 : parseFloat(ca(de)["border" + he.p2 + aa]) || 0,
                be = this,
                _e =
                  t.onRefreshInit &&
                  function () {
                    return t.onRefreshInit(be);
                  },
                we = (function (e, t, n) {
                  var r = n.d,
                    i = n.d2,
                    o = n.a;
                  return (o = Fo(e, "getBoundingClientRect"))
                    ? function () {
                        return o()[r];
                      }
                    : function () {
                        return (t ? $o["inner" + i] : e["client" + i]) || 0;
                      };
                })(de, ge, he),
                Ce = (function (e, t) {
                  return !t || ~Eo.indexOf(e)
                    ? qs(e)
                    : function () {
                        return Ja;
                      };
                })(de, ge),
                Se = 0,
                Ee = 0,
                Ae = Vo(de, he);
              if (
                ((be.media = _s),
                (be._dir = he),
                (te *= 45),
                (be.scroller = de),
                (be.scroll = ue ? ue.time.bind(ue) : Ae),
                (s = Ae()),
                (be.vars = t),
                (n = n || t.animation),
                "refreshPriority" in t &&
                  ((fs = 1), -9999 === t.refreshPriority && (Ss = be)),
                (pe.tweenScroll = pe.tweenScroll || {
                  top: ru(de, qo),
                  left: ru(de, Lo),
                }),
                (be.tweenTo = r = pe.tweenScroll[he.p]),
                (be.scrubDuration = function (e) {
                  (B = Ys(e) && e)
                    ? M
                      ? M.duration(e)
                      : (M = Uo.to(n, {
                          ease: "expo",
                          totalProgress: "+=0.001",
                          duration: B,
                          paused: !0,
                          onComplete: function () {
                            return ne && ne(be);
                          },
                        }))
                    : (M && M.progress(1).kill(), (M = 0));
                }),
                n &&
                  ((n.vars.lazy = !1),
                  n._initted ||
                    (!1 !== n.vars.immediateRender &&
                      !1 !== t.immediateRender &&
                      n.render(0, !0, !0)),
                  (be.animation = n.pause()),
                  (n.scrollTrigger = be),
                  be.scrubDuration(K),
                  (P = 0),
                  U || (U = n.vars.id)),
                Ea.push(be),
                oe &&
                  ((Ws(oe) && !oe.push) || (oe = { snapTo: oe }),
                  "scrollBehavior" in Zo.style &&
                    Uo.set(ge ? [Zo, Qo] : de, { scrollBehavior: "auto" }),
                  (o = Hs(oe.snapTo)
                    ? oe.snapTo
                    : "labels" === oe.snapTo
                    ? (function (e) {
                        return function (t) {
                          return Uo.utils.snap(pa(e), t);
                        };
                      })(n)
                    : "labelsDirectional" === oe.snapTo
                    ? ((N = n),
                      function (e, t) {
                        return ga(pa(N))(e, t.direction);
                      })
                    : !1 !== oe.directional
                    ? function (e, t) {
                        return ga(oe.snapTo)(
                          e,
                          As() - Ee < 500 ? 0 : t.direction
                        );
                      }
                    : Uo.utils.snap(oe.snapTo)),
                  (O = oe.duration || { min: 0.1, max: 2 }),
                  (O = Ws(O) ? ns(O.min, O.max) : ns(O, O)),
                  (R = Uo.delayedCall(oe.delay || B / 2 || 0.1, function () {
                    var e = Ae(),
                      t = As() - Ee < 500,
                      i = r.tween;
                    if (
                      !(t || Math.abs(be.getVelocity()) < 10) ||
                      i ||
                      ss ||
                      Se === e
                    )
                      be.isActive && Se !== e && R.restart(!0);
                    else {
                      var s = (e - u) / g,
                        a = n && !fe ? n.totalProgress() : s,
                        c = t ? 0 : ((a - k) / (As() - rs)) * 1e3 || 0,
                        h = Uo.utils.clamp(-s, 1 - s, ($s(c / 2) * c) / 0.185),
                        f = s + (!1 === oe.inertia ? 0 : h),
                        d = ns(0, 1, o(f, be)),
                        p = Math.round(u + d * g),
                        v = oe,
                        m = v.onStart,
                        y = v.onInterrupt,
                        D = v.onComplete;
                      if (e <= l && e >= u && p !== e) {
                        if (i && !i._initted && i.data <= $s(p - e)) return;
                        !1 === oe.inertia && (h = d - s),
                          r(
                            p,
                            {
                              duration: O(
                                $s(
                                  (0.185 * Math.max($s(f - a), $s(d - a))) /
                                    c /
                                    0.05 || 0
                                )
                              ),
                              ease: oe.ease || "power3",
                              data: $s(p - e),
                              onInterrupt: function () {
                                return R.restart(!0) && y && y(be);
                              },
                              onComplete: function () {
                                be.update(),
                                  (Se = Ae()),
                                  (P = k =
                                    n && !fe ? n.totalProgress() : be.progress),
                                  re && re(be),
                                  D && D(be);
                              },
                            },
                            e,
                            h * g,
                            p - e - h * g
                          ),
                          m && m(be, r.tween);
                      }
                    }
                  }).pause())),
                U && (Aa[U] = be),
                (V =
                  (Q = be.trigger = jo(Q || Z)) &&
                  Q._gsap &&
                  Q._gsap.stRevert) && (V = V(be)),
                (Z = !0 === Z ? Q : jo(Z)),
                Ns(X) && (X = { targets: Q, className: X }),
                Z &&
                  (!1 === J ||
                    J === sa ||
                    (J = !(!J && "flex" === ca(Z.parentNode).display) && oa),
                  (be.pin = Z),
                  !1 !== t.force3D && Uo.set(Z, { force3D: !0 }),
                  (i = Uo.core.getCache(Z)).spacer
                    ? (v = i.pinState)
                    : (ae &&
                        ((ae = jo(ae)) &&
                          !ae.nodeType &&
                          (ae = ae.current || ae.nativeElement),
                        (i.spacerIsNative = !!ae),
                        ae && (i.spacerState = Za(ae))),
                      (i.spacer = D = ae || Ko.createElement("div")),
                      D.classList.add("pin-spacer"),
                      U && D.classList.add("pin-spacer-" + U),
                      (i.pinState = v = Za(Z))),
                  (be.spacer = D = i.spacer),
                  (F = ca(Z)),
                  (S = F[J + he.os2]),
                  (b = Uo.getProperty(Z)),
                  (_ = Uo.quickSetter(Z, he.a, la)),
                  $a(Z, D, F),
                  (y = Za(Z))),
                De)
              ) {
                (p = Ws(De) ? ha(De, xa) : xa),
                  (f = Ca("scroller-start", U, de, he, p, 0)),
                  (d = Ca("scroller-end", U, de, he, p, 0, f)),
                  (x = f["offset" + he.op.d2]);
                var Te = jo(Fo(de, "content") || de);
                (c = this.markerStart = Ca("start", U, Te, he, p, x, 0, ue)),
                  (h = this.markerEnd = Ca("end", U, Te, he, p, x, 0, ue)),
                  ue && (j = Uo.quickSetter([c, h], he.a, la)),
                  ve ||
                    (Eo.length && !0 === Fo(de, "fixedMarkers")) ||
                    ((Y = ca((H = ge ? Zo : de)).position),
                    (H.style.position =
                      "absolute" === Y || "fixed" === Y ? Y : "relative"),
                    Uo.set([f, d], { force3D: !0 }),
                    (A = Uo.quickSetter(f, he.a, la)),
                    (T = Uo.quickSetter(d, he.a, la)));
              }
              if (ue) {
                var Fe = ue.vars.onUpdate,
                  Pe = ue.vars.onUpdateParams;
                ue.eventCallback("onUpdate", function () {
                  be.update(0, 0, 1), Fe && Fe.apply(Pe || []);
                });
              }
              (be.previous = function () {
                return Ea[Ea.indexOf(be) - 1];
              }),
                (be.next = function () {
                  return Ea[Ea.indexOf(be) + 1];
                }),
                (be.revert = function (e) {
                  var t = !1 !== e || !be.enabled,
                    r = os;
                  t !== be.isReverted &&
                    (t &&
                      (be.scroll.rec || !os || !Cs || (be.scroll.rec = Ae()),
                      (L = Math.max(Ae(), be.scroll.rec || 0)),
                      (I = be.progress),
                      (q = n && n.progress())),
                    c &&
                      [c, h, f, d].forEach(function (e) {
                        return (e.style.display = t ? "none" : "block");
                      }),
                    t && (os = 1),
                    be.update(t),
                    (os = r),
                    Z &&
                      (t
                        ? (function (e, t, n) {
                            Qa(n);
                            var r = e._gsap;
                            if (r.spacerIsNative) Qa(r.spacerState);
                            else if (e.parentNode === t) {
                              var i = t.parentNode;
                              i && (i.insertBefore(e, t), i.removeChild(t));
                            }
                          })(Z, D, v)
                        : (!se || !be.isActive) && $a(Z, D, ca(Z), E)),
                    (be.isReverted = t));
                }),
                (be.refresh = function (i, o) {
                  if ((!os && be.enabled) || o)
                    if (Z && i && Fs) ma(e, "scrollEnd", Ia);
                    else {
                      !Cs && _e && _e(be),
                        (os = 1),
                        (Ee = As()),
                        r.tween && (r.tween.kill(), (r.tween = 0)),
                        M && M.pause(),
                        ee && n && n.time(-0.01, !0).invalidate(),
                        be.isReverted || be.revert();
                      for (
                        var p,
                          x,
                          _,
                          S,
                          A,
                          T,
                          F,
                          P,
                          k,
                          B,
                          O = we(),
                          j = Ce(),
                          V = ue ? ue.duration() : js(de, he),
                          N = 0,
                          H = 0,
                          Y = t.end,
                          W = t.endTrigger || Q,
                          z =
                            t.start ||
                            (0 !== t.start && Q ? (Z ? "0 0" : "0 100%") : 0),
                          X = (be.pinnedContainer =
                            t.pinnedContainer && jo(t.pinnedContainer)),
                          U = (Q && Math.max(0, Ea.indexOf(be))) || 0,
                          G = U;
                        G--;

                      )
                        (T = Ea[G]).end || T.refresh(0, 1) || (os = 1),
                          !(F = T.pin) ||
                            (F !== Q && F !== Z) ||
                            T.isReverted ||
                            (B || (B = []), B.unshift(T), T.revert()),
                          T !== Ea[G] && (U--, G--);
                      for (
                        Hs(z) && (z = z(be)),
                          u =
                            eu(z, Q, O, he, Ae(), c, f, be, j, xe, ve, V, ue) ||
                            (Z ? -0.001 : 0),
                          Hs(Y) && (Y = Y(be)),
                          Ns(Y) &&
                            !Y.indexOf("+=") &&
                            (~Y.indexOf(" ")
                              ? (Y = (Ns(z) ? z.split(" ")[0] : "") + Y)
                              : ((N = wa(Y.substr(2), O)),
                                (Y = Ns(z) ? z : u + N),
                                (W = Q))),
                          l =
                            Math.max(
                              u,
                              eu(
                                Y || (W ? "100% 0" : V),
                                W,
                                O,
                                he,
                                Ae() + N,
                                h,
                                d,
                                be,
                                j,
                                xe,
                                ve,
                                V,
                                ue
                              )
                            ) || -0.001,
                          g = l - u || ((u -= 0.01) && 0.001),
                          N = 0,
                          G = U;
                        G--;

                      )
                        (F = (T = Ea[G]).pin) &&
                          T.start - T._pinPush < u &&
                          !ue &&
                          T.end > 0 &&
                          ((p = T.end - T.start),
                          (F !== Q && F !== X) ||
                            Ys(z) ||
                            (N += p * (1 - T.progress)),
                          F === Z && (H += p));
                      if (
                        ((u += N),
                        (l += N),
                        (be._pinPush = H),
                        c &&
                          N &&
                          (((p = {})[he.a] = "+=" + N),
                          X && (p[he.p] = "-=" + Ae()),
                          Uo.set([c, h], p)),
                        Z)
                      )
                        (p = ca(Z)),
                          (S = he === qo),
                          (_ = Ae()),
                          (w = parseFloat(b(he.a)) + H),
                          !V &&
                            l > 1 &&
                            ((ge ? Zo : de).style["overflow-" + he.a] =
                              "scroll"),
                          $a(Z, D, p),
                          (y = Za(Z)),
                          (x = fa(Z, !0)),
                          (P = ve && Vo(de, S ? Lo : qo)()),
                          J &&
                            (((E = [J + he.os2, g + H + la]).t = D),
                            (G = J === oa ? da(Z, he) + g + H : 0) &&
                              E.push(he.d, G + la),
                            Qa(E),
                            ve && Ae(L)),
                          ve &&
                            (((A = {
                              top: x.top + (S ? _ - u : P) + la,
                              left: x.left + (S ? P : _ - u) + la,
                              boxSizing: "border-box",
                              position: "fixed",
                            })[Js] = A["max" + aa] =
                              Math.ceil(x.width) + la),
                            (A[ea] = A["max" + ua] = Math.ceil(x.height) + la),
                            (A[sa] =
                              A[sa + ra] =
                              A[sa + ta] =
                              A[sa + ia] =
                              A[sa + na] =
                                "0"),
                            (A[oa] = p[oa]),
                            (A[oa + ra] = p[oa + ra]),
                            (A[oa + ta] = p[oa + ta]),
                            (A[oa + ia] = p[oa + ia]),
                            (A[oa + na] = p[oa + na]),
                            (m = (function (e, t, n) {
                              for (
                                var r, i = [], o = e.length, s = n ? 8 : 0;
                                s < o;
                                s += 2
                              )
                                (r = e[s]), i.push(r, r in t ? t[r] : e[s + 1]);
                              return (i.t = e.t), i;
                            })(v, A, se))),
                          n
                            ? ((k = n._initted),
                              ds(1),
                              n.render(n.duration(), !0, !0),
                              (C = b(he.a) - w + g + H),
                              g !== C && ve && m.splice(m.length - 2, 2),
                              n.render(0, !0, !0),
                              k || n.invalidate(),
                              ds(0))
                            : (C = g);
                      else if (Q && Ae() && !ue)
                        for (x = Q.parentNode; x && x !== Zo; )
                          x._pinOffset &&
                            ((u -= x._pinOffset), (l -= x._pinOffset)),
                            (x = x.parentNode);
                      B &&
                        B.forEach(function (e) {
                          return e.revert(!1);
                        }),
                        (be.start = u),
                        (be.end = l),
                        (s = a = Ae()),
                        ue || (s < L && Ae(L), (be.scroll.rec = 0)),
                        be.revert(!1),
                        R &&
                          ((Se = -1),
                          be.isActive && Ae(u + g * I),
                          R.restart(!0)),
                        (os = 0),
                        n &&
                          fe &&
                          (n._initted || q) &&
                          n.progress() !== q &&
                          n.progress(q, !0).render(n.time(), !0, !0),
                        (I !== be.progress || ue) &&
                          (n && !fe && n.totalProgress(I, !0),
                          (be.progress = I),
                          be.update(0, 0, 1)),
                        Z && J && (D._pinOffset = Math.round(be.progress * C)),
                        $ && $(be);
                    }
                }),
                (be.getVelocity = function () {
                  return ((Ae() - a) / (As() - rs)) * 1e3 || 0;
                }),
                (be.endAnimation = function () {
                  Us(be.callbackAnimation),
                    n &&
                      (M
                        ? M.progress(1)
                        : n.paused()
                        ? fe || Us(n, be.direction < 0, 1)
                        : Us(n, n.reversed()));
                }),
                (be.labelToScroll = function (e) {
                  return (
                    (n &&
                      n.labels &&
                      (u || be.refresh() || u) +
                        (n.labels[e] / n.duration()) * g) ||
                    0
                  );
                }),
                (be.getTrailing = function (e) {
                  var t = Ea.indexOf(be),
                    n =
                      be.direction > 0
                        ? Ea.slice(0, t).reverse()
                        : Ea.slice(t + 1);
                  return (
                    Ns(e)
                      ? n.filter(function (t) {
                          return t.vars.preventOverlaps === e;
                        })
                      : n
                  ).filter(function (e) {
                    return be.direction > 0 ? e.end <= u : e.start >= l;
                  });
                }),
                (be.update = function (e, t, i) {
                  if (!ue || i || e) {
                    var o,
                      c,
                      h,
                      d,
                      p,
                      v,
                      x,
                      b = be.scroll(),
                      E = e ? 0 : (b - u) / g,
                      F = E < 0 ? 0 : E > 1 ? 1 : E || 0,
                      B = be.progress;
                    if (
                      (t &&
                        ((a = s),
                        (s = ue ? Ae() : b),
                        oe &&
                          ((k = P), (P = n && !fe ? n.totalProgress() : F))),
                      te &&
                        !F &&
                        Z &&
                        !os &&
                        !Es &&
                        Fs &&
                        u < b + ((b - a) / (As() - rs)) * te &&
                        (F = 1e-4),
                      F !== B && be.enabled)
                    ) {
                      if (
                        ((d =
                          (p =
                            (o = be.isActive = !!F && F < 1) !==
                            (!!B && B < 1)) || !!F != !!B),
                        (be.direction = F > B ? 1 : -1),
                        (be.progress = F),
                        d &&
                          !os &&
                          ((c = F && !B ? 0 : 1 === F ? 1 : 1 === B ? 2 : 3),
                          fe &&
                            ((h =
                              (!p && "none" !== ye[c + 1] && ye[c + 1]) ||
                              ye[c]),
                            (x =
                              n &&
                              ("complete" === h || "reset" === h || h in n)))),
                        ce &&
                          (p || x) &&
                          (x || K || !n) &&
                          (Hs(ce)
                            ? ce(be)
                            : be.getTrailing(ce).forEach(function (e) {
                                return e.endAnimation();
                              })),
                        fe ||
                          (!M || os || Es
                            ? n && n.totalProgress(F, !!os)
                            : ((ue || (Ss && Ss !== be)) &&
                                M.render(M._dp._time - M._start),
                              M.resetTo
                                ? M.resetTo(
                                    "totalProgress",
                                    F,
                                    n._tTime / n._tDur
                                  )
                                : ((M.vars.totalProgress = F),
                                  M.invalidate().restart()))),
                        Z)
                      )
                        if ((e && J && (D.style[J + he.os2] = S), ve)) {
                          if (d) {
                            if (
                              ((v =
                                !e &&
                                F > B &&
                                l + 1 > b &&
                                b + 1 >= js(de, he)),
                              se)
                            )
                              if (e || (!o && !v)) nu(Z, D);
                              else {
                                var O = fa(Z, !0),
                                  I = b - u;
                                nu(
                                  Z,
                                  Zo,
                                  O.top + (he === qo ? I : 0) + la,
                                  O.left + (he === qo ? 0 : I) + la
                                );
                              }
                            Qa(o || v ? m : y),
                              (C !== g && F < 1 && o) ||
                                _(w + (1 !== F || v ? 0 : C));
                          }
                        } else _(Os(w + C * F));
                      oe && !r.tween && !os && !Es && R.restart(!0),
                        X &&
                          (p || (ie && F && (F < 1 || !xs))) &&
                          ts(X.targets).forEach(function (e) {
                            return e.classList[o || ie ? "add" : "remove"](
                              X.className
                            );
                          }),
                        z && !fe && !e && z(be),
                        d && !os
                          ? (fe &&
                              (x &&
                                ("complete" === h
                                  ? n.pause().totalProgress(1)
                                  : "reset" === h
                                  ? n.restart(!0).pause()
                                  : "restart" === h
                                  ? n.restart(!0)
                                  : n[h]()),
                              z && z(be)),
                            (!p && xs) ||
                              (G && p && Gs(be, G),
                              me[c] && Gs(be, me[c]),
                              ie && (1 === F ? be.kill(!1, 1) : (me[c] = 0)),
                              p ||
                                (me[(c = 1 === F ? 1 : 3)] && Gs(be, me[c]))),
                            le &&
                              !o &&
                              Math.abs(be.getVelocity()) >
                                (Ys(le) ? le : 2500) &&
                              (Us(be.callbackAnimation),
                              M ? M.progress(1) : Us(n, !F, 1)))
                          : fe && z && !os && z(be);
                    }
                    if (T) {
                      var L = ue
                        ? (b / ue.duration()) * (ue._caScrollDist || 0)
                        : b;
                      A(L + (f._isFlipped ? 1 : 0)), T(L);
                    }
                    j && j((-b / ue.duration()) * (ue._caScrollDist || 0));
                  }
                }),
                (be.enable = function (t, n) {
                  be.enabled ||
                    ((be.enabled = !0),
                    ma(de, "resize", ka),
                    ma(ge ? Ko : de, "scroll", Fa),
                    _e && ma(e, "refreshInit", _e),
                    !1 !== t && ((be.progress = I = 0), (s = a = Se = Ae())),
                    !1 !== n && be.refresh());
                }),
                (be.getTween = function (e) {
                  return e && r ? r.tween : M;
                }),
                (be.setPositions = function (e, t) {
                  Z && ((w += e - u), (C += t - e - g)),
                    (be.start = u = e),
                    (be.end = l = t),
                    (g = t - e),
                    be.update();
                }),
                (be.disable = function (t, n) {
                  if (
                    be.enabled &&
                    (!1 !== t && be.revert(),
                    (be.enabled = be.isActive = !1),
                    n || (M && M.pause()),
                    (L = 0),
                    i && (i.uncache = 1),
                    _e && ya(e, "refreshInit", _e),
                    R &&
                      (R.pause(), r.tween && r.tween.kill() && (r.tween = 0)),
                    !ge)
                  ) {
                    for (var o = Ea.length; o--; )
                      if (Ea[o].scroller === de && Ea[o] !== be) return;
                    ya(de, "resize", ka), ya(de, "scroll", Fa);
                  }
                }),
                (be.kill = function (e, r) {
                  be.disable(e, r), M && !r && M.kill(), U && delete Aa[U];
                  var o = Ea.indexOf(be);
                  o >= 0 && Ea.splice(o, 1),
                    o === us && za > 0 && us--,
                    (o = 0),
                    Ea.forEach(function (e) {
                      return e.scroller === be.scroller && (o = 1);
                    }),
                    o || (be.scroll.rec = 0),
                    n &&
                      ((n.scrollTrigger = null),
                      e && n.render(-1),
                      r || n.kill()),
                    c &&
                      [c, h, f, d].forEach(function (e) {
                        return e.parentNode && e.parentNode.removeChild(e);
                      }),
                    Ss === be && (Ss = 0),
                    Z &&
                      (i && (i.uncache = 1),
                      (o = 0),
                      Ea.forEach(function (e) {
                        return e.pin === Z && o++;
                      }),
                      o || (i.spacer = 0)),
                    t.onKill && t.onKill(be);
                }),
                be.enable(!1, !1),
                V && V(be),
                n && n.add && !g
                  ? Uo.delayedCall(0.01, function () {
                      return u || l || be.refresh();
                    }) &&
                    (g = 0.01) &&
                    (u = l = 0)
                  : be.refresh();
            } else this.update = this.refresh = this.kill = Bs;
          }),
          (e.register = function (t) {
            return (
              Go ||
                ((Uo = t || Is()),
                Rs() && window.document && e.enable(),
                (Go = Ps)),
              Go
            );
          }),
          (e.defaults = function (e) {
            if (e) for (var t in e) ba[t] = e[t];
            return ba;
          }),
          (e.disable = function (e, t) {
            (Ps = 0),
              Ea.forEach(function (n) {
                return n[t ? "kill" : "disable"](e);
              }),
              ya($o, "wheel", Fa),
              ya(Ko, "scroll", Fa),
              clearInterval(is),
              ya(Ko, "touchcancel", Bs),
              ya(Zo, "touchstart", Bs),
              va(ya, Ko, "pointerdown,touchstart,mousedown", ks),
              va(ya, Ko, "pointerup,touchend,mouseup", Ms),
              es.kill(),
              Vs(ya);
            for (var n = 0; n < So.length; n += 3)
              Da(ya, So[n], So[n + 1]), Da(ya, So[n], So[n + 2]);
          }),
          (e.enable = function () {
            if (
              (($o = window),
              (Ko = document),
              (Qo = Ko.documentElement),
              (Zo = Ko.body),
              Uo &&
                ((ts = Uo.utils.toArray),
                (ns = Uo.utils.clamp),
                (ds = Uo.core.suppressOverwrites || Bs),
                Uo.core.globals("ScrollTrigger", e),
                Zo))
            ) {
              (Ps = 1),
                Xo.register(Uo),
                (e.isTouch = Xo.isTouch),
                (Ds =
                  Xo.isTouch &&
                  /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                ma($o, "wheel", Fa),
                (Jo = [$o, Ko, Qo, Zo]),
                e.matchMedia({
                  "(orientation: portrait)": function () {
                    return Pa(), Pa;
                  },
                }),
                ma(Ko, "scroll", Fa);
              var t,
                n,
                r = Zo.style,
                i = r.borderTopStyle;
              for (
                r.borderTopStyle = "solid",
                  t = fa(Zo),
                  qo.m = Math.round(t.top + qo.sc()) || 0,
                  Lo.m = Math.round(t.left + Lo.sc()) || 0,
                  i
                    ? (r.borderTopStyle = i)
                    : r.removeProperty("border-top-style"),
                  is = setInterval(Ta, 250),
                  Uo.delayedCall(0.5, function () {
                    return (Es = 0);
                  }),
                  ma(Ko, "touchcancel", Bs),
                  ma(Zo, "touchstart", Bs),
                  va(ma, Ko, "pointerdown,touchstart,mousedown", ks),
                  va(ma, Ko, "pointerup,touchend,mouseup", Ms),
                  as = Uo.utils.checkPrefix("transform"),
                  Ga.push(as),
                  Go = As(),
                  es = Uo.delayedCall(0.2, Ya).pause(),
                  hs = [
                    Ko,
                    "visibilitychange",
                    function () {
                      var e = $o.innerWidth,
                        t = $o.innerHeight;
                      Ko.hidden
                        ? ((ls = e), (cs = t))
                        : (ls === e && cs === t) || ka();
                    },
                    Ko,
                    "DOMContentLoaded",
                    Ya,
                    $o,
                    "load",
                    Ya,
                    $o,
                    "resize",
                    ka,
                  ],
                  Vs(ma),
                  Ea.forEach(function (e) {
                    return e.enable(0, 1);
                  }),
                  n = 0;
                n < So.length;
                n += 3
              )
                Da(ya, So[n], So[n + 1]), Da(ya, So[n], So[n + 2]);
            }
          }),
          (e.config = function (t) {
            "limitCallbacks" in t && (xs = !!t.limitCallbacks);
            var n = t.syncInterval;
            (n && clearInterval(is)) || ((is = n) && setInterval(Ta, n)),
              "ignoreMobileResize" in t &&
                (vs = 1 === e.isTouch && t.ignoreMobileResize),
              "autoRefreshEvents" in t &&
                (Vs(ya) || Vs(ma, t.autoRefreshEvents || "none"),
                (ps = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
          }),
          (e.scrollerProxy = function (e, t) {
            var n = jo(e),
              r = So.indexOf(n),
              i = Ls(n);
            ~r && So.splice(r, i ? 6 : 2),
              t && (i ? Eo.unshift($o, t, Zo, t, Qo, t) : Eo.unshift(n, t));
          }),
          (e.matchMedia = function (e) {
            var t, n, r, i, o;
            for (n in e)
              (r = Oa.indexOf(n)),
                (i = e[n]),
                (_s = n),
                "all" === n
                  ? i()
                  : (t = $o.matchMedia(n)) &&
                    (t.matches && (o = i()),
                    ~r
                      ? ((Oa[r + 1] = Xs(Oa[r + 1], i)),
                        (Oa[r + 2] = Xs(Oa[r + 2], o)))
                      : ((r = Oa.length),
                        Oa.push(n, i, o),
                        t.addListener
                          ? t.addListener(Ra)
                          : t.addEventListener("change", Ra)),
                    (Oa[r + 3] = t.matches)),
                (_s = 0);
            return Oa;
          }),
          (e.clearMatchMedia = function (e) {
            e || (Oa.length = 0), (e = Oa.indexOf(e)) >= 0 && Oa.splice(e, 4);
          }),
          (e.isInViewport = function (e, t, n) {
            var r = (Ns(e) ? jo(e) : e).getBoundingClientRect(),
              i = r[n ? Js : ea] * t || 0;
            return n
              ? r.right - i > 0 && r.left + i < $o.innerWidth
              : r.bottom - i > 0 && r.top + i < $o.innerHeight;
          }),
          (e.positionInViewport = function (e, t, n) {
            Ns(e) && (e = jo(e));
            var r = e.getBoundingClientRect(),
              i = r[n ? Js : ea],
              o =
                null == t
                  ? i / 2
                  : t in _a
                  ? _a[t] * i
                  : ~t.indexOf("%")
                  ? (parseFloat(t) * i) / 100
                  : parseFloat(t) || 0;
            return n
              ? (r.left + o) / $o.innerWidth
              : (r.top + o) / $o.innerHeight;
          }),
          e
        );
      })();
    (iu.version = "3.10.4"),
      (iu.saveStyles = function (e) {
        return e
          ? ts(e).forEach(function (e) {
              if (e && e.style) {
                var t = qa.indexOf(e);
                t >= 0 && qa.splice(t, 5),
                  qa.push(
                    e,
                    e.style.cssText,
                    e.getBBox && e.getAttribute("transform"),
                    Uo.core.getCache(e),
                    _s
                  );
              }
            })
          : qa;
      }),
      (iu.revert = function (e, t) {
        return Va(!e, t);
      }),
      (iu.create = function (e, t) {
        return new iu(e, t);
      }),
      (iu.refresh = function (e) {
        return e ? ka() : (Go || iu.register()) && Ya(!0);
      }),
      (iu.update = Xa),
      (iu.clearScrollMemory = Na),
      (iu.maxScroll = function (e, t) {
        return js(e, t ? Lo : qo);
      }),
      (iu.getScrollFunc = function (e, t) {
        return Vo(jo(e), t ? Lo : qo);
      }),
      (iu.getById = function (e) {
        return Aa[e];
      }),
      (iu.getAll = function () {
        return Ea.filter(function (e) {
          return "ScrollSmoother" !== e.vars.id;
        });
      }),
      (iu.isScrolling = function () {
        return !!Fs;
      }),
      (iu.snapDirectional = ga),
      (iu.addEventListener = function (e, t) {
        var n = Ma[e] || (Ma[e] = []);
        ~n.indexOf(t) || n.push(t);
      }),
      (iu.removeEventListener = function (e, t) {
        var n = Ma[e],
          r = n && n.indexOf(t);
        r >= 0 && n.splice(r, 1);
      }),
      (iu.batch = function (e, t) {
        var n,
          r = [],
          i = {},
          o = t.interval || 0.016,
          s = t.batchMax || 1e9,
          a = function (e, t) {
            var n = [],
              r = [],
              i = Uo.delayedCall(o, function () {
                t(n, r), (n = []), (r = []);
              }).pause();
            return function (e) {
              n.length || i.restart(!0),
                n.push(e.trigger),
                r.push(e),
                s <= n.length && i.progress(1);
            };
          };
        for (n in t)
          i[n] =
            "on" === n.substr(0, 2) && Hs(t[n]) && "onRefreshInit" !== n
              ? a(0, t[n])
              : t[n];
        return (
          Hs(s) &&
            ((s = s()),
            ma(iu, "refresh", function () {
              return (s = t.batchMax());
            })),
          ts(e).forEach(function (e) {
            var t = {};
            for (n in i) t[n] = i[n];
            (t.trigger = e), r.push(iu.create(t));
          }),
          r
        );
      });
    var ou,
      su = function (e, t, n, r) {
        return (
          t > r ? e(r) : t < 0 && e(0),
          n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
        );
      },
      au = function e(t, n) {
        !0 === n
          ? t.style.removeProperty("touch-action")
          : (t.style.touchAction =
              !0 === n
                ? "auto"
                : n
                ? "pan-" + n + (Xo.isTouch ? " pinch-zoom" : "")
                : "none"),
          t === Qo && e(Zo, n);
      },
      uu = { auto: 1, scroll: 1 },
      lu = function (e) {
        var t,
          n = e.event,
          r = e.target,
          i = e.axis,
          o = (n.changedTouches ? n.changedTouches[0] : n).target,
          s = o._gsap || Uo.core.getCache(o),
          a = As();
        if (!s._isScrollT || a - s._isScrollT > 2e3) {
          for (; o && o.scrollHeight <= o.clientHeight; ) o = o.parentNode;
          (s._isScroll =
            o &&
            !Ls(o) &&
            o !== r &&
            (uu[(t = ca(o)).overflowY] || uu[t.overflowX])),
            (s._isScrollT = a);
        }
        (s._isScroll || "x" === i) && (n._gsapAllow = !0);
      },
      cu = function (e, t, n, r) {
        return Xo.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: (r = r && lu),
          onPress: r,
          onDrag: r,
          onScroll: r,
          onEnable: function () {
            return n && ma(Ko, Xo.eventTypes[0], fu, !1, !0);
          },
          onDisable: function () {
            return ya(Ko, Xo.eventTypes[0], fu, !0);
          },
        });
      },
      hu = /(input|label|select|textarea)/i,
      fu = function (e) {
        var t = hu.test(e.target.tagName);
        (t || ou) && ((e._gsapAllow = !0), (ou = t));
      },
      du = function (e) {
        Ws(e) || (e = {}),
          (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
          e.type || (e.type = "wheel,touch"),
          (e.debounce = !!e.debounce),
          (e.id = e.id || "normalizer");
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          u,
          l = e,
          c = l.normalizeScrollX,
          h = l.momentum,
          f = l.allowNestedScroll,
          d = jo(e.target) || Qo,
          p = Uo.core.globals().ScrollSmoother,
          g =
            Ds &&
            ((e.content && jo(e.content)) ||
              (p && p.get() && p.get().content())),
          v = Vo(d, qo),
          m = Vo(d, Lo),
          y = 1,
          D =
            (Xo.isTouch && $o.visualViewport
              ? $o.visualViewport.scale * $o.visualViewport.width
              : $o.outerWidth) / $o.innerWidth,
          x = 0,
          b = Hs(h)
            ? function () {
                return h(t);
              }
            : function () {
                return h || 2.8;
              },
          _ = cu(d, e.type, !0, f),
          w = function () {
            return (r = !1);
          },
          C = Bs,
          S = Bs,
          E = function () {
            (n = js(d, qo)),
              (S = ns(Ds ? 1 : 0, n)),
              c && (C = ns(0, js(d, Lo))),
              (i = Ha);
          },
          A = function () {
            E(),
              o.isActive() &&
                o.vars.scrollY > n &&
                (v() > n ? o.progress(1) && v(n) : o.resetTo("scrollY", n));
          };
        return (
          (e.ignoreCheck = function (e) {
            return (
              (Ds &&
                "touchmove" === e.type &&
                (function () {
                  if (r) {
                    requestAnimationFrame(w);
                    var e = Os(t.deltaY / 2),
                      n = S(v.v - e);
                    return (
                      g &&
                        n !== v.v + v.offset &&
                        ((v.offset = n - v.v),
                        (g.style.transform = "translateY(" + -v.offset + "px)"),
                        g._gsap && (g._gsap.y = -v.offset + "px"),
                        (v.cacheID = So.cache),
                        Xa()),
                      !0
                    );
                  }
                  g &&
                    ((g.style.transform = "translateY(0px)"),
                    (v.offset = v.cacheID = 0),
                    g._gsap && (g._gsap.y = "0px")),
                    (r = !0);
                })()) ||
              (y > 1.05 && "touchstart" !== e.type) ||
              t.isGesturing ||
              (e.touches && e.touches.length > 1)
            );
          }),
          (e.onPress = function () {
            var e = y;
            (y = Os((($o.visualViewport && $o.visualViewport.scale) || 1) / D)),
              o.pause(),
              e !== y && au(d, y > 1.01 || (!c && "x")),
              (r = !1),
              (s = m()),
              (a = v()),
              E(),
              (i = Ha);
          }),
          (e.onRelease = e.onGestureStart =
            function (e, t) {
              if (
                (g &&
                  ((g.style.transform = "translateY(0px)"),
                  (v.offset = v.cacheID = 0),
                  g._gsap && (g._gsap.y = "0px")),
                t)
              ) {
                So.cache++;
                var r,
                  i,
                  s = b();
                c &&
                  ((i = (r = m()) + (0.05 * s * -e.velocityX) / 0.227),
                  (s *= su(m, r, i, js(d, Lo))),
                  (o.vars.scrollX = C(i))),
                  (i = (r = v()) + (0.05 * s * -e.velocityY) / 0.227),
                  (s *= su(v, r, i, js(d, qo))),
                  (o.vars.scrollY = S(i)),
                  o.invalidate().duration(s).play(0.01),
                  ((Ds && o.vars.scrollY >= n) || r >= n - 1) &&
                    Uo.to({}, { onUpdate: A, duration: s });
              } else u.restart(!0);
            }),
          (e.onWheel = function () {
            o._ts && o.pause(), As() - x > 1e3 && ((i = 0), (x = As()));
          }),
          (e.onChange = function (e, t, n, r, o) {
            Ha !== i && E(),
              t &&
                c &&
                m(C(r[2] === t ? s + (e.startX - e.x) : m() + t - r[1])),
              n && v(S(o[2] === n ? a + (e.startY - e.y) : v() + n - o[1])),
              Xa();
          }),
          (e.onEnable = function () {
            au(d, !c && "x"), ma($o, "resize", A), _.enable();
          }),
          (e.onDisable = function () {
            au(d, !0), ya($o, "resize", A), _.kill();
          }),
          ((t = new Xo(e)).iOS = Ds),
          Ds && !v() && v(1),
          (u = t._dc),
          (o = Uo.to(t, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: u.vars.onComplete,
          })),
          t
        );
      };
    (iu.sort = function (e) {
      return Ea.sort(
        e ||
          function (e, t) {
            return (
              -1e6 * (e.vars.refreshPriority || 0) +
              e.start -
              (t.start + -1e6 * (t.vars.refreshPriority || 0))
            );
          }
      );
    }),
      (iu.observe = function (e) {
        return new Xo(e);
      }),
      (iu.normalizeScroll = function (e) {
        if (void 0 === e) return gs;
        if (!0 === e && gs) return gs.enable();
        if (!1 === e) return gs && gs.kill();
        var t = e instanceof Xo ? e : du(e);
        return (
          gs && gs.target === t.target && gs.kill(), Ls(t.target) && (gs = t), t
        );
      }),
      (iu.core = {
        _getVelocityProp: No,
        _inputObserver: cu,
        _scrollers: So,
        _proxies: Eo,
        bridge: {
          ss: function () {
            Fs || La("scrollStart"), (Fs = As());
          },
          ref: function () {
            return os;
          },
        },
      }),
      Is() && Uo.registerPlugin(iu);
    document;
    var pu =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : void 0 !== n.g
        ? n.g
        : "undefined" != typeof self
        ? self
        : {};
    function gu(e, t) {
      return e((t = { exports: {} }), t.exports), t.exports;
    }
    var vu = gu(function (e, t) {
        e.exports = {
          polyfill: function () {
            var e = window,
              t = document;
            if (
              !("scrollBehavior" in t.documentElement.style) ||
              !0 === e.__forceSmoothScrollPolyfill__
            ) {
              var n,
                r = e.HTMLElement || e.Element,
                i = {
                  scroll: e.scroll || e.scrollTo,
                  scrollBy: e.scrollBy,
                  elementScroll: r.prototype.scroll || a,
                  scrollIntoView: r.prototype.scrollIntoView,
                },
                o =
                  e.performance && e.performance.now
                    ? e.performance.now.bind(e.performance)
                    : Date.now,
                s =
                  ((n = e.navigator.userAgent),
                  new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n)
                    ? 1
                    : 0);
              (e.scroll = e.scrollTo =
                function () {
                  void 0 !== arguments[0] &&
                    (!0 !== u(arguments[0])
                      ? p.call(
                          e,
                          t.body,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : e.scrollX || e.pageXOffset,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : e.scrollY || e.pageYOffset
                        )
                      : i.scroll.call(
                          e,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : "object" != typeof arguments[0]
                            ? arguments[0]
                            : e.scrollX || e.pageXOffset,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : e.scrollY || e.pageYOffset
                        ));
                }),
                (e.scrollBy = function () {
                  void 0 !== arguments[0] &&
                    (u(arguments[0])
                      ? i.scrollBy.call(
                          e,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : "object" != typeof arguments[0]
                            ? arguments[0]
                            : 0,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : 0
                        )
                      : p.call(
                          e,
                          t.body,
                          ~~arguments[0].left + (e.scrollX || e.pageXOffset),
                          ~~arguments[0].top + (e.scrollY || e.pageYOffset)
                        ));
                }),
                (r.prototype.scroll = r.prototype.scrollTo =
                  function () {
                    if (void 0 !== arguments[0])
                      if (!0 !== u(arguments[0])) {
                        var e = arguments[0].left,
                          t = arguments[0].top;
                        p.call(
                          this,
                          this,
                          void 0 === e ? this.scrollLeft : ~~e,
                          void 0 === t ? this.scrollTop : ~~t
                        );
                      } else {
                        if (
                          "number" == typeof arguments[0] &&
                          void 0 === arguments[1]
                        )
                          throw new SyntaxError("Value could not be converted");
                        i.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : "object" != typeof arguments[0]
                            ? ~~arguments[0]
                            : this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : void 0 !== arguments[1]
                            ? ~~arguments[1]
                            : this.scrollTop
                        );
                      }
                  }),
                (r.prototype.scrollBy = function () {
                  void 0 !== arguments[0] &&
                    (!0 !== u(arguments[0])
                      ? this.scroll({
                          left: ~~arguments[0].left + this.scrollLeft,
                          top: ~~arguments[0].top + this.scrollTop,
                          behavior: arguments[0].behavior,
                        })
                      : i.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left + this.scrollLeft
                            : ~~arguments[0] + this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top + this.scrollTop
                            : ~~arguments[1] + this.scrollTop
                        ));
                }),
                (r.prototype.scrollIntoView = function () {
                  if (!0 !== u(arguments[0])) {
                    var n = f(this),
                      r = n.getBoundingClientRect(),
                      o = this.getBoundingClientRect();
                    n !== t.body
                      ? (p.call(
                          this,
                          n,
                          n.scrollLeft + o.left - r.left,
                          n.scrollTop + o.top - r.top
                        ),
                        "fixed" !== e.getComputedStyle(n).position &&
                          e.scrollBy({
                            left: r.left,
                            top: r.top,
                            behavior: "smooth",
                          }))
                      : e.scrollBy({
                          left: o.left,
                          top: o.top,
                          behavior: "smooth",
                        });
                  } else
                    i.scrollIntoView.call(
                      this,
                      void 0 === arguments[0] || arguments[0]
                    );
                });
            }
            function a(e, t) {
              (this.scrollLeft = e), (this.scrollTop = t);
            }
            function u(e) {
              if (
                null === e ||
                "object" != typeof e ||
                void 0 === e.behavior ||
                "auto" === e.behavior ||
                "instant" === e.behavior
              )
                return !0;
              if ("object" == typeof e && "smooth" === e.behavior) return !1;
              throw new TypeError(
                "behavior member of ScrollOptions " +
                  e.behavior +
                  " is not a valid value for enumeration ScrollBehavior."
              );
            }
            function l(e, t) {
              return "Y" === t
                ? e.clientHeight + s < e.scrollHeight
                : "X" === t
                ? e.clientWidth + s < e.scrollWidth
                : void 0;
            }
            function c(t, n) {
              var r = e.getComputedStyle(t, null)["overflow" + n];
              return "auto" === r || "scroll" === r;
            }
            function h(e) {
              var t = l(e, "Y") && c(e, "Y"),
                n = l(e, "X") && c(e, "X");
              return t || n;
            }
            function f(e) {
              for (; e !== t.body && !1 === h(e); ) e = e.parentNode || e.host;
              return e;
            }
            function d(t) {
              var n,
                r,
                i,
                s,
                a = (o() - t.startTime) / 468;
              (s = a = a > 1 ? 1 : a),
                (n = 0.5 * (1 - Math.cos(Math.PI * s))),
                (r = t.startX + (t.x - t.startX) * n),
                (i = t.startY + (t.y - t.startY) * n),
                t.method.call(t.scrollable, r, i),
                (r === t.x && i === t.y) ||
                  e.requestAnimationFrame(d.bind(e, t));
            }
            function p(n, r, s) {
              var u,
                l,
                c,
                h,
                f = o();
              n === t.body
                ? ((u = e),
                  (l = e.scrollX || e.pageXOffset),
                  (c = e.scrollY || e.pageYOffset),
                  (h = i.scroll))
                : ((u = n), (l = n.scrollLeft), (c = n.scrollTop), (h = a)),
                d({
                  scrollable: u,
                  method: h,
                  startTime: f,
                  startX: l,
                  startY: c,
                  x: r,
                  y: s,
                });
            }
          },
        };
      }),
      mu = (vu.polyfill, Object.getOwnPropertySymbols),
      yu = Object.prototype.hasOwnProperty,
      Du = Object.prototype.propertyIsEnumerable;
    function xu(e) {
      if (null == e)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(e);
    }
    var bu = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t["_" + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(t).map(function (e) {
          return t[e];
        });
        if ("0123456789" !== r.join("")) return !1;
        var i = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            i[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (var n, r, i = xu(e), o = 1; o < arguments.length; o++) {
            for (var s in (n = Object(arguments[o])))
              yu.call(n, s) && (i[s] = n[s]);
            if (mu) {
              r = mu(n);
              for (var a = 0; a < r.length; a++)
                Du.call(n, r[a]) && (i[r[a]] = n[r[a]]);
            }
          }
          return i;
        };
    function _u() {}
    _u.prototype = {
      on: function (e, t, n) {
        var r = this.e || (this.e = {});
        return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this;
      },
      once: function (e, t, n) {
        var r = this;
        function i() {
          r.off(e, i), t.apply(n, arguments);
        }
        return (i._ = t), this.on(e, i, n);
      },
      emit: function (e) {
        for (
          var t = [].slice.call(arguments, 1),
            n = ((this.e || (this.e = {}))[e] || []).slice(),
            r = 0,
            i = n.length;
          r < i;
          r++
        )
          n[r].fn.apply(n[r].ctx, t);
        return this;
      },
      off: function (e, t) {
        var n = this.e || (this.e = {}),
          r = n[e],
          i = [];
        if (r && t)
          for (var o = 0, s = r.length; o < s; o++)
            r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
        return i.length ? (n[e] = i) : delete n[e], this;
      },
    };
    var wu = _u,
      Cu = gu(function (e, t) {
        (function () {
          (null !== t ? t : this).Lethargy = (function () {
            function e(e, t, n, r) {
              (this.stability = null != e ? Math.abs(e) : 8),
                (this.sensitivity = null != t ? 1 + Math.abs(t) : 100),
                (this.tolerance = null != n ? 1 + Math.abs(n) : 1.1),
                (this.delay = null != r ? r : 150),
                (this.lastUpDeltas = function () {
                  var e, t, n;
                  for (
                    n = [], e = 1, t = 2 * this.stability;
                    1 <= t ? e <= t : e >= t;
                    1 <= t ? e++ : e--
                  )
                    n.push(null);
                  return n;
                }.call(this)),
                (this.lastDownDeltas = function () {
                  var e, t, n;
                  for (
                    n = [], e = 1, t = 2 * this.stability;
                    1 <= t ? e <= t : e >= t;
                    1 <= t ? e++ : e--
                  )
                    n.push(null);
                  return n;
                }.call(this)),
                (this.deltasTimestamp = function () {
                  var e, t, n;
                  for (
                    n = [], e = 1, t = 2 * this.stability;
                    1 <= t ? e <= t : e >= t;
                    1 <= t ? e++ : e--
                  )
                    n.push(null);
                  return n;
                }.call(this));
            }
            return (
              (e.prototype.check = function (e) {
                var t;
                return (
                  null != (e = e.originalEvent || e).wheelDelta
                    ? (t = e.wheelDelta)
                    : null != e.deltaY
                    ? (t = -40 * e.deltaY)
                    : (null == e.detail && 0 !== e.detail) ||
                      (t = -40 * e.detail),
                  this.deltasTimestamp.push(Date.now()),
                  this.deltasTimestamp.shift(),
                  t > 0
                    ? (this.lastUpDeltas.push(t),
                      this.lastUpDeltas.shift(),
                      this.isInertia(1))
                    : (this.lastDownDeltas.push(t),
                      this.lastDownDeltas.shift(),
                      this.isInertia(-1))
                );
              }),
              (e.prototype.isInertia = function (e) {
                var t, n, r, i, o, s, a;
                return null ===
                  (t = -1 === e ? this.lastDownDeltas : this.lastUpDeltas)[0]
                  ? e
                  : !(
                      this.deltasTimestamp[2 * this.stability - 2] +
                        this.delay >
                        Date.now() && t[0] === t[2 * this.stability - 1]
                    ) &&
                      ((r = t.slice(0, this.stability)),
                      (n = t.slice(this.stability, 2 * this.stability)),
                      (a = r.reduce(function (e, t) {
                        return e + t;
                      })),
                      (o = n.reduce(function (e, t) {
                        return e + t;
                      })),
                      (s = a / r.length),
                      (i = o / n.length),
                      Math.abs(s) < Math.abs(i * this.tolerance) &&
                        this.sensitivity < Math.abs(i) &&
                        e);
              }),
              (e.prototype.showLastUpDeltas = function () {
                return this.lastUpDeltas;
              }),
              (e.prototype.showLastDownDeltas = function () {
                return this.lastDownDeltas;
              }),
              e
            );
          })();
        }).call(pu);
      }),
      Su = {
        hasWheelEvent: "onwheel" in document,
        hasMouseWheelEvent: "onmousewheel" in document,
        hasTouch:
          "ontouchstart" in window ||
          window.TouchEvent ||
          (window.DocumentTouch && document instanceof DocumentTouch),
        hasTouchWin:
          navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: "onkeydown" in document,
        isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
      },
      Eu = Object.prototype.toString,
      Au = Object.prototype.hasOwnProperty;
    function Tu(e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    }
    var Fu = Cu.Lethargy,
      Pu = "virtualscroll",
      ku = 37,
      Mu = 38,
      Bu = 39,
      Ou = 40,
      Ru = 32;
    function Iu(e) {
      !(function (e) {
        if (!e) return console.warn("bindAll requires at least one argument.");
        var t = Array.prototype.slice.call(arguments, 1);
        if (0 === t.length)
          for (var n in e)
            Au.call(e, n) &&
              "function" == typeof e[n] &&
              "[object Function]" == Eu.call(e[n]) &&
              t.push(n);
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          e[i] = Tu(e[i], e);
        }
      })(
        this,
        "_onWheel",
        "_onMouseWheel",
        "_onTouchStart",
        "_onTouchMove",
        "_onKeyDown"
      ),
        (this.el = window),
        e && e.el && ((this.el = e.el), delete e.el),
        (this.options = bu(
          {
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: !1,
            unpreventTouchClass: "vs-touchmove-allowed",
            limitInertia: !1,
            useKeyboard: !0,
            useTouch: !0,
          },
          e
        )),
        this.options.limitInertia && (this._lethargy = new Fu()),
        (this._emitter = new wu()),
        (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
        (this.touchStartX = null),
        (this.touchStartY = null),
        (this.bodyTouchAction = null),
        void 0 !== this.options.passive &&
          (this.listenerOptions = { passive: this.options.passive });
    }
    (Iu.prototype._notify = function (e) {
      var t = this._event;
      (t.x += t.deltaX),
        (t.y += t.deltaY),
        this._emitter.emit(Pu, {
          x: t.x,
          y: t.y,
          deltaX: t.deltaX,
          deltaY: t.deltaY,
          originalEvent: e,
        });
    }),
      (Iu.prototype._onWheel = function (e) {
        var t = this.options;
        if (!this._lethargy || !1 !== this._lethargy.check(e)) {
          var n = this._event;
          (n.deltaX = e.wheelDeltaX || -1 * e.deltaX),
            (n.deltaY = e.wheelDeltaY || -1 * e.deltaY),
            Su.isFirefox &&
              1 == e.deltaMode &&
              ((n.deltaX *= t.firefoxMultiplier),
              (n.deltaY *= t.firefoxMultiplier)),
            (n.deltaX *= t.mouseMultiplier),
            (n.deltaY *= t.mouseMultiplier),
            this._notify(e);
        }
      }),
      (Iu.prototype._onMouseWheel = function (e) {
        if (!this.options.limitInertia || !1 !== this._lethargy.check(e)) {
          var t = this._event;
          (t.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0),
            (t.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta),
            this._notify(e);
        }
      }),
      (Iu.prototype._onTouchStart = function (e) {
        var t = e.targetTouches ? e.targetTouches[0] : e;
        (this.touchStartX = t.pageX), (this.touchStartY = t.pageY);
      }),
      (Iu.prototype._onTouchMove = function (e) {
        var t = this.options;
        t.preventTouch &&
          !e.target.classList.contains(t.unpreventTouchClass) &&
          e.preventDefault();
        var n = this._event,
          r = e.targetTouches ? e.targetTouches[0] : e;
        (n.deltaX = (r.pageX - this.touchStartX) * t.touchMultiplier),
          (n.deltaY = (r.pageY - this.touchStartY) * t.touchMultiplier),
          (this.touchStartX = r.pageX),
          (this.touchStartY = r.pageY),
          this._notify(e);
      }),
      (Iu.prototype._onKeyDown = function (e) {
        var t = this._event;
        t.deltaX = t.deltaY = 0;
        var n = window.innerHeight - 40;
        switch (e.keyCode) {
          case ku:
          case Mu:
            t.deltaY = this.options.keyStep;
            break;
          case Bu:
          case Ou:
            t.deltaY = -this.options.keyStep;
            break;
          case e.shiftKey:
            t.deltaY = n;
            break;
          case Ru:
            t.deltaY = -n;
            break;
          default:
            return;
        }
        this._notify(e);
      }),
      (Iu.prototype._bind = function () {
        Su.hasWheelEvent &&
          this.el.addEventListener(
            "wheel",
            this._onWheel,
            this.listenerOptions
          ),
          Su.hasMouseWheelEvent &&
            this.el.addEventListener(
              "mousewheel",
              this._onMouseWheel,
              this.listenerOptions
            ),
          Su.hasTouch &&
            this.options.useTouch &&
            (this.el.addEventListener(
              "touchstart",
              this._onTouchStart,
              this.listenerOptions
            ),
            this.el.addEventListener(
              "touchmove",
              this._onTouchMove,
              this.listenerOptions
            )),
          Su.hasPointer &&
            Su.hasTouchWin &&
            ((this.bodyTouchAction = document.body.style.msTouchAction),
            (document.body.style.msTouchAction = "none"),
            this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
            this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
          Su.hasKeyDown &&
            this.options.useKeyboard &&
            document.addEventListener("keydown", this._onKeyDown);
      }),
      (Iu.prototype._unbind = function () {
        Su.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
          Su.hasMouseWheelEvent &&
            this.el.removeEventListener("mousewheel", this._onMouseWheel),
          Su.hasTouch &&
            (this.el.removeEventListener("touchstart", this._onTouchStart),
            this.el.removeEventListener("touchmove", this._onTouchMove)),
          Su.hasPointer &&
            Su.hasTouchWin &&
            ((document.body.style.msTouchAction = this.bodyTouchAction),
            this.el.removeEventListener(
              "MSPointerDown",
              this._onTouchStart,
              !0
            ),
            this.el.removeEventListener(
              "MSPointerMove",
              this._onTouchMove,
              !0
            )),
          Su.hasKeyDown &&
            this.options.useKeyboard &&
            document.removeEventListener("keydown", this._onKeyDown);
      }),
      (Iu.prototype.on = function (e, t) {
        this._emitter.on(Pu, e, t);
        var n = this._emitter.e;
        n && n[Pu] && 1 === n[Pu].length && this._bind();
      }),
      (Iu.prototype.off = function (e, t) {
        this._emitter.off(Pu, e, t);
        var n = this._emitter.e;
        (!n[Pu] || n[Pu].length <= 0) && this._unbind();
      }),
      (Iu.prototype.reset = function () {
        var e = this._event;
        (e.x = 0), (e.y = 0);
      }),
      (Iu.prototype.destroy = function () {
        this._emitter.off(), this._unbind();
      });
    const Lu = document.querySelector(".scroll");
    let qu = null;
    const ju = () => {
        document.body.style.overflowY = "auto";
      },
      Vu = () => {
        window.location.hash &&
          ((e, t) => {
            if (qu) qu.scrollTo(e, { duration: t || 0 === t ? t : 1e3 });
            else {
              const t = document.querySelector(e),
                n = t
                  ? t.getBoundingClientRect().top -
                    document.querySelector("main").getBoundingClientRect().top -
                    80
                  : 0;
              window.scrollTo(0, n);
            }
          })(window.location.hash.substring(window.location.hash.indexOf("#")));
      },
      Nu = () => {
        iu.refresh();
      };
    var Hu = n(69),
      Yu = n.n(Hu);
    const Wu = document.querySelector("#prldr-int");
    let zu = {
      ls: window.pageYOffset || document.documentElement.scrollTop,
      id: !1,
    };
    window.addEventListener(
      "scroll",
      function () {
        let e = window.pageYOffset || document.documentElement.scrollTop;
        zu = { id: e > zu.ls, ls: e <= 0 ? 0 : e };
      },
      !1
    );
    const Xu = Vi
      ? document.querySelector("#nav .inner")
      : document.querySelector("header .layout");
    let Uu, Gu, $u;
    const Ku = () => {
        $u && $u.play();
      },
      Qu = () => {
        zu.ls > 300
          ? (Uu.timeScale(1), Uu.play())
          : (Uu.timeScale(2), Uu.reverse());
      },
      Zu = () => {
        for (const e of document.querySelectorAll("main .se-d, #ftr.se-d")) {
          const t = e.getBoundingClientRect(),
            n = Xu.getBoundingClientRect(),
            r = n.top + n.height,
            i =
              (e.classList.contains("se-d"),
              t.top + t.height > r &&
                t.top < window.innerHeight &&
                t.top < r &&
                t.left + t.width > n.left);
          if ((Xu.classList.toggle("-d", i), Xu.classList.toggle("-l", !i), i))
            break;
        }
        for (const e of document.querySelectorAll("main .se-l")) {
          const t = e.getBoundingClientRect(),
            n = Xu.getBoundingClientRect(),
            r = n.top + n.height;
          t.top + t.height > r &&
            t.top < window.innerHeight &&
            t.top < r &&
            t.left + t.width > n.left &&
            (Xu.classList.toggle("-d", !1), Xu.classList.toggle("-l", !0));
        }
      },
      Ju = () => {
        Xu &&
          (($u = Sr.timeline({ paused: 1 }).from(Xu, {
            autoAlpha: 0,
            duration: 0.4,
          })),
          Zu(),
          window.addEventListener("scroll", () => {
            setTimeout(() => {
              Zu();
            }, 400);
          }),
          Vi &&
            ((Uu = Sr.timeline({ paused: 1 }).from(Xu, {
              y: 64800 / 58 + "%",
              duration: 1.12,
            })),
            Uu.progress(1).pause(),
            (Gu = Sr.timeline({
              scrollTrigger: {
                trigger: "header",
                start: "200% top",
                end: "200% top",
                toggleActions: "play none reverse none",
              },
            })
              .to(Xu, {
                width: "+=" + (128 * window.innerWidth) / 1440,
                x: (-64 * window.innerWidth) / 1440,
              })
              .to(Xu.querySelector(".apply-btn"), { autoAlpha: 1 }, "<"))));
      };
    let el,
      tl = document.querySelectorAll("#reviews h2 img");
    const nl = () => {
      (tl = document.querySelectorAll("#reviews h2 img")),
        tl.length &&
          (el = Sr.timeline({
            defaults: { duration: 0.88, ease: "avtrs.app" },
            scrollTrigger: {
              trigger: tl[0],
              start: "top 100%",
              end: "bottom 50%",
              scrub: !0,
            },
          })
            .from(tl[1], { x: "-75%" }, "<.08")
            .from(tl[2], { x: "-150%" }, "<.08")
            .from(tl[3], { x: "-225%" }, "<.08"));
    };
    let rl,
      il = document.querySelectorAll("#home-news .article-card");
    const ol = () => {
      (il = document.querySelectorAll("#home-news .article-card")),
        il.length &&
          (il.forEach((e, t) => {
            e.addEventListener("click", () => {
              var e;
              (e = t),
                il.forEach((t, n) => {
                  t.classList.toggle("-a", n === e);
                }),
                setTimeout(() => {
                  Zu();
                }, 300);
            });
          }),
          !rl &&
            Vi &&
            (rl = Sr.timeline({
              scrollTrigger: {
                trigger: "#home-news",
                start: "0 20%",
                once: !0,
              },
            })
              .set("#home-news .article-card:not(.-a)", {
                x: "6%",
                stagger: 0.1,
              })
              .set(
                "#home-news .article-card:not(.-a)",
                { clearProps: "transform", stagger: -0.1 },
                "+=.42"
              )));
    };
    let sl,
      al = document.querySelectorAll("#intro .datetime p");
    const ul = () => {
      (al = document.querySelectorAll("#intro .datetime p")),
        al.length > 1 &&
          ((sl = Sr.timeline({ repeat: -1, repeatDelay: 3 })),
          al.forEach((e, t) => {
            t !== al.length - 1
              ? sl.add(Ni(e, al[t + 1]), "<3")
              : sl.add(Ni(e, al[0]), "<3");
          }));
    };
    let ll,
      cl = document.querySelectorAll("#invest .cnt .ttl p"),
      hl = document.querySelectorAll("#invest .cnt .hnt p");
    const fl = () => {
      (cl = document.querySelectorAll("#invest .cnt .ttl p")),
        (hl = document.querySelectorAll("#invest .cnt .hnt p")),
        cl.length > 1 &&
          hl.length === cl.length &&
          ((ll = Sr.timeline({ repeat: -1, repeatDelay: 3 })),
          cl.forEach((e, t) => {
            t !== cl.length - 1
              ? (ll.add(Ni(cl[t], cl[t + 1]), "+=3"),
                ll.add(Ni(hl[t], hl[t + 1]), "<.12"))
              : (ll.add(Ni(cl[t], cl[0]), "+=3"),
                ll.add(Ni(hl[t], hl[0]), "<.12"));
          }));
    };
    let dl = { x: 0, y: 0 };
    window.addEventListener(
      "mousemove",
      (e) => {
        dl = { x: e.clientX, y: e.clientY };
      },
      !1
    );
    let pl = document.querySelector("#cta .sml.hi-t");
    const gl = () => {
      const {
          left: e,
          width: t,
          top: n,
          height: r,
        } = pl.getBoundingClientRect(),
        i = e + t / 2,
        o = n + r / 2,
        s = Math.atan2(dl.x - i, o - dl.y) * (180 / Math.PI) * -1 + 180;
      Sr.set(pl, { rotate: -s });
    };
    let vl,
      ml = document.querySelector("#reviews .cards .track");
    const yl = () => {
      (ml = document.querySelector("#reviews .cards .track")),
        ml &&
          Vi &&
          ((() => {
            if (!vl) {
              const e = ml.querySelectorAll(".review-card").length / 2;
              vl = Sr.timeline().fromTo(
                ml,
                { x: 0 },
                {
                  x: (52200 / 1456) * -e + "%",
                  ease: "none",
                  repeat: -1,
                  duration: 30,
                }
              );
            }
          })(),
          ml.parentNode.addEventListener("mouseenter", () => {
            vl.pause();
          }),
          ml.parentNode.addEventListener("mouseleave", () => {
            vl.play();
          }));
    };
    let Dl = {
      s_x: 0,
      s_y: 0,
      o_x: 0,
      o_y: 0,
      sw_t: !1,
      sw_b: !1,
      sw_l: !1,
      sw_r: !1,
    };
    window.addEventListener("touchstart", (e) => {
      Dl = {
        s_x: e.touches[0].clientX,
        s_y: e.touches[0].clientY,
        o_x: 0,
        o_y: 0,
        sw_t: !1,
        sw_b: !1,
        sw_l: !1,
        sw_r: !1,
      };
    }),
      window.addEventListener("touchmove", (e) => {
        (Dl.o_x = e.touches[0].clientX - Dl.s_x),
          (Dl.o_y = e.touches[0].clientY - Dl.s_y),
          (Dl.sw_t = Dl.o_y < -20),
          (Dl.sw_b = Dl.o_y > 20),
          (Dl.sw_l = Dl.o_x < -20),
          (Dl.sw_r = Dl.o_x > 20);
      });
    let xl = document.querySelector("#home-projects .sldr"),
      bl = 0,
      _l = 0,
      wl = 0,
      Cl = 0,
      Sl = !1,
      El = !1,
      Al = !1;
    const Tl = (e) => {
        e === bl ||
          Sl ||
          ((Sl = !0),
          (Cl += (100 / wl) * (e - bl)),
          (() => {
            const e = Cl >= 0,
              t = _l * (100 / wl);
            (Cl <= (100 / wl) * -(_l + 2) || e) &&
              (Sr.set(xl.querySelector(".track"), {
                x: (e ? "-=" : "+=") + t + "%",
              }),
              (Cl += t * (e ? -1 : 1)));
          })(),
          Sr.to(xl.querySelector(".track"), {
            x: Cl + "%",
            duration: 0.88,
            ease: "power2.inOut",
            onComplete: () => {
              Sl = !1;
            },
          }),
          (bl = e));
      },
      Fl = () => {
        if (
          ((xl = document.querySelector("#home-projects .sldr")),
          xl &&
            ((_l = xl.querySelectorAll(".track > *").length / 2),
            (wl = Math.floor(
              xl.getBoundingClientRect().width /
                xl.querySelector(".track > *").getBoundingClientRect().width
            ))),
          xl)
        ) {
          const e = xl.querySelector(".nav button.-next"),
            t = xl.querySelector(".nav button.-prev");
          (() => {
            const e = _l * (100 / wl);
            Sr.set(xl.querySelector(".track"), { x: -e + "%" }),
              (Cl = -e),
              (bl = _l);
          })(),
            e.addEventListener("click", () => {
              Tl(bl - 2);
            }),
            t.addEventListener("click", () => {
              Tl(bl + 2);
            }),
            xl.addEventListener(
              "touchstart",
              (e) => {
                El = !0;
              },
              { passive: !1 }
            ),
            window.addEventListener(
              "touchmove",
              (e) => {
                Al && e.preventDefault(),
                  El &&
                    Math.abs(Dl.o_x) > 20 &&
                    Math.abs(Dl.o_y) < 20 &&
                    ((Al = !0),
                    (El = !1),
                    Dl.sw_l ? Tl(bl - 1) : Dl.sw_r && Tl(bl + 1));
              },
              { passive: !1 }
            ),
            window.addEventListener("touchend", (e) => {
              (El = !1), (Al = !1);
            });
        }
      };
    let Pl = null;
    let kl = null;
    let Ml = document.querySelector("#explore .sldr"),
      Bl = 0,
      Ol = 0,
      Rl = 0,
      Il = 0,
      Ll = !1,
      ql = !1,
      jl = !1,
      Vl = [];
    const Nl = (e) => {
        if (e !== Bl && !Ll) {
          (Ll = !0), (Il += (100 / Rl) * (e - Bl));
          (() => {
            const e = Il >= 0,
              t = Ol * (100 / Rl);
            (Il <= (100 / Rl) * -(Ol + 2) || e) &&
              (Sr.set(Ml.querySelector(".track"), {
                x: (e ? "-=" : "+=") + t + "%",
              }),
              (Il += t * (e ? -1 : 1)));
          })(),
            Sr.to(Ml.querySelector(".track"), {
              x: Il + "%",
              duration: 0.88,
              ease: "power2.inOut",
              onComplete: () => {
                (Ll = !1),
                  (() => {
                    let e = [];
                    switch (Bl) {
                      case 0:
                      case 10:
                        e = [1, 2, 6, 7];
                        break;
                      case 2:
                      case 12:
                        e = [4, 5, 9, 10];
                        break;
                      case 4:
                        e = [2, 3, 7, 8];
                        break;
                      case 6:
                        e = [0, 1, 5, 6];
                        break;
                      case 8:
                        e = [3, 4, 8, 9];
                    }
                    console.log(Bl),
                      Vl.forEach((t, n) => {
                        -1 !== e.indexOf(n + 1) ? t.play() : t.reverse();
                      });
                  })();
              },
            }),
            (Bl = e);
        }
      },
      Hl = () => {
        if (
          ((Ml = document.querySelector("#explore .sldr")),
          Ml &&
            ((Ol = Ml.querySelectorAll(".track > *").length / 2),
            (Rl = Math.floor(
              Ml.getBoundingClientRect().width /
                Ml.querySelector(".track > *").getBoundingClientRect().width
            ))),
          Ml)
        ) {
          const e = Ml.parentNode.querySelector(".nav button.-next"),
            t = Ml.parentNode.querySelector(".nav button.-prev");
          (() => {
            const e = Ol * (100 / Rl);
            Sr.set(Ml.querySelector(".track"), { x: -e + "%" }), (Il = -e);
          })(),
            e.addEventListener("click", () => {
              Nl(Bl - 2);
            }),
            t.addEventListener("click", () => {
              Nl(Bl + 2);
            }),
            Ml.addEventListener(
              "touchstart",
              (e) => {
                ql = !0;
              },
              { passive: !1 }
            ),
            window.addEventListener(
              "touchmove",
              (e) => {
                jl && e.preventDefault(),
                  ql &&
                    Math.abs(Dl.o_x) > 20 &&
                    Math.abs(Dl.o_y) < 20 &&
                    ((jl = !0),
                    (ql = !1),
                    Dl.sw_l ? Nl(Bl - 1) : Dl.sw_r && Nl(Bl + 1));
              },
              { passive: !1 }
            ),
            window.addEventListener("touchend", (e) => {
              (ql = !1), (jl = !1);
            });
        }
      };
    let Yl = document.querySelector("#reviews .cards"),
      Wl = 0,
      zl = 0,
      Xl = 0,
      Ul = 0,
      Gl = !1,
      $l = !1,
      Kl = !1;
    const Ql = (e) => {
        e === Wl ||
          Gl ||
          ((Gl = !0),
          (Ul += (100 / Xl) * (e - Wl)),
          (() => {
            const e = Ul >= 0,
              t = zl * (100 / Xl);
            (Ul <= (100 / Xl) * -(zl + 2) || e) &&
              (Sr.set(Yl.querySelector(".track"), {
                x: (e ? "-=" : "+=") + t + "%",
              }),
              (Ul += t * (e ? -1 : 1)));
          })(),
          Sr.to(Yl.querySelector(".track"), {
            x: Ul + "%",
            duration: 0.88,
            ease: "power2.inOut",
            onComplete: () => {
              Gl = !1;
            },
          }),
          (Wl = e));
      },
      Zl = () => {
        (Yl = document.querySelector("#reviews .cards")),
          Yl &&
            ((zl = Yl.querySelectorAll(".track > *").length / 2),
            (Xl = Math.floor(
              Yl.getBoundingClientRect().width /
                Yl.querySelector(".track > *").getBoundingClientRect().width
            ))),
          Yl &&
            !Vi &&
            ((() => {
              const e = zl * (100 / Xl);
              Sr.set(Yl.querySelector(".track"), { x: -e + "%" }),
                (Ul = -e),
                (Wl = zl);
            })(),
            Yl.addEventListener(
              "touchstart",
              (e) => {
                $l = !0;
              },
              { passive: !1 }
            ),
            window.addEventListener(
              "touchmove",
              (e) => {
                Kl && e.preventDefault(),
                  $l &&
                    Math.abs(Dl.o_x) > 20 &&
                    Math.abs(Dl.o_y) < 20 &&
                    ((Kl = !0),
                    ($l = !1),
                    Dl.sw_l ? Ql(Wl - 1) : Dl.sw_r && Ql(Wl + 1));
              },
              { passive: !1 }
            ),
            window.addEventListener("touchend", (e) => {
              ($l = !1), (Kl = !1);
            }));
      };
    let Jl,
      ec = document.querySelectorAll("#core .wdgt");
    const tc = () => {
      (ec = document.querySelectorAll("#core .wdgt")),
        ec.length &&
          (Jl = Sr.timeline({
            defaults: { duration: 0.88 },
            scrollTrigger: {
              trigger: ec[0].parentNode,
              start: "top 90%",
              end: "bottom 50%",
              scrub: !0,
            },
          }).from(ec, { x: "90%", autoAlpha: 0, stagger: 0.2 }));
    };
    let nc = document.querySelector("#timeline"),
      rc = null;
    const ic = (e) => {
        if (nc && !rc) {
          const t = nc.querySelector(".tmln");
          rc = Sr.timeline({
            scrollTrigger: {
              trigger: nc,
              pin: nc,
              start: "55% 50%",
              end: "205% 50%",
              toggleActions: "play none none reverse",
              scrub: !0,
              onToggle: (e) => {
                e.isActive ? $u && $u.reverse() : Ku();
              },
            },
            defaults: { ease: "none" },
          }).to(t, { x: e }, "<");
        }
      },
      oc = () => {
        if (((nc = document.querySelector("#timeline")), nc)) {
          const e = nc.querySelectorAll(".tmln-pnt");
          let t = 0;
          const n = Vi ? (364 * window.innerWidth) / 1440 : 256;
          if (
            (e.forEach((e) => {
              const r = parseInt(e.dataset.mc);
              (e.style.width = (r / 12) * n + "px"), (t += r / 12);
            }),
            Vi)
          ) {
            const e =
              -n * t + nc.querySelector(".c-lg").getBoundingClientRect().width;
            ic(e);
          }
        }
      };
    let sc = document.querySelectorAll(".ac [data-sa]"),
      ac = [];
    const uc = () => {
      (sc = document.querySelectorAll(".ac [data-sa]")),
        sc.length &&
          (ac = iu.batch("[data-sa='a-b']", {
            once: !0,
            start: "-200px 100%",
            end: Vi ? "0 80%" : "0 90%",
            onEnter(e) {
              Sr.set(e, { autoAlpha: 0, y: 120 });
            },
            onLeave(e) {
              Sr.to(e, {
                autoAlpha: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.16,
              });
            },
          }));
    };
    let lc = document.querySelectorAll(".tag-btn"),
      cc = [];
    const hc = document.querySelector("header");
    let fc;
    const dc = (e) => {
        hc.classList.remove("-gr1", "-gr2", "-gr3"), e && hc.classList.add(e);
      },
      pc = () => {
        const e = document.querySelector(".ac #news-single .hdr");
        ["-gr1", "-gr2", "-gr3"].forEach((t) => {
          e.classList.contains(t) && dc(t);
        });
      },
      gc = document.querySelector("#menu"),
      vc = document.querySelectorAll(".brgr-btn");
    let mc;
    const yc = () => {
        mc &&
          (mc.play(),
          (document.body.style.overflowY = "hidden"),
          vc.forEach((e) => {
            e.classList.add("-cl");
          }));
      },
      Dc = () => {
        gc &&
          (mc ||
            (mc = Sr.timeline({ paused: !0 })
              .to(gc, { autoAlpha: 1 })
              .from(
                "#menu .bg",
                { transformOrigin: "50% 0", height: 0 },
                "<.16"
              )
              .from("#menu .line", { autoAlpha: 0 }, "<")
              .from(
                "#menu nav a",
                { autoAlpha: 0, y: 30, duration: 0.6, stagger: 0.12 },
                "<.1"
              )
              .from("#menu .scls", { autoAlpha: 0 }, "<.36")),
          vc.forEach((e) => {
            e.addEventListener("click", () => {
              e.classList.contains("-cl")
                ? mc &&
                  (mc.reverse(),
                  ju(),
                  vc.forEach((e) => {
                    e.classList.remove("-cl");
                  }))
                : yc();
            });
          }));
      };
    let xc,
      bc = document.querySelectorAll("#intro .datetime p");
    const _c = () => {
        bc.forEach((e) => {
          const t = parseInt(e.dataset.gtm),
            n = new Date();
          n.setHours(n.getHours() + t),
            (e.querySelector("span").textContent = n.toLocaleString("en-US", {
              timeZone: "Europe/London",
              hour12: !0,
              hour: "numeric",
              minute: "numeric",
            }));
        });
      },
      wc = () => {
        (bc = document.querySelectorAll("#intro .datetime p")),
          bc.length &&
            (_c(),
            (xc = setInterval(() => {
              _c();
            }, 1e4)));
      };
    var Cc = n(842),
      Sc = n.n(Cc);
    class Ec {
      $dom = null;
      $figures = [];
      canvasWidth = 0;
      canvasHeight = 0;
      terrainRectangles = [];
      terrainCircles = [];
      terrainFigures = [];
      circleReturnX = (e) => e;
      circleReturnY = (e) => e;
      physicsInstance = {};
      constructor(e) {
        (this.$dom = document.querySelector(e.domSelector)),
          this.$dom &&
            (this.$figures =
              this.$dom.parentNode.querySelectorAll(".project-circle")),
          (this.canvasWidth = e.canvasWidth),
          (this.canvasHeight = e.canvasHeight),
          (this.terrainRectangles = e.terrainRectangles),
          (this.terrainCircles = e.terrainCircles),
          (this.terrainFigures = e.terrainFigures),
          (this.circleReturnX = e.circleReturnX),
          (this.circleReturnY = e.circleReturnY),
          this.initEngine(),
          this.drawTerrain();
      }
      initEngine = () => {
        if (this.$dom) {
          const { Engine: e, Render: t, Runner: n } = Sc(),
            r = e.create(),
            i = r.world,
            o = t.create({
              element: this.$dom,
              engine: r,
              options: {
                width: this.canvasWidth,
                height: this.canvasHeight,
                wireframes: !1,
                background: "transparent",
              },
            });
          t.lookAt(o, {
            min: { x: 0, y: 0 },
            max: { x: this.canvasWidth, y: this.canvasHeight },
          }),
            o.canvas.classList.add("si-awh"),
            t.run(o);
          const s = n.create();
          n.run(s, r),
            (this.physicsInstance = {
              engine: r,
              world: i,
              runner: s,
              render: o,
            });
        }
      };
      drawTerrain = () => {
        if (this.physicsInstance.world) {
          const { Vertices: e, Bodies: t, Composite: n } = Sc(),
            r = (r, i, o) => {
              if (r.length > 2) {
                let s = "",
                  a = { min: r[0].x, max: 0 },
                  u = { min: r[0].y, max: 0 };
                r.forEach((e) => {
                  (s += `L ${e.x} ${e.y} `),
                    (a = {
                      min: Math.min(e.x, a.min),
                      max: Math.max(e.x, a.max),
                    }),
                    (u = {
                      min: Math.min(e.y, u.min),
                      max: Math.max(e.y, u.max),
                    });
                });
                const l =
                    i && "number" == typeof i.x
                      ? i.x
                      : (a.max - a.min) / 2 + a.min,
                  c =
                    i && "number" == typeof i.y
                      ? i.y
                      : (u.max - u.min) / 2 + u.min,
                  h = t.fromVertices(l, c, e.fromPath(s), o);
                return n.add(this.physicsInstance.world, h), h;
              }
            };
          this.physicsInstance.terrainBodies = [];
          const i = { isStatic: !0, render: { fillStyle: "transparent" } };
          this.terrainRectangles.forEach((e) => {
            const t = [
              { x: e.x0, y: e.y0 },
              { x: e.x0 + e.w, y: e.y0 },
              { x: e.x0 + e.w, y: e.y0 + e.h },
              { x: e.x0, y: e.y0 + e.h },
            ];
            this.physicsInstance.terrainBodies.push(r(t, null, i));
          }),
            this.terrainCircles.forEach((e) => {
              const r = t.circle(e.x, e.y, e.r, i);
              this.physicsInstance.terrainBodies.push(r),
                n.add(this.physicsInstance.world, r);
            }),
            this.terrainFigures.forEach((e) => {
              this.physicsInstance.terrainBodies.push(r(e.points, e.center, i));
            });
        }
      };
      drawCircles = () => {
        if (this.physicsInstance.world) {
          const { Bodies: e, Composite: t, Events: n } = Sc(),
            r = {
              restitution: Vi ? 0.8 : 0.2,
              slop: 0,
              render: { fillStyle: "transparent" },
            };
          (this.physicsInstance.figuresBodies = []),
            this.$figures.forEach((n, i) => {
              const o = e.circle(
                this.circleReturnX(i),
                this.circleReturnY(i),
                Vi ? 99 : 66,
                r
              );
              this.physicsInstance.figuresBodies.push({ figure: o, dom: n }),
                t.add(this.physicsInstance.world, o);
            }),
            n.on(
              this.physicsInstance.engine,
              "beforeUpdate",
              this.syncFigureDomPositions
            );
        }
      };
      syncFigureDomPositions = () => {
        this.physicsInstance.figuresBodies &&
          this.physicsInstance.figuresBodies.forEach(
            ({ figure: e, dom: t }) => {
              const n = e.position,
                r = e.angle * (180 / Math.PI),
                i = Vi ? window.innerWidth / 1440 : window.innerWidth / 375;
              t.style.transform =
                "translate(" +
                (n.x - e.circleRadius) * i +
                "px, " +
                (n.y - e.circleRadius) * i +
                "px) rotate(" +
                r +
                "deg)";
            }
          );
      };
      addDragCircles = () => {
        if (this.physicsInstance.world) {
          const {
            Mouse: e,
            MouseConstraint: t,
            Composite: n,
            Events: r,
          } = Sc();
          let i = e.create(this.physicsInstance.render.canvas),
            o = t.create(this.physicsInstance.engine, {
              mouse: i,
              constraint: { render: { visible: !1 } },
            });
          if (
            (n.add(this.physicsInstance.world, o),
            this.physicsInstance.render.canvas.removeEventListener(
              "mousewheel",
              i.mousewheel
            ),
            this.physicsInstance.render.canvas.addEventListener(
              "mouseout",
              () => {
                i.button = -1;
              }
            ),
            (this.physicsInstance.render.mouse = i),
            (this.physicsInstance.mouse = i),
            this.$figures.length && this.$figures[0].getAttribute("href"))
          ) {
            let e = -1;
            r.on(o, "mousemove", () => {
              const t = this.physicsInstance.figuresBodies.map((e) => e.figure),
                n = Sc().Query.point(t, i.position);
              (e = -1),
                this.physicsInstance.figuresBodies.forEach(
                  ({ figure: t, dom: r }, i) => {
                    n &&
                    n.length &&
                    t.id === n[0].id &&
                    n[0].speed < 0.1 &&
                    !o.body
                      ? (r.classList.add("-h"), (e = i))
                      : r.classList.remove("-h");
                  }
                ),
                this.$dom.classList.toggle("-pnt", -1 !== e);
            }),
              r.on(o, "mouseup", () => {
                this.physicsInstance.figuresBodies.hasOwnProperty(e) &&
                  this.physicsInstance.figuresBodies[e].dom.click();
              });
          }
          r.on(o, "startdrag", () => {
            this.$dom.classList.add("-drg");
          }),
            r.on(o, "enddrag", () => {
              this.$dom.classList.remove("-drg");
            });
        }
      };
      fallCircles = () => {
        this.drawCircles(),
          Vi && (console.log("fallCircles"), this.addDragCircles());
      };
      clearCircles = () => {
        this.physicsInstance.world &&
          this.physicsInstance.figuresBodies &&
          (this.physicsInstance.figuresBodies.forEach(
            ({ figure: e, dom: t }) => {
              Sc().Composite.remove(this.physicsInstance.world, e),
                (t.style.transform = "translateX(-110%)");
            }
          ),
          (this.physicsInstance.figuresBodies = []),
          Sc().Events.off(
            this.physicsInstance.engine,
            "beforeUpdate",
            this.syncFigureDomPositions
          ));
      };
      destroy() {
        if (this.physicsInstance.engine) {
          const e = this.physicsInstance.render;
          e.canvas.remove(),
            (e.canvas = null),
            (e.context = null),
            (e.textures = {}),
            Sc().Render.stop(this.physicsInstance.render),
            Sc().World.clear(this.physicsInstance.world),
            Sc().Engine.clear(this.physicsInstance.engine),
            Sc().Events.off(
              this.physicsInstance.engine,
              "beforeUpdate",
              this.syncFigureDomPositions
            ),
            (this.physicsInstance = {});
        }
      }
    }
    const Ac = Vi ? 1440 : 375,
      Tc = Vi ? 740 : 640,
      Fc = 6e3,
      Pc = 500,
      kc = {
        domSelector: "#error-intro .canvas",
        canvasWidth: Ac,
        canvasHeight: Tc,
        terrainRectangles: Vi
          ? [
              { x0: -500, y0: -Fc, w: 576, h: Tc + Fc + Pc },
              { x0: 0, y0: -7470, w: Ac, h: Pc },
              { x0: Ac, y0: -Fc, w: Pc, h: Fc + Tc + Pc },
              { x0: 0, y0: Tc, w: Ac, h: Pc },
            ]
          : [
              { x0: -500, y0: -Fc, w: 501, h: Tc + Fc + Pc },
              { x0: Ac + 20, y0: -Fc, w: Pc, h: Fc + Tc + Pc },
              { x0: 0, y0: Tc, w: Ac + 300, h: Pc },
            ],
        terrainCircles: [],
        terrainFigures: Vi
          ? [
              {
                center: { x: 0, y: 75 },
                points: [
                  { x: 91, y: 247 },
                  { x: 91, y: -522 },
                  { x: 1035, y: -522 },
                ],
              },
            ]
          : [],
        circleReturnX: (e) => (Vi ? 1200 + -80 * e : 400 + -200 * e),
        circleReturnY: (e) => -300 * e - 100,
      },
      Mc = Vi ? 1440 : 375,
      Bc = Vi ? 1177 : 775,
      Oc = 11e3,
      Rc = 500,
      Ic = {
        domSelector: "#intro .canvas",
        canvasWidth: Mc,
        canvasHeight: Bc,
        terrainRectangles: Vi
          ? [
              { x0: 0, y0: 15, w: 995, h: 345 },
              { x0: 995, y0: 70, w: 51, h: 231 },
              { x0: 0, y0: 812, w: 475, h: 365 },
              { x0: 475, y0: 868, w: 51, h: 309 },
              { x0: -500, y0: -11e3, w: Rc, h: Bc + Oc + Rc },
              { x0: 0, y0: -11e3, w: 1046, h: 11100 },
              { x0: 0, y0: -11500, w: Mc, h: Rc },
              { x0: Mc, y0: -11e3, w: Rc, h: Oc + Bc + Rc },
              { x0: 0, y0: Bc, w: Mc, h: Rc },
            ]
          : [
              { x0: -500, y0: -11e3, w: 501, h: Bc + Oc + Rc },
              { x0: 0, y0: -11e3, w: 241, h: 11325 },
              { x0: 240, y0: -11e3, w: 30, h: 11300 },
              { x0: 440, y0: -11e3, w: Rc, h: Oc + Bc + Rc },
              { x0: 0, y0: Bc, w: Mc + 300, h: Rc },
            ],
        terrainCircles: Vi
          ? [
              { x: 995, y: 66, r: 51 },
              { x: 995, y: 308, r: 51 },
              { x: 475, y: 864, r: 51 },
            ]
          : [{ x: 242, y: 297, r: 28 }],
        terrainFigures: Vi
          ? [
              {
                center: { x: 1128, y: 901 },
                points: [
                  { x: 524, y: 1180 },
                  { x: 1440, y: 374 },
                  { x: 1440, y: 1200 },
                  { x: 524, y: 1200 },
                ],
              },
            ]
          : [
              {
                center: { x: 269, y: 672 },
                points: [
                  { x: 6, y: 745 },
                  { x: 548, y: 269 },
                  { x: 548, y: 745 },
                ],
              },
            ],
        circleReturnX: (e) => (Vi ? 1200 : 400),
        circleReturnY: (e) => -400 * e - 100,
      },
      Lc = Vi ? 1440 : 375,
      qc = Vi ? 802 : 640,
      jc = 6e3,
      Vc = 500,
      Nc = {
        domSelector: "#projects-intro .canvas",
        canvasWidth: Lc,
        canvasHeight: qc,
        terrainRectangles: Vi
          ? [
              { x0: 0, y0: 610, w: 868, h: 400 },
              { x0: 867, y0: 652, w: 40, h: 400 },
              { x0: -500, y0: -6e3, w: Vc, h: qc + jc + Vc },
              { x0: 0, y0: -6e3, w: 868, h: jc },
              { x0: 0, y0: -6500, w: Lc, h: Vc },
              { x0: Lc, y0: -6e3, w: Vc, h: jc + qc + Vc },
              { x0: 0, y0: qc, w: Lc, h: Vc },
            ]
          : [
              { x0: 0, y0: 500, w: 31, h: 400 },
              { x0: 30, y0: 530, w: 30, h: 400 },
              { x0: -520, y0: -6e3, w: 501, h: qc + jc + Vc },
              { x0: 0, y0: -6e3, w: 241, h: jc },
              { x0: 440, y0: -6e3, w: Vc, h: jc + qc + Vc },
              { x0: 0, y0: qc, w: Lc + 300, h: Vc },
            ],
        terrainCircles: Vi
          ? [{ x: 867, y: 650, r: 40 }]
          : [{ x: 30, y: 530, r: 30 }],
        terrainFigures: Vi
          ? [
              {
                center: { x: 1128, y: 949 },
                points: [
                  { x: 524, y: 1180 },
                  { x: 1440, y: 374 },
                  { x: 1440, y: 1200 },
                  { x: 524, y: 1200 },
                ],
              },
            ]
          : [
              {
                center: { x: 269, y: 665 },
                points: [
                  { x: 6, y: 745 },
                  { x: 548, y: 269 },
                  { x: 548, y: 745 },
                ],
              },
            ],
        circleReturnX: (e) => (Vi ? 1200 : 400),
        circleReturnY: (e) => -400 * e - 100,
      },
      Hc = Vi ? 1440 : 375,
      Yc = Vi ? 820 : 622,
      Wc = 1e3,
      zc = 500,
      Xc = {
        domSelector: "#ftr .canvas",
        canvasWidth: Hc,
        canvasHeight: Yc,
        terrainRectangles: Vi
          ? [
              { x0: 0, y0: 685, w: 1e3, h: 800 },
              { x0: 995, y0: 735, w: 56, h: 600 },
              { x0: -500, y0: -1e3, w: zc, h: Yc + Wc + zc },
              { x0: 0, y0: -1500, w: Hc + 500, h: zc },
              { x0: Hc + 300, y0: -1e3, w: zc, h: Wc + Yc + zc },
              { x0: 0, y0: Yc + 400, w: Hc, h: zc },
            ]
          : [
              { x0: 0, y0: 486, w: 256, h: 400 },
              { x0: 255, y0: 506, w: 21, h: 400 },
              { x0: -520, y0: -1e3, w: 501, h: Yc + Wc + zc },
              { x0: 0, y0: -1500, w: Hc, h: zc },
              { x0: Hc + 300, y0: -1e3, w: zc, h: Wc + Yc + zc },
              { x0: 0, y0: Yc, w: Hc + 400, h: zc },
            ],
        terrainCircles: Vi
          ? [{ x: 1e3, y: 736, r: 51 }]
          : [{ x: 256, y: 506, r: 18 }],
        terrainFigures: Vi
          ? [
              {
                center: { x: 1338, y: 1230 },
                points: [
                  { x: 529, y: 1180 },
                  { x: 2054, y: -181 },
                  { x: 2054, y: 1200 },
                  { x: 529, y: 1200 },
                ],
              },
            ]
          : [
              {
                center: { x: 537, y: 572 },
                points: [
                  { x: 299, y: 637 },
                  { x: 789, y: 207 },
                  { x: 789, y: 637 },
                ],
              },
            ],
        circleReturnX: (e) => (Vi ? 1400 + -200 * e : 160 * e),
        circleReturnY: (e) => (Vi ? -200 : -80),
      };
    let Uc = null,
      Gc = [],
      $c = null;
    const Kc = () => {
        qu
          ? (iu.refresh(),
            qu.refresh(),
            qu.scrollTo(0, !1),
            document.querySelectorAll(".ac .fxd").forEach((e) => {
              iu.create({ trigger: Lu, pin: e, end: "200% top" });
            }))
          : window.scrollTo(0, 0),
          Gu && Gu.progress(0).pause(),
          $c &&
            ($c.st = iu.create({
              trigger: "#ftr .canvas",
              start: "bottom-=160 bottom",
              once: !0,
              onEnter() {
                $c.fallCircles();
              },
            })),
          uc(),
          Sr.set('.ac [data-sa="ia-b"]', { autoAlpha: 0, y: 120 }),
          document.querySelectorAll("a").forEach((e) => {
            e.classList.toggle(
              "-a",
              e.getAttribute("href") === window.location.pathname
            );
          }),
          setTimeout(() => {
            Vu();
          }, 100);
      },
      Qc = () => {
        Gc.forEach((e) => {
          e.destroy();
        }),
          (Gc = []),
          $c && ($c.st && ($c.st.kill(), ($c.st = null)), $c.clearCircles()),
          ac.length &&
            (ac.forEach((e) => {
              e.kill();
            }),
            (ac = []));
      },
      Zc = () => {
        "index" === Uc && Pl.play(),
          Gc.length &&
            Gc.forEach((e) => {
              e.fallCircles();
            }),
          Sr.to('.ac [data-sa="ia-b"]', {
            autoAlpha: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.16,
          });
      },
      Jc = () => {
        history.scrollRestoration && (history.scrollRestoration = "manual"),
          Yu().hooks.beforeEnter(({ next: e }) => {
            (Uc = e.namespace), e.container.classList.add("ac"), Kc();
          }),
          Yu().hooks.beforeLeave(({ current: e }) => {
            e.container.classList.remove("ac");
          }),
          Yu().hooks.afterLeave(({ current: e }) => {
            Qc();
          }),
          Yu().init({
            transitions: [
              {
                leave() {
                  const e = this.async();
                  new Promise((e, t) => {
                    Sr.timeline()
                      .set(Wu, { visibility: "visible" })
                      .fromTo(
                        Wu,
                        { y: "100%" },
                        {
                          y: "0%",
                          duration: 1,
                          ease: "expo.in",
                          onComplete: () => {
                            e();
                          },
                        }
                      );
                  }).then(() => {
                    e();
                  });
                },
                after() {
                  Sr.timeline({
                    onStart: () => {
                      Zc();
                    },
                  })
                    .to(Wu, { y: "-100%", duration: 1.2, ease: "expo.out" })
                    .set(Wu, { visibility: "hidden" }),
                    ((e, t) => {
                      if ("string" == typeof t && "function" == typeof e[t])
                        e[t]();
                      else {
                        const n =
                          "string" == typeof t
                            ? new Event(t, { bubbles: !0 })
                            : t;
                        e.dispatchEvent(n);
                      }
                    })(document, "DOMContentLoaded"),
                    mc &&
                      (mc.pause().progress(0),
                      ju(),
                      vc.forEach((e) => {
                        e.classList.remove("-cl");
                      })),
                    Zu();
                },
              },
            ],
            views: [
              {
                namespace: "index",
                afterEnter() {
                  Uu &&
                    (window.addEventListener("scroll", Qu),
                    Uu.progress(0).pause()),
                    nl(),
                    ol(),
                    ul(),
                    fl(),
                    yl(),
                    Fl(),
                    Zl(),
                    wc(),
                    Gc.push(new Ec(Ic)),
                    Pl ||
                      (Pl = Sr.timeline({
                        paused: 1,
                        defaults: { duration: 0.66 },
                      })
                        .from(
                          "#intro h1",
                          {
                            y: 120,
                            autoAlpha: 0,
                            duration: 1.2,
                            ease: "power3.out",
                          },
                          "<"
                        )
                        .from("#intro .datetime", { autoAlpha: 0 }, "<.4")),
                    (() => {
                      const e = document.querySelector("#competencies");
                      e &&
                        !kl &&
                        ((kl = Sr.timeline({
                          scrollTrigger: {
                            trigger: e,
                            start: "10% 50%",
                            end: "70% 50%",
                            scrub: !0,
                          },
                          defaults: { ease: "none" },
                        })
                          .set(
                            "#competencies .inner svg .line-igaming",
                            { rotate: -270, transformOrigin: "center center" },
                            "<"
                          )
                          .set(
                            "#competencies .inner svg .line-esports",
                            { rotate: -90, transformOrigin: "center center" },
                            "<"
                          )
                          .set(
                            "#competencies .inner svg .line-marketing",
                            { rotate: -180, transformOrigin: "center center" },
                            "<"
                          )
                          .from(
                            "#competencies .inner svg .line-igaming circle",
                            { drawSVG: 0 }
                          )
                          .from(
                            "#competencies .inner svg .line-esports circle",
                            { drawSVG: 0 },
                            "<"
                          )
                          .from(
                            "#competencies .inner svg .line-marketing circle",
                            { drawSVG: 0 },
                            "<"
                          )
                          .from(
                            "#competencies .inner svg .marketing",
                            { rotate: -520 },
                            "<"
                          )
                          .from(
                            "#competencies .inner svg .esports",
                            { rotate: -600 },
                            "<"
                          )
                          .from(
                            "#competencies .inner svg .igaming",
                            { rotate: -300 },
                            "<"
                          )
                          .to(
                            "#competencies .inner svg .logo-circle",
                            { scale: 1.2 },
                            "<"
                          )),
                        Vi &&
                          iu.create({
                            trigger: e,
                            pin: "#home-projects",
                            start: "50% 45%",
                            end: "100% 50%",
                            pinType: "transform",
                          }));
                    })();
                },
                afterLeave() {
                  Uu &&
                    (window.removeEventListener("scroll", Qu),
                    Uu.progress(1).pause()),
                    el && (el.kill(), (el = null)),
                    rl && (rl.kill(), (rl = null)),
                    vl && (vl.kill(), (vl = null)),
                    sl && (sl.kill(), (sl = null)),
                    ll && (ll.kill(), (ll = null)),
                    xc && (clearInterval(xc), (xc = null)),
                    Pl && (Pl.kill(), (Pl = null)),
                    kl && (kl.kill(), (kl = null));
                },
              },
              {
                namespace: "about",
                afterEnter() {
                  Hl(), tc(), oc();
                },
                afterLeave() {
                  Jl && (Jl.kill(), (Jl = null)),
                    rc && (rc.kill(), (rc = null));
                },
              },
              {
                namespace: "projects",
                afterEnter() {
                  Gc.push(new Ec(Nc));
                },
                afterLeave() {},
              },
              {
                namespace: "error",
                afterEnter() {
                  Gc.push(new Ec(kc));
                },
                afterLeave() {},
              },
              {
                namespace: "news-single",
                afterEnter() {
                  pc(),
                    (() => {
                      if (!fc) {
                        const e = document
                            .querySelector("header")
                            .getBoundingClientRect(),
                          t = e.top + e.height;
                        fc = iu.create({
                          trigger: document.querySelector(
                            ".ac #news-single .hdr"
                          ),
                          end: "bottom-=" + t + " top",
                          onToggle: (e) => {
                            e.isActive ? (pc(), Zu()) : dc("");
                          },
                        });
                      }
                    })();
                },
                afterLeave() {
                  var e;
                  fc && (fc.kill(), (fc = null)),
                    dc(""),
                    (e = "-d"),
                    Xu.classList.remove("-d", "-l"),
                    Xu.classList.add(e);
                },
              },
            ],
          }),
          ($c = new Ec(Xc));
      },
      eh = document.querySelector("#prldr");
    var th = function () {
        (() => {
          Sr.registerPlugin(ao),
            Sr.registerPlugin(iu),
            Lu &&
              Vi &&
              ((qu = ao.create({ content: Lu, smooth: 2, effects: !1 })),
              qu.scrollTo(0, !1),
              document.querySelectorAll(".scroll > .fxd").forEach((e) => {
                iu.create({ trigger: Lu, pin: e, end: "200% top" });
              }),
              new ResizeObserver((e) => {
                qu && e[0].target.clientHeight > 0 && Nu();
              }).observe(Lu));
          iu.config({ ignoreMobileResize: !0 });
        })(),
          Ju(),
          Jc(),
          lc.length &&
            Vi &&
            lc.forEach((e, t) => {
              cc.push(
                Sr.timeline({ paused: 1 })
                  .to(e, { borderRadius: 8 }, "<")
                  .to(
                    e.querySelectorAll("span.-h"),
                    { width: "auto", stagger: 0.04 },
                    "<"
                  )
              ),
                e.addEventListener("mouseenter", () => {
                  cc[t].play();
                }),
                e.addEventListener("mouseleave", () => {
                  cc[t].reverse();
                });
            }),
          pl &&
            Vi &&
            (window.addEventListener("mousemove", gl),
            window.addEventListener("scroll", gl)),
          Dc();
      },
      nh = function () {
        Sr.timeline()
          .fromTo(
            "header",
            { autoAlpha: 0, y: "-100%" },
            { autoAlpha: 1, y: 0, duration: 0.66 },
            "<"
          )
          .add(function () {
            Ku();
          }, "<.12");
      },
      rh = function () {
        var e, t;
        eh && Yi(),
          th(),
          (e = 1),
          (t = 1),
          Hi &&
            Sr.to(Hi, {
              progress: e,
              duration: t || 0.4,
              ease: "none",
              onUpdate: () => {},
              onComplete: () => {
                1 === e &&
                  Sr.to(eh, {
                    autoAlpha: 0,
                    delay: 0.4,
                    duration: 0.4,
                    onComplete: () => {
                      nh(), Zc(), ju();
                    },
                  });
              },
            });
      };
    document.fonts
      ? document.fonts.ready.then(function () {
          rh();
        })
      : rh();
  })();
})();
