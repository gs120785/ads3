(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var f, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        h = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ba = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        ca = ba(this),
        da = function(a, b) {
            if (b) a: {
                var c = ca;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && h(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    da("Symbol", function(a) {
        if (a) return a;
        var b = function(g, k) {
            this.g = g;
            h(this, "description", {
                configurable: !0,
                writable: !0,
                value: k
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(g) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (g || "") + "_" + d++, g)
            };
        return e
    });
    da("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ca[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && h(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        fa = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ha = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        m;
    if ("function" == typeof Object.setPrototypeOf) m = Object.setPrototypeOf;
    else {
        var n;
        a: {
            var ia = {
                    a: !0
                },
                ja = {};
            try {
                ja.__proto__ = ia;
                n = ja.a;
                break a
            } catch (a) {}
            n = !1
        }
        m = n ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = m,
        p = function(a, b) {
            a.prototype = ha(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.rc = b.prototype
        },
        r = this || self,
        la = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        ma = function(a) {
            var b = la(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        na = "closure_uid_" + (1E9 * Math.random() >>> 0),
        oa = 0,
        pa =
        function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        qa = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        t = function(a, b, c) {
            t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? pa : qa;
            return t.apply(null, arguments)
        },
        u = function(a, b) {
            a = a.split(".");
            var c = r;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        },
        ra = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.rc = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.uc = function(d, e, g) {
                for (var k = Array(arguments.length - 2), l = 2; l < arguments.length; l++) k[l - 2] = arguments[l];
                return b.prototype[e].apply(d, k)
            }
        },
        sa = function(a) {
            return a
        };
    var chrome = chrome || window.chrome || {};
    chrome.cast = chrome.cast || {};
    chrome.cast.media = chrome.cast.media || {};
    chrome.cast.ReceiverActionListener = {};
    chrome.cast.VERSION = [1, 2];
    u("chrome.cast.VERSION", chrome.cast.VERSION);
    chrome.cast.tc = !0;
    u("chrome.cast.usingPresentationApi", chrome.cast.tc);
    chrome.cast.Oa = function(a, b) {
        this.credentials = a;
        this.credentialsType = void 0 === b ? "web" : b
    };
    u("chrome.cast.CredentialsData", chrome.cast.Oa);
    chrome.cast.Error = function(a, b, c) {
        this.code = a;
        this.description = b || null;
        this.details = c || null
    };
    u("chrome.cast.Error", chrome.cast.Error);
    chrome.cast.rb = function(a) {
        this.platform = a;
        this.packageId = this.url = null
    };
    u("chrome.cast.SenderApplication", chrome.cast.rb);
    chrome.cast.Image = function(a) {
        this.url = a;
        this.width = this.height = null
    };
    u("chrome.cast.Image", chrome.cast.Image);
    chrome.cast.Volume = function(a, b) {
        this.level = void 0 === a ? null : a;
        this.muted = void 0 === b ? null : b
    };
    u("chrome.cast.Volume", chrome.cast.Volume);
    chrome.cast.ha = {
        CUSTOM_CONTROLLER_SCOPED: "custom_controller_scoped",
        TAB_AND_ORIGIN_SCOPED: "tab_and_origin_scoped",
        ORIGIN_SCOPED: "origin_scoped",
        PAGE_SCOPED: "page_scoped"
    };
    u("chrome.cast.AutoJoinPolicy", chrome.cast.ha);
    chrome.cast.ka = {
        CREATE_SESSION: "create_session",
        CAST_THIS_TAB: "cast_this_tab"
    };
    u("chrome.cast.DefaultActionPolicy", chrome.cast.ka);
    chrome.cast.Na = {
        VIDEO_OUT: "video_out",
        AUDIO_OUT: "audio_out",
        VIDEO_IN: "video_in",
        AUDIO_IN: "audio_in",
        MULTIZONE_GROUP: "multizone_group"
    };
    u("chrome.cast.Capability", chrome.cast.Na);
    chrome.cast.C = {
        CANCEL: "cancel",
        TIMEOUT: "timeout",
        API_NOT_INITIALIZED: "api_not_initialized",
        INVALID_PARAMETER: "invalid_parameter",
        EXTENSION_NOT_COMPATIBLE: "extension_not_compatible",
        EXTENSION_MISSING: "extension_missing",
        RECEIVER_UNAVAILABLE: "receiver_unavailable",
        SESSION_ERROR: "session_error",
        CHANNEL_ERROR: "channel_error",
        LOAD_MEDIA_FAILED: "load_media_failed"
    };
    u("chrome.cast.ErrorCode", chrome.cast.C);
    chrome.cast.O = {
        AVAILABLE: "available",
        UNAVAILABLE: "unavailable"
    };
    u("chrome.cast.ReceiverAvailability", chrome.cast.O);
    chrome.cast.sb = {
        CHROME: "chrome",
        IOS: "ios",
        ANDROID: "android"
    };
    u("chrome.cast.SenderPlatform", chrome.cast.sb);
    chrome.cast.ya = {
        CAST: "cast",
        DIAL: "dial",
        HANGOUT: "hangout",
        CUSTOM: "custom"
    };
    u("chrome.cast.ReceiverType", chrome.cast.ya);
    chrome.cast.Qa = {
        RUNNING: "running",
        STOPPED: "stopped",
        ERROR: "error"
    };
    u("chrome.cast.DialAppState", chrome.cast.Qa);
    chrome.cast.nb = {
        CAST: "cast",
        STOP: "stop"
    };
    u("chrome.cast.ReceiverAction", chrome.cast.nb);
    chrome.cast.L = {
        CONNECTED: "connected",
        DISCONNECTED: "disconnected",
        STOPPED: "stopped"
    };
    u("chrome.cast.SessionStatus", chrome.cast.L);
    chrome.cast.Gb = {
        ATTENUATION: "attenuation",
        FIXED: "fixed",
        MASTER: "master"
    };
    u("chrome.cast.VolumeControlType", chrome.cast.Gb);

    function v(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, v);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    ra(v, Error);
    v.prototype.name = "CustomError";

    function ta(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        v.call(this, c + a[d])
    }
    ra(ta, v);
    ta.prototype.name = "AssertionError";
    var ua = function(a, b) {
        throw new ta("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var va = Array.prototype.forEach ? function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    };

    function wa(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    };
    var x;
    var xa = /&/g,
        ya = /</g,
        za = />/g,
        Aa = /"/g,
        Ba = /'/g,
        Ca = /\x00/g,
        Da = /[\x00&<>"']/;
    var Fa = function(a) {
        if (Ea !== Ea) throw Error("SafeUrl is not meant to be built directly");
        this.g = a
    };
    Fa.prototype.toString = function() {
        return this.g.toString()
    };
    var Ea = {};
    new Fa("about:invalid#zClosurez");
    new Fa("about:blank");
    var Ga = {},
        Ha = function() {
            if (Ga !== Ga) throw Error("SafeStyle is not meant to be built directly");
        };
    Ha.prototype.toString = function() {
        return "".toString()
    };
    new Ha;
    var Ia = {},
        Ja = function() {
            if (Ia !== Ia) throw Error("SafeStyleSheet is not meant to be built directly");
        };
    Ja.prototype.toString = function() {
        return "".toString()
    };
    new Ja;
    var Ka, y;
    a: {
        for (var La = ["CLOSURE_FLAGS"], z = r, Ma = 0; Ma < La.length; Ma++)
            if (z = z[La[Ma]], null == z) {
                y = null;
                break a
            }
        y = z
    }
    var Na = y && y[610401301];
    Ka = null != Na ? Na : !1;

    function Oa() {
        var a = r.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var A, Pa = r.navigator;
    A = Pa ? Pa.userAgentData || null : null;

    function Qa(a) {
        return Ka ? A ? A.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }

    function B(a) {
        return -1 != Oa().indexOf(a)
    };

    function C() {
        return Ka ? !!A && 0 < A.brands.length : !1
    }

    function Ra() {
        return C() ? Qa("Chromium") : (B("Chrome") || B("CriOS")) && !(C() ? 0 : B("Edge")) || B("Silk")
    };
    var Sa = {},
        D = function(a, b) {
            if (b !== Sa) throw Error("SafeHtml is not meant to be built directly");
            this.g = a
        };
    D.prototype.toString = function() {
        return this.g.toString()
    };
    var Ta = function(a) {
            if (a instanceof D && a.constructor === D) return a.g;
            ua("expected object of type SafeHtml, got '" + a + "' of type " + la(a));
            return "type_error:SafeHtml"
        },
        Ua = new D(r.trustedTypes && r.trustedTypes.emptyHTML || "", Sa);
    var Va = {
            MATH: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Wa = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            if ("undefined" === typeof document) return !1;
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            if (!a.firstChild) return !1;
            b = a.firstChild.firstChild;
            a.innerHTML = Ta(Ua);
            return !b.parentElement
        });
    var Ya = function(a) {
            var b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            };
            var c = r.document.createElement("div");
            return a.replace(Xa, function(d, e) {
                var g = b[d];
                if (g) return g;
                "#" == e.charAt(0) && (e = Number("0" + e.slice(1)), isNaN(e) || (g = String.fromCharCode(e)));
                if (!g) {
                    g = d + " ";
                    if (void 0 === x) {
                        e = null;
                        var k = r.trustedTypes;
                        if (k && k.createPolicy) {
                            try {
                                e = k.createPolicy("goog#html", {
                                    createHTML: sa,
                                    createScript: sa,
                                    createScriptURL: sa
                                })
                            } catch (l) {
                                r.console && r.console.error(l.message)
                            }
                            x = e
                        } else x = e
                    }
                    g = (e = x) ? e.createHTML(g) :
                        g;
                    g = new D(g, Sa);
                    if (c.tagName && Va[c.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + c.tagName + ".");
                    if (Wa())
                        for (; c.lastChild;) c.removeChild(c.lastChild);
                    c.innerHTML = Ta(g);
                    g = c.firstChild.nodeValue.slice(0, -1)
                }
                return b[d] = g
            })
        },
        Za = function(a) {
            return a.replace(/&([^;]+);/g, function(b, c) {
                switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        return "#" != c.charAt(0) || (c = Number("0" + c.slice(1)), isNaN(c)) ? b : String.fromCharCode(c)
                }
            })
        },
        Xa = /&([^;\s<&]+);?/g;
    chrome.cast.Ja = function(a, b, c, d, e) {
        this.sessionRequest = a;
        this.sessionListener = b;
        this.receiverListener = c;
        this.autoJoinPolicy = d || chrome.cast.ha.TAB_AND_ORIGIN_SCOPED;
        this.defaultActionPolicy = e || chrome.cast.ka.CREATE_SESSION;
        this.customDialLaunchCallback = null;
        this.invisibleSender = !1;
        this.additionalSessionRequests = []
    };
    u("chrome.cast.ApiConfig", chrome.cast.Ja);
    chrome.cast.Ta = function(a, b) {
        this.appName = a;
        this.launchParameter = b || null
    };
    u("chrome.cast.DialRequest", chrome.cast.Ta);
    chrome.cast.Ra = function(a, b, c) {
        this.receiver = a;
        this.appState = b;
        this.extraData = c || null
    };
    u("chrome.cast.DialLaunchData", chrome.cast.Ra);
    chrome.cast.Sa = function(a, b) {
        this.doLaunch = a;
        this.launchParameter = b || null
    };
    u("chrome.cast.DialLaunchResponse", chrome.cast.Sa);
    chrome.cast.tb = function(a, b, c, d, e) {
        c = void 0 === c ? chrome.cast.timeout.requestSession : c;
        this.appId = a;
        this.capabilities = Array.isArray(b) ? b : [];
        this.requestSessionTimeout = c;
        this.dialRequest = this.language = null;
        this.androidReceiverCompatible = void 0 === d ? !1 : d;
        this.credentialsData = void 0 === e ? null : e
    };
    u("chrome.cast.SessionRequest", chrome.cast.tb);
    chrome.cast.mb = function(a, b, c, d) {
        this.label = a;
        a = b;
        Da.test(a) && (-1 != a.indexOf("&") && (a = a.replace(xa, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(ya, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(za, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Aa, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Ba, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Ca, "&#0;")));
        this.friendlyName = a;
        this.capabilities = c || [];
        this.volume = d || null;
        this.receiverType = chrome.cast.ya.CAST;
        this.displayStatus = this.isActiveInput = null
    };
    u("chrome.cast.Receiver", chrome.cast.mb);
    chrome.cast.ob = function(a, b) {
        this.statusText = a;
        this.appImages = b;
        this.showStop = null
    };
    u("chrome.cast.ReceiverDisplayStatus", chrome.cast.ob);
    chrome.cast.Ba = function() {
        this.requestSession = 6E4;
        this.getDialAppInfo = this.sendCustomMessage = this.setReceiverVolume = this.stopSession = this.leaveSession = 3E3
    };
    u("chrome.cast.Timeout", chrome.cast.Ba);
    chrome.cast.timeout = new chrome.cast.Ba;
    u("chrome.cast.timeout", chrome.cast.timeout);
    chrome.cast.Ia = "auto-join";
    chrome.cast.gb = "cast-session_";
    chrome.cast.media.Ya = {
        SDR: "sdr",
        HDR: "hdr",
        DV: "dv"
    };
    u("chrome.cast.media.HdrType", chrome.cast.media.Ya);
    chrome.cast.media.Za = {
        AAC: "aac",
        AC3: "ac3",
        MP3: "mp3",
        TS: "ts",
        TS_AAC: "ts_aac",
        E_AC3: "e_ac3",
        FMP4: "fmp4"
    };
    u("chrome.cast.media.HlsSegmentFormat", chrome.cast.media.Za);
    chrome.cast.media.ab = {
        MPEG2_TS: "mpeg2_ts",
        FMP4: "fmp4"
    };
    u("chrome.cast.media.HlsVideoSegmentFormat", chrome.cast.media.ab);
    chrome.cast.media.eb = {
        PAUSE: "pause",
        SEEK: "seek",
        STREAM_VOLUME: "stream_volume",
        STREAM_MUTE: "stream_mute"
    };
    u("chrome.cast.media.MediaCommand", chrome.cast.media.eb);
    chrome.cast.media.kb = {
        ALBUM: "ALBUM",
        PLAYLIST: "PLAYLIST",
        AUDIOBOOK: "AUDIOBOOK",
        RADIO_STATION: "RADIO_STATION",
        PODCAST_SERIES: "PODCAST_SERIES",
        TV_SERIES: "TV_SERIES",
        VIDEO_PLAYLIST: "VIDEO_PLAYLIST",
        LIVE_TV: "LIVE_TV",
        MOVIE: "MOVIE"
    };
    u("chrome.cast.media.QueueType", chrome.cast.media.kb);
    chrome.cast.media.U = {
        GENERIC_CONTAINER: 0,
        AUDIOBOOK_CONTAINER: 1
    };
    u("chrome.cast.media.ContainerType", chrome.cast.media.U);
    chrome.cast.media.G = {
        GENERIC: 0,
        MOVIE: 1,
        TV_SHOW: 2,
        MUSIC_TRACK: 3,
        PHOTO: 4,
        AUDIOBOOK_CHAPTER: 5
    };
    u("chrome.cast.media.MetadataType", chrome.cast.media.G);
    chrome.cast.media.F = {
        IDLE: "IDLE",
        PLAYING: "PLAYING",
        PAUSED: "PAUSED",
        BUFFERING: "BUFFERING"
    };
    u("chrome.cast.media.PlayerState", chrome.cast.media.F);
    chrome.cast.media.V = {
        OFF: "REPEAT_OFF",
        ALL: "REPEAT_ALL",
        SINGLE: "REPEAT_SINGLE",
        ALL_AND_SHUFFLE: "REPEAT_ALL_AND_SHUFFLE"
    };
    u("chrome.cast.media.RepeatMode", chrome.cast.media.V);
    chrome.cast.media.pb = {
        PLAYBACK_START: "PLAYBACK_START",
        PLAYBACK_PAUSE: "PLAYBACK_PAUSE"
    };
    u("chrome.cast.media.ResumeState", chrome.cast.media.pb);
    chrome.cast.media.Aa = {
        BUFFERED: "BUFFERED",
        LIVE: "LIVE",
        OTHER: "OTHER"
    };
    u("chrome.cast.media.StreamType", chrome.cast.media.Aa);
    chrome.cast.media.bb = {
        CANCELLED: "CANCELLED",
        INTERRUPTED: "INTERRUPTED",
        FINISHED: "FINISHED",
        ERROR: "ERROR"
    };
    u("chrome.cast.media.IdleReason", chrome.cast.media.bb);
    chrome.cast.media.Bb = {
        TEXT: "TEXT",
        AUDIO: "AUDIO",
        VIDEO: "VIDEO"
    };
    u("chrome.cast.media.TrackType", chrome.cast.media.Bb);
    chrome.cast.media.yb = {
        SUBTITLES: "SUBTITLES",
        CAPTIONS: "CAPTIONS",
        DESCRIPTIONS: "DESCRIPTIONS",
        CHAPTERS: "CHAPTERS",
        METADATA: "METADATA"
    };
    u("chrome.cast.media.TextTrackType", chrome.cast.media.yb);
    chrome.cast.media.ub = {
        NONE: "NONE",
        OUTLINE: "OUTLINE",
        DROP_SHADOW: "DROP_SHADOW",
        RAISED: "RAISED",
        DEPRESSED: "DEPRESSED"
    };
    u("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.ub);
    chrome.cast.media.zb = {
        NONE: "NONE",
        NORMAL: "NORMAL",
        ROUNDED_CORNERS: "ROUNDED_CORNERS"
    };
    u("chrome.cast.media.TextTrackWindowType", chrome.cast.media.zb);
    chrome.cast.media.vb = {
        SANS_SERIF: "SANS_SERIF",
        MONOSPACED_SANS_SERIF: "MONOSPACED_SANS_SERIF",
        SERIF: "SERIF",
        MONOSPACED_SERIF: "MONOSPACED_SERIF",
        CASUAL: "CASUAL",
        CURSIVE: "CURSIVE",
        SMALL_CAPITALS: "SMALL_CAPITALS"
    };
    u("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.vb);
    chrome.cast.media.wb = {
        NORMAL: "NORMAL",
        BOLD: "BOLD",
        BOLD_ITALIC: "BOLD_ITALIC",
        ITALIC: "ITALIC"
    };
    u("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.wb);
    chrome.cast.media.Cb = {
        LIKE: "LIKE",
        DISLIKE: "DISLIKE",
        FOLLOW: "FOLLOW",
        UNFOLLOW: "UNFOLLOW"
    };
    u("chrome.cast.media.UserAction", chrome.cast.media.Cb);
    chrome.cast.media.ma = function() {
        this.customData = null
    };
    u("chrome.cast.media.GetStatusRequest", chrome.cast.media.ma);
    chrome.cast.media.qa = function() {
        this.customData = null
    };
    u("chrome.cast.media.PauseRequest", chrome.cast.media.qa);
    chrome.cast.media.sa = function() {
        this.customData = null
    };
    u("chrome.cast.media.PlayRequest", chrome.cast.media.sa);
    chrome.cast.media.qb = function() {
        this.customData = this.resumeState = this.currentTime = null
    };
    u("chrome.cast.media.SeekRequest", chrome.cast.media.qb);
    chrome.cast.media.za = function() {
        this.customData = null
    };
    u("chrome.cast.media.StopRequest", chrome.cast.media.za);
    chrome.cast.media.Hb = function(a) {
        this.volume = a;
        this.customData = null
    };
    u("chrome.cast.media.VolumeRequest", chrome.cast.media.Hb);
    chrome.cast.media.cb = function(a) {
        this.type = "LOAD";
        this.requestId = 0;
        this.sessionId = null;
        this.media = a;
        this.activeTrackIds = null;
        this.autoplay = !0;
        this.atvCredentialsType = this.atvCredentials = this.credentialsType = this.credentials = void 0;
        this.customData = this.currentTime = null;
        this.queueData = this.playbackRate = void 0
    };
    u("chrome.cast.media.LoadRequest", chrome.cast.media.cb);
    chrome.cast.media.hb = function(a) {
        this.type = "PRECACHE";
        this.requestId = 0;
        this.precacheData = a
    };
    chrome.cast.media.Ua = function(a, b) {
        this.requestId = 0;
        this.activeTrackIds = a || null;
        this.textTrackStyle = b || null
    };
    u("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.Ua);
    chrome.cast.media.T = function(a) {
        this.containerType = a = void 0 === a ? chrome.cast.media.U.GENERIC_CONTAINER : a;
        this.containerDuration = this.containerImages = this.sections = this.title = void 0
    };
    u("chrome.cast.media.ContainerMetadata", chrome.cast.media.T);
    chrome.cast.media.MediaMetadata = function(a) {
        this.metadataType = this.type = a;
        this.queueItemId = this.sectionStartTimeInContainer = this.sectionStartAbsoluteTime = this.sectionStartTimeInMedia = this.sectionDuration = void 0
    };
    u("chrome.cast.media.MediaMetadata", chrome.cast.media.MediaMetadata);
    chrome.cast.media.la = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.G.GENERIC);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = void 0
    };
    p(chrome.cast.media.la, chrome.cast.media.MediaMetadata);
    u("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.la);
    chrome.cast.media.oa = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.G.MOVIE);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = void 0
    };
    p(chrome.cast.media.oa, chrome.cast.media.MediaMetadata);
    u("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.oa);
    chrome.cast.media.Ca = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.G.TV_SHOW);
        this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = void 0
    };
    p(chrome.cast.media.Ca, chrome.cast.media.MediaMetadata);
    u("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.Ca);
    chrome.cast.media.pa = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.G.MUSIC_TRACK);
        this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = void 0
    };
    p(chrome.cast.media.pa, chrome.cast.media.MediaMetadata);
    u("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.pa);
    chrome.cast.media.ra = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.G.PHOTO);
        this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = void 0
    };
    p(chrome.cast.media.ra, chrome.cast.media.MediaMetadata);
    u("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.ra);
    chrome.cast.media.ga = function() {
        chrome.cast.media.T.call(this, chrome.cast.media.U.AUDIOBOOK_CONTAINER);
        this.releaseDate = this.publisher = this.narrators = this.authors = void 0
    };
    p(chrome.cast.media.ga, chrome.cast.media.T);
    u("chrome.cast.media.AudiobookContainerMetadata", chrome.cast.media.ga);
    chrome.cast.media.fa = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.G.AUDIOBOOK_CHAPTER);
        this.images = this.subtitle = this.bookTitle = this.chapterNumber = this.title = this.chapterTitle = void 0
    };
    p(chrome.cast.media.fa, chrome.cast.media.MediaMetadata);
    u("chrome.cast.media.AudiobookChapterMediaMetadata", chrome.cast.media.fa);
    chrome.cast.media.fb = function(a, b) {
        this.contentId = a;
        this.contentUrl = void 0;
        this.streamType = chrome.cast.media.Aa.BUFFERED;
        this.contentType = void 0 === b ? "" : b;
        this.metadata = null;
        this.atvEntity = this.entity = void 0;
        this.duration = null;
        this.startAbsoluteTime = void 0;
        this.customData = this.textTrackStyle = this.tracks = null;
        this.userActionStates = this.hlsVideoSegmentFormat = this.hlsSegmentFormat = this.vmapAdsRequest = this.breakClips = this.breaks = void 0
    };
    u("chrome.cast.media.MediaInfo", chrome.cast.media.fb);
    chrome.cast.media.ua = function(a) {
        this.itemId = null;
        this.media = a;
        this.autoplay = !0;
        this.startTime = 0;
        this.playbackDuration = null;
        this.preloadTime = 0;
        this.customData = this.activeTrackIds = null
    };
    u("chrome.cast.media.QueueItem", chrome.cast.media.ua);
    chrome.cast.media.Pa = "CC1AD845";
    u("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.Pa);
    chrome.cast.media.timeout = {};
    chrome.cast.media.timeout.load = 0;
    u("chrome.cast.media.timeout.load", chrome.cast.media.timeout.load);
    chrome.cast.media.timeout.R = 0;
    u("chrome.cast.media.timeout.getStatus", chrome.cast.media.timeout.R);
    chrome.cast.media.timeout.play = 0;
    u("chrome.cast.media.timeout.play", chrome.cast.media.timeout.play);
    chrome.cast.media.timeout.pause = 0;
    u("chrome.cast.media.timeout.pause", chrome.cast.media.timeout.pause);
    chrome.cast.media.timeout.seek = 0;
    u("chrome.cast.media.timeout.seek", chrome.cast.media.timeout.seek);
    chrome.cast.media.timeout.stop = 0;
    u("chrome.cast.media.timeout.stop", chrome.cast.media.timeout.stop);
    chrome.cast.media.timeout.S = 0;
    u("chrome.cast.media.timeout.setVolume", chrome.cast.media.timeout.S);
    chrome.cast.media.timeout.P = 0;
    u("chrome.cast.media.timeout.editTracksInfo", chrome.cast.media.timeout.P);
    chrome.cast.media.timeout.v = 0;
    u("chrome.cast.media.timeout.queue", chrome.cast.media.timeout.v);
    chrome.cast.media.Ab = function(a, b) {
        this.trackId = a;
        this.trackContentType = this.trackContentId = null;
        this.type = b;
        this.customData = this.subtype = this.language = this.name = null
    };
    u("chrome.cast.media.Track", chrome.cast.media.Ab);
    chrome.cast.media.xb = function() {
        this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null
    };
    u("chrome.cast.media.TextTrackStyle", chrome.cast.media.xb);
    chrome.cast.media.jb = function(a) {
        this.type = "QUEUE_LOAD";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.startIndex = 0;
        this.repeatMode = chrome.cast.media.V.OFF;
        this.customData = null
    };
    u("chrome.cast.media.QueueLoadRequest", chrome.cast.media.jb);
    chrome.cast.media.ta = function(a) {
        this.type = "QUEUE_INSERT";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.customData = this.insertBefore = null
    };
    u("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.ta);
    chrome.cast.media.lb = function(a) {
        this.type = "QUEUE_UPDATE";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.customData = null
    };
    u("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.lb);
    chrome.cast.media.N = function() {
        this.type = "QUEUE_UPDATE";
        this.customData = this.jump = this.currentItemId = this.sessionId = this.requestId = null
    };
    u("chrome.cast.media.QueueJumpRequest", chrome.cast.media.N);
    chrome.cast.media.xa = function() {
        this.type = "QUEUE_UPDATE";
        this.customData = this.repeatMode = this.sessionId = this.requestId = null
    };
    u("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.xa);
    chrome.cast.media.va = function(a) {
        this.type = "QUEUE_REMOVE";
        this.sessionId = this.requestId = null;
        this.itemIds = a;
        this.customData = null
    };
    u("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.va);
    chrome.cast.media.wa = function(a) {
        this.type = "QUEUE_REORDER";
        this.sessionId = this.requestId = null;
        this.itemIds = a;
        this.customData = this.insertBefore = null
    };
    u("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.wa);
    chrome.cast.media.Ka = function(a, b, c) {
        this.id = a;
        this.breakClipIds = b;
        this.position = c;
        this.duration = void 0;
        this.isWatched = !1;
        this.isEmbedded = void 0
    };
    u("chrome.cast.media.Break", chrome.cast.media.Ka);
    chrome.cast.media.La = function(a) {
        this.id = a;
        this.vastAdsRequest = this.customData = this.hlsSegmentFormat = this.clickThroughUrl = this.posterUrl = this.whenSkippable = this.duration = this.title = this.contentType = this.contentUrl = this.contentId = void 0
    };
    u("chrome.cast.media.BreakClip", chrome.cast.media.La);
    chrome.cast.media.Eb = function() {
        this.adsResponse = this.adTagUrl = void 0
    };
    u("chrome.cast.media.VastAdsRequest", chrome.cast.media.Eb);
    chrome.cast.media.Ma = function() {
        this.whenSkippable = this.breakClipId = this.breakId = this.currentBreakClipTime = this.currentBreakTime = void 0
    };
    u("chrome.cast.media.BreakStatus", chrome.cast.media.Ma);
    chrome.cast.media.na = function(a, b, c, d) {
        this.start = a;
        this.end = b;
        this.isMovingWindow = c;
        this.isLiveDone = d
    };
    u("chrome.cast.media.LiveSeekableRange", chrome.cast.media.na);
    chrome.cast.media.ib = function(a, b, c, d, e, g, k) {
        this.id = a;
        this.queueType = this.entity = void 0;
        this.name = b;
        this.description = c;
        this.repeatMode = d;
        this.shuffle = !1;
        this.items = e;
        this.startIndex = g;
        this.startTime = k;
        this.containerMetadata = void 0
    };
    u("chrome.cast.media.QueueData", chrome.cast.media.ib);
    chrome.cast.media.Db = function(a) {
        this.userAction = a;
        this.customData = void 0
    };
    u("chrome.cast.media.UserActionState", chrome.cast.media.Db);
    chrome.cast.media.Fb = function(a, b, c) {
        this.width = a;
        this.height = b;
        this.hdrType = c
    };
    u("chrome.cast.media.VideoInformation", chrome.cast.media.Fb);
    var E = null;
    chrome.cast.media.i = function(a, b) {
        this.sessionId = a;
        this.mediaSessionId = b;
        this.media = null;
        this.videoInfo = this.queueData = void 0;
        this.playbackRate = 1;
        this.playerState = chrome.cast.media.F.IDLE;
        this.currentTime = 0;
        this.g = -1;
        this.supportedMediaCommands = [];
        this.volume = new chrome.cast.Volume;
        this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
        this.repeatMode = chrome.cast.media.V.OFF;
        this.breakStatus = void 0;
        this.j = !1;
        this.h = [];
        this.liveSeekableRange =
            void 0
    };
    f = chrome.cast.media.i.prototype;
    f.R = function(a, b, c) {
        a || (a = new chrome.cast.media.ma);
        E.o(this, "MEDIA_GET_STATUS", a, b, c, chrome.cast.media.timeout.R)
    };
    f.play = function(a, b, c) {
        var d = E;
        a || (a = new chrome.cast.media.sa);
        d.o(this, "PLAY", a, b, c, chrome.cast.media.timeout.play)
    };
    f.pause = function(a, b, c) {
        var d = E;
        a || (a = new chrome.cast.media.qa);
        d.o(this, "PAUSE", a, b, c, chrome.cast.media.timeout.pause)
    };
    f.seek = function(a, b, c) {
        E.o(this, "SEEK", a, b, c, chrome.cast.media.timeout.seek)
    };
    f.stop = function(a, b, c) {
        a || (a = new chrome.cast.media.za);
        E.o(this, "STOP_MEDIA", a, b, c, chrome.cast.media.timeout.stop)
    };
    f.S = function(a, b, c) {
        E.o(this, "MEDIA_SET_VOLUME", a, b, c, chrome.cast.media.timeout.S)
    };
    f.P = function(a, b, c) {
        E.o(this, "EDIT_TRACKS_INFO", a, b, c, chrome.cast.media.timeout.P)
    };
    f.Wb = function(a, b, c) {
        E.o(this, "QUEUE_INSERT", a, b, c, chrome.cast.media.timeout.v)
    };
    f.Vb = function(a, b, c) {
        E.o(this, "QUEUE_INSERT", new chrome.cast.media.ta([a]), b, c, chrome.cast.media.timeout.v)
    };
    f.hc = function(a, b, c) {
        E.o(this, "QUEUE_UPDATE", a, b, c, chrome.cast.media.timeout.v)
    };
    f.bc = function(a, b) {
        var c = new chrome.cast.media.N;
        c.jump = -1;
        E.o(this, "QUEUE_UPDATE", c, a, b, chrome.cast.media.timeout.v)
    };
    f.ac = function(a, b) {
        var c = new chrome.cast.media.N;
        c.jump = 1;
        E.o(this, "QUEUE_UPDATE", c, a, b, chrome.cast.media.timeout.v)
    };
    f.Xb = function(a, b, c) {
        if (!(0 > $a(this, a))) {
            var d = new chrome.cast.media.N;
            d.currentItemId = a;
            E.o(this, "QUEUE_UPDATE", d, b, c, chrome.cast.media.timeout.v)
        }
    };
    f.fc = function(a, b, c) {
        var d = new chrome.cast.media.xa;
        d.repeatMode = a;
        E.o(this, "QUEUE_UPDATE", d, b, c, chrome.cast.media.timeout.v)
    };
    f.dc = function(a, b, c) {
        E.o(this, "QUEUE_REMOVE", a, b, c, chrome.cast.media.timeout.v)
    };
    f.cc = function(a, b, c) {
        0 > $a(this, a) || E.o(this, "QUEUE_REMOVE", new chrome.cast.media.va([a]), b, c, chrome.cast.media.timeout.v)
    };
    f.ec = function(a, b, c) {
        E.o(this, "QUEUE_REORDER", a, b, c, chrome.cast.media.timeout.v)
    };
    f.Zb = function(a, b, c, d) {
        var e = $a(this, a);
        if (!(0 > e))
            if (0 > b) d && d(new chrome.cast.Error(chrome.cast.C.INVALID_PARAMETER));
            else if (e == b) c && c();
        else {
            var g = null;
            b = b > e ? b + 1 : b;
            b < this.items.length && (g = this.items[b]);
            a = new chrome.cast.media.wa([a]);
            a.insertBefore = g ? g.itemId : null;
            E.o(this, "QUEUE_REORDER", a, c, d, chrome.cast.media.timeout.v)
        }
    };
    f.sc = function(a) {
        return -1 < this.supportedMediaCommands.indexOf(a)
    };
    f.Qb = function() {
        if (this.playerState == chrome.cast.media.F.PLAYING && 0 <= this.g) {
            var a = this.currentTime + (Date.now() - this.g) / 1E3 * this.playbackRate;
            this.media && null != this.media.duration && a > this.media.duration && -1 != this.media.duration && (a = this.media.duration);
            0 > a && (a = 0);
            return a
        }
        return this.currentTime
    };
    f.Ob = function() {
        if (this.breakStatus && void 0 !== this.breakStatus.currentBreakTime) return this.playerState == chrome.cast.media.F.PLAYING && 0 <= this.g ? this.breakStatus.currentBreakTime + (Date.now() - this.g) / 1E3 : this.breakStatus.currentBreakTime
    };
    f.Nb = function() {
        if (this.breakStatus && void 0 !== this.breakStatus.currentBreakClipTime) return this.playerState == chrome.cast.media.F.PLAYING && 0 <= this.g ? this.breakStatus.currentBreakClipTime + (Date.now() - this.g) / 1E3 : this.breakStatus.currentBreakClipTime
    };
    f.Pb = function() {
        if (this.liveSeekableRange && void 0 !== this.liveSeekableRange.start && void 0 !== this.liveSeekableRange.end) {
            if (this.playerState == chrome.cast.media.F.PLAYING && 0 <= this.g) {
                var a = (Date.now() - this.g) / 1E3,
                    b = new chrome.cast.media.na;
                b.isMovingWindow = this.liveSeekableRange.isMovingWindow;
                b.isLiveDone = this.liveSeekableRange.isLiveDone;
                b.start = b.isMovingWindow ? this.liveSeekableRange.start + a : this.liveSeekableRange.start;
                b.end = b.isLiveDone ? this.liveSeekableRange.end : this.liveSeekableRange.end + a;
                return b
            }
            return this.liveSeekableRange
        }
    };
    f.Y = function(a) {
        E.Jb(this, a)
    };
    f.ba = function(a) {
        E.jc(this, a)
    };
    var $a = function(a, b) {
        return wa(a.items, function(c) {
            return c.itemId == b
        })
    };
    u("chrome.cast.media.Media", chrome.cast.media.i);
    chrome.cast.media.i.prototype.removeUpdateListener = chrome.cast.media.i.prototype.ba;
    chrome.cast.media.i.prototype.addUpdateListener = chrome.cast.media.i.prototype.Y;
    chrome.cast.media.i.prototype.getEstimatedLiveSeekableRange = chrome.cast.media.i.prototype.Pb;
    chrome.cast.media.i.prototype.getEstimatedBreakClipTime = chrome.cast.media.i.prototype.Nb;
    chrome.cast.media.i.prototype.getEstimatedBreakTime = chrome.cast.media.i.prototype.Ob;
    chrome.cast.media.i.prototype.getEstimatedTime = chrome.cast.media.i.prototype.Qb;
    chrome.cast.media.i.prototype.supportsCommand = chrome.cast.media.i.prototype.sc;
    chrome.cast.media.i.prototype.queueMoveItemToNewIndex = chrome.cast.media.i.prototype.Zb;
    chrome.cast.media.i.prototype.queueReorderItems = chrome.cast.media.i.prototype.ec;
    chrome.cast.media.i.prototype.queueRemoveItem = chrome.cast.media.i.prototype.cc;
    chrome.cast.media.i.prototype.queueRemoveItems = chrome.cast.media.i.prototype.dc;
    chrome.cast.media.i.prototype.queueSetRepeatMode = chrome.cast.media.i.prototype.fc;
    chrome.cast.media.i.prototype.queueJumpToItem = chrome.cast.media.i.prototype.Xb;
    chrome.cast.media.i.prototype.queueNext = chrome.cast.media.i.prototype.ac;
    chrome.cast.media.i.prototype.queuePrev = chrome.cast.media.i.prototype.bc;
    chrome.cast.media.i.prototype.queueUpdateItems = chrome.cast.media.i.prototype.hc;
    chrome.cast.media.i.prototype.queueAppendItem = chrome.cast.media.i.prototype.Vb;
    chrome.cast.media.i.prototype.queueInsertItems = chrome.cast.media.i.prototype.Wb;
    chrome.cast.media.i.prototype.editTracksInfo = chrome.cast.media.i.prototype.P;
    chrome.cast.media.i.prototype.setVolume = chrome.cast.media.i.prototype.S;
    chrome.cast.media.i.prototype.stop = chrome.cast.media.i.prototype.stop;
    chrome.cast.media.i.prototype.seek = chrome.cast.media.i.prototype.seek;
    chrome.cast.media.i.prototype.pause = chrome.cast.media.i.prototype.pause;
    chrome.cast.media.i.prototype.play = chrome.cast.media.i.prototype.play;
    chrome.cast.media.i.prototype.getStatus = chrome.cast.media.i.prototype.R;
    var ab = function(a, b, c) {
        this.sessionId = a;
        this.namespaceName = b;
        this.message = c
    };
    var bb = function(a, b) {
        this.type = "SET_VOLUME";
        this.requestId = 0;
        this.volume = a;
        this.expectedVolume = b || null
    };
    var cb = function(a) {
        this.type = "STOP";
        this.requestId = 0;
        this.sessionId = a || null
    };
    chrome.cast.l = function(a, b, c, d, e) {
        this.sessionId = a;
        this.appId = b;
        this.displayName = c;
        this.statusText = null;
        this.appImages = d;
        this.receiver = e;
        this.senderApps = [];
        this.namespaces = [];
        this.media = [];
        this.status = chrome.cast.L.CONNECTED;
        this.transportId = ""
    };
    f = chrome.cast.l.prototype;
    f.qc = function(a, b, c) {
        var d = E;
        a = new bb(new chrome.cast.Volume(a, null), this.receiver.volume);
        d.setReceiverVolume(this.sessionId, a, b, c)
    };
    f.pc = function(a, b, c) {
        a = new bb(new chrome.cast.Volume(null, a), this.receiver.volume);
        E.setReceiverVolume(this.sessionId, a, b, c)
    };
    f.getDialAppInfo = function(a, b) {
        E.getDialAppInfo(a, b)
    };
    f.Rb = function(a, b) {
        E.leaveSession(this.sessionId, a, b)
    };
    f.stop = function(a, b) {
        E.Ea(new cb(this.sessionId), a, b, chrome.cast.timeout.stopSession)
    };
    f.sendMessage = function(a, b, c, d) {
        E.mc(new ab(this.sessionId, a, b), c, d)
    };
    f.Y = function(a) {
        E.Lb(this.sessionId, a)
    };
    f.ba = function(a) {
        E.lc(this.sessionId, a)
    };
    f.Kb = function(a, b) {
        E.Ib(this.sessionId, a, b)
    };
    f.W = function(a) {
        E.W(this.sessionId, a)
    };
    f.Z = function(a) {
        E.Z(this.sessionId, a)
    };
    f.kc = function(a, b) {
        E.ic(this.sessionId, a, b)
    };
    f.Sb = function(a, b, c) {
        a.sessionId = this.sessionId;
        E.Fa(a, "LOAD", b, c)
    };
    f.Yb = function(a, b, c) {
        a.sessionId = this.sessionId;
        E.Fa(a, "QUEUE_LOAD", b, c)
    };
    u("chrome.cast.Session", chrome.cast.l);
    chrome.cast.l.prototype.queueLoad = chrome.cast.l.prototype.Yb;
    chrome.cast.l.prototype.loadMedia = chrome.cast.l.prototype.Sb;
    chrome.cast.l.prototype.removeMessageListener = chrome.cast.l.prototype.kc;
    chrome.cast.l.prototype.removeMediaListener = chrome.cast.l.prototype.Z;
    chrome.cast.l.prototype.addMediaListener = chrome.cast.l.prototype.W;
    chrome.cast.l.prototype.addMessageListener = chrome.cast.l.prototype.Kb;
    chrome.cast.l.prototype.removeUpdateListener = chrome.cast.l.prototype.ba;
    chrome.cast.l.prototype.addUpdateListener = chrome.cast.l.prototype.Y;
    chrome.cast.l.prototype.sendMessage = chrome.cast.l.prototype.sendMessage;
    chrome.cast.l.prototype.stop = chrome.cast.l.prototype.stop;
    chrome.cast.l.prototype.leave = chrome.cast.l.prototype.Rb;
    chrome.cast.l.prototype.getDialAppInfo = chrome.cast.l.prototype.getDialAppInfo;
    chrome.cast.l.prototype.setReceiverMuted = chrome.cast.l.prototype.pc;
    chrome.cast.l.prototype.setReceiverVolumeLevel = chrome.cast.l.prototype.qc;
    var db = function(a, b) {
        this.g = a[r.Symbol.iterator]();
        this.h = b
    };
    db.prototype[Symbol.iterator] = function() {
        return this
    };
    db.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.h.call(void 0, a.value),
            done: a.done
        }
    };
    var eb = function(a, b) {
        return new db(a, b)
    };
    var fb = Object.freeze || function(a) {
        return a
    };
    var F = function() {};
    F.prototype.next = function() {
        return gb
    };
    var gb = fb({
        done: !0,
        value: void 0
    });
    F.prototype.s = function() {
        return this
    };
    var hb = function(a) {
            if (a instanceof F) return a;
            if ("function" == typeof a.s) return a.s(!1);
            if (ma(a)) {
                var b = 0,
                    c = new F;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return gb;
                        if (b in a) return {
                            value: a[b++],
                            done: !1
                        };
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        G = function(a, b) {
            if (ma(a)) va(a, b);
            else
                for (a = hb(a);;) {
                    var c = a.next();
                    if (c.done) break;
                    b.call(void 0, c.value, void 0, a)
                }
        };
    var ib = function(a) {
            if (a instanceof H || a instanceof I || a instanceof J) return a;
            if ("function" == typeof a.next) return new H(function() {
                return a
            });
            if ("function" == typeof a[Symbol.iterator]) return new H(function() {
                return a[Symbol.iterator]()
            });
            if ("function" == typeof a.s) return new H(function() {
                return a.s()
            });
            throw Error("Not an iterator or iterable.");
        },
        H = function(a) {
            this.g = a
        };
    H.prototype.s = function() {
        return new I(this.g())
    };
    H.prototype[Symbol.iterator] = function() {
        return new J(this.g())
    };
    H.prototype.h = function() {
        return new J(this.g())
    };
    var I = function(a) {
        this.g = a
    };
    p(I, F);
    I.prototype.next = function() {
        return this.g.next()
    };
    I.prototype[Symbol.iterator] = function() {
        return new J(this.g)
    };
    I.prototype.h = function() {
        return new J(this.g)
    };
    var J = function(a) {
        H.call(this, function() {
            return a
        });
        this.j = a
    };
    p(J, H);
    J.prototype.next = function() {
        return this.j.next()
    };
    var K = function(a, b) {
        this.h = {};
        this.g = [];
        this.j = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof K)
                for (c = jb(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    K.prototype.M = function() {
        L(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
        return a
    };
    var jb = function(a) {
        L(a);
        return a.g.concat()
    };
    K.prototype.has = function(a) {
        return M(this.h, a)
    };
    K.prototype.clear = function() {
        this.h = {};
        this.j = this.size = this.g.length = 0
    };
    K.prototype.remove = function(a) {
        return this.delete(a)
    };
    K.prototype.delete = function(a) {
        return M(this.h, a) ? (delete this.h[a], --this.size, this.j++, this.g.length > 2 * this.size && L(this), !0) : !1
    };
    var L = function(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                M(a.h, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], M(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    };
    f = K.prototype;
    f.get = function(a, b) {
        return M(this.h, a) ? this.h[a] : b
    };
    f.set = function(a, b) {
        M(this.h, a) || (this.size += 1, this.g.push(a), this.j++);
        this.h[a] = b
    };
    f.forEach = function(a, b) {
        for (var c = jb(this), d = 0; d < c.length; d++) {
            var e = c[d],
                g = this.get(e);
            a.call(b, g, e, this)
        }
    };
    f.keys = function() {
        return ib(this.s(!0)).h()
    };
    f.values = function() {
        return ib(this.s(!1)).h()
    };
    f.entries = function() {
        var a = this;
        return eb(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    f.s = function(a) {
        L(this);
        var b = 0,
            c = this.j,
            d = this,
            e = new F;
        e.next = function() {
            if (c != d.j) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) return gb;
            var g = d.g[b++];
            return {
                value: a ? g : d.h[g],
                done: !1
            }
        };
        return e
    };
    var M = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var kb = function(a, b) {
        this.requestId = a;
        this.m = b;
        this.Ha = null
    };
    kb.prototype.h = function() {};
    var lb = function() {
            this.g = new K
        },
        mb = function(a, b) {
            a.g.set(b.requestId, b);
            b.Ha = setTimeout(function() {
                a.g.delete(b.requestId);
                b.h()
            }, b.m)
        },
        nb = function(a, b) {
            var c = a.g.get(b);
            if (!c) return null;
            clearTimeout(c.Ha);
            a.g.delete(b);
            return c
        };
    var N = function(a, b, c, d) {
        kb.call(this, a, d || 6E5);
        this.j = b;
        this.g = c
    };
    p(N, kb);
    N.prototype.h = function() {
        this.g(new chrome.cast.Error(chrome.cast.C.TIMEOUT))
    };
    var O = function(a, b, c, d) {
        this.type = a;
        this.message = b;
        this.sequenceNumber = void 0 !== c ? c : -1;
        this.timeoutMillis = d || 0;
        this.clientId = ""
    };
    var P = function(a) {
            this.j = a;
            this.h = String(Date.now()) + String(Math.floor(1E5 * Math.random()));
            this.g = null
        },
        ob = function(a, b) {
            if (!a.g) return "No active session";
            b.clientId = a.h;
            b = JSON.stringify(b);
            if (32768 < b.length) return "Message length over limit";
            a.g.send(b);
            return null
        };
    P.prototype.connect = function(a) {
        this.g = a;
        this.g.onmessage = t(this.m, this);
        ob(this, new O("client_connect", this.h))
    };
    P.prototype.disconnect = function() {
        this.g.close();
        this.g = null
    };
    P.prototype.m = function(a) {
        a = JSON.parse(a.data);
        if (a.clientId == this.h) this.j.onMessage(a)
    };
    var pb = function(a, b, c) {
            this.j = a;
            this.h = b;
            this.g = c
        },
        qb = function(a) {
            var b = "cast-dial:" + a.j,
                c = new URLSearchParams;
            a.h && c.set("dialPostData", a.h);
            a.g && c.set("clientId", a.g);
            (a = c.toString()) && (b += "?" + a);
            return b
        };
    var rb = function(a, b, c, d, e, g, k, l, q, w, yb, zb) {
            this.J = a;
            this.g = b || null;
            this.j = c || null;
            this.B = d || null;
            this.D = void 0 !== e ? e : null;
            this.h = g || null;
            this.I = k || null;
            this.H = l || !1;
            this.u = q || null;
            this.m = w || null;
            this.K = yb ? ["WEB", "ANDROID_TV"] : ["WEB"];
            this.A = zb || null
        },
        sb = function(a) {
            var b = a.J.map(function(c) {
                var d = "cast:" + c.appId,
                    e = new URLSearchParams;
                c.capabilities && 0 < c.capabilities.length && e.set("capabilities", c.capabilities.join(","));
                a.g && e.set("clientId", a.g);
                a.j && e.set("autoJoinPolicy", a.j);
                a.B && e.set("defaultActionPolicy",
                    a.B);
                null != a.D && e.set("launchTimeout", String(a.D));
                a.H && e.set("invisibleSender", "true");
                a.u && (e.set("broadcastNamespace", a.u), e.set("broadcastId", String(Math.random())));
                a.m && e.set("broadcastMessage", encodeURIComponent(JSON.stringify(a.m)));
                e.set("supportedAppTypes", a.K.join(","));
                c = e.set;
                var g = JSON,
                    k = g.stringify,
                    l = {
                        launchCheckerParams: {}
                    };
                a.A && (l.launchCheckerParams.credentialsData = a.A);
                c.call(e, "appParams", k.call(g, l));
                return d + "?" + e.toString()
            });
            a.h && b.push(qb(new pb(a.h, a.I, a.g)));
            return b
        };
    var tb = function() {
            this.g = {};
            this.h = {}
        },
        ub = function(a, b, c) {
            var d = a.g[b];
            return d ? (d.status = c, d.media.forEach(function(e) {
                delete a.h[e.sessionId + "#" + e.mediaSessionId]
            }), delete a.g[b], !0) : !1
        },
        wb = function(a, b) {
            var c = a.g[b.sessionId];
            if (c) return c.statusText = b.statusText, c.namespaces = b.namespaces || [], c.receiver.volume = b.receiver.volume, c;
            c = new chrome.cast.l(b.sessionId, b.appId, b.displayName, b.appImages, b.receiver);
            for (var d in b) "media" == d ? c.media = b.media.map(function(e) {
                    e = vb(a, e);
                    e.m = !1;
                    e.j = !0;
                    return e
                }) :
                b.hasOwnProperty(d) && (c[d] = b[d]);
            return a.g[b.sessionId] = c
        },
        vb = function(a, b) {
            var c = b.sessionId + "#" + b.mediaSessionId,
                d = a.h[c];
            d || (d = new chrome.cast.media.i(b.sessionId, b.mediaSessionId), a.h[c] = d, (a = a.g[b.sessionId]) && a.media.push(d));
            a = d;
            a.currentItemId = null;
            a.loadingItemId = null;
            a.preloadedItemId = null;
            for (var e in b) "items" != e && b.hasOwnProperty(e) && ("volume" == e ? (a.volume.level = b.volume.level, a.volume.muted = b.volume.muted) : a[e] = b[e]);
            e = fa(["idleReason", "extendedStatus", "breakStatus"]);
            for (c = e.next(); !c.done; c =
                e.next()) c = c.value, b.hasOwnProperty(c) || (a[c] = null);
            "currentTime" in b && (a.g = Date.now());
            if (a.playerState == chrome.cast.media.F.IDLE && null == a.loadingItemId) a.currentItemId = null, a.loadingItemId = null, a.preloadedItemId = null, a.items = null;
            else if (b.hasOwnProperty("items") && b.items) {
                e = [];
                var g = a.items;
                c = {};
                if (g)
                    for (var k = 0; k < g.length; k++) c[g[k].itemId] = k;
                b = fa(b.items);
                for (g = b.next(); !g.done; g = b.next()) {
                    g = g.value;
                    if (!g.media) {
                        k = g.itemId;
                        var l = a.items ? a.items[c[k]] : null;
                        l && l.media ? g.media = l.media : k == a.currentItemId &&
                            a.media && (g.media = a.media)
                    }
                    k = e;
                    l = k.push;
                    var q = void 0,
                        w = new chrome.cast.media.ua(g.media);
                    for (q in g) g.hasOwnProperty(q) && (w[q] = g[q]);
                    l.call(k, w)
                }
                a.items = e
            }
            return d
        },
        xb = function(a, b) {
            delete a.h[b.sessionId + "#" + b.mediaSessionId];
            if (a = a.g[b.sessionId]) b = a.media.indexOf(b), -1 != b && a.media.splice(b, 1)
        };
    var Q = function() {
        this.u = this.u
    };
    Q.prototype.u = !1;
    Q.prototype.isDisposed = function() {
        return this.u
    };
    var Ab = B("Gecko") && !(-1 != Oa().toLowerCase().indexOf("webkit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"),
        Bb = -1 != Oa().toLowerCase().indexOf("webkit") && !B("Edge");
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {};
    r.console && r.console.createTask && r.console.createTask.bind(r.console);
    var Cb = function(a, b) {
        if ("function" !== typeof a)
            if (a && "function" == typeof a.handleEvent) a = t(a.handleEvent, a);
            else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : r.setTimeout(a, b || 0)
    };
    var R = function(a, b, c) {
        Q.call(this);
        this.D = null != c ? a.bind(c) : a;
        this.B = b;
        this.m = null;
        this.h = !1;
        this.j = 0;
        this.g = null
    };
    p(R, Q);
    R.prototype.A = function(a) {
        this.m = arguments;
        this.g || this.j ? this.h = !0 : Db(this)
    };
    R.prototype.stop = function() {
        this.g && (r.clearTimeout(this.g), this.g = null, this.h = !1, this.m = null)
    };
    R.prototype.pause = function() {
        this.j++
    };
    R.prototype.resume = function() {
        this.j--;
        this.j || !this.h || this.g || (this.h = !1, Db(this))
    };
    var Db = function(a) {
        a.g = Cb(function() {
            a.g = null;
            a.h && !a.j && (a.h = !1, Db(a))
        }, a.B);
        var b = a.m;
        a.m = null;
        a.D.apply(null, b)
    };
    !B("Android") || Ra();
    Ra();
    B("Safari") && (Ra() || (C() ? 0 : B("Coast")) || (C() ? 0 : B("Opera")) || (C() ? 0 : B("Edge")) || (C() ? Qa("Microsoft Edge") : B("Edg/")) || C() && Qa("Opera"));
    var Eb = {},
        S = null,
        Fb = Ab || Bb || "function" == typeof r.btoa,
        Gb = function(a) {
            if (Fb) var b = r.btoa(a);
            else {
                b = [];
                for (var c = 0, d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    if (255 < e) throw Error("go/unicode-to-byte-error");
                    b[c++] = e
                }
                a = void 0;
                void 0 === a && (a = 0);
                if (!S)
                    for (S = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                        var g = c.concat(d[e].split(""));
                        Eb[e] = g;
                        for (var k = 0; k < g.length; k++) {
                            var l = g[k];
                            void 0 === S[l] && (S[l] = k)
                        }
                    }
                a = Eb[a];
                c = Array(Math.floor(b.length /
                    3));
                d = a[64] || "";
                for (e = g = 0; g < b.length - 2; g += 3) {
                    var q = b[g],
                        w = b[g + 1];
                    l = b[g + 2];
                    k = a[q >> 2];
                    q = a[(q & 3) << 4 | w >> 4];
                    w = a[(w & 15) << 2 | l >> 6];
                    l = a[l & 63];
                    c[e++] = "" + k + q + w + l
                }
                k = 0;
                l = d;
                switch (b.length - g) {
                    case 2:
                        k = b[g + 1], l = a[(k & 15) << 2] || d;
                    case 1:
                        b = b[g], c[e] = "" + a[b >> 2] + a[(b & 3) << 4 | k >> 4] + l + d
                }
                b = c.join("")
            }
            return b
        };
    var Hb = function(a) {
        if (a.M && "function" == typeof a.M) return a.M();
        if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
        if ("string" === typeof a) return a.split("");
        if (ma(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    };
    var T = function() {
            this.g = new K;
            this.size = 0
        },
        U = function(a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + (Object.prototype.hasOwnProperty.call(a, na) && a[na] || (a[na] = ++oa)) : b.slice(0, 1) + a
        };
    f = T.prototype;
    f.add = function(a) {
        this.g.set(U(a), a);
        this.size = this.g.size
    };
    f.removeAll = function(a) {
        a = Hb(a);
        for (var b = a.length, c = 0; c < b; c++) this.remove(a[c]);
        this.size = this.g.size
    };
    f.delete = function(a) {
        a = this.g.remove(U(a));
        this.size = this.g.size;
        return a
    };
    f.remove = function(a) {
        return this.delete(a)
    };
    f.clear = function() {
        this.g.clear();
        this.size = 0
    };
    f.has = function(a) {
        a = U(a);
        return this.g.has(a)
    };
    f.contains = function(a) {
        a = U(a);
        return this.g.has(a)
    };
    f.M = function() {
        return this.g.M()
    };
    f.values = function() {
        return this.g.values()
    };
    f.s = function() {
        return this.g.s(!1)
    };
    T.prototype[Symbol.iterator] = function() {
        return this.values()
    };
    var V = function() {
            this.A = new P(this);
            this.g = null;
            this.H = new tb;
            this.h = 0;
            this.K = new lb;
            this.B = new K;
            this.ja = !1;
            this.u = new K;
            this.I = new K;
            this.J = [];
            this.Wa = this.Mb.bind(this);
            this.j = null;
            this.D = 0;
            this.m = null;
            this.Va = new R(this.Xa, 200, this);
            this.ia = null
        },
        Ib = function(a) {
            var b = new chrome.cast.Error(chrome.cast.C.INVALID_PARAMETER, "Already requesting session");
            a && a(b)
        },
        W = function(a, b, c, d) {
            c && mb(a.K, c);
            void 0 !== d ? b.sequenceNumber = d : (b.sequenceNumber = a.h, a.h = (a.h + 1) % 9007199254740992);
            d = ob(a.A, b);
            c && d && (a =
                nb(a.K, b.sequenceNumber)) && (b = new chrome.cast.Error(chrome.cast.C.INVALID_PARAMETER, d), (a = a.g) && a(b))
        };
    V.prototype.initialize = function(a, b) {
        var c = this;
        E = this;
        this.g = a;
        a.invisibleSender || (a = new PresentationRequest(X(this)), a.getAvailability().then(function(d) {
            d.onchange = function() {
                c.ja = !!d.value;
                c.g.receiverListener(d.value ? chrome.cast.O.AVAILABLE : chrome.cast.O.UNAVAILABLE)
            };
            d.onchange()
        }, function() {
            c.g.receiverListener(chrome.cast.O.AVAILABLE)
        }), a.onconnectionavailable = function(d) {
            Y(c, d.connection)
        }, this.ia = (r.navigator || null).presentation.defaultRequest = a, a.reconnect(chrome.cast.Ia).then(function(d) {
            Y(c,
                d)
        }, function() {}));
        b && b(void 0)
    };
    V.prototype.da = function(a) {
        a.navigator.presentation.defaultRequest = this.ia
    };
    var Y = function(a, b, c) {
            c = void 0 === c ? null : c;
            b.onclose = function(d) {
                a.j = null;
                switch (d.reason) {
                    case "closed":
                        Jb(a, chrome.cast.L.DISCONNECTED);
                        break;
                    case "error":
                        c && (d = new chrome.cast.Error(chrome.cast.C.SESSION_ERROR), c && c(d))
                }
            };
            b.onterminate = function() {
                Jb(a, chrome.cast.L.STOPPED)
            };
            "connected" == b.state ? a.A.connect(b) : b.onconnect = function() {
                a.A.connect(b)
            }
        },
        Mb = function(a) {
            var b = Z;
            Kb.has(a.type) && b.ja && (b.m ? (a.sessionId = b.m, Lb(b, null, a.type, a, function() {}, function() {})) : b.Va.A(X(b, void 0, "urn:x-cast:com.google.cast.media",
                a)))
        };
    V.prototype.Xa = function(a) {
        (a = (new PresentationRequest(a)).getAvailability()) && a.then(function() {}, function() {})
    };
    V.prototype.requestSession = function(a, b, c) {
        var d = this;
        this.j ? Ib(b) : (c = X(this, c), this.j = a, (new PresentationRequest(c)).start().then(function(e) {
            Y(d, e, b)
        }).catch(function(e) {
            d.j = null;
            e = new chrome.cast.Error("AbortError" == e.name || "NotAllowedError" == e.name ? chrome.cast.C.CANCEL : chrome.cast.C.SESSION_ERROR);
            b && b(e)
        }))
    };
    var X = function(a, b, c, d) {
        var e = null,
            g = null;
        b = b || a.g.sessionRequest;
        var k = b.dialRequest;
        k && (e = k.appName, (g = k.launchParameter) && !g.match(Nb) && (g = Gb(g)));
        var l = [];
        l.push({
            appId: b.appId,
            capabilities: b.capabilities
        });
        b || va(a.g.additionalSessionRequests, function(q) {
            l.push({
                appId: q.appId,
                capabilities: q.capabilities
            })
        });
        return sb(new rb(l, a.A.h, a.g.autoJoinPolicy, a.g.defaultActionPolicy, b.requestSessionTimeout, e, g, a.g.invisibleSender, c, d, b.androidReceiverCompatible, b.credentialsData))
    };
    V.prototype.Fa = function(a, b, c, d) {
        var e = this;
        this.D++;
        Lb(this, null, b, a, function(g) {
            e.D--;
            g.j = !0;
            c && c(g)
        }, function(g) {
            e.D--;
            d(g)
        }, chrome.cast.media.timeout.load)
    };
    V.prototype.o = function(a, b, c, d, e, g) {
        var k = this;
        Lb(this, a, b, c, function(l) {
            k.Da(l);
            d && d(void 0)
        }, e, g)
    };
    var Lb = function(a, b, c, d, e, g, k) {
        d.type = c;
        null != b && (d.mediaSessionId = b.mediaSessionId, d.sessionId = b.sessionId);
        a.Ea(d, function(l) {
            l.status && 1 == l.status.length ? e && e(l.status[0]) : (l = new chrome.cast.Error(chrome.cast.C.SESSION_ERROR), g && g(l))
        }, g, k)
    };
    f = V.prototype;
    f.setReceiverVolume = function(a, b, c, d) {
        b.sessionId = a;
        W(this, new O("v2_message", b, void 0, chrome.cast.timeout.setReceiverVolume), new N(this.h, c, d, chrome.cast.timeout.sendCustomMessage))
    };
    f.getDialAppInfo = function(a, b) {
        W(this, new O("dial_app_info", void 0, void 0, chrome.cast.timeout.getDialAppInfo), new N(this.h, a, b, chrome.cast.timeout.sendCustomMessage))
    };
    f.ca = function(a) {
        var b = this;
        (new PresentationRequest(X(this))).reconnect(chrome.cast.gb + a).then(function(c) {
            Y(b, c)
        }, function() {})
    };
    f.leaveSession = function(a, b, c) {
        W(this, new O("leave_session", a, void 0, chrome.cast.timeout.leaveSession), new N(this.h, b, c, chrome.cast.timeout.leaveSession))
    };
    f.mc = function(a, b, c) {
        W(this, new O("app_message", a, void 0, chrome.cast.timeout.sendCustomMessage), new N(this.h, b, c, chrome.cast.timeout.sendCustomMessage))
    };
    f.Ea = function(a, b, c, d) {
        W(this, new O("v2_message", a, void 0, d), new N(this.h, b, c, d))
    };
    var Ob = function(a, b, c) {
        var d = a.get(b);
        d || (d = new T, a.set(b, d));
        d.add(c)
    };
    f = V.prototype;
    f.Lb = function(a, b) {
        Ob(this.B, a, b)
    };
    f.lc = function(a, b) {
        (a = this.B.get(a)) && a.remove(b)
    };
    f.X = function(a) {
        this.J.push(a)
    };
    f.aa = function(a) {
        a = this.J.indexOf(a);
        0 <= a && this.J.splice(a, 1)
    };
    f.Ib = function(a, b, c) {
        var d = this.u.get(a);
        d || (d = new K, this.u.set(a, d));
        a = d.get(b);
        a || (a = new T, d.set(b, a));
        a.add(c)
    };
    f.ic = function(a, b, c) {
        (a = this.u.get(a)) && (b = a.get(b)) && b.remove(c)
    };
    f.W = function(a, b) {
        Ob(this.I, a, b)
    };
    f.Z = function(a, b) {
        (a = this.I.get(a)) && a.remove(b)
    };
    f.Jb = function(a, b) {
        -1 == a.h.indexOf(b) && a.h.push(b)
    };
    f.jc = function(a, b) {
        b = a.h.indexOf(b); - 1 != b && a.h.splice(b, 1)
    };
    f.Da = function(a) {
        if (a.j) {
            var b = a.playerState != chrome.cast.media.F.IDLE || null != a.loadingItemId;
            a.h.forEach(function(d) {
                d(b)
            });
            b || xb(this.H, a)
        } else if (!(0 < this.D)) {
            a.j = !0;
            var c = this.I.get(a.sessionId);
            c && G(c.s(), function(d) {
                d(a)
            })
        }
    };
    f.Mb = function(a) {
        return vb(this.H, a)
    };
    var Jb = function(a, b) {
        if (a.m) {
            var c = a.m;
            a.m = null;
            a.A.disconnect();
            var d = b != chrome.cast.L.STOPPED;
            ub(a.H, c, b) && (a.u.delete(c), a.I.delete(c), b = a.B.get(c)) && (a.B.delete(c), G(b.s(), function(e) {
                e(d)
            }))
        }
    };
    V.prototype.onMessage = function(a) {
        switch (a.type) {
            case "new_session":
            case "update_session":
                a.message = wb(this.H, a.message);
                break;
            case "v2_message":
                var b = a.message;
                b && "MEDIA_STATUS" == b.type && b.status && (b.status = b.status.map(this.Wa))
        }
        if (b = nb(this.K, a.sequenceNumber)) "error" == a.type ? (b = b.g) && b(a.message) : (b = b.j) && b(a.message);
        if (b = a.message) switch (a.type) {
            case "receiver_action":
                Pb(this, b);
                break;
            case "new_session":
                this.m = b.sessionId;
                this.j ? (this.j(b), this.j = null) : this.g && this.g.sessionListener(b);
                break;
            case "update_session":
                Qb(this, b);
                break;
            case "app_message":
                Rb(this, b);
                break;
            case "v2_message":
                "MEDIA_STATUS" == b.type && b.status.forEach(this.Da.bind(this));
                break;
            case "custom_dial_launch":
                Sb(this, a.sequenceNumber, b)
        }
    };
    var Qb = function(a, b) {
            (a = a.B.get(b.sessionId)) && G(a.s(), function(c) {
                c(!0)
            })
        },
        Pb = function(a, b) {
            a.J.forEach(function(c) {
                c(b.receiver, b.action)
            })
        },
        Rb = function(a, b) {
            (a = a.u.get(b.sessionId)) && (a = a.get(b.namespaceName)) && G(a.s(), function(c) {
                c(b.namespaceName, b.message)
            })
        },
        Tb = function(a, b, c) {
            W(a, new O("custom_dial_launch", c, void 0, chrome.cast.timeout.sendCustomMessage), null, b)
        },
        Sb = function(a, b, c) {
            a.g.customDialLaunchCallback ? a.g.customDialLaunchCallback(c).then(function(d) {
                    Tb(a, b, d)
                }, function() {
                    Tb(a, b)
                }) :
                Tb(a, b)
        },
        Nb = RegExp("^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$"),
        Kb = new Set(["PRECACHE"]),
        Z = new V;
    chrome.cast.initialize = function(a, b, c) {
        Z.initialize(a, b, c)
    };
    u("chrome.cast.initialize", chrome.cast.initialize);
    chrome.cast.da = function(a) {
        Z.da(a)
    };
    u("chrome.cast.setPageContext", chrome.cast.da);
    chrome.cast.requestSession = function(a, b, c) {
        Z.requestSession(a, b, c)
    };
    u("chrome.cast.requestSession", chrome.cast.requestSession);
    chrome.cast.Ub = function(a) {
        Mb(new chrome.cast.media.hb(a))
    };
    u("chrome.cast.precache", chrome.cast.Ub);
    chrome.cast.ca = function(a) {
        Z.ca(a)
    };
    u("chrome.cast.requestSessionById", chrome.cast.ca);
    chrome.cast.X = function(a) {
        Z.X(a)
    };
    u("chrome.cast.addReceiverActionListener", chrome.cast.X);
    chrome.cast.aa = function(a) {
        Z.aa(a)
    };
    u("chrome.cast.removeReceiverActionListener", chrome.cast.aa);
    chrome.cast.Tb = function() {};
    u("chrome.cast.logMessage", chrome.cast.Tb);
    chrome.cast.nc = function(a, b) {
        b()
    };
    u("chrome.cast.setCustomReceivers", chrome.cast.nc);
    chrome.cast.oc = function(a, b) {
        b()
    };
    u("chrome.cast.setReceiverDisplayStatus", chrome.cast.oc);
    chrome.cast.unescape = function(a) {
        return -1 != a.indexOf("&") ? "document" in r ? Ya(a) : Za(a) : a
    };
    u("chrome.cast.unescape", chrome.cast.unescape);
    chrome.cast.isAvailable = !1;
    u("chrome.cast.isAvailable", chrome.cast.isAvailable);
    chrome.cast.Ga = !1;
    chrome.cast.ea = function() {
        if (!chrome.cast.Ga) {
            chrome.cast.Ga = !0;
            chrome.cast.isAvailable = !0;
            var a = window.__onGCastApiAvailable;
            a && "function" == typeof a && a(!0)
        }
    };
    "complete" == document.readyState ? chrome.cast.ea() : (window.addEventListener("load", chrome.cast.ea, !1), window.addEventListener("DOMContentLoaded", chrome.cast.ea, !1));
}).call(this);