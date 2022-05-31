var SC = "object" == typeof SC ? SC : {};
SC.Widget = function (e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;

        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    return n.m = e,
    n.c = t,
    n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    },
    n.r = function (e) {
        if ("undefined" != typeof Symbol && Symbol.toStringTag){
            Object.defineProperty(e, Symbol.toStringTag, {value: "Module"});
            Object.defineProperty(e, "__esModule", { value: true });
        }
    },
    n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t)
            return e;

        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;

        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function (t) {
                    return e[t]
                }.bind(null, o));


        return r
    },
    n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t),
        t
    },
    n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    n.p = "",
    n(n.s = 0)
}([
    function (e, t, n) {
        var r,
            o,
            i,
            u = n(1),
            a = n(2),
            c = n(3),
            s = u.api,
            l = u.bridge,
            d = [],
            f = [],
            p = /^http(?:s?)/;
        function E(e) {
            var t,
                n;
            for (t = 0, n = f.length; t < n && !1 !== e(f[t]); t++);
        }
        function v(e) {
            return e.contentWindow ? e.contentWindow : e.contentDocument && "parentWindow" in e.contentDocument ? e.contentDocument.parentWindow : null
        }
        function _(e) {
            var t,
                n = [];
            for (t in e)
                e.hasOwnProperty(t) && n.push(e[t]);

            return n
        }
        function S(e, t, n) {
            n.callbacks[e] = n.callbacks[e] || [];
            n.callbacks[e].push(t);
        }
        function h(e, t) {
            var n = !0;
            return t.callbacks[e] = [],
            E((function (t) {
                if ((t.callbacks[e] || []).length)
                    return n = !1,
                    !1

            })),
            n
        }
        function y(e, t, n) {
            var r,
                o,
                i = v(n);
            if (!i || !i.postMessage)
                return !1;

            r = n.getAttribute("src").split("?")[0];
            o = JSON.stringify({method: e, value: t});
            "//" === r.substr(0, 2) && (r = window.location.protocol + r);
            r = r.replace(/http:\/\/(w|wt).soundcloud.com/, "https://$1.soundcloud.com");
            i.postMessage(o, r)
        }
        function b(e) {
            var t;
            return E((function (n) {
                if (n.instance === e)
                    return t = n,
                    !1

            })),
            t
        }
        function g(e) {
            var t;
            return E((function (n) {
                if (v(n.element) === e)
                    return t = n,
                    !1

            })),
            t
        }
        function m(e, t) {
            return function (n) {
                var r,
                    o = !!((r = n) && r.constructor && r.call && r.apply),
                    i = b(this),
                    u = ! o && t ? n : null,
                    a = o && ! t ? n : null;
                return a && S(e, a, i),
                y(e, u, i.element),
                this
            }
        }
        function R(e, t, n) {
            var r,
                o,
                i;
            for (r = 0, o = t.length; r < o; r++)
                e[i = t[r]] = m(i, n)

        }
        function O(e, t, n) {
            return e + "?url=" + t + "&" + function (e) {
                var t, n, r = [];
                for (t in e){
                    if (e.hasOwnProperty(t)){
                        n = e[t]
                        r.push(t + "=" + ("start_track" === t ? parseInt(n, 10) : n ? "true" : "false"));
                    }
                }
                return r.join("&");
            }(n)
        }
        function w(e, t, n) {
            var r,
                o,
                i = e.callbacks[t] || [];
            for (r = 0, o = i.length; r < o; r++)
                i[r].apply(e.instance, n);

            (function (e) {
                var t,
                    n = !1;
                for (t in a)
                    if (a.hasOwnProperty(t) && a[t] === e) {
                        n = !0;
                        break
                    }

                return n
            }(t) || t === s.READY) && (e.callbacks[t] =[])
        }
        function A(e) {
            var t,
                n,
                r,
                o,
                i;
            try {
                n = JSON.parse(e.data)
            } catch (e) {
                return !1
            }
            return t = g(e.source),
            r = n.method,
            o = n.value,
            (! t || P(e.origin) === P(t.domain)) && (t ? (r === s.READY && (t.isReady =! 0, w(t, "__LATE_BINDING__"), h("__LATE_BINDING__", t)), r !== s.PLAY || t.playEventFired || (t.playEventFired =! 0), r !== s.PLAY_PROGRESS || t.playEventFired || (t.playEventFired =! 0, w(t, s.PLAY, [o])), i =[], void 0 !== o && i.push(o), void w(t, r, i)) : (r === s.READY && d.push(e.source), !1))
        }
        function P(e) {
            return e.replace(p, "")
        }
        if(window.addEventListener) window.addEventListener("message", A, !1);
        else window.attachEvent("onmessage", A);
        e.exports = function (e, t, n) {
            var i;
            if (("" === (i = e) || i && i.charCodeAt && i.substr) && (e = document.getElementById(e)), !function (e) {
                return !(! e || 1 !== e.nodeType || "IFRAME" !== e.nodeName.toUpperCase())
            }(e))
                throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");

            if(t){
                n = n || {};
                e.src = O("http://wt.soundcloud.test:9200/", t, n);
            }
            var u,
                a,
                c = g(v(e));
            return c && c.instance ? c.instance : (u = d.indexOf(v(e)) > -1, a = new r(e), f.push(new o(a, e, u)), a)
        }
        i = e.exports;
        i.Events = s;
        window.SC = window.SC || {};
        window.SC.Widget = i;
        o = function (e, t, n) {
            this.instance = e;
            this.element = t;
            this.domain = function (e) {
                var t, n, r, o = "";
                "//" === e.substr(0, 2) && (e = window.location.protocol + e);
                for (r = e.split("/"), t = 0, n = r.length; t < n && t < 3; t++){
                    o += r[t];
                    t < 2 && (o += "/");
                }

                return o
            }(t.getAttribute("src"));
            this.isReady = !! n;
            this.callbacks = {};
        };
        (r = function () {}).prototype = {
            constructor: r,
            load: function (e, t) {
                if (e) {
                    t = t || {};
                    var n = this,
                        r = b(this),
                        o = r.element,
                        i = o.src,
                        u = i.substr(0, i.indexOf("?"));
                    r.isReady = !1;
                    r.playEventFired = !1;
                    o.onload = function () {
                        n.bind(s.READY, (function () {
                            var e,
                                n = r.callbacks;
                            for (e in n)
                                n.hasOwnProperty(e) && e !== s.READY && y(l.ADD_LISTENER, e, r.element);

                            t.callback && t.callback()
                        }))
                    };
                    o.src = O(u, e, t)
                }
            },
            bind: function (e, t) {
                var n = this,
                    r = b(this);
                return r && r.element && (e === s.READY && r.isReady ? setTimeout(t, 1) : r.isReady ? (S(e, t, r), y(l.ADD_LISTENER, e, r.element)) : S("__LATE_BINDING__", (function () {
                    n.bind(e, t)
                }), r)),
                this
            },
            unbind: function (e) {
                var t,
                    n = b(this);
                if (n && n.element ){
                    t = h(e, n);
                    if (e !== s.READY && t) y(l.REMOVE_LISTENER, e, n.element);
                }
            }
        };
        R(r.prototype, _(a));
        R(r.prototype, _(c), !0)
    },
    function (e, t) {
        t.api = {
            LOAD_PROGRESS: "loadProgress",
            PLAY_PROGRESS: "playProgress",
            PLAY: "play",
            PAUSE: "pause",
            FINISH: "finish",
            SEEK: "seek",
            READY: "ready",
            OPEN_SHARE_PANEL: "sharePanelOpened",
            CLICK_DOWNLOAD: "downloadClicked",
            CLICK_BUY: "buyClicked",
            ERROR: "error"
        };
        t.bridge = {
            REMOVE_LISTENER: "removeEventListener",
            ADD_LISTENER: "addEventListener"
        }
    },
    function (e, t) {
        e.exports = {
            GET_VOLUME: "getVolume",
            GET_DURATION: "getDuration",
            GET_POSITION: "getPosition",
            GET_SOUNDS: "getSounds",
            GET_CURRENT_SOUND: "getCurrentSound",
            GET_CURRENT_SOUND_INDEX: "getCurrentSoundIndex",
            IS_PAUSED: "isPaused"
        }
    },
    function (e, t) {
        e.exports = {
            PLAY: "play",
            PAUSE: "pause",
            TOGGLE: "toggle",
            SEEK_TO: "seekTo",
            SET_VOLUME: "setVolume",
            NEXT: "next",
            PREV: "prev",
            SKIP: "skip"
        }
    }
]);

try {
    var player = document.getElementById('player-sc');
    var sc = SC.Widget(player);
    var pauseButton = document.getElementById('pause');
    var playButton = document.getElementById('play');
    var songName = document.getElementById('song-title');
    var curSound = 0;
    var paused = true;
    var songs = [['Comfy beats', 'Lilypichu'],
        ['Cherry Wine', 'grentperez'],
        ['I Know a Place', 'Chevy'],
        ['Two Dimensions', 'EASHA'],
        ['the way you say hello', 'tiffi'],
        ['cliché', 'mxmtoon'],
        ['Sunshine & Butterflies', 'Lilypichu'],
        ['Morning Coffee', 'chevy'],
        ['best part', 'sora.wav'],
        ['wii date', 'City Girl'],
        ['Sway', 'Galdive'],
        ['Poetry', 'Galdive'],
        ['All In My Head', 'Eli Noir'],
        ['Weakness', 'Eli Noir'],
        ['Nobody Else', 'Em Beihold'],
        ['First Date', 'frad'],
        ['bossa uh', 'potsu']];
    function cur(sound){
        songName.innerHTML = `${songs[sound][0]} <br>- ${songs[sound][1]}`;
        curSound = sound;
    }

    function playpause(){
        console.log('click');
        sc.toggle();
    }
    function skipforward(){
        if (curSound == songs.length - 1) sc.skip(0);
        else sc.next();
        sc.seekTo(0);
    }
    function skipback(){
        if (curSound == 0) sc.skip(songs.length - 1);
        else sc.prev();
        sc.seekTo(0);
    }

    document.getElementById('play-pause').addEventListener('click', playpause);
    document.getElementById('play-pause').addEventListener('touchstart', playpause);
    
    document.getElementById('skip-forward').addEventListener('click', skipforward);
    document.getElementById('skip-forward').addEventListener('touchstart', skipforward);

    document.getElementById('skip-backward').addEventListener('click', skipback);
    document.getElementById('skip-backward').addEventListener('touchstart', skipback);

    sc.bind(SC.Widget.Events.PLAY, function () {
        pauseButton.classList.remove('hidden');
        playButton.classList.add('hidden');
        sc.getCurrentSoundIndex(cur);
        document.getElementById('girl-head').classList.add('bop');
    });

    sc.bind(SC.Widget.Events.PAUSE, function () {
        pauseButton.classList.add('hidden');
        playButton.classList.remove('hidden');
        document.getElementById('girl-head').classList.remove('bop');
    });
} catch (e) {
    console.log("Failure in SoundCloud embed:");
    console.error(e);
}