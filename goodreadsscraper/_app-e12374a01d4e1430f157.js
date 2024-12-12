_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [22],
  {
    "+5ea": function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return a.a;
      }),
        n.d(t, "e", function () {
          return r;
        }),
        n.d(t, "f", function () {
          return i;
        }),
        n.d(t, "g", function () {
          return o;
        }),
        n.d(t, "c", function () {
          return c.c;
        }),
        n.d(t, "a", function () {
          return c.a;
        }),
        n.d(t, "b", function () {
          return c.b;
        });
      var a = n("mW/1"),
        r = function (e) {
          return 1 === e.length
            ? e[0]
            : e.length
            ? e.reduce(function (t, n, a, r) {
                var i = e.length > 2 ? "," : "";
                return ""
                  .concat(t)
                  .concat(
                    a === r.length - 1
                      ? "".concat(i, " and ")
                      : "".concat(i, " ")
                  )
                  .concat(n);
              })
            : "";
        };
      function i(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { year: "numeric", month: "long", day: "numeric" },
          n = new Date(e);
        return new Intl.DateTimeFormat("en-US", t).format(n);
      }
      var o = function (e) {
          if (!e) return "0";
          if (e < 1e4) return e.toLocaleString("en");
          var t = "",
            n = e,
            a = 1;
          return (
            e < 1e6
              ? ((t = "k"),
                (n /= 1e3),
                (e >= 1e5 || +n.toFixed(a) % 1 === 0) && (a = 0))
              : ((t = "m"), (n /= 1e6), (a = 0)),
            "".concat(n.toFixed(a)).concat(t)
          );
        },
        c = n("/xWf");
      n("K4CH");
    },
    "+UXa": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      }),
        n.d(t, "b", function () {
          return a;
        });
      var a,
        r = n("cpVT"),
        i = n("xvhg"),
        o = n("HALo"),
        c = n("dhJC"),
        u = n("q1tI"),
        s = n("zAUr"),
        d = n("+5ea"),
        l = n("/iJQ"),
        f = n("huxJ"),
        v = n("BEb3"),
        m = n("Qu/W"),
        b = n("Mlv5"),
        g = (n("LX0Q"), u.createElement),
        p = "TruncatedContent";
      !(function (e) {
        (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large");
      })(a || (a = {}));
      var C = function (e, t) {
          e && t(e.clientHeight < e.scrollHeight);
        },
        h = function (e) {
          var t = e.truncateTo,
            n = void 0 === t ? a.MEDIUM : t,
            o = e.expandAction,
            c = e.collapseAction,
            l = e.disableExpand,
            v = void 0 !== l && l,
            m = e.children,
            h = u.useState(!1),
            L = Object(i.a)(h, 2),
            O = L[0],
            y = L[1],
            k = u.useState(!1),
            w = Object(i.a)(k, 2),
            j = w[0],
            S = w[1],
            T = u.useState(!1),
            I = Object(i.a)(T, 2),
            E = I[0],
            N = I[1],
            x = Object(s.a)([
              Object(d.d)(p, "text"),
              Object(d.d)(p, "text", n),
              Object(r.a)({}, Object(d.d)(p, "text", "expanded"), j),
            ]),
            A = u.useCallback(
              function () {
                j || C(undefined, y);
              },
              [n]
            ),
            P = Object(b.a)({ onResize: A }).ref;
          Object(f.d)(function () {
            j || C(P.current, y);
          }),
            u.useEffect(
              function () {
                var e;
                E &&
                  (null === (e = P.current) || void 0 === e || e.focus(),
                  N(!1));
              },
              [j]
            );
          var M = null;
          return (
            O &&
              (!j && o
                ? (M = u.cloneElement(o, {
                    onClick: function (e) {
                      var t, n;
                      v || S(!0),
                        (null === o ||
                        void 0 === o ||
                        null === (t = o.props) ||
                        void 0 === t
                          ? void 0
                          : t.onClick) &&
                          (null === o ||
                            void 0 === o ||
                            null === (n = o.props) ||
                            void 0 === n ||
                            n.onClick(e)),
                        N(!0);
                    },
                  }))
                : j &&
                  c &&
                  (M = u.cloneElement(c, {
                    onClick: function (e) {
                      var t, n;
                      S(!1),
                        (null === c ||
                        void 0 === c ||
                        null === (t = c.props) ||
                        void 0 === t
                          ? void 0
                          : t.onClick) &&
                          (null === c ||
                            void 0 === c ||
                            null === (n = c.props) ||
                            void 0 === n ||
                            n.onClick(e)),
                        N(!0);
                    },
                  }))),
            g(
              "div",
              { className: p, tabIndex: -1 },
              g(
                "div",
                {
                  className: x,
                  tabIndex: -1,
                  ref: P,
                  "data-testid": "contentContainer",
                },
                m
              ),
              g(
                "div",
                {
                  className: Object(s.a)([
                    Object(r.a)({}, Object(d.d)(p, "gradientOverlay"), O && !j),
                  ]),
                },
                M
              )
            )
          );
        };
      (h.CollapseAction = function (e) {
        var t = e.children,
          n = e.ariaLabel,
          a = void 0 === n ? "Collapse additional content" : n,
          r = Object(c.a)(e, ["children", "ariaLabel"]);
        return t
          ? g(l.b, Object(o.a)({ variant: l.e.Tertiary, ariaLabel: a }, r), t)
          : g(
              l.b,
              Object(o.a)({ variant: l.e.Tertiary, ariaLabel: a }, r),
              "Show less",
              g(m.g, { "aria-label": "", direction: v.b.Up })
            );
      }),
        (h.ExpandAction = function (e) {
          var t = e.children,
            n = e.ariaLabel,
            a = void 0 === n ? "Expand visually hidden content" : n,
            r = Object(c.a)(e, ["children", "ariaLabel"]);
          return t
            ? g(l.b, Object(o.a)({ variant: l.e.Tertiary, ariaLabel: a }, r), t)
            : g(
                l.b,
                Object(o.a)({ variant: l.e.Tertiary, ariaLabel: a }, r),
                "Show more",
                g(m.g, { "aria-label": "", direction: v.b.Down })
              );
        });
    },
    "/+2S": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var a = n("dhJC"),
        r = n("q1tI"),
        i = n("syl4"),
        o = n("+5ea"),
        c = (n("SmhE"), r.createElement),
        u = function (e) {
          var t,
            n = e.max,
            a = void 0 === n ? 3 : n,
            i = e.overflow,
            o = e.children,
            u =
              null === (t = r.Children.toArray(o)) || void 0 === t
                ? void 0
                : t.filter(function (e) {
                    return e;
                  });
          return (
            a && (u = u.slice(0, Math.max(0, i ? a - 1 : a))),
            c("div", { className: "AvatarGroup" }, u, i && i)
          );
        };
      u.Number = function (e) {
        var t = e.number,
          n = Object(a.a)(e, ["number"]);
        if (t <= 0) return null;
        var r = t > 99 ? "99+" : t;
        return c(
          i.a,
          n,
          c(
            "div",
            {
              "data-testid": "numberDisplay",
              className: Object(o.d)("AvatarGroup", "overflowAvatar"),
            },
            r
          )
        );
      };
    },
    "/iJQ": function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return a.d;
      }),
        n.d(t, "c", function () {
          return a.b;
        }),
        n.d(t, "d", function () {
          return a.c;
        }),
        n.d(t, "b", function () {
          return a.a;
        }),
        n.d(t, "f", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return d.a;
        });
      var a = n("MAIN"),
        r = n("q1tI"),
        i = n("+5ea"),
        o = n("Qu/W"),
        c = n("eyEu"),
        u = r.createElement,
        s = function (e) {
          var t = e.webUrl,
            n = e.label,
            r = void 0 === n ? "Show all" : n,
            s = e.ariaLabel,
            d = Object(c.a)({ moreThan: i.c.Medium });
          return t
            ? u(
                "div",
                null,
                d
                  ? u(
                      a.a,
                      { href: t, variant: a.d.Tertiary, ariaLabel: s },
                      r,
                      u(o.g, { direction: o.m.Right })
                    )
                  : u(
                      a.a,
                      {
                        href: t,
                        block: !0,
                        variant: a.d.Secondary,
                        ariaLabel: s,
                      },
                      r
                    )
              )
            : null;
        },
        d = n("0sDs");
    },
    "/mUK": function (e, t, n) {
      "use strict";
      var a = n("K4CH"),
        r = n.n(a),
        i = function (e) {
          var t,
            n,
            a = new r.a(e),
            i = null === (t = a.getOS()) || void 0 === t ? void 0 : t.name,
            o = null === (n = a.getBrowser()) || void 0 === n ? void 0 : n.name;
          return {
            isWebView:
              ((null === i || void 0 === i ? void 0 : i.includes("Android")) &&
                (null === o || void 0 === o
                  ? void 0
                  : o.includes("WebView"))) ||
              ((null === i || void 0 === i ? void 0 : i.includes("iOS")) &&
                (null === o || void 0 === o ? void 0 : o.includes("WebKit"))) ||
              null,
          };
        };
      t.a = {
        getWebView: i,
        getSurfaceAndBrowser: function (e) {
          var t, n, a;
          return {
            surface:
              (null === (t = new r.a(e).getOS()) ||
              void 0 === t ||
              null === (n = t.name) ||
              void 0 === n ||
              null === (a = n.toLowerCase()) ||
              void 0 === a
                ? void 0
                : a.replace(/\s+/g, "_")) || null,
            browserName: i(e).isWebView ? "webview" : "web",
          };
        },
      };
    },
    "/xWf": function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return i;
        }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return c;
        }),
        n.d(t, "e", function () {
          return u;
        });
      var a,
        r = n("INQH");
      !(function (e) {
        (e.Smallest = "smallest"),
          (e.XSmall = "xsmall"),
          (e.Small = "small"),
          (e.Medium = "medium"),
          (e.Large = "large"),
          (e.XLarge = "xlarge"),
          (e.XXLarge = "xxlarge");
      })(a || (a = {}));
      var i = {
          smallest: r["breakpoint-smallest"],
          xsmall: r["breakpoint-xsmall"],
          small: r["breakpoint-small"],
          medium: r["breakpoint-medium"],
          large: r["breakpoint-large"],
          xlarge: r["breakpoint-xlarge"],
          xxlarge: r["breakpoint-xxlarge"],
        },
        o = Object.keys(a).reduce(function (e, t) {
          var n = r["breakpoint-".concat(a[t])].replace("px", "");
          return (e[a[t]] = Number(n)), e;
        }, {}),
        c = function () {
          return !0;
        },
        u = function (e) {
          var t = null === e || void 0 === e ? void 0 : e.split("px");
          return (null === t || void 0 === t ? void 0 : t.length) < 1
            ? (console.warn("invalid breakpoint"), null)
            : "".concat(t[0] / 16, "em");
        };
    },
    "09FE": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a = n("q1tI"),
        r = (n("2Qfy"), a.createElement, n("nhBE"), a.createElement),
        i = function () {
          return r(
            "svg",
            {
              className: "GoodreadsWordmark",
              viewBox: "0 0 673.8 144",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r("path", {
              d: "m66.7 86.4h-0.3c-3.3 14.5-18.2 23-32.2 23-22.9 0-34.2-18.2-34.2-39.2 0-22 12.1-40.2 35.2-40.2 15.6 0 27.9 10.4 31.1 23.8h0.3v-21.9h3.2v79.3c0 22.3-12.8 32.8-34.1 32.8-16.6 0-30.8-7.5-31.3-25.8h3.2c0.6 16.3 13.1 22.6 27.9 22.6 19.8 0 31.1-9.4 31.1-29.7v-24.7zm-31.5-53.2c-21.2 0-32.1 17.1-32.1 37 0 20.3 10.8 36.1 30.8 36.1 21.1 0 32.6-16.3 32.6-36.1 0.2-18.9-10.7-37-31.3-37z",
              fill: "#372213",
            }),
            r("path", {
              d: "m115.8 30c23.9 0 36.8 20.6 36.8 42.9 0 22.5-12.9 42.9-37 42.9-23.9 0-36.9-20.4-36.9-42.9 0.1-22.3 13-42.9 37.1-42.9zm0 82.6c21.8 0 33.6-19 33.6-39.7 0-20.4-11.8-39.7-33.6-39.7-22.2 0-33.8 19.3-33.8 39.7 0 20.7 11.6 39.7 33.8 39.7z",
              fill: "#372213",
            }),
            r("path", {
              d: "m194.6 30c23.9 0 36.8 20.6 36.8 42.9 0 22.5-12.9 42.9-37 42.9-23.9 0-36.8-20.4-36.8-42.9 0-22.3 12.9-42.9 37-42.9zm0 82.6c21.9 0 33.6-19 33.6-39.7 0-20.4-11.8-39.7-33.6-39.7-22.2 0-33.8 19.3-33.8 39.7-0.1 20.7 11.6 39.7 33.8 39.7z",
              fill: "#372213",
            }),
            r("path", {
              d: "m304.4 0h3.2v113.9h-3.2v-23h-0.3c-4.1 14.3-16.1 24.9-32.8 24.9-21.7 0-34.9-18-34.9-42.7 0-23 12.3-43.1 34.9-43.1 17.4 0 29 10.1 32.8 24.9h0.3v-54.9zm-33.1 33.2c-22.5 0-31.7 20.9-31.7 39.9 0 21 10.5 39.5 31.7 39.5 21.1 0 33.2-18.3 33.2-39.5-0.1-25.4-13.3-39.9-33.2-39.9z",
              fill: "#372213",
            }),
            r("path", {
              d: "m323.1 31.6h9.2v19.3h0.3c5.1-13.2 16.3-21.1 31.1-20.4v10c-18.2-1-30.6 12.4-30.6 29.5v43.9h-10.1v-82.3z",
              fill: "#372213",
            }),
            r("path", {
              d: "m372.4 75.4c0.1 14.7 7.8 32.4 27.1 32.4 14.7 0 22.6-8.6 25.8-21h10.1c-4.3 18.7-15.2 29.5-35.9 29.5-26.1 0-37.1-20.1-37.1-43.5 0-21.7 11-43.5 37.1-43.5 26.5 0 37 23.1 36.2 46.2h-63.3zm53.2-8.4c-0.5-15.1-9.9-29.4-26.2-29.4s-25.4 14.4-27 29.4h53.2z",
              fill: "#372213",
            }),
            r("path", {
              d: "m444.3 56.8c0.9-19.3 14.5-27.6 33.3-27.6 14.5 0 30.3 4.5 30.3 26.5v43.7c0 3.8 1.9 6.1 5.9 6.1 1.1 0 2.4-0.3 3.2-0.6v8.4c-2.2 0.5-3.8 0.6-6.6 0.6-10.2 0-11.8-5.7-11.8-14.4h-0.3c-7 10.7-14.2 16.7-30 16.7-15.1 0-27.6-7.5-27.6-24.1 0-23.1 22.5-23.9 44.2-26.5 8.3-1 12.9-2.1 12.9-11.2 0-13.6-9.7-16.9-21.6-16.9-12.4 0-21.7 5.8-22 19.2h-9.9zm53.6 12.1h-0.3c-1.3 2.4-5.8 3.2-8.5 3.7-17.1 3-38.3 2.9-38.3 19 0 10.1 8.9 16.3 18.3 16.3 15.3 0 28.9-9.7 28.7-25.8v-13.2z",
              fill: "#372213",
            }),
            r("path", {
              d: "m596.5 113.9h-9.2v-15.7h-0.3c-4.3 10.7-17.4 18-29.3 18-25.1 0-37-20.2-37-43.5s11.9-43.5 37-43.5c12.3 0 24.2 6.2 28.5 18h0.3v-47.2h10v113.9zm-38.9-6.1c21.4 0 28.9-18 28.9-35.1s-7.5-35.1-28.9-35.1c-19.1 0-27 18-27 35.1s7.8 35.1 27 35.1z",
              fill: "#372213",
            }),
            r("path", {
              d: "m660.9 55.6c-0.5-12.4-10-18-21.5-18-8.9 0-19.4 3.5-19.4 14.2 0 8.9 10.2 12.1 17.1 13.9l13.4 3c11.5 1.8 23.4 8.5 23.4 22.8 0 17.9-17.7 24.7-33 24.7-19.1 0-32.2-8.9-33.8-29h10c0.8 13.5 10.9 20.6 24.3 20.6 9.4 0 22.5-4.1 22.5-15.6 0-9.6-8.9-12.7-18-15l-12.9-2.9c-13.1-3.5-23-8-23-22 0-16.7 16.4-23.1 30.9-23.1 16.4 0 29.5 8.6 30.1 26.5h-10.1z",
              fill: "#372213",
            })
          );
        };
    },
    "0aYe": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a.a;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return f;
        });
      var a = n("JMfI"),
        r = n("q1tI"),
        i = n.n(r),
        o = i.a.createContext({ isWebView: !1 }),
        c = n("s/Ur"),
        u = n("K4CH"),
        s = n.n(u),
        d = i.a.createElement,
        l = { mobile: 360, tablet: 1024, desktop: 1366 },
        f = function (e) {
          var t = e.userAgent,
            n = e.children,
            a = Object(r.useState)(
              t &&
                (function (e) {
                  var t,
                    n =
                      (null === (t = new s.a(e).getDevice()) || void 0 === t
                        ? void 0
                        : t.type) || "desktop";
                  return l[n];
                })(t)
            ),
            i = a[0],
            o = a[1];
          return (
            Object(r.useEffect)(function () {
              o(null);
            }, []),
            d(c.Context.Provider, { value: i && { width: i } }, n)
          );
        };
    },
    "0sDs": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var a = n("HALo"),
        r = n("dhJC"),
        i = n("q1tI"),
        o = i.createElement,
        c = function (e) {
          var t = e.children,
            n = Object(r.a)(e, ["children"]),
            i = n.onClick,
            c = n.href,
            u = n.as,
            s = n.className,
            d = n.rel,
            l = n.tabIndex,
            f = n.target,
            v = Object(r.a)(n, [
              "onClick",
              "href",
              "as",
              "className",
              "rel",
              "tabIndex",
              "target",
            ]),
            m = u || "button";
          return (
            c ? (m = "a") : i && (m = "button"),
            o(
              m,
              Object(a.a)(
                {
                  className: s,
                  href: c,
                  onClick: i,
                  rel: d,
                  target: f,
                  tabIndex: l,
                },
                v
              ),
              t
            )
          );
        };
    },
    "0yOa": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return c;
        });
      var a = n("q1tI"),
        r = (n("6IDz"), a.createElement),
        i = function (e) {
          var t = e.children;
          return r("dl", { className: "DescList" }, t);
        },
        o = (n("uVRh"), a.createElement),
        c = function (e) {
          var t = e.term,
            n = e.children;
          return o(
            "div",
            { className: "DescListItem" },
            o("dt", null, t),
            o("dd", null, n)
          );
        };
    },
    101: function (e, t) {},
    104: function (e, t) {},
    105: function (e, t) {},
    106: function (e, t) {},
    107: function (e, t) {},
    108: function (e, t) {},
    109: function (e, t) {},
    110: function (e, t) {},
    111: function (e, t) {},
    112: function (e, t) {},
    113: function (e, t) {},
    114: function (e, t) {},
    115: function (e, t) {},
    116: function (e, t) {},
    117: function (e, t) {},
    175: function (e, t, n) {
      n("74v/"), (e.exports = n("nOHt"));
    },
    "1AZd": function (e, t, n) {},
    "1JQt": function (e, t, n) {
      "use strict";
      var a,
        r = n("vDqi"),
        i = n.n(r);
      !(function (e) {
        (e.Info = "INFO"), (e.Debug = "DEBUG"), (e.Error = "ERROR");
      })(a || (a = {}));
      var o = function (e, t) {
          var n = null;
          return (
            t
              ? "string" !== typeof t
                ? (n = "tried to log but message was not a string")
                : e
                ? Object.values(a).includes(e) ||
                  (n = "tried to log with invalid log type")
                : (n = "tried to log but log type was missing")
              : (n = "tried to log without a message"),
            n
          );
        },
        c = function (e, t) {
          var n = o(e, t);
          return n
            ? (u(n), n)
            : i.a
                .post("/logging", { logType: e, message: t })
                .then(function (e) {
                  return e;
                })
                .catch(function () {});
        },
        u = function (e) {
          return c(a.Error, e);
        },
        s = {
          info: function (e) {
            return c(a.Info, e);
          },
          debug: function (e) {
            return c(a.Debug, e);
          },
          error: u,
          logDirectly: function (e, t) {
            return c(e, t, !0);
          },
        };
      t.a = s;
    },
    "1d9J": function (e, t, n) {},
    "2BWV": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a = n("LvDl"),
        r = n("z+5B"),
        i = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 100;
          Object(r.a)(
            function () {
              var n = Object(a.debounce)(e, t);
              return (
                window.addEventListener("resize", n),
                function () {
                  return window.removeEventListener("resize", n);
                }
              );
            },
            [e, t]
          );
        };
    },
    "2Qfy": function (e, t, n) {},
    "2RA7": function (e, t, n) {},
    "2ViY": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var a = n("cpVT"),
        r = n("q1tI"),
        i = (n("R3xS"), n("Wgwc")),
        o = n.n(i),
        c = n("QgiU"),
        u = n.n(c),
        s = n("sAIs"),
        d = n.n(s),
        l = n("+5ea"),
        f = n("zAUr"),
        v = r.createElement;
      o.a.extend(u.a),
        o.a.extend(d.a),
        o.a.updateLocale("en", {
          relativeTime: {
            future: "%s",
            past: "%s ago",
            s: "a few seconds",
            m: "1 minute",
            mm: "%d minutes",
            h: "1 hour",
            hh: "%d hours",
            d: "1 day",
            dd: "%d days",
            M: "1 month",
            MM: "%d months",
            y: "1 year",
            yy: "%d years",
          },
        });
      var m = function (e) {
        var t = e.time,
          n = e.warnBelowSeconds,
          r = o()(t).diff(o()(), "second"),
          i = !!n && r > 0 && r < n;
        return v(
          "span",
          {
            className: Object(f.a)(
              Object(a.a)({}, Object(l.d)("RelativeTime", void 0, "warning"), i)
            ),
          },
          o()(t).fromNow()
        );
      };
    },
    "2guB": function (e, t, n) {},
    "3H69": function (e, t, n) {},
    "3kwt": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return v;
      });
      var a = n("HALo"),
        r = n("dhJC"),
        i = n("q1tI"),
        o = n.n(i),
        c = n("mW/1"),
        u = (n("4Qru"), n("/iJQ")),
        s = o.a.createElement,
        d = function (e) {
          var t = e.shouldTruncate,
            n = e.isTruncated,
            r = e.actionOnClick,
            i = e.trailingSeparator,
            c = e.expandActionProps,
            d = e.collapseActionProps;
          return t
            ? n && !c
              ? null
              : n || d
              ? s(
                  o.a.Fragment,
                  null,
                  i,
                  s(
                    u.b,
                    Object(a.a)({ variant: u.e.Inline }, n ? c : d, {
                      onClick: function (e) {
                        n
                          ? (null === c || void 0 === c ? void 0 : c.onClick) &&
                            c.onClick(e)
                          : (null === d || void 0 === d ? void 0 : d.onClick) &&
                            d.onClick(e),
                          r();
                      },
                      ariaHidden: !0,
                      dataTestId: n ? "more_button" : "less_button",
                      tabIndex: 0,
                    }),
                    n
                      ? (null === c || void 0 === c ? void 0 : c.children) ||
                          "...more"
                      : (null === d || void 0 === d ? void 0 : d.children) ||
                          "...less"
                  )
                )
              : null
            : null;
        },
        l = o.a.createElement,
        f = function (e, t, n) {
          return e
            ? e.reduce(function (e, a, r) {
                return (
                  e.push(
                    l(
                      o.a.Fragment,
                      { key: r },
                      (n || 0 !== r) && t && l("span", { tabIndex: -1 }, t),
                      a
                    )
                  ),
                  e
                );
              }, [])
            : [];
        },
        v = function (e) {
          var t,
            n = e.show,
            u = void 0 === n ? 1 / 0 : n,
            s = e.startExpanded,
            v = void 0 !== s && s,
            m = e.as,
            b = void 0 === m ? "ul" : m,
            g = e.separator,
            p = e.trailingSeparator,
            C = void 0 === p ? " " : p,
            h = e.expandActionProps,
            L = e.collapseActionProps,
            O = e.onToggleTruncate,
            y = e.children,
            k = Object(r.a)(e, [
              "show",
              "startExpanded",
              "as",
              "separator",
              "trailingSeparator",
              "expandActionProps",
              "collapseActionProps",
              "onToggleTruncate",
              "children",
            ]),
            w = o.a.Children.count(y) > u,
            j = Object(i.useState)(w && !v),
            S = j[0],
            T = j[1];
          Object(i.useEffect)(
            function () {
              T(w && !v);
            },
            [w, v]
          );
          var I = b,
            E = o.a.Children.toArray(y),
            N =
              null === (t = f(E, g, !1)) || void 0 === t
                ? void 0
                : t.slice(0, u),
            x = f(E.slice(u), g, !0);
          return l(
            I,
            Object(a.a)({ className: "CollapsableListV2" }, k),
            l("span", null, N),
            l(
              "span",
              {
                id: "collapsible-content",
                className: Object(c.a)(
                  "CollapsableListV2",
                  "collapsible",
                  S ? "is-truncated" : ""
                ),
              },
              x
            ),
            l(d, {
              shouldTruncate: w,
              isTruncated: S,
              actionOnClick: function () {
                T(function (e) {
                  var t = !e;
                  return O && O(t), t;
                });
              },
              trailingSeparator: C,
              expandActionProps: h,
              collapseActionProps: L,
            })
          );
        };
    },
    "4Qru": function (e, t, n) {},
    "4RhV": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "c", function () {
          return m;
        });
      var a,
        r = n("q1tI"),
        i = n.n(r);
      !(function (e) {
        (e.Light = "light"), (e.Dark = "dark");
      })(a || (a = {}));
      var o = i.a.createContext({
          theme: a.Light,
          toggleTheme: function (e) {},
        }),
        c = n("H+61"),
        u = n("UlJF"),
        s = n("7LId"),
        d = n("VIvw"),
        l = n("iHvq"),
        f = i.a.createElement;
      function v(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
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
        })();
        return function () {
          var n,
            a = Object(l.a)(e);
          if (t) {
            var r = Object(l.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(d.a)(this, n);
        };
      }
      var m = (function (e) {
        Object(s.a)(n, e);
        var t = v(n);
        function n(e) {
          var r;
          return (
            Object(c.a)(this, n),
            ((r = t.call(this, e)).state = {
              theme: a.Light,
              toggleTheme: function (e) {
                r.setState(function (t) {
                  return { theme: t.theme === e ? a.Light : e };
                });
              },
            }),
            r
          );
        }
        return (
          Object(u.a)(n, [
            {
              key: "componentDidUpdate",
              value: function () {
                var e = this.state.theme;
                document.documentElement.setAttribute("data-theme", e);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.children;
                return f(o.Provider, { value: this.state }, e);
              },
            },
          ]),
          n
        );
      })(i.a.Component);
    },
    "4T7U": function (e, t, n) {
      "use strict";
      var a = n("LqFF");
      n.o(a, "HeaderSearch") &&
        n.d(t, "HeaderSearch", function () {
          return a.HeaderSearch;
        });
      var r = n("MN4P");
      n.d(t, "HeaderSearch", function () {
        return r.a;
      });
    },
    "4u2Z": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      }),
        n.d(t, "d", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return d;
        }),
        n.d(t, "b", function () {
          return l;
        });
      var a = n("yLiY"),
        r = n.n(a),
        i = n("vm/7"),
        o = (r()() || {}).publicRuntimeConfig,
        c = (null === o || void 0 === o ? void 0 : o.env) || "Development",
        u = function (e) {
          var t = e;
          return (
            ("Development" === c && "undefined" !== typeof e && null !== e) ||
              (t = c),
            i[t]
          );
        },
        s = function () {
          return "Production" === c;
        },
        d = function () {
          return "Preprod" === c;
        },
        l = function () {
          return "Development" === c;
        };
    },
    "4xvm": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var a,
        r = n("q1tI"),
        i = n.n(r),
        o = (n("cEXk"), n("jLmM"), n("+5ea")),
        c = n("8y1Z"),
        u = n("50TJ"),
        s = n("VX74"),
        d = n("/iJQ"),
        l = n("tN2f"),
        f = n("5bkh"),
        v = n("Qu/W"),
        m = (n("aZfW"), i.a.createElement);
      function b(e) {
        var t = e.loadingTextSize,
          n = void 0 === t ? a.REGULAR : t,
          r = e.withDivider,
          o = void 0 !== r && r;
        return m(
          i.a.Fragment,
          null,
          m(
            "div",
            { className: "LoadingCard" },
            n === a.SMALL && m(f.g, null, "Loading..."),
            n === a.REGULAR && m(f.d, null, "Loading..."),
            m(d.b, { disabled: !0 }, m(v.E, null))
          ),
          o && m(l.a, null)
        );
      }
      !(function (e) {
        (e[(e.SMALL = 0)] = "SMALL"), (e[(e.REGULAR = 1)] = "REGULAR");
      })(a || (a = {}));
      var g = n("GVCB"),
        p = n.n(g),
        C = i.a.createElement,
        h = function () {
          var e = Object(s.useQuery)(p.a, { ssr: !1 }),
            t = e.loading,
            n = e.error,
            r = e.data;
          if (t)
            return C(
              "div",
              { className: Object(o.d)("Spotlight", "loadingState") },
              C(b, { loadingTextSize: a.SMALL })
            );
          var i = null === r || void 0 === r ? void 0 : r.getBasicGenres;
          return n || !(null === i || void 0 === i ? void 0 : i.genres)
            ? null
            : C(
                "div",
                { className: Object(o.d)("Spotlight") },
                C(
                  "span",
                  { className: Object(o.d)("Spotlight", "listTitle") },
                  "Genres"
                ),
                C(
                  "ul",
                  { className: Object(o.d)("Spotlight", "basicGenresList") },
                  r.getBasicGenres.genres.map(function (e) {
                    var t = e.name,
                      n = e.webUrl;
                    return C(
                      "li",
                      { key: t },
                      C(u.a, { href: n, refTag: c.a.Genres }, t)
                    );
                  }),
                  C(
                    "li",
                    null,
                    C(
                      u.a,
                      {
                        href: "https://www.goodreads.com/genres",
                        refTag: c.a.Genres,
                      },
                      "More Genres"
                    )
                  )
                )
              );
        };
    },
    "50TJ": function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return s;
      }),
        n.d(t, "a", function () {
          return d;
        }),
        n.d(t, "b", function () {
          return l.b;
        }),
        n.d(t, "c", function () {
          return f.a;
        });
      var a = n("HALo"),
        r = n("dhJC"),
        i = n("q1tI"),
        o = n.n(i),
        c = n("8y1Z"),
        u = o.a.createElement,
        s = function (e, t) {
          var n = Object(i.useContext)(l.b).state;
          if (null != e)
            return (function (e, t, n) {
              var a = e.includes("?") ? "&" : "?",
                r = t.refTags.concat([n]).join("_");
              return r ? "".concat(e).concat(a, "ref=").concat(r) : e;
            })(e, { refTags: n.refTags || [] }, t);
        },
        d = function (e) {
          var t = e.refTag,
            n = void 0 === t ? c.a.Link : t,
            i = e.href,
            o = Object(r.a)(e, ["refTag", "href"]),
            d = s(i, n);
          return u("a", Object(a.a)({ href: d, tabIndex: 0 }, o));
        },
        l = n("nmzc"),
        f = n("DXQO");
    },
    "52tz": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return v;
      });
      var a = n("cpVT"),
        r = n("vDqi"),
        i = n.n(r),
        o = n("Prh1"),
        c = n("1JQt"),
        u = n("4u2Z"),
        s = n("MEx9");
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var f = n("JPgR"),
        v = function (e) {
          var t = ""
              .concat(
                Object(s.h)(e.dataSource).oidcAuthUrl,
                "?response_type=token&response_mode=cookie&client_id="
              )
              .concat(Object(s.h)(e.dataSource).siriusClientId),
            n = {
              httpsAgent: new f.Agent({ rejectUnauthorized: Object(u.d)() }),
              headers: l(
                {
                  cookie:
                    void 0 === e.cookieString
                      ? o.a.getAllAsHeader(e.context)
                      : e.cookieString,
                },
                e.headers
              ),
              withCredentials: !0,
            };
          return i.a
            .get(t, n)
            .then(function (t) {
              var n = t.headers["set-cookie"];
              if (void 0 === e.context) return n;
              var a = Object(u.d)() ? n : o.a.withoutSecureFlag(n);
              return (
                o.a.setCookieWithContext(e.context, a),
                o.a.getResponseCookieFromContext(s.d, e.context)
              );
            })
            .catch(function (t) {
              if (t.response && 401 === t.response.status) {
                var n = t.response.headers["set-cookie"];
                if (void 0 === e.context) return n;
                o.a.setCookieWithContext(e.context, o.a.withoutSecureFlag(n));
              } else {
                var a;
                c.a.error(
                  "Auth_token endpoint from Monolith failed with ".concat(
                    null === (a = t.response) || void 0 === a
                      ? void 0
                      : a.status
                  )
                );
              }
            });
        };
    },
    "54Mc": function (e, t) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "getViewer" },
            variableDefinitions: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "getUser" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "viewerNotifications" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "pagination" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "after" },
                                  value: { kind: "NullValue" },
                                },
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "limit" },
                                  value: { kind: "IntValue", value: "10" },
                                },
                              ],
                            },
                          },
                        ],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "edges" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "node" },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "actors",
                                          },
                                          arguments: [],
                                          directives: [],
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "edges",
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "node",
                                                      },
                                                      arguments: [],
                                                      directives: [],
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "name",
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                          },
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "imageUrl",
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                          },
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "webUrl",
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "body" },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "viewed",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "directlyAddressed",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "moreActors",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "resourceText",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "resourceUrl",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "historyMessage",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 497 },
      };
      n.loc.source = {
        body: "query getViewer {\n  getUser {\n    viewerNotifications(pagination: { after: null, limit: 10 }) {\n      edges {\n        node {\n          actors {\n            edges {\n              node {\n                name\n                imageUrl\n                webUrl\n              }\n            }\n          }\n          body\n          createdAt\n          viewed\n          directlyAddressed\n          moreActors\n          resourceText\n          resourceUrl\n          historyMessage\n        }\n      }\n    }\n  }\n}\n",
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == t) return a;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          !(function e(t, n) {
            if ("FragmentSpread" === t.kind) n.add(t.name.value);
            else if ("VariableDefinition" === t.kind) {
              var a = t.type;
              "NamedType" === a.kind && n.add(a.name.value);
            }
            t.selectionSet &&
              t.selectionSet.selections.forEach(function (t) {
                e(t, n);
              }),
              t.variableDefinitions &&
                t.variableDefinitions.forEach(function (t) {
                  e(t, n);
                }),
              t.definitions &&
                t.definitions.forEach(function (t) {
                  e(t, n);
                });
          })(e, t),
            (a[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.getViewer = (function (e, t) {
          var n = { kind: e.kind, definitions: [r(e, t)] };
          e.hasOwnProperty("loc") && (n.loc = e.loc);
          var i = a[t] || new Set(),
            o = new Set(),
            c = new Set();
          for (
            i.forEach(function (e) {
              c.add(e);
            });
            c.size > 0;

          ) {
            var u = c;
            (c = new Set()),
              u.forEach(function (e) {
                o.has(e) ||
                  (o.add(e),
                  (a[e] || new Set()).forEach(function (e) {
                    c.add(e);
                  }));
              });
          }
          return (
            o.forEach(function (t) {
              var a = r(e, t);
              a && n.definitions.push(a);
            }),
            n
          );
        })(n, "getViewer"));
    },
    "5au/": function (e, t, n) {},
    "5bkh": function (e, t, n) {
      "use strict";
      var a;
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "e", function () {
          return b;
        }),
        n.d(t, "d", function () {
          return p;
        }),
        n.d(t, "f", function () {
          return h;
        }),
        n.d(t, "g", function () {
          return O;
        }),
        n.d(t, "c", function () {
          return k;
        }),
        n.d(t, "h", function () {
          return j;
        }),
        n.d(t, "b", function () {
          return d;
        }),
        n.d(t, "k", function () {
          return S.b;
        }),
        n.d(t, "i", function () {
          return S.a;
        }),
        n.d(t, "j", function () {
          return T.a;
        }),
        (function (e) {
          (e.XLarge = "body-xlarge"),
            (e.Large = "body-large"),
            (e.Regular = "body-regular"),
            (e.Small = "body-small"),
            (e.Tiny = "body-tiny");
        })(a || (a = {}));
      var r,
        i = n("q1tI"),
        o = n.n(i),
        c = (n("8Avt"), n("cpVT")),
        u = n("zAUr"),
        s = n("+5ea");
      n("yoKB");
      !(function (e) {
        (e.Umber = "text-body-standard"), (e.Subdued = "text-subdued");
      })(r || (r = {}));
      var d,
        l,
        f,
        v = function (e) {
          var t,
            n = e.htmlTag,
            a = e.itemProp,
            r = e.className,
            i = e.children,
            d = e.color,
            l = e.italic,
            f = void 0 !== l && l,
            v = e.id,
            m = [
              "Text",
              r,
              ((t = {}),
              Object(c.a)(t, Object(s.d)("Text", void 0, d), d),
              Object(c.a)(t, Object(s.d)("Text", void 0, "italic"), f),
              t),
            ];
          return o.a.createElement(
            n,
            { className: Object(u.a)(m), id: v, itemProp: a },
            i
          );
        },
        m = o.a.createElement,
        b = function (e) {
          var t = e.seoTag,
            n = e.itemProp,
            a = e.children;
          return m(
            v,
            { htmlTag: t || "h1", className: "H1Title", itemProp: n },
            a
          );
        },
        g = (n("udIM"), o.a.createElement),
        p = function (e) {
          var t = e.seoTag,
            n = e.itemProp,
            a = e.children;
          return g(v, { htmlTag: t || "h1", className: "H1", itemProp: n }, a);
        },
        C = (n("bOiA"), o.a.createElement),
        h = function (e) {
          var t = e.seoTag,
            n = e.itemProp,
            a = e.color,
            r = e.children,
            i = e.italic,
            o = e.id;
          return C(
            v,
            {
              htmlTag: t || "h2",
              className: "H2",
              itemProp: n,
              color: a,
              italic: i,
              id: o,
            },
            r
          );
        },
        L = (n("1AZd"), o.a.createElement),
        O = function (e) {
          var t = e.seoTag,
            n = e.itemProp,
            a = e.children;
          return L(v, { htmlTag: t || "h3", className: "H3", itemProp: n }, a);
        },
        y =
          (n("ICw5"),
          o.a.createElement,
          n("x7PL"),
          o.a.createElement,
          n("9R5L"),
          o.a.createElement,
          n("vbYf"),
          o.a.createElement),
        k = function (e) {
          var t = e.dangerousUserText,
            n = void 0 === t ? "" : t,
            a = e.children;
          if (a && n)
            throw new Error(
              "You cannot provide both `children` and `dangerousUserText` to <Formatted>. Pick one."
            );
          return a
            ? y("span", { className: "Formatted" }, a)
            : y("span", {
                className: "Formatted",
                dangerouslySetInnerHTML: { __html: n },
              });
        },
        w = (n("sHoD"), o.a.createElement),
        j = function (e) {
          var t = e.seoTag,
            n = e.itemProp,
            a = e.children;
          return w(
            v,
            { htmlTag: t || "small", className: "Small", itemProp: n },
            a
          );
        };
      !(function (e) {
        (e.Regular = "regular"),
          (e.Semibold = "semibold"),
          (e.Book = "book"),
          (e.Medium = "medium"),
          (e.Bold = "bold");
      })(d || (d = {})),
        (function (e) {
          (e.ProximaNova = "proxima-nova"),
            (e.Copernicus = "copernicus"),
            (e.Lato = "lato"),
            (e.Merriweather = "merriweather");
        })(l || (l = {})),
        (function (e) {
          (e.Capitalize = "capitalize"),
            (e.Lowercase = "lowercase"),
            (e.Uppercase = "uppercase");
        })(f || (f = {}));
      var S = n("yugg"),
        T = n("5vdI");
    },
    "5vdI": function (e, t, n) {
      "use strict";
      var a;
      n.d(t, "a", function () {
        return a;
      }),
        (function (e) {
          (e.Subdued = "subdued"),
            (e.BodyLight = "body-light"),
            (e.BodyStandard = "body-standard"),
            (e.Umber = "umber"),
            (e.PrimaryAction = "primary-action"),
            (e.HeadingText = "heading-text"),
            (e.Author = "author"),
            (e.MetadataText = "metadata-text");
        })(a || (a = {}));
    },
    "5x8S": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var a = n("z7pX"),
        r = n("q1tI"),
        i = n("wzmU"),
        o = n("7+Ly"),
        c = n("0aYe"),
        u = function () {
          var e,
            t,
            n,
            u = Object(r.useContext)(i.d).state,
            s =
              null !==
                (e =
                  null === (t = Object(r.useContext)(c.a)) || void 0 === t
                    ? void 0
                    : t.signedIn) &&
              void 0 !== e &&
              e;
          return {
            state: u,
            createRefTag:
              ((n = u),
              function () {
                for (
                  var e = n.refTags,
                    t = void 0 === e ? [] : e,
                    r = arguments.length,
                    i = new Array(r),
                    o = 0;
                  o < r;
                  o++
                )
                  i[o] = arguments[o];
                var c = [].concat(Object(a.a)(t), i).filter(function (e) {
                  return !!e;
                });
                return c.join("_");
              }),
            logAction: function (e, t, n) {
              !(function (e, t, n) {
                var a,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {},
                  i = r.pageTypeIdOverride,
                  c = r.refOverride,
                  u = r.hitType,
                  s = r.requestId,
                  d = r.startTime,
                  l = r.statusCode;
                "undefined" !== typeof i
                  ? (a = i)
                  : "pageTypeId" in e && (a = e.pageTypeId),
                  o.b.logActionHit(t, n, {
                    pageTypeIdOverride: a,
                    refOverride: c,
                    hitType: u,
                    requestId: s,
                    startTime: d,
                    statusCode: l,
                  });
              })(n || u, e, s, t);
            },
          };
        };
    },
    "6IDz": function (e, t, n) {},
    "6pJD": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var a = n("HALo"),
        r = n("q1tI"),
        i = n("+5ea"),
        o = n("ixbk"),
        c = n("/iJQ"),
        u = n("Nv3j"),
        s = (n("8J2n"), r.createElement),
        d = function (e) {
          var t = e.ariaLabel,
            n = void 0 === t ? "" : t,
            a = e.children;
          if (n) {
            var i = n.replace(/ /g, "-").toLowerCase();
            return s(
              "div",
              { role: "group", "aria-labelledby": i },
              s("span", { id: i, className: "u-sr-only" }, n),
              a
            );
          }
          return s(r.Fragment, null, a);
        },
        l = function (e) {
          var t = e.data,
            n = e.truncateTo,
            r = e.variant,
            l = void 0 === r ? c.e.Secondary : r,
            f = e.size,
            v = e.buttonLabels,
            m = e.ariaLabel,
            b = e.onChipClick,
            g = void 0 === b ? function () {} : b,
            p = function (e) {
              return function (t) {
                var n;
                return (
                  null === t ||
                    void 0 === t ||
                    null === (n = t.target) ||
                    void 0 === n ||
                    n.scrollIntoView({ block: "nearest", inline: "nearest" }),
                  g && g(e)
                );
              };
            },
            C = t.map(function (e) {
              return s(
                "div",
                { key: e.label, className: Object(i.d)("ChipList", "item") },
                s(
                  u.a,
                  Object(a.a)({ onClick: p(e), size: f, variant: l }, e),
                  e.label
                )
              );
            });
          return s(
            d,
            { ariaLabel: m },
            s(
              "div",
              { className: "ChipList" },
              n
                ? s(
                    o.a,
                    {
                      as: "div",
                      show: n,
                      expandActionProps: {
                        variant: l,
                        size: f,
                        children:
                          v &&
                          (null === v || void 0 === v ? void 0 : v.length) >
                            0 &&
                          v[0],
                      },
                      collapseActionProps: {
                        variant: l,
                        size: f,
                        children:
                          v &&
                          (null === v || void 0 === v ? void 0 : v.length) >
                            1 &&
                          v[1],
                      },
                    },
                    C
                  )
                : C
            )
          );
        };
    },
    "7+Ly": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return v;
      }),
        n.d(t, "b", function () {
          return m.b;
        }),
        n.d(t, "c", function () {
          return b;
        }),
        n.d(t, "d", function () {
          return S;
        }),
        n.d(t, "e", function () {
          return T.a;
        }),
        n.d(t, "f", function () {
          return H;
        });
      var a,
        r,
        i,
        o = n("vJKn"),
        c = n.n(o),
        u = n("rg98"),
        s = n("vDqi"),
        d = n.n(s),
        l = n("1JQt"),
        f = (function () {
          var e = Object(u.a)(
            c.a.mark(function e(t, n, a) {
              return c.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), d.a.post(t, n);
                      case 3:
                        e.next = 8;
                        break;
                      case 5:
                        (e.prev = 5), (e.t0 = e.catch(0)), a(e.t0);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 5]]
              );
            })
          );
          return function (t, n, a) {
            return e.apply(this, arguments);
          };
        })(),
        v = {
          sendBeaconWithFallback: function (e, t, n) {
            var a, r;
            (null === (a = navigator) ||
            void 0 === a ||
            null === (r = a.sendBeacon) ||
            void 0 === r
              ? void 0
              : r.call(a, e, JSON.stringify(t))) ||
              f(e, t, n).catch(function (e) {
                l.a.error(e.toString());
              });
          },
        },
        m = n("hWbD"),
        b = n("Yqt1"),
        g = n("z7pX"),
        p = n("K4CH"),
        C = n.n(p),
        h = n("bwyV"),
        L = n("/mUK");
      !(function (e) {
        (e.SignedIn = "signed_in"), (e.SignedOut = "signed_out");
      })(a || (a = {})),
        (function (e) {
          (e.Desktop = "desktop"), (e.Mobile = "mobile");
        })(r || (r = {})),
        (function (e) {
          (e.Csr = "csr"), (e.Ssr = "ssr");
        })(i || (i = {}));
      var O,
        y = function () {
          return (
            "object" === typeof window.ue &&
            "function" === typeof window.ues &&
            "function" === typeof window.uet &&
            "function" === typeof window.uex &&
            "object" === typeof window.ue.sc
          );
        },
        k = function () {
          return y() ? Object.entries(window.ue.sc).length : 0;
        },
        w = function () {
          return 0 === k();
        },
        j = function (e, t) {
          var n,
            o = h.a.getCurrentPageTypeData(t),
            c = t ? a.SignedIn : a.SignedOut,
            u = (function () {
              var e;
              return "mobile" ===
                (null === (e = new C.a().getDevice()) || void 0 === e
                  ? void 0
                  : e.type)
                ? r.Mobile
                : r.Desktop;
            })(),
            s = w() ? i.Ssr : i.Csr,
            d = L.a.getSurfaceAndBrowser(
              (null === (n = navigator) || void 0 === n
                ? void 0
                : n.userAgent) || ""
            ),
            l = d.surface,
            f = d.browserName,
            v = (function (e, t, n) {
              if ("webview" !== n) return e;
              var a = "ios" === t || "android" === t ? t : null;
              return a ? [].concat(Object(g.a)(e), [a, n]) : e;
            })([o.pageType, o.subPageType, c, u, s], l, f).join(":");
          window.ue.tag(v, e);
        },
        S = {
          recordClientLoadStart: function () {
            if (y()) {
              var e = "scope".concat(k());
              !(function (e) {
                window.ue.current_scope = e;
              })(e),
                window.uet("tc", e),
                window.ues("t0", e, new Date());
            }
          },
          recordPageLoadEnd: function (e, t) {
            if (y()) {
              var n = (function () {
                if (y()) return w() ? "ssrPageLoad" : window.ue.current_scope;
              })();
              w() || (window.ues("id", n, e), window.uet("be", n)),
                j(n, t),
                (function (e) {
                  window.ues("ctb", e, 1);
                })(n),
                window.uet("fn", n),
                (function (e) {
                  window.uex("ld", e);
                })(n);
            }
          },
        },
        T = n("dEn3"),
        I = n("nOHt"),
        E = n.n(I);
      !(function (e) {
        (e.Start = "startTime"), (e.Duration = "value");
      })(O || (O = {}));
      var N,
        x,
        A = Object.freeze({
          TTFB: [{ name: "TimeToFirstByte", measure: O.Duration }],
          FCP: [{ name: "FirstContentfulPaint", measure: O.Duration }],
          LCP: [{ name: "LargestContentfulPaint", measure: O.Duration }],
          "Next.js-hydration": [
            { name: "HydrationDuration", measure: O.Duration },
            { name: "TimeToHydrationStart", measure: O.Start },
          ],
        }),
        P = n("pv95"),
        M = n("tZtT"),
        B = n("DFlP"),
        D = n("Prh1");
      !(function (e) {
        (e.DESKTOP = "o"), (e.MOBILE = "m");
      })(N || (N = {})),
        (function (e) {
          (e.DESKTOP = "desktop"), (e.MOBILE = "mobile");
        })(x || (x = {}));
      var F = function (e, t) {
          return "mobile" ===
            (function (e, t) {
              var n,
                a = D.a.get("mobvious.device_type", t);
              return "undefined" !== typeof a
                ? a
                : null === (n = new C.a(e).getDevice()) || void 0 === n
                ? void 0
                : n.type;
            })(e, t)
            ? N.MOBILE
            : N.DESKTOP;
        },
        _ = function () {
          return {
            Name: "SiteVariant",
            Value: F(navigator.userAgent) === N.MOBILE ? "Mobile" : "Desktop",
          };
        },
        R = n("4u2Z"),
        H = {
          publishWebVitals: function (e) {
            if (Object(R.a)().publishWebVitalMetrics && e.name in A) {
              var t = [
                Object(B.a)(E.a.asPath),
                _(),
                M.b.getAuthStatusDimensionFromDocument(),
              ];
              A[e.name].forEach(function (n) {
                var a = n.name,
                  r = n.measure,
                  i = e[r];
                P.a.reportLatency(a, t, i);
              });
            }
          },
        };
    },
    "74v/": function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n("cha2");
        },
      ]);
    },
    "75bO": function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return d;
      }),
        n.d(t, "a", function () {
          return f;
        }),
        n.d(t, "b", function () {
          return m;
        });
      var a = n("cpVT"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("zAUr"),
        c = n("+5ea"),
        u = (n("8G2S"), r.createElement),
        s = function (e) {
          var t = e.children;
          return u("div", { className: "DetailsLayout" }, t);
        };
      (s.LeftColumn = function (e) {
        var t = e.sticky,
          n = e.children,
          r = Object(o.a)([
            Object(c.d)("DetailsLayout", "leftColumn"),
            Object(a.a)(
              {},
              Object(c.d)("DetailsLayout", "leftColumn", "sticky"),
              t
            ),
          ]);
        return u("div", { className: r }, n);
      }),
        (s.MainColumn = function (e) {
          var t = e.children;
          return u(
            "div",
            { className: Object(c.d)("DetailsLayout", "mainColumn") },
            t
          );
        });
      n("XUBu");
      var d,
        l = i.a.createElement;
      !(function (e) {
        (e.Left = "left"), (e.Right = "right");
      })(d || (d = {}));
      var f = function (e) {
        var t = e.children,
          n = e.position,
          a = Object(o.a)([
            Object(c.d)("FixedSiderailLayout", "container"),
            [
              Object(c.d)(
                "FixedSiderailLayout",
                "container",
                "".concat(n, "Siderail")
              ),
            ],
          ]);
        return l("div", { className: a }, t);
      };
      (f.Content = function (e) {
        var t = e.children;
        return l(
          "div",
          { className: Object(c.d)("FixedSiderailLayout", "content") },
          t
        );
      }),
        (f.Siderail = function (e) {
          var t = e.children;
          return l(
            "div",
            { className: Object(c.d)("FixedSiderailLayout", "siderail") },
            t
          );
        });
      n("cxXz");
      var v = i.a.createElement,
        m = function (e) {
          var t = e.children;
          return v(
            "div",
            { className: Object(c.d)("NoSiderailLayout", "container") },
            t
          );
        };
      m.Content = function (e) {
        var t = e.children;
        return v(
          "div",
          { className: Object(c.d)("NoSiderailLayout", "content") },
          t
        );
      };
    },
    "7CWt": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "d", function () {
          return d;
        }),
        n.d(t, "b", function () {
          return l;
        });
      var a = n("cpVT"),
        r = n("q1tI");
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c,
        u = { refTags: [], pageHitRequestId: "" };
      !(function (e) {
        (e.AddRefTags = "ADD_REF_TAGS"),
          (e.SetPageHitRequestId = "SET_REQUEST_ID"),
          (e.SetPageTypeId = "SET_PAGE_TYPE_ID"),
          (e.Override = "OVERRIDE");
      })(c || (c = {}));
      var s = function (e, t) {
          if ([void 0, null].includes(t) || null === t.type) return e;
          switch (t.type) {
            case c.AddRefTags:
              return o(
                o({}, e),
                {},
                { refTags: e.refTags.concat(t.refTagsToAdd) }
              );
            case c.SetPageHitRequestId:
              return o(o({}, e), {}, { pageHitRequestId: t.pageHitRequestId });
            case c.SetPageTypeId:
              return o(o({}, e), {}, { pageTypeId: t.pageTypeId });
            case c.Override:
              return o({}, t.newState);
            default:
              return e;
          }
        },
        d = function () {
          var e = Object(r.useReducer)(s, u);
          return { state: e[0], dispatch: e[1] };
        },
        l = Object(r.createContext)({ state: u, dispatch: function () {} });
    },
    "8Avt": function (e, t, n) {},
    "8G2S": function (e, t, n) {},
    "8HVi": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return h;
      }),
        n.d(t, "a", function () {
          return j;
        });
      var a = n("q1tI"),
        r = n("wzmU"),
        i = n("JMfI"),
        o = n("1JQt"),
        c = n("USB4"),
        u = n("99WS"),
        s = n("vJKn"),
        d = n.n(s),
        l = n("rg98"),
        f = n("vDqi"),
        v = n.n(f),
        m = n("7+Ly"),
        b = function () {
          0;
        },
        g = function (e, t) {
          "undefined" === typeof e.response &&
            o.a.error("Weblab ".concat(t, " failed - ").concat(e.message));
        },
        p = {
          WEBLAB_GET_TREATMENT_URL: "/weblab",
          WEBLAB_TRIGGER_URL: "/weblab/trigger",
          getTreatment: (function () {
            var e = Object(l.a)(
              d.a.mark(function e(t, n, a, r) {
                var i, o;
                return d.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            b(),
                            (i = {
                              request_id: r,
                              session_id: m.e.getValidSessionId(),
                              weblab: t,
                              domain: n,
                              record_trigger: a,
                            }),
                            (e.prev = 2),
                            (e.next = 5),
                            v.a.post("/weblab", i)
                          );
                        case 5:
                          return (
                            (o = e.sent),
                            e.abrupt("return", o.data.weblab_treatment)
                          );
                        case 9:
                          return (
                            (e.prev = 9),
                            (e.t0 = e.catch(2)),
                            g(e.t0, "getTreatment"),
                            e.abrupt("return", null)
                          );
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 9]]
                );
              })
            );
            return function (t, n, a, r) {
              return e.apply(this, arguments);
            };
          })(),
          recordTrigger: function (e, t, n, a) {
            b();
            var r = {
              request_id: n,
              session_id: m.e.getValidSessionId(),
              weblab: e,
              domain: t,
              treatment: a,
            };
            v.a.post("/weblab/trigger", r).catch(function (e) {
              g(e, "recordTrigger");
            });
          },
          verifyCookieValueForWeblab: function (e) {
            return Object.values(u.b).includes(e);
          },
        },
        C = function (e, t) {
          e.dispatch({
            type: c.a.SetTreatment,
            assignment: u.a.Unknown,
            weblabId: t,
            isLoading: !1,
          });
        },
        h = function (e) {
          var t,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            u =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "prod",
            s =
              !(arguments.length > 3 && void 0 !== arguments[3]) ||
              arguments[3],
            d = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            l = Object(a.useContext)(c.c),
            f = Object(a.useContext)(r.d),
            v = Object(a.useContext)(i.a),
            m =
              null !== (t = null === v || void 0 === v ? void 0 : v.signedIn) &&
              void 0 !== t &&
              t;
          return (
            Object(a.useEffect)(
              function () {
                l.state.treatments.has(e) ||
                  "" === f.state.pageHitRequestId ||
                  d ||
                  (!n || m
                    ? p
                        .getTreatment(e, u, s, f.state.pageHitRequestId)
                        .then(function (t) {
                          null != t
                            ? l.dispatch({
                                type: c.a.SetTreatment,
                                assignment: t,
                                weblabId: e,
                                isLoading: !1,
                              })
                            : C(l, e);
                        })
                        .catch(function (e) {
                          o.a.error(e.toString());
                        })
                    : C(l, e));
              },
              [f.state.pageHitRequestId]
            ),
            l.state
          );
        },
        L = n("Prh1"),
        O = n("nOHt"),
        y = function (e, t, n) {
          var a;
          if (!n) return !1;
          var r = L.a.get(e),
            i = ![void 0, ""].includes(r),
            o = p.verifyCookieValueForWeblab(r);
          return (
            (null === t ||
            void 0 === t ||
            null === (a = t.query) ||
            void 0 === a
              ? void 0
              : a.googlebot_dryrun) ||
            (i && !o)
          );
        },
        k = function (e, t) {
          var n = new Date();
          n.setFullYear(n.getFullYear() + 1),
            L.a.set(e, t, { path: "/", expires: n });
        },
        w = function () {
          var e = Number(window.sessionStorage.getItem("reload")),
            t = !isNaN(e) && e > 0,
            n = Date.now();
          t && n < e + 6e4
            ? o.a.info(
                "Blocking unexpected reload loop for ".concat(
                  window.location.href
                )
              )
            : (window.sessionStorage.setItem("reload", String(n)),
              window.location.replace(window.location.href));
        },
        j = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "prod",
            o =
              !(arguments.length > 4 && void 0 !== arguments[4]) ||
              arguments[4],
            c = Object(a.useContext)(r.d),
            s = h(t, n, i, !1, y(e, Object(O.useRouter)(), o)),
            d = null === s || void 0 === s ? void 0 : s.treatments.get(t);
          switch (d) {
            case u.a.Treatment1:
              k(e, u.b.Sirius);
              var l = c.state.pageHitRequestId;
              p.recordTrigger(t, i, l, d);
              break;
            case u.a.Control:
              k(e, u.b.Monolith), w();
          }
          return d;
        };
    },
    "8J2n": function (e, t, n) {},
    "8k6o": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var a = n("q1tI"),
        r = n.n(a),
        i = n("mW/1"),
        o = (n("2RA7"), r.a.createElement),
        c = function (e) {
          var t = e.altText,
            n = e.clickthroughUrl,
            a = e.desktop1xPhoto,
            r = e.desktop2xPhoto,
            c = e.mobile1xPhoto,
            u = e.mobile2xPhoto,
            s = e.siteStripColor;
          return n && a && c && r && u
            ? o(
                "div",
                { className: "SiteStrip" },
                o(
                  "div",
                  {
                    className: Object(i.a)(
                      "SiteStrip",
                      "topFullImageContainer"
                    ),
                    "data-testid": Object(i.a)(
                      "SiteStrip",
                      "topFullImageContainer"
                    ),
                    style: { backgroundColor: s },
                  },
                  o(
                    "a",
                    {
                      "data-testid": Object(i.a)(
                        "SiteStrip",
                        "topFullImageLink"
                      ),
                      href: n,
                    },
                    o("img", {
                      className: Object(i.a)(
                        "SiteStrip",
                        "topFullImage",
                        "mobile"
                      ),
                      alt: t || "Site Header Banner Image",
                      src: c,
                      srcSet: "".concat(u, " 2x"),
                    }),
                    o("img", {
                      className: Object(i.a)(
                        "SiteStrip",
                        "topFullImage",
                        "desktop"
                      ),
                      alt: t || "Site Header Banner Image",
                      src: a,
                      srcSet: "".concat(r, " 2x"),
                    })
                  )
                )
              )
            : null;
        };
    },
    "8y1Z": function (e, t, n) {
      "use strict";
      var a;
      n.d(t, "a", function () {
        return a;
      }),
        (function (e) {
          (e.AboutUs = "aboutus"),
            (e.AccountSettings = "settings"),
            (e.Advertisers = "advertisers"),
            (e.AdNotice = "adnotice"),
            (e.AdPrefs = "adprefs"),
            (e.API = "api"),
            (e.AskTheAuthor = "askauthor"),
            (e.AuthInterstitial = "aid"),
            (e.AuthorBlogs = "authorblogs"),
            (e.AuthorDashbord = "authordash"),
            (e.Authors = "authors"),
            (e.BookPageBetaOptIn = "bk_bet_in"),
            (e.BookPageBetaOptOut = "bk_bet_out"),
            (e.Careers = "careers"),
            (e.Comment = "comment"),
            (e.Community = "comm"),
            (e.ContinueWithFacebook = "fac"),
            (e.ContinueWithAmazon = "azm"),
            (e.CreateGiveaway = "creategiv"),
            (e.CreativeWriting = "crwriting"),
            (e.Discussion = "discuss"),
            (e.Enter = "enter_cta"),
            (e.Explore = "explore"),
            (e.FavoriteGenre = "favgenre"),
            (e.Footer = "botnav"),
            (e.Friends = "friends"),
            (e.FriendsRecommendation = "friendrec"),
            (e.GCA = "gca"),
            (e.Genres = "genres"),
            (e.Giveaways = "giveaways"),
            (e.GiveawaysShort = "giv"),
            (e.Groups = "groups"),
            (e.Header = "nav"),
            (e.Help = "help"),
            (e.History = "hist"),
            (e.Home = "hom"),
            (e.HomePageBetaOptIn = "hm_bet_in"),
            (e.HomePageBetaOptOut = "hm_bet_out"),
            (e.KindleNotesHighlight = "knh"),
            (e.Link = "l"),
            (e.ListAGiveaway = "list_giveaway"),
            (e.Listed = "listed"),
            (e.Lists = "lists"),
            (e.MyBooks = "mybooks"),
            (e.MyFriends = "my_friends"),
            (e.MyGroups = "my_groups"),
            (e.MyMessages = "my_messages"),
            (e.NavBrowse = "brws"),
            (e.NewReleases = "newrels"),
            (e.News = "news"),
            (e.NoSearchSuggestions = "noss"),
            (e.Notification = "my_notifs"),
            (e.People = "people"),
            (e.Privacy = "priv"),
            (e.Profile = "profile"),
            (e.Quizzes = "quiz"),
            (e.Quotes = "quotes"),
            (e.ReadingChallenge = "rc"),
            (e.Recommendations = "recs"),
            (e.SearchBar = "sb"),
            (e.SearchSuggestion = "ss"),
            (e.SignIn = "sin"),
            (e.SignOut = "signout"),
            (e.Signup = "su"),
            (e.SignUpWithEmail = "ema"),
            (e.Terms = "terms"),
            (e.Test = ":^)"),
            (e.Trivia = "trivia");
        })(a || (a = {}));
    },
    "99WS": function (e, t, n) {
      "use strict";
      var a, r;
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return r;
        }),
        (function (e) {
          (e.Control = "C"), (e.Treatment1 = "T1"), (e.Unknown = "Unknown");
        })(a || (a = {})),
        (function (e) {
          (e.Sirius = "1_wl"),
            (e.SiriusTest = "1_test"),
            (e.Monolith = "0_wl"),
            (e.OptOut = "0_optout_wl"),
            (e.AB = "0_ar");
        })(r || (r = {}));
    },
    "9Hen": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var a = n("xvhg"),
        r = n("cpVT"),
        i = n("z7pX"),
        o = n("q1tI"),
        c = n.n(o),
        u = n("7CWt"),
        s = c.a.createElement;
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var f = function (e) {
        var t = e.addRefTag,
          n = e.addState,
          r = e.children,
          d = (function (e, t, n) {
            var r = e.refTags,
              s = t ? [].concat(Object(i.a)(r), [t]) : r,
              d = l(l({}, e), {}, { refTags: s }, n),
              f = c.a.useReducer(u.c, d),
              v = Object(a.a)(f, 2),
              m = v[0],
              b = v[1];
            return (
              Object(o.useEffect)(
                function () {
                  b({ type: u.a.Override, newState: d });
                },
                [JSON.stringify(d)]
              ),
              { state: m, dispatch: b }
            );
          })(Object(o.useContext)(u.b).state, t, n);
        return s(u.b.Provider, { value: d }, r);
      };
    },
    "9R5L": function (e, t, n) {},
    "9vTN": function (e, t, n) {},
    "9wOd": function (e, t, n) {},
    "A+y1": function (e, t, n) {
      "use strict";
      n("NYUa"), n("8y1Z");
      var a = n("50TJ");
      n.d(t, "a", function () {
        return a.c;
      }),
        n.d(t, "b", function () {
          return a.d;
        });
    },
    A3dc: function (e, t, n) {
      "use strict";
      var a = n("tg5O");
      n.d(t, "a", function () {
        return a.a;
      }),
        n.d(t, "b", function () {
          return a.b;
        });
    },
    AkYo: function (e, t, n) {},
    BEb3: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return u;
        }),
        n.d(t, "c", function () {
          return s;
        });
      var a,
        r = n("q1tI"),
        i = n.n(r),
        o = n("zAUr"),
        c = (n("Lcuq"), i.a.createElement);
      !(function (e) {
        (e.Left = "left"),
          (e.Right = "right"),
          (e.Down = "down"),
          (e.Up = "up");
      })(a || (a = {}));
      var u = { down: 0, left: 90, up: 180, right: 270 },
        s = function (e) {
          var t = e.ariaLabel,
            n = e.children,
            a = e.className,
            r = Object(o.a)(["Icon", a]);
          return c("i", { className: r, "aria-label": t }, n);
        };
    },
    BQ5h: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return o;
        });
      var a = n("cpVT"),
        r = n("7+Ly"),
        i = function (e) {
          var t = e.campaignId,
            n = e.lineItemId,
            a = e.sourceAgnosticLineItemId;
          return {
            adUnit: e.slot.getAdUnitPath().split(/\/(.*)/)[1],
            campaignId: t || "EMPTY",
            lineItemId: n || a || "EMPTY",
          };
        },
        o = function (e) {
          var t,
            n = e.adElement,
            i = e.content,
            o = e.requestId;
          if (!n) return null;
          var c =
            ((t = {}),
            Object(a.a)(t, r.c.CSAAttribute.Ad, i.adUnit),
            Object(a.a)(
              t,
              r.c.CSAAttribute.LineItemId,
              i.lineItemId.toString()
            ),
            Object(a.a)(
              t,
              r.c.CSAAttribute.CampaignId,
              i.campaignId.toString()
            ),
            Object(a.a)(t, r.c.CSAAttribute.RequestId, o.toString()),
            Object(a.a)(t, r.c.CSAAttribute.Type, "DFP"),
            Object(a.a)(t, r.c.CSAAttribute.SlotId, "DFP"),
            t);
          return r.c.registerCSAElement(n, c);
        };
    },
    D6qv: function (e, t, n) {},
    DFlP: function (e, t, n) {
      "use strict";
      var a;
      n.d(t, "a", function () {
        return o;
      }),
        (function (e) {
          (e.Authenticate = "Authenticate"),
            (e.BookShow = "BookShow"),
            (e.BookPopularByDate = "BookPopularByDate"),
            (e.ClickstreamLogging = "ClickstreamLogging"),
            (e.ClickstreamLoggingBatched = "ClickstreamLoggingBatched"),
            (e.GiveawayHome = "GiveawayHome"),
            (e.GiveawayShow = "GiveawayShow"),
            (e.Home = "Home"),
            (e.ListIndex = "ListIndex"),
            (e.NotificationSettings = "NotificationSettings"),
            (e.Unknown = "Unknown"),
            (e.WeblabTreatment = "WeblabTreatment"),
            (e.WeblabTrigger = "WeblabTrigger"),
            (e.HealthPing = "HealthPing");
        })(a || (a = {}));
      var r = function (e) {
          return new RegExp("/".concat(e, "/show/*"), "i");
        },
        i = function (e) {
          var t = e.split(/[?#]/)[0];
          switch (!0) {
            case "/" === t:
              return a.Home;
            case r("book").test(t):
              return a.BookShow;
            case /book\/popular_by_date\/*/i.test(t):
              return a.BookPopularByDate;
            case "/ping" === t:
              return a.HealthPing;
            case "/giveaway" === t || /giveaway\/genre\/*/i.test(t):
              return a.GiveawayHome;
            case r("giveaway").test(t):
              return a.GiveawayShow;
            case "/list" === t:
              return a.ListIndex;
            case "/settings/notifications" === t:
              return a.NotificationSettings;
            case "/authenticate" === t:
              return a.Authenticate;
            case "/metrics_logging" === t:
              return a.ClickstreamLogging;
            case "/metrics_logging_batched" === t:
              return a.ClickstreamLoggingBatched;
            case "/weblab" === t:
              return a.WeblabTreatment;
            case "/weblab/trigger" === t:
              return a.WeblabTrigger;
            default:
              return a.Unknown;
          }
        },
        o = function (e) {
          return { Name: "RouteName", Value: i(e) };
        };
    },
    DXQO: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var a = n("xvhg"),
        r = n("cpVT"),
        i = n("z7pX"),
        o = n("q1tI"),
        c = n.n(o),
        u = n("nmzc"),
        s = c.a.createElement;
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var f = function (e) {
        var t = e.addRefTag,
          n = e.addState,
          r = e.children,
          d = (function (e, t, n) {
            var r = e.refTags,
              s = t ? [].concat(Object(i.a)(r), [t]) : r,
              d = l(l({}, e), {}, { refTags: s }, n),
              f = c.a.useReducer(u.c, d),
              v = Object(a.a)(f, 2),
              m = v[0],
              b = v[1];
            return (
              Object(o.useEffect)(
                function () {
                  b({ type: u.a.Override, newState: d });
                },
                [JSON.stringify(d)]
              ),
              { state: m, dispatch: b }
            );
          })(Object(o.useContext)(u.b).state, t, n);
        return s(u.b.Provider, { value: d }, r);
      };
    },
    E7l3: function (e, t, n) {
      "use strict";
      n("Hx3N"), n("b7DO"), n("D6qv"), n("e5hv");
      var a = n("+5ea");
      n.d(t, "BreakpointValues", function () {
        return a.a;
      }),
        n.d(t, "Breakpoints", function () {
          return a.c;
        }),
        n.d(t, "_bem", function () {
          return a.d;
        }),
        n.d(t, "_commaSeparatedString", function () {
          return a.e;
        }),
        n.d(t, "_formatDate", function () {
          return a.f;
        }),
        n.d(t, "_prettyNumber", function () {
          return a.g;
        });
      var r = n("huxJ");
      n.d(t, "KeyCodes", function () {
        return r.a;
      }),
        n.d(t, "useFor", function () {
          return r.b;
        }),
        n.d(t, "useForIsomorphic", function () {
          return r.c;
        }),
        n.d(t, "useIsomorphicLayoutEffect", function () {
          return r.d;
        }),
        n.d(t, "useItemsToShowAt", function () {
          return r.e;
        }),
        n.d(t, "useResize", function () {
          return r.h;
        });
      var i = n("syl4");
      n.d(t, "Avatar", function () {
        return i.a;
      });
      n("YbyH");
      var o = n("aq4S");
      n.d(t, "BookCover", function () {
        return o.a;
      });
      var c = n("nRLg");
      n.d(t, "Breadcrumbs", function () {
        return c.a;
      });
      var u = n("/iJQ");
      n.d(t, "BaseClickable", function () {
        return u.a;
      }),
        n.d(t, "Button", function () {
          return u.b;
        }),
        n.d(t, "ButtonSize", function () {
          return u.c;
        }),
        n.d(t, "ButtonType", function () {
          return u.d;
        }),
        n.d(t, "ButtonVariant", function () {
          return u.e;
        }),
        n.d(t, "OverflowButton", function () {
          return u.f;
        });
      n("Nv3j");
      var s = n("tN2f");
      n.d(t, "Divider", function () {
        return s.a;
      }),
        n.d(t, "DividerVariant", function () {
          return s.b;
        });
      var d = n("j79A");
      n.d(t, "Elevation", function () {
        return d.a;
      }),
        n.d(t, "ElevationPadding", function () {
          return d.b;
        });
      var l = n("ooLU");
      n.d(t, "Form", function () {
        return l.a;
      }),
        n.d(t, "FormControlElementTypes", function () {
          return l.b;
        }),
        n.d(t, "FormControlOrnament", function () {
          return l.c;
        }),
        n.d(t, "FormValidationStates", function () {
          return l.d;
        }),
        n.d(t, "InputTypes", function () {
          return l.e;
        });
      var f = n("Qu/W");
      n.d(t, "AmazonIcon", function () {
        return f.a;
      }),
        n.d(t, "AwardIcon", function () {
          return f.b;
        }),
        n.d(t, "BadgeIcon", function () {
          return f.c;
        }),
        n.d(t, "BullhornIcon", function () {
          return f.e;
        }),
        n.d(t, "CaretIcon", function () {
          return f.f;
        }),
        n.d(t, "CaretSmallIcon", function () {
          return f.g;
        }),
        n.d(t, "CheckCircleIcon", function () {
          return f.h;
        }),
        n.d(t, "CheckIcon", function () {
          return f.i;
        }),
        n.d(t, "ChevronIcon", function () {
          return f.j;
        }),
        n.d(t, "CloseIcon", function () {
          return f.k;
        }),
        n.d(t, "CommentIcon", function () {
          return f.l;
        }),
        n.d(t, "Direction", function () {
          return f.m;
        }),
        n.d(t, "DiscussionsIcon", function () {
          return f.n;
        }),
        n.d(t, "DownloadIcon", function () {
          return f.o;
        }),
        n.d(t, "EnvelopeIcon", function () {
          return f.p;
        }),
        n.d(t, "FacebookIcon", function () {
          return f.r;
        }),
        n.d(t, "FilterIcon", function () {
          return f.s;
        }),
        n.d(t, "FlagIcon", function () {
          return f.t;
        }),
        n.d(t, "FriendsIcon", function () {
          return f.u;
        }),
        n.d(t, "GiftIcon", function () {
          return f.v;
        }),
        n.d(t, "GlassesIcon", function () {
          return f.w;
        }),
        n.d(t, "InfoIcon", function () {
          return f.x;
        }),
        n.d(t, "InstagramIcon", function () {
          return f.y;
        }),
        n.d(t, "KNHIcon", function () {
          return f.z;
        }),
        n.d(t, "LikeIcon", function () {
          return f.A;
        }),
        n.d(t, "LikedIcon", function () {
          return f.B;
        }),
        n.d(t, "LinkIcon", function () {
          return f.C;
        }),
        n.d(t, "LinkedinIcon", function () {
          return f.D;
        }),
        n.d(t, "LoadingIcon", function () {
          return f.E;
        }),
        n.d(t, "MessagesIcon", function () {
          return f.F;
        }),
        n.d(t, "MoreIcon", function () {
          return f.G;
        }),
        n.d(t, "NotificationsIcon", function () {
          return f.H;
        }),
        n.d(t, "OffsiteIcon", function () {
          return f.I;
        }),
        n.d(t, "PencilIcon", function () {
          return f.J;
        }),
        n.d(t, "PinterestIcon", function () {
          return f.K;
        }),
        n.d(t, "PlusIcon", function () {
          return f.L;
        }),
        n.d(t, "QuestionsIcon", function () {
          return f.M;
        }),
        n.d(t, "QuotesIcon", function () {
          return f.N;
        }),
        n.d(t, "RefreshIcon", function () {
          return f.O;
        }),
        n.d(t, "SearchIcon", function () {
          return f.P;
        }),
        n.d(t, "ShareIcon", function () {
          return f.Q;
        }),
        n.d(t, "StopNowIcon", function () {
          return f.R;
        }),
        n.d(t, "TopicsIcon", function () {
          return f.S;
        }),
        n.d(t, "TrashCanIcon", function () {
          return f.T;
        }),
        n.d(t, "TwitterIcon", function () {
          return f.U;
        }),
        n.d(t, "XCircleIcon", function () {
          return f.W;
        });
      var v = n("bmXc");
      n.d(t, "RadioInput", function () {
        return v.a;
      });
      var m = n("SAVZ");
      n.d(t, "Label", function () {
        return m.a;
      });
      var b = n("09FE");
      n.d(t, "GoodreadsWordmark", function () {
        return b.a;
      });
      var g = n("yPNx");
      n.d(t, "RatingStar", function () {
        return g.a;
      });
      var p = n("2ViY");
      n.d(t, "RelativeTime", function () {
        return p.a;
      });
      var C = n("5bkh");
      n.d(t, "BodyTextSizes", function () {
        return C.a;
      }),
        n.d(t, "FontWeight", function () {
          return C.b;
        }),
        n.d(t, "Formatted", function () {
          return C.c;
        }),
        n.d(t, "H1", function () {
          return C.d;
        }),
        n.d(t, "H1Title", function () {
          return C.e;
        }),
        n.d(t, "H2", function () {
          return C.f;
        }),
        n.d(t, "H3", function () {
          return C.g;
        }),
        n.d(t, "Small", function () {
          return C.h;
        }),
        n.d(t, "Text", function () {
          return C.i;
        }),
        n.d(t, "TextColors", function () {
          return C.j;
        }),
        n.d(t, "TextPreset", function () {
          return C.k;
        });
      var h = n("A3dc");
      n.d(t, "Toast", function () {
        return h.a;
      }),
        n.d(t, "ToastContainer", function () {
          return h.b;
        });
      n("Y0/f");
      var L = n("qR79");
      n.d(t, "Alert", function () {
        return L.a;
      }),
        n.d(t, "AlertVariant", function () {
          return L.b;
        });
      var O = n("/+2S");
      n.d(t, "AvatarGroup", function () {
        return O.a;
      });
      var y = n("rY2c");
      n.d(t, "ButtonGroup", function () {
        return y.a;
      });
      var k = n("mTaa");
      n.d(t, "Carousel", function () {
        return k.a;
      }),
        n.d(t, "CarouselContentType", function () {
          return k.b;
        });
      var w = n("6pJD");
      n.d(t, "ChipList", function () {
        return w.a;
      });
      n("o1vP");
      var j = n("ixbk");
      n.d(t, "CollapsableList", function () {
        return j.a;
      });
      var S = n("3kwt");
      n.d(t, "CollapsableListV2", function () {
        return S.a;
      });
      var T = n("n59y");
      n.d(t, "BookCoversPattern", function () {
        return T.a;
      }),
        n.d(t, "CollectionCard", function () {
          return T.b;
        }),
        n.d(t, "CollectionCardColor", function () {
          return T.c;
        });
      var I = n("PofY");
      n.d(t, "CollectionCarousel", function () {
        return I.a;
      });
      var E = n("0yOa");
      n.d(t, "DescList", function () {
        return E.a;
      }),
        n.d(t, "DescListItem", function () {
          return E.b;
        });
      n("oz34");
      var N = n("cqii");
      n.d(t, "DropdownMenu", function () {
        return N.a;
      }),
        n.d(t, "DropdownMenuItem", function () {
          return N.b;
        }),
        n.d(t, "ExpandDirection", function () {
          return N.c;
        }),
        n.d(t, "Modal", function () {
          return N.d;
        }),
        n.d(t, "ModalModes", function () {
          return N.e;
        }),
        n.d(t, "ModalStylings", function () {
          return N.f;
        }),
        n.d(t, "OverlayMenu", function () {
          return N.g;
        });
      var x = n("PItU");
      n.d(t, "RadioGroup", function () {
        return x.a;
      });
      var A = n("KOl1");
      n.d(t, "RatingsHistogram", function () {
        return A.a;
      });
      var P = n("S8mZ");
      n.d(t, "RatingStarSizes", function () {
        return P.a;
      }),
        n.d(t, "RatingStars", function () {
          return P.b;
        });
      var M = n("siMi");
      n.d(t, "ToggleButton", function () {
        return M.a;
      });
      var B = n("+UXa");
      n.d(t, "TruncatedContent", function () {
        return B.a;
      }),
        n.d(t, "TruncatedContentSize", function () {
          return B.b;
        });
      var D = n("75bO");
      n.d(t, "FixedSiderailLayout", function () {
        return D.a;
      }),
        n.d(t, "NoSiderailLayout", function () {
          return D.b;
        }),
        n.d(t, "SiderailPosition", function () {
          return D.c;
        });
      var F = n("4RhV");
      n.d(t, "Theme", function () {
        return F.a;
      }),
        n.d(t, "ThemeContext", function () {
          return F.b;
        });
      n("n4dk");
    },
    EvcR: function (e, t, n) {},
    FhZt: function (e, t, n) {
      "use strict";
      var a, r, i, o, c, u, s;
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return r;
        }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "d", function () {
          return o;
        }),
        n.d(t, "e", function () {
          return c;
        }),
        n.d(t, "f", function () {
          return u;
        }),
        n.d(t, "g", function () {
          return s;
        }),
        (function (e) {
          (e.AddToCurrent = "add_to_current"),
            (e.AddToCustom = "add_to_custom"),
            (e.AddToRead = "add_to_read"),
            (e.AddToWTR = "add_to_wtr"),
            (e.BookDiscussions = "join_disc"),
            (e.BooksInSeries = "bk_series"),
            (e.BuyButtonClickPrefix = "bb_click-"),
            (e.CreateComment = "create_comment"),
            (e.CreateLike = "create_like"),
            (e.CreateCustomShelf = "create_custom_shelf"),
            (e.DfpImpression = "dfp_impression"),
            (e.DfpImpressionEmpty = "dfp_impression_empty"),
            (e.DfpClick = "dfp_click"),
            (e.FollowAuthor = "follow_author"),
            (e.FollowProfile = "follow_profile"),
            (e.GiveawaySortPrefix = "giv_sort_"),
            (e.GiveawayFilterPrefix = "giv_filt_"),
            (e.GiveawayShowMore = "giv_show_more"),
            (e.ListsFeaturing = "lists"),
            (e.RelatedArticles = "related_article"),
            (e.ReadersAlsoEnjoyed = "rders_enjoyed"),
            (e.ReviewFilters = "review_filters"),
            (e.SignInPromptGet = "Sign_in_promptGet"),
            (e.SignInPromptDismiss = "sign_in_prompt_dismiss"),
            (e.Test = "test_action"),
            (e.UpdateRating = "update_rating"),
            (e.WorksByContributor = "auth_bks"),
            (e.WriteRating = "write_rating"),
            (e.WriteReview = "review_cta");
        })(a || (a = {})),
        (function (e) {
          (e.ActionOnly = "actionOnly"),
            (e.PageHit = "pageHit"),
            (e.PageTouch = "pageTouch"),
            (e.PopUp = "popUp");
        })(r || (r = {})),
        (function (e) {
          (e.Main = "main"), (e.PageComponent = "pageComponent");
        })(i || (i = {})),
        (function (e) {
          (e.ExpandBookDetails = "expand_book_details"),
            (e.ExpandReview = "expand_review"),
            (e.ShelverTap = "shelver_tap"),
            (e.WTRTap = "wtr_tap");
        })(o || (o = {})),
        (function (e) {
          (e.Admin = "admin"),
            (e.Beta = "sirius_beta"),
            (e.Book = "book"),
            (e.Blank = "blank"),
            (e.Giveaway = "giveaway"),
            (e.Home = "homepage"),
            (e.List = "list"),
            (e.Settings = "settings"),
            (e.Shelf = "shelf");
        })(c || (c = {})),
        (function (e) {
          (e.Header = "nav"),
            (e.SearchBar = "sb"),
            (e.SearchSuggestion = "ss"),
            (e.NoSearchSuggestions = "noss"),
            (e.NavBrowse = "brws"),
            (e.Home = "hom"),
            (e.Recommendations = "recs"),
            (e.MyBooks = "mybooks"),
            (e.GCA = "gca"),
            (e.Giveaways = "giveaways"),
            (e.GiveawaysShort = "giv"),
            (e.Enter = "enter_cta"),
            (e.History = "hist"),
            (e.Listed = "listed"),
            (e.CreateGiveaway = "creategiv"),
            (e.NewReleases = "newrels"),
            (e.Lists = "lists"),
            (e.Explore = "explore"),
            (e.News = "news"),
            (e.Community = "comm"),
            (e.Groups = "groups"),
            (e.Discussion = "discuss"),
            (e.Genres = "genres"),
            (e.AskTheAuthor = "askauthor"),
            (e.Trivia = "trivia"),
            (e.Quizzes = "quiz"),
            (e.CreativeWriting = "crwriting"),
            (e.People = "people"),
            (e.Notification = "my_notifs"),
            (e.MyGroups = "my_groups"),
            (e.MyMessages = "my_messages"),
            (e.MyFriends = "my_friends"),
            (e.Profile = "profile"),
            (e.Friends = "friends"),
            (e.Comment = "comment"),
            (e.ReadingChallenge = "rc"),
            (e.KindleNotesHighlight = "knh"),
            (e.FavoriteGenre = "favgenre"),
            (e.FriendsRecommendation = "friendrec"),
            (e.AccountSettings = "settings"),
            (e.SignOut = "signout"),
            (e.AuthorDashbord = "authordash"),
            (e.ListAGiveaway = "list_giveaway"),
            (e.Help = "help"),
            (e.Link = "l"),
            (e.Signup = "su"),
            (e.AuthInterstitial = "aid"),
            (e.ContinueWithFacebook = "fac"),
            (e.ContinueWithAmazon = "azm"),
            (e.SignUpWithEmail = "ema"),
            (e.SignIn = "sin"),
            (e.Test = ":^)"),
            (e.BookPageBetaOptIn = "bk_bet_in"),
            (e.BookPageBetaOptOut = "bk_bet_out"),
            (e.HomePageBetaOptIn = "hm_bet_in"),
            (e.HomePageBetaOptOut = "hm_bet_out"),
            (e.Quotes = "quotes"),
            (e.ListopiaLanding = "ls"),
            (e.NewList = "nl"),
            (e.CreatedLists = "lic"),
            (e.VotedLists = "liv"),
            (e.LikedLists = "lil"),
            (e.List = "list"),
            (e.Book = "book"),
            (e.Tag = "tag"),
            (e.FeaturedList = "fl"),
            (e.SeeAll = "seeall"),
            (e.Carousel = "car"),
            (e.TagSearch = "ts"),
            (e.PopularList = "pl"),
            (e.ListsMyFriendsVotedOn = "lfv");
        })(u || (u = {})),
        (function (e) {
          (e.Blank = "blank"),
            (e.Discover = "discover"),
            (e.Explore = "explore"),
            (e.ExploreSout = "explore_sout"),
            (e.Genre = "genre"),
            (e.Home = "home"),
            (e.NativeAds = "native_ads"),
            (e.Notifications = "notifications"),
            (e.PopularByDate = "popular_by_date"),
            (e.Show = "show"),
            (e.WeblabDryrun = "weblab_dryrun");
        })(s || (s = {}));
    },
    GVCB: function (e, t) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            variableDefinitions: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "getBasicGenres" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "genres" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "webUrl" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 76 },
      };
      n.loc.source = {
        body: "query {\n  getBasicGenres {\n    genres {\n      name\n      webUrl\n    }\n  }\n}\n",
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          !(function e(t, n) {
            if ("FragmentSpread" === t.kind) n.add(t.name.value);
            else if ("VariableDefinition" === t.kind) {
              var a = t.type;
              "NamedType" === a.kind && n.add(a.name.value);
            }
            t.selectionSet &&
              t.selectionSet.selections.forEach(function (t) {
                e(t, n);
              }),
              t.variableDefinitions &&
                t.variableDefinitions.forEach(function (t) {
                  e(t, n);
                }),
              t.definitions &&
                t.definitions.forEach(function (t) {
                  e(t, n);
                });
          })(e, t),
            (a[e.name.value] = t);
        }
      }),
        (e.exports = n);
    },
    Hx3N: function (e, t, n) {},
    ICw5: function (e, t, n) {},
    INQH: function (e) {
      e.exports = JSON.parse(
        '{"breakpoint-smallest":"320px","breakpoint-xsmall":"480px","breakpoint-small":"640px","breakpoint-medium":"768px","breakpoint-large":"1024px","breakpoint-xlarge":"1280px","breakpoint-xxlarge":"1496px"}'
      );
    },
    IivK: function (e, t, n) {},
    Io6b: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n("cpVT"),
        r = n("q1tI"),
        i = n("zAUr"),
        o = n("+5ea"),
        c = n("/iJQ"),
        u = (n("k6Ep"), r.createElement),
        s = function (e) {
          var t = e.variant,
            n = void 0 === t ? c.e.Secondary : t,
            r = e.size,
            s = void 0 === r ? c.c.Medium : r,
            d = e.context,
            l = e.active,
            f = e.children,
            v = e.content,
            m = Object(i.a)([
              "Badge",
              Object(o.d)("Badge", void 0, n),
              Object(o.d)("Badge", void 0, s),
              Object(a.a)({}, Object(o.d)("Badge", void 0, "active"), l),
            ]);
          return u(
            "span",
            { className: m },
            u("span", { className: Object(o.d)("Badge", "content") }, v || f),
            d && u("span", { className: "u-sr-only" }, d)
          );
        };
    },
    IqYj: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var a = n("q1tI"),
        r = n("+5ea"),
        i = (n("9vTN"), a.createElement),
        o = function (e) {
          var t = e.name,
            n = e.value,
            a = e.label,
            o = e.defaultChecked,
            c = e.onChange,
            u = void 0 === c ? function () {} : c,
            s = function (e) {
              u && u(e, e.target.value);
            };
          return i(
            "label",
            { className: "RadioInput", htmlFor: n },
            i("input", {
              defaultChecked: o,
              id: n,
              name: t,
              value: n,
              type: "radio",
              onChange: function (e) {
                return s(e);
              },
            }),
            i("span", { className: Object(r.d)("RadioInput", "button") }),
            a
          );
        };
    },
    "JC+y": function (e, t, n) {},
    JMfI: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var a = n("q1tI"),
        r = n.n(a),
        i = n("p823"),
        o = r.a.createContext({
          signedIn: !1,
          customerId: void 0,
          legacyCustomerId: void 0,
          role: i.b.User,
        });
    },
    JiKA: function (e, t, n) {},
    KACy: function (e, t, n) {},
    KOl1: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var a = n("HALo"),
        r = n("cpVT"),
        i = n("q1tI"),
        o = n("+5ea"),
        c = n("dhqo"),
        u = n.n(c),
        s = n("6jlT"),
        d = n.n(s),
        l = n("zAUr"),
        f = n("rERO"),
        v = (n("AkYo"), i.createElement),
        m = function (e) {
          for (
            var t = e.ratingDist,
              n = e.ratingsCount,
              i = e.interactive,
              c = e.ariaLabel,
              s = e.selected,
              m = e.selectCallback,
              b = "RatingsHistogram",
              g = [],
              p = function (e) {
                var r = i
                    ? {
                        role: "button",
                        onClick: function () {
                          m && m(e);
                        },
                        onKeyDown: function (t) {
                          t.keyCode === f.a.Enter && m && m(e);
                        },
                        tabIndex: 0,
                      }
                    : {},
                  c = Object(o.d)(
                    b,
                    "bar",
                    i && (null === s || void 0 === s ? void 0 : s.includes(e))
                      ? "selected"
                      : ""
                  ),
                  l = (function (e, t, n) {
                    return t < 1 ? 0 : (e[n - 1] / t) * 100;
                  })(t, n, e),
                  p = (function (e) {
                    return "".concat(e, " ").concat(u()("stars", e));
                  })(e);
                g.push(
                  v(
                    "div",
                    Object(a.a)({}, r, {
                      key: d()(),
                      "data-testid": (
                        null === s || void 0 === s ? void 0 : s.includes(e)
                      )
                        ? "ratingBarSelected-".concat(e)
                        : "ratingBar-".concat(e),
                      className: c,
                      "aria-label": p,
                    }),
                    v("div", { className: Object(o.d)(b, "labelTitle") }, p),
                    v(
                      "div",
                      { className: Object(o.d)(b, "container") },
                      v(
                        "div",
                        { className: Object(o.d)(b, "empty") },
                        v("div", {
                          "data-testid": "fill-".concat(e),
                          className: Object(o.d)(b, "fill"),
                          style: { width: "".concat(l, "%") },
                        })
                      )
                    ),
                    v(
                      "div",
                      {
                        className: Object(o.d)(b, "labelTotal"),
                        "data-testid": "labelTotal-".concat(e),
                        "aria-label":
                          "Number of ratings and percentage of total ratings",
                      },
                      ""
                        .concat(
                          (function (e, t) {
                            return e[t - 1].toLocaleString("en");
                          })(t, e),
                          " ("
                        )
                        .concat(l > 0 && l < 1 ? "<1" : Math.trunc(l), "%)")
                    )
                  )
                );
              },
              C = 5;
            C > 0;
            C -= 1
          )
            p(C);
          return v(
            "div",
            {
              className: Object(l.a)([
                b,
                Object(r.a)({}, Object(o.d)(b, "interactive"), i),
              ]),
              "aria-label": c,
            },
            g
          );
        };
    },
    Ku67: function (e, t, n) {},
    LX0Q: function (e, t, n) {},
    LbDr: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return o;
        }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "e", function () {
          return u;
        });
      var a,
        r = n("p7qx"),
        i = function (e, t) {
          var n, a, r;
          if (!e || !t) return null;
          var i =
            null === (n = document.querySelector("#".concat(e))) ||
            void 0 === n ||
            null ===
              (a = n.querySelector("iframe[id^='google_ads_iframe_']")) ||
            void 0 === a ||
            null === (r = a.contentWindow) ||
            void 0 === r
              ? void 0
              : r.document.body.querySelector(".".concat(t));
          return [
            null === i || void 0 === i ? void 0 : i.dataset.id,
            null === i || void 0 === i ? void 0 : i.dataset.url,
          ];
        };
      !(function (e) {
        (e.BOOK = "BookAd"), (e.FLEX = "FlexAd");
      })(a || (a = {}));
      var o = "Ad Ad__nativeAd Ad--nonProgAd",
        c = function (e, t, n) {
          var a =
              null === t || void 0 === t
                ? void 0
                : t.map(function (e) {
                    return e.genre.name;
                  }),
            r =
              null === a || void 0 === a
                ? void 0
                : a.filter(function (e) {
                    return null === n || void 0 === n ? void 0 : n.includes(e);
                  });
          return r && r.length > 0
            ? "Recommended in ".concat(r[0])
            : e
            ? "Recommended For You"
            : "Recommended";
        },
        u = function (e, t, n, a) {
          var i = document.getElementById("".concat(e)),
            o = Object(r.a)(t).additionalMetricDimensions;
          Object(r.b)(i, n, t, a, o);
        };
    },
    LbMs: function (e, t, n) {
      "use strict";
      var a = n("RIio");
      n.d(t, "HeaderPrimaryNav", function () {
        return a.a;
      });
      n("hB2y");
    },
    Lcuq: function (e, t, n) {},
    Lo6Y: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a = n("/xWf"),
        r = n("s/Ur"),
        i = function (e) {
          var t = e.defaultToShow,
            n = e.itemsToShowAt,
            i = Object(r.useMediaQuery)({
              minWidth: Object(a.e)(a.a[a.c.XXLarge]),
            }),
            o = Object(r.useMediaQuery)({
              minWidth: Object(a.e)(a.a[a.c.XLarge]),
            }),
            c = Object(r.useMediaQuery)({
              minWidth: Object(a.e)(a.a[a.c.Large]),
            }),
            u = Object(r.useMediaQuery)({
              minWidth: Object(a.e)(a.a[a.c.Medium]),
            }),
            s = Object(r.useMediaQuery)({
              minWidth: Object(a.e)(a.a[a.c.Small]),
            }),
            d = Object(r.useMediaQuery)({
              minWidth: Object(a.e)(a.a[a.c.XSmall]),
            });
          if (!Object(a.d)() || !n) return t;
          var l = n[a.c.Smallest];
          return (
            d && (l = n[a.c.XSmall] || l),
            s && (l = n[a.c.Small] || l),
            u && (l = n[a.c.Medium] || l),
            c && (l = n[a.c.Large] || l),
            o && (l = n[a.c.XLarge] || l),
            i && (l = n[a.c.XXLarge] || l),
            l || t
          );
        };
    },
    LqFF: function (e, t) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "getSearchSuggestions" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "searchQuery" },
                },
                type: {
                  kind: "NonNullType",
                  type: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "String" },
                  },
                },
                directives: [],
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "getSearchSuggestions" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "query" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "searchQuery" },
                      },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "edges" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "SearchBookEdge" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "node" },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "title",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "primaryContributorEdge",
                                          },
                                          arguments: [],
                                          directives: [],
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "node",
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "name",
                                                      },
                                                      arguments: [],
                                                      directives: [],
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "isGrAuthor",
                                                      },
                                                      arguments: [],
                                                      directives: [],
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "webUrl",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "imageUrl",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 374 },
      };
      n.loc.source = {
        body: "query getSearchSuggestions($searchQuery: String!) {\n  getSearchSuggestions(query: $searchQuery) {\n    edges {\n      ... on SearchBookEdge {\n        node {\n          id\n          title\n          primaryContributorEdge {\n            node {\n              name\n              isGrAuthor\n            }\n          }\n          webUrl\n          imageUrl\n        }\n      }\n    }\n  }\n}\n",
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == t) return a;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          !(function e(t, n) {
            if ("FragmentSpread" === t.kind) n.add(t.name.value);
            else if ("VariableDefinition" === t.kind) {
              var a = t.type;
              "NamedType" === a.kind && n.add(a.name.value);
            }
            t.selectionSet &&
              t.selectionSet.selections.forEach(function (t) {
                e(t, n);
              }),
              t.variableDefinitions &&
                t.variableDefinitions.forEach(function (t) {
                  e(t, n);
                }),
              t.definitions &&
                t.definitions.forEach(function (t) {
                  e(t, n);
                });
          })(e, t),
            (a[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.getSearchSuggestions = (function (e, t) {
          var n = { kind: e.kind, definitions: [r(e, t)] };
          e.hasOwnProperty("loc") && (n.loc = e.loc);
          var i = a[t] || new Set(),
            o = new Set(),
            c = new Set();
          for (
            i.forEach(function (e) {
              c.add(e);
            });
            c.size > 0;

          ) {
            var u = c;
            (c = new Set()),
              u.forEach(function (e) {
                o.has(e) ||
                  (o.add(e),
                  (a[e] || new Set()).forEach(function (e) {
                    c.add(e);
                  }));
              });
          }
          return (
            o.forEach(function (t) {
              var a = r(e, t);
              a && n.definitions.push(a);
            }),
            n
          );
        })(n, "getSearchSuggestions"));
    },
    MAIN: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return r;
        }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return m;
        });
      var a,
        r,
        i,
        o = n("cpVT"),
        c = n("xvhg"),
        u = n("q1tI"),
        s = n("zAUr"),
        d = n("+5ea"),
        l = n("6jlT"),
        f = n.n(l),
        v = (n("umdf"), u.createElement);
      !(function (e) {
        (e.Primary = "primary"),
          (e.Secondary = "secondary"),
          (e.Tertiary = "tertiary"),
          (e.Buy = "buy"),
          (e.Transparent = "transparent"),
          (e.TagSelector = "tag-selector"),
          (e.WTR = "wtr"),
          (e.Tag = "tag"),
          (e.TagInline = "tag"),
          (e.Inline = "inline"),
          (e.SignInWithAmazon = "signinwithamazon"),
          (e.SignInWithApple = "signinwithapple"),
          (e.SignInWithFacebook = "signinwithfacebook");
      })(a || (a = {})),
        (function (e) {
          (e.Medium = "medium"), (e.Large = "large");
        })(r || (r = {})),
        (function (e) {
          (e.Button = "button"), (e.Submit = "submit");
        })(i || (i = {}));
      var m = function (e) {
        var t,
          n = e.type,
          l = void 0 === n ? i.Button : n,
          m = e.variant,
          b = void 0 === m ? a.Primary : m,
          g = e.size,
          p = void 0 === g ? r.Medium : g,
          C = e.subdued,
          h = void 0 !== C && C,
          L = e.disabled,
          O = void 0 !== L && L,
          y = e.block,
          k = void 0 !== y && y,
          w = e.rounded,
          j = void 0 !== w && w,
          S = e.active,
          T = void 0 !== S && S,
          I = e.href,
          E = e.overlay,
          N = e.onClick,
          x = e.onMouseEnter,
          A = e.onMouseLeave,
          P = e.ariaLabel,
          M = e.target,
          B = e.ariaPressed,
          D = void 0 === B ? void 0 : B,
          F = e.children,
          _ = e.ariaRole,
          R = e.ariaHidden,
          H = e.tabIndex,
          q = e.dataTestId,
          U = u.useRef(null),
          V = u.useState(!1),
          Z = Object(c.a)(V, 2),
          z = Z[0],
          W = Z[1],
          G = Object(s.a)([
            "Button",
            Object(d.d)("Button", void 0, b),
            Object(d.d)("Button", void 0, p),
            ((t = {}),
            Object(o.a)(t, Object(d.d)("Button", void 0, "disabled"), O),
            Object(o.a)(t, Object(d.d)("Button", void 0, "block"), k),
            Object(o.a)(t, Object(d.d)("Button", void 0, "rounded"), j),
            Object(o.a)(t, Object(d.d)("Button", void 0, "subdued"), h),
            Object(o.a)(t, Object(d.d)("Button", void 0, "active"), T),
            t),
          ]),
          J = u.Children.map(F, function (e) {
            return v(
              "span",
              {
                key: f()(),
                className: Object(s.a)([Object(d.d)("Button", "labelItem")]),
              },
              e
            );
          });
        return I
          ? v(
              "a",
              {
                href: I,
                onClick: N,
                target: M,
                "aria-label": P,
                className: G,
                "aria-hidden": R,
                tabIndex: H,
                "data-testid": q,
              },
              J
            )
          : v(
              "div",
              {
                className: Object(s.a)([
                  Object(d.d)("Button", "container"),
                  Object(o.a)(
                    {},
                    Object(d.d)("Button", "container", "block"),
                    k
                  ),
                ]),
                "aria-hidden": R,
              },
              v(
                "button",
                {
                  type: l,
                  onClick: function (e) {
                    N && N(e), E && W(!z);
                  },
                  className: G,
                  disabled: O,
                  onMouseEnter: x,
                  onMouseLeave: A,
                  "aria-label": P,
                  ref: U,
                  "aria-pressed": D,
                  role: _,
                  "aria-hidden": R,
                  tabIndex: H,
                  "data-testid": q,
                },
                J
              ),
              E && z && u.cloneElement(E, { open: z, setOpen: W, anchorRef: U })
            );
      };
    },
    "ME/x": function (e, t, n) {},
    MEx9: function (e, t, n) {
      "use strict";
      n.d(t, "h", function () {
        return r;
      }),
        n.d(t, "f", function () {
          return i;
        }),
        n.d(t, "g", function () {
          return o;
        }),
        n.d(t, "a", function () {
          return c;
        }),
        n.d(t, "e", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return s;
        }),
        n.d(t, "d", function () {
          return d;
        }),
        n.d(t, "c", function () {
          return l;
        });
      var a = n("4u2Z"),
        r = function (e) {
          var t = Object(a.a)(e),
            n = t.auth,
            r = t.graphql;
          return {
            graphqlEndpoint: r.endpoint,
            region: r.region,
            apiKey: r.apiKey,
            identityPoolId: r.identityPoolId,
            oidcIssuer: n.oidcIssuer,
            oidcAuthUrl: "".concat(n.oidcIssuer, "/open_id/auth_token"),
            oidcJwtKeySetUrl: "".concat(n.oidcIssuer, "/open_id/keys"),
            siriusClientId: n.oidcClientId,
            signInUrl: "".concat(n.oidcIssuer, "/user/sign_in?return_url="),
            signUpUrl: "".concat(n.oidcIssuer, "/user/sign_up?return_url="),
          };
        },
        i = "AWS_IAM",
        o = "OPENID_CONNECT",
        c = "API_KEY",
        u = "_session_id2",
        s = "u",
        d = "jwt_token",
        l = "data_source";
    },
    MIE5: function (e, t, n) {},
    MN4P: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return I;
      });
      var a,
        r = n("xvhg"),
        i = n("q1tI"),
        o = n.n(i),
        c = n("VX74"),
        u = n("LvDl"),
        s = (n("nCmr"), n("Qu/W")),
        d = n("rERO"),
        l = n("+5ea"),
        f = n("DXQO"),
        v = n("NYUa"),
        m = n("8y1Z"),
        b = n("LqFF"),
        g = n.n(b),
        p = (n("X4Mv"), o.a.createElement),
        C = function (e) {
          var t = e.query,
            n = e.book,
            a = e.selected,
            r = e.setSelection,
            i = e.ranking,
            o = "HeaderSearchBookItem",
            c = (0, Object(v.a)().createRefTag)(
              "".concat(i + 1),
              "".concat(t.length)
            ),
            u = n.title,
            d = n.primaryContributorEdge.node.name,
            f = n.primaryContributorEdge.node.isGrAuthor;
          return p(
            "li",
            {
              className: o,
              onMouseEnter: function () {
                return r("books", i);
              },
              onMouseLeave: function () {
                return r("", -1);
              },
            },
            p(
              "a",
              {
                href: "".concat(n.webUrl, "?ref=").concat(c),
                "aria-label": "Search result ".concat(u, " by ").concat(d),
                className: Object(l.d)(o, "link", a ? "selected" : void 0),
                onMouseDown: function (e) {
                  return e.preventDefault();
                },
              },
              p("img", {
                src: n.imageUrl,
                alt: "",
                className: Object(l.d)(o, "image"),
              }),
              p("span", { className: Object(l.d)(o, "title") }, u),
              p(
                "span",
                { className: Object(l.d)(o, "author") },
                "by ".concat(d, " "),
                f && p(s.c, null)
              )
            )
          );
        },
        h = o.a.createElement,
        L = function (e) {
          var t = e.query,
            n = e.author,
            a = e.selected,
            r = e.setSelection,
            i = e.ranking,
            o = (0, Object(v.a)().createRefTag)(
              "".concat(i + 1),
              "".concat(t.length)
            );
          return h(
            "li",
            {
              className: "HeaderSearchAuthorItem",
              onMouseEnter: function () {
                return r("authors", i);
              },
              onMouseLeave: function () {
                return r("", -1);
              },
            },
            h(
              "a",
              {
                href: "".concat(n.profileUrl, "?ref=").concat(o),
                "aria-label": "Search result",
                className: Object(l.d)(
                  "HeaderSearchAuthorItem",
                  "link",
                  a ? "selected" : void 0
                ),
              },
              n.name
            )
          );
        },
        O = (n("5au/"), o.a.createElement);
      !(function (e) {
        (e.Book = "Book"), (e.Author = "Author");
      })(a || (a = {}));
      var y = function (e) {
          var t = e.query,
            n = e.items,
            r = e.listType,
            i = e.selectedIndex,
            o = e.setSelection,
            c = [];
          switch (r) {
            case a.Author:
              c = n.map(function (e, n) {
                return O(L, {
                  query: t,
                  author: e,
                  key: e.id,
                  ranking: n,
                  selected: i === n,
                  setSelection: o,
                });
              });
              break;
            case a.Book:
              c = n.map(function (e, n) {
                return O(C, {
                  query: t,
                  book: e,
                  key: e.id,
                  ranking: n,
                  selected: i === n,
                  setSelection: o,
                });
              });
          }
          return O(
            "div",
            null,
            O(
              "ul",
              {
                "aria-label": "List of ".concat(r, "s"),
                className: Object(l.d)("HeaderSearchList", "list"),
              },
              c
            )
          );
        },
        k = (n("JiKA"), o.a.createElement),
        w = function (e) {
          var t = e.query,
            n = (0, Object(v.a)().createRefTag)("".concat(t.length));
          return k(
            "li",
            { className: "HeaderSearchSeeMore" },
            k(
              "a",
              {
                className: Object(l.d)("HeaderSearchSeeMore", "link"),
                href: "https://goodreads.com/search?q="
                  .concat(t, "&ref=")
                  .concat(n),
                onMouseDown: function (e) {
                  return e.preventDefault();
                },
              },
              'Show all results for "'.concat(t, '"')
            )
          );
        },
        j = (n("EvcR"), o.a.createElement),
        S = function (e) {
          var t = e.query,
            n = e.results,
            r = e.selection,
            i = e.setSelection;
          return j(
            "ul",
            { className: "HeaderSearchListTray" },
            j(
              "li",
              null,
              n.books
                ? j(y, {
                    query: t,
                    items: n.books,
                    listType: a.Book,
                    selectedIndex: "books" === r.contentType ? r.index : -1,
                    setSelection: i,
                  })
                : j(o.a.Fragment, null)
            ),
            j(
              "li",
              null,
              n.authors
                ? j(y, {
                    query: t,
                    items: n.authors,
                    listType: a.Author,
                    selectedIndex: "authors" === r.contentType ? r.index : -1,
                    setSelection: i,
                  })
                : j(o.a.Fragment, null)
            ),
            j(f.a, { addRefTag: m.a.Link }, j(w, { query: t }))
          );
        },
        T = o.a.createElement,
        I = function () {
          var e = Object(i.useState)(""),
            t = e[0],
            n = e[1],
            a = Object(i.useState)(!1),
            b = a[0],
            p = a[1],
            C = Object(i.useState)(""),
            h = C[0],
            L = C[1],
            O = Object(i.useState)({ contentType: "", index: -1 }),
            y = O[0],
            k = O[1],
            w = Object(i.useState)({ books: [], authors: [] }),
            j = w[0],
            I = w[1],
            E = Object(c.useLazyQuery)(g.a, {
              onCompleted: function () {
                var e = { books: [], authors: [] };
                M.getSearchSuggestions &&
                  M.getSearchSuggestions.edges.forEach(function (t) {
                    (null === t || void 0 === t ? void 0 : t.node) &&
                      e.books.push(t.node);
                  }),
                  I(e);
              },
            }),
            N = Object(r.a)(E, 2),
            x = N[0],
            A = N[1],
            P = A.loading,
            M = A.data,
            B = Object(i.useCallback)(
              Object(u.debounce)(function (e) {
                x({ variables: { searchQuery: e } });
              }, 300),
              []
            ),
            D = (0, Object(v.a)().createRefTag)("".concat(t.length || "")),
            F = function (e, t) {
              var n = "";
              switch (e) {
                case "books":
                  n = "Search result "
                    .concat(j[e][t].title, " by ")
                    .concat(j[e][t].primaryContributorEdge.node.name);
                  break;
                case "authors":
                  n = j[e][t].name;
              }
              L(n);
            },
            _ = function (e, t) {
              if (j[e] && t >= 0 && t < j[e].length)
                return k({ contentType: e, index: t }), void F(e, t);
              k({ contentType: "", index: -1 }), F("", -1);
            },
            R = function () {
              p(!1), _("", -1);
            };
          return T(
            "section",
            { role: "search", className: "HeaderSearch" },
            T(
              "div",
              {
                role: "region",
                "aria-live": "assertive",
                className: "u-sr-only",
              },
              h
            ),
            T(
              "form",
              { action: "https://www.goodreads.com/search", method: "get" },
              T("input", {
                type: "text",
                role: "combobox",
                name: "q",
                className: Object(l.d)("HeaderSearch", "input"),
                "aria-label": "Search by book title or ISBN",
                spellCheck: "false",
                "aria-autocomplete": "list",
                "aria-expanded": b,
                "aria-controls": "search-listbox",
                placeholder: "Search books",
                onChange: function (e) {
                  n(e.target.value),
                    _("", -1),
                    e.target.value.length >= 3 && B(e.target.value);
                },
                onFocus: function () {
                  p(!0);
                },
                onBlur: R,
                onKeyDown: function (e) {
                  switch (e.keyCode) {
                    case d.a.Escape:
                      R();
                      break;
                    case d.a.Enter:
                      if (/\S/.test(t)) {
                        if ("" !== y.contentType)
                          switch ((e.preventDefault(), y.contentType)) {
                            case "books":
                              window.location.href = ""
                                .concat(
                                  j[y.contentType][y.index].webUrl,
                                  "?ref="
                                )
                                .concat(D);
                              break;
                            case "authors":
                              window.location.href =
                                j.authors[y.index].profileUrl;
                          }
                      } else e.preventDefault();
                      break;
                    case d.a.UpArrow:
                      b &&
                        j &&
                        (e.preventDefault(),
                        (function () {
                          if (j) {
                            var e = Object.keys(j);
                            if (y.contentType) {
                              var t = {
                                contentType: y.contentType,
                                index: y.index,
                              };
                              if (0 === y.index) {
                                var n = e.indexOf(y.contentType);
                                0 === n
                                  ? ((t.contentType = ""), (t.index = -1))
                                  : ((t.contentType = e[n - 1]),
                                    (t.index = j[e[n - 1]].length - 1));
                              } else t.index = y.index - 1;
                              _(t.contentType, t.index);
                            } else {
                              for (
                                var a = e.indexOf(e[e.length - 1]);
                                0 === j[e[a]].length && a >= 0;

                              )
                                a -= 1;
                              _(e[a], j[e[a]].length - 1);
                            }
                          }
                        })());
                      break;
                    case d.a.DownArrow:
                      b &&
                        j &&
                        (e.preventDefault(),
                        (function () {
                          if (j) {
                            var e = Object.keys(j);
                            if (y.contentType) {
                              var t = {
                                contentType: y.contentType,
                                index: y.index,
                              };
                              if (y.index + 1 === j[y.contentType].length) {
                                var n = e.indexOf(y.contentType);
                                n + 1 === e.length
                                  ? ((t.contentType = ""), (t.index = -1))
                                  : ((t.contentType = e[n + 1]), (t.index = 0));
                              } else t.index = y.index + 1;
                              _(t.contentType, t.index);
                            } else _(e[0], 0);
                          }
                        })());
                  }
                },
                value: t,
              }),
              T("input", { type: "hidden", name: "ref", value: D }),
              T(
                "button",
                {
                  type: "submit",
                  value: "",
                  "aria-label": "Search",
                  className: Object(l.d)("HeaderSearch", "button"),
                },
                T(P ? s.E : s.P, null)
              ),
              T(
                f.a,
                { addRefTag: m.a.SearchSuggestion },
                t && b
                  ? T(S, {
                      query: t,
                      results: j,
                      selection: y,
                      setSelection: _,
                    })
                  : T(o.a.Fragment, null)
              )
            )
          );
        };
    },
    MOX4: function (e, t, n) {},
    NYUa: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a = n("q1tI"),
        r = n("50TJ"),
        i = function () {
          return {
            state: Object(a.useContext)(r.b).state,
            createRefTag: function (e, t) {
              return e + t;
            },
          };
        };
    },
    Nv3j: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var a = n("HALo"),
        r = n("z7pX"),
        i = n("dhJC"),
        o = n("q1tI"),
        c = n("6jlT"),
        u = n.n(c),
        s = n("/iJQ"),
        d = n("Io6b"),
        l = o.createElement,
        f = function (e) {
          var t = e.avatar,
            n = e.leadingIcon,
            c = e.trailingIcon,
            f = e.badge,
            v = e.children,
            m = e.active,
            b = Object(i.a)(e, [
              "avatar",
              "leadingIcon",
              "trailingIcon",
              "badge",
              "children",
              "active",
            ]),
            g = [t, n]
              .concat(Object(r.a)(o.Children.toArray(v)), [
                f ? l(d.a, b, f.content) : null,
                c,
              ])
              .filter(function (e) {
                return !!e;
              })
              .map(function (e) {
                return l(o.Fragment, { key: u()() }, e);
              });
          return l(s.b, Object(a.a)({ active: m, ariaPressed: m }, b), g);
        };
    },
    OrGe: function (e, t, n) {},
    PItU: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var a = n("xvhg"),
        r = n("q1tI"),
        i = n("IqYj"),
        o = n("+5ea"),
        c = (n("WXyG"), r.createElement),
        u = function (e) {
          var t = e.name,
            n = e.defaultValue,
            u = e.options,
            s = e.ariaLabel,
            d = e.onChange,
            l = void 0 === d ? function () {} : d,
            f = r.useState(n),
            v = Object(a.a)(f, 2),
            m = v[0],
            b = v[1],
            g = function (e) {
              b(e.target.value), l && l(e, e.target.value);
            };
          return c(
            "div",
            { className: "RadioGroup", role: "radiogroup", "aria-label": s },
            u.map(function (e) {
              var n = e.value,
                a = e.label;
              return c(
                "div",
                { key: n, className: Object(o.d)("RadioGroup", "input") },
                c(i.a, {
                  name: t,
                  value: n,
                  label: a,
                  defaultChecked: n === m,
                  onChange: g,
                })
              );
            })
          );
        };
    },
    PofY: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return C;
      });
      var a,
        r = n("cpVT"),
        i = n("q1tI"),
        o = n.n(i),
        c = n("n59y"),
        u = n("mTaa"),
        s = n("/xWf"),
        d = n("A+y1"),
        l = o.a.createElement;
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var m = Object.values(c.c),
        b = Object.values(c.a),
        g =
          ((a = {}),
          Object(r.a)(a, s.c.Large, 3),
          Object(r.a)(a, s.c.Medium, 2),
          Object(r.a)(a, s.c.Smallest, 1),
          a),
        p = function (e) {
          var t = e.children,
            n = e.refTag;
          return n ? l(d.a, { addRefTag: n }, t) : l(o.a.Fragment, null, t);
        },
        C = function (e) {
          var t = e.carouselProps,
            n = e.collectionCards,
            a = t.overflowButtonProps,
            r = t.refTag,
            i = "".concat(r, "_seeall"),
            o = Object(d.b)(null === a || void 0 === a ? void 0 : a.webUrl, i),
            s = a ? v(v({}, a), {}, { webUrl: r ? o : a.webUrl }) : void 0,
            f = v(
              v({}, t),
              {},
              {
                overflowButtonProps: s,
                totalCards: n.length,
                contentType: u.b.Collection,
                cardsToShow: 3,
                cardsToShowAt: g,
              }
            );
          return l(
            p,
            { refTag: r },
            l(
              u.a,
              f,
              n.map(function (e, t) {
                return l(c.b, {
                  id: e.id,
                  key: e.id,
                  books: e.books,
                  title: e.title,
                  votesCount: e.votesCount,
                  booksCount: e.booksCount,
                  color:
                    (null === e || void 0 === e ? void 0 : e.color) ||
                    m[t % m.length],
                  bookCoverPattern:
                    (null === e || void 0 === e
                      ? void 0
                      : e.bookCoverPattern) || b[t % b.length],
                  refTag: e.refTag,
                });
              })
            )
          );
        };
    },
    Pr9M: function (e, t, n) {
      "use strict";
      n("cpVT");
      var a = n("q1tI"),
        r = n.n(a);
      n("zAUr"),
        n("Qu/W"),
        n("09FE"),
        n("+5ea"),
        n("8y1Z"),
        n("50TJ"),
        n("Y1lN"),
        n("LbMs"),
        n("4T7U"),
        n("yaQO"),
        n("syl4"),
        n("cqii"),
        n("JC+y"),
        r.a.createElement,
        n("xvhg"),
        n("dhJC"),
        n("jxk/"),
        n("dhqo"),
        n("tF9N"),
        r.a.createElement,
        r.a.createElement,
        n("VX74"),
        n("KACy"),
        n("2ViY"),
        r.a.createElement;
      n("54Mc"),
        r.a.createElement,
        r.a.createElement,
        n("mNTR"),
        n("lLyO"),
        n("LvDl");
      n("2guB"), r.a.createElement;
    },
    Prh1: function (e, t, n) {
      "use strict";
      var a = n("z7pX"),
        r = n("9ONQ"),
        i = n("1JQt"),
        o = function (e) {
          return new r.a();
        },
        c = function (e, t) {
          return o().get(e);
        },
        u = function (e, t, n) {
          return o().remove(e, n);
        },
        s = function (e, t) {
          var n = t.match("".concat(e, "=(.*?);"));
          if (null !== n && n.length > 1) return n[1];
        };
      t.a = {
        get: c,
        getAll: function (e) {
          return o().getAll();
        },
        getAllAsHeader: function (e) {
          return document.cookie;
        },
        getResponseCookie: s,
        getResponseCookieFromContext: function (e, t) {
          var n = t.res.getHeader("Set-Cookie").toString();
          return s(e, n);
        },
        has: function (e, t) {
          return void 0 !== c(e);
        },
        set: function (e, t, n) {
          new r.a().set(e, t, n);
        },
        remove: u,
        setCookieWithContext: function (e, t) {
          var n = t instanceof Array ? t : [t],
            r = e.res.getHeader("Set-cookie"),
            i = [];
          void 0 === r
            ? i.push.apply(i, Object(a.a)(n))
            : r instanceof Array
            ? i.push.apply(i, Object(a.a)(r).concat(Object(a.a)(n)))
            : i.push.apply(i, [String(r)].concat(Object(a.a)(n))),
            e.res.setHeader("Set-Cookie", i);
        },
        withoutSecureFlag: function (e) {
          return null === e || void 0 === e
            ? void 0
            : e.reduce(function (e, t) {
                var n = t.replace(/ secure;/gi, "");
                return e.push(n), e;
              }, []);
        },
        removeAllDuplicateCookies: function () {
          var e = [];
          try {
            for (var t = window.location.pathname; "" !== t && "/" !== t; ) {
              e.push("".concat(t, "/")), e.push(t);
              var n = t.lastIndexOf("/");
              t = t.substring(0, n);
            }
          } catch (a) {
            i.a.error("Error when removing duplicate cookies: ".concat(a));
          }
          e.forEach(function (e) {
            u("ccsid", 0, { path: e });
          });
        },
      };
    },
    "Q+wg": function (e, t, n) {},
    "Qu/W": function (e, t, n) {
      "use strict";
      n.d(t, "m", function () {
        return a.b;
      }),
        n.d(t, "a", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return d;
        }),
        n.d(t, "c", function () {
          return f;
        }),
        n.d(t, "d", function () {
          return m;
        }),
        n.d(t, "e", function () {
          return g;
        }),
        n.d(t, "f", function () {
          return C;
        }),
        n.d(t, "g", function () {
          return L;
        }),
        n.d(t, "h", function () {
          return y;
        }),
        n.d(t, "i", function () {
          return w;
        }),
        n.d(t, "j", function () {
          return S;
        }),
        n.d(t, "k", function () {
          return T.a;
        }),
        n.d(t, "l", function () {
          return E;
        }),
        n.d(t, "n", function () {
          return x;
        }),
        n.d(t, "o", function () {
          return P;
        }),
        n.d(t, "p", function () {
          return B;
        }),
        n.d(t, "q", function () {
          return F;
        }),
        n.d(t, "r", function () {
          return R;
        }),
        n.d(t, "s", function () {
          return q;
        }),
        n.d(t, "t", function () {
          return V;
        }),
        n.d(t, "u", function () {
          return z;
        }),
        n.d(t, "v", function () {
          return G;
        }),
        n.d(t, "w", function () {
          return Q;
        }),
        n.d(t, "x", function () {
          return K;
        }),
        n.d(t, "y", function () {
          return $;
        }),
        n.d(t, "z", function () {
          return te;
        }),
        n.d(t, "A", function () {
          return ae;
        }),
        n.d(t, "B", function () {
          return ie;
        }),
        n.d(t, "D", function () {
          return ce;
        }),
        n.d(t, "C", function () {
          return se;
        }),
        n.d(t, "E", function () {
          return le;
        }),
        n.d(t, "F", function () {
          return ve;
        }),
        n.d(t, "G", function () {
          return be;
        }),
        n.d(t, "H", function () {
          return pe;
        }),
        n.d(t, "I", function () {
          return he;
        }),
        n.d(t, "J", function () {
          return Oe;
        }),
        n.d(t, "K", function () {
          return ke;
        }),
        n.d(t, "L", function () {
          return je;
        }),
        n.d(t, "M", function () {
          return Te;
        }),
        n.d(t, "N", function () {
          return Ee;
        }),
        n.d(t, "O", function () {
          return xe;
        }),
        n.d(t, "P", function () {
          return Pe;
        }),
        n.d(t, "Q", function () {
          return Be;
        }),
        n.d(t, "R", function () {
          return Fe;
        }),
        n.d(t, "S", function () {
          return Re;
        }),
        n.d(t, "T", function () {
          return qe;
        }),
        n.d(t, "U", function () {
          return Ve;
        }),
        n.d(t, "V", function () {
          return ze;
        }),
        n.d(t, "W", function () {
          return Ge;
        });
      var a = n("BEb3"),
        r = n("q1tI"),
        i = n.n(r),
        o = (i.a.createElement, n("HALo")),
        c = i.a.createElement,
        u = function (e) {
          var t = Object(o.a)({}, e);
          return c(
            a.c,
            { className: "AmazonIcon" },
            c(
              "svg",
              Object(o.a)({ viewBox: "0 0 24 24" }, t),
              c("path", {
                d: "M21 21L21 3L3 3L3 21L21 21ZM9.44538 17.5315C8.11615 17.2269 7.29231 16.0915 7.29231 14.5615C7.29231 13.5369 7.65923 12.6715 8.35846 12.0208C9.12692 11.3077 10.0546 10.9892 12.0346 10.7608L13.0731 10.6431L13.0662 10.0892C13.0592 9.40385 12.9554 9.08538 12.6577 8.82231C11.8615 8.12308 10.4769 8.55231 10.2 9.57692C10.0823 10.02 10.0408 10.0269 8.93308 9.93C8.32385 9.87462 7.88769 9.79846 7.78385 9.73615C7.63846 9.63923 7.62462 9.59769 7.66615 9.27231C7.79769 8.13692 8.87077 7.02923 10.2277 6.63461C11.1208 6.37154 12.2838 6.32308 13.1562 6.50308C14.5062 6.78 15.3369 7.43077 15.69 8.49692C15.8215 8.88462 15.8354 9.14769 15.87 11.6885C15.9185 14.7692 15.8977 14.6238 16.4308 15.3715C16.5831 15.5862 16.7077 15.8285 16.7077 15.9185C16.7077 16.1262 15.0462 17.5385 14.79 17.5385C14.6031 17.5385 14.0008 16.9708 13.6823 16.4931C13.5231 16.2577 13.4885 16.23 13.3915 16.3131C13.3292 16.3615 13.1285 16.5415 12.9346 16.7008C12.4985 17.0746 11.9169 17.3723 11.3631 17.5038C10.8646 17.6215 9.88846 17.6354 9.44538 17.5315ZM11.3423 15.6C12.3738 15.6 13.0038 14.6931 13.0869 13.0938L13.1285 12.2769L12.6162 12.2838C12.3323 12.2908 12.0415 12.3046 11.9654 12.3254C10.7469 12.5815 10.2 13.1631 10.2 14.1808C10.2 15.0738 10.6223 15.6 11.3423 15.6Z",
              })
            )
          );
        },
        s = i.a.createElement,
        d = function (e) {
          var t = Object(o.a)({}, e);
          return s(
            a.c,
            { className: "AwardIcon" },
            s(
              "svg",
              Object(o.a)({ viewBox: "0 0 48 48" }, t),
              s("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24.0975 31.5851C26.4185 31.5607 28.7315 30.7032 30.5024 29.0126C32.2758 27.3196 33.1741 25.1075 33.1972 22.8886C33.213 21.3703 33.213 15.6966 33.1972 5.86768C29.122 5.86768 26.0657 5.86768 24.0281 5.86768C24.0975 9.37996 24.0281 27.5709 24.0975 31.5851Z",
                fill: "#C69259",
              }),
              s("path", {
                d: "M35.4458 5.11768C35.86 5.11768 36.1958 5.45346 36.1958 5.86768C36.1958 6.24737 35.9136 6.56117 35.5476 6.61083L35.4458 6.61768H33.9478L33.9571 20.4655L33.9472 22.8964C33.9213 25.3824 32.8937 27.7667 31.0204 29.5551C29.2581 31.2375 27.0016 32.1565 24.6995 32.3119L24.7 36.3707C27.5542 36.7387 29.7594 39.178 29.7594 42.1323C29.7594 42.5466 29.4236 42.8823 29.0094 42.8823H18.8901C18.4758 42.8823 18.1401 42.5466 18.1401 42.1323C18.1401 39.178 20.3452 36.7387 23.1994 36.3707L23.1989 32.3052C20.9291 32.1316 18.7096 31.2149 16.971 29.5551C15.0948 27.7639 14.0669 25.375 14.0441 22.885L14.0341 15.5225L14.0428 6.61768H12.243C11.8288 6.61768 11.493 6.28189 11.493 5.86768C11.493 5.48798 11.7752 5.17418 12.1412 5.12452L12.243 5.11768H35.4458ZM23.9497 37.8227C21.8496 37.8227 20.1003 39.3249 19.7178 41.3134L19.7061 41.382H28.1931L28.1816 41.3134C27.8119 39.3912 26.1649 37.9234 24.1585 37.8277L23.9497 37.8227ZM32.4478 6.61768H15.5418L15.5351 20.2388L15.544 22.8712C15.5631 24.9575 16.4246 26.9596 18.0068 28.4701C21.3106 31.6241 26.6808 31.6241 29.9846 28.4701C31.5643 26.962 32.4256 24.9637 32.4473 22.8808L32.4478 6.61768ZM12.0095 11.3058V12.8058C10.0938 12.8058 8.54077 14.3587 8.54077 16.2745C8.54077 18.1263 9.99195 19.6392 11.8191 19.738L12.0095 19.7431V23.1482C12.0095 23.5624 11.6737 23.8982 11.2595 23.8982C10.8798 23.8982 10.566 23.6161 10.5163 23.25L10.5095 23.1482L10.5091 21.0126C8.49831 20.3765 7.04077 18.4957 7.04077 16.2745C7.04077 13.6025 9.14979 11.4232 11.7939 11.3104L12.0095 11.3058ZM36.0314 11.3058C38.7755 11.3058 41.0001 13.5303 41.0001 16.2745C41.0001 18.508 39.5264 20.3973 37.4983 21.0231L37.4983 23.1482C37.4983 23.5624 37.1625 23.8982 36.7483 23.8982C36.3686 23.8982 36.0548 23.6161 36.0051 23.25L35.9983 23.1482V20.4931C35.9983 20.4178 36.0094 20.345 36.0301 20.2764L36.0314 19.7431C37.9471 19.7431 39.5001 18.1902 39.5001 16.2745C39.5001 14.4226 38.0489 12.9097 36.2217 12.8109L36.0314 12.8058V11.3058Z",
                fill: "#1E1915",
              })
            )
          );
        },
        l = i.a.createElement,
        f = function (e) {
          var t = Object(o.a)({}, e);
          return l(
            a.c,
            { className: "BadgeIcon" },
            l(
              "svg",
              Object(o.a)(
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" },
                t
              ),
              l("path", {
                d: "M9.85,5.47C8,5.47,7.08,6.91,7.08,8.58s.93,3,2.66,3a2.78,2.78,0,0,0,2.81-3A2.81,2.81,0,0,0,9.85,5.47Z",
              }),
              l("path", {
                d: "M20,10,18.35,8.05,19,5.55l-2.32-1L16.23,2l-2.51.11L12.23,0,10,1.22,7.77,0,6.29,2.09,3.77,2,3.31,4.52,1,5.55l.66,2.5L0,10,1.65,12,1,14.45l2.32,1L3.77,18l2.52-.11L7.77,20,10,18.78,12.23,20l1.49-2.09,2.51.11.46-2.55,2.32-1L18.35,12Zm-7.16,2c0,1.88-1.1,2.77-2.95,2.77-1.43,0-2.66-.63-2.7-2.18h.27c.06,1.37,1.13,1.91,2.42,1.91,1.71,0,2.69-.79,2.69-2.5V10h0a2.79,2.79,0,0,1-2.79,1.94c-2,0-2.95-1.53-2.95-3.31s1-3.38,3.05-3.38a2.7,2.7,0,0,1,2.69,2h0V5.36h.27Z",
              })
            )
          );
        },
        v = (n("9wOd"), i.a.createElement),
        m = function (e) {
          var t = e.ariaLabel;
          return v(
            a.c,
            { className: "BookIcon", ariaLabel: t },
            v(
              "svg",
              { viewBox: "0 0 24 24" },
              v("path", {
                d: "M10.7355372,6.68429752 C11.9561653,6.68429752 13.0270413,7.27517355 13.6512397,8.21593388 L13.6512397,6.88264463 L14.5636364,6.88264463 L14.5636364,15.4710744 C14.5636364,17.8117686 13.2039669,19.1008264 10.7355372,19.1008264 C8.68641322,19.1008264 7.40370248,17.9712397 7.30452893,16.0796033 L7.29024793,15.8082645 L8.21018182,15.8082645 L8.21652893,16.0595702 C8.23358678,16.7323636 8.43887603,17.2573884 8.82684298,17.6197686 C9.37765289,18.1338843 10.1637025,18.2138182 10.7244298,18.1886281 C11.7699174,18.2175868 12.5359339,17.9882975 13.0202975,17.5023471 C13.4689587,17.0519008 13.6815868,16.3713719 13.651438,15.4798017 L13.6512397,14.0794711 C12.9695207,14.9912727 11.7851901,15.4984463 10.7434711,15.5305785 C8.40833058,15.4901157 6.90743802,13.7541818 6.90743802,11.107438 C6.90743802,8.46168595 8.44581818,6.68429752 10.7355372,6.68429752 M20.4311405,0 C21.2013223,0 21.8429752,0.64522314 21.8429752,1.4193719 L21.8429752,1.4193719 L21.8429752,22.4772893 C21.8429752,22.7871074 21.586314,23.0449587 21.2780826,23.0449587 C21.0214215,23.0449587 20.7903471,22.8126942 20.7903471,22.554843 L20.7903471,22.554843 L20.7903471,1.75477686 C20.7903471,1.36760331 20.4825124,1.05798347 20.0973223,1.05798347 L20.0973223,1.05798347 L5.10505785,1.05798347 C4.51457851,1.05798347 4.02684298,1.54829752 4.02684298,2.14195041 L4.02684298,2.14195041 L4.02684298,2.21930579 C4.02684298,2.91609917 4.59153719,3.45798347 5.25917355,3.45798347 L5.25917355,3.45798347 L18.7366612,3.45798347 C19.1216529,3.45798347 19.4298843,3.76760331 19.4298843,4.15477686 L19.4298843,4.15477686 L19.4298843,23.3032066 C19.4298843,23.6901818 19.1216529,24 18.7366612,24 L18.7366612,24 L4.79702479,24 C3.7957686,24 3,23.174281 3,22.1934545 L3,22.1934545 L3,2.11616529 C3,0.954842975 3.9498843,0 5.10505785,0 L5.10505785,0 Z M10.9338843,7.59669421 C8.63543802,7.59669421 7.81983471,9.59464463 7.81983471,11.3057851 C7.81983471,13.4384132 8.96429752,14.8165289 10.7355372,14.8165289 C12.8866116,14.8165289 13.8493884,13.0532231 13.8495868,11.3057851 C13.8614876,10.1170909 13.4814545,9.04621488 12.8070744,8.36528926 C12.3020826,7.85533884 11.6719339,7.59669421 10.9338843,7.59669421 Z",
              })
            )
          );
        },
        b = (i.a.createElement, i.a.createElement),
        g = function (e) {
          var t = e.ariaLabel;
          return b(
            a.c,
            { className: "BullhornIcon", ariaLabel: t },
            b(
              "svg",
              { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
              b("path", {
                d: "M15.367 4.042a.546.546 0 01.805.475V19.38a.526.526 0 01-.265.464.562.562 0 01-.536.011l-3.287-1.89c-.954.835-2.129 1.321-3.376 1.321-2.796 0-5.226-2.189-5.442-4.895h-.722a.54.54 0 01-.54-.54v-3.786a.54.54 0 01.54-.54h3.295zm3.847 11.121l.077.067 1.742 1.742a.75.75 0 01-.984 1.128l-.077-.067-1.742-1.742a.75.75 0 01.984-1.128zM8.708 17.787c.697 0 1.372-.223 1.97-.628l-4.747-2.767H4.773c.216 1.865 1.954 3.395 3.935 3.395zm5.964-11.62l-8.417 4.872H3.502v1.822h2.753l8.417 4.835V6.166zm6.574 5.083a.75.75 0 01.101 1.493l-.101.007h-2.463a.75.75 0 01-.102-1.493l.102-.007h2.463zm-.213-5.12a.75.75 0 01.067.984l-.067.077-1.742 1.742a.75.75 0 01-1.128-.984l.067-.077 1.742-1.742a.75.75 0 011.06 0z",
              })
            )
          );
        },
        p = i.a.createElement,
        C = function (e) {
          var t = e.ariaLabel,
            n = e.direction,
            r = "rotate(".concat(a.a[n], " 12 12)");
          return p(
            a.c,
            { className: "CaretIcon", ariaLabel: t },
            p(
              "svg",
              { viewBox: "0 0 24 24" },
              p("path", {
                d: "M20.7577 7.20063C21.024 7.46689 21.0482 7.88356 20.8304 8.17717L20.7577 8.26129L12 17.019L3.24225 8.26129C2.94936 7.96839 2.94936 7.49352 3.24225 7.20063C3.50852 6.93436 3.92518 6.91015 4.21879 7.12801L4.30291 7.20063L12 14.8978L19.6971 7.20063C19.9634 6.93436 20.38 6.91015 20.6736 7.12801L20.7577 7.20063Z",
                transform: n && r,
              })
            )
          );
        },
        h = i.a.createElement,
        L = function (e) {
          var t = e.ariaLabel,
            n = e.direction,
            r = "rotate(".concat(a.a[n], " 12 12)");
          return h(
            a.c,
            { className: "CaretSmallIcon", ariaLabel: t },
            h(
              "svg",
              { viewBox: "0 0 24 24" },
              h("path", {
                d: "M17.2854 8.68097C17.5517 8.94724 17.5759 9.3639 17.358 9.65752L17.2854 9.74163L11.5219 15.5051L5.75843 9.74163C5.46553 9.44874 5.46553 8.97387 5.75843 8.68097C6.02469 8.41471 6.44136 8.3905 6.73497 8.60836L6.81909 8.68097L11.5219 13.3839L16.2247 8.68097C16.491 8.41471 16.9077 8.3905 17.2013 8.60836L17.2854 8.68097Z",
                transform: n && r,
              })
            )
          );
        },
        O = i.a.createElement,
        y = function (e) {
          var t = e.ariaLabel;
          return O(
            a.c,
            { className: "CheckCircleIcon", ariaLabel: t },
            O(
              "svg",
              { viewBox: "0 0 24 24" },
              O("path", {
                d: "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM16.99 8.42197C17.2563 8.68817 17.2806 9.10482 17.0628 9.3985L16.9903 9.48263L10.3686 16.108L7.01028 12.7544C6.71718 12.4618 6.71683 11.9869 7.00952 11.6938C7.27559 11.4273 7.69224 11.4028 7.98601 11.6205L8.07018 11.693L10.367 13.986L15.9293 8.42227C16.2221 8.1293 16.697 8.12916 16.99 8.42197Z",
              })
            )
          );
        },
        k = i.a.createElement,
        w = function (e) {
          var t = e.ariaLabel;
          return k(
            a.c,
            { className: "CheckIcon", ariaLabel: t },
            k(
              "svg",
              { viewBox: "0 0 24 24" },
              k("polygon", {
                points:
                  "20.707573 6.71733012 19.300255 5.29365636 8.544 15.88 4.70946347 12.0552489 3.29186994 13.4681764 8.54295814 18.7062625 9.60541155 17.6465568",
              })
            )
          );
        },
        j = i.a.createElement,
        S = function (e) {
          var t = e.ariaLabel,
            n = e.direction,
            r = "rotate(".concat(a.a[n], " 12 12)");
          return j(
            a.c,
            { className: "ChevronIcon", ariaLabel: t },
            j(
              "svg",
              { viewBox: "0 0 24 24" },
              j("path", {
                d: "M8.70710678,9.27397892 C8.31658249,8.90867369 7.68341751,8.90867369 7.29289322,9.27397892 C6.90236893,9.63928415 6.90236893,10.2315609 7.29289322,10.5968662 L12,15 L16.7071068,10.5968662 C17.0976311,10.2315609 17.0976311,9.63928415 16.7071068,9.27397892 C16.3165825,8.90867369 15.6834175,8.90867369 15.2928932,9.27397892 L12,12.3542255 L8.70710678,9.27397892 Z",
                transform: n && r,
              })
            )
          );
        },
        T = n("evym"),
        I = (i.a.createElement, i.a.createElement),
        E = function (e) {
          var t = e.ariaLabel;
          return I(
            a.c,
            { className: "CommentIcon", ariaLabel: t },
            I(
              "svg",
              { viewBox: "0 0 24 24" },
              I("path", {
                d: "M12,17 C12.7131011,17 13.4012974,16.9086027 14.0495143,16.7387293 C14.5467025,16.6084349 15.8635311,17.1955251 18,18.5 L17.8664995,17.9551149 C17.4092673,16.0317788 17.3069991,14.928779 17.5596949,14.6461156 C18.4631295,13.6355413 19,12.3715104 19,11 C19,7.6862915 15.8659932,5 12,5 C8.13400675,5 5,7.6862915 5,11 C5,14.3137085 8.13400675,17 12,17 Z M13.796012,15.7713945 C13.2202627,15.9222769 12.6169095,16 12,16 C8.65501663,16 6,13.7242715 6,11 C6,8.27572854 8.65501663,6 12,6 C15.3449834,6 18,8.27572854 18,11 C18,12.0842731 17.5831655,13.1194459 16.8141738,13.9796336 C16.416188,14.4248172 16.3323351,15.1207601 16.5018219,16.2746263 L16.539079,16.5115665 C15.2664214,15.853575 14.4145404,15.6093014 13.796012,15.7713945 Z",
              })
            )
          );
        },
        N = i.a.createElement,
        x = function (e) {
          var t = e.ariaLabel;
          return N(
            a.c,
            { className: "DiscussionsIcon", ariaLabel: t },
            N(
              "svg",
              { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30 30" },
              N("path", {
                d: "M17.178 19.414c.284 0 .545-.022.828-.044-.632 2.103-2.767 3.63-5.295 3.63-1.112 0-2.137-.288-2.986-.797a3.103 3.103 0 0 1-2.093.376c-.13-.022-.174-.199-.065-.287.48-.31.719-.753.872-1.15-.763-.843-1.221-1.905-1.221-3.078 0-1.705.98-3.188 2.44-4.073.808 3.121 3.88 5.423 7.52 5.423m3.378-6.508h-6.734a.534.534 0 0 1-.523-.53c0-.289.24-.532.523-.532h6.734c.284 0 .523.243.523.531a.534.534 0 0 1-.523.531m0 1.948h-6.734a.534.534 0 0 1-.523-.53c0-.289.24-.533.523-.533h6.734c.284 0 .523.244.523.532a.52.52 0 0 1-.523.531m-6.734-4.958h3.465c.285 0 .523.243.523.531a.533.533 0 0 1-.523.531h-3.465a.534.534 0 0 1-.523-.53c0-.31.24-.532.523-.532M17.2 6.487c-3.661 0-6.626 2.634-6.626 5.888s2.965 5.888 6.626 5.888c1.33 0 2.55-.354 3.596-.953.938.577 1.94.555 2.528.466a.177.177 0 0 0 .066-.332c-.566-.376-.872-.908-1.046-1.372.915-1.019 1.46-2.303 1.46-3.697 0-3.254-2.964-5.888-6.604-5.888",
              })
            )
          );
        },
        A = i.a.createElement,
        P = function (e) {
          var t = e.ariaLabel;
          return A(
            a.c,
            { className: "DownloadIcon", ariaLabel: t },
            A(
              "svg",
              { viewBox: "0 0 24 24" },
              A("path", {
                d: "M8.17915 12.8764C8.44517 12.6099 8.86181 12.5853 9.15562 12.8029L9.23981 12.8754L12 15.6297L14.7602 12.8754C15.0267 12.6094 15.4434 12.5856 15.7368 12.8037L15.8209 12.8764C16.0869 13.1429 16.1107 13.5596 15.8926 13.853L15.8199 13.9371L12 17.75L8.18011 13.9371C7.88695 13.6444 7.88652 13.1696 8.17915 12.8764Z",
              }),
              A("path", {
                d: "M11.25 3.75V12.3186L12 13.0679L12.75 12.3186L12.75 3.75L12.7432 3.64823C12.6935 3.28215 12.3797 3 12 3C11.5858 3 11.25 3.33579 11.25 3.75Z",
              })
            )
          );
        },
        M = i.a.createElement,
        B = function (e) {
          var t = Object(o.a)({}, e);
          return M(
            a.c,
            { className: "EnvelopeIcon" },
            M(
              "svg",
              Object(o.a)({ viewBox: "0 0 24 24" }, t),
              M("path", {
                d: "M22 6.50134V8.99911L22.0117 8.99988V19.2929L22.0048 19.3947C21.9551 19.7607 21.6414 20.0429 21.2617 20.0429H2.76398L2.66221 20.0361C2.29613 19.9864 2.01398 19.6726 2.01398 19.2929L2.013 10.2961L2 10.2969V6.50134L3.5 7.99988V8.99911L3.51398 8.99988L3.514 17.4661L8.24121 12.7401L9.30187 13.8007L4.559 18.5431H19.458L14.7156 13.8007L15.7762 12.7401L20.512 17.4751L20.511 10.2961L20.5 10.2969V7.99988L22 6.50134ZM21.2477 4.03711C21.9164 4.03711 22.2508 4.84612 21.7772 5.31826L12.536 14.531C12.2431 14.823 11.7692 14.8228 11.4766 14.5307L2.24808 5.31789C1.77498 4.8456 2.10947 4.03711 2.77795 4.03711H21.2477ZM19.4322 5.53668H4.5902L12.0062 12.9397L19.4322 5.53668Z",
              })
            )
          );
        },
        D = i.a.createElement,
        F = function (e) {
          var t = Object(o.a)({}, e);
          return D(
            a.c,
            { className: "ExclamationIcon" },
            D(
              "svg",
              Object(o.a)({ viewBox: "0 0 24 24" }, t),
              D("path", {
                d: "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM11.9868 13.9818C12.1839 13.9818 12.3707 14.0208 12.5472 14.0988C12.7237 14.1768 12.8777 14.2835 13.009 14.419C13.1404 14.5545 13.2451 14.7125 13.3231 14.8932C13.4011 15.0738 13.4401 15.2708 13.4401 15.4843C13.4401 15.6813 13.4011 15.8702 13.3231 16.0508C13.2451 16.2314 13.1404 16.3874 13.009 16.5188C12.8777 16.6502 12.7237 16.7548 12.5472 16.8328C12.3707 16.9108 12.1839 16.9498 11.9868 16.9498C11.7898 16.9498 11.6051 16.9108 11.4326 16.8328C11.2602 16.7548 11.1104 16.6502 10.9831 16.5188C10.8559 16.3874 10.7532 16.2314 10.6752 16.0508C10.5972 15.8702 10.5582 15.6813 10.5582 15.4843C10.5582 15.2708 10.5972 15.0738 10.6752 14.8932C10.7532 14.7125 10.8559 14.5545 10.9831 14.419C11.1104 14.2835 11.2602 14.1768 11.4326 14.0988C11.6051 14.0208 11.7898 13.9818 11.9868 13.9818ZM13.4647 6.85815V7.42467L13.2184 8.77938C13.1527 9.13242 13.087 9.52036 13.0213 9.94319C12.9557 10.366 12.8961 10.7786 12.8428 11.1809C12.7894 11.5832 12.7422 11.9547 12.7011 12.2955C12.6601 12.6362 12.6355 12.9051 12.6272 13.1021C11.9992 12.9214 11.993 12.9214 11.3588 13.1021C11.3505 12.9051 11.328 12.6362 11.291 12.2955C11.2541 11.9547 11.2069 11.5832 11.1494 11.1809C11.0919 10.7786 11.0303 10.366 10.9647 9.94319C10.899 9.52036 10.8333 9.13242 10.7676 8.77938L10.5213 7.42467V6.85815H13.4647Z",
              })
            )
          );
        },
        _ = i.a.createElement,
        R = function (e) {
          var t = Object(o.a)({}, e);
          return _(
            a.c,
            { className: "FacebookIcon" },
            _(
              "svg",
              Object(o.a)({ viewBox: "0 0 24 24" }, t),
              _("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65686 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9304 5.90625 14.2146 5.90625C15.3087 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1921C13.9499 8.5625 13.5625 9.33334 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3431 21.1283 22 16.9913 22 12Z",
              })
            )
          );
        },
        H = i.a.createElement,
        q = function (e) {
          var t = e.ariaLabel;
          return H(
            a.c,
            { className: "FilterIcon", ariaLabel: t },
            H(
              "svg",
              { viewBox: "0 0 24 24" },
              H("path", {
                d: "M9,15.5 C9.93191279,15.5 10.7149582,16.1373769 10.9369863,16.9999808 L18.5,17 C18.7761424,17 19,17.2238576 19,17.5 C19,17.7761424 18.7761424,18 18.5,18 L10.9367279,18.0010222 C10.7143512,18.8631171 9.93155158,19.5 9,19.5 C8.06844842,19.5 7.28564881,18.8631171 7.06327212,18.0010222 L5.5,18 C5.22385763,18 5,17.7761424 5,17.5 C5,17.2238576 5.22385763,17 5.5,17 L7.06301369,16.9999808 C7.28504178,16.1373769 8.06808721,15.5 9,15.5 Z M9,16.5 C8.44771525,16.5 8,16.9477153 8,17.5 C8,18.0522847 8.44771525,18.5 9,18.5 C9.55228475,18.5 10,18.0522847 10,17.5 C10,16.9477153 9.55228475,16.5 9,16.5 Z M15,10.5 C15.9319128,10.5 16.7149582,11.1373769 16.9369863,11.9999808 L18.5,12 C18.7761424,12 19,12.2238576 19,12.5 C19,12.7761424 18.7761424,13 18.5,13 L16.9367279,13.0010222 C16.7143512,13.8631171 15.9315516,14.5 15,14.5 C14.0684484,14.5 13.2856488,13.8631171 13.0632721,13.0010222 L5.5,13 C5.22385763,13 5,12.7761424 5,12.5 C5,12.2238576 5.22385763,12 5.5,12 L13.0630137,11.9999808 C13.2850418,11.1373769 14.0680872,10.5 15,10.5 Z M15,11.5 C14.4477153,11.5 14,11.9477153 14,12.5 C14,13.0522847 14.4477153,13.5 15,13.5 C15.5522847,13.5 16,13.0522847 16,12.5 C16,11.9477153 15.5522847,11.5 15,11.5 Z M9,5 C9.93191279,5 10.7149582,5.63737692 10.9369863,6.49998077 L18.5,6.5 C18.7761424,6.5 19,6.72385763 19,7 C19,7.27614237 18.7761424,7.5 18.5,7.5 L10.9367279,7.50102216 C10.7143512,8.36311708 9.93155158,9 9,9 C8.06844842,9 7.28564881,8.36311708 7.06327212,7.50102216 L5.5,7.5 C5.22385763,7.5 5,7.27614237 5,7 C5,6.72385763 5.22385763,6.5 5.5,6.5 L7.06301369,6.49998077 C7.28504178,5.63737692 8.06808721,5 9,5 Z M9,6 C8.44771525,6 8,6.44771525 8,7 C8,7.55228475 8.44771525,8 9,8 C9.55228475,8 10,7.55228475 10,7 C10,6.44771525 9.55228475,6 9,6 Z",
              })
            )
          );
        },
        U = i.a.createElement,
        V = function (e) {
          var t = e.ariaLabel;
          return U(
            a.c,
            { className: "FlagIcon", ariaLabel: t },
            U(
              "svg",
              { viewBox: "0 0 24 24" },
              U("path", {
                d: "M19.6310594,7.38702586 C19.8370527,7.02766584 20.2953622,6.90333756 20.6547222,7.10933088 C20.9841355,7.2981581 21.1160569,7.69900093 20.9770889,8.0412955 L20.9324172,8.13299367 L13.7728713,20.6229839 C13.5668779,20.9823439 13.1085685,21.1066722 12.7492085,20.9006789 C12.4197951,20.7118517 12.2878737,20.3110088 12.4268417,19.9687143 L12.4715135,19.8770161 L19.6310594,7.38702586 Z",
              }),
              U("path", {
                d: "M10.2683696,13.2767984 C10.9544197,12.7870201 12.0955361,12.5405251 12.9642271,12.7728934 C14.9136741,13.2942231 18.3134291,11.9435794 18.8354073,9.99552826 C18.8612934,9.89892186 18.8478265,9.79667056 18.7979666,9.7103106 L15.7014095,4.34691719 C15.6253543,4.21518499 15.4775333,4.14232699 15.3268854,4.16198557 C15.1761441,4.18180145 15.0522887,4.29051003 15.0128326,4.43776121 C14.5972184,5.98640452 11.6118841,7.09810272 10.0625713,6.68362188 C8.11310865,6.16228821 4.74445615,7.32330128 4.22159268,9.27274027 C4.19582586,9.36788915 4.20937023,9.47043514 4.25930956,9.55693249 C6.85998664,14.0286106 8.58875668,17.0011069 9.44561967,18.4744214 C9.7342424,18.9706876 9.10294666,19.4694298 8.82461565,18.9908596 C7.95952127,17.5033917 6.20783493,14.4914924 3.56955663,9.9551616 C3.41388231,9.68552665 3.37151909,9.36478695 3.45257464,9.06548393 C4.08909031,6.6922973 7.89419435,5.2792988 10.2683696,5.91421139 C11.3929757,6.21507149 13.9419181,5.35541249 14.2435539,4.23147057 C14.3663174,3.77331197 14.7527336,3.43415019 15.2234528,3.37227136 C15.6933344,3.31095603 16.1540817,3.53805215 16.3911627,3.94868808 L19.4877197,9.31208149 C19.6431888,9.58136202 19.6852881,9.90100858 19.604727,10.2016676 C18.9689182,12.5745376 15.1326198,14.1772204 12.758441,13.5423059 C12.081715,13.3612882 11.1355014,13.5905519 10.6249541,14.006035 C10.6048753,14.0223751 10.4028714,14.1828719 10.0189422,14.4875255 L9.62285039,13.7791468 C10.0256393,13.4639213 10.2408123,13.2964718 10.2683696,13.2767984 Z",
                transform:
                  "translate(11.528515, 11.273469) scale(-1, 1) translate(-11.528515, -11.273469) ",
              }),
              U("path", {
                d: "M15.1813997,3.05000355 C14.5801686,3.1290388 14.0864573,3.56206075 13.9296281,4.14735422 C13.7011674,4.99863388 11.4226087,5.88656994 10.3523615,5.60025221 C7.65965339,4.88015614 3.79295585,6.54184746 3.13866934,8.98129095 C3.03521521,9.36329853 3.08916301,9.77309658 3.28809861,10.117662 L8.54367441,19.1542518 C8.77543613,19.5527495 9.22715178,19.6143221 9.5523869,19.3506693 C9.85077066,19.1087836 9.94102338,18.6797821 9.7265609,18.3110292 L4.5402508,9.39354027 C4.53397857,9.38267319 4.53218758,9.36916119 4.53529347,9.3576921 C4.96097835,7.77057636 7.84750984,6.55234849 9.79854385,6.95504876 L9.97860893,6.99758894 C11.7960881,7.48381118 14.8822901,6.17803586 15.3267252,4.52200154 C15.3322026,4.50155999 15.3489159,4.48688561 15.3692443,4.48421332 C15.3894856,4.48157211 15.4096088,4.49150341 15.4199509,4.5094165 L18.5165083,9.87281062 C18.5232761,9.88453281 18.5250553,9.89807434 18.5214818,9.91141061 C18.0886681,11.5266949 15.1384832,12.8834126 13.2244829,12.5000132 L13.0481896,12.4589263 C12.1718985,12.2245251 11.0302271,12.4207508 10.2426531,12.9043201 L10.0641366,13.0236801 L9.20332002,13.6947788 L9.92171323,14.9795678 L10.830094,14.2581117 C11.2746161,13.8963597 12.1162977,13.7069649 12.6744593,13.8562677 C15.3288076,14.5661066 19.2590656,12.7473963 19.9186529,10.2857838 C20.0215069,9.9019266 19.9677758,9.49356343 19.769178,9.14958161 L16.6726209,3.786188 C16.3699591,3.26196271 15.781645,2.97167694 15.1813997,3.05000355 Z M15.2658115,3.69449913 C15.6054177,3.65018373 15.9384028,3.81448512 16.1097044,4.11118816 L19.2062615,9.47458151 C19.3186553,9.66925348 19.3490417,9.90019417 19.290801,10.1175516 C18.7466639,12.1482983 15.3629209,13.7621909 13.0339587,13.2739295 L12.8424036,13.2283388 C12.1347581,13.0390505 11.1735323,13.2304506 10.555959,13.6525291 L10.2856675,13.8608007 L10.116,13.995 L10.042,13.863 L10.4572062,13.5413087 C11.0880635,13.0909331 12.132139,12.8867425 12.8802447,13.0868551 C15.1046223,13.6817079 18.6013515,12.1247422 19.1493332,10.0796444 C19.1975096,9.89985107 19.172419,9.70888147 19.0794249,9.54781077 L15.9828678,4.18441717 C15.8411767,3.93899965 15.5657335,3.80306196 15.2848316,3.83971786 C15.0033232,3.87672375 14.772362,4.07950806 14.6989069,4.35364442 C14.3693471,5.58163536 11.8250063,6.69443375 10.3005004,6.40469195 L10.1465634,6.36966276 C7.88358571,5.76448756 4.45119292,7.16214659 3.90768744,9.18854704 C3.85943201,9.36673578 3.88482402,9.55830469 3.97785138,9.71943262 L9.16467843,18.6378137 C9.20442206,18.70615 9.20186667,18.7697469 9.17115541,18.815231 L9.14306373,18.845739 C9.13011431,18.8562365 9.12668857,18.8619009 9.1235247,18.8598247 L3.85049787,9.79176937 C3.73842091,9.59764376 3.70791683,9.36592878 3.76627472,9.15043841 C4.30294934,7.14950297 7.62336848,5.67472568 9.98951713,6.1813426 L10.1844071,6.22817843 C11.5190253,6.58522198 14.0410639,5.63264975 14.5146869,4.44392863 L14.5574465,4.31571092 C14.6462635,3.98424199 14.9256281,3.73921826 15.2658115,3.69449913 Z",
                transform:
                  "translate(11.528484, 11.273778) scale(-1, 1) translate(-11.528484, -11.273778) ",
              })
            )
          );
        },
        Z = i.a.createElement,
        z = function (e) {
          var t = e.ariaLabel;
          return Z(
            a.c,
            { className: "FriendsIcon", ariaLabel: t },
            Z(
              "svg",
              { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30 30" },
              Z("path", {
                d: "M15.012 5.51c.059.383.524.795.641.798.767.018 1.505.549 1.708 1.093l.007.026.001-.002c.167.115 1.942.2 1.163 3.286l-.001.012a.56.56 0 0 1 .117-.013c.279-.003.569.214.261 1.329-.245.89-.473 1.119-.642 1.119a.234.234 0 0 1-.148-.061c-.103.607-.352 1.332-.92 1.908l.029-.003s.047.708.298 1.112c.01.005 1.545.729 3.333 1.159 1.338.32 1.402 1.777 1.348 2.498l.006-.002v.108c-.001.27-.02.977-.156 1.3 0 0-2.613 1.604-6.989 1.604l.003-.095-.009.095c-3.465 0-5.825-1.006-6.657-1.424-1.199-.084-3.814-.369-4.755-1.232v-1.322c.007-.078.083-.711.763-1.013.725-.322 1.093-.386 1.119-.4.022-.01 1.236-.311 1.793-.597.131-.08.213-.138.213-.138v-.547c-.897.008-1.571-.21-1.962-.41.328-.69.647-.78-.166-.068-.045.04-.316-.27-.316-.27s1.078-.015 1.012-2.703C6.039 9.969 7.352 9.525 7.841 9.35c.81-.305 1.117-.202 1.182-.171l.013.007c.77-.302 1.702.469 2.29 1.55a.393.393 0 0 1 .149-.026c.064 0 .074 0 .13.015v-.024s-.824-2.597 1.16-3.739c0 0 1.816-.742 1.843-1.127 0 0-.09.39.093.531l.025.014-.019-.02c-.092-.12-.026-.415.305-.85zm4.924 3.437c1.425-.51 2.533.335 2.533.335 1.444.15 1.406 1.706 1.322 3.442-.008.154.342-.139.465.3-.02.2-.025.525-.135.82-.11.296-.052.634-.232.774-.186.144-.36-.115-.355.012-.02.036-.113.341-.373.64-.26.298-.675.52-.675.52l.001.488v.08s.082.06.213.138c.557.286 1.771.587 1.793.597.024.014.394.08 1.12.4.723.322.762 1.021.762 1.021v1.25c-.803.785-2.782 1.11-4.071 1.24.09-.356.103-.906.105-1.136v-.107h-.006l.006-.097c.04-.747-.075-2.094-1.355-2.401a15.03 15.03 0 0 1-1.97-.631c.122-.047.233-.095.326-.143l.272-.18c.07-.207.073-.462.078-.588-.017-.027-.195-.04-.505-.53-.189-.302-.217-.67-.316-.572 0 0-.307.17-.417.08-.048-.038-.148-.478-.192-.618a4.188 4.188 0 0 1-.135-.483l.017-.054.048-.183c.24.139.6-.441.845-1.331.309-1.115-.105-1.53-.333-1.514.089-.388.135-.725.149-1.02.274-.245.61-.415 1.015-.549zm-7.956 4.169a.223.223 0 0 1-.094.04c-.202 1.935.633 2.575.633 2.575-.555-.138-.655-.568-1.061-1.07-.031-.04.147.677.62 1.155-.106.06-1.677.277-1.677.277v.569s.082.059.213.138c.037.02.078.038.12.057 1.071-.344 1.815-.672 1.815-.672.294-.381.347-1.182.347-1.182-.562-.57-.811-1.284-.916-1.887z",
              })
            )
          );
        },
        W = i.a.createElement,
        G = function (e) {
          var t = Object(o.a)({}, e);
          return W(
            a.c,
            { className: "GiftIcon" },
            W(
              "svg",
              Object(o.a)(
                { viewBox: "20 20 49 46", xmlns: "http://www.w3.org/2000/svg" },
                t
              ),
              W("path", {
                d: "M60.3116 33.3753C60.7259 33.3753 61.0616 33.7111 61.0616 34.1253V42.8249C61.0616 43.2391 60.7259 43.5749 60.3116 43.5749L57.4045 43.5743L57.4055 61.8236C57.4055 62.2033 57.1233 62.5171 56.7572 62.5668L56.6555 62.5736H31.4676C31.0879 62.5736 30.7741 62.2915 30.7245 61.9254L30.7176 61.8236V43.6167L30.7195 43.5743L27.8305 43.5749C27.4508 43.5749 27.137 43.2927 27.0873 42.9266L27.0805 42.8249V34.1253C27.0805 33.7111 27.4163 33.3753 27.8305 33.3753H60.3116ZM55.9045 43.5743H32.2145L32.2176 43.6167L32.2175 61.0733H55.9045V43.5743ZM59.5615 34.8753H28.5805V42.0743H59.5615V34.8753Z",
                fill: "#1E1915",
              }),
              W("path", {
                d: "M49.2502 25.1811C51.9061 23.7308 55.2687 24.6656 56.8606 27.3149C58.4933 30.0322 57.659 33.5474 54.9738 35.1608C54.1402 35.6617 52.88 35.9813 51.1564 36.1405L50.5287 36.1901L49.8623 36.2265L49.1566 36.25L48.4113 36.2608C48.1563 36.2623 47.8946 36.2616 47.6262 36.2591L46.8007 36.2451C46.6598 36.2417 46.5171 36.2379 46.3728 36.2335L46.4441 36.2355L46.4443 61.0757H43.4443L43.4441 36.2085L43.3021 36.2151L42.477 36.2436L41.692 36.259C41.3094 36.2634 40.9418 36.2629 40.5888 36.2573L39.9023 36.2393C37.679 36.1567 36.1022 35.8457 35.1113 35.2737C32.3983 33.7073 31.5029 30.2072 33.0879 27.4619L33.2103 27.2593C34.8464 24.6694 38.2197 23.7812 40.8648 25.3083C42.1409 26.0451 43.5279 27.8401 45.151 30.7703L45.0181 30.5325L45.0446 30.4839L45.4137 29.8175C46.7528 27.454 47.9358 25.9653 49.0473 25.2974L49.2502 25.1811ZM39.3648 27.9064C38.1 27.1762 36.4501 27.6384 35.686 28.9619C34.9219 30.2854 35.3466 31.9454 36.6113 32.6756C36.9787 32.8877 37.6404 33.0473 38.5801 33.1453L39.0335 33.1862L39.5259 33.2181L40.0572 33.241L40.6268 33.2545L41.2345 33.2585L41.8798 33.2528L42.5625 33.2373L43.0611 33.22L42.9945 33.0929L42.6495 32.4532L42.3153 31.8534C42.2057 31.6602 42.098 31.4737 41.9921 31.2939L41.6804 30.7748L41.3806 30.2964C40.5971 29.0752 39.9442 28.2905 39.4546 27.9625L39.3648 27.9064ZM54.2891 28.86C53.502 27.5501 51.8442 27.1167 50.5924 27.8689C50.2443 28.0781 49.8076 28.5465 49.296 29.2653L49.0341 29.6456L48.7601 30.0674C48.7134 30.1411 48.6663 30.2165 48.6186 30.2937L48.3272 30.7773L48.0246 31.3017C47.9732 31.3925 47.9215 31.485 47.8692 31.5792L47.5506 32.1645L47.2219 32.7901L46.9881 33.246L47.5012 33.2549L48.2079 33.2583C48.4368 33.2578 48.6589 33.2556 48.8743 33.2518L49.4999 33.2357L50.0844 33.21L50.6274 33.1751L51.1284 33.1311L51.5871 33.0783C51.66 33.0688 51.7312 33.059 51.8005 33.0487L52.195 32.9832C52.6922 32.8902 53.074 32.7753 53.3361 32.6407L53.4287 32.5893C54.6805 31.8371 55.0762 30.17 54.2891 28.86Z",
                fill: "#C69259",
              }),
              W("path", {
                d: "M47.6347 24.8258C49.9326 23.5888 52.837 24.4033 54.2177 26.7012C55.639 29.0666 54.9144 32.1198 52.5876 33.5179C51.6846 34.0604 50.1239 34.373 47.8724 34.4742L47.1763 34.4982C46.6983 34.51 46.1926 34.5134 45.6588 34.5086L44.8371 34.4953C44.6967 34.492 44.5544 34.4883 44.4105 34.484L43.6941 34.4578L43.6943 61.185H42.1943L42.1941 34.4208L42.1159 34.4254L41.2526 34.4661L40.4313 34.4938L39.6518 34.5084C39.2724 34.5124 38.9087 34.5115 38.5605 34.5056L37.8846 34.487C35.8096 34.407 34.3529 34.1245 33.4863 33.6241C31.1354 32.2668 30.3576 29.2268 31.7374 26.8369L31.8561 26.6413C33.2846 24.4017 36.2042 23.6383 38.4898 24.9579C39.3564 25.4582 40.3294 26.5784 41.4362 28.3355L41.7902 28.9115L42.1533 29.53C42.2146 29.6366 42.2762 29.745 42.3383 29.8552L42.7154 30.5376C42.8427 30.7721 42.9716 31.0139 43.1021 31.2627L43.0311 31.1288L43.306 30.5929L43.6711 29.904L44.0276 29.2579C45.3192 26.9673 46.4404 25.5371 47.4336 24.9403L47.6347 24.8258ZM52.932 27.4737C51.9335 25.812 49.8163 25.2586 48.2061 26.226C47.7591 26.4946 47.2278 27.0631 46.6211 27.9258L46.3357 28.3448C46.2873 28.4181 46.2384 28.4932 46.1891 28.57L45.888 29.0515C45.7349 29.3026 45.578 29.5693 45.4173 29.8514L45.091 30.4364C44.9254 30.7392 44.7561 31.0574 44.5832 31.391L44.2329 32.0787L43.8808 32.793C43.9573 32.9476 44.0343 33.1043 44.1119 33.2634L43.9661 32.9678L43.9699 32.9682L44.782 32.9927L45.5537 33.0062C45.6789 33.0075 45.8025 33.0084 45.9243 33.0088L46.635 33.006L47.3046 32.9926L47.9332 32.9685C48.0345 32.9636 48.1341 32.9582 48.232 32.9525L48.7985 32.9127C50.1627 32.8003 51.1366 32.5911 51.7064 32.293L51.815 32.2322C53.4251 31.2647 53.9305 29.1355 52.932 27.4737ZM37.7398 26.2569C36.113 25.3177 34.0058 25.9079 33.0364 27.5869C32.0671 29.2658 32.6095 31.3859 34.2363 32.3251C34.7575 32.626 35.6821 32.8314 36.9962 32.9338L37.5426 32.9692L38.1303 32.9935C38.3331 32.9998 38.5428 33.0042 38.7592 33.0067L39.4291 33.0085C39.6591 33.0072 39.896 33.004 40.1396 32.9988L40.8908 32.9777L41.6822 32.9449L42.1551 32.9198L42.1569 32.9174L42.2091 32.8068L41.9995 32.3954L41.6322 31.6935C41.5718 31.58 41.5118 31.4681 41.4523 31.3579L41.1001 30.7172L40.7584 30.1175L40.4272 29.5589L40.1068 29.0414C39.9494 28.793 39.796 28.5601 39.6469 28.3427L39.3543 27.9287C38.7804 27.1423 38.2752 26.6054 37.8456 26.3224L37.7398 26.2569Z",
                fill: "#1E1915",
              })
            )
          );
        },
        J = i.a.createElement,
        Q = function (e) {
          var t = e.ariaLabel;
          return J(
            a.c,
            { className: "GlassesIcon", ariaLabel: t },
            J(
              "svg",
              { viewBox: "0 0 24 24" },
              J("path", {
                d: "M14.2176582,4.375 C15.5329629,3.61560847 17.2148365,4.06626515 17.9742281,5.38156986 L17.9742281,5.38156986 L21.1154435,10.8236155 L21.1307593,10.8530128 L21.1590109,10.9210441 C21.6883565,11.6589827 22,12.5636508 22,13.5411072 C22,16.0263886 19.9852814,18.0411072 17.5,18.0411072 C15.0147186,18.0411072 13,16.0263886 13,13.5411072 C13,13.3901289 13.0074352,13.2408872 13.0219594,13.0937283 L13.0220337,12.8573303 C13.0220337,12.2928767 12.5644536,11.8352966 12,11.8352966 C11.4731766,11.8352966 11.039452,12.2338997 10.9839635,12.7459685 L10.9779663,12.8573303 L10.9780406,13.0937283 C10.9925648,13.2408872 11,13.3901289 11,13.5411072 C11,16.0263886 8.98528137,18.0411072 6.5,18.0411072 C4.01471863,18.0411072 2,16.0263886 2,13.5411072 C2,12.5352353 2.33002632,11.6064453 2.88770431,10.8571116 L2.89049061,10.8530128 L2.90580633,10.8236155 L6.04702179,5.38156986 C6.80641332,4.06626515 8.48828694,3.61560847 9.80359165,4.375 C10.1623111,4.58210678 10.2852175,5.04079959 10.0781107,5.39951905 C9.88826282,5.72834523 9.48701279,5.8590229 9.14515085,5.71899404 L9.05359165,5.67403811 C8.49309248,5.35043376 7.786148,5.51024711 7.4155515,6.02411408 L7.3460599,6.13156986 L5.61520864,9.12806372 C5.90128889,9.07102406 6.19715071,9.04110718 6.5,9.04110718 C8.06260206,9.04110718 9.4391826,9.83756 10.2459375,11.0466615 C10.6987574,10.6062051 11.3177417,10.3352966 12,10.3352966 C12.6822583,10.3352966 13.3012426,10.6062051 13.7552497,11.0463189 C14.5608174,9.83756 15.9373979,9.04110718 17.5,9.04110718 C17.8113703,9.04110718 18.1153543,9.07273123 18.4089155,9.13294267 L16.67519,6.13156986 L16.6056984,6.02411408 C16.2351019,5.51024711 15.5281574,5.35043376 14.9676582,5.67403811 L14.9676582,5.67403811 L14.876099,5.71899404 C14.5342371,5.8590229 14.132987,5.72834523 13.9431392,5.39951905 C13.7360324,5.04079959 13.8589388,4.58210678 14.2176582,4.375 Z M6.5,10.5411072 C4.84314575,10.5411072 3.5,11.8842529 3.5,13.5411072 C3.5,15.1979614 4.84314575,16.5411072 6.5,16.5411072 C8.11506515,16.5411072 9.43204692,15.2648605 9.4974532,13.6658593 L9.47796631,13.6653793 L9.4781472,13.1771591 C9.29853311,11.6919456 8.03366291,10.5411072 6.5,10.5411072 Z M17.5,10.5411072 C15.9663371,10.5411072 14.7014669,11.6919456 14.5218528,13.1771591 L14.5220337,13.6651808 L14.504,13.6651107 L14.5050927,13.71738 C14.5963391,15.2921872 15.9023191,16.5411072 17.5,16.5411072 C19.1568542,16.5411072 20.5,15.1979614 20.5,13.5411072 C20.5,11.8842529 19.1568542,10.5411072 17.5,10.5411072 Z M8.36852839,12.9593652 C8.46873572,13.3612748 8.22415766,13.7683211 7.82224801,13.8685284 C7.45383084,13.9603851 7.0810975,13.7625263 6.94434857,13.4193392 L6.9130848,13.322248 C6.8625232,13.1194565 6.67434234,12.9872293 6.47291827,13.0002989 L6.39700639,13.0121568 C5.99509674,13.1123642 5.58805051,12.8677861 5.48784318,12.4658765 C5.38763585,12.0639668 5.6322139,11.6569206 6.03412355,11.5567132 C7.06608328,11.2994168 8.11123193,11.9274054 8.36852839,12.9593652 Z M19.3685284,12.9593652 C19.4687357,13.3612748 19.2241577,13.7683211 18.822248,13.8685284 C18.4538308,13.9603851 18.0810975,13.7625263 17.9443486,13.4193392 L17.9130848,13.322248 C17.8625232,13.1194565 17.6743423,12.9872293 17.4729183,13.0002989 L17.3970064,13.0121568 C16.9950967,13.1123642 16.5880505,12.8677861 16.4878432,12.4658765 C16.3876358,12.0639668 16.6322139,11.6569206 17.0341235,11.5567132 C18.0660833,11.2994168 19.1112319,11.9274054 19.3685284,12.9593652 Z",
              })
            )
          );
        },
        X = i.a.createElement,
        K = function (e) {
          var t = e.ariaLabel;
          return X(
            a.c,
            { className: "InfoIcon", ariaLabel: t },
            X(
              "svg",
              { viewBox: "0 0 24 24" },
              X("path", {
                d: "M12 2C17.5 2 22 6.5 22 12 22 17.5 17.5 22 12 22 6.5 22 2 17.5 2 12 2 6.5 6.5 2 12 2ZM12 3.5C7.3 3.5 3.5 7.3 3.5 12 3.5 16.7 7.3 20.5 12 20.5 16.7 20.5 20.5 16.7 20.5 12 20.5 7.3 16.7 3.5 12 3.5Z",
              }),
              X("path", {
                d: "M12.1 8.8C12.4 8.8 12.7 8.7 12.9 8.5 13.1 8.3 13.2 8 13.2 7.7 13.2 7.4 13.1 7.1 12.9 6.9 12.7 6.7 12.4 6.6 12.1 6.6 11.8 6.6 11.5 6.7 11.3 6.9 11.1 7.1 11 7.4 11 7.7 11 8 11.1 8.3 11.3 8.5 11.5 8.7 11.8 8.8 12.1 8.8ZM14 17.5L14 16.9C13.7 16.8 13.4 16.8 13.2 16.7 13 16.6 12.9 16.4 12.9 16.1L12.9 16.1 12.9 11.3 13 9.9 12.5 9.9 10.3 10.6 10.3 11 11.3 11.5 11.3 16.1C11.3 16.4 11.2 16.6 11 16.7 10.8 16.8 10.5 16.8 10.2 16.9L10.2 16.9 10.2 17.5 14 17.5Z",
              })
            )
          );
        },
        Y = i.a.createElement,
        $ = function (e) {
          var t = Object(o.a)({}, e);
          return Y(
            a.c,
            { className: "InstagramIcon" },
            Y(
              "svg",
              Object(o.a)({ viewBox: "0 0 24 24" }, t),
              Y("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12 22C6.47733 22 2 17.5227 2 12C2 6.47733 6.47733 2 12 2C17.5227 2 22 6.47733 22 12C22 17.5227 17.5227 22 12 22ZM12 7.0764C13.6038 7.0764 13.7936 7.0828 14.4262 7.11163C15.0123 7.13805 15.3302 7.23654 15.5416 7.31821C15.8218 7.42711 16.022 7.55763 16.2326 7.76741C16.4424 7.978 16.5729 8.17818 16.681 8.45843C16.7635 8.66982 16.8619 8.98771 16.8884 9.57303C16.9172 10.2064 16.9236 10.3962 16.9236 12C16.9236 13.6038 16.9172 13.7936 16.8884 14.4262C16.8619 15.0123 16.7635 15.3302 16.6818 15.5416C16.5729 15.8218 16.4424 16.022 16.2326 16.2326C16.0386 16.4318 15.8025 16.585 15.5416 16.681C15.3302 16.7635 15.0123 16.8619 14.427 16.8884C13.7936 16.9172 13.6038 16.9236 12 16.9236C10.3962 16.9236 10.2064 16.9172 9.57383 16.8884C8.98771 16.8619 8.66982 16.7635 8.45843 16.6818C8.17818 16.5729 7.978 16.4424 7.76741 16.2326C7.5682 16.0386 7.41498 15.8025 7.31901 15.5416C7.23654 15.3302 7.13805 15.0123 7.11163 14.427C7.0828 13.7936 7.0764 13.6038 7.0764 12C7.0764 10.3962 7.0828 10.2064 7.11163 9.57383C7.13805 8.98771 7.23654 8.66982 7.31821 8.45843C7.42711 8.17818 7.55763 7.978 7.76741 7.76741C7.978 7.55763 8.17818 7.42711 8.45843 7.31901C8.66982 7.23654 8.98771 7.13805 9.57303 7.11163C10.2064 7.0828 10.3962 7.0764 12 7.0764ZM12 5.99463C10.3689 5.99463 10.1648 6.00184 9.52419 6.03066C8.88441 6.06029 8.44802 6.16118 8.06688 6.31011C7.66571 6.46071 7.30227 6.69709 7.00193 7.00273C6.69677 7.30268 6.46069 7.66556 6.31011 8.06608C6.16118 8.44802 6.06029 8.88441 6.03066 9.52339C6.00184 10.164 5.99463 10.3689 5.99463 12C5.99463 13.6311 6.00184 13.8352 6.03066 14.4758C6.06029 15.1156 6.16118 15.552 6.31011 15.9331C6.46305 16.3287 6.66883 16.6634 7.00273 16.9981C7.33663 17.3312 7.67133 17.537 8.06608 17.6899C8.44802 17.8388 8.88441 17.9397 9.52339 17.9693C10.164 17.9982 10.3689 18.0054 12 18.0054C13.6311 18.0054 13.8352 17.9982 14.4758 17.9693C15.1156 17.9397 15.552 17.8388 15.9331 17.6899C16.3343 17.5393 16.6977 17.3029 16.9981 16.9973C17.3312 16.6634 17.537 16.3287 17.6899 15.9339C17.8388 15.552 17.9397 15.1156 17.9693 14.4766C17.9982 13.836 18.0054 13.6311 18.0054 12C18.0054 10.3689 17.9982 10.1648 17.9693 9.52419C17.9397 8.88441 17.8388 8.44802 17.6899 8.06688C17.5393 7.66571 17.3029 7.30227 16.9973 7.00193C16.6973 6.69677 16.3344 6.46069 15.9339 6.31011C15.552 6.16118 15.1156 6.06029 14.4766 6.03066C13.836 6.00184 13.6311 5.99463 12 5.99463ZM12.012 8.92525C10.3072 8.92525 8.92525 10.3072 8.92525 12.012C8.92525 13.7168 10.3072 15.0988 12.012 15.0988C13.7168 15.0988 15.0988 13.7168 15.0988 12.012C15.0988 10.3072 13.7168 8.92525 12.012 8.92525ZM12.012 14.0154C10.9056 14.0154 10.0086 13.1185 10.0086 12.012C10.0086 10.9056 10.9056 10.0086 12.012 10.0086C13.1185 10.0086 14.0154 10.9056 14.0154 12.012C14.0154 13.1185 13.1185 14.0154 12.012 14.0154ZM15.9083 8.78272C15.9083 8.38782 15.5882 8.06768 15.1933 8.06768C14.7984 8.06768 14.4782 8.38782 14.4782 8.78272C14.4782 9.17763 14.7984 9.49776 15.1933 9.49776C15.5882 9.49776 15.9083 9.17763 15.9083 8.78272Z",
              })
            )
          );
        },
        ee = i.a.createElement,
        te = function (e) {
          var t = e.ariaLabel;
          return ee(
            a.c,
            { className: "KNHIcon", ariaLabel: t },
            ee(
              "svg",
              { viewBox: "0 0 24 24" },
              ee("path", {
                d: "M16.0024 2.02731L19.9816 6.03668V21.1846C19.9816 21.4607 19.7577 21.6846 19.4816 21.6846L6.98592 21.6847C5.47355 21.6865 4.53847 21.717 4.01634 22.2361L4.01731 17.2383C4.01735 17.1197 4.01739 16.9999 4.01743 16.8789L4.01823 14.995C4.01829 14.8656 4.01836 14.7357 4.01842 14.6053L4.01934 13.0243C4.01942 12.8918 4.01951 12.7592 4.0196 12.6267L4.02018 11.8331C4.02028 11.7012 4.02038 11.5696 4.02049 11.4383L4.02116 10.6561C4.02127 10.5267 4.02139 10.3979 4.02152 10.2698L4.02229 9.51025C4.02595 6.13673 4.03184 3.41492 4.04135 3.41492C4.04135 2.22967 5.49166 2.02731 6.5919 2.02731H16.0024ZM14.9163 3.56631L6.52111 3.56634C5.96883 3.56634 5.52111 4.01406 5.52111 4.56634V20.677C5.86446 20.4013 6.49393 20.2175 7.06618 20.2175H18.3728L18.3723 7.03031L15.6673 7.03111C15.2876 7.03111 14.9738 6.74895 14.9242 6.38288L14.9173 6.28111L14.9163 3.56631ZM16.1606 16.4904C16.5749 16.4904 16.9106 16.8261 16.9106 17.2404C16.9106 17.6546 16.5749 17.9904 16.1606 17.9904H7.696C7.28178 17.9904 6.946 17.6546 6.946 17.2404C6.946 16.8261 7.28178 16.4904 7.696 16.4904H16.1606ZM14.186 12.8368C14.6002 12.8368 14.936 13.1726 14.936 13.5868C14.936 14.001 14.6002 14.3368 14.186 14.3368H7.69861C7.28439 14.3368 6.94861 14.001 6.94861 13.5868C6.94861 13.1726 7.28439 12.8368 7.69861 12.8368H14.186ZM16.1606 9.18319C16.5749 9.18319 16.9106 9.51897 16.9106 9.93319C16.9106 10.3474 16.5749 10.6832 16.1606 10.6832H7.696C7.28178 10.6832 6.946 10.3474 6.946 9.93319C6.946 9.51897 7.28178 9.18319 7.696 9.18319H16.1606ZM12.0063 5.5296C12.4206 5.5296 12.7563 5.86539 12.7563 6.2796C12.7563 6.69381 12.4206 7.0296 12.0063 7.0296H7.69861C7.28439 7.0296 6.94861 6.69381 6.94861 6.2796C6.94861 5.86539 7.28439 5.5296 7.69861 5.5296H12.0063Z",
              })
            )
          );
        },
        ne = i.a.createElement,
        ae = function (e) {
          var t = e.ariaLabel;
          return ne(
            a.c,
            { className: "LikeIcon", ariaLabel: t },
            ne(
              "svg",
              { viewBox: "0 0 24 24" },
              ne("path", {
                d: "M14.4813282,6.41129383 L14.586127,6.97676447 C14.5964421,7.03541935 14.6071117,7.09675198 14.6181364,7.1607667 L14.8551301,8.60363442 L17.440983,8.60363442 C18.1623576,8.60363442 18.8218187,9.01120377 19.1444272,9.65642083 L19.1708204,9.70920723 C19.4523479,10.2722622 19.4523479,10.9350066 19.1708204,11.4980616 L19.118034,11.6036344 L19.1708204,11.7092072 C19.4523479,12.2722622 19.4523479,12.9350066 19.1708204,13.4980616 L19.118034,13.6036344 L19.1708204,13.7092072 C19.4523479,14.2722622 19.4523479,14.9350066 19.1708204,15.4980616 L19,15.8397024 L19,16.1036344 C19,16.7361314 18.6701344,17.3185188 18.1373501,17.6453922 L17.9472136,17.7480616 C17.4795438,17.9818965 16.9638538,18.1036344 16.440983,18.1036344 L9.66834148,18.1034086 C9.31027068,18.6437214 8.696742,19 8,19 L6,19 C4.8954305,19 4,18.1045695 4,17 L4,12 C4,10.8954305 4.8954305,10 6,10 L8,10 C8.60249245,10 9.14276174,10.2664091 9.50943372,10.6878531 L9.58578644,10.6036344 L11,9.18942086 L11,6.75238209 C10.9999468,5.91477784 11.5910613,5.19356674 12.4123594,5.02913493 C13.3640475,4.8385978 14.290004,5.45563256 14.4813282,6.41129383 Z M8,11 L6,11 C5.44771525,11 5,11.4477153 5,12 L5,17 C5,17.5522847 5.44771525,18 6,18 L8,18 C8.55228475,18 9,17.5522847 9,17 L9,12 C9,11.4477153 8.55228475,11 8,11 Z M12.6086732,6.00967606 C12.2547259,6.08053973 11.9999771,6.39134718 12,6.75231863 L12,9.60363442 L10.2928932,11.3107412 L10.2060806,11.4098185 C10.0731645,11.583364 10,11.7968342 10,12.017848 L10,17.1036344 L16.440983,17.1036344 L16.6607228,17.0934175 C16.9522889,17.0662447 17.2369485,16.9851602 17.5,16.8536344 L17.5527864,16.8272412 L17.6506941,16.7693715 C17.8674461,16.6197561 18,16.3717633 18,16.1036344 L18,15.8397024 L18.0067325,15.7238578 C18.0201527,15.6087919 18.053502,15.4966304 18.1055728,15.3924888 L18.2763932,15.050848 L18.3281023,14.9274323 C18.4142842,14.67566 18.3970478,14.3977301 18.2763932,14.1564208 L18.2236068,14.050848 L18.1718977,13.9274323 C18.0857158,13.67566 18.1029522,13.3977301 18.2236068,13.1564208 L18.2763932,13.050848 L18.3281023,12.9274323 C18.4142842,12.67566 18.3970478,12.3977301 18.2763932,12.1564208 L18.2236068,12.050848 L18.1718977,11.9274323 C18.0857158,11.67566 18.1029522,11.3977301 18.2236068,11.1564208 L18.2763932,11.050848 L18.3281023,10.9274323 C18.4142842,10.67566 18.3970478,10.3977301 18.2763932,10.1564208 L18.25,10.1036344 L18.1931817,10.005781 C18.0268209,9.75657623 17.7455186,9.60363442 17.440983,9.60363442 L14,9.60363442 L13.6620695,7.50273613 C13.6377651,7.35933353 13.6150821,7.22808389 13.5940207,7.10898721 L13.5,6.60363442 L13.473045,6.50421954 C13.3512969,6.1515805 12.9846442,5.93440304 12.6086732,6.00967606 Z",
              })
            )
          );
        },
        re = i.a.createElement,
        ie = function (e) {
          var t = e.ariaLabel;
          return re(
            a.c,
            { className: "LikedIcon", ariaLabel: t },
            re(
              "svg",
              { viewBox: "0 0 24 24" },
              re("path", {
                d: "M8,11 L6,11 C5.44771525,11 5,11.4477153 5,12 L5,17 C5,17.5522847 5.44771525,18 6,18 L8,18 C8.55228475,18 9,17.5522847 9,17 L9,12 C9,11.4477153 8.55228475,11 8,11 Z M12.6086732,6.00967606 C12.2547259,6.08053973 11.9999771,6.39134718 12,6.75231863 L12,9.18942086 C12,9.45463735 11.8946432,9.70899126 11.7071068,9.89652764 L10.2928932,11.3107412 L10.2928932,11.3107412 L10.2060806,11.4098185 C10.0731645,11.583364 10,11.7968342 10,12.017848 L10,17.1036344 L16.440983,17.1036344 L16.6607228,17.0934175 C16.9522889,17.0662447 17.2369485,16.9851602 17.5,16.8536344 L17.5527864,16.8272412 L17.6506941,16.7693715 C17.8674461,16.6197561 18,16.3717633 18,16.1036344 L18,15.8397024 L18.0067325,15.7238578 C18.0201527,15.6087919 18.053502,15.4966304 18.1055728,15.3924888 L18.2763932,15.050848 L18.3281023,14.9274323 C18.4142842,14.67566 18.3970478,14.3977301 18.2763932,14.1564208 L18.2236068,14.050848 L18.1718977,13.9274323 C18.0857158,13.67566 18.1029522,13.3977301 18.2236068,13.1564208 L18.2763932,13.050848 L18.3281023,12.9274323 C18.4142842,12.67566 18.3970478,12.3977301 18.2763932,12.1564208 L18.2236068,12.050848 L18.1718977,11.9274323 C18.0857158,11.67566 18.1029522,11.3977301 18.2236068,11.1564208 L18.2763932,11.050848 L18.3281023,10.9274323 C18.4142842,10.67566 18.3970478,10.3977301 18.2763932,10.1564208 L18.25,10.1036344 L18.1931817,10.005781 C18.0268209,9.75657623 17.7455186,9.60363442 17.440983,9.60363442 L14.8520034,9.60363442 C14.3610212,9.60363442 13.9426665,9.24719483 13.8646941,8.76244358 L13.6620695,7.50273613 L13.6620695,7.50273613 C13.6377651,7.35933353 13.6150821,7.22808389 13.5940207,7.10898721 L13.5,6.60363442 L13.473045,6.50421954 C13.3512969,6.1515805 12.9846442,5.93440304 12.6086732,6.00967606 Z",
              })
            )
          );
        },
        oe = i.a.createElement,
        ce = function (e) {
          var t = Object(o.a)({}, e);
          return oe(
            a.c,
            { className: "LinkedinIcon" },
            oe(
              "svg",
              Object(o.a)({ viewBox: "0 0 24 24" }, t),
              oe("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12 22C6.47733 22 2 17.5227 2 12C2 6.47733 6.47733 2 12 2C17.5227 2 22 6.47733 22 12C22 17.5227 17.5227 22 12 22ZM7.684 10.3693V16.5447H9.456V10.3693H7.684ZM8.524 9.59733C9.19067 9.59733 9.60533 9.12333 9.60533 8.52533C9.592 7.916 9.19067 7.45467 8.53667 7.45467C7.88267 7.45467 7.45467 7.91733 7.45467 8.52733C7.45467 9.12533 7.87067 9.59733 8.512 9.59733H8.52467H8.524ZM16.5453 16.5453V13.1113C16.5453 11.1993 15.556 10.31 14.2967 10.31C13.282 10.31 12.646 10.9153 12.528 11.3387V10.3693H10.5373C10.5633 10.884 10.5373 16.5453 10.5373 16.5453H12.528V13.204C12.528 13.0173 12.52 12.832 12.5713 12.6993C12.708 12.3273 13.002 11.9427 13.5313 11.9427C14.222 11.9427 14.536 12.5127 14.536 13.3493V16.5453H16.5453Z",
              })
            )
          );
        },
        ue = i.a.createElement,
        se = function (e) {
          var t = Object(o.a)({}, e);
          return ue(
            a.c,
            { className: "LinkIcon" },
            ue(
              "svg",
              Object(o.a)({ viewBox: "0 0 24 24" }, t),
              ue("path", {
                d: "M12.9655 8.95815C13.0911 9.08368 13.213 9.22687 13.3186 9.37487C13.5145 9.66866 13.5081 10.0348 13.3054 10.3046L13.2306 10.3908L13.2044 10.4166C12.8766 10.7192 12.3794 10.6975 12.1017 10.4054L12.0371 10.3268L11.8169 10.0879C11.4079 9.67893 10.8841 9.46065 10.3088 9.46065C9.79744 9.46065 9.3267 9.63312 8.94119 9.95866L8.80071 10.0879L5.29846 13.5901C4.29064 14.5979 4.53304 16.3003 5.83928 16.9949L5.90852 17.0269L6.02859 17.0735L6.1473 17.1138L6.31618 17.1575C6.99152 17.306 7.66058 17.1408 8.17473 16.6993L8.29995 16.5832L8.47626 16.4152C8.78213 16.1093 9.30012 16.1093 9.60599 16.4152C9.88405 16.6932 9.90933 17.1466 9.68596 17.4523L9.61149 17.5392L9.44436 17.7171C8.73621 18.4252 7.80233 18.8126 6.80655 18.8126C5.81077 18.8126 4.87689 18.4252 4.16874 17.7171C2.77671 16.3251 2.72871 14.0647 4.02561 12.6119L4.1697 12.4594L7.65205 9.01494C8.2592 8.40779 9.04518 8.01193 9.8757 7.90427L10.1007 7.88229C11.1648 7.80198 12.2048 8.1974 12.9655 8.95815ZM17.1805 4.87253C18.1763 4.87253 19.1102 5.25987 19.8184 5.96803C21.2104 7.36005 21.2584 9.62043 19.9615 11.0732L19.8174 11.2257L16.335 14.6702C15.6727 15.3325 14.7975 15.7434 13.8864 15.8028C12.8223 15.8831 11.7823 15.4877 11.0216 14.727C10.896 14.6014 10.774 14.4582 10.6685 14.3102C10.4726 14.0165 10.479 13.6503 10.6817 13.3805L10.7565 13.2943L10.7827 13.2685C11.1378 12.9407 11.6917 12.9934 11.943 13.3511L12.016 13.4282L12.1702 13.5972C12.5792 14.0062 13.103 14.2245 13.6783 14.2245C14.1896 14.2245 14.6604 14.052 15.0459 13.7265L15.1864 13.5972L18.6886 10.095C19.6964 9.08718 19.4541 7.38479 18.1478 6.69024L18.0786 6.6582L17.9585 6.61167L17.8398 6.57129L17.6709 6.5276C16.9956 6.3791 16.3265 6.54436 15.8124 6.98581L15.5108 7.26994C15.205 7.57581 14.687 7.57581 14.3811 7.26994C14.103 6.99188 14.0778 6.53851 14.3011 6.23284L14.3756 6.14589L14.5427 5.96803C15.2509 5.25987 16.1848 4.87253 17.1805 4.87253Z",
              })
            )
          );
        },
        de = i.a.createElement,
        le = function (e) {
          var t = e.ariaLabel;
          return de(
            a.c,
            { className: "LoadingIcon", ariaLabel: t },
            de(
              "svg",
              { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
              de(
                "path",
                {
                  d: "M12,4.5 C16.1421356,4.5 19.5,7.85786438 19.5,12 C19.5,16.1421356 16.1421356,19.5 12,19.5 C11.7238576,19.5 11.5,19.2761424 11.5,19 C11.5,18.7238576 11.7238576,18.5 12,18.5 C15.5898509,18.5 18.5,15.5898509 18.5,12 C18.5,8.41014913 15.5898509,5.5 12,5.5 C11.7238576,5.5 11.5,5.27614237 11.5,5 C11.5,4.72385763 11.7238576,4.5 12,4.5 Z M5.52355661,12.5744813 C5.58966824,13.3204488 5.78546239,14.0531384 6.10903452,14.7470411 C6.22573733,14.9973111 6.11745975,15.2948013 5.86718976,15.4115041 C5.61691978,15.5282069 5.31942955,15.4199293 5.20272674,15.1696593 C4.8298373,14.3699954 4.60380023,13.5241324 4.52746085,12.6627606 C4.50308319,12.3876964 4.70630482,12.1449507 4.98136906,12.1205731 C5.25643331,12.0961954 5.49917895,12.299417 5.52355661,12.5744813 Z M6.12910354,8.15473449 C6.37034463,8.28911211 6.4569746,8.59361124 6.32259698,8.83485234 C5.9995469,9.4148072 5.76629979,10.041192 5.63203591,10.6910042 C5.57615976,10.9614343 5.31163624,11.1353647 5.04120609,11.0794885 C4.77077594,11.0236124 4.59684555,10.7590889 4.6527217,10.4886587 C4.80759392,9.73910605 5.07653051,9.01687717 5.44898569,8.34822792 C5.58336331,8.10698683 5.88786244,8.02035686 6.12910354,8.15473449 Z M10.5511551,5.13333871 C10.6272703,5.3987838 10.473788,5.67567308 10.2083429,5.75178823 C9.13089659,6.060741 8.17228812,6.63067331 7.39899784,7.40679228 C7.2040925,7.60241058 6.88751054,7.60298855 6.69189224,7.40808321 C6.49627394,7.21317787 6.49569597,6.89659591 6.69060131,6.70097761 C7.58329166,5.8050218 8.69055678,5.14670697 9.93270558,4.79052654 C10.1981507,4.71441138 10.4750399,4.86789362 10.5511551,5.13333871 Z",
                },
                de("animateTransform", {
                  attributeName: "transform",
                  type: "rotate",
                  from: "0 12 12",
                  to: "360 12 12",
                  dur: "0.6s",
                  repeatCount: "indefinite",
                })
              )
            )
          );
        },
        fe = i.a.createElement,
        ve = function (e) {
          var t = e.ariaLabel;
          return fe(
            a.c,
            { className: "MessagesIcon", ariaLabel: t },
            fe(
              "svg",
              { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30 30" },
              fe("path", {
                d: "M16.984 14.758l5.04 5.04c-.05.014-.099.032-.155.032H8.01c-.053 0-.102-.018-.152-.032l5.041-5.04 1.841 1.534a.312.312 0 0 0 .402 0l1.843-1.534zm5.478-4.565c.019.06.037.12.037.187v8.82c0 .054-.016.103-.029.154l-5.001-5.001zM7.419 10.19l4.993 4.162-5 5c-.014-.05-.033-.099-.033-.153v-8.82c0-.067.02-.128.04-.189zm14.45-.44c.043 0 .076.014.114.021L14.94 15.64 7.899 9.772c.038-.007.074-.022.11-.022z",
              })
            )
          );
        },
        me = i.a.createElement,
        be = function (e) {
          var t = e.ariaLabel;
          return me(
            a.c,
            { className: "MoreIcon", ariaLabel: t },
            me(
              "svg",
              { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
              me("path", {
                d: "M6,10 C7.1045695,10 8,10.8954305 8,12 C8,13.1045695 7.1045695,14 6,14 C4.8954305,14 4,13.1045695 4,12 C4,10.8954305 4.8954305,10 6,10 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z M18,10 C19.1045695,10 20,10.8954305 20,12 C20,13.1045695 19.1045695,14 18,14 C16.8954305,14 16,13.1045695 16,12 C16,10.8954305 16.8954305,10 18,10 Z",
              })
            )
          );
        },
        ge = (i.a.createElement, i.a.createElement),
        pe = function (e) {
          var t = e.ariaLabel;
          return ge(
            a.c,
            { className: "NotificationsIcon", ariaLabel: t },
            ge(
              "svg",
              { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30 30" },
              ge("path", {
                d: "M15.25 21.472a2.118 2.118 0 0 1-4.164.127 34.54 34.54 0 0 0 4.165-.127zm-.846-15.468l.121.007a1.138 1.138 0 0 1 .908 1.601l-.053.104a1.144 1.144 0 0 1-.013.02c2.14.253 5.212 2.192 6.476 8.501l-.008-.07c.107 1.019.955 1.085 1.174 1.089h.047c.18.004.402.113.438.454l.105.991s-2.916 1.275-7.797 1.787c-4.428.466-7.404-.018-7.92-.112l-.079-.015-.104-.991a.47.47 0 0 1 .27-.504l.066-.032c.867-.115.967-1.318.967-1.318-.114-6.296 2.528-8.87 4.581-9.585a1.136 1.136 0 0 1 .697-1.92l.124-.007z",
              })
            )
          );
        },
        Ce = i.a.createElement,
        he = function (e) {
          var t = e.ariaLabel;
          return Ce(
            a.c,
            { className: "OffsiteIcon", ariaLabel: t },
            Ce(
              "svg",
              { viewBox: "0 0 24 24" },
              Ce("path", {
                d: "M17.4234009,5.315979 C18.0706096,5.315979 18.6029348,5.80785367 18.6669473,6.43817377 L18.6734009,6.565979 L18.6734009,19.7255859 C18.6734009,20.3727946 18.1815262,20.9051198 17.5512061,20.9691323 L17.4234009,20.9755859 L4.26379395,20.9755859 C3.61658525,20.9755859 3.08426005,20.4837113 3.02024755,19.8533912 L3.01379395,19.7255859 L3.01379395,13.9780884 C3.01379395,13.5638748 3.34958038,13.2280884 3.76379395,13.2280884 C4.14348971,13.2280884 4.45728491,13.5102423 4.50694733,13.8763178 L4.51379395,13.9780884 L4.513,19.475 L17.173,19.475 L17.173,6.815 L11.3867075,6.815979 C11.0070117,6.815979 10.6932165,6.53382512 10.6435541,6.16774956 L10.6367075,6.065979 C10.6367075,5.68628324 10.9188613,5.37248804 11.2849369,5.32282562 L11.3867075,5.315979 L17.4234009,5.315979 Z",
                transform:
                  "translate(10.843597, 13.145782) rotate(-270.000000) translate(-10.843597, -13.145782) ",
              }),
              Ce("path", {
                d: "M22.9368133,2.11986084 C23.2298776,1.82713887 23.7047513,1.82741643 23.9974733,2.12048079 C24.2635841,2.38690293 24.2875467,2.80358069 24.0695206,3.0970648 L23.9968533,3.18114078 L18.3470143,8.82437907 L12.9231472,3.40714121 C12.6300749,3.11442715 12.6297845,2.63955351 12.9224986,2.34648124 C13.1886023,2.08005191 13.6052511,2.05559107 13.8989957,2.27326595 L13.9831586,2.34583265 L18.3460159,6.70397881 L22.9368133,2.11986084 Z",
                transform:
                  "translate(18.459993, 5.362440) rotate(-135.000000) translate(-18.459993, -5.362440) ",
              }),
              Ce("path", {
                d: "M19.6736947,3.24986657 C19.9665879,2.95697335 20.4414616,2.95697335 20.7343549,3.24986657 C21.0006214,3.51613313 21.0248275,3.93279681 20.806973,4.22640831 L20.7343549,4.31052674 L10.6752728,14.3696088 C10.3823796,14.662502 9.90750588,14.662502 9.61461266,14.3696088 C9.3483461,14.1033422 9.32414005,13.6866785 9.54199451,13.393067 L9.61461266,13.3089486 L19.6736947,3.24986657 Z",
              })
            )
          );
        },
        Le = (i.a.createElement, i.a.createElement, i.a.createElement),
        Oe = function (e) {
          var t = e.ariaLabel;
          return Le(
            a.c,
            { className: "PencilIcon", ariaLabel: t },
            Le(
              "svg",
              { viewBox: "0 0 24 24" },
              Le("path", {
                d: "M15.5115349,3.2704653 L4.83002247,13.8642153 C4.73634481,13.9571233 4.66883362,14.0730991 4.63430284,14.2004373 L3.03529771,20.0970438 C2.88364936,20.6562732 3.39640087,21.168917 3.95559842,21.0171513 L9.51845853,19.5073957 C9.64453607,19.4731784 9.75948935,19.4066226 9.85193588,19.3143187 L20.688734,8.49424033 C20.9809777,8.20244749 20.9823427,7.7293023 20.6917875,7.43582808 L16.5726469,3.27530562 C16.2810413,2.98077049 15.8058154,2.97860272 15.5115349,3.2704653 Z M16.034,4.864 L19.099,7.96 L8.933,18.111 L4.826,19.226 L6.029,14.787 L16.034,4.864 Z",
              }),
              Le("polygon", {
                points:
                  "13.2645351 7.42163086 14.3251953 6.36097069 17.6638153 9.69959068 16.6031551 10.7602509",
              }),
              Le("rect", {
                transform:
                  "translate(5.369675, 18.698100) rotate(-45.000000) translate(-5.369675, -18.698100) ",
                x: "4.61967468",
                y: "17.5211501",
                width: "1.5",
                height: "2.35390081",
              })
            )
          );
        },
        ye = i.a.createElement,
        ke = function (e) {
          var t = Object(o.a)({}, e);
          return ye(
            a.c,
            { className: "PinterestIcon" },
            ye(
              "svg",
              Object(o.a)({ viewBox: "0 0 24 24" }, t),
              ye("path", {
                d: "M12 2C6.47737 2 2 6.45902 2 11.959C2 16.1803 4.63374 19.7869 8.35391 21.2377C8.26337 20.4508 8.1893 19.2377 8.38683 18.377C8.5679 17.5984 9.55556 13.4262 9.55556 13.4262C9.55556 13.4262 9.25926 12.8279 9.25926 11.9508C9.25926 10.5656 10.0658 9.53279 11.07 9.53279C11.9259 9.53279 12.3374 10.1721 12.3374 10.9344C12.3374 11.7869 11.7942 13.0656 11.5062 14.2541C11.2675 15.2459 12.0082 16.0574 12.9877 16.0574C14.7654 16.0574 16.1317 14.1885 16.1317 11.5C16.1317 9.11475 14.4115 7.45082 11.9506 7.45082C9.10288 7.45082 7.4321 9.57377 7.4321 11.7705C7.4321 12.623 7.76132 13.541 8.17284 14.041C8.25514 14.1393 8.26337 14.2295 8.23868 14.3279C8.16461 14.6393 7.99177 15.3197 7.95885 15.459C7.9177 15.6393 7.8107 15.6803 7.6214 15.5902C6.37037 15.0082 5.58848 13.1967 5.58848 11.7295C5.58848 8.59016 7.87654 5.70492 12.1975 5.70492C15.6626 5.70492 18.3621 8.16393 18.3621 11.459C18.3621 14.8934 16.1893 17.6557 13.177 17.6557C12.1646 17.6557 11.2099 17.1311 10.8889 16.5082C10.8889 16.5082 10.3868 18.4098 10.2634 18.877C10.0412 19.7459 9.4321 20.8279 9.02058 21.4918C9.95885 21.7787 10.9465 21.9344 11.9835 21.9344C17.5062 21.9344 21.9836 17.4754 21.9836 11.9754C22 6.45902 17.5226 2 12 2Z",
              })
            )
          );
        },
        we = i.a.createElement,
        je = function (e) {
          var t = e.ariaLabel;
          return we(
            a.c,
            { className: "PlusIcon", ariaLabel: t },
            we(
              "svg",
              { viewBox: "0 0 24 24" },
              we("path", {
                d: "M12,3 C12.4142136,3 12.75,3.33578644 12.75,3.75 L12.75,11.25 L20.25,11.25 C20.6642136,11.25 21,11.5857864 21,12 C21,12.4142136 20.6642136,12.75 20.25,12.75 L12.75,12.75 L12.75,20.25 C12.75,20.6642136 12.4142136,21 12,21 C11.5857864,21 11.25,20.6642136 11.25,20.25 L11.25,12.749 L3.75,12.75 C3.33578644,12.75 3,12.4142136 3,12 C3,11.5857864 3.33578644,11.25 3.75,11.25 L11.25,11.249 L11.25,3.75 C11.25,3.33578644 11.5857864,3 12,3 Z",
              })
            )
          );
        },
        Se = i.a.createElement,
        Te = function (e) {
          var t = e.ariaLabel;
          return Se(
            a.c,
            { className: "QuestionsIcon", ariaLabel: t },
            Se(
              "svg",
              { viewBox: "0 0 120 120", version: "1.1" },
              Se(
                "g",
                { fill: "none" },
                Se("rect", { x: "0", y: "0", width: "120", height: "120" }),
                Se("path", {
                  d: "M60.0746418,20.0878906 C85.2316967,20.0878906 105.716727,37.9836529 105.716727,60.0900948 C105.716727,69.5640901 101.95008,78.2866878 95.62626,85.2068826 L96.1861134,86.5689775 C97.5820642,89.7143885 100.246006,93.9597984 105.716727,96.1396449 L104.71367,96.3805827 L103.655265,96.5918033 C103.458783,96.6270512 103.25407,96.6614884 103.04384,96.6938657 L102.399313,96.7835681 C98.3354813,97.3882189 91.4034687,97.5376832 84.9276004,93.6244374 C77.6984028,97.6871474 69.2597314,100.092163 60.0746418,100.092163 C34.7689944,100.092163 14.2832729,82.1965367 14.2832729,60.0900948 C14.2832729,37.9836529 34.7689944,20.0878906 60.0746418,20.0878906 Z",
                  fill: "#A16F83",
                  fillRule: "nonzero",
                  transform:
                    "translate(60.000000, 60.090027) scale(-1, 1) translate(-60.000000, -60.090027) ",
                }),
                Se("path", {
                  d: "M60.640045,70.1908781 C60.6440439,70.1908781 60.6424368,69.0449676 60.6440439,68.9837774 C60.6694224,68.0174646 60.7859416,67.1605205 60.9936014,66.4129452 C61.2301732,65.5612868 61.6086881,64.7569427 62.129146,63.9999131 C62.6496039,63.2428834 63.3001762,62.5213395 64.0808631,61.8352813 C64.8615499,61.1492232 65.7723513,60.4040221 66.8132671,59.5996781 C68.2326977,58.5587623 69.5220139,57.5178465 70.6812156,56.4769307 C71.8404173,55.4360149 72.8340187,54.3477847 73.6620199,53.2122402 C74.4900211,52.0766957 75.1287649,50.8583511 75.5782513,49.5572063 C76.0277376,48.2560616 76.2524808,46.8011451 76.2524808,45.1924571 C76.2524808,40.8868508 74.7857358,37.6694747 71.8522458,35.5403287 C68.9187559,33.4111828 64.8733785,32.3466098 59.7161139,32.3466098 C57.5396536,32.3466098 55.4814791,32.6186673 53.5415906,33.1627824 C51.601702,33.7068975 49.8983853,34.4639272 48.4316403,35.4338714 C46.9648953,36.4038157 45.8175222,37.5275316 44.989521,38.8050192 C44.1615198,40.0825068 43.7475192,41.4782802 43.7475192,42.9923396 C43.7475192,43.9386267 43.924948,44.8139423 44.2798057,45.6182863 C44.6346633,46.4226303 45.2142642,47.0850313 46.0186082,47.6054892 L53.6835337,47.6054892 L53.6835337,43.985941 C53.6835337,41.9041094 54.1448486,40.1889641 55.0674785,38.840505 C55.9901084,37.4920459 57.5159964,36.8178163 59.6451423,36.8178163 C61.6796596,36.8178163 63.2765191,37.3619314 64.4357208,38.4501615 C65.5949224,39.5383917 66.1745233,41.1234226 66.1745233,43.2052542 C66.1745233,44.4354274 65.9616087,45.5000004 65.5357795,46.3989731 C65.1099503,47.2979459 64.5540066,48.1259471 63.8679485,48.8829768 C63.1818904,49.6400064 62.4248607,50.3497217 61.5968595,51.0121227 C60.7688583,51.6745237 59.9526856,52.384239 59.1483416,53.1412687 C57.2557674,54.8918998 55.9191369,56.5715594 55.1384501,58.1802474 C54.3577632,59.7889355 53.9674198,61.6341953 53.9674198,63.7160269 C53.9674198,65.3720294 54.3222774,66.8860887 55.0319928,68.258205 C55.1796424,68.5436609 55.327292,68.8158061 55.4749416,69.0746405 C55.7002996,69.4697002 55.9256576,69.8337512 56.1510157,70.1667934 C58.935427,69.8513247 58.9236977,69.8513247 60.640045,70.1908781 Z M58.935427,89.1238354 C60.8280012,89.1238354 62.4248607,88.473263 63.7260054,87.1721183 C65.0271502,85.8709735 65.6777226,84.2977712 65.6777226,82.4525114 C65.6777226,80.5126229 65.0271502,78.8921062 63.7260054,77.5909615 C62.4248607,76.2898167 60.8280012,75.6392443 58.935427,75.6392443 C57.0901672,75.6392443 55.5051363,76.2898167 54.1803344,77.5909615 C52.8555324,78.8921062 52.1931315,80.5126229 52.1931315,82.4525114 C52.1931315,84.2977712 52.8555324,85.8709735 54.1803344,87.1721183 C55.5051363,88.473263 57.0901672,89.1238354 58.935427,89.1238354 Z",
                  fill: "#EDD9DE",
                  fillRule: "nonzero",
                })
              )
            )
          );
        },
        Ie = i.a.createElement,
        Ee = function (e) {
          var t = e.ariaLabel;
          return Ie(
            a.c,
            { className: "QuotesIcon", ariaLabel: t },
            Ie(
              "svg",
              { viewBox: "0 0 120 120", version: "1.1" },
              Ie(
                "g",
                { fill: "none" },
                Ie(
                  "g",
                  { transform: "translate(0.000000, -0.051270)" },
                  Ie("rect", {
                    x: "0",
                    y: "0.0512695312",
                    width: "120",
                    height: "120",
                  }),
                  Ie("path", {
                    d: "M81.5140065,100.213958 C86.7969917,100.213958 91.1365867,98.7045339 94.5327914,95.6856852 C97.9289962,92.6668366 99.6270985,88.5159196 99.6270985,83.2329345 C99.6270985,78.8933395 98.4478608,75.2612872 96.0893853,72.3367776 C93.7309097,69.4122679 90.6648916,67.478318 86.8913307,66.5349278 L86.8913307,66.5349278 L76.4196994,66.5349278 C76.4196994,59.7425183 78.7781749,53.3746344 83.495126,47.4312761 C88.212077,41.4879178 96.6082499,37.1011533 108.683645,34.2709827 L108.683645,34.2709827 L108.683645,24.3653855 C100.193133,25.1200976 92.9290281,27.1483866 86.8913307,30.4502523 C80.8536334,33.7521181 75.8536653,37.7143569 71.8914264,42.336969 C67.9291875,46.959581 65.0518474,51.9595491 63.259406,57.3368733 C61.4669646,62.7141975 60.5707439,68.0443521 60.5707439,73.3273373 C60.5707439,76.534864 60.9952695,79.7423907 61.8443207,82.9499174 C62.6933719,86.1574441 63.9669487,89.0347843 65.665051,91.5819378 C67.3631534,94.1290914 69.5329509,96.2045498 72.1744435,97.8083132 C74.8159361,99.4120766 77.9291237,100.213958 81.5140065,100.213958 Z",
                    fill: "#C69259",
                    fillRule: "nonzero",
                  }),
                  Ie("path", {
                    d: "M31.9432626,95.8485727 C37.2262478,95.8485727 41.5658427,94.3391484 44.9620475,91.3202997 C48.3582522,88.3014511 50.0563546,84.1505342 50.0563546,78.867549 C50.0563546,74.527954 48.8771169,70.8959017 46.5186413,67.9713921 C44.1601658,65.0468824 41.0941476,63.1129325 37.3205868,62.1695423 L37.3205868,62.1695423 L26.8489555,62.1695423 C26.8489555,55.3771328 29.207431,49.0092489 33.9243821,43.0658906 C38.6413331,37.1225323 47.037506,32.7357678 59.1129006,29.9055972 L59.1129006,29.9055972 L59.1129006,20 C50.6223887,20.7547122 43.3582841,22.7830011 37.3205868,26.0848668 C31.2828895,29.3867326 26.2829214,33.3489714 22.3206825,37.9715835 C18.3584436,42.5941955 15.4811035,47.5941636 13.6886621,52.9714878 C11.8962207,58.348812 11,63.6789666 11,68.9619518 C11,72.1694785 11.4245256,75.3770052 12.2735768,78.5845319 C13.122628,81.7920586 14.3962047,84.6693988 16.0943071,87.2165523 C17.7924095,89.7637059 19.962207,91.8391644 22.6036996,93.4429277 C25.2451921,95.0466911 28.3583798,95.8485727 31.9432626,95.8485727 Z",
                    fill: "#A3743D",
                    fillRule: "nonzero",
                  })
                )
              )
            )
          );
        },
        Ne = i.a.createElement,
        xe = function (e) {
          var t = e.ariaLabel;
          return Ne(
            a.c,
            { className: "RefreshIcon", ariaLabel: t },
            Ne(
              "svg",
              { viewBox: "0 0 24 24" },
              Ne("path", {
                d: "M18.5986619,4.53920436 L19.5689535,10.7034001 L13.8225955,8.27067639 L15.8003688,6.7247701 C13.7889109,5.27746148 11.0353562,5.05138385 8.75,6.37083488 C7.07286249,7.33913067 5.9422969,8.97481072 5.60346788,10.8440213 C5.33096996,12.3473045 5.5908235,13.8989807 6.37083488,15.25 C8.16576031,18.3589021 12.1410979,19.4240906 15.25,17.6291651 C15.4891463,17.4910939 15.7949415,17.5730315 15.9330127,17.8121778 C16.0710839,18.0513241 15.9891463,18.3571193 15.75,18.4951905 C12.1628053,20.5662583 7.57587728,19.3371947 5.50480947,15.75 C4.60530467,14.192012 4.30516389,12.3997666 4.61950291,10.6656594 C5.01021363,8.51023425 6.31558978,6.62164173 8.25,5.50480947 C10.9760688,3.93091289 14.2794993,4.26289383 16.6173684,6.08732731 L18.5986619,4.53920436 Z",
              })
            )
          );
        },
        Ae = i.a.createElement,
        Pe = function (e) {
          var t = e.ariaLabel;
          return Ae(
            a.c,
            { className: "SearchIcon", ariaLabel: t },
            Ae(
              "svg",
              { viewBox: "0 0 24 24" },
              Ae("path", {
                d: "M10.9942371,4 C14.8570476,4 17.9884742,7.1314266 17.9884742,10.9942371 C17.9884742,12.7320284 17.3547056,14.3217952 16.3056938,15.5450121 L19.6195637,18.858691 C19.8296728,19.0688002 19.8296728,19.4094545 19.6195637,19.6195637 C19.4094545,19.8296728 19.0688002,19.8296728 18.858691,19.6195637 L18.858691,19.6195637 L15.5450121,16.3056938 C14.3217952,17.3547056 12.7320284,17.9884742 10.9942371,17.9884742 C7.1314266,17.9884742 4,14.8570476 4,10.9942371 C4,7.1314266 7.1314266,4 10.9942371,4 Z M10.9942371,5.07603647 C7.72570514,5.07603647 5.07603647,7.72570514 5.07603647,10.9942371 C5.07603647,14.262769 7.72570514,16.9124377 10.9942371,16.9124377 C14.262769,16.9124377 16.9124377,14.262769 16.9124377,10.9942371 C16.9124377,7.72570514 14.262769,5.07603647 10.9942371,5.07603647 Z",
              })
            )
          );
        },
        Me = i.a.createElement,
        Be = function (e) {
          var t = Object(o.a)({}, e);
          return Me(
            a.c,
            { className: "ShareIcon" },
            Me(
              "svg",
              Object(o.a)({ viewBox: "0 0 24 24" }, t),
              Me("path", {
                d: "M16.5 2C18.433 2 20 3.567 20 5.5C20 7.433 18.433 9 16.5 9C15.6752 9 14.917 8.71467 14.3187 8.23733L10.6119 10.3965C10.8599 10.8769 11 11.4221 11 12C11 12.619 10.8393 13.2006 10.5573 13.7051L14.2507 15.8184C14.859 15.3076 15.6436 15 16.5 15C18.433 15 20 16.567 20 18.5C20 20.433 18.433 22 16.5 22C14.567 22 13 20.433 13 18.5C13 17.9703 13.1177 17.4681 13.3283 17.0181L9.62754 14.901C9.59678 14.8834 9.56774 14.8639 9.54048 14.8429C8.9661 15.2568 8.26144 15.5 7.5 15.5C5.567 15.5 4 13.933 4 12C4 10.067 5.567 8.5 7.5 8.5C8.30519 8.5 9.04687 8.77189 9.63824 9.22888L13.364 7.056C13.131 6.58729 13 6.05895 13 5.5C13 3.567 14.567 2 16.5 2ZM16.5 16.5C15.3954 16.5 14.5 17.3954 14.5 18.5C14.5 19.6046 15.3954 20.5 16.5 20.5C17.6046 20.5 18.5 19.6046 18.5 18.5C18.5 17.3954 17.6046 16.5 16.5 16.5ZM7.5 10C6.39543 10 5.5 10.8954 5.5 12C5.5 13.1046 6.39543 14 7.5 14C8.60457 14 9.5 13.1046 9.5 12C9.5 10.8954 8.60457 10 7.5 10ZM16.5 3.5C15.3954 3.5 14.5 4.39543 14.5 5.5C14.5 6.60457 15.3954 7.5 16.5 7.5C17.6046 7.5 18.5 6.60457 18.5 5.5C18.5 4.39543 17.6046 3.5 16.5 3.5Z",
              })
            )
          );
        },
        De = (i.a.createElement, i.a.createElement),
        Fe = function (e) {
          var t = e.ariaLabel;
          return De(
            a.c,
            { className: "StopNowIcon", ariaLabel: t },
            De(
              "svg",
              { viewBox: "0 0 24 24" },
              De("path", {
                d: "M12 3C17 3 21 7 21 12 21 17 17 21 12 21 7 21 3 17 3 12 3 7 7 3 12 3ZM4.5 12C4.5 16.1 7.9 19.5 12 19.5 13.6 19.5 15.1 19 16.3 18.1L6.5 6.9C5.3 8.2 4.5 10 4.5 12ZM12 4.5C10.4 4.5 8.9 5 7.7 5.9L17.5 17.1C18.7 15.8 19.5 14 19.5 12 19.5 7.9 16.1 4.5 12 4.5Z",
              })
            )
          );
        },
        _e = (i.a.createElement, i.a.createElement),
        Re = function (e) {
          var t = e.ariaLabel;
          return _e(
            a.c,
            { className: "TopicsIcon", ariaLabel: t },
            _e(
              "svg",
              { viewBox: "0 0 120 120", version: "1.1" },
              _e(
                "g",
                { fill: "none" },
                _e("rect", { x: "0", y: "0", width: "120", height: "120" }),
                _e("path", {
                  d: "M41.1548735,45.3237567 C58.3101011,45.3237567 72.2793579,57.5273265 72.2793579,72.6022645 C72.2793579,79.0628199 69.7107867,85.0109784 65.398415,89.730033 L65.780193,90.6588797 C66.732127,92.8038145 68.5487356,95.6988661 72.2793579,97.1853582 L71.595348,97.3496597 L70.8735952,97.4936964 C70.7396092,97.5177328 70.6000103,97.5412164 70.4566492,97.5632953 L70.0171301,97.6244656 C67.245901,98.0367922 62.5187875,98.1387156 58.1027303,95.470175 C53.1729588,98.2406391 47.4184168,99.8806797 41.1548735,99.8806797 C23.8983169,99.8806797 9.92858887,87.6772025 9.92858887,72.6022645 C9.92858887,57.5273265 23.8983169,45.3237567 41.1548735,45.3237567 Z",
                  id: "Path-Copy",
                  fill: "#D2D7FF",
                  fillRule: "nonzero",
                  transform:
                    "translate(41.103973, 72.602218) scale(-1, 1) translate(-41.103973, -72.602218) ",
                }),
                _e("path", {
                  d: "M73.0667569,20.1899309 C93.435437,20.1899309 110.021362,34.6794273 110.021362,52.5781458 C110.021362,60.248868 106.971656,67.3112131 101.851507,72.9142233 L102.304798,74.017058 C103.435045,76.5637739 105.591934,80.0011157 110.021362,81.7660519 L109.209226,81.9611297 L108.352277,82.1321468 C108.193194,82.1606856 108.027446,82.1885681 107.857231,82.2147827 L107.335383,82.2874112 C104.045057,82.7769733 98.4324786,82.8979886 93.1892222,79.7295871 C87.3360246,83.019004 80.5035635,84.9662508 73.0667569,84.9662508 C52.5777672,84.9662508 35.9912824,70.4768643 35.9912824,52.5781458 C35.9912824,34.6794273 52.5777672,20.1899309 73.0667569,20.1899309 Z",
                  id: "Path",
                  fill: "#8A8FB2",
                  fillRule: "nonzero",
                })
              )
            )
          );
        },
        He = i.a.createElement,
        qe = function (e) {
          var t = e.ariaLabel;
          return He(
            a.c,
            { className: "TrashCanIcon", ariaLabel: t },
            He(
              "svg",
              { viewBox: "0 0 24 24" },
              He("path", {
                d: "M19.4246216,9.01159668 L4.57214355,9.01159668 C4.07823126,9.01159668 3.71916988,9.48073147 3.84818021,9.95749734 L6.69467679,20.4769065 C6.78316294,20.8039127 7.07987346,21.0310059 7.41864014,21.0310059 L16.5803972,21.0310059 C16.91922,21.0310059 17.215965,20.803839 17.3044,20.4767608 L20.1486243,9.95735162 C20.2775224,9.48062022 19.9184713,9.01159668 19.4246216,9.01159668 Z M18.444,10.511 L16.006,19.531 L7.992,19.531 L5.552,10.511 L18.444,10.511 Z",
              }),
              He("path", {
                d: "M20.2266846,6.00195312 C20.6408981,6.00195312 20.9766846,6.33773956 20.9766846,6.75195312 C20.9766846,7.13164889 20.6945307,7.44544409 20.3284551,7.49510651 L20.2266846,7.50195312 L3.77111816,7.50195312 C3.3569046,7.50195312 3.02111816,7.16616669 3.02111816,6.75195312 C3.02111816,6.37225736 3.30327205,6.05846216 3.66934761,6.00879974 L3.77111816,6.00195312 L20.2266846,6.00195312 Z",
              }),
              He("path", {
                d: "M13.9777803,2.99532538 C14.2894121,2.99532538 14.5645881,3.18732797 14.6758826,3.4710676 L14.7067363,3.56890761 L15.3719003,6.31735664 L13.9139884,6.67019219 L13.387,4.495 L10.596,4.495 L9.93685247,6.9469549 L8.4884405,6.55695135 L9.2980137,3.5503236 C9.37638712,3.25925702 9.61970127,3.04712503 9.91097318,3.003578 L10.0222197,2.99532538 L13.9777803,2.99532538 Z",
              }),
              He("path", {
                d: "M12.0249192,12.1673601 C12.4046149,12.1673601 12.7184101,12.449514 12.7680725,12.8155896 L12.7749192,12.9173601 L12.7749192,17.2346076 C12.7749192,17.6488212 12.4391327,17.9846076 12.0249192,17.9846076 C11.6452234,17.9846076 11.3314282,17.7024537 11.2817658,17.3363781 L11.2749192,17.2346076 L11.2749192,12.9173601 C11.2749192,12.5031466 11.6107056,12.1673601 12.0249192,12.1673601 Z",
              }),
              He("path", {
                d: "M8.29496062,12.1929158 C8.66171857,12.0946433 9.03784825,12.2859668 9.1805658,12.6267151 L9.21351928,12.7232459 L10.3703222,17.0404933 C10.4775286,17.4405929 10.2400917,17.8518456 9.83999216,17.959052 C9.47323421,18.0573245 9.09710453,17.8660009 8.95438699,17.5252527 L8.92143351,17.4287219 L7.76463054,13.1114744 C7.65742418,12.7113748 7.89486105,12.3001221 8.29496062,12.1929158 Z",
              }),
              He("path", {
                d: "M14.836319,12.7232459 C14.9435254,12.3231463 15.3547781,12.0857094 15.7548777,12.1929158 C16.1216356,12.2911883 16.3517117,12.6449442 16.3049346,13.0113996 L16.2852078,13.1114744 L15.1284048,17.4287219 C15.0211984,17.8288215 14.6099457,18.0662583 14.2098461,17.959052 C13.8430882,17.8607795 13.6130121,17.5070236 13.6597892,17.1405682 L13.6795161,17.0404933 L14.836319,12.7232459 Z",
              })
            )
          );
        },
        Ue = i.a.createElement,
        Ve = function (e) {
          var t = Object(o.a)({}, e);
          return Ue(
            a.c,
            { className: "TwitterIcon" },
            Ue(
              "svg",
              Object(o.a)({ viewBox: "0 0 24 24" }, t),
              Ue("path", {
                d: "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM14.615 7.725C13.285 7.725 12.205 8.805 12.205 10.135C12.205 10.325 12.225 10.51 12.27 10.685C10.265 10.585 8.49 9.625 7.3 8.165C7.095 8.52 6.975 8.935 6.975 9.375C6.975 10.21 7.4 10.95 8.05 11.38C7.655 11.37 7.285 11.26 6.96 11.08V11.11C6.96 12.28 7.79 13.25 8.895 13.475C8.695 13.53 8.48 13.56 8.26 13.56C8.105 13.56 7.955 13.545 7.805 13.515C8.11 14.475 9 15.17 10.055 15.19C9.23 15.835 8.19 16.22 7.06 16.22C6.865 16.22 6.675 16.21 6.485 16.185C7.54 16.875 8.81 17.275 10.17 17.275C14.605 17.275 17.03 13.6 17.03 10.415C17.03 10.31 17.03 10.205 17.025 10.105C17.495 9.765 17.905 9.34 18.23 8.855C17.8 9.045 17.335 9.175 16.845 9.235C17.345 8.935 17.725 8.465 17.905 7.9C17.44 8.175 16.925 8.375 16.375 8.485C15.935 8.015 15.31 7.725 14.615 7.725Z",
              })
            )
          );
        },
        Ze = i.a.createElement,
        ze = function (e) {
          var t = Object(o.a)({}, e);
          return Ze(
            a.c,
            { className: "UserIcon" },
            Ze(
              "svg",
              Object(o.a)({ viewBox: "0 0 150 148" }, t),
              Ze("path", {
                d: "M72.1090777,98.5834547 L72.33,99 L72.33,135.33 C63.123,121.832538 36.682493,123.584992 32.5469267,123.94781 L32,124 L26.33,84 C60.339272,80.657364 70.5568596,95.8470233 72.1090777,98.5834547 L72.1090777,98.5834547 Z M124.67,84 L119,124 L118.443602,123.94698 C114.277312,123.582336 87.87,121.8428 78.67,135.33 L78.67,99 L78.7678523,98.8072222 C79.812448,96.840024 89.5704,80.5502 124.67,84 Z M78,99.33 L78,135.33 L73,135.33 L73,99.33 L78,99.33 Z M90.54,16.62 C95.9310499,21.4073864 96.3803576,28.3598605 96.2905081,29.8922458 C97.3275946,32.4456044 97.9829705,35.2277293 98.1784348,38.1513546 C100.506601,39.038606 102.2,41.4710601 102.2,44.33 C102.2,47.94 99.53,51.89 96.2,51.89 C96.0905861,51.8873141 95.981608,51.880929 95.8732354,51.870913 C95.3354903,53.2179373 94.7147161,54.5299141 94.0189577,55.788033 L94.0182343,56.0150119 C94.0500877,57.5818012 94.8507993,60.2182897 98.54,63.79 L97.8233755,63.7170516 C96.4202183,63.5628965 93.3220045,63.16442 91.8812227,62.5216222 L91.71,62.44 C89.95,61.54 91.71,66.44 91.71,66.44 L91.4988978,66.4844732 C90.9505742,66.5817377 89.3932961,66.7455471 87.5286065,65.9520279 C87.2978602,67.776839 87.1727133,70.3147204 87.7530818,72.5924789 L90.37,72.5499932 L104.69,72.5499932 C106.778543,72.549134 108.846025,72.9673909 110.77,73.78 C112.591193,74.5410091 114.250641,75.6411706 115.660246,77.0214579 L115.32,77.02 C85.84473,77.02 76.8819484,91.8714308 75.6368778,94.2377263 L75.486,94.536 L75.3227204,94.2039418 C74.1038492,91.8762461 65.4781316,77.6156646 37.4927068,77.0098851 L36.479,76.994 L36.6755151,76.8051662 C38.0360079,75.5268273 39.6156254,74.5018298 41.34,73.78 C43.2636524,72.9663464 45.331348,72.5480461 47.42,72.5499932 L61.74,72.5499932 L63.8530905,72.5869122 C64.638167,69.3807075 64.070364,65.6841815 63.772029,64.1707804 L63.58,64 C59.9858926,60.9225108 57.0583269,56.635372 55.1658548,51.8894012 L55.14,51.89 C53.9789366,51.8608204 52.867453,51.4133862 52.01,50.63 C50.2338648,49.0132914 49.2089037,46.7315761 49.18,44.33 C49.18,42.1289328 50.1725753,40.1806563 51.7021357,38.9951595 C48.4918124,36.8692908 45.87,32.62 45.87,32.62 L46.75,32.13432 C48.87,30.9388 53.87,27.95 50.87,27.95 C47.12,27.95 45.12,22.95 45.12,22.95 C47.9134053,23.4607521 50.7949737,22.830409 53.12,21.2 C55.94,19.27 56.46,15.12 60.62,14.45 C64.79,13.79 63.58,16.02 67.87,15.32 C72.03,14.6412121 71.5918733,13.4264463 74.5796174,12.6878204 L74.87,12.62 C82.21,10.95 86.04,12.62 90.54,16.62 Z",
              })
            )
          );
        },
        We = i.a.createElement,
        Ge = function (e) {
          var t = e.ariaLabel;
          return We(
            a.c,
            { className: "XCircleIcon", ariaLabel: t },
            We(
              "svg",
              { viewBox: "0 0 24 24" },
              We("path", {
                d: "M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,3.5 C7.30557963,3.5 3.5,7.30557963 3.5,12 C3.5,16.6944204 7.30557963,20.5 12,20.5 C16.6944204,20.5 20.5,16.6944204 20.5,12 C20.5,7.30557963 16.6944204,3.5 12,3.5 Z M8.94621165,7.89705176 L9.03033009,7.96966991 L12,10.939 L14.9696699,7.96966991 C15.2625631,7.6767767 15.7374369,7.6767767 16.0303301,7.96966991 C16.2965966,8.23593648 16.3208027,8.65260016 16.1029482,8.94621165 L16.0303301,9.03033009 L13.061,12 L16.0303301,14.9696699 C16.3232233,15.2625631 16.3232233,15.7374369 16.0303301,16.0303301 C15.7640635,16.2965966 15.3473998,16.3208027 15.0537883,16.1029482 L14.9696699,16.0303301 L12,13.061 L9.03033009,16.0303301 C8.73743687,16.3232233 8.26256313,16.3232233 7.96966991,16.0303301 C7.70340335,15.7640635 7.6791973,15.3473998 7.89705176,15.0537883 L7.96966991,14.9696699 L10.939,12 L7.96966991,9.03033009 C7.6767767,8.73743687 7.6767767,8.26256313 7.96966991,7.96966991 C8.23593648,7.70340335 8.65260016,7.6791973 8.94621165,7.89705176 Z",
              })
            )
          );
        };
    },
    R3xS: function (e, t, n) {},
    RIio: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var a = n("cpVT"),
        r = n("q1tI"),
        i = n.n(r),
        o = (n("zv3c"), n("zAUr")),
        c = n("+5ea"),
        u = n("50TJ"),
        s = n("8y1Z"),
        d = n("hB2y"),
        l = i.a.createElement,
        f = function (e) {
          var t = e.hasSiteHeaderBanner,
            n = e.user,
            r = "HeaderPrimaryNav";
          return l(
            "nav",
            {
              className: r,
              "aria-label": "Primary Navigation",
              role: "navigation",
            },
            l(
              "ul",
              { className: Object(c.d)(r, "list") },
              l("li", null, l(u.a, { href: "/", refTag: s.a.Home }, "Home")),
              l(
                "li",
                null,
                l(
                  u.a,
                  { href: "/review/list", refTag: s.a.MyBooks },
                  "My Books"
                )
              ),
              l(
                "li",
                { className: Object(c.d)(r, "dropDown") },
                l(
                  u.a,
                  { href: "#", "aria-haspopup": "true", refTag: s.a.NavBrowse },
                  "Browse \u25be"
                ),
                l(
                  u.c,
                  { addRefTag: s.a.NavBrowse },
                  l(
                    "div",
                    {
                      className: Object(o.a)([
                        Object(c.d)("HeaderNavDropdown"),
                        Object(c.d)("HeaderNavDropdown", "", "browse"),
                        Object(a.a)(
                          {},
                          Object(c.d)(
                            "HeaderNavDropdown",
                            "",
                            "siteHeaderBanner"
                          ),
                          t
                        ),
                      ]),
                    },
                    l(
                      "ul",
                      null,
                      l(
                        "li",
                        null,
                        l(
                          u.a,
                          {
                            refTag: s.a.Recommendations,
                            href: "/recommendations",
                          },
                          "Recommendations"
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          u.a,
                          { refTag: s.a.GCA, href: "/choiceawards" },
                          "Choice Awards"
                        )
                      ),
                      l(
                        "li",
                        { className: Object(c.d)(r, "genres") },
                        l(
                          u.a,
                          { refTag: s.a.Genres, href: "/genres" },
                          "Genres"
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          u.a,
                          { refTag: s.a.Giveaways, href: "/giveaway" },
                          "Giveaways"
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          u.a,
                          { refTag: s.a.NewReleases, href: "/new_releases" },
                          "New Releases"
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(u.a, { refTag: s.a.Lists, href: "/list" }, "Lists")
                      ),
                      l(
                        "li",
                        null,
                        l(
                          u.a,
                          { refTag: s.a.Explore, href: "/book" },
                          "Explore"
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          u.a,
                          { refTag: s.a.News, href: "/news" },
                          "News & Interviews"
                        )
                      )
                    ),
                    n ? l(d.Spotlight, { user: n }) : l(d.SpotlightBasic, null)
                  )
                )
              ),
              l(
                "li",
                { className: Object(c.d)(r, "dropDown") },
                l(
                  u.a,
                  { href: "#", "aria-haspopup": "true", refTag: s.a.Community },
                  "Community \u25be"
                ),
                l(
                  u.c,
                  { addRefTag: s.a.Community },
                  l(
                    "div",
                    {
                      className: Object(o.a)([
                        Object(c.d)("HeaderNavDropdown"),
                      ]),
                    },
                    l(
                      "ul",
                      null,
                      l(
                        "li",
                        null,
                        l(u.a, { refTag: s.a.Groups, href: "/group" }, "Groups")
                      ),
                      !!n &&
                        l(
                          "li",
                          null,
                          l(
                            u.a,
                            { refTag: s.a.Discussion, href: "/topic" },
                            "Discussions"
                          )
                        ),
                      l(
                        "li",
                        null,
                        l(
                          u.a,
                          { refTag: s.a.Quotes, href: "/quotes" },
                          "Quotes"
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          u.a,
                          { refTag: s.a.AskTheAuthor, href: "/ask_the_author" },
                          "Ask the Author"
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          u.a,
                          { refTag: s.a.People, href: "/user/best_reviewers" },
                          "People"
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
    },
    RjQK: function (e, t, n) {},
    S8mZ: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return g;
      }),
        n.d(t, "a", function () {
          return a;
        });
      var a,
        r = n("cpVT"),
        i = n("q1tI"),
        o = n.n(i),
        c = n("zAUr"),
        u = n("+5ea"),
        s = (n("wXDD"), n("6jlT")),
        d = n.n(s),
        l = n("sELm"),
        f = o.a.createElement;
      !(function (e) {
        (e.Xsmall = "xsmall"), (e.Small = "small"), (e.Medium = "medium");
      })(a || (a = {}));
      var v = function (e, t, n, a, r) {
          return function () {
            r && r(e), n(t === e ? 0 : e), a(-1);
          };
        },
        m = function (e, t, n) {
          return function () {
            t(e), n(e - 1);
          };
        },
        b = function (e, t, n) {
          return function () {
            t(e), n(-1);
          };
        },
        g = function (e) {
          var t = e.id,
            n = e.rating,
            o = void 0 === n ? 0 : n,
            s = e.size,
            g = void 0 === s ? a.Small : s,
            p = e.selectable,
            C = void 0 !== p && p,
            h = e.onClick,
            L = Object(i.useState)(
              Array(5)
                .fill(null)
                .map(function () {
                  return d()();
                })
            )[0],
            O = Object(i.useState)(o),
            y = O[0],
            k = O[1];
          Object(i.useEffect)(
            function () {
              k(o);
            },
            [o]
          );
          var w = Object(i.useState)(-1),
            j = w[0],
            S = w[1],
            T = Object(c.a)([
              ["RatingStars", Object(u.d)("RatingStars", g)],
              Object(r.a)(
                {},
                Object(u.d)("RatingStars", void 0, "selectable"),
                C
              ),
            ]);
          return f(
            "span",
            {
              "aria-label": "Rating ".concat(o, " out of ").concat(5),
              role: C ? "group" : "img",
              className: Object(c.a)(T),
            },
            L.map(function (e, n) {
              return f(l.a, {
                key: e,
                id: t,
                rating: y - n,
                selectable: C,
                hovered: C && j >= n,
                size: g,
                ariaLabel: "Rate ".concat(n + 1, " out of ").concat(5),
                onClick: C ? v(n + 1, o, k, S, h) : void 0,
                onMouseEnter: C ? m(n + 1, k, S) : void 0,
                onMouseLeave: C ? b(o, k, S) : void 0,
              });
            })
          );
        };
    },
    SAVZ: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = {};
      n.r(a),
        n.d(a, "Live", function () {
          return d;
        }),
        n.d(a, "Generic", function () {
          return l;
        });
      var r,
        i = n("q1tI"),
        o = n("zAUr"),
        c = (n("WyRx"), n("+5ea")),
        u = n("5bkh"),
        s = i.createElement;
      !(function (e) {
        (e.Live = "live"), (e.Generic = "generic");
      })(r || (r = {}));
      var d = function () {
          return s(
            "div",
            { className: Object(o.a)(["Label", Object(c.d)("Label", r.Live)]) },
            s(
              u.i,
              {
                color: u.j.BodyStandard,
                preset: u.k.Body3,
                fontOptions: { weight: u.b.Semibold },
              },
              "LIVE"
            )
          );
        },
        l = function (e) {
          var t = e.children;
          return s(
            "div",
            {
              className: Object(o.a)([
                "Label",
                Object(c.d)("Label", r.Generic),
              ]),
            },
            s(
              u.i,
              {
                color: u.j.BodyStandard,
                preset: u.k.Body3,
                fontOptions: { weight: u.b.Semibold },
              },
              t
            )
          );
        };
    },
    SmhE: function (e, t, n) {},
    T10n: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "reportMetricValue", function () {
          return s;
        }),
        n.d(t, "reportCountFromServer", function () {
          return d;
        }),
        n.d(t, "reportServerResponseMetrics", function () {
          return l;
        }),
        n.d(t, "reportSSRError", function () {
          return f;
        }),
        n.d(t, "reportPageCacheCount", function () {
          return v;
        });
      var a = n("1JQt"),
        r = n("Sp1i"),
        i = n("4u2Z"),
        o = new r.CloudWatch({ apiVersion: "2010-08-01", region: "us-east-1" }),
        c = function (e) {
          var t = {
            MetricData: e,
            Namespace: "".concat("Sirius").concat(Object(i.a)().shortName),
          };
          o.putMetricData(t, function (t, n) {
            var r;
            t &&
              ((r =
                1 === e.length
                  ? "Could not publish "
                      .concat(
                        e[0].MetricName,
                        " value to CloudWatch, with dimensions "
                      )
                      .concat(JSON.stringify(e[0].Dimensions), " - ")
                      .concat(t.message)
                  : "Could not publish values for "
                      .concat(e.length, " metrics to CloudWatch - ")
                      .concat(t.message)),
              a.a.error(r));
          });
        },
        u = n("DFlP"),
        s = function (e, t, n, a) {
          c([{ MetricName: e, Dimensions: t, Unit: n, Value: a }]);
        },
        d = function (e, t) {},
        l = function (e, t, n) {
          var r = t >= 400 && t < 500,
            i = t >= 500 && t < 600;
          (r || i) &&
            a.a.error("Server responded with ".concat(t, " for ").concat(e));
        },
        f = function (e, t) {
          t &&
            a.a.error(
              "reportSSRError: path: "
                .concat(e, ", error: ")
                .concat(t.message, ", stack: ")
                .concat(t.stack)
            );
          var n = [Object(u.a)(e)];
          d("SSRErrors", n, t ? 1 : 0);
        },
        v = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = [Object(u.a)(e)],
            a = t ? 1 : 0;
          d("PageCacheHit", n, a);
        };
    },
    TPNx: function (e, t, n) {},
    USB4: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "e", function () {
          return f;
        }),
        n.d(t, "c", function () {
          return v;
        }),
        n.d(t, "b", function () {
          return m;
        }),
        n.d(t, "d", function () {
          return b.a;
        });
      var a,
        r = n("xvhg"),
        i = n("cpVT"),
        o = n("q1tI"),
        c = n.n(o);
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                Object(i.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      !(function (e) {
        (e.SetTreatment = "SET_TREATMENT"),
          (e.SetLoading = "SET_LOADING"),
          (e.SetLoadingData = "SET_LOADING_DATA");
      })(a || (a = {}));
      var d = { treatments: new Map(), isLoading: !0 },
        l = function (e, t) {
          if ([void 0, null].includes(t) || null === t.type) return e;
          switch (t.type) {
            case a.SetTreatment:
              var n = e.treatments.set(t.weblabId, t.assignment);
              return s(s({}, e), {}, { treatments: n, isLoading: t.isLoading });
            case a.SetLoading:
              return s(s({}, e), {}, { isLoading: t.isLoading });
            default:
              return e;
          }
        },
        f = function () {
          var e = c.a.useReducer(l, d),
            t = Object(r.a)(e, 2);
          return { state: t[0], dispatch: t[1] };
        },
        v = c.a.createContext({ state: d, dispatch: function () {} }),
        m = v.Consumer,
        b = n("mTp0");
    },
    VqDV: function (e, t, n) {
      "use strict";
      n("Pr9M"), n("Y1lN");
    },
    WXyG: function (e, t, n) {},
    WyRx: function (e, t, n) {},
    X4Mv: function (e, t, n) {},
    XNzd: function (e, t, n) {},
    XUBu: function (e, t, n) {},
    XoTv: function (e, t, n) {
      "use strict";
      var a,
        r = n("vJKn"),
        i = n.n(r),
        o = n("rg98"),
        c = n("FLf1"),
        u = n.n(c),
        s = n("FGiv"),
        d = n.n(s),
        l = n("WAH4"),
        f = n.n(l),
        v = n("Prh1"),
        m = n("1JQt"),
        b = n("MEx9"),
        g = n("p823"),
        p = f()({
          cache: !0,
          cacheMaxAge: d()("7 days"),
          jwksUri: Object(b.h)(a).oidcJwtKeySetUrl,
        }),
        C = function (e, t) {
          p.getSigningKey(e.kid)
            .then(function (e) {
              if ("undefined" !== typeof e && "rsaPublicKey" in e) {
                var n = e.rsaPublicKey;
                t(null, n);
              }
            })
            .catch(function (e) {
              m.a.error("Error getting key - ".concat(e));
            });
        },
        h = (function () {
          var e = Object(o.a)(
            i.a.mark(function e(t) {
              return i.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ("undefined" !== typeof t) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", {});
                    case 2:
                      return e.abrupt(
                        "return",
                        y
                          .verifyJwt(t)
                          .then(function (e) {
                            return {
                              customerId: e.sub
                                .toString()
                                .replace("kca://profile:goodreads/", ""),
                              legacyCustomerId: e.user_id,
                              role: e.role || g.b.User,
                            };
                          })
                          .catch(function (e) {
                            return (
                              m.a.error("Error verifying token - ".concat(e)),
                              {}
                            );
                          })
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        L = (function () {
          var e = Object(o.a)(
            i.a.mark(function e(t) {
              return i.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ("undefined" !== typeof t) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 2:
                      return e.abrupt(
                        "return",
                        y
                          .verifyJwt(t)
                          .then(function () {
                            return !0;
                          })
                          .catch(function (e) {
                            return (
                              m.a.error("Error verifying token - ".concat(e)),
                              !1
                            );
                          })
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        O = (function () {
          var e = Object(o.a)(
            i.a.mark(function e(t) {
              var n;
              return i.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = v.a.get(b.d, t)),
                        (a = v.a.get(b.c, t)),
                        e.abrupt("return", h(n))
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        y = {
          parseJwt: h,
          parseJwtFromCookie: O,
          verifyJwt: function (e) {
            return new Promise(function (t, n) {
              u.a.verify(
                e,
                C,
                { algorithms: ["RS256"], issuer: Object(b.h)(a).oidcIssuer },
                function (e, a) {
                  e ? n(e) : t(a);
                }
              );
            });
          },
          isJwtValid: L,
        };
      t.a = y;
    },
    "Y0/f": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return w;
      });
      var a = n("z7pX"),
        r = n("H+61"),
        i = n("UlJF"),
        o = n("7LId"),
        c = n("VIvw"),
        u = n("iHvq"),
        s = n("q1tI"),
        d = n.n(s),
        l = function (e, t) {
          return t.includes(e);
        },
        f = d.a.createContext({ openIds: [], toggleId: function (e) {} }),
        v = n("+5ea"),
        m = d.a.createElement,
        b = d.a.createContext({ id: "" }),
        g = n("/iJQ"),
        p = n("Qu/W"),
        C = n("pQ8y"),
        h = d.a.createElement,
        L = d.a.createElement,
        O = (n("IivK"), d.a.createElement);
      function y(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
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
        })();
        return function () {
          var n,
            a = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(c.a)(this, n);
        };
      }
      var k = (function (e) {
          Object(o.a)(n, e);
          var t = y(n);
          function n(e) {
            var i;
            Object(r.a)(this, n);
            var o = (i = t.call(this, e)).props,
              c = o.openIds,
              u = void 0 === c ? [] : c,
              s = o.stayOpen,
              d = void 0 !== s && s;
            return (
              (i.state = {
                openIds: u,
                toggleId: function (e) {
                  i.setState(function (t) {
                    var n = t.openIds;
                    return n && n.includes(e)
                      ? {
                          openIds: n.filter(function (t) {
                            return t !== e;
                          }),
                        }
                      : n && d
                      ? { openIds: [].concat(Object(a.a)(n), [e]) }
                      : { openIds: [e] };
                  });
                },
              }),
              i
            );
          }
          return (
            Object(i.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props.children;
                  return O(
                    f.Provider,
                    { value: this.state },
                    O("div", { className: w, "aria-label": "Accordion" }, e)
                  );
                },
              },
            ]),
            n
          );
        })(d.a.Component),
        w =
          (Object.assign(k, {
            Body: function (e) {
              var t = e.children,
                n = d.a.useContext(f).openIds,
                a = d.a.useContext(b).id,
                r = l(a, n),
                i = Object(v.d)(w, "body");
              return L(
                C.a,
                { in: r, mountOnEnter: !0, timeout: 200, classNames: i },
                L("div", { id: "content-".concat(a), className: i }, t)
              );
            },
            Header: function (e) {
              var t = e.children,
                n = Object(s.useContext)(f),
                a = n.toggleId,
                r = n.openIds,
                i = Object(s.useContext)(b).id,
                o = l(i, r),
                c = Object(v.d)(w, "caret");
              return h(
                g.a,
                {
                  "aria-controls": "content-".concat(i),
                  "aria-expanded": o,
                  id: "accordion-control-".concat(i),
                  onClick: function () {
                    return a(i);
                  },
                  className: Object(v.d)(w, "header"),
                  role: "button",
                },
                h("div", { className: Object(v.d)(w, "headerText") }, t || i),
                h(
                  C.a,
                  { in: o, timeout: 200, classNames: c },
                  h("div", { className: c }, h(p.f, { direction: p.m.Down }))
                )
              );
            },
            Item: function (e) {
              var t = e.id,
                n = e.children,
                a = d.a.useMemo(
                  function () {
                    return { id: t };
                  },
                  [t]
                );
              return m(
                b.Provider,
                { value: a },
                m("div", { className: Object(v.d)(w, "item") }, n)
              );
            },
          }),
          "Accordion");
    },
    Y1lN: function (e, t, n) {
      "use strict";
      var a = n("8k6o");
      n.d(t, "SiteStrip", function () {
        return a.a;
      });
      n("lLyO");
    },
    YbyH: function (e, t, n) {
      "use strict";
      n("Io6b");
    },
    Yqt1: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "ContentType", function () {
          return a;
        }),
        n.d(t, "CSAAttribute", function () {
          return r;
        }),
        n.d(t, "registerCSAElement", function () {
          return c;
        });
      var a,
        r,
        i = n("xvhg"),
        o = n("dEn3");
      !(function (e) {
        (e.Button = "button"),
          (e.Card = "card"),
          (e.Element = "element"),
          (e.Link = "link"),
          (e.Popup = "popup"),
          (e.Widget = "widget");
      })(a || (a = {})),
        (function (e) {
          (e.Ad = "data-csa-c-ad"),
            (e.LineItemId = "data-csa-c-l_id"),
            (e.CampaignId = "data-csa-c-c_id"),
            (e.ContentId = "data-csa-c-content-id"),
            (e.SessionId = "data-csa-c-s_id"),
            (e.SlotId = "data-csa-c-slot-id"),
            (e.RequestId = "data-csa-c-r_id"),
            (e.Type = "data-csa-c-type");
        })(r || (r = {}));
      var c = function (e, t) {
        var n = window.csa;
        if (n) {
          var a = o.a.getValidSessionId();
          e.setAttribute(r.SessionId, a),
            Object.entries(t).forEach(function (t) {
              var n = Object(i.a)(t, 2),
                a = n[0],
                r = n[1];
              e.setAttribute(a, r);
            }),
            n("Content", { element: e });
        }
      };
    },
    ZVkq: function (e, t, n) {},
    aZfW: function (e, t, n) {},
    abm3: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var a = n("q1tI"),
        r = n.n(a),
        i = (n("cEXk"), n("jLmM"), n("+5ea")),
        o = n("8y1Z"),
        c = n("/iJQ"),
        u = n("50TJ"),
        s = r.a.createElement,
        d = function (e) {
          var t,
            n = e.user;
          if (
            null === (t = n.favoriteGenres) || void 0 === t
              ? void 0
              : t.totalCount
          ) {
            var a = n.favoriteGenres.edges.slice(0, 8);
            return s(
              "div",
              { className: Object(i.d)("Spotlight") },
              s(
                "span",
                { className: Object(i.d)("Spotlight", "listTitle") },
                "Favorite Genres"
              ),
              s(
                "ul",
                null,
                a.map(function (e) {
                  var t, n, a;
                  return s(
                    "li",
                    {
                      key:
                        null === (t = e.node) || void 0 === t ? void 0 : t.name,
                    },
                    s(
                      "a",
                      {
                        href:
                          null === (n = e.node) || void 0 === n
                            ? void 0
                            : n.webUrl,
                        tabIndex: 0,
                      },
                      null === (a = e.node) || void 0 === a ? void 0 : a.name
                    )
                  );
                }),
                s(
                  "li",
                  null,
                  s(u.a, { href: "/genres", refTag: o.a.Genres }, "All Genres")
                )
              )
            );
          }
          return s(
            "div",
            { className: Object(i.d)("SpotlightPane") },
            s(
              "div",
              { className: Object(i.d)("SpotlightPane", "title") },
              "What do you like to read?"
            ),
            s(
              "div",
              { className: Object(i.d)("SpotlightPane", "description") },
              "Choose your favorite genres to get",
              s("br", null),
              "personalized book recommendations."
            ),
            s(
              c.b,
              { href: "/user/edit_fav_genres", size: c.c.Medium },
              "Choose Favorite Genres"
            ),
            s(
              "a",
              {
                className: Object(i.d)("SpotlightPane", "browseGenres"),
                href: "/genres",
              },
              "Browse Genres"
            )
          );
        };
    },
    aq4S: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var a = n("cpVT"),
        r = n("q1tI"),
        i = n("zAUr"),
        o = n("+5ea"),
        c = (n("MOX4"), r.createElement),
        u = function (e) {
          var t = e.fixedAspectRatio,
            n = e.children;
          return c(
            "div",
            {
              className: Object(i.a)([
                Object(o.d)("BookCover"),
                Object(a.a)(
                  {},
                  Object(o.d)("BookCover", "fixedAspectRatio"),
                  t
                ),
              ]),
            },
            c("div", { className: Object(o.d)("BookCover", "image") }, n)
          );
        };
    },
    b7DO: function (e, t, n) {},
    bDKf: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return d;
      }),
        n.d(t, "b", function () {
          return v;
        }),
        n.d(t, "a", function () {
          return k;
        });
      var a = n("xvhg"),
        r = n("dhJC"),
        i = n("K4CH"),
        o = n.n(i),
        c = n("1JQt"),
        u = { Android: "and", Desktop: "desktop", iOS: "iOS", Mobile: "mw" },
        s = function (e) {
          var t = e.signedIn,
            n = window.googletag;
          n.pubads().setTargeting("signedin", t.toString()),
            n.pubads().setTargeting(
              "surface",
              (function () {
                var e,
                  t,
                  n = new o.a(),
                  a =
                    null === (e = n.getOS()) || void 0 === e ? void 0 : e.name;
                return u[a]
                  ? u[a]
                  : "mobile" ===
                    (null === (t = n.getDevice()) || void 0 === t
                      ? void 0
                      : t.type)
                  ? u.Mobile
                  : u.Desktop;
              })()
            );
        },
        d = function (e, t, n) {
          var i,
            o,
            c = window,
            u = c.googletag,
            d = c.apstag,
            l =
              null !==
                (i =
                  null === (o = e.behavioral) || void 0 === o
                    ? void 0
                    : o.userTargetingSettings) && void 0 !== i
                ? i
                : {},
            f = (null === t || void 0 === t ? void 0 : t.signedIn)
              ? !1 ===
                (null === l || void 0 === l
                  ? void 0
                  : l.allowBehavioralTargeting)
              : !1 === n;
          null === u ||
            void 0 === u ||
            u.cmd.push(function () {
              s(t),
                e.behavioral &&
                  (!(function (e) {
                    var t = window.googletag,
                      n =
                        (e.userTargetingSettings,
                        e.__typename,
                        Object(r.a)(e, [
                          "userTargetingSettings",
                          "__typename",
                        ]));
                    Object.entries(n).forEach(function (e) {
                      var n = Object(a.a)(e, 2),
                        r = n[0],
                        i = n[1];
                      i && t.pubads().setTargeting(r, i);
                    });
                  })(e.behavioral),
                  u.pubads().setPrivacySettings({ restrictDataProcessing: f })),
                e.contextual &&
                  (function (e) {
                    e.__typename;
                    var t = Object(r.a)(e, ["__typename"]),
                      n = window.googletag;
                    Object.entries(t).forEach(function (e) {
                      var t = Object(a.a)(e, 2),
                        r = t[0],
                        i = t[1];
                      return n.pubads().setTargeting(r, i.toString());
                    });
                  })(e.contextual),
                u.pubads().collapseEmptyDivs(!0),
                u
                  .pubads()
                  .enableLazyLoad({
                    fetchMarginPercent: 75,
                    renderMarginPercent: 75,
                    mobileScaling: 1.75,
                  }),
                u.enableServices();
            });
          var v = f ? "1YY" : "1YN";
          return (
            null === d ||
              void 0 === d ||
              d.init({
                pubID: "3211",
                adServer: "googletag",
                params: { aps_privacy: v },
                bidTimeout: 4e3,
                simplerGPT: !0,
                deals: !0,
              }),
            !0
          );
        },
        l = n("eF7b"),
        f = { resourceType: void 0, resourceId: void 0 },
        v = function (e) {
          switch (null === e || void 0 === e ? void 0 : e.pathname) {
            case "/":
            case "/explore":
            case "/about/us":
            case "/book/popular_by_date":
            case "/book/popular_by_date/[year]":
            case "/book/popular_by_date/[year]/[month]":
            case "/giveaway":
            case "/giveaway/genre/[genre]":
            case "/list":
            case "/search/[term]":
            case "/settings/notifications":
            case "/shelf/show/[tag]":
              return f;
            case "/book/show/[book_id]":
            case "/book/show/[book_id]/reviews":
              return {
                resourceType: "book",
                resourceId: Object(l.a)(e.query.book_id),
              };
            case "/giveaway/show/[giveaway_id]":
              return {
                resourceType: "giveaway",
                resourceId: e.query.giveaway_id,
              };
            case "/sirius/admin/native_ads/[native_id]":
            case "/sirius/admin/settings/notifications/[user_id]":
              return f;
            default:
              return (
                c.a.error(
                  "routing.tsx: Path does not have a contextual targeting mapping!"
                ),
                f
              );
          }
        },
        m = n("q1tI"),
        b = n.n(m),
        g = n("5x8S"),
        p = n("FhZt"),
        C = n("pv95"),
        h = n("BQ5h"),
        L = n("p7qx"),
        O = n("LbDr"),
        y = b.a.createElement,
        k = function (e) {
          var t = e.children,
            n = Object(g.a)(),
            a = n.logAction,
            r = n.state,
            i = Object(m.useRef)(r);
          Object(m.useEffect)(
            function () {
              var e;
              (e = r), (i.current = e);
            },
            [r]
          );
          return (
            Object(m.useEffect)(function () {
              var e = window.googletag;
              null === e ||
                void 0 === e ||
                e.cmd.push(function () {
                  e.pubads().addEventListener("slotRenderEnded", function (e) {
                    return (function (e) {
                      var t = Object(h.a)(e),
                        n = e.slot,
                        r = Object(L.a)(t),
                        o = r.baseMetricDimensions,
                        u = r.additionalMetricDimensions,
                        s = n.getSlotElementId();
                      if (e.isEmpty) {
                        var d = p.b.PopUp;
                        a(p.a.DfpImpressionEmpty, { hitType: d }, i.current),
                          c.a.debug(
                            "Ad Slot (".concat(
                              n.getSlotElementId(),
                              ") is empty."
                            )
                          ),
                          Object(L.c)("AdImpressionEmpty"),
                          C.a.reportCount("AdImpressionEmpty", o, 1);
                      } else {
                        var l,
                          f =
                            null ===
                              (l = document.querySelector("#".concat(s))) ||
                            void 0 === l
                              ? void 0
                              : l.querySelector(
                                  'iframe[id^="google_ads_iframe_"]'
                                );
                        if (void 0 === f || null === f)
                          c.a.error(
                            "Ad Slot (".concat(s, ") element not found.")
                          ),
                            Object(L.c)("AdNotFoundError"),
                            C.a.reportCount("AdNotFoundError", u, 1);
                        else {
                          var v = document.querySelector("#".concat(s)),
                            m =
                              f.contentWindow.document.body.querySelector(
                                "#google_image_div"
                              );
                          v.className.includes(O.a) ||
                            Object(L.b)(f, a, t, i.current, u, m);
                        }
                      }
                    })(e);
                  });
                });
            }, []),
            y(b.a.Fragment, null, t)
          );
        };
    },
    bDcc: function (e, t, n) {},
    bOiA: function (e, t, n) {},
    bmXc: function (e, t, n) {
      "use strict";
      var a = n("IqYj");
      n.d(t, "a", function () {
        return a.a;
      });
    },
    bwyV: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n("nOHt"),
        r = n.n(a),
        i = n("4u2Z"),
        o = n("eF7b"),
        c = n("FhZt"),
        u = function (e, t) {
          switch (e) {
            case "/":
              return {
                pageType: c.e.Home,
                subPageType: t ? c.g.Explore : c.g.ExploreSout,
              };
            case "/book/popular_by_date":
              return { pageType: c.e.Book, subPageType: c.g.PopularByDate };
            case "/book/popular_by_date/[year]":
              return {
                pageType: c.e.Book,
                subPageType: c.g.PopularByDate,
                pageTypeId: r.a.query.year,
              };
            case "/book/popular_by_date/[year]/[month]":
              return {
                pageType: c.e.Book,
                subPageType: c.g.PopularByDate,
                pageTypeId: r.a.query.month,
              };
            case "/book/show/[book_id]":
            case "/book/show/[book_id]/reviews":
              return {
                pageType: c.e.Book,
                subPageType: c.g.Show,
                pageTypeId: Object(o.a)(r.a.query.book_id),
              };
            case "/explore":
              return {
                pageType: c.e.Home,
                subPageType: t ? c.g.Explore : c.g.ExploreSout,
              };
            case "/giveaway":
              return { pageType: c.e.Giveaway, subPageType: c.g.Home };
            case "/giveaway/show/[giveaway_id]":
              return {
                pageType: c.e.Giveaway,
                subPageType: c.g.Show,
                pageTypeId: r.a.query.giveaway_id,
              };
            case "/giveaway/genre/[genre]":
              return {
                pageType: c.e.Giveaway,
                subPageType: c.g.Genre,
                pageTypeId: r.a.query.genre,
              };
            case "/list":
              return { pageType: c.e.List, subPageType: c.g.Home };
            case "/settings/notifications":
              return { pageType: c.e.Settings, subPageType: c.g.Notifications };
            case "/shelf/show/[tag]":
              return {
                pageType: c.e.Shelf,
                subPageType: c.g.Show,
                pageTypeId: r.a.query.tag,
              };
            case "/sirius/admin/native_ads/[native_id]":
              return {
                pageType: c.e.Admin,
                subPageType: c.g.NativeAds,
                pageTypeId: r.a.query.native_id,
              };
            case "/sirius/admin/settings/notifications/[user_id]":
              return { pageType: c.e.Admin, subPageType: c.g.Notifications };
            case "/sirius_beta/weblab_dryrun":
              return { pageType: c.e.Beta, subPageType: c.g.WeblabDryrun };
            default:
              return (function () {
                if (Object(i.d)())
                  return { pageType: c.e.Blank, subPageType: c.g.Blank };
                throw new Error("Path does not have a page type mapping!");
              })();
          }
        },
        s = {
          getCurrentPageTypeData: function (e) {
            var t = r.a.pathname;
            return u(t, e);
          },
        };
    },
    cEXk: function (e, t, n) {},
    cha2: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "reportWebVitals", function () {
          return f;
        });
      var a = n("bDKf"),
        r = n("q1tI"),
        i = n.n(r),
        o = (n("ME/x"), n("4RhV")),
        c = n("USB4"),
        u = n("wzmU"),
        s = i.a.createElement,
        d = function (e) {
          var t = Object(u.h)(),
            n = Object(c.e)(),
            r = e.Component,
            i = e.pageProps;
          return s(
            u.d.Provider,
            { value: t },
            s(c.c.Provider, { value: n }, s(o.c, null, s(a.a, null, s(r, i))))
          );
        },
        l = n("7+Ly"),
        f = function (e) {
          l.f.publishWebVitals(e);
        };
      t.default = d;
    },
    cqii: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return O;
      }),
        n.d(t, "f", function () {
          return y;
        }),
        n.d(t, "d", function () {
          return j;
        }),
        n.d(t, "g", function () {
          return T;
        }),
        n.d(t, "b", function () {
          return A;
        }),
        n.d(t, "a", function () {
          return P;
        }),
        n.d(t, "c", function () {
          return a;
        });
      var a,
        r = n("q1tI"),
        i = n("5bkh"),
        o = n("HALo"),
        c = n("cpVT"),
        u = n("xvhg"),
        s = n("i8i4"),
        d = n("zAUr"),
        l = n("/kEZ"),
        f = n.n(l),
        v = n("+5ea"),
        m = n("huxJ"),
        b = n("/iJQ"),
        g = n("e8C3"),
        p = n("Qu/W"),
        C = n("5vdI"),
        h = (n("rSHa"), r.createElement),
        L = function (e, t) {
          e && e.onClick && e.onClick(), (e && e.preventClose) || t();
        };
      !(function (e) {
        (e[(e.bottomLeft = 0)] = "bottomLeft"),
          (e[(e.bottomRight = 1)] = "bottomRight"),
          (e[(e.rightAbove = 2)] = "rightAbove"),
          (e[(e.rightBelow = 3)] = "rightBelow");
      })(a || (a = {}));
      var O,
        y,
        k = function (e) {
          var t,
            n,
            l,
            O = e.role,
            y = e.open,
            k = e.setOpen,
            w = e.desktopHeader,
            j = e.mobileHeader,
            S = e.primaryAction,
            T = e.cancelAction,
            I = e.alert,
            E = void 0 !== I && I,
            N = e.showCloseButton,
            x = void 0 === N || N,
            A = e.closeOnClickOutside,
            P = void 0 !== A && A,
            M = e.onOpen,
            B = e.onClose,
            D = e.children,
            F = e.anchorRef,
            _ = e.expandFrom,
            R = void 0 === _ ? a.bottomRight : _,
            H = e.enableTabbingContent,
            q = Object(m.b)({ moreThan: v.c.Medium }),
            U = r.useState(!0),
            V = Object(u.a)(U, 2),
            Z = V[0],
            z = V[1],
            W = r.useState(!1),
            G = Object(u.a)(W, 2),
            J = G[0],
            Q = G[1],
            X = { top: 0, left: 0 },
            K = r.useState(X),
            Y = Object(u.a)(K, 2),
            $ = Y[0],
            ee = Y[1],
            te = r.useRef(null);
          r.useEffect(
            function () {
              y &&
                (M && M(),
                setTimeout(function () {
                  ee(
                    (function () {
                      var e = null === F || void 0 === F ? void 0 : F.current;
                      if (!e || window.innerWidth < v.b[v.c.Medium]) return X;
                      var t = (function (e) {
                          return {
                            width: e.getBoundingClientRect().width,
                            height: e.getBoundingClientRect().height,
                            offsetTop: e.offsetTop,
                            offsetLeft: e.offsetLeft,
                          };
                        })(e),
                        n = 0;
                      switch (R) {
                        case a.rightAbove:
                          if (null !== te.current) {
                            var r = te.current.getBoundingClientRect().top;
                            r < 100 &&
                              (n =
                                window.innerWidth < v.b[v.c.XLarge]
                                  ? r - 116
                                  : r - 66);
                          }
                          return {
                            bottom: t.offsetTop + n,
                            left: t.width + t.offsetLeft,
                          };
                        case a.rightBelow:
                          return {
                            top: t.offsetTop,
                            left: t.width + t.offsetLeft,
                          };
                        case a.bottomLeft:
                          return {
                            top: t.height + t.offsetTop,
                            right: t.offsetLeft,
                          };
                        case a.bottomRight:
                        default:
                          return {
                            top: t.height + t.offsetTop,
                            left: t.offsetLeft,
                          };
                      }
                    })()
                  ),
                    z(!1);
                }, 10));
            },
            [y]
          );
          var ne = function () {
              Q(!0),
                setTimeout(function () {
                  Q(!1), k && k(!1), B && B();
                }, 300);
            },
            ae = Object(m.f)(m.a.Escape);
          r.useEffect(
            function () {
              ae && ne();
            },
            [ae]
          ),
            Object(m.g)(te, ne, P);
          var re = r.useRef(null),
            ie = r.useRef(!0);
          if (
            (r.useEffect(
              function () {
                var e;
                ie.current
                  ? (ie.current = !1)
                  : null === (e = re.current) || void 0 === e || e.focus();
              },
              [w, j]
            ),
            !y)
          )
            return null;
          var oe = [a.bottomRight, a.bottomLeft].includes(R),
            ce = [a.rightAbove, a.rightBelow].includes(R),
            ue = Object(d.a)([
              Object(v.d)("Overlay", undefined),
              ((t = {}),
              Object(c.a)(t, Object(v.d)("Overlay", undefined, "anchored"), F),
              Object(c.a)(t, Object(v.d)("Overlay", undefined, "floating"), !F),
              Object(c.a)(t, Object(v.d)("Overlay", undefined, "willOpen"), Z),
              Object(c.a)(t, Object(v.d)("Overlay", undefined, "willClose"), J),
              Object(c.a)(
                t,
                Object(v.d)("Overlay", undefined, "moveRight"),
                F && ce
              ),
              Object(c.a)(
                t,
                Object(v.d)("Overlay", undefined, "moveDown"),
                F && oe
              ),
              t),
            ]),
            se = Object(d.a)([
              Object(v.d)("Overlay", "window"),
              ((n = {}),
              Object(c.a)(n, Object(v.d)("Overlay", "window", "willOpen"), Z),
              Object(c.a)(n, Object(v.d)("Overlay", "window", "willClose"), J),
              n),
            ]),
            de = Object(d.a)([
              Object(v.d)("Overlay", "header"),
              ((l = {}),
              Object(c.a)(
                l,
                Object(v.d)("Overlay", "header", "desktopOnly"),
                w && !j
              ),
              Object(c.a)(
                l,
                Object(v.d)("Overlay", "header", "mobileOnly"),
                j && !w
              ),
              l),
            ]),
            le = h(
              "div",
              {
                className: ue,
                onClick: function (e) {
                  var t;
                  P &&
                    !(null === te ||
                    void 0 === te ||
                    null === (t = te.current) ||
                    void 0 === t
                      ? void 0
                      : t.contains(e.target)) &&
                    ne();
                },
                style: F && $,
              },
              h(
                "div",
                {
                  className: se,
                  role: O,
                  "aria-labelledby": Object(v.d)("Overlay", "header"),
                  "aria-modal": "alertdialog" === O || "dialog" === O,
                  ref: te,
                },
                (w || j) &&
                  h(
                    "div",
                    { className: de, tabIndex: -1, ref: re },
                    E &&
                      h(
                        "div",
                        { className: Object(v.d)("Overlay", "icon") },
                        h(p.q, null)
                      ),
                    w &&
                      q &&
                      h(
                        i.i,
                        { preset: i.k.Title3, color: C.a.PrimaryAction },
                        w
                      ),
                    j &&
                      !q &&
                      h(
                        i.i,
                        { preset: i.k.Title3, color: C.a.PrimaryAction },
                        j
                      ),
                    x &&
                      h(
                        "div",
                        { className: Object(v.d)("Overlay", "close") },
                        h(g.a, { onClick: ne })
                      )
                  ),
                h(
                  "div",
                  {
                    tabIndex: H ? 0 : -1,
                    className: Object(v.d)("Overlay", "content"),
                  },
                  D
                ),
                (T || S) &&
                  h(
                    "div",
                    { className: Object(v.d)("Overlay", "actions") },
                    T &&
                      h(
                        b.b,
                        Object(o.a)({}, T, {
                          variant: b.e.Tertiary,
                          onClick: function () {
                            L(T, ne);
                          },
                          block: !0,
                          ariaLabel: T.label || "Cancel",
                        }),
                        T.label || "Cancel"
                      ),
                    S &&
                      h(
                        b.b,
                        Object(o.a)({}, S, {
                          variant: b.e.Primary,
                          onClick: function () {
                            L(S, ne);
                          },
                          block: !0,
                        }),
                        S.label
                      )
                  )
              )
            );
          return F && q
            ? r.createElement(r.Fragment, {}, h(f.a, null, le))
            : s.createPortal(h(f.a, null, le), document.body);
        },
        w = r.createElement;
      !(function (e) {
        (e[(e.Info = 0)] = "Info"), (e[(e.Confirmation = 1)] = "Confirmation");
      })(O || (O = {})),
        (function (e) {
          (e[(e.Format = 0)] = "Format"), (e[(e.Plain = 1)] = "Plain");
        })(y || (y = {}));
      var j = function (e) {
          var t = e.mode,
            n = void 0 === t ? O.Info : t,
            a = e.styling,
            r = void 0 === a ? y.Format : a,
            o = e.open,
            c = e.setOpen,
            u = e.header,
            s = e.primaryAction,
            d = e.cancelAction,
            l = e.alert,
            f = void 0 !== l && l,
            v = e.onOpen,
            m = e.onClose,
            b = e.enableTabbingContent,
            g = e.children;
          return w(
            k,
            {
              role: n === O.Confirmation ? "alertdialog" : "dialog",
              open: o,
              setOpen: c,
              desktopHeader: u,
              mobileHeader: u,
              primaryAction: s,
              cancelAction: d,
              alert: f,
              onOpen: v,
              onClose: m,
              showCloseButton: n === O.Info,
              closeOnClickOutside: n === O.Info,
              enableTabbingContent: b,
            },
            r === y.Format && w(i.c, null, g),
            r === y.Plain && g
          );
        },
        S = r.createElement,
        T = function (e) {
          var t = e.anchorRef,
            n = e.open,
            a = e.setOpen,
            r = e.desktopHeader,
            i = e.mobileHeader,
            o = e.primaryAction,
            c = e.cancelAction,
            u = e.onOpen,
            s = e.onClose,
            d = e.enableTabbingContent,
            l = e.children;
          return S(
            k,
            {
              role: "menu",
              open: n,
              setOpen: a,
              desktopHeader: r,
              mobileHeader: i,
              primaryAction: o,
              cancelAction: c,
              onOpen: u,
              onClose: s,
              showCloseButton: !1,
              anchorRef: t,
              closeOnClickOutside: !0,
              enableTabbingContent: d,
            },
            l
          );
        },
        I = n("dhJC"),
        E = n("0sDs"),
        N = n("mW/1"),
        x = (n("nVtc"), r.createElement),
        A = function (e) {
          var t = e.leadingOrnament,
            n = e.trailingOrnament,
            a = e.children,
            r = Object(I.a)(e, [
              "leadingOrnament",
              "trailingOrnament",
              "children",
            ]);
          return x(
            E.a,
            Object(o.a)(
              {
                role: "menuitem",
                className: Object(N.a)("DropdownMenu", "item"),
              },
              r
            ),
            t &&
              x(
                "div",
                {
                  "data-testid": "leadingOrnamentWrapper",
                  className: Object(N.a)("DropdownMenu", "leadingOrnament"),
                },
                t
              ),
            x("div", { className: Object(N.a)("DropdownMenu", "content") }, a),
            n &&
              x(
                "div",
                {
                  "data-testid": "trailingOrnamentWrapper",
                  className: Object(N.a)("DropdownMenu", "trailingOrnament"),
                },
                n
              )
          );
        },
        P = function (e) {
          var t = e.children,
            n = Object(I.a)(e, ["children"]);
          return x(
            k,
            Object(o.a)(
              { closeOnClickOutside: !0, showCloseButton: !0, role: "dialog" },
              n
            ),
            x("div", { role: "menu", className: "DropdownMenu" }, t)
          );
        };
      P.Item = A;
    },
    cxXz: function (e, t, n) {},
    d3j5: function (e, t, n) {},
    dEn3: function (e, t, n) {
      "use strict";
      var a = n("MwW3"),
        r = n.n(a),
        i = n("Prh1"),
        o = /[0-9]{3}-[0-9]{7}-[0-9]{7}/,
        c = function () {
          var e = new r.a(o).gen();
          return (
            (function (e) {
              var t = new Date();
              t.setFullYear(t.getFullYear() + 20),
                i.a.set("ccsid", e, { expires: t, path: "/" });
            })(e),
            e
          );
        };
      t.a = {
        SESSION_ID_REGEX: o,
        getValidSessionId: function () {
          var e = (function () {
            var e = i.a.get("ccsid");
            return "undefined" !== typeof e && o.test(e) ? e : null;
          })();
          return null !== e ? e : c();
        },
      };
    },
    e5hv: function (e, t, n) {},
    e8C3: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var a = n("HALo"),
        r = n("q1tI"),
        i = n("MAIN"),
        o = n("evym"),
        c = r.createElement,
        u = function (e) {
          return c(
            i.a,
            Object(a.a)({}, e, {
              variant: i.d.Tertiary,
              rounded: !0,
              ariaLabel: "Close",
            }),
            c(o.a, null)
          );
        };
    },
    eF7b: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return u;
        }),
        n.d(t, "d", function () {
          return s;
        });
      var a = n("Prh1"),
        r = n("MEx9"),
        i = function (e) {
          return e ? e.toString().split(/\.|-/)[0] : e;
        },
        o = function () {
          return window.location.search;
        },
        c = function () {
          return "true" === a.a.get("likely_has_account");
        },
        u = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.returnUrl,
            n = void 0 === t ? encodeURIComponent(window.location.href) : t,
            i = e.signInUrl,
            o = void 0 === i ? Object(r.h)(a.a.get(r.c)).signInUrl : i,
            u = e.signUpUrl,
            s = void 0 === u ? Object(r.h)(a.a.get(r.c)).signUpUrl : u,
            d = c() ? o : s;
          return "".concat(d).concat(n);
        },
        s = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.returnUrl,
            n = void 0 === t ? encodeURIComponent(window.location.href) : t,
            i = e.signInUrl,
            o = void 0 === i ? Object(r.h)(a.a.get(r.c)).signInUrl : i,
            c = e.signUpUrl,
            s = void 0 === c ? Object(r.h)(a.a.get(r.c)).signUpUrl : c;
          window.location.href = u({
            returnUrl: n,
            signInUrl: o,
            signUpUrl: s,
          });
        };
    },
    evym: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var a = n("q1tI"),
        r = n.n(a),
        i = n("BEb3"),
        o = r.a.createElement,
        c = function (e) {
          var t = e.ariaLabel;
          return o(
            i.c,
            { className: "CloseIcon", ariaLabel: t },
            o(
              "svg",
              { viewBox: "0 0 100 100" },
              o("polygon", {
                points:
                  "77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2 51.5,51.1 79.6,23",
              })
            )
          );
        };
    },
    eyEu: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return c;
      }),
        n.d(t, "a", function () {
          return u;
        });
      var a = n("/xWf"),
        r = n("s/Ur"),
        i = n("q1tI"),
        o = n("INQH"),
        c = function (e) {
          var t = Object(i.useState)(!1),
            n = t[0],
            c = t[1],
            u = e.moreThan && o["breakpoint-".concat(e.moreThan)],
            s = e.lessThan && o["breakpoint-".concat(e.lessThan)],
            d = Object(r.useMediaQuery)({
              minWidth: u && Object(a.e)(u),
              maxWidth: s && Object(a.e)(s),
            });
          return (
            Object(i.useEffect)(
              function () {
                return c(d);
              },
              [d]
            ),
            n
          );
        },
        u = function (e) {
          var t = e.moreThan && o["breakpoint-".concat(e.moreThan)],
            n = e.lessThan && o["breakpoint-".concat(e.lessThan)];
          return Object(r.useMediaQuery)({
            minWidth: t && Object(a.e)(t),
            maxWidth: n && Object(a.e)(n),
          });
        };
    },
    fFo5: function (e, t, n) {},
    hB2y: function (e, t, n) {
      "use strict";
      var a = n("abm3");
      n.d(t, "Spotlight", function () {
        return a.a;
      });
      var r = n("4xvm");
      n.d(t, "SpotlightBasic", function () {
        return r.a;
      });
      n("GVCB");
    },
    hWbD: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var a = n("vJKn"),
        r = n.n(a),
        i = n("rg98"),
        o = n("MwW3"),
        c = n.n(o),
        u = n("nOHt"),
        s = n.n(u),
        d = n("FhZt"),
        l = n("7+Ly"),
        f = n("bwyV"),
        v = n("LvDl"),
        m = n("1JQt"),
        b = n("pv95"),
        g = n("oAPw"),
        p = 30,
        C = function () {
          return new c.a(/[A-Z0-9]{20}/).gen();
        },
        h = function () {
          return new Date().getTime() / 1e3;
        },
        L = function () {
          var e, t, n, a;
          return null !==
            (e =
              null !==
                (t =
                  null === s.a ||
                  void 0 === s.a ||
                  null === (n = s.a.query) ||
                  void 0 === n
                    ? void 0
                    : n.ref) && void 0 !== t
                ? t
                : null === s.a ||
                  void 0 === s.a ||
                  null === (a = s.a.query) ||
                  void 0 === a
                ? void 0
                : a.ref_) && void 0 !== e
            ? e
            : "";
        },
        O = function (e) {
          "undefined" === typeof e.response &&
            (m.a.error("Clickstream logging failed - ".concat(e.message)),
            b.a.reportCount(g.a.ClickstreamLoggingFailed, []));
        },
        y = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = JSON.parse(sessionStorage.getItem("clickstream"));
          return (
            !!(null === t || void 0 === t ? void 0 : t.length) &&
            (e &&
              m.a.debug(
                "clearClickstreamStorage: deleting ".concat(JSON.stringify(t))
              ),
            sessionStorage.removeItem("clickstream"),
            !0)
          );
        },
        k = function () {
          var e = JSON.parse(sessionStorage.getItem("clickstream"));
          (null === e || void 0 === e ? void 0 : e.length) &&
            (l.a.sendBeaconWithFallback("/metrics_logging_batched", e, O), y());
        },
        w = Object(v.debounce)(k, 1e3),
        j = function (e) {
          var t = JSON.parse(sessionStorage.getItem("clickstream")) || [];
          t.push(e),
            sessionStorage.setItem("clickstream", JSON.stringify(t)),
            w();
        },
        S = (function () {
          var e = Object(i.a)(
            r.a.mark(function e(t, n, a, i) {
              var o, c;
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      e.next = 2;
                      break;
                    case 2:
                      (o = {
                        requestId: [void 0, ""].includes(n) ? C() : n,
                        sessionId: l.e.getValidSessionId(),
                        endTime: new Date().toISOString(),
                        startTime: t,
                        referer:
                          "undefined" !== typeof document
                            ? document.referrer
                            : "",
                        path: "undefined" !== typeof s.a ? s.a.asPath : "",
                        refOverride: "undefined" !== typeof i ? i : L(),
                      }),
                        "undefined" !== typeof a && Object.assign(o, a),
                        (c =
                          (null === a || void 0 === a ? void 0 : a.hitType) ===
                          d.b.PageHit),
                        "undefined" === typeof Storage || c
                          ? l.a.sendBeaconWithFallback("/metrics_logging", o, O)
                          : ((o.referer = window.location.href), j(o));
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, a, r) {
            return e.apply(this, arguments);
          };
        })();
      t.b = {
        CLICKSTREAM_LOGGING_URL: "/metrics_logging",
        PageAssemblyType: d.c,
        clearClickstreamStorage: y,
        getRequestId: C,
        getStartTime: h,
        logActionHit: function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          var a = n.pageTypeIdOverride,
            r = n.refOverride,
            i = n.hitType,
            o = void 0 === i ? d.b.ActionOnly : i,
            c = n.requestId,
            u = n.startTime,
            s = void 0 === u ? h() : u,
            l = n.statusCode,
            v = void 0 === l ? 200 : l,
            b = {
              hitType: o,
              pageAction: e,
              pageAssemblyType: d.c.Main,
              statusCode: v,
            };
          "undefined" !== typeof r && (b.refOverride = r);
          var g = f.a.getCurrentPageTypeData(t);
          "undefined" !== typeof a && (g.pageTypeId = a),
            Object.assign(b, g),
            S(s, c, b)
              .then()
              .catch(function (e) {
                m.a.error(e.toString());
              });
        },
        logPageHit: function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : h();
          var a = {
            hitType: d.b.PageHit,
            pageAssemblyType: d.c.Main,
            statusCode: 200,
          };
          Object.assign(a, f.a.getCurrentPageTypeData(t)),
            S(n, e, a)
              .then()
              .catch(function (e) {
                m.a.error(e.toString());
              });
        },
        logToClickstream: S,
        sendBatchedBeacon: k,
      };
    },
    huxJ: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return a.b;
      }),
        n.d(t, "b", function () {
          return a.a;
        }),
        n.d(t, "d", function () {
          return r.a;
        }),
        n.d(t, "a", function () {
          return i.a;
        }),
        n.d(t, "f", function () {
          return i.b;
        }),
        n.d(t, "g", function () {
          return c;
        }),
        n.d(t, "h", function () {
          return u.a;
        }),
        n.d(t, "e", function () {
          return s.a;
        });
      var a = n("eyEu"),
        r = n("z+5B"),
        i = n("rERO"),
        o = n("q1tI"),
        c = function (e, t) {
          var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          Object(o.useEffect)(
            function () {
              function a(a) {
                n && e.current && !e.current.contains(a.target) && t();
              }
              return (
                document.addEventListener("mousedown", a),
                document.addEventListener("touchstart", a),
                function () {
                  document.removeEventListener("mousedown", a),
                    document.removeEventListener("touchstart", a);
                }
              );
            },
            [e, n]
          );
        },
        u = n("2BWV"),
        s = n("Lo6Y");
    },
    ixbk: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var a = n("HALo"),
        r = n("dhJC"),
        i = n("q1tI"),
        o = n.n(i),
        c = n("/iJQ"),
        u = o.a.createElement,
        s = function (e) {
          var t = e.shouldTruncate,
            n = e.isTruncated,
            r = e.actionOnClick,
            i = e.trailingSeparator,
            s = e.expandActionProps,
            d = e.collapseActionProps;
          return t
            ? n && !s
              ? null
              : n || d
              ? u(
                  o.a.Fragment,
                  null,
                  i,
                  u(
                    c.b,
                    Object(a.a)(
                      {
                        variant: c.e.Inline,
                        ariaLabel: n
                          ? "Show all items in the list"
                          : "Show less items in the list",
                      },
                      n ? s : d,
                      {
                        onClick: function (e) {
                          n
                            ? (null === s || void 0 === s
                                ? void 0
                                : s.onClick) && s.onClick(e)
                            : (null === d || void 0 === d
                                ? void 0
                                : d.onClick) && d.onClick(e),
                            r();
                        },
                      }
                    ),
                    n
                      ? (null === s || void 0 === s ? void 0 : s.children) ||
                          "...more"
                      : (null === d || void 0 === d ? void 0 : d.children) ||
                          "...less"
                  )
                )
              : null
            : null;
        },
        d = o.a.createElement,
        l = function (e, t, n) {
          return e
            ? e.reduce(function (e, a, r) {
                return (
                  e.push(
                    d(
                      o.a.Fragment,
                      { key: r },
                      (n || 0 !== r) && t && d("span", { tabIndex: -1 }, t),
                      a
                    )
                  ),
                  e
                );
              }, [])
            : [];
        },
        f = function (e) {
          var t,
            n = e.show,
            c = void 0 === n ? 1 / 0 : n,
            u = e.startExpanded,
            f = void 0 !== u && u,
            v = e.as,
            m = void 0 === v ? "ul" : v,
            b = e.separator,
            g = e.trailingSeparator,
            p = void 0 === g ? " " : g,
            C = e.expandActionProps,
            h = e.collapseActionProps,
            L = e.children,
            O = Object(r.a)(e, [
              "show",
              "startExpanded",
              "as",
              "separator",
              "trailingSeparator",
              "expandActionProps",
              "collapseActionProps",
              "children",
            ]),
            y = o.a.Children.count(L) > c,
            k = Object(i.useState)(y && !f),
            w = k[0],
            j = k[1],
            S = Object(i.useState)(!1),
            T = S[0],
            I = S[1];
          Object(i.useEffect)(
            function () {
              j(y && !f);
            },
            [y, f]
          );
          var E = m,
            N = o.a.useRef(null),
            x = o.a.useRef(null),
            A = o.a.Children.toArray(L);
          Object(i.useEffect)(
            function () {
              if (T) {
                var e, t;
                if (w) null === (e = N.current) || void 0 === e || e.focus();
                else null === (t = x.current) || void 0 === t || t.focus();
                I(!1);
              }
            },
            [w]
          );
          var P =
              null === (t = l(A, b, !1)) || void 0 === t
                ? void 0
                : t.slice(0, c),
            M = l(null === A || void 0 === A ? void 0 : A.slice(c), b, !0);
          return d(
            E,
            Object(a.a)({ className: "CollapsableList" }, O),
            d("span", { ref: N, tabIndex: -1 }, P),
            d("span", { ref: x, tabIndex: -1 }, !w && y && M),
            d(s, {
              shouldTruncate: y,
              isTruncated: w,
              actionOnClick: function () {
                j(!w), I(!0);
              },
              trailingSeparator: p,
              expandActionProps: C,
              collapseActionProps: h,
            })
          );
        };
    },
    j79A: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return l;
        });
      var a,
        r,
        i,
        o = n("cpVT"),
        c = n("q1tI"),
        u = n("zAUr"),
        s = n("+5ea"),
        d = (n("TPNx"), c.createElement);
      !(function (e) {
        (e.None = "none"), (e.Small = "small");
      })(a || (a = {})),
        (function (e) {
          (e.Sharp = "sharp"),
            (e.Small = "small"),
            (e.Medium = "medium"),
            (e.Large = "large");
        })(r || (r = {})),
        (function (e) {
          (e.Standard = "standard"),
            (e.Minor = "minor"),
            (e.BookCover = "book-cover");
        })(i || (i = {}));
      var l = function (e) {
        var t = e.children,
          n = e.shadow,
          c = void 0 === n ? r.Small : n,
          l = e.radius,
          f = void 0 === l ? i.Standard : l,
          v = e.padding,
          m = void 0 === v ? a.Small : v,
          b = e.href,
          g = e.focusable,
          p = void 0 === g || g,
          C = e.onClick,
          h = b || C;
        return d(
          b ? "a" : C ? "button" : "div",
          {
            className: Object(u.a)([
              "Elevation",
              Object(o.a)(
                {},
                Object(s.d)("Elevation", void 0, "clickable"),
                b || C
              ),
              Object(s.d)("Elevation", void 0, "padding-".concat(m)),
            ]),
            href: b,
            onClick: C,
            tabIndex: h ? (p ? 0 : -1) : void 0,
          },
          d(
            "div",
            {
              className: Object(u.a)([
                Object(s.d)("Elevation", "contents"),
                Object(s.d)("Elevation", "contents", "shadow-".concat(c)),
                Object(s.d)("Elevation", "contents", "radius-".concat(f)),
              ]),
            },
            d(
              "div",
              {
                className: Object(u.a)([
                  Object(s.d)("Elevation", "contents-inner"),
                  Object(s.d)(
                    "Elevation",
                    "contents-inner",
                    "radius-".concat(f)
                  ),
                ]),
              },
              t
            )
          )
        );
      };
    },
    jHWU: function (e, t, n) {},
    jLmM: function (e, t, n) {},
    "jxk/": function (e, t, n) {},
    k6Ep: function (e, t, n) {},
    lLyO: function (e, t) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "getSiteHeaderBanner" },
            variableDefinitions: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "getSiteHeaderBanner" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "altText" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "clickthroughUrl" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "desktop1xPhoto" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "desktop2xPhoto" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mobile1xPhoto" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mobile2xPhoto" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "siteStripColor" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 183 },
      };
      n.loc.source = {
        body: "query getSiteHeaderBanner {\n  getSiteHeaderBanner {\n    altText\n    clickthroughUrl\n    desktop1xPhoto\n    desktop2xPhoto\n    mobile1xPhoto\n    mobile2xPhoto\n    siteStripColor\n  }\n}\n",
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == t) return a;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          !(function e(t, n) {
            if ("FragmentSpread" === t.kind) n.add(t.name.value);
            else if ("VariableDefinition" === t.kind) {
              var a = t.type;
              "NamedType" === a.kind && n.add(a.name.value);
            }
            t.selectionSet &&
              t.selectionSet.selections.forEach(function (t) {
                e(t, n);
              }),
              t.variableDefinitions &&
                t.variableDefinitions.forEach(function (t) {
                  e(t, n);
                }),
              t.definitions &&
                t.definitions.forEach(function (t) {
                  e(t, n);
                });
          })(e, t),
            (a[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.getSiteHeaderBanner = (function (e, t) {
          var n = { kind: e.kind, definitions: [r(e, t)] };
          e.hasOwnProperty("loc") && (n.loc = e.loc);
          var i = a[t] || new Set(),
            o = new Set(),
            c = new Set();
          for (
            i.forEach(function (e) {
              c.add(e);
            });
            c.size > 0;

          ) {
            var u = c;
            (c = new Set()),
              u.forEach(function (e) {
                o.has(e) ||
                  (o.add(e),
                  (a[e] || new Set()).forEach(function (e) {
                    c.add(e);
                  }));
              });
          }
          return (
            o.forEach(function (t) {
              var a = r(e, t);
              a && n.definitions.push(a);
            }),
            n
          );
        })(n, "getSiteHeaderBanner"));
    },
    laJw: function (e, t, n) {},
    mNTR: function (e, t) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "getUser" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userUri" },
                },
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "ID" },
                },
                directives: [],
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "getUser" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "userUri" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userUri" },
                      },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "id" },
                        name: { kind: "Name", value: "legacyId" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "name" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "imageUrl" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "imageUrlSquare" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "readingChallengeUrl" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "navigationQuickLinks" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "webUrl" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pageType" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isAuthor" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contributor" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "webUrl" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "works" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalCount" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "textReviewsCount" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "followersCount" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "favoriteGenres" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "totalCount" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "edges" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "node" },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "webUrl",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "name" },
                                          arguments: [],
                                          directives: [],
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "webUrl" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "viewerNotificationsUnreadCount",
                        },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "viewerMessagesUnreadCount",
                        },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "viewerFriendRequestsUnreadCount",
                        },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 598 },
      };
      n.loc.source = {
        body: "query getUser($userUri: ID) {\n  getUser(userUri: $userUri) {\n    id: legacyId\n    name\n    imageUrl\n    imageUrlSquare\n    readingChallengeUrl\n    navigationQuickLinks {\n      webUrl\n      pageType\n    }\n    isAuthor\n    contributor {\n      id\n      webUrl\n      works {\n        totalCount\n      }\n    }\n    textReviewsCount\n    followersCount\n    favoriteGenres {\n      totalCount\n      edges {\n        node {\n          id\n          webUrl\n          name\n        }\n      }\n    }\n    webUrl\n    viewerNotificationsUnreadCount\n    viewerMessagesUnreadCount\n    viewerFriendRequestsUnreadCount\n  }\n}\n",
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == t) return a;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          !(function e(t, n) {
            if ("FragmentSpread" === t.kind) n.add(t.name.value);
            else if ("VariableDefinition" === t.kind) {
              var a = t.type;
              "NamedType" === a.kind && n.add(a.name.value);
            }
            t.selectionSet &&
              t.selectionSet.selections.forEach(function (t) {
                e(t, n);
              }),
              t.variableDefinitions &&
                t.variableDefinitions.forEach(function (t) {
                  e(t, n);
                }),
              t.definitions &&
                t.definitions.forEach(function (t) {
                  e(t, n);
                });
          })(e, t),
            (a[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.getUser = (function (e, t) {
          var n = { kind: e.kind, definitions: [r(e, t)] };
          e.hasOwnProperty("loc") && (n.loc = e.loc);
          var i = a[t] || new Set(),
            o = new Set(),
            c = new Set();
          for (
            i.forEach(function (e) {
              c.add(e);
            });
            c.size > 0;

          ) {
            var u = c;
            (c = new Set()),
              u.forEach(function (e) {
                o.has(e) ||
                  (o.add(e),
                  (a[e] || new Set()).forEach(function (e) {
                    c.add(e);
                  }));
              });
          }
          return (
            o.forEach(function (t) {
              var a = r(e, t);
              a && n.definitions.push(a);
            }),
            n
          );
        })(n, "getUser"));
    },
    mTaa: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return k;
        });
      var a,
        r,
        i,
        o = n("xvhg"),
        c = n("cpVT"),
        u = n("q1tI"),
        s = n("6jlT"),
        d = n.n(s),
        l = n("zAUr"),
        f = n("dhqo"),
        v = n.n(f),
        m = n("+5ea"),
        b = n("huxJ"),
        g = (n("Ku67"), n("/iJQ")),
        p = n("Qu/W"),
        C = n("Lo6Y"),
        h = (n("sRg0"), u.createElement),
        L = function (e) {
          var t = e.items,
            n = e.cardsPerScreen,
            a = e.cardsPerScreenOffset,
            r = e.overrideTabIndex,
            i = Object(l.a)([
              Object(m.d)("CarouselGroup", "item"),
              Object(c.a)(
                {},
                Object(m.d)("CarouselGroup", "item", "".concat(n, "-col")),
                n
              ),
            ]);
          return h(
            "ul",
            { className: "CarouselGroup", "data-testid": "items" },
            u.Children.map(t, function (e, t) {
              return h(
                "li",
                { className: i, key: d()() },
                u.cloneElement(e, { focusable: !r || (t >= a && t < a + n) })
              );
            })
          );
        },
        O = u.createElement;
      !(function (e) {
        (e.Linear = "linear"), (e.Circular = "circular");
      })(a || (a = {})),
        (function (e) {
          (e.Book = "book"),
            (e.Collection = "collection"),
            (e.Article = "article"),
            (e.Unknown = "unknown");
        })(r || (r = {})),
        (function (e) {
          (e.PREV = "prev"), (e.NEXT = "next"), (e.NONE = "none");
        })(i || (i = {}));
      var y = function (e) {
          var t = e.currentScreenIndex,
            n = e.screensCount;
          return O(
            "div",
            { className: Object(m.d)("Carousel", "pageIndicatorWrapper") },
            Array(n)
              .fill(null)
              .map(function (e, n) {
                var a = n + 1 === t,
                  r = Object(l.a)([
                    Object(m.d)("Carousel", "pageIndicator"),
                    Object(c.a)(
                      {},
                      Object(m.d)("Carousel", "pageIndicator", "selected"),
                      a
                    ),
                  ]);
                return O("div", {
                  key: d()(),
                  "data-testid": "indicator-".concat(n + 1),
                  className: r,
                });
              })
          );
        },
        k = function (e) {
          var t = e.children,
            n = e.sectionTitle,
            s = e.overflowButtonProps,
            d = e.sectionDescription,
            f = e.totalCards,
            h = e.cardsToShowAt,
            k = e.cardsToShow,
            w = void 0 === k ? 4 : k,
            j = e.variant,
            S = void 0 === j ? a.Linear : j,
            T = e.ariaLabel,
            I = void 0 === T ? "Carousel" : T,
            E = e.dataTestId,
            N = void 0 === E ? "carousel" : E,
            x = e.totalCount,
            A = void 0 === x ? 0 : x,
            P = e.contentType,
            M = void 0 === P ? r.Unknown : P,
            B = u.useState(0),
            D = Object(o.a)(B, 2),
            F = D[0],
            _ = D[1],
            R = u.useState(i.NONE),
            H = Object(o.a)(R, 2),
            q = H[0],
            U = H[1],
            V = Object(u.useRef)(null),
            Z = Object(u.useRef)(null),
            z = Object(u.useRef)(null),
            W = Object(C.a)({ itemsToShowAt: h, defaultToShow: w }),
            G = Object(b.b)({ moreThan: m.c.Medium }),
            J = Math.ceil(F / W) + 1,
            Q = Math.ceil(f / W),
            X = S === a.Linear && 1 === J,
            K = S === a.Linear && J === Q;
          if (
            (Object(b.h)(function () {
              _(0);
            }),
            Object(u.useEffect)(
              function () {
                var e, t;
                return (
                  (e = requestAnimationFrame(function n(a) {
                    if ((t || (t = a), a - t >= 200)) {
                      if (!K && !X) return;
                      if (
                        (q === i.NEXT && K && V.current
                          ? (z = V)
                          : q === i.PREV && X && Z.current && (z = Z),
                        z && z.current)
                      ) {
                        var r = z.current.querySelector("button");
                        r && r.focus();
                      }
                    } else e = requestAnimationFrame(n);
                  })),
                  function () {
                    e && cancelAnimationFrame(e);
                  }
                );
              },
              [K, X, q, V, Z]
            ),
            !f)
          )
            return null;
          var Y = Q > 1,
            $ = Object(l.a)([
              Object(c.a)(
                {},
                Object(m.d)("Carousel", void 0, "sliderWrapper"),
                Y
              ),
            ]),
            ee = Object(l.a)([
              Object(m.d)("Carousel", "inner"),
              Object(c.a)({}, Object(m.d)("Carousel", "inner", "static"), !Y),
            ]),
            te =
              A > 0 && M !== r.Unknown
                ? "".concat(Object(m.g)(A), " ").concat(v()(M, A))
                : "";
          return O(
            "section",
            { className: "Carousel", "data-testid": N },
            O(
              "div",
              {
                className: Object(m.d)("Carousel", "header"),
                "data-testid": "header",
              },
              n || O("span", null),
              Y && G && O(y, { currentScreenIndex: J, screensCount: Q }),
              te &&
                O(
                  "span",
                  { className: "u-sr-only", "data-testid": "totalCount" },
                  "Featuring ".concat(f, " out of ").concat(te, " in this list")
                )
            ),
            d &&
              O(
                "div",
                {
                  className: Object(m.d)("Carousel", "subHeader"),
                  "data-testid": "subHeader",
                },
                d
              ),
            Y &&
              O(
                "div",
                {
                  className: Object(l.a)([
                    Object(m.d)("Carousel", "paginationButton"),
                    Object(m.d)("Carousel", "paginationButton", "left"),
                  ]),
                  ref: V,
                },
                !X &&
                  O(
                    g.b,
                    {
                      ariaLabel: "".concat(I, ", Previous page"),
                      "data-testid": "previousButton",
                      variant: g.e.Tertiary,
                      onClick: function () {
                        _(F <= 0 ? f - W : F % W === 0 ? F - W : F - (F % W)),
                          U(i.PREV);
                      },
                      rounded: !0,
                      ariaHidden: !0,
                    },
                    O(p.f, { direction: p.m.Left })
                  )
              ),
            O(
              "div",
              { className: ee },
              O(
                "div",
                { className: Object(m.d)("Carousel", "itemsArea") },
                O(
                  "div",
                  {
                    className: $,
                    style: {
                      transform: "translateX(-".concat(F * (100 / W), "%)"),
                    },
                  },
                  O(L, {
                    items: t,
                    cardsPerScreen: W,
                    cardsPerScreenOffset: F,
                    overrideTabIndex: G,
                  })
                )
              )
            ),
            Y &&
              G &&
              O(
                "div",
                {
                  className: Object(l.a)([
                    Object(m.d)("Carousel", "paginationButton"),
                    Object(m.d)("Carousel", "paginationButton", "right"),
                  ]),
                  ref: Z,
                },
                !K &&
                  O(
                    g.b,
                    {
                      ariaLabel: "".concat(I, ", Next page"),
                      "data-testid": "nextButton",
                      variant: g.e.Tertiary,
                      onClick: function () {
                        _(F >= f - W ? 0 : Math.min(F + W, f - W)), U(i.NEXT);
                      },
                      rounded: !0,
                      ariaHidden: !0,
                    },
                    O(p.f, { direction: p.m.Right })
                  )
              ),
            s && O(g.f, s)
          );
        };
    },
    mTp0: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var a = n("q1tI"),
        r = n.n(a),
        i = (n("8HVi"), n("99WS"), n("USB4")),
        o = r.a.createElement,
        c = function (e) {
          var t = e.weblabId,
            n = e.renderFn;
          return o(i.b, null, function (e) {
            var a = e.state;
            return n(a.treatments.get(t), a.isLoading);
          });
        };
    },
    "mW/1": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = function (e, t, n) {
        var a = e;
        return t && (a += "__".concat(t)), n && (a += "--".concat(n)), a;
      };
    },
    "n+EK": function (e, t, n) {},
    n4dk: function (e, t, n) {
      "use strict";
      n("wV3N"), n("VqDV");
    },
    n59y: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return i;
        }),
        n.d(t, "b", function () {
          return L;
        });
      var a,
        r,
        i,
        o = n("cpVT"),
        c = n("q1tI"),
        u = n("zAUr"),
        s = n("dhqo"),
        d = n.n(s),
        l = n("+5ea"),
        f = n("yugg"),
        v = n("Qu/W"),
        m = (n("fFo5"), n("6jlT")),
        b = n.n(m),
        g = n("5vdI"),
        p = n("A+y1"),
        C = c.createElement;
      !(function (e) {
        (e.Beige = "beige"),
          (e.Blue = "blue"),
          (e.Green = "green"),
          (e.Purple = "purple");
      })(r || (r = {})),
        (function (e) {
          (e.Line = "line"),
            (e.Slope = "slope"),
            (e.Staircase = "staircase"),
            (e.Diamond = "diamond");
        })(i || (i = {}));
      var h =
          ((a = {}),
          Object(o.a)(a, i.Line, 3),
          Object(o.a)(a, i.Slope, 3),
          Object(o.a)(a, i.Staircase, 3),
          Object(o.a)(a, i.Diamond, 4),
          a),
        L = function (e) {
          var t = e.id,
            n = e.books,
            a = e.title,
            o = e.booksCount,
            s = void 0 === o ? 0 : o,
            m = e.votesCount,
            L = void 0 === m ? 0 : m,
            O = e.color,
            y = void 0 === O ? r.Beige : O,
            k = e.bookCoverPattern,
            w = void 0 === k ? i.Line : k,
            j = e.refTag,
            S = e.fillMissingBookCovers,
            T = void 0 === S || S,
            I = e.focusable,
            E = void 0 === I || I,
            N = "CollectionCard",
            x = "/list/show/".concat(t),
            A = Object(p.b)(x, j),
            P = s ? "".concat(Object(l.g)(s), " ").concat(d()("books", s)) : "";
          L &&
            (P += ""
              .concat(s ? " \u2022 " : "")
              .concat(Object(l.g)(L), " ")
              .concat(d()("voter", L)));
          var M = ""
              .concat(a, ": A list containing ")
              .concat(
                Object(l.e)(
                  n.map(function (e) {
                    return e.title;
                  })
                ),
                ". "
              )
              .concat(P),
            B = C(
              "div",
              { key: b()(), className: Object(l.d)(N, "defaultBookCover") },
              C(v.d, null)
            ),
            D = n.map(function (e) {
              return e.imageUrl
                ? C("img", {
                    src: e.imageUrl,
                    className: Object(l.d)(N, "bookCover"),
                    key: e.title,
                    alt: "",
                  })
                : C(c.Fragment, { key: e.title }, B);
            }),
            F = h[w];
          if (((D = D.slice(0, F)), T)) for (; D.length < F; ) D.push(B);
          var _ = [Object(l.d)(N, "card"), Object(l.d)(N, void 0, y)],
            R = [Object(l.d)(N, "images"), Object(l.d)(N, void 0, w)];
          return C(
            "article",
            { className: N },
            C(
              "a",
              {
                href: j ? A : x,
                className: Object(l.d)(N, "cardClickTarget"),
                tabIndex: E ? 0 : -1,
              },
              C(
                "div",
                { className: Object(u.a)(_) },
                C("div", { className: Object(u.a)(R) }, D)
              ),
              C(
                "div",
                { className: Object(l.d)(N, "title") },
                C(
                  f.a,
                  {
                    preset: f.b.Title3Secondary,
                    tag: "h3",
                    truncateTo: 2,
                    "aria-label": M,
                  },
                  C("span", null, a)
                )
              ),
              C(
                "div",
                { className: Object(l.d)(N, "subText"), "aria-hidden": "true" },
                C(
                  f.a,
                  {
                    "data-testid": "bookCount",
                    preset: f.b.Body3,
                    tag: "small",
                    color: g.a.Subdued,
                  },
                  P
                )
              )
            )
          );
        };
    },
    nCmr: function (e, t, n) {},
    nRLg: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var a = n("q1tI"),
        r = n("6jlT"),
        i = n.n(r),
        o = n("/iJQ"),
        c = n("Qu/W"),
        u = n("5bkh"),
        s = n("+5ea"),
        d = (n("qnIB"), a.createElement);
      var l = function (e) {
        var t = e.children;
        return d(
          "nav",
          { "aria-label": "Breadcrumbs", className: "Breadcrumbs" },
          d(
            "ol",
            {
              className: Object(s.d)("Breadcrumbs", "list"),
              itemScope: !0,
              itemType: "https://schema.org/BreadcrumbList",
            },
            a.Children.map(t, function (e, n) {
              return d(
                "li",
                {
                  itemProp: "itemListElement",
                  itemScope: !0,
                  itemType: "https://schema.org/ListItem",
                  key: i()(),
                  className: Object(s.d)("Breadcrumbs", "listItem"),
                },
                e,
                d("meta", {
                  itemProp: "position",
                  content: (n + 1).toString(),
                }),
                (function (e) {
                  return e !== a.Children.count(t) - 1;
                })(n) && d(c.f, { "aria-label": "", direction: c.m.Right })
              );
            })
          )
        );
      };
      l.Item = function (e) {
        var t = e.href,
          n = e.children;
        return t
          ? d(o.b, { href: t, variant: o.e.Tertiary }, n)
          : d(u.i, { fontOptions: { weight: u.b.Semibold } }, n);
      };
    },
    nVtc: function (e, t, n) {},
    nhBE: function (e, t, n) {},
    nmzc: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "b", function () {
          return d;
        });
      var a = n("cpVT"),
        r = n("q1tI");
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c,
        u = { refTags: [], pageHitRequestId: "" };
      !(function (e) {
        (e.AddRefTags = "ADD_REF_TAGS"),
          (e.SetPageHitRequestId = "SET_REQUEST_ID"),
          (e.SetPageTypeId = "SET_PAGE_TYPE_ID"),
          (e.Override = "OVERRIDE");
      })(c || (c = {}));
      var s = function (e, t) {
          if (null === t || void 0 === t || null === t.type) return e;
          switch (t.type) {
            case c.AddRefTags:
              return o(
                o({}, e),
                {},
                { refTags: (e.refTags || []).concat(t.refTagsToAdd || []) }
              );
            case c.SetPageHitRequestId:
              return o(o({}, e), {}, { pageHitRequestId: t.pageHitRequestId });
            case c.SetPageTypeId:
              return o(o({}, e), {}, { pageTypeId: t.pageTypeId });
            case c.Override:
              return o({}, t.newState);
            default:
              return e;
          }
        },
        d = Object(r.createContext)({ state: u, dispatch: function () {} });
    },
    o1vP: function (e, t, n) {
      "use strict";
      n("e8C3");
    },
    oAPw: function (e, t, n) {
      "use strict";
      var a;
      !(function (e) {
        (e.AdLibrariesInitialized = "AdLibrariesInitialized"),
          (e.AdNotFoundError = "AdNotFoundError"),
          (e.AdClick = "AdClick"),
          (e.AdImpressionSuccess = "AdImpressionSuccess"),
          (e.AdImpressionEmpty = "AdImpressionEmpty"),
          (e.ClickstreamBatchFailed = "ClickstreamBatchFailed"),
          (e.ClickstreamLoggingFailed = "ClickstreamLoggingFailed"),
          (e.DuplicateCCSID = "DuplicateCCSID"),
          (e.ErrorPageShown = "ErrorPageShown"),
          (e.ErrorBoundaryCaught = "ErrorBoundaryCaught"),
          (e.PaginationRequest = "PaginationRequest"),
          (e.PaginationRequestRetryCount = "PaginationRequestRetryCount"),
          (e.TimeToFirstByte = "TimeToFirstByte"),
          (e.FirstContentfulPaint = "FirstContentfulPaint"),
          (e.LargestContentfulPaint = "LargestContentfulPaint"),
          (e.HydrationDuration = "HydrationDuration"),
          (e.TimeToHydrationStart = "TimeToHydrationStart"),
          (e.BookPageEnrollmentModalCount = "BookPageEnrollmentModalCount"),
          (e.BookPageOptOutCount = "BookPageOptOutCount"),
          (e.SponsoredProductAdsMounted = "SponsoredProductAdsMounted"),
          (e.SponsoredProductAdsStatus = "SponsoredProductAdsStatus"),
          (e.BuyButtonLoadingTime = "buyButtonLoadingTime"),
          (e.PageHit = "PageHit");
      })(a || (a = {})),
        (t.a = a);
    },
    ooLU: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return b;
      }),
        n.d(t, "a", function () {
          return T;
        }),
        n.d(t, "e", function () {
          return a;
        }),
        n.d(t, "b", function () {
          return r;
        }),
        n.d(t, "c", function () {
          return g;
        });
      var a,
        r,
        i = n("dhJC"),
        o = n("q1tI"),
        c = n.n(o),
        u = n("cpVT"),
        s = n("HALo"),
        d = n("+5ea"),
        l = n("zAUr"),
        f = (n("OrGe"), n("z430")),
        v = c.a.createContext({ formId: void 0, validationState: void 0 }),
        m = o.createElement;
      !(function (e) {
        (e.Text = "text"),
          (e.Tel = "tel"),
          (e.Email = "email"),
          (e.Float = "number"),
          (e.Search = "search");
      })(a || (a = {})),
        (function (e) {
          (e.Input = "input"), (e.TextArea = "textarea"), (e.Select = "select");
        })(r || (r = {}));
      var b,
        g = function (e) {
          var t = e.children,
            n = e.ariaLabel,
            a = e.onClick,
            r = Object(i.a)(e, ["children", "ariaLabel", "onClick"]);
          return m(
            "button",
            Object(s.a)(
              {
                "data-testid": "ornament",
                type: "button",
                "aria-label": n,
                onClick: a,
                onKeyPress: function () {},
                className: Object(d.d)("FormControl", "ornament"),
              },
              r
            ),
            t
          );
        },
        p = (n("n+EK"), o.createElement),
        C = n("6jlT"),
        h = n.n(C),
        L = (n("MIE5"), o.createElement),
        O = (n("ZVkq"), o.createElement),
        y = (n("d3j5"), o.createElement),
        k = function (e) {
          var t = e.id,
            n = e.children,
            a = e.disabled,
            r = Object(i.a)(e, ["id", "children", "disabled"]),
            c = o.useMemo(function () {
              return { formId: t || h()() };
            }, []).formId,
            f = Object(l.a)([
              "FormRadio",
              Object(u.a)({}, Object(d.d)("FormRadio", void 0, "disabled"), a),
            ]);
          return y(
            "label",
            { className: f, htmlFor: c },
            y(
              "input",
              Object(s.a)(
                {
                  className: Object(d.d)("FormRadio", "input"),
                  id: c,
                  type: "radio",
                  disabled: a,
                },
                r
              )
            ),
            n
          );
        },
        w = o.createElement,
        j = (n("XNzd"), o.createElement),
        S = o.createElement;
      !(function (e) {
        (e.Error = "error"), (e.Success = "success");
      })(b || (b = {}));
      var T = function (e) {
        var t = e.children,
          n = Object(i.a)(e, ["children"]);
        return S("form", n, t);
      };
      (T.Label = function (e) {
        var t = e.children,
          n = e.srOnly,
          a = void 0 !== n && n,
          r = Object(i.a)(e, ["children", "srOnly"]),
          c = o.useContext(v),
          u = c.formId,
          f = c.validationState;
        return p(
          "label",
          Object(s.a)(
            {
              className: Object(l.a)([
                "FormLabel",
                { "u-sr-only": a },
                Object(d.d)("FormLabel", void 0, f),
              ]),
              htmlFor: u,
            },
            r
          ),
          t
        );
      }),
        (T.Control = function (e) {
          var t = e.as,
            n = e.maxRows,
            a = void 0 === n ? 3.5 : n,
            c = e.type,
            b = e.leadingOrnament,
            g = e.trailingOrnament,
            p = e.disabled,
            C = Object(i.a)(e, [
              "as",
              "maxRows",
              "type",
              "leadingOrnament",
              "trailingOrnament",
              "disabled",
            ]);
          if (t === r.Select)
            throw new Error("Form Control as=select is not implemented yet");
          var h = o.useContext(v),
            L = h.formId,
            O = h.validationState,
            y = [
              "FormControl",
              Object(u.a)(
                {},
                Object(d.d)("FormControl", "expanding"),
                t === r.TextArea
              ),
              Object(u.a)({}, Object(d.d)("FormControl", "leadingOrnament"), b),
              Object(u.a)(
                {},
                Object(d.d)("FormControl", "trailingOrnament"),
                g
              ),
              Object(u.a)({}, Object(d.d)("FormControl", "disabled"), p),
              Object(d.d)("FormControl", void 0, O),
            ];
          return m(
            "div",
            { className: Object(l.a)(y) },
            t === r.TextArea &&
              m(
                f.a,
                Object(s.a)(
                  {
                    "data-testid": "textarea",
                    id: L,
                    className: Object(d.d)("FormControl", "textarea"),
                    maxRows: a,
                    disabled: p,
                  },
                  C
                )
              ),
            t === r.Input &&
              m(
                o.Fragment,
                null,
                b,
                m(
                  "input",
                  Object(s.a)(
                    {
                      "data-testid": "input",
                      id: L,
                      className: Object(d.d)("FormControl", "input"),
                      type: c,
                      disabled: p,
                    },
                    C
                  )
                ),
                g
              )
          );
        }),
        (T.Group = function (e) {
          var t = e.formId,
            n = e.validationState,
            a = e.children,
            r = o.useMemo(
              function () {
                return { formId: t || h()(), validationState: n };
              },
              [n]
            );
          return L(
            "div",
            { className: "FormGroup" },
            L(v.Provider, { value: r }, a)
          );
        }),
        (T.Text = function (e) {
          var t = e.children,
            n = o.useContext(v).validationState;
          return O(
            "div",
            {
              className: Object(l.a)([
                "FormText",
                Object(d.d)("FormText", void 0, n),
              ]),
            },
            t
          );
        }),
        (T.RadioGroup = function (e) {
          var t = e.inputPropsList,
            n = e.name,
            a = Object(i.a)(e, ["inputPropsList", "name"]);
          return w(
            "div",
            Object(s.a)({ role: "radiogroup" }, a),
            null === t || void 0 === t
              ? void 0
              : t.map(function (e) {
                  var t,
                    a = e.label,
                    r = Object(i.a)(e, ["label"]);
                  return w(
                    k,
                    Object(s.a)(
                      {
                        key:
                          null === (t = r.value) || void 0 === t
                            ? void 0
                            : t.toString(),
                        name: n,
                      },
                      r
                    ),
                    a
                  );
                })
          );
        }),
        (T.Checkbox = function (e) {
          var t = e.id,
            n = e.children,
            a = e.disabled,
            r = Object(i.a)(e, ["id", "children", "disabled"]),
            c = o.useMemo(function () {
              return { formId: t || h()() };
            }, []).formId,
            f = Object(l.a)([
              "FormCheckbox",
              Object(u.a)(
                {},
                Object(d.d)("FormCheckbox", void 0, "disabled"),
                a
              ),
            ]);
          return j(
            "label",
            { className: f, htmlFor: c },
            j(
              "input",
              Object(s.a)(
                {
                  className: Object(d.d)("FormCheckbox", "input"),
                  id: c,
                  type: "checkbox",
                  disabled: a,
                },
                r
              )
            ),
            n
          );
        });
    },
    oz34: function (e, t, n) {
      "use strict";
      n("xvhg");
      var a,
        r = n("q1tI");
      n("zAUr"),
        n("+5ea"),
        n("jHWU"),
        n("/iJQ"),
        n("Qu/W"),
        n("6jlT"),
        n("yugg"),
        n("2BWV"),
        n("huxJ"),
        n("Lo6Y"),
        n("tg5O"),
        r.createElement;
      !(function (e) {
        (e.PREV = "prev"), (e.NEXT = "next"), (e.NONE = "none");
      })(a || (a = {}));
    },
    p7qx: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return c;
      }),
        n.d(t, "a", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return s;
        });
      var a = n("FhZt"),
        r = n("BQ5h"),
        i = n("pv95"),
        o = n("7+Ly"),
        c = function (e) {
          return i.a.reportCount(e, [], 1);
        },
        u = function (e) {
          var t = [{ Name: "AdUnit", Value: e.adUnit }];
          return {
            baseMetricDimensions: t,
            additionalMetricDimensions: [].concat(t, [
              { Name: "CampaignId", Value: e.campaignId.toString() },
              { Name: "LineItemId", Value: e.lineItemId.toString() },
            ]),
          };
        },
        s = function (e, t, n, u, s, d) {
          var l = a.b.PopUp,
            f = o.b.getRequestId();
          e &&
            ((d || e).addEventListener("click", function () {
              t(a.a.DfpClick, { hitType: l, requestId: f }, u),
                d && e.click(),
                c("AdClick"),
                i.a.reportCount("AdClick", s, 1);
            }),
            (function () {
              t(a.a.DfpImpression, { hitType: l, requestId: f }, u);
              var o = { adElement: e, content: n, requestId: f };
              Object(r.b)(o),
                c("AdImpressionSuccess"),
                i.a.reportCount("AdImpressionSuccess", s, 1);
            })());
        };
    },
    p823: function (e, t, n) {
      "use strict";
      var a, r;
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return r;
        }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "d", function () {
          return u;
        }),
        (function (e) {
          (e.User = "user"),
            (e.Librarian = "librarian"),
            (e.SuperLibrarian = "super_librarian"),
            (e.Employee = "employee"),
            (e.SuperEmployee = "super_employee"),
            (e.SuperUser = "super_user");
        })(a || (a = {})),
        (function (e) {
          (e.Primary = "primary contributor"),
            (e.Secondary = "secondary contributor");
        })(r || (r = {}));
      var i = Object.values(a),
        o = function (e, t) {
          return !!t && i.indexOf(t) >= i.indexOf(e);
        },
        c = function (e) {
          return o(a.Employee, e);
        },
        u = function (e) {
          return o(a.Librarian, e);
        };
    },
    pHf9: function (e, t, n) {},
    pv95: function (e, t, n) {
      "use strict";
      var a = n("7+Ly"),
        r = n("1JQt"),
        i =
          (n("T10n"),
          function (e, t, n, i) {
            var o = { metricName: e, dimensions: t, unit: n, value: i },
              c = "Could not report metric ".concat(e, " from client");
            a.a.sendBeaconWithFallback("/report_metric", o, function (e) {
              var t;
              r.a.error(
                ""
                  .concat(c, " - failed with status ")
                  .concat(
                    null === (t = e.response) || void 0 === t
                      ? void 0
                      : t.status
                  )
              );
            });
          }),
        o = {
          reportCount: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
            i(e, t, "Count", n);
          },
          reportLatency: function (e, t, n) {
            i(e, t, "Milliseconds", n);
          },
        };
      t.a = o;
    },
    qR79: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return v;
        });
      var a,
        r = n("HALo"),
        i = n("cpVT"),
        o = n("dhJC"),
        c = n("q1tI"),
        u = n("zAUr"),
        s = n("+5ea"),
        d = (n("z9ww"), n("e8C3")),
        l = n("yugg"),
        f = c.createElement;
      !(function (e) {
        (e.Caution = "caution"),
          (e.Informational = "informational"),
          (e.Success = "success"),
          (e.Succeed = "succeed"),
          (e.Failure = "failure"),
          (e.Info = "info");
      })(a || (a = {}));
      var v = function (e) {
        var t = e.isCover,
          n = void 0 !== t && t,
          c = e.onClose,
          l = e.variant,
          v = void 0 === l ? a.Informational : l,
          m = e.dismissible,
          b = e.children,
          g = Object(o.a)(e, [
            "isCover",
            "onClose",
            "variant",
            "dismissible",
            "children",
          ]),
          p = Object(u.a)([
            "Alert",
            Object(s.d)("Alert", void 0, v),
            Object(i.a)({}, Object(s.d)("Alert", void 0, "cover"), n),
          ]);
        return f(
          "div",
          Object(r.a)({ className: p }, g),
          b,
          m &&
            f(
              "div",
              { className: Object(s.d)("Alert", "close") },
              f(d.a, { onClick: c, ariaLabel: "Close Alert" })
            )
        );
      };
      (v.Heading = function (e) {
        var t = e.children;
        return f(
          "div",
          { className: Object(s.d)("Alert", "heading") },
          f(
            l.a,
            { preset: l.b.Title3 },
            f(
              "span",
              { className: Object(s.d)("Alert", "iconTextContainer") },
              t
            )
          )
        );
      }),
        (v.Footer = function (e) {
          var t = e.children;
          return f("div", { className: Object(s.d)("Alert", "footer") }, t);
        });
    },
    qnIB: function (e, t, n) {},
    rEHQ: function (e, t, n) {},
    rERO: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return i;
        });
      var a,
        r = n("q1tI");
      !(function (e) {
        (e[(e.Enter = 13)] = "Enter"),
          (e[(e.UpArrow = 38)] = "UpArrow"),
          (e[(e.DownArrow = 40)] = "DownArrow"),
          (e[(e.Escape = 27)] = "Escape");
      })(a || (a = {}));
      var i = function (e) {
        var t = Object(r.useState)(!1),
          n = t[0],
          a = t[1],
          i = function (t) {
            t.keyCode === e && a(!0);
          },
          o = function (t) {
            t.keyCode === e && a(!1);
          };
        return (
          Object(r.useEffect)(function () {
            return (
              window.addEventListener("keydown", i),
              window.addEventListener("keyup", o),
              function () {
                window.removeEventListener("keydown", i),
                  window.removeEventListener("keyup", o);
              }
            );
          }, []),
          n
        );
      };
    },
    rSHa: function (e, t, n) {},
    rY2c: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var a = n("cpVT"),
        r = n("q1tI"),
        i = n("zAUr"),
        o = n("+5ea"),
        c = (n("Q+wg"), r.createElement),
        u = function (e) {
          var t = e.block,
            n = e.children;
          return c(
            "div",
            {
              className: Object(i.a)([
                "ButtonGroup",
                Object(a.a)({}, Object(o.d)("ButtonGroup", void 0, "block"), t),
              ]),
            },
            n
          );
        };
    },
    sELm: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n("cpVT"),
        r = n("q1tI"),
        i = n("zAUr"),
        o = n("+5ea"),
        c = (n("bDcc"), r.createElement),
        u =
          "M24 9.63469C24 9.35683 23.7747 9.13158 23.4969 9.13158H15.0892L12.477 1.34327C12.4269 1.19375 12.3095 1.0764 12.16 1.02625C11.8966 0.937894 11.6114 1.07983 11.523 1.34327L8.91088 9.13158H0.503157C0.33975 9.13158 0.186521 9.21094 0.0922364 9.3444C-0.0680877 9.57134 -0.0140806 9.88529 0.212865 10.0456L7.00408 14.8432L4.40172 22.6166C4.35092 22.7683 4.37534 22.9352 4.46749 23.066C4.6275 23.2932 4.94137 23.3476 5.16853 23.1876L12 18.3758L18.8317 23.183C18.9625 23.2751 19.1293 23.2994 19.281 23.2486C19.5445 23.1604 19.6865 22.8752 19.5983 22.6117L16.996 14.8432L23.7872 10.0456C23.9206 9.95133 24 9.7981 24 9.63469Z",
        s = function (e) {
          var t,
            n,
            r = e.id,
            s = e.rating,
            d = e.selectable,
            l = e.hovered,
            f = e.onClick,
            v = e.onMouseEnter,
            m = e.onMouseLeave,
            b = e.ariaLabel,
            g = e.size,
            p = Object(i.a)(
              ((t = { baseClass: !0 }),
              Object(a.a)(t, Object(o.d)("RatingStar", void 0, g), !0),
              Object(a.a)(
                t,
                Object(o.d)("RatingStar", void 0, "selectable"),
                d
              ),
              t)
            );
          d && (n = l ? "hovered" : "selectable");
          var C = function (e) {
              return Object(o.d)("RatingStar", e, n);
            },
            h = "".concat("RatingStar", "_").concat(r).concat(s).concat(g),
            L = "clip_".concat(h),
            O = "path_".concat(h),
            y = [
              c(
                "defs",
                { key: "d" },
                c("clipPath", { id: L }, c("path", { d: u })),
                c("path", { id: O, d: u })
              ),
              c("use", {
                clipPath: "url(#".concat(L, ")"),
                href: "#".concat(O),
                className: C("backgroundFill"),
                key: "u",
              }),
            ],
            k = {
              FULL: u,
              EMPTY: void 0,
              PARTIAL_75:
                "M18 17.8405V22.5978L12 18.3758L5.16853 23.1876C4.94137 23.3476 4.6275 23.2932 4.46749 23.066C4.37534 22.9352 4.35092 22.7683 4.40172 22.6166L7.00408 14.8432L0.212865 10.0456C-0.0140806 9.88529 -0.0680877 9.57134 0.0922364 9.3444C0.186521 9.21094 0.33975 9.13158 0.503157 9.13158H8.91088L11.523 1.34327C11.6114 1.07983 11.8966 0.937894 12.16 1.02625C12.3095 1.0764 12.4269 1.19375 12.477 1.34327L15.0892 9.13158H18V14.1339L16.996 14.8432L18 17.8405Z",
              PARTIAL_50:
                "M12 1C11.7897 0.999982 11.5936 1.13288 11.523 1.34327L8.91088 9.13158H0.503157C0.33975 9.13158 0.186521 9.21094 0.0922364 9.3444C-0.0680877 9.57134 -0.0140806 9.88529 0.212865 10.0456L7.00408 14.8432L4.40172 22.6166C4.35092 22.7683 4.37534 22.9352 4.46749 23.066C4.6275 23.2932 4.94137 23.3476 5.16853 23.1876L12 18.3758V1Z",
              PARTIAL_25:
                "M6 9.13135H0.503157C0.33975 9.13135 0.186521 9.21071 0.0922364 9.34417C-0.0680877 9.57112 -0.0140806 9.88506 0.212865 10.0454L6 14.1337V9.13135Z M6 17.8422L4.40172 22.6164C4.35092 22.7681 4.37534 22.935 4.46749 23.0658C4.6275 23.293 4.94137 23.3474 5.16853 23.1874L6 22.6018V17.8422Z",
            },
            w = function (e) {
              return c(
                "svg",
                { viewBox: "0 0 24 24", role: "presentation" },
                "FULL" !== e && y,
                c("path", { className: C("fill"), d: k[e] })
              );
            },
            j = w("EMPTY");
          return (
            s >= 0.95
              ? (j = w("FULL"))
              : s >= 0.7
              ? (j = w("PARTIAL_75"))
              : s >= 0.45
              ? (j = w("PARTIAL_50"))
              : s >= 0.11 && (j = w("PARTIAL_25")),
            d
              ? c(
                  "button",
                  {
                    type: "button",
                    "aria-label": b,
                    onClick: f,
                    onMouseEnter: v,
                    onMouseLeave: m,
                    className: p,
                  },
                  j
                )
              : c("span", { className: p }, j)
          );
        };
    },
    sHoD: function (e, t, n) {},
    sRg0: function (e, t, n) {},
    siMi: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var a = n("HALo"),
        r = n("dhJC"),
        i = n("MAIN"),
        o = n("q1tI"),
        c = n.n(o),
        u = n("+5ea"),
        s = (n("rEHQ"), c.a.createElement),
        d = function (e) {
          var t = e.onClick,
            n = e.primaryVariant,
            o = void 0 === n ? i.d.Primary : n,
            c = e.secondaryVariant,
            d = void 0 === c ? i.d.Secondary : c,
            l = e.displayText,
            f = e.hoverText,
            v = e.showSecondary,
            m = Object(r.a)(e, [
              "onClick",
              "primaryVariant",
              "secondaryVariant",
              "displayText",
              "hoverText",
              "showSecondary",
            ]),
            b = v ? d : o,
            g = s(
              i.a,
              Object(a.a)({ block: !0, onClick: t, variant: b }, m, {
                "data-testid": "button",
              }),
              l
            ),
            p = s(
              i.a,
              Object(a.a)({ block: !0, onClick: t, variant: v ? o : b }, m, {
                "data-testid": "hover-button",
              }),
              f || l
            );
          return s(
            "div",
            { className: "ToggleButton", "data-testid": "ToggleButton" },
            s("span", { className: Object(u.d)("ToggleButton", "noHover") }, g),
            s("span", { className: Object(u.d)("ToggleButton", "hover") }, p)
          );
        };
    },
    syl4: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return b;
      });
      var a,
        r = n("HALo"),
        i = n("cpVT"),
        o = n("dhJC"),
        c = n("q1tI"),
        u = n("zAUr"),
        s = n("Qu/W"),
        d = n("+5ea"),
        l = n("0sDs"),
        f = (n("pHf9"), c.createElement);
      !(function (e) {
        (e.XSmall = "xsmall"),
          (e.Small = "small"),
          (e.Medium = "medium"),
          (e.Large = "large"),
          (e.XLarge = "xlarge");
      })(a || (a = {}));
      var v = "bordered",
        m = "placeholder",
        b = function (e) {
          var t,
            n,
            c,
            b = e.imageProps,
            g = e.size,
            p = void 0 === g ? a.Medium : g,
            C = e.bordered,
            h = void 0 !== C && C,
            L = e.as,
            O = void 0 === L ? "div" : L,
            y = e.children,
            k = e.focusable,
            w = void 0 === k || k,
            j = Object(o.a)(e, [
              "imageProps",
              "size",
              "bordered",
              "as",
              "children",
              "focusable",
            ]),
            S =
              !(null === b || void 0 === b ? void 0 : b.src) &&
              !(null === b || void 0 === b ? void 0 : b.srcSet),
            T = Object(u.a)([
              "Avatar",
              ((t = {}),
              Object(i.a)(t, Object(d.d)("Avatar", void 0, p), p),
              Object(i.a)(t, Object(d.d)("Avatar", void 0, v), h),
              Object(i.a)(t, Object(d.d)("Avatar", void 0, m), S),
              t),
            ]);
          y || S
            ? (n = f(
                "span",
                {
                  "data-testid": "other",
                  className: Object(d.d)("Avatar", "image"),
                },
                y ||
                  f(s.V, {
                    "data-testid": "placeholder",
                    role:
                      (null === b || void 0 === b ? void 0 : b.role) || "img",
                    "aria-label":
                      0 ===
                        (null === b ||
                        void 0 === b ||
                        null === (c = b.alt) ||
                        void 0 === c
                          ? void 0
                          : c.length) ||
                      null === b ||
                      void 0 === b
                        ? void 0
                        : b.alt,
                  })
              ))
            : (n = f(
                "img",
                Object(r.a)(
                  {
                    "data-testid": "image",
                    className: Object(d.d)("Avatar", "image"),
                    alt: (null === b || void 0 === b ? void 0 : b.alt) || "",
                  },
                  b
                )
              ));
          return f(
            l.a,
            Object(r.a)({ className: T, as: O }, j, {
              tabIndex: w ? "0" : "-1",
            }),
            n
          );
        };
      (b.Size = a), (b.Class = "Avatar");
    },
    tF9N: function (e, t, n) {},
    tN2f: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return d;
        });
      var a,
        r = n("HALo"),
        i = n("dhJC"),
        o = n("q1tI"),
        c = n("zAUr"),
        u = n("+5ea"),
        s = (n("laJw"), o.createElement);
      !(function (e) {
        (e.LargeMargin = "largeMargin"),
          (e.MediumMargin = "mediumMargin"),
          (e.SmallMargin = "smallMargin"),
          (e.XSmallMargin = "xsmallMargin");
      })(a || (a = {}));
      var d = function (e) {
        var t = e.children,
          n = e.variant,
          o = void 0 === n ? a.LargeMargin : n,
          d = Object(i.a)(e, ["children", "variant"]);
        if (t) {
          var l = Object(c.a)([
            "Divider",
            Object(u.d)("Divider", void 0, "contents"),
            Object(u.d)("Divider", void 0, o),
          ]);
          return s("div", Object(r.a)({ className: Object(c.a)(l) }, d), t);
        }
        var f = Object(c.a)(["Divider", Object(u.d)("Divider", void 0, o)]);
        return s("hr", Object(r.a)({ className: f, role: "presentation" }, d));
      };
    },
    tZtT: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      }),
        n.d(t, "c", function () {
          return v;
        });
      var a = n("vJKn"),
        r = n.n(a),
        i = n("rg98"),
        o = n("Prh1"),
        c = n("MEx9"),
        u = n("XoTv"),
        s = n("52tz"),
        d = { "X-Goodreads-AppSync": "sirius-server-authenticate" },
        l = { status: 401 },
        f = function (e) {
          return { status: 200, jwtToken: e };
        },
        v = function (e) {
          return { Name: "AuthStatus", Value: e ? "SignedIn" : "SignedOut" };
        },
        m = (function () {
          var e = Object(i.a)(
            r.a.mark(function e(t) {
              var n;
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(s.a)({
                          cookieString: t,
                          dataSource: o.a.get(c.c, t),
                          headers: d,
                        })
                      );
                    case 2:
                      return (n = e.sent), e.abrupt("return", n);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        b = (function () {
          var e = Object(i.a)(
            r.a.mark(function e(t, n) {
              var a,
                i,
                s,
                d,
                v,
                b,
                g = arguments;
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = g.length > 2 && void 0 !== g[2] && g[2]),
                        "undefined" !== typeof (i = t.headers.cookie))
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return", l);
                    case 4:
                      return (
                        (s = i.toString()),
                        (d = o.a.get(c.d, s)),
                        (e.next = 8),
                        u.a.isJwtValid(d)
                      );
                    case 8:
                      if (!e.sent || a) {
                        e.next = 11;
                        break;
                      }
                      return e.abrupt("return", f(d));
                    case 11:
                      return (e.next = 13), m(s);
                    case 13:
                      if (
                        "undefined" !== typeof (v = e.sent) &&
                        0 !== v.length
                      ) {
                        e.next = 16;
                        break;
                      }
                      return e.abrupt("return", l);
                    case 16:
                      if (
                        (n.setHeader("Set-Cookie", v),
                        "undefined" !==
                          typeof (b = o.a.getResponseCookie(c.d, v.toString())))
                      ) {
                        e.next = 20;
                        break;
                      }
                      return e.abrupt("return", l);
                    case 20:
                      return (
                        (t.headers.cookie = ""
                          .concat(c.d, "=")
                          .concat(b, ";")
                          .concat(t.headers.cookie)),
                        e.abrupt("return", f(b))
                      );
                    case 22:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })();
      t.b = {
        getAuthToken: b,
        getAuthStatusDimensionFromDocument: function () {
          var e;
          return {
            Name: "AuthStatus",
            Value:
              "1" ===
              (null === (e = document.getElementById("Header")) || void 0 === e
                ? void 0
                : e.getAttribute("data-auth"))
                ? "SignedIn"
                : "SignedOut",
          };
        },
      };
    },
    tg5O: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      }),
        n.d(t, "b", function () {
          return v;
        });
      var a = n("cpVT"),
        r = n("q1tI"),
        i = n("FGyW"),
        o = (n("1d9J"), n("Qu/W")),
        c = n("4RhV"),
        u = r.createElement;
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var l = {
          position: "bottom-left",
          autoClose: 6e3,
          hideProgressBar: !1,
          closeOnClick: !0,
          pauseOnHover: !0,
          draggable: !0,
          progress: void 0,
          role: "alert",
          className: "Toast",
        },
        f = {
          success: function (e) {
            i.b.success(e, d(d({}, l), {}, { icon: u(o.i, null) }));
          },
          failure: function (e) {
            i.b.error(
              e,
              d(d({}, l), {}, { autoClose: !1, icon: u(o.q, null) })
            );
          },
          generic: function (e) {
            Object(i.b)(e, l);
          },
          announce: function (e) {
            Object(i.b)(
              e,
              d(
                d({}, l),
                {},
                {
                  className: "u-sr-only",
                  closeButton: !1,
                  closeOnClick: !1,
                  draggable: !1,
                  pauseOnHover: !1,
                }
              )
            );
          },
        },
        v = function () {
          var e = Object(r.useContext)(c.b).theme;
          return u(i.a, {
            "aria-live": "assertive",
            theme: e === c.a.Light ? "dark" : "light",
            limit: 5,
          });
        };
    },
    uVRh: function (e, t, n) {},
    udIM: function (e, t, n) {},
    umdf: function (e, t, n) {},
    vbYf: function (e, t, n) {},
    "vm/7": function (e) {
      e.exports = JSON.parse(
        '{"Development":{"auth":{"oidcClientId":"63dc24e7c611e6f1792f813058f21560bd8c6938d54a.goodreads.com","oidcIssuer":"https://playground.web.goodreads.a2z.com"},"graphql":{"apiKey":"da2-g2zkobxoprgn3hgxy434lkypeq","identityPoolId":"us-east-1:12c836b7-0bd9-41a9-8267-d9680d257127","endpoint":"https://4y4myx77anb2fitkettky2x3q4.appsync-api.us-east-1.amazonaws.com/graphql","region":"us-east-1"},"publishWebVitalMetrics":false,"showAds":true,"shortName":"Dev"},"Beta":{"auth":{"oidcClientId":"63dc24e7c611e6f1792f813058f21560bd8c6938d54a.goodreads.com","oidcIssuer":"https://playground.web.goodreads.a2z.com"},"graphql":{"apiKey":"da2-g2zkobxoprgn3hgxy434lkypeq","identityPoolId":"us-east-1:12c836b7-0bd9-41a9-8267-d9680d257127","endpoint":"https://4y4myx77anb2fitkettky2x3q4.appsync-api.us-east-1.amazonaws.com/graphql","region":"us-east-1"},"publishWebVitalMetrics":false,"showAds":false,"shortName":"Beta"},"Preprod":{"auth":{"oidcClientId":"63dc24e7c611e6f1792f813058f21560bd8c6938d54a.goodreads.com","oidcIssuer":"https://www.goodreads.com"},"graphql":{"apiKey":"da2-e4uxu6xzrvaqpkyvup7fsk37ta","identityPoolId":"us-east-1:b9bb6c1c-2e45-4ac2-b358-87324b39db88","endpoint":"https://qpzjwcpgpzdg5bn6omaa65kku4.appsync-api.us-east-1.amazonaws.com/graphql","region":"us-east-1"},"publishWebVitalMetrics":false,"showAds":true,"shortName":"Preprod"},"Production":{"auth":{"oidcClientId":"63dc24e7c611e6f1792f813058f21560bd8c6938d54a.goodreads.com","oidcIssuer":"https://www.goodreads.com"},"graphql":{"apiKey":"da2-xpgsdydkbregjhpr6ejzqdhuwy","identityPoolId":"us-east-1:16da77fa-4392-4d35-bd47-bb0e2d3f73be","endpoint":"https://kxbwmqov6jgg3daaamb744ycu4.appsync-api.us-east-1.amazonaws.com/graphql","region":"us-east-1"},"publishWebVitalMetrics":true,"showAds":true,"shortName":"Prod"}}'
      );
    },
    wV3N: function (e, t, n) {
      "use strict";
      var a = n("q1tI"),
        r = n.n(a);
      n("3H69"), n("+5ea"), n("Qu/W"), n("8y1Z"), n("50TJ"), r.a.createElement;
    },
    wXDD: function (e, t, n) {},
    wzmU: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return b.a;
      }),
        n.d(t, "g", function () {
          return g.c;
        }),
        n.d(t, "i", function () {
          return g.d;
        }),
        n.d(t, "b", function () {
          return g.a;
        }),
        n.d(t, "c", function () {
          return g.b;
        }),
        n.d(t, "a", function () {
          return p.a;
        }),
        n.d(t, "h", function () {
          return p.d;
        }),
        n.d(t, "d", function () {
          return p.b;
        }),
        n.d(t, "f", function () {
          return m;
        });
      var a = n("q1tI"),
        r = n.n(a),
        i = n("7+Ly"),
        o = n("nOHt"),
        c = n("JMfI"),
        u = n("pv95"),
        s = n("oAPw"),
        d = n("DFlP"),
        l = n("tZtT"),
        f = r.a.createElement,
        v = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = e ? removeEventListener : addEventListener;
          "onpagehide" in self
            ? t("pagehide", i.b.sendBatchedBeacon, { capture: !0 })
            : (t("unload", i.b.sendBatchedBeacon, { capture: !0 }),
              t("beforeunload", i.b.sendBatchedBeacon, { capture: !0 })),
            t(
              "visibilitychange",
              function () {
                "hidden" === document.visibilityState &&
                  i.b.sendBatchedBeacon();
              },
              { capture: !0 }
            );
        },
        m = function (e) {
          var t,
            n,
            r = e.children,
            m = e.logPageHit,
            g = void 0 === m || m,
            C = Object(a.useState)(i.b.getRequestId())[0],
            h = { pageHitRequestId: C },
            L =
              null !==
                (t =
                  null === (n = Object(a.useContext)(c.a)) || void 0 === n
                    ? void 0
                    : n.signedIn) &&
              void 0 !== t &&
              t,
            O = Object(o.useRouter)();
          Object(a.useEffect)(function () {
            var e = i.b.clearClickstreamStorage(!0) ? 1 : 0;
            if ((u.a.reportCount(s.a.ClickstreamBatchFailed, [], e), v(), g)) {
              i.d.recordPageLoadEnd(C, L), i.b.logPageHit(C, L);
              var t = [Object(l.c)(L)];
              null != O && null != O.asPath && t.push(Object(d.a)(O.asPath)),
                u.a.reportCount(s.a.PageHit, t),
                o.Router.events.on("routeChangeStart", function () {
                  i.d.recordClientLoadStart();
                });
            }
            return function () {
              return v(!0);
            };
          }, []);
          var y = Object(a.useContext)(p.b),
            k = y.state,
            w = y.dispatch;
          return (
            Object(a.useEffect)(
              function () {
                k.pageHitRequestId !== C &&
                  w({ type: p.a.SetPageHitRequestId, pageHitRequestId: C });
              },
              [k]
            ),
            f(b.a, { addState: h }, r)
          );
        },
        b = n("9Hen"),
        g =
          (r.a.createElement,
          "var ue_t0=window.ue_t0||+new Date();".concat(
            '(function(e){var c=e,a={main_scope:"mainscopecsm",q:[],t0:c.ue_t0||+new Date(),d:g};function g(h){return +new Date()-(h?0:a.t0)}function d(h){return function(){a.q.push({n:h,a:arguments,t:a.d()})}}function b(k,j,h){var i={m:k,f:j,l:h,fromOnError:1,args:arguments};c.ueLogError(i);return false}b.skipTrace=1;e.onerror=b;function f(){c.uex("ld")}if(e.addEventListener){e.addEventListener("load",f,false)}else{if(e.attachEvent){e.attachEvent("onload",f)}}a.tag=d("tag");a.log=d("log");a.reset=d("rst");c.ue_csm=c;c.ue=a;c.ueLogError=d("err");c.ues=d("ues");c.uet=d("uet");c.uex=d("uex");c.uet("ue")})(window);(function(e,d){var a=e.ue||{};function c(g){if(!g){return}var f=d.head||d.getElementsByTagName("head")[0]||d.documentElement,h=d.createElement("script");h.async="async";h.src=g;f.insertBefore(h,f.firstChild)}function b(){var k=e.ue_cdn||"z-ecx.images-amazon.com",g=e.ue_cdns||"images-na.ssl-images-amazon.com",j="/images/G/01/csminstrumentation/",h=e.ue_file||"ue-full-ef584a44e8ea58e3d4d928956600a9b6._V1_.js",f,i;if(h.indexOf("NSTRUMENTATION_FIL")>=0){return}if("ue_https" in e){f=e.ue_https}else{f=e.location&&e.location.protocol=="https:"?1:0}i=f?"https://":"http://";i+=f?g:k;i+=j;i+=h;c(i)}if(!e.ue_inline){b()}a.uels=c;e.ue=a})(window,document);'
          ),
          r.a.createElement,
          n("xmCk")),
        p = n("7CWt");
    },
    x7PL: function (e, t, n) {},
    xmCk: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return l;
      }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "a", function () {
          return v;
        }),
        n.d(t, "b", function () {
          return m;
        });
      var a = n("HALo"),
        r = n("dhJC"),
        i = n("q1tI"),
        o = n.n(i),
        c = (n("YFqc"), n("wzmU")),
        u = n("FhZt"),
        s = n("E7l3"),
        d = o.a.createElement,
        l = function (e, t, n) {
          var a = e.includes("?") ? "&" : "?",
            r = t.refTags.concat([n]).join("_");
          return r ? "".concat(e).concat(a, "ref=").concat(r) : e;
        },
        f = function (e, t) {
          var n = Object(i.useContext)(c.d);
          return null == e ? null : l(e, n.state, t);
        },
        v = function (e) {
          var t = e.refTag,
            n = void 0 === t ? u.f.Link : t,
            i = e.href,
            o = Object(r.a)(e, ["refTag", "href"]),
            c = f(i, n);
          return d("a", Object(a.a)({ href: c, tabIndex: 0 }, o));
        },
        m = function (e) {
          var t = e.refTag,
            n = void 0 === t ? u.f.Link : t,
            i = e.href,
            o = Object(r.a)(e, ["refTag", "href"]),
            c = f(i, n);
          return d(s.Button, Object(a.a)({ href: c }, o));
        };
    },
    yPNx: function (e, t, n) {
      "use strict";
      var a = n("sELm");
      n.d(t, "a", function () {
        return a.a;
      });
    },
    yaQO: function (e, t, n) {},
    yoKB: function (e, t, n) {},
    yugg: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return b;
        });
      var a,
        r,
        i = n("HALo"),
        o = n("dhJC"),
        c = n("cpVT"),
        u = n("q1tI"),
        s = n.n(u),
        d = n("zAUr"),
        l = n("+5ea"),
        f = n("5vdI"),
        v = (n("RjQK"), s.a.createElement);
      !(function (e) {
        (e.Title = "title"),
          (e.H1 = "h1"),
          (e.H2 = "h2"),
          (e.H3 = "h3"),
          (e.H4 = "h4"),
          (e.H5 = "h5"),
          (e.H6 = "h6"),
          (e.Title1 = "title1"),
          (e.Title2 = "title2"),
          (e.Title2Static = "title2-static"),
          (e.Title3 = "title3"),
          (e.Title3Secondary = "title3-secondary"),
          (e.Title4 = "title4"),
          (e.Title4Secondary = "title4-secondary"),
          (e.Body1 = "body1"),
          (e.Body2 = "body2"),
          (e.Body3 = "body3"),
          (e.Body4 = "body4"),
          (e.Caption = "caption");
      })(r || (r = {}));
      var m =
          ((a = {
            title: "h1",
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            title1: "h1",
            title2: "h2",
            "title2-static": "h2",
            title3: "h3",
          }),
          Object(c.a)(a, r.Title3Secondary, "h3"),
          Object(c.a)(a, "title4", "h4"),
          Object(c.a)(a, r.Title4Secondary, "h4"),
          a),
        b = function (e) {
          var t,
            n = e.color,
            a = e.tag,
            u = e.fontOptions,
            s = e.preset,
            f = e.truncateTo,
            b = e.children,
            g = Object(o.a)(e, [
              "color",
              "tag",
              "fontOptions",
              "preset",
              "truncateTo",
              "children",
            ]),
            p =
              null === u ||
              void 0 === u ||
              null === (t = u.transforms) ||
              void 0 === t
                ? void 0
                : t.map(function (e) {
                    return Object(l.d)("Text", e);
                  });
          (s !== r.Title1 && s !== r.Title2) ||
            !(null === u || void 0 === u ? void 0 : u.weight) ||
            console.warn(
              "Title 1 & 2 presets and font-weight override cannot be used together. Please confirm with your designer."
            );
          var C = [
              "Text",
              p,
              Object(c.a)({}, Object(l.d)("Text", s), s),
              Object(c.a)(
                {},
                Object(l.d)(
                  "Text",
                  null === u || void 0 === u ? void 0 : u.size
                ),
                null === u || void 0 === u ? void 0 : u.size
              ),
              Object(c.a)(
                {},
                Object(l.d)(
                  "Text",
                  null === u || void 0 === u ? void 0 : u.family
                ),
                null === u || void 0 === u ? void 0 : u.family
              ),
              Object(c.a)(
                {},
                Object(l.d)("Text", "italic"),
                null === u || void 0 === u ? void 0 : u.italic
              ),
              Object(c.a)(
                {},
                Object(l.d)(
                  "Text",
                  null === u || void 0 === u ? void 0 : u.weight
                ),
                null === u || void 0 === u ? void 0 : u.weight
              ),
              Object(c.a)({}, Object(l.d)("Text", n), n),
              Object(c.a)({}, Object(l.d)("Text", "truncate".concat(f)), f),
            ],
            h = (function (e, t) {
              return e || m[t] || "span";
            })(a, s);
          return v(h, Object(i.a)({ className: Object(d.a)(C) }, g), b);
        };
      (b.Preset = r), (b.Colors = f.a);
    },
    "z+5B": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var a = n("q1tI"),
        r = a.useLayoutEffect;
    },
    z9ww: function (e, t, n) {},
    zv3c: function (e, t, n) {},
  },
  [[175, 16, 10, 5, 4, 0, 14, 6, 2, 7, 1, 8, 13, 9, 12, 3, 11, 15]],
]);
