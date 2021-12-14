(this["webpackJsonpjson-to-dart-web"] = this["webpackJsonpjson-to-dart-web"] || []).push([
    [0],
    {
        212: function (t, e, n) {},
        621: function (t, e, n) {},
        622: function (t, e, n) {
            "use strict";
            n.r(e);
            var c = n(195),
                i = n(669),
                a = n(670),
                o = n(196),
                s = n(0),
                r = n.n(s),
                l = n(9),
                h = n.n(l),
                d = n(51),
                u = n(48),
                j = n(63),
                p = n(21),
                b = (n(212), n(25)),
                y = n(24),
                m = n(657),
                f = n(623),
                O = n(180),
                g = n(186),
                v = n(658),
                x = n(5),
                C = Object(b.a)(
                    Object(x.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "24px",
                        viewBox: "0 0 24 24",
                        width: "24px",
                        children: [
                            Object(x.jsx)("path", { d: "M0 0h24v24H0z", fill: "none" }),
                            Object(x.jsx)("path", {
                                d: "M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z",
                            }),
                        ],
                    }),
                    "copy"
                ),
                S = function (t) {
                    var e = t.code,
                        n = t.setMessage,
                        c = t.splitClassView,
                        i = t.setSplitClassView,
                        a = t.onDownload,
                        o = t.filename,
                        s = Object(y.a)();
                    return Object(x.jsxs)("div", {
                        style: { marginBottom: 16 },
                        children: [
                            Object(x.jsxs)("div", {
                                style: { display: "flex" },
                                children: [
                                    Object(x.jsx)("div", {
                                        style: { flex: 1 },
                                        children: i
                                            ? Object(x.jsx)(m.a, {
                                                  color: "secondary",
                                                  variant: "outlined",
                                                  onClick: function (t) {
                                                      return i(!c);
                                                  },
                                                  style: { marginRight: 8 },
                                                  children: c ? "Single class" : "Split Class",
                                              })
                                            : "",
                                    }),
                                    i || o
                                        ? Object(x.jsxs)(m.a, {
                                              variant: "outlined",
                                              style: { marginRight: 8 },
                                              download: o + ".dart",
                                              href: a ? "" : "data:application/octet-stream;charset=utf-16le;base64," + btoa(e),
                                              target: "_blank",
                                              onClick: a,
                                              children: [Object(x.jsx)(v.a, { color: "secondary" }), "\xa0", Object(x.jsx)(f.a, { color: "secondary", variant: "subtitle2", children: "Download" })],
                                          })
                                        : "",
                                    Object(x.jsxs)(m.a, {
                                        variant: "outlined",
                                        onClick: function (t) {
                                            g.Clipboard.copy(e), n("Copied...");
                                        },
                                        children: [Object(x.jsx)(C, { style: { color: s.palette.text.secondary } }), "\xa0", Object(x.jsx)(f.a, { color: "textSecondary", variant: "subtitle2", children: "Copy" })],
                                    }),
                                ],
                            }),
                            Object(x.jsx)(O.a, { source: "```dart".concat("\n", e, "\n", "```") }),
                        ],
                    });
                },
                k = n(119),
                A = n(191),
                w = n(603),
                M = (function () {
                    function t(e, n, c, i) {
                        var a = this;
                        Object(k.a)(this, t),
                            (this.classNames = []),
                            (this.classModels = []),
                            (this.indentText = void 0),
                            (this.shouldCheckType = void 0),
                            (this.nullSafety = void 0),
                            (this.includeCopyWitMethod = !1),
                            (this.mergeArrayApproach = !0),
                            (this.nullValueDataType = void 0),
                            (this.handlerSymbol = void 0),
                            (this.removeNull = function (t) {
                                return Object.keys(t)
                                    .filter(function (e) {
                                        return null !== t[e];
                                    })
                                    .reduce(function (e, n) {
                                        return Object(p.a)(Object(p.a)({}, e), {}, Object(u.a)({}, n, t[n]));
                                    }, {});
                            }),
                            (this.r = function (t) {
                                return void 0 !== t.typeRef ? "(e)=>e==null?[]:(e as List).map(".concat(a.r(t.typeRef), ").toList()") : "(e)=>".concat(t.type, ".fromJson(e)");
                            }),
                            (this.p = function (t) {
                                return void 0 !== t.typeRef ? "(e)=>e?.map(".concat(a.p(t.typeRef), ")?.toList() ?? []") : "(e)=>e.toJson()";
                            }),
                            (this.indentText = " ".repeat(e)),
                            (this.shouldCheckType = null !== n && void 0 !== n && n),
                            (this.nullValueDataType = null !== c && void 0 !== c ? c : "dynamic"),
                            (this.nullSafety = null === i || void 0 === i || i),
                            (this.handlerSymbol = i ? "?" : "");
                    }
                    return (
                        Object(A.a)(t, [
                            {
                                key: "setIncludeCopyWitMethod",
                                value: function (t) {
                                    this.includeCopyWitMethod = t;
                                },
                            },
                            {
                                key: "setMergeArrayApproach",
                                value: function (t) {
                                    this.mergeArrayApproach = t;
                                },
                            },
                            {
                                key: "addClass",
                                value: function (t, e) {
                                    this.classModels.splice(0, 0, { code: e, className: t });
                                },
                            },
                            {
                                key: "findDataType",
                                value: function (t, e) {
                                    var n = "dynamic",
                                        c = new T();
                                    if (null === e || void 0 === e) (n = this.nullValueDataType), (c.isPrimitive = !0);
                                    else if (Number.isInteger(e)) (n = "int"), (c.isPrimitive = !0);
                                    else if ("number" === typeof e) (n = "double"), (c.isPrimitive = !0);
                                    else if ("string" === typeof e) (n = "String"), (c.isPrimitive = !0);
                                    else if ("boolean" === typeof e) (n = "bool"), (c.isPrimitive = !0);
                                    else if (e instanceof Array) {
                                        var i = e;
                                        if (((c.isArray = !0), 0 === i.length)) n = "List<dynamic>";
                                        else {
                                            var a = this.findDataType(t, i[0]);
                                            (c.typeRef = a), (c.isPrimitive = a.isPrimitive), (n = "List<".concat(a.type, ">"));
                                        }
                                    } else "object" === typeof e && ((c.isObject = !0), (n = this.toClassName(t)), this.parse(n, e));
                                    return (c.type = n), c;
                                },
                            },
                            {
                                key: "parse",
                                value: function (t, e) {
                                    var n = this;
                                    (t = this.toClassName(t)), this.classNames.push(t);
                                    var c = [],
                                        i = [],
                                        a = [],
                                        o = [],
                                        s = [],
                                        r = [];
                                    e &&
                                        (Array.isArray(e) &&
                                            e.length > 0 &&
                                            (e = this.mergeArrayApproach
                                                ? e.reduce(function (t, e) {
                                                      return Object(p.a)(Object(p.a)({}, t), n.removeNull(e));
                                                  }, {})
                                                : e[0]),
                                        Object.entries(e).forEach(function (t) {
                                            var e = t[0],
                                                l = t[1],
                                                h = n.findDataType(e, l),
                                                d = "".concat(h.type).concat(n.handlerSymbol),
                                                u = w(e);
                                            c.push(n.toCode(1, d, u)),
                                                n.addFromJsonCode(e, h, a),
                                                n.addToJsonCode(e, h, o),
                                                n.includeCopyWitMethod && (i.push(n.toMethodParams(2, d, u)), r.push("".concat(n.indent(2)).concat(u, ": ").concat(u, " ?? this.").concat(u))),
                                                s.push("this.".concat(u));
                                        }));
                                    var l = this.includeCopyWitMethod
                                            ? "\n\n"
                                                  .concat(this.indent(1))
                                                  .concat(t, " copyWith({\n")
                                                  .concat(i.join("\n"), "\n")
                                                  .concat(this.indent(1), "}) => ")
                                                  .concat(t, "(")
                                                  .concat(r.length ? "{\n".concat(r.join(",\n"), ",\n").concat(this.indent(1), "}") : "", ");")
                                            : "",
                                        h = c.length ? "\n".concat(c.join("\n"), "\n") : "",
                                        d = "\nclass "
                                            .concat(t, " {")
                                            .concat(h, "\n")
                                            .concat(this.indent(1))
                                            .concat(t, "(")
                                            .concat(s.length ? "{".concat(s.join(", "), "}") : "", ");\n\n")
                                            .concat(this.indent(1))
                                            .concat(t, ".fromJson(Map<String, dynamic> json) {\n")
                                            .concat(a.join("\n"), "\n")
                                            .concat(this.indent(1), "}\n\n")
                                            .concat(this.indent(1), "Map<String, dynamic> toJson() {\n")
                                            .concat(this.indent(2), "final Map<String, dynamic> data = new Map<String, dynamic>();\n")
                                            .concat(o.join("\n"), "\n")
                                            .concat(this.indent(2), "return data;\n")
                                            .concat(this.indent(1), "}")
                                            .concat(this.includeCopyWitMethod ? l : "", "\n}");
                                    return this.addClass(t, d), this.classModels;
                                },
                            },
                            {
                                key: "toClassName",
                                value: function (t) {
                                    for (var e = 0, n = (t = w(t, { pascalCase: !0 })); this.classNames.includes(n); ) ++e, (n = "".concat(t).concat(e));
                                    return n;
                                },
                            },
                            {
                                key: "addFromJsonCode",
                                value: function (t, e, n) {
                                    var c = e.type,
                                        i = "this.".concat(w(t)),
                                        a = 2;
                                    this.shouldCheckType &&
                                        "dynamic" !== c &&
                                        ((a = 3),
                                        e.isObject
                                            ? n.push(this.toCondition(2, 'if(json["'.concat(t, '"] is Map)')))
                                            : e.isArray
                                            ? n.push(this.toCondition(2, 'if(json["'.concat(t, '"] is List)')))
                                            : n.push(this.toCondition(2, 'if(json["'.concat(t, '"] is ').concat(c, ")")))),
                                        e.isObject
                                            ? n.push(this.toCode(a, i, "=", 'json["'.concat(t, '"] == null ? null : ').concat(c, '.fromJson(json["').concat(t, '"])')))
                                            : e.isArray
                                            ? void 0 === e.typeRef
                                                ? n.push(this.toCode(a, i, "=", 'json["'.concat(t, '"] ?? []')))
                                                : e.isPrimitive
                                                ? n.push(this.toCode(a, i, "=", 'json["'.concat(t, '"]==null ? null : List<').concat(e.typeRef.type, '>.from(json["').concat(t, '"])')))
                                                : n.push(this.toCode(a, i, "=", 'json["'.concat(t, '"]==null ? null : (json["').concat(t, '"] as List).map(').concat(this.r(e.typeRef), ").toList()")))
                                            : n.push(this.toCode(a, i, "=", 'json["'.concat(t, '"]')));
                                },
                            },
                            {
                                key: "addToJsonCode",
                                value: function (t, e, n) {
                                    var c = "this.".concat(w(t)),
                                        i = 'data["'.concat(t, '"]');
                                    e.isObject
                                        ? (n.push(this.toCondition(2, "if(".concat(c, " != null)"))), n.push(this.toCode(3, i, "=", "".concat(c).concat(this.handlerSymbol, ".toJson()"))))
                                        : e.isArray
                                        ? (n.push(this.toCondition(2, "if(".concat(c, " != null)"))),
                                          e.isPrimitive || void 0 === e.typeRef ? n.push(this.toCode(3, i, "=", c)) : n.push(this.toCode(3, i, "=", "".concat(c).concat(this.handlerSymbol, ".map(").concat(this.p(e.typeRef), ").toList()"))))
                                        : n.push(this.toCode(2, i, "=", c));
                                },
                            },
                            {
                                key: "indent",
                                value: function (t) {
                                    return this.indentText.repeat(t);
                                },
                            },
                            {
                                key: "toCode",
                                value: function (t) {
                                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), c = 1; c < e; c++) n[c - 1] = arguments[c];
                                    return "".concat(this.indent(t)).concat(n.join(" "), ";");
                                },
                            },
                            {
                                key: "toMethodParams",
                                value: function (t) {
                                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), c = 1; c < e; c++) n[c - 1] = arguments[c];
                                    return "".concat(this.indent(t)).concat(n.join(" "), ",");
                                },
                            },
                            {
                                key: "toCondition",
                                value: function (t) {
                                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), c = 1; c < e; c++) n[c - 1] = arguments[c];
                                    return "".concat(this.indent(t)).concat(n.join(" "));
                                },
                            },
                        ]),
                        t
                    );
                })(),
                T = function t() {
                    Object(k.a)(this, t), (this.type = "dynamic"), (this.defaultValue = "''"), (this.typeRef = void 0), (this.isObject = !1), (this.isArray = !1), (this.isPrimitive = !1);
                },
                N = M,
                V = n(659),
                _ = n(660),
                J = n(672),
                W = n(661),
                D = n(624),
                P = n(671),
                R = n(662),
                E = n(663),
                I = n(673),
                L = n(675),
                z = n(664),
                F = n(666),
                H = n(192),
                B = n.n(H),
                G = n(193),
                $ = (n(610), n(611), n(612), n(194)),
                U = n.n($),
                Z = n(665),
                Q = n(667),
                q = n(668),
                K = Object(b.a)(
                    Object(x.jsx)("svg", {
                        focusable: "false",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: Object(x.jsx)("path", {
                            d:
                                "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3",
                        }),
                    }),
                    "github"
                );
            var X = function (t) {
                    return (
                        t.charAt(0).toLowerCase() +
                        t
                            .slice(1)
                            .replace(/\W+/g, " ")
                            .replace(/([a-z])([A-Z])([a-z])/g, "$1 $2$3")
                            .split(/\B(?=[A-Z]{2,})/)
                            .join(" ")
                            .split(" ")
                            .join("_")
                            .toLowerCase()
                    );
                },
                Y = function () {
                    var t,
                        e = localStorage.getItem("state"),
                        n = { checkType: !1, nullSafety: !0, mergeArrayApproach: !0, includeCopyWith: !1 };
                    try {
                        n = Object(p.a)(Object(p.a)({}, n), JSON.parse(e || ""));
                    } catch (nt) {}
                    var c = Object(s.useRef)("Example"),
                        i = Object(s.useRef)("dynamic"),
                        a = Object(s.useRef)(""),
                        o = Object(s.useState)(n),
                        l = Object(j.a)(o, 2),
                        h = l[0],
                        b = l[1],
                        y = Object(s.useState)("true" === localStorage.getItem("splitClass")),
                        O = Object(j.a)(y, 2),
                        g = O[0],
                        v = O[1],
                        C = Object(s.useState)(""),
                        k = Object(j.a)(C, 2),
                        A = k[0],
                        w = k[1],
                        M = Object(s.useState)([]),
                        T = Object(j.a)(M, 2),
                        H = T[0],
                        $ = T[1],
                        Y = Object(d.b)(),
                        tt = Object(d.c)(function (t) {
                            return t.environment.theme;
                        });
                    Object(s.useEffect)(
                        function () {
                            localStorage.setItem("state", JSON.stringify(h));
                        },
                        [h]
                    ),
                        Object(s.useEffect)(
                            function () {
                                localStorage.setItem("splitClass", "".concat(g));
                            },
                            [g]
                        );
                    var et = function (t) {
                        b(Object(p.a)(Object(p.a)({}, h), {}, Object(u.a)({}, t.target.name, t.target.checked)));
                    };
                    return Object(x.jsxs)("div", {
                        children: [
                            Object(x.jsx)(V.a, {
                                position: "static",
                                children: Object(x.jsxs)(_.a, {
                                    children: [
                                        Object(x.jsx)("div", { style: { flex: 1 }, children: Object(x.jsx)(J.a, { xsDown: !0, children: Object(x.jsx)(f.a, { variant: "subtitle1", children: "Json To Dart" }) }) }),
                                        Object(x.jsxs)(m.a, {
                                            variant: "outlined",
                                            href: "http://arrahmanbd.blogspot.com",
                                            target: "_blank",
                                            color: "inherit",
                                            children: [
                                                Object(x.jsx)("img", {
                                                    width: "24",
                                                    alt: "Visual Studio Code 1.35 icon",
                                                    src: "https://lh3.googleusercontent.com/ogw/ADea4I6CpVYKuqTjcoyKvxUIrboTybJtleh_1L2gZU6E=s83-c-mo",
                                                }),
                                                "\xa0\xa0 Extension",
                                            ],
                                        }),
                                        "\xa0\xa0",
                                        Object(x.jsxs)(m.a, { variant: "outlined", href: "https://github.com/arrahmanbd", target: "_blank", color: "inherit", children: [Object(x.jsx)(K, {}), " \xa0\xa0Github"] }),
                                    ],
                                }),
                            }),
                            Object(x.jsx)("div", {
                                style: { margin: 20 },
                                children: Object(x.jsxs)(W.a, {
                                    container: !0,
                                    spacing: 4,
                                    children: [
                                        Object(x.jsxs)(W.a, {
                                            item: !0,
                                            md: 6,
                                            sm: 12,
                                            xs: 12,
                                            children: [
                                                Object(x.jsx)(f.a, { style: { margin: "4px 4px" }, children: "JSON" }),
                                                Object(x.jsx)("div", {
                                                    style: { border: "1px solid", marginTop: 8 },
                                                    children: Object(x.jsx)(B.a, {
                                                        mode: "json5",
                                                        height: "300px",
                                                        width: "100%",
                                                        theme: "light" === tt ? "github" : "idle_fingers",
                                                        onChange: function (t) {
                                                            return (a.current = t);
                                                        },
                                                        name: "UNIQUE_ID_OF_DIV",
                                                        editorProps: { $blockScrolling: !0 },
                                                    }),
                                                }),
                                                Object(x.jsx)("div", { style: { height: 16 } }),
                                                Object(x.jsx)(D.a, {
                                                    children: Object(x.jsxs)("div", {
                                                        style: { padding: 16 },
                                                        children: [
                                                            Object(x.jsx)(P.a, {
                                                                defaultValue: c.current,
                                                                label: "Class Name",
                                                                fullWidth: !0,
                                                                onChange: function (t) {
                                                                    return (c.current = t.target.value);
                                                                },
                                                            }),
                                                            Object(x.jsx)("div", { style: { height: 16 } }),
                                                            Object(x.jsx)(P.a, {
                                                                defaultValue: i.current,
                                                                label: "Data Type for null value",
                                                                fullWidth: !0,
                                                                onChange: function (t) {
                                                                    return (i.current = t.target.value);
                                                                },
                                                            }),
                                                            Object(x.jsx)("div", { style: { height: 16 } }),
                                                            Object(x.jsxs)(R.a, {
                                                                row: !0,
                                                                children: [
                                                                    Object(x.jsx)(E.a, { control: Object(x.jsx)(I.a, { checked: h.nullSafety, onChange: et, name: "nullSafety" }), label: "Null-Safety" }),
                                                                    Object(x.jsx)(E.a, { control: Object(x.jsx)(I.a, { checked: h.mergeArrayApproach, onChange: et, name: "mergeArrayApproach" }), label: "Merge Array Approach" }),
                                                                    Object(x.jsx)(E.a, { control: Object(x.jsx)(I.a, { checked: h.checkType, onChange: et, name: "checkType" }), label: "Type Checking" }),
                                                                    Object(x.jsx)(E.a, {
                                                                        control: Object(x.jsx)(I.a, { checked: null !== (t = h.includeCopyWith) && void 0 !== t && t, onChange: et, name: "includeCopyWith" }),
                                                                        label: Object(x.jsxs)(r.a.Fragment, {
                                                                            children: [
                                                                                Object(x.jsx)(f.a, { component: "span", style: { fontWeight: "bold" }, children: "copyWith()" }),
                                                                                Object(x.jsx)(f.a, { component: "span", children: "\xa0method" }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(x.jsx)("div", { style: { height: 16 } }),
                                                            Object(x.jsx)(m.a, {
                                                                variant: "contained",
                                                                color: "secondary",
                                                                onClick: function () {
                                                                    if (c.current.length) {
                                                                        var t = new N(4, h.checkType, i.current, h.nullSafety);
                                                                        t.setIncludeCopyWitMethod(h.includeCopyWith), t.setMergeArrayApproach(h.mergeArrayApproach);
                                                                        try {
                                                                            var e = JSON.parse(a.current),
                                                                                n = t.parse(c.current, e);
                                                                            $(n);
                                                                        } catch (nt) {
                                                                            w(nt.toString());
                                                                        }
                                                                    } else w("Please input class name");
                                                                },
                                                                children: "Generate",
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                        Object(x.jsx)(W.a, {
                                            item: !0,
                                            md: 6,
                                            sm: 12,
                                            xs: 12,
                                            children: H.length
                                                ? g && H.length > 1
                                                    ? H.map(function (t, e) {
                                                          return Object(x.jsx)(S, {
                                                              setSplitClassView: 0 === e ? v : void 0,
                                                              splitClassView: g,
                                                              onDownload:
                                                                  0 === e
                                                                      ? function () {
                                                                            var t = new U.a();
                                                                            H.forEach(function (e) {
                                                                                t.file("".concat(X(e.className), ".dart"), e.code.toString());
                                                                            }),
                                                                                t.generateAsync({ type: "blob" }).then(function (t) {
                                                                                    Object(G.saveAs)(t, H[0].className + ".zip");
                                                                                });
                                                                        }
                                                                      : void 0,
                                                              code: t.code.toString(),
                                                              setMessage: function (t) {
                                                                  return w(t);
                                                              },
                                                          });
                                                      })
                                                    : Object(x.jsx)(S, {
                                                          splitClassView: g,
                                                          filename: X(H[0].className),
                                                          setSplitClassView: H.length > 1 ? v : void 0,
                                                          code: H.map(function (t) {
                                                              return t.code;
                                                          }).join("\n"),
                                                          setMessage: function (t) {
                                                              return w(t);
                                                          },
                                                      })
                                                : "",
                                        }),
                                    ],
                                }),
                            }),
                            Object(x.jsx)(L.a, {
                                anchorOrigin: { vertical: "bottom", horizontal: "right" },
                                open: Boolean(A),
                                autoHideDuration: 6e3,
                                onClose: function (t) {
                                    return w("");
                                },
                                message: A,
                                action: Object(x.jsx)(r.a.Fragment, {
                                    children: Object(x.jsx)(z.a, {
                                        size: "small",
                                        "aria-label": "close",
                                        color: "inherit",
                                        onClick: function (t) {
                                            return w("");
                                        },
                                        children: Object(x.jsx)(Z.a, { fontSize: "small" }),
                                    }),
                                }),
                            }),
                            Object(x.jsx)(F.a, {
                                color: "secondary",
                                onClick: function (t) {
                                    Y({ type: "CHANGE_THEME", theme: "dark" === tt ? "light" : "dark" });
                                },
                                style: { position: "fixed", bottom: 16, right: 16 },
                                children: "dark" === tt ? Object(x.jsx)(Q.a, {}) : Object(x.jsx)(q.a, {}),
                            }),
                        ],
                    });
                },
                tt =
                    (n(621),
                    function () {
                        var t,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { theme: null !== (t = localStorage.getItem("theme")) && void 0 !== t ? t : "light" },
                            n = arguments.length > 1 ? arguments[1] : void 0,
                            c = n.type,
                            i = n.theme;
                        switch (c) {
                            case "CHANGE_THEME":
                                return localStorage.setItem("theme", i), Object(p.a)(Object(p.a)({}, e), {}, { theme: i });
                        }
                        return e;
                    }),
                et = function (t) {
                    t &&
                        t instanceof Function &&
                        n
                            .e(3)
                            .then(n.bind(null, 676))
                            .then(function (e) {
                                var n = e.getCLS,
                                    c = e.getFID,
                                    i = e.getFCP,
                                    a = e.getLCP,
                                    o = e.getTTFB;
                                n(t), c(t), i(t), a(t), o(t);
                            });
                },
                nt = Object(o.a)({ reducer: { environment: tt } }),
                ct = Object(c.a)({ palette: { primary: { main: "#34495e" }, secondary: { main: "#e74c3c" } } }),
                it = Object(c.a)({ palette: { type: "dark", primary: { main: "#34495e" }, secondary: { main: "#e74c3c" } } }),
                at = function () {
                    var t =
                            "light" ===
                            Object(d.c)(function (t) {
                                return t.environment.theme;
                            }),
                        e = r.a.useMemo(
                            function () {
                                return t ? ct : it;
                            },
                            [t]
                        );
                    return console.log(t, e), Object(x.jsx)(i.a, { theme: e, children: Object(x.jsxs)(i.a, { theme: e, children: [Object(x.jsx)(a.a, {}), Object(x.jsx)(ot, {})] }) });
                },
                ot = function () {
                    return Object(x.jsx)(Y, {});
                };
            h.a.render(Object(x.jsx)(r.a.StrictMode, { children: Object(x.jsx)(d.a, { store: nt, children: Object(x.jsx)(at, {}) }) }), document.getElementById("root")), et();
        },
    },
    [[622, 1, 2]],
]);
