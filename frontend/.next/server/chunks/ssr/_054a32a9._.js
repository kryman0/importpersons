module.exports = {

"[project]/src/app/utils/constants.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const constants = {
    baseVismaUrl: "https://localhost:44311"
};
const __TURBOPACK__default__export__ = constants;
}}),
"[project]/src/app/api/register/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Register)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$constants$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/constants.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$output$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/output/log.js [app-ssr] (ecmascript)");
'use client';
;
;
;
//let username = document.getElementById('username');
async function submitForm(ev) {
    ev.preventDefault();
    const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$constants$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].baseVismaUrl}/api/register`;
    console.log(ev.target);
    let request = new Request(url, {
        method: "POST",
        body: JSON.stringify({
            username: "test10@test.com",
            password: "password"
        }),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json;charset=utf-8"
        }
    });
    const data = await fetch(request);
    console.log("data", data);
}
function Register() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Register new User"
            }, void 0, false, {
                fileName: "[project]/src/app/api/register/page.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/src/app/api/register/page.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "email",
                        type: "email",
                        name: "email",
                        required: true,
                        placeholder: "email@example.com"
                    }, void 0, false, {
                        fileName: "[project]/src/app/api/register/page.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Password"
                    }, void 0, false, {
                        fileName: "[project]/src/app/api/register/page.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "password",
                        type: "password",
                        name: "password",
                        required: true,
                        placeholder: "xxxxxx"
                    }, void 0, false, {
                        fileName: "[project]/src/app/api/register/page.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/api/register/page.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/api/register/page.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "submit",
                        required: true,
                        value: "Register",
                        onSubmit: submitForm(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$output$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["event"])
                    }, void 0, false, {
                        fileName: "[project]/src/app/api/register/page.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/api/register/page.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/api/register/page.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
}}),
"[project]/node_modules/next/dist/lib/picocolors.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// ISC License
// Copyright (c) 2021 Alexey Raspopov, Kostiantyn Denysov, Anton Verinov
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
//
// https://github.com/alexeyraspopov/picocolors/blob/b6261487e7b81aaab2440e397a356732cad9e342/picocolors.js#L1
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    bgBlack: null,
    bgBlue: null,
    bgCyan: null,
    bgGreen: null,
    bgMagenta: null,
    bgRed: null,
    bgWhite: null,
    bgYellow: null,
    black: null,
    blue: null,
    bold: null,
    cyan: null,
    dim: null,
    gray: null,
    green: null,
    hidden: null,
    inverse: null,
    italic: null,
    magenta: null,
    purple: null,
    red: null,
    reset: null,
    strikethrough: null,
    underline: null,
    white: null,
    yellow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bgBlack: function() {
        return bgBlack;
    },
    bgBlue: function() {
        return bgBlue;
    },
    bgCyan: function() {
        return bgCyan;
    },
    bgGreen: function() {
        return bgGreen;
    },
    bgMagenta: function() {
        return bgMagenta;
    },
    bgRed: function() {
        return bgRed;
    },
    bgWhite: function() {
        return bgWhite;
    },
    bgYellow: function() {
        return bgYellow;
    },
    black: function() {
        return black;
    },
    blue: function() {
        return blue;
    },
    bold: function() {
        return bold;
    },
    cyan: function() {
        return cyan;
    },
    dim: function() {
        return dim;
    },
    gray: function() {
        return gray;
    },
    green: function() {
        return green;
    },
    hidden: function() {
        return hidden;
    },
    inverse: function() {
        return inverse;
    },
    italic: function() {
        return italic;
    },
    magenta: function() {
        return magenta;
    },
    purple: function() {
        return purple;
    },
    red: function() {
        return red;
    },
    reset: function() {
        return reset;
    },
    strikethrough: function() {
        return strikethrough;
    },
    underline: function() {
        return underline;
    },
    white: function() {
        return white;
    },
    yellow: function() {
        return yellow;
    }
});
var _globalThis;
const { env, stdout } = ((_globalThis = globalThis) == null ? void 0 : _globalThis.process) ?? {};
const enabled = env && !env.NO_COLOR && (env.FORCE_COLOR || (stdout == null ? void 0 : stdout.isTTY) && !env.CI && env.TERM !== 'dumb');
const replaceClose = (str, close, replace, index)=>{
    const start = str.substring(0, index) + replace;
    const end = str.substring(index + close.length);
    const nextIndex = end.indexOf(close);
    return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
};
const formatter = (open, close, replace = open)=>{
    if (!enabled) return String;
    return (input)=>{
        const string = '' + input;
        const index = string.indexOf(close, open.length);
        return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
};
const reset = enabled ? (s)=>`\x1b[0m${s}\x1b[0m` : String;
const bold = formatter('\x1b[1m', '\x1b[22m', '\x1b[22m\x1b[1m');
const dim = formatter('\x1b[2m', '\x1b[22m', '\x1b[22m\x1b[2m');
const italic = formatter('\x1b[3m', '\x1b[23m');
const underline = formatter('\x1b[4m', '\x1b[24m');
const inverse = formatter('\x1b[7m', '\x1b[27m');
const hidden = formatter('\x1b[8m', '\x1b[28m');
const strikethrough = formatter('\x1b[9m', '\x1b[29m');
const black = formatter('\x1b[30m', '\x1b[39m');
const red = formatter('\x1b[31m', '\x1b[39m');
const green = formatter('\x1b[32m', '\x1b[39m');
const yellow = formatter('\x1b[33m', '\x1b[39m');
const blue = formatter('\x1b[34m', '\x1b[39m');
const magenta = formatter('\x1b[35m', '\x1b[39m');
const purple = formatter('\x1b[38;2;173;127;168m', '\x1b[39m');
const cyan = formatter('\x1b[36m', '\x1b[39m');
const white = formatter('\x1b[37m', '\x1b[39m');
const gray = formatter('\x1b[90m', '\x1b[39m');
const bgBlack = formatter('\x1b[40m', '\x1b[49m');
const bgRed = formatter('\x1b[41m', '\x1b[49m');
const bgGreen = formatter('\x1b[42m', '\x1b[49m');
const bgYellow = formatter('\x1b[43m', '\x1b[49m');
const bgBlue = formatter('\x1b[44m', '\x1b[49m');
const bgMagenta = formatter('\x1b[45m', '\x1b[49m');
const bgCyan = formatter('\x1b[46m', '\x1b[49m');
const bgWhite = formatter('\x1b[47m', '\x1b[49m'); //# sourceMappingURL=picocolors.js.map
}}),
"[project]/node_modules/next/dist/server/lib/lru-cache.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LRUCache", {
    enumerable: true,
    get: function() {
        return LRUCache;
    }
});
class LRUCache {
    constructor(maxSize, calculateSize){
        this.cache = new Map();
        this.sizes = new Map();
        this.totalSize = 0;
        this.maxSize = maxSize;
        this.calculateSize = calculateSize || (()=>1);
    }
    set(key, value) {
        if (!key || !value) return;
        const size = this.calculateSize(value);
        if (size > this.maxSize) {
            console.warn('Single item size exceeds maxSize');
            return;
        }
        if (this.cache.has(key)) {
            this.totalSize -= this.sizes.get(key) || 0;
        }
        this.cache.set(key, value);
        this.sizes.set(key, size);
        this.totalSize += size;
        this.touch(key);
    }
    has(key) {
        if (!key) return false;
        this.touch(key);
        return Boolean(this.cache.get(key));
    }
    get(key) {
        if (!key) return;
        const value = this.cache.get(key);
        if (value === undefined) {
            return undefined;
        }
        this.touch(key);
        return value;
    }
    touch(key) {
        const value = this.cache.get(key);
        if (value !== undefined) {
            this.cache.delete(key);
            this.cache.set(key, value);
            this.evictIfNecessary();
        }
    }
    evictIfNecessary() {
        while(this.totalSize > this.maxSize && this.cache.size > 0){
            this.evictLeastRecentlyUsed();
        }
    }
    evictLeastRecentlyUsed() {
        const lruKey = this.cache.keys().next().value;
        if (lruKey !== undefined) {
            const lruSize = this.sizes.get(lruKey) || 0;
            this.totalSize -= lruSize;
            this.cache.delete(lruKey);
            this.sizes.delete(lruKey);
        }
    }
    reset() {
        this.cache.clear();
        this.sizes.clear();
        this.totalSize = 0;
    }
    keys() {
        return [
            ...this.cache.keys()
        ];
    }
    remove(key) {
        if (this.cache.has(key)) {
            this.totalSize -= this.sizes.get(key) || 0;
            this.cache.delete(key);
            this.sizes.delete(key);
        }
    }
    clear() {
        this.cache.clear();
        this.sizes.clear();
        this.totalSize = 0;
    }
    get size() {
        return this.cache.size;
    }
    get currentSize() {
        return this.totalSize;
    }
} //# sourceMappingURL=lru-cache.js.map
}}),
"[project]/node_modules/next/dist/build/output/log.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    bootstrap: null,
    error: null,
    event: null,
    info: null,
    prefixes: null,
    ready: null,
    trace: null,
    wait: null,
    warn: null,
    warnOnce: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bootstrap: function() {
        return bootstrap;
    },
    error: function() {
        return error;
    },
    event: function() {
        return event;
    },
    info: function() {
        return info;
    },
    prefixes: function() {
        return prefixes;
    },
    ready: function() {
        return ready;
    },
    trace: function() {
        return trace;
    },
    wait: function() {
        return wait;
    },
    warn: function() {
        return warn;
    },
    warnOnce: function() {
        return warnOnce;
    }
});
const _picocolors = __turbopack_context__.r("[project]/node_modules/next/dist/lib/picocolors.js [app-ssr] (ecmascript)");
const _lrucache = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/lru-cache.js [app-ssr] (ecmascript)");
const prefixes = {
    wait: (0, _picocolors.white)((0, _picocolors.bold)('○')),
    error: (0, _picocolors.red)((0, _picocolors.bold)('⨯')),
    warn: (0, _picocolors.yellow)((0, _picocolors.bold)('⚠')),
    ready: '▲',
    info: (0, _picocolors.white)((0, _picocolors.bold)(' ')),
    event: (0, _picocolors.green)((0, _picocolors.bold)('✓')),
    trace: (0, _picocolors.magenta)((0, _picocolors.bold)('»'))
};
const LOGGING_METHOD = {
    log: 'log',
    warn: 'warn',
    error: 'error'
};
function prefixedLog(prefixType, ...message) {
    if ((message[0] === '' || message[0] === undefined) && message.length === 1) {
        message.shift();
    }
    const consoleMethod = prefixType in LOGGING_METHOD ? LOGGING_METHOD[prefixType] : 'log';
    const prefix = prefixes[prefixType];
    // If there's no message, don't print the prefix but a new line
    if (message.length === 0) {
        console[consoleMethod]('');
    } else {
        // Ensure if there's ANSI escape codes it's concatenated into one string.
        // Chrome DevTool can only handle color if it's in one string.
        if (message.length === 1 && typeof message[0] === 'string') {
            console[consoleMethod](' ' + prefix + ' ' + message[0]);
        } else {
            console[consoleMethod](' ' + prefix, ...message);
        }
    }
}
function bootstrap(...message) {
    // logging format: ' <prefix> <message>'
    // e.g. ' ✓ Compiled successfully'
    // Add spaces to align with the indent of other logs
    console.log('   ' + message.join(' '));
}
function wait(...message) {
    prefixedLog('wait', ...message);
}
function error(...message) {
    prefixedLog('error', ...message);
}
function warn(...message) {
    prefixedLog('warn', ...message);
}
function ready(...message) {
    prefixedLog('ready', ...message);
}
function info(...message) {
    prefixedLog('info', ...message);
}
function event(...message) {
    prefixedLog('event', ...message);
}
function trace(...message) {
    prefixedLog('trace', ...message);
}
const warnOnceCache = new _lrucache.LRUCache(10000, (value)=>value.length);
function warnOnce(...message) {
    const key = message.join(' ');
    if (!warnOnceCache.has(key)) {
        warnOnceCache.set(key, key);
        warn(...message);
    }
} //# sourceMappingURL=log.js.map
}}),

};

//# sourceMappingURL=_054a32a9._.js.map