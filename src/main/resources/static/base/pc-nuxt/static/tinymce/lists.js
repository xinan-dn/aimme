!function() {
  "use strict";
  var e, n, t, r, o, i, u, a, l, s, c = tinymce.util.Tools.resolve("tinymce.PluginManager"), f = tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"), d = tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"), m = tinymce.util.Tools.resolve("tinymce.util.VK"), p = tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"), v = tinymce.util.Tools.resolve("tinymce.util.Tools"), g = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"), h = function(e) {
    return e && "BR" === e.nodeName
  }, y = function(e) {
    return e && 3 === e.nodeType
  }, N = function(e) {
    return e && /^(OL|UL|DL)$/.test(e.nodeName)
  }, S = function(e) {
    return e && /^(OL|UL)$/.test(e.nodeName)
  }, O = function(e) {
    return e && /^(DT|DD)$/.test(e.nodeName)
  }, C = function(e) {
    return e && /^(LI|DT|DD)$/.test(e.nodeName)
  }, b = function(e) {
    return e && /^(TH|TD)$/.test(e.nodeName)
  }, L = h, T = function(e, n) {
    return n && !!e.schema.getTextBlockElements()[n.nodeName]
  }, D = function(e, n) {
    return e && e.nodeName in n
  }, E = function(e, n) {
    return !!h(n) && !(!e.isBlock(n.nextSibling) || h(n.previousSibling))
  }, w = function(e, n, t) {
    var r = e.isEmpty(n);
    return !(t && 0 < e.select("span[data-mce-type=bookmark]", n).length) && r
  }, k = function(e, n) {
    return e.isChildOf(n, e.getRoot())
  }, A = function(e, n) {
    if (y(e))
      return {
        container: e,
        offset: n
      };
    var t = f.getNode(e, n);
    return y(t) ? {
      container: t,
      offset: n >= e.childNodes.length ? t.data.length : 0
    } : t.previousSibling && y(t.previousSibling) ? {
      container: t.previousSibling,
      offset: t.previousSibling.data.length
    } : t.nextSibling && y(t.nextSibling) ? {
      container: t.nextSibling,
      offset: 0
    } : {
      container: e,
      offset: n
    }
  }, x = function(e) {
    var n = e.cloneRange()
      , t = A(e.startContainer, e.startOffset);
    n.setStart(t.container, t.offset);
    var r = A(e.endContainer, e.endOffset);
    return n.setEnd(r.container, r.offset),
    n
  }, R = g.DOM, I = function(o) {
    var i = {}
      , e = function(e) {
      var n, t, r;
      t = o[e ? "startContainer" : "endContainer"],
      r = o[e ? "startOffset" : "endOffset"],
      1 === t.nodeType && (n = R.create("span", {
        "data-mce-type": "bookmark"
      }),
      t.hasChildNodes() ? (r = Math.min(r, t.childNodes.length - 1),
      e ? t.insertBefore(n, t.childNodes[r]) : R.insertAfter(n, t.childNodes[r])) : t.appendChild(n),
      t = n,
      r = 0),
      i[e ? "startContainer" : "endContainer"] = t,
      i[e ? "startOffset" : "endOffset"] = r
    };
    return e(!0),
    o.collapsed || e(),
    i
  }, B = function(o) {
    function e(e) {
      var n, t, r;
      n = r = o[e ? "startContainer" : "endContainer"],
      t = o[e ? "startOffset" : "endOffset"],
      n && (1 === n.nodeType && (t = function(e) {
        for (var n = e.parentNode.firstChild, t = 0; n; ) {
          if (n === e)
            return t;
          1 === n.nodeType && "bookmark" === n.getAttribute("data-mce-type") || t++,
          n = n.nextSibling
        }
        return -1
      }(n),
      n = n.parentNode,
      R.remove(r),
      !n.hasChildNodes() && R.isBlock(n) && n.appendChild(R.create("br"))),
      o[e ? "startContainer" : "endContainer"] = n,
      o[e ? "startOffset" : "endOffset"] = t)
    }
    e(!0),
    e();
    var n = R.createRng();
    return n.setStart(o.startContainer, o.startOffset),
    o.endContainer && n.setEnd(o.endContainer, o.endOffset),
    x(n)
  }, _ = function(e) {
    return function() {
      return e
    }
  }, P = function(t) {
    return function() {
      for (var e = [], n = 0; n < arguments.length; n++)
        e[n] = arguments[n];
      return !t.apply(null, e)
    }
  }, M = _(!1), U = _(!0), F = M, j = U, H = function() {
    return $
  }, $ = (r = {
    fold: function(e, n) {
      return e()
    },
    is: F,
    isSome: F,
    isNone: j,
    getOr: t = function(e) {
      return e
    }
    ,
    getOrThunk: n = function(e) {
      return e()
    }
    ,
    getOrDie: function(e) {
      throw new Error(e || "error: getOrDie called on none.")
    },
    getOrNull: function() {
      return null
    },
    getOrUndefined: function() {
      return undefined
    },
    or: t,
    orThunk: n,
    map: H,
    ap: H,
    each: function() {},
    bind: H,
    flatten: H,
    exists: F,
    forall: j,
    filter: H,
    equals: e = function(e) {
      return e.isNone()
    }
    ,
    equals_: e,
    toArray: function() {
      return []
    },
    toString: _("none()")
  },
  Object.freeze && Object.freeze(r),
  r), q = function(t) {
    var e = function() {
      return t
    }
      , n = function() {
      return o
    }
      , r = function(e) {
      return e(t)
    }
      , o = {
      fold: function(e, n) {
        return n(t)
      },
      is: function(e) {
        return t === e
      },
      isSome: j,
      isNone: F,
      getOr: e,
      getOrThunk: e,
      getOrDie: e,
      getOrNull: e,
      getOrUndefined: e,
      or: n,
      orThunk: n,
      map: function(e) {
        return q(e(t))
      },
      ap: function(e) {
        return e.fold(H, function(e) {
          return q(e(t))
        })
      },
      each: function(e) {
        e(t)
      },
      bind: r,
      flatten: e,
      exists: r,
      forall: r,
      filter: function(e) {
        return e(t) ? o : $
      },
      equals: function(e) {
        return e.is(t)
      },
      equals_: function(e, n) {
        return e.fold(F, function(e) {
          return n(t, e)
        })
      },
      toArray: function() {
        return [t]
      },
      toString: function() {
        return "some(" + t + ")"
      }
    };
    return o
  }, W = {
    some: q,
    none: H,
    from: function(e) {
      return null === e || e === undefined ? $ : q(e)
    }
  }, z = function(n) {
    return function(e) {
      return function(e) {
        if (null === e)
          return "null";
        var n = typeof e;
        return "object" === n && Array.prototype.isPrototypeOf(e) ? "array" : "object" === n && String.prototype.isPrototypeOf(e) ? "string" : n
      }(e) === n
    }
  }, K = z("string"), V = z("boolean"), X = z("function"), Q = z("number"), Y = function(e, n) {
    for (var t = e.length, r = new Array(t), o = 0; o < t; o++) {
      var i = e[o];
      r[o] = n(i, o, e)
    }
    return r
  }, G = function(e, n) {
    for (var t = 0, r = e.length; t < r; t++)
      n(e[t], t, e)
  }, J = function(e, n) {
    for (var t = [], r = 0, o = e.length; r < o; r++) {
      var i = e[r];
      n(i, r, e) && t.push(i)
    }
    return t
  }, Z = function(e, n, t) {
    return G(e, function(e) {
      t = n(t, e)
    }),
    t
  }, ee = function(e, n) {
    for (var t = 0, r = e.length; t < r; t++) {
      var o = e[t];
      if (n(o, t, e))
        return W.some(o)
    }
    return W.none()
  }, ne = Array.prototype.push, te = function(e, n) {
    return function(e) {
      for (var n = [], t = 0, r = e.length; t < r; ++t) {
        if (!Array.prototype.isPrototypeOf(e[t]))
          throw new Error("Arr.flatten item " + t + " was not an array, input: " + e);
        ne.apply(n, e[t])
      }
      return n
    }(Y(e, n))
  }, re = Array.prototype.slice, oe = function(e) {
    return 0 === e.length ? W.none() : W.some(e[0])
  }, ie = function(e) {
    return 0 === e.length ? W.none() : W.some(e[e.length - 1])
  }, ue = (X(Array.from) && Array.from,
  "undefined" != typeof window ? window : Function("return this;")()), ae = function(e, n) {
    return function(e, n) {
      for (var t = n !== undefined && null !== n ? n : ue, r = 0; r < e.length && t !== undefined && null !== t; ++r)
        t = t[e[r]];
      return t
    }(e.split("."), n)
  }, se = function(e, n) {
    var t = ae(e, n);
    if (t === undefined || null === t)
      throw e + " not available on this browser";
    return t
  }, ce = function(e) {
    var n, t = ae("ownerDocument.defaultView", e);
    return (n = t,
    se("HTMLElement", n)).prototype.isPrototypeOf(e)
  }, fe = tinymce.util.Tools.resolve("tinymce.dom.DomQuery"), le = function(e) {
    var n = e.selection.getStart(!0);
    return e.dom.getParent(n, "OL,UL,DL", me(e, n))
  }, de = function(e) {
    var t, n, r, o = e.selection.getSelectedBlocks();
    return v.grep((t = e,
    n = o,
    r = v.map(n, function(e) {
      var n = t.dom.getParent(e, "li,dd,dt", me(t, e));
      return n || e
    }),
    fe.unique(r)), function(e) {
      return C(e)
    })
  }, me = function(e, n) {
    var t = e.dom.getParents(n, "TD,TH");
    return 0 < t.length ? t[0] : e.getBody()
  }, ge = function(e, n) {
    var t = e.dom.getParents(n, "ol,ul", me(e, n));
    return ie(t)
  }, pe = function(n, e) {
    var t = Y(e, function(e) {
      return ge(n, e).getOr(e)
    });
    return fe.unique(t)
  }, ve = {
    isList: function(e) {
      var n = le(e);
      return ce(n)
    },
    getParentList: le,
    getSelectedSubLists: function(e) {
      var n, t, r, o = le(e), i = e.selection.getSelectedBlocks();
      return r = i,
      (t = o) && 1 === r.length && r[0] === t ? (n = o,
      v.grep(n.querySelectorAll("ol,ul,dl"), function(e) {
        return N(e)
      })) : v.grep(i, function(e) {
        return N(e) && o !== e
      })
    },
    getSelectedListItems: de,
    getClosestListRootElm: me,
    getSelectedDlItems: function(e) {
      return J(de(e), O)
    },
    getSelectedListRoots: function(e) {
      var n, t, r, o = (t = ge(n = e, n.selection.getStart()),
      r = J(n.selection.getSelectedBlocks(), S),
      t.toArray().concat(r));
      return pe(e, o)
    }
  }, he = function(e, n) {
    var t = function(e, n) {
      for (var t = 0; t < e.length; t++) {
        var r = e[t];
        if (r.test(n))
          return r
      }
      return undefined
    }(e, n);
    if (!t)
      return {
        major: 0,
        minor: 0
      };
    var r = function(e) {
      return Number(n.replace(t, "$" + e))
    };
    return Ne(r(1), r(2))
  }, ye = function() {
    return Ne(0, 0)
  }, Ne = function(e, n) {
    return {
      major: e,
      minor: n
    }
  }, Se = {
    nu: Ne,
    detect: function(e, n) {
      var t = String(n).toLowerCase();
      return 0 === e.length ? ye() : he(e, t)
    },
    unknown: ye
  }, Oe = "Firefox", Ce = function(e, n) {
    return function() {
      return n === e
    }
  }, be = function(e) {
    var n = e.current;
    return {
      current: n,
      version: e.version,
      isEdge: Ce("Edge", n),
      isChrome: Ce("Chrome", n),
      isIE: Ce("IE", n),
      isOpera: Ce("Opera", n),
      isFirefox: Ce(Oe, n),
      isSafari: Ce("Safari", n)
    }
  }, Le = {
    unknown: function() {
      return be({
        current: undefined,
        version: Se.unknown()
      })
    },
    nu: be,
    edge: _("Edge"),
    chrome: _("Chrome"),
    ie: _("IE"),
    opera: _("Opera"),
    firefox: _(Oe),
    safari: _("Safari")
  }, Te = "Windows", De = "Android", Ee = "Solaris", we = "FreeBSD", ke = function(e, n) {
    return function() {
      return n === e
    }
  }, Ae = function(e) {
    var n = e.current;
    return {
      current: n,
      version: e.version,
      isWindows: ke(Te, n),
      isiOS: ke("iOS", n),
      isAndroid: ke(De, n),
      isOSX: ke("OSX", n),
      isLinux: ke("Linux", n),
      isSolaris: ke(Ee, n),
      isFreeBSD: ke(we, n)
    }
  }, xe = {
    unknown: function() {
      return Ae({
        current: undefined,
        version: Se.unknown()
      })
    },
    nu: Ae,
    windows: _(Te),
    ios: _("iOS"),
    android: _(De),
    linux: _("Linux"),
    osx: _("OSX"),
    solaris: _(Ee),
    freebsd: _(we)
  }, Re = function(e, n) {
    var t = String(n).toLowerCase();
    return ee(e, function(e) {
      return e.search(t)
    })
  }, Ie = function(e, t) {
    return Re(e, t).map(function(e) {
      var n = Se.detect(e.versionRegexes, t);
      return {
        current: e.name,
        version: n
      }
    })
  }, Be = function(e, t) {
    return Re(e, t).map(function(e) {
      var n = Se.detect(e.versionRegexes, t);
      return {
        current: e.name,
        version: n
      }
    })
  }, _e = function(e, n) {
    return -1 !== e.indexOf(n)
  }, Pe = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/, Me = function(n) {
    return function(e) {
      return _e(e, n)
    }
  }, Ue = [{
    name: "Edge",
    versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
    search: function(e) {
      return _e(e, "edge/") && _e(e, "chrome") && _e(e, "safari") && _e(e, "applewebkit")
    }
  }, {
    name: "Chrome",
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Pe],
    search: function(e) {
      return _e(e, "chrome") && !_e(e, "chromeframe")
    }
  }, {
    name: "IE",
    versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
    search: function(e) {
      return _e(e, "msie") || _e(e, "trident")
    }
  }, {
    name: "Opera",
    versionRegexes: [Pe, /.*?opera\/([0-9]+)\.([0-9]+).*/],
    search: Me("opera")
  }, {
    name: "Firefox",
    versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
    search: Me("firefox")
  }, {
    name: "Safari",
    versionRegexes: [Pe, /.*?cpu os ([0-9]+)_([0-9]+).*/],
    search: function(e) {
      return (_e(e, "safari") || _e(e, "mobile/")) && _e(e, "applewebkit")
    }
  }], Fe = [{
    name: "Windows",
    search: Me("win"),
    versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "iOS",
    search: function(e) {
      return _e(e, "iphone") || _e(e, "ipad")
    },
    versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
  }, {
    name: "Android",
    search: Me("android"),
    versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "OSX",
    search: Me("os x"),
    versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
  }, {
    name: "Linux",
    search: Me("linux"),
    versionRegexes: []
  }, {
    name: "Solaris",
    search: Me("sunos"),
    versionRegexes: []
  }, {
    name: "FreeBSD",
    search: Me("freebsd"),
    versionRegexes: []
  }], je = {
    browsers: _(Ue),
    oses: _(Fe)
  }, He = function(e) {
    var n, t, r, o, i, u, a, s, c, f, l, d = je.browsers(), m = je.oses(), g = Ie(d, e).fold(Le.unknown, Le.nu), p = Be(m, e).fold(xe.unknown, xe.nu);
    return {
      browser: g,
      os: p,
      deviceType: (t = g,
      r = e,
      o = (n = p).isiOS() && !0 === /ipad/i.test(r),
      i = n.isiOS() && !o,
      u = n.isAndroid() && 3 === n.version.major,
      a = n.isAndroid() && 4 === n.version.major,
      s = o || u || a && !0 === /mobile/i.test(r),
      c = n.isiOS() || n.isAndroid(),
      f = c && !s,
      l = t.isSafari() && n.isiOS() && !1 === /safari/i.test(r),
      {
        isiPad: _(o),
        isiPhone: _(i),
        isTablet: _(s),
        isPhone: _(f),
        isTouch: _(c),
        isAndroid: n.isAndroid,
        isiOS: n.isiOS,
        isWebView: _(l)
      })
    }
  }, $e = {
    detect: (o = function() {
      var e = navigator.userAgent;
      return He(e)
    }
    ,
    u = !1,
    function() {
      for (var e = [], n = 0; n < arguments.length; n++)
        e[n] = arguments[n];
      return u || (u = !0,
      i = o.apply(null, e)),
      i
    }
    )
  }, qe = function(e) {
    if (null === e || e === undefined)
      throw new Error("Node cannot be null or undefined");
    return {
      dom: _(e)
    }
  }, We = {
    fromHtml: function(e, n) {
      var t = (n || document).createElement("div");
      if (t.innerHTML = e,
      !t.hasChildNodes() || 1 < t.childNodes.length)
        throw console.error("HTML does not have a single root node", e),
        "HTML must have a single root node";
      return qe(t.childNodes[0])
    },
    fromTag: function(e, n) {
      var t = (n || document).createElement(e);
      return qe(t)
    },
    fromText: function(e, n) {
      var t = (n || document).createTextNode(e);
      return qe(t)
    },
    fromDom: qe,
    fromPoint: function(e, n, t) {
      var r = e.dom();
      return W.from(r.elementFromPoint(n, t)).map(qe)
    }
  }, ze = (Node.ATTRIBUTE_NODE,
  Node.CDATA_SECTION_NODE,
  Node.COMMENT_NODE,
  Node.DOCUMENT_NODE,
  Node.DOCUMENT_TYPE_NODE,
  Node.DOCUMENT_FRAGMENT_NODE,
  Node.ELEMENT_NODE), Ke = (Node.TEXT_NODE,
  Node.PROCESSING_INSTRUCTION_NODE,
  Node.ENTITY_REFERENCE_NODE,
  Node.ENTITY_NODE,
  Node.NOTATION_NODE,
  ze), Ve = ($e.detect().browser.isIE(),
  function(e, n) {
    var t = e.dom();
    if (t.nodeType !== Ke)
      return !1;
    if (t.matches !== undefined)
      return t.matches(n);
    if (t.msMatchesSelector !== undefined)
      return t.msMatchesSelector(n);
    if (t.webkitMatchesSelector !== undefined)
      return t.webkitMatchesSelector(n);
    if (t.mozMatchesSelector !== undefined)
      return t.mozMatchesSelector(n);
    throw new Error("Browser lacks native selectors")
  }
  ), Xe = Object.keys, Qe = function(e) {
    return e.dom().nodeName.toLowerCase()
  }, Ye = function(e, n) {
    var t = e.dom();
    !function(e, n) {
      for (var t = Xe(e), r = 0, o = t.length; r < o; r++) {
        var i = t[r];
        n(e[i], i, e)
      }
    }(n, function(e, n) {
      !function(e, n, t) {
        if (!(K(t) || V(t) || Q(t)))
          throw console.error("Invalid call to Attr.set. Key ", n, ":: Value ", t, ":: Element ", e),
          new Error("Attribute value was not simple");
        e.setAttribute(n, t + "")
      }(t, n, e)
    })
  }, Ge = function(e) {
    return Z(e.dom().attributes, function(e, n) {
      return e[n.name] = n.value,
      e
    }, {})
  }, Je = function(e) {
    var n = e.dom();
    return W.from(n.parentNode).map(We.fromDom)
  }, Ze = function(e) {
    var n = e.dom();
    return Y(n.childNodes, We.fromDom)
  }, en = function(e, n) {
    var t = e.dom().childNodes;
    return W.from(t[n]).map(We.fromDom)
  }, nn = function(e) {
    return en(e, 0)
  }, tn = function(e) {
    return en(e, e.dom().childNodes.length - 1)
  }, rn = (function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n]
  }("element", "offset"),
  function(n, t) {
    Je(n).each(function(e) {
      e.dom().insertBefore(t.dom(), n.dom())
    })
  }
  ), on = function(e, n) {
    e.dom().appendChild(n.dom())
  }, un = function(n, e) {
    G(e, function(e) {
      on(n, e)
    })
  }, an = function(e) {
    var n = e.dom();
    null !== n.parentNode && n.parentNode.removeChild(n)
  }, sn = function(e) {
    return n = e,
    t = !0,
    We.fromDom(n.dom().cloneNode(t));
    var n, t
  }, cn = function(e, n) {
    var t, r, o, i, u = (t = e,
    r = n,
    o = We.fromTag(r),
    i = Ge(t),
    Ye(o, i),
    o);
    rn(e, u);
    var a = Ze(e);
    return un(u, a),
    an(e),
    u
  }, fn = tinymce.util.Tools.resolve("tinymce.Env"), ln = g.DOM, dn = function(e, n, t) {
    var r, o, i, u = ln.createFragment(), a = e.schema.getBlockElements();
    if (e.settings.forced_root_block && (t = t || e.settings.forced_root_block),
    t && ((o = ln.create(t)).tagName === e.settings.forced_root_block && ln.setAttribs(o, e.settings.forced_root_block_attrs),
    D(n.firstChild, a) || u.appendChild(o)),
    n)
      for (; r = n.firstChild; ) {
        var s = r.nodeName;
        i || "SPAN" === s && "bookmark" === r.getAttribute("data-mce-type") || (i = !0),
        D(r, a) ? (u.appendChild(r),
        o = null) : t ? (o || (o = ln.create(t),
        u.appendChild(o)),
        o.appendChild(r)) : u.appendChild(r)
      }
    return e.settings.forced_root_block ? i || fn.ie && !(10 < fn.ie) || o.appendChild(ln.create("br", {
      "data-mce-bogus": "1"
    })) : u.appendChild(ln.create("br")),
    u
  }, mn = g.DOM, gn = function(e, n, t, r) {
    var o, i, u, a, s;
    for (u = mn.select('span[data-mce-type="bookmark"]', n),
    r = r || dn(e, t),
    (o = mn.createRng()).setStartAfter(t),
    o.setEndAfter(n),
    a = (i = o.extractContents()).firstChild; a; a = a.firstChild)
      if ("LI" === a.nodeName && e.dom.isEmpty(a)) {
        mn.remove(a);
        break
      }
    e.dom.isEmpty(i) || mn.insertAfter(i, n),
    mn.insertAfter(r, n),
    w(e.dom, t.parentNode) && (s = t.parentNode,
    v.each(u, function(e) {
      s.parentNode.insertBefore(e, t.parentNode)
    }),
    mn.remove(s)),
    mn.remove(t),
    w(e.dom, n) && mn.remove(n)
  }, pn = function(e, n) {
    for (var t = [], r = 0; r < e.length; r++) {
      var o = e[r];
      if (!o.isSome())
        return W.none();
      t.push(o.getOrDie())
    }
    return W.some(n.apply(null, t))
  }, vn = function(e, n, t) {
    if (!K(t))
      throw console.error("Invalid call to CSS.set. Property ", n, ":: Value ", t, ":: Element ", e),
      new Error("CSS value must be a string: " + t);
    e.style !== undefined && e.style.setProperty(n, t)
  }, hn = function(e, n) {
    on(e.item, n.list)
  }, yn = function(i, e, u) {
    for (var a = [], n = function(e) {
      var n, t, r, o = (n = i,
      t = u,
      r = {
        list: We.fromTag(t, n),
        item: We.fromTag("li", n)
      },
      on(r.list, r.item),
      r);
      ie(a).each(function(e) {
        return hn(e, o)
      }),
      a.push(o)
    }, t = 0; t < e; t++)
      n();
    return a
  }, Nn = function(c, e, f) {
    var n = e.slice(0, f.depth);
    return ie(n).each(function(e) {
      var n, t, r, o, i, u, a, s;
      n = e,
      r = c,
      o = f.itemAttributes,
      i = f.content,
      u = We.fromTag("li", r),
      Ye(u, o),
      un(u, i),
      t = u,
      on(n.list, t),
      n.item = t,
      s = f,
      Qe((a = e).list).toUpperCase() !== s.listType && (a.list = cn(a.list, s.listType)),
      Ye(a.list, s.listAttributes)
    }),
    n
  }, Sn = function(e, n, t) {
    var r = yn(e, t.depth - n.length, t.listType);
    return function(e, n) {
      ie(e).each(function(e) {
        Ye(e.list, n.listAttributes),
        Ye(e.item, n.itemAttributes),
        un(e.item, n.content)
      });
      for (var t = 0; t < e.length - 1; t++)
        r = e[t].item,
        o = "list-style-type",
        i = "none",
        u = r.dom(),
        vn(u, o, i);
      var r, o, i, u
    }(r, t),
    pn([ie(n), oe(r)], hn),
    n.concat(r)
  }, On = function(e) {
    return 0 < e.depth
  }, Cn = function(e) {
    return e.isSelected
  }, bn = Object.prototype.hasOwnProperty, Ln = (a = function(e, n) {
    return n
  }
  ,
  function() {
    for (var e = new Array(arguments.length), n = 0; n < e.length; n++)
      e[n] = arguments[n];
    if (0 === e.length)
      throw new Error("Can't merge zero objects");
    for (var t = {}, r = 0; r < e.length; r++) {
      var o = e[r];
      for (var i in o)
        bn.call(o, i) && (t[i] = a(t[i], o[i]))
    }
    return t
  }
  ), Tn = function(e, r) {
    var n = r.depth - 1;
    e[n].each(function(e) {
      return t = e,
      (n = r).listType = t.listType,
      void (n.listAttributes = Ln({}, t.listAttributes));
      var n, t
    });
    var t = e.slice(0, n);
    return t.push(W.some(r)),
    t
  }, Dn = function(e) {
    Z(e, function(e, n) {
      return n.depth > e.length ? function(e, n) {
        for (var t = e.slice(0), r = n.depth - e.length, o = 1; o < r; o++)
          t.push(W.none());
        return t.push(W.some(n)),
        t
      }(e, n) : Tn(e, n)
    }, [])
  }, En = function(e) {
    var n = e
      , t = function() {
      return n
    };
    return {
      get: t,
      set: function(e) {
        n = e
      },
      clone: function() {
        return En(t())
      }
    }
  };
  (s = l || (l = {})).OL = "OL",
  s.UL = "UL",
  s.DL = "DL";
  var wn = function(e) {
    switch (Qe(e)) {
    case "ol":
      return W.some(l.OL);
    case "ul":
      return W.some(l.UL);
    case "dl":
      return W.some(l.DL);
    default:
      return W.none()
    }
  }
    , kn = function(e) {
    return Ve(e, "OL,UL,DL")
  }
    , An = function(e) {
    return nn(e).map(kn).getOr(!1)
  }
    , xn = function(e) {
    var n = Ze(e)
      , t = n.length + (tn(e).map(kn).getOr(!1) ? -1 : 0);
    return Y(n.slice(0, t), sn)
  }
    , Rn = function(u, e, a, s) {
    var c = function(r) {
      for (var o = [], e = 1; e < arguments.length; e++)
        o[e - 1] = arguments[e];
      return function() {
        for (var e = [], n = 0; n < arguments.length; n++)
          e[n] = arguments[n];
        var t = o.concat(e);
        return r.apply(null, t)
      }
    }(In, u, e, a)
      , f = function(r) {
      return e.each(function(e) {
        var n, t;
        n = "Start" === r ? e.start : e.end,
        t = s,
        n.dom() === t.dom() && a.set("Start" === r)
      })
    };
    return nn(s).filter(kn).fold(function() {
      f("Start");
      var e, n, t, r, o = (e = s,
      n = u,
      t = a.get(),
      r = Je(e),
      {
        depth: n,
        isSelected: t,
        content: xn(e),
        listType: r.bind(wn).getOr(l.OL),
        listAttributes: r.map(Ge).getOr({}),
        itemAttributes: Ge(e)
      });
      f("End");
      var i = tn(s).filter(kn).map(c).getOr([]);
      return [o].concat(i)
    }, c)
  }
    , In = function(e, n, t, r) {
    var o = e + 1;
    return te(Ze(r), function(e) {
      return kn(e) ? In(o, n, t, e) : Rn(o, n, t, e)
    })
  }
    , Bn = function(i, e) {
    return Y(e, function(e) {
      var n, t, r, o = (n = e.content,
      r = (t || document).createDocumentFragment(),
      G(n, function(e) {
        r.appendChild(e.dom())
      }),
      We.fromDom(r));
      return We.fromDom(dn(i, o.dom()))
    })
  }
    , _n = function(e, n) {
    return Dn(n),
    (t = e.contentDocument,
    r = n,
    o = Z(r, function(e, n) {
      return n.depth > e.length ? Sn(t, e, n) : Nn(t, e, n)
    }, []),
    oe(o).map(function(e) {
      return e.list
    })).toArray();
    var t, r, o
  }
    , Pn = function(e) {
    var n, t, r = Y(ve.getSelectedListItems(e), We.fromDom);
    return pn([ee(r, P(An)), ee((n = r,
    t = re.call(n, 0),
    t.reverse(),
    t), P(An))], function(e, n) {
      return {
        start: e,
        end: n
      }
    })
  }
    , Mn = function(a, e, s) {
    var n, t, r, o = (n = e,
    t = Pn(a),
    r = En(!1),
    Y(n, function(e) {
      return {
        entries: In(0, t, r, e),
        sourceList: e
      }
    }));
    G(o, function(e) {
      var n, t, r, o, i, u;
      n = e.entries,
      t = s,
      G(J(n, Cn), function(e) {
        return function(e, n) {
          switch (e) {
          case "Indent":
            n.depth++;
            break;
          case "Outdent":
            n.depth--;
            break;
          case "Flatten":
            n.depth = 0
          }
        }(t, e)
      }),
      r = e.sourceList,
      i = a,
      u = e.entries,
      o = te(function(e, n) {
        if (0 === e.length)
          return [];
        for (var t = n(e[0]), r = [], o = [], i = 0, u = e.length; i < u; i++) {
          var a = e[i]
            , s = n(a);
          s !== t && (r.push(o),
          o = []),
          t = s,
          o.push(a)
        }
        return 0 !== o.length && r.push(o),
        r
      }(u, On), function(e) {
        return oe(e).map(On).getOr(!1) ? _n(i, e) : Bn(i, e)
      }),
      G(o, function(e) {
        rn(r, e)
      }),
      an(e.sourceList)
    })
  }
    , Un = function(e) {
    Ve(e, "DT") && cn(e, "DD")
  }
    , Fn = function(r, e, n) {
    G(n, "Indent" === e ? Un : function(e) {
      return n = r,
      void (Ve(t = e, "DD") ? cn(t, "DT") : Ve(t, "DT") && Je(t).each(function(e) {
        return gn(n, e.dom(), t.dom())
      }));
      var n, t
    }
    )
  }
    , jn = function(e, n) {
    var t = Y(ve.getSelectedDlItems(e), We.fromDom)
      , r = Y(ve.getSelectedListRoots(e), We.fromDom);
    if (t.length || r.length) {
      var o = e.selection.getBookmark();
      Fn(e, n, t),
      Mn(e, r, n),
      e.selection.moveToBookmark(o),
      e.selection.setRng(x(e.selection.getRng())),
      e.nodeChanged()
    }
  }
    , Hn = function(e) {
    jn(e, "Indent")
  }
    , $n = function(e) {
    jn(e, "Outdent")
  }
    , qn = function(e) {
    jn(e, "Flatten")
  }
    , Wn = function(t, e) {
    v.each(e, function(e, n) {
      t.setAttribute(n, e)
    })
  }
    , zn = function(e, n, t) {
    var r, o, i, u, a, s, c;
    r = e,
    o = n,
    u = (i = t)["list-style-type"] ? i["list-style-type"] : null,
    r.setStyle(o, "list-style-type", u),
    a = e,
    Wn(s = n, (c = t)["list-attributes"]),
    v.each(a.select("li", s), function(e) {
      Wn(e, c["list-item-attributes"])
    })
  }
    , Kn = function(e, n, t, r) {
    var o, i;
    for (o = n[t ? "startContainer" : "endContainer"],
    i = n[t ? "startOffset" : "endOffset"],
    1 === o.nodeType && (o = o.childNodes[Math.min(i, o.childNodes.length - 1)] || o),
    !t && L(o.nextSibling) && (o = o.nextSibling); o.parentNode !== r; ) {
      if (T(e, o))
        return o;
      if (/^(TD|TH)$/.test(o.parentNode.nodeName))
        return o;
      o = o.parentNode
    }
    return o
  }
    , Vn = function(f, l, d) {
    void 0 === d && (d = {});
    var e, n = f.selection.getRng(!0), m = "LI", t = ve.getClosestListRootElm(f, f.selection.getStart(!0)), g = f.dom;
    "false" !== g.getContentEditable(f.selection.getNode()) && ("DL" === (l = l.toUpperCase()) && (m = "DT"),
    e = I(n),
    v.each(function(t, e, r) {
      for (var o, i = [], u = t.dom, n = Kn(t, e, !0, r), a = Kn(t, e, !1, r), s = [], c = n; c && (s.push(c),
      c !== a); c = c.nextSibling)
        ;
      return v.each(s, function(e) {
        if (T(t, e))
          return i.push(e),
          void (o = null);
        if (u.isBlock(e) || L(e))
          return L(e) && u.remove(e),
          void (o = null);
        var n = e.nextSibling;
        p.isBookmarkNode(e) && (T(t, n) || !n && e.parentNode === r) ? o = null : (o || (o = u.create("p"),
        e.parentNode.insertBefore(o, e),
        i.push(o)),
        o.appendChild(e))
      }),
      i
    }(f, n, t), function(e) {
      var n, t, r, o, i, u, a, s, c;
      (t = e.previousSibling) && N(t) && t.nodeName === l && (r = t,
      o = d,
      i = g.getStyle(r, "list-style-type"),
      u = o ? o["list-style-type"] : "",
      i === (u = null === u ? "" : u)) ? (n = t,
      e = g.rename(e, m),
      t.appendChild(e)) : (n = g.create(l),
      e.parentNode.insertBefore(n, e),
      n.appendChild(e),
      e = g.rename(e, m)),
      a = g,
      s = e,
      c = ["margin", "margin-right", "margin-bottom", "margin-left", "margin-top", "padding", "padding-right", "padding-bottom", "padding-left", "padding-top"],
      v.each(c, function(e) {
        var n;
        return a.setStyle(s, ((n = {})[e] = "",
        n))
      }),
      zn(g, n, d),
      Qn(f.dom, n)
    }),
    f.selection.setRng(B(e)))
  }
    , Xn = function(e, n, t) {
    return s = t,
    (a = n) && s && N(a) && a.nodeName === s.nodeName && (i = n,
    u = t,
    (o = e).getStyle(i, "list-style-type", !0) === o.getStyle(u, "list-style-type", !0)) && (r = t,
    n.className === r.className);
    var r, o, i, u, a, s
  }
    , Qn = function(e, n) {
    var t, r;
    if (t = n.nextSibling,
    Xn(e, n, t)) {
      for (; r = t.firstChild; )
        n.appendChild(r);
      e.remove(t)
    }
    if (t = n.previousSibling,
    Xn(e, n, t)) {
      for (; r = t.lastChild; )
        n.insertBefore(r, n.firstChild);
      e.remove(t)
    }
  }
    , Yn = function(n, e, t, r, o) {
    if (e.nodeName !== r || Gn(o)) {
      var i = I(n.selection.getRng(!0));
      v.each([e].concat(t), function(e) {
        !function(e, n, t, r) {
          if (n.nodeName !== t) {
            var o = e.rename(n, t);
            zn(e, o, r)
          } else
            zn(e, n, r)
        }(n.dom, e, r, o)
      }),
      n.selection.setRng(B(i))
    } else
      qn(n)
  }
    , Gn = function(e) {
    return "list-style-type"in e
  }
    , Jn = {
    toggleList: function(e, n, t) {
      var r = ve.getParentList(e)
        , o = ve.getSelectedSubLists(e);
      t = t || {},
      r && 0 < o.length ? Yn(e, r, o, n, t) : function(e, n, t, r) {
        if (n !== e.getBody())
          if (n)
            if (n.nodeName !== t || Gn(r)) {
              var o = I(e.selection.getRng(!0));
              zn(e.dom, n, r),
              Qn(e.dom, e.dom.rename(n, t)),
              e.selection.setRng(B(o))
            } else
              qn(e);
          else
            Vn(e, t, r)
      }(e, r, n, t)
    },
    mergeWithAdjacentLists: Qn
  }
    , Zn = g.DOM
    , et = function(e, n) {
    var t, r = n.parentNode;
    "LI" === r.nodeName && r.firstChild === n && ((t = r.previousSibling) && "LI" === t.nodeName ? (t.appendChild(n),
    w(e, r) && Zn.remove(r)) : Zn.setStyle(r, "listStyleType", "none")),
    N(r) && (t = r.previousSibling) && "LI" === t.nodeName && t.appendChild(n)
  }
    , nt = function(n, e) {
    v.each(v.grep(n.select("ol,ul", e)), function(e) {
      et(n, e)
    })
  }
    , tt = function(e, n, t, r) {
    var o, i, u = n.startContainer, a = n.startOffset;
    if (3 === u.nodeType && (t ? a < u.data.length : 0 < a))
      return u;
    for (o = e.schema.getNonEmptyElements(),
    1 === u.nodeType && (u = f.getNode(u, a)),
    i = new d(u,r),
    t && E(e.dom, u) && i.next(); u = i[t ? "next" : "prev2"](); ) {
      if ("LI" === u.nodeName && !u.hasChildNodes())
        return u;
      if (o[u.nodeName])
        return u;
      if (3 === u.nodeType && 0 < u.data.length)
        return u
    }
  }
    , rt = function(e, n) {
    var t = n.childNodes;
    return 1 === t.length && !N(t[0]) && e.isBlock(t[0])
  }
    , ot = function(e, n, t) {
    var r, o, i, u;
    if (o = rt(e, t) ? t.firstChild : t,
    rt(i = e, u = n) && i.remove(u.firstChild, !0),
    !w(e, n, !0))
      for (; r = n.firstChild; )
        o.appendChild(r)
  }
    , it = function(e, n, t) {
    var r, o, i = n.parentNode;
    k(e, n) && k(e, t) && (N(t.lastChild) && (o = t.lastChild),
    i === t.lastChild && L(i.previousSibling) && e.remove(i.previousSibling),
    (r = t.lastChild) && L(r) && n.hasChildNodes() && e.remove(r),
    w(e, t, !0) && e.$(t).empty(),
    ot(e, n, t),
    o && t.appendChild(o),
    e.remove(n),
    w(e, i) && i !== e.getRoot() && e.remove(i))
  }
    , ut = function(e, n, t, r) {
    var o, i, u, a = e.dom;
    if (a.isEmpty(r))
      i = t,
      u = r,
      (o = e).dom.$(u).empty(),
      it(o.dom, i, u),
      o.selection.setCursorLocation(u);
    else {
      var s = I(n);
      it(a, t, r),
      e.selection.setRng(B(s))
    }
  }
    , at = function(e, n) {
    var t, r, o, i = e.dom, u = e.selection, a = u.getStart(), s = ve.getClosestListRootElm(e, a), c = i.getParent(u.getStart(), "LI", s);
    if (c) {
      if ((t = c.parentNode) === e.getBody() && w(i, t))
        return !0;
      if (r = x(u.getRng(!0)),
      (o = i.getParent(tt(e, r, n, s), "LI", s)) && o !== c)
        return n ? ut(e, r, o, c) : function(e, n, t, r) {
          var o = I(n);
          it(e.dom, t, r);
          var i = B(o);
          e.selection.setRng(i)
        }(e, r, c, o),
        !0;
      if (!o && !n)
        return qn(e),
        !0
    }
    return !1
  }
    , st = function(e, n) {
    return at(e, n) || function(o, i) {
      var u = o.dom
        , e = o.selection.getStart()
        , a = ve.getClosestListRootElm(o, e)
        , s = u.getParent(e, u.isBlock, a);
      if (s && u.isEmpty(s)) {
        var n = x(o.selection.getRng(!0))
          , c = u.getParent(tt(o, n, i, a), "LI", a);
        if (c)
          return o.undoManager.transact(function() {
            var e, n, t, r;
            n = s,
            t = a,
            r = (e = u).getParent(n.parentNode, e.isBlock, t),
            e.remove(n),
            r && e.isEmpty(r) && e.remove(r),
            Jn.mergeWithAdjacentLists(u, c.parentNode),
            o.selection.select(c, !0),
            o.selection.collapse(i)
          }),
          !0
      }
      return !1
    }(e, n)
  }
    , ct = function(e, n) {
    return e.selection.isCollapsed() ? st(e, n) : (r = (t = e).selection.getStart(),
    o = ve.getClosestListRootElm(t, r),
    !!(t.dom.getParent(r, "LI,DT,DD", o) || 0 < ve.getSelectedListItems(t).length) && (t.undoManager.transact(function() {
      t.execCommand("Delete"),
      nt(t.dom, t.getBody())
    }),
    !0));
    var t, r, o
  }
    , ft = function(n) {
    n.on("keydown", function(e) {
      e.keyCode === m.BACKSPACE ? ct(n, !1) && e.preventDefault() : e.keyCode === m.DELETE && ct(n, !0) && e.preventDefault()
    })
  }
    , lt = ct
    , dt = function(n) {
    return {
      backspaceDelete: function(e) {
        lt(n, e)
      }
    }
  }
    , mt = function(n, t) {
    return function() {
      var e = n.dom.getParent(n.selection.getStart(), "UL,OL,DL");
      return e && e.nodeName === t
    }
  }
    , gt = function(t) {
    t.on("BeforeExecCommand", function(e) {
      var n = e.command.toLowerCase();
      "indent" === n ? Hn(t) : "outdent" === n && $n(t)
    }),
    t.addCommand("InsertUnorderedList", function(e, n) {
      Jn.toggleList(t, "UL", n)
    }),
    t.addCommand("InsertOrderedList", function(e, n) {
      Jn.toggleList(t, "OL", n)
    }),
    t.addCommand("InsertDefinitionList", function(e, n) {
      Jn.toggleList(t, "DL", n)
    }),
    t.addCommand("RemoveList", function() {
      qn(t)
    }),
    t.addQueryStateHandler("InsertUnorderedList", mt(t, "UL")),
    t.addQueryStateHandler("InsertOrderedList", mt(t, "OL")),
    t.addQueryStateHandler("InsertDefinitionList", mt(t, "DL"))
  }
    , pt = function(e) {
    return e.getParam("lists_indent_on_tab", !0)
  }
    , vt = function(e) {
    var n;
    pt(e) && (n = e).on("keydown", function(e) {
      e.keyCode !== m.TAB || m.metaKeyPressed(e) || ve.isList(n) && (e.preventDefault(),
      n.undoManager.transact(function() {
        e.shiftKey ? $n(n) : Hn(n)
      }))
    }),
    ft(e)
  }
    , onPostRender = function(n, i) {
    return function(e) {
      var o = e.control;
      n.on("NodeChange", function(e) {
        var n = function(e, n) {
          for (var t = 0; t < e.length; t++)
            if (n(e[t]))
              return t;
          return -1
        }(e.parents, b)
          , t = -1 !== n ? e.parents.slice(0, n) : e.parents
          , r = v.grep(t, N);
        o.active(0 < r.length && r[0].nodeName === i)
      })
    }
  }
    , yt = function(e) {
    var n, t, r;
    t = "advlist",
    r = (n = e).settings.plugins ? n.settings.plugins : "",
    -1 === v.inArray(r.split(/[ ,]/), t) && (e.addButton("numlist", {
      active: !1,
      title: "编号",
      cmd: "InsertOrderedList",
      onPostRender: onPostRender(e, "OL")
    }),
    e.addButton("bullist", {
      active: !1,
      title: "项目符号",
      cmd: "InsertUnorderedList",
      onPostRender: onPostRender(e, "UL")
    })),
    e.addButton("indent", {
      icon: "indent",
      title: "Increase indent",
      cmd: "Indent"
    })
  };
  c.add("get-lists", function(e) {
    return vt(e),
    yt(e),
    gt(e),
    dt(e)
  })
}();
