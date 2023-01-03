// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"awEvQ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bB7Pu":[function(require,module,exports) {
var _burger = require("./src/scripts/mainPageScripts/burger");
var _headerNavigation = require("./src/scripts/headerNav/headerNavigation");
var _map = require("./src/scripts/mainPageScripts/map");
var _slider = require("./src/scripts/mainPageScripts/slider");
var _mainJoinButton = require("./src/scripts/joinPopUP/mainJoinButton");
(0, _headerNavigation.headerNavigation)();
(0, _burger.burger)();
(0, _slider.slider)();
(0, _mainJoinButton.mainJoinButton)();
window.initMap = (0, _map.initMap);

},{"./src/scripts/mainPageScripts/burger":"aPhOc","./src/scripts/headerNav/headerNavigation":"f9WVj","./src/scripts/mainPageScripts/map":"jTfpc","./src/scripts/mainPageScripts/slider":"c1llB","./src/scripts/joinPopUP/mainJoinButton":"77d1l"}],"aPhOc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "burger", ()=>burger);
function burger() {
    const burger = document.querySelector(".header__burger");
    const headerList = document.querySelector(".header__list");
    const header = document.querySelector(".header");
    document.addEventListener("click", (e)=>{
        if (e.target.id === "bar") {
            burger.classList.toggle("act");
            headerList.classList.toggle("act");
            header.classList.toggle("act");
        } else {
            burger.classList.remove("act");
            headerList.classList.remove("act");
            header.classList.remove("act");
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"f9WVj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "headerNavigation", ()=>headerNavigation);
var _popUpRender = require("../joinPopUP/popUpRender");
var _photoPageContent = require("../photoSection/photoPageContent");
var _regContent = require("../registration/regContent");
var _utilFunctions = require("./utilFunctions");
function headerNavigation() {
    const nodeArrMainPage = [
        ...(0, _utilFunctions.getNodes)()
    ];
    const reversedNodes = nodeArrMainPage.reverse();
    let photoNodes = [];
    let regNodes = [];
    document.addEventListener("click", (e)=>{
        const target = e.target;
        if (target.id === "photo") {
            (0, _utilFunctions.removeMainPageNodes)(nodeArrMainPage);
            (0, _utilFunctions.removeRegPageNodes)(regNodes);
            if (target.classList.contains("menu-active")) ;
            else (0, _photoPageContent.renderContent)();
            (0, _utilFunctions.addActiveClassToPage)(target);
            photoNodes = [
                ...(0, _utilFunctions.getNodes)()
            ];
        }
        if (target.id === "main") {
            (0, _utilFunctions.removePhotoPageNodes)(photoNodes);
            (0, _utilFunctions.removeRegPageNodes)(regNodes);
            (0, _utilFunctions.returnMainPageNodes)(reversedNodes);
            (0, _utilFunctions.addActiveClassToPage)(target);
        }
        if (target.id === "reg") {
            (0, _utilFunctions.removePhotoPageNodes)(photoNodes);
            (0, _utilFunctions.removeMainPageNodes)(nodeArrMainPage);
            if (target.classList.contains("menu-active")) ;
            else (0, _regContent.renderRegPage)();
            (0, _utilFunctions.addActiveClassToPage)(target);
            regNodes = [
                ...(0, _utilFunctions.getNodes)()
            ];
        }
        if (target.id === "join") (0, _popUpRender.renderPopUp)();
    });
}

},{"../joinPopUP/popUpRender":"71M8W","../photoSection/photoPageContent":"3l0vQ","../registration/regContent":"2VEux","./utilFunctions":"ff0mJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71M8W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderPopUp", ()=>renderPopUp);
var _popUpBlock = require("./popUpBlock");
var _popUpScript = require("./popUpScript");
function renderPopUp() {
    document.querySelector(".wrapper").insertAdjacentHTML("afterbegin", (0, _popUpBlock.popUpBlock)());
    (0, _popUpScript.popUpScript)();
}

},{"./popUpBlock":"cYXn2","./popUpScript":"9Dsf0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cYXn2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popUpBlock", ()=>popUpBlock);
var _popUpCss = require("../../../styles/popUp.css");
function popUpBlock() {
    return `
    <div id='cont' class="pop-up__container">
      <div class="pop-up__content">
        <div id='close'class="pop-up__cross">
          <span id='line' class="cross__bar"></span>
          <span id='line'class="cross__bar"></span>
        </div>
        <form class="pop-up__form"action="#">
        <div class="pop-up__block">
          <label for="popUpName">Имя пользователя:</label>
          <input id='popUpName' class="pop-up__input" type="text" placeholder="Введите имя" />
        </div>
        <div class="pop-up__block">
          <label for="popUpPass">Пароль:</label>
          <input id='popUpPass' class="pop-up__input " type="text" placeholder="Введите пароль" />
        </div>
          <div class="pop-up__registr">
            Eсли нет аккаунта  <a id='regLink' href="#">Зарегистрируйтесь</a>
          </div>
          <button class="pop-up__button" type="submit">Войти</button>
        </form>
      </div>
    </div>
    `;
}

},{"../../../styles/popUp.css":"2iwKx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2iwKx":[function(require,module,exports) {
module.exports = @import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap";
background-image: url("background.3cbd0da1.png")
.pop-up__container {
  height: 100%;
  width: 100%;
  z-index: 100;
  opacity: 0;
  background-color: #0000004d;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: all 1s ease-in;
  display: flex;
  position: fixed;
}

.pop-up__container.activeted {
  opacity: 1;
  transition: all .5s ease-in;
}

.pop-up__content {
  background-color: #fff;
  border: 3px solid #d22856;
  border-radius: 30px;
  flex: 0 500px;
  justify-content: center;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  position: relative;
}

.pop-up__form {
  width: 100%;
  color: #d22856;
  flex-direction: column;
  gap: 30px;
  display: flex;
}

.pop-up__block {
  flex-direction: column;
  gap: 10px;
  display: flex;
}

.pop-up__block label {
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
}

.pop-up__input {
  width: 100%;
  height: 50px;
  border: 2px solid #e5e5e5;
  border-radius: 1px;
  padding-left: 20px;
  transition: all .5s ease-in;
}

.pop-up__input:hover, .pop-up__input:focus {
  border-color: #283645;
}

.pop-up__registr a {
  color: #ba4665;
  border-bottom: 1px solid #d22856;
  transition: all .5s;
}

.pop-up__registr a:hover {
  color: #941b3b;
  border-color: #70132c;
}

.pop-up__button {
  height: 50px;
  color: #fff;
  background: #2aab6d;
  border: 2px solid #2aab6d;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  transition: all .5s;
}

.pop-up__button:active {
  color: #ffffff4e;
  background: #1c9b5e;
  border-color: #1c9b5e;
}

.pop-up__button:hover {
  background: #1c9b5e;
  border-color: #1c9b5e;
}

.pop-up__cross {
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
}

.pop-up__cross:hover .cross__bar {
  width: 40px;
}

.cross__bar {
  width: 30px;
  height: 5px;
  background-color: #d22856;
  border-radius: 2px;
  transition: all .3s;
  display: block;
}

.cross__bar:first-child {
  transform: translate(0, 10px)rotate(-45deg);
}

.cross__bar:last-child {
  transform: translate(0, 5px)rotate(45deg);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
}

.container-red {
  max-width: 940px;
  background-color: #f2f2f2;
  margin: 50px auto;
  padding: 50px;
}

.photo-editor {
  gap: 100px;
  display: flex;
}

.container-red.disable :where(.photo-editor__sliders, .cancel-btn, .post-btn, .save-btn) {
  opacity: .6;
  pointer-events: none;
}

.photo-editor__img {
  width: 300px;
  height: 400px;
}

.photo-editor__img img {
  width: 300px;
  height: 100%;
  object-fit: cover;
}

.photo-editor__menu {
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  display: flex;
}

.photo-editor__opp {
  flex-direction: row;
  gap: 20px;
  display: flex;
}

.photo-editor__icons {
  text-align: center;
  flex-direction: column;
  display: flex;
}

.icon {
  width: 40px;
}

.edit-slider {
  -webkit-appearance: none;
  height: 4px;
  width: 100%;
  box-shadow: none;
  background-color: #000000a0;
  border-radius: 30px;
}

.edit-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 12px;
  width: 12px;
  cursor: pointer;
  background: #fff;
  border: 3px solid #d22856;
  border-radius: 50%;
}

.photo-editor__sliders {
  max-width: 300px;
  flex-direction: column;
  flex: auto;
  justify-content: space-around;
  display: flex;
}

.photo-editor__buttons {
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
  display: flex;
}

.photo-editor__buttons button {
  width: 130px;
  height: 35px;
  cursor: pointer;
  border: 3px solid #d22856;
  border-radius: 30px;
  transition: all .5s;
}

.photo-editor__buttons button:hover {
  background-color: #fff;
  transform: translateY(3px);
}

#choose:hover {
  background-color: #fff;
}

.photo-editor__text-input {
  max-width: 300px;
  max-height: 80px;
}

.photo-editor__textarea {
  -moz-appearance: none;
  resize: none;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background-color: #f2f2f2;
  border: 3px solid #d22856;
  border-radius: 10px;
  outline: none;
  padding: 5px;
  transition: all .5s;
}

.photo-editor__textarea:focus {
  height: 80px;
  border-color: #c42b54;
}

.photo-editor__textarea::-webkit-scrollbar {
  width: 5px;
}

.photo-editor__textarea:focus::-webkit-scrollbar-thumb {
  background: #971c3d;
  border-radius: 10px;
}

@media (max-width: 667px) {
  body {
    background-color: #f2f2f2;
  }

  .container-red {
    max-width: 280px;
    padding: 0;
  }

  .photo-editor {
    flex-direction: column;
    gap: 30px;
  }

  .photo-editor__img {
    max-width: 280px;
    max-height: 374px;
  }

  .photo-editor__img img {
    object-fit: cover;
  }

  .photo-editor__icons {
    height: 50px;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 35px;
  }

  .photo-editor__icons img {
    width: 45px;
    opacity: .5;
    transition: all .5s;
  }

  .photo-editor__icons img.actives {
    width: 50px;
    opacity: 1;
  }

  .photo-editor__opp {
    flex-direction: column;
    gap: 0;
  }

  .sls {
    margin-bottom: 50px;
  }

  .sls:not(:first-child) {
    display: none;
  }
}

.reg-form__container {
  justify-content: center;
  display: flex;
}

.reg-form {
  flex-direction: column;
  flex: 0 450px;
  padding-top: 50px;
  display: flex;
}

.reg-form label {
  color: #d22856;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
}

.reg-form__input {
  width: 100%;
  height: 50px;
  border: 2px solid #e5e5e5;
  border-radius: 1px;
  padding-left: 20px;
  transition: all .5s ease-in;
}

.reg-form__input:hover, .reg-form__input:focus {
  border-color: #283645;
}

.reg-form__inf {
  flex-direction: column;
  gap: 30px;
  margin-bottom: 40px;
  display: flex;
}

.reg-form__box {
  flex-direction: column;
  gap: 10px;
  display: flex;
  position: relative;
}

.error-message {
  color: #93092e;
  display: none;
  position: absolute;
  bottom: -20px;
}

.reg-form__box.error .error-message {
  display: block;
}

.reg-form__box.error .reg-form__input {
  color: #d22856;
  border-color: #d22856;
}

.reg-form__box.success .error-message {
  display: none;
}

.reg-form__box.success .reg-form__input {
  border-color: #4cde28;
}

.reg-form__contact-information {
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
  display: flex;
}

.reg-form__contact-information .reg-form__input {
  width: 100%;
}

.reg-form__contact-information label {
  margin-bottom: 10px;
}

.input__email, .input__phone {
  display: flex;
}

.input__icon {
  width: 50px;
  height: 50px;
  background-color: #e5e5e5;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 40px;
  right: 0;
}

.input__icon img {
  width: 20px;
  height: 20px;
}

.reg-form__button {
  width: 300px;
  height: 50px;
  color: #fff;
  background: #2aab6d;
  border: 2px solid #2aab6d;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  transition: all .5s;
}

.reg-form__button:active {
  color: #ffffff4e;
  background: #1c9b5e;
  border-color: #1c9b5e;
}

.reg-form__button:hover {
  background: #1c9b5e;
  border-color: #1c9b5e;
}

;

},{}],"9Dsf0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popUpScript", ()=>popUpScript);
function popUpScript() {
    const container = document.querySelector(".pop-up__container");
    const wrapper = document.querySelector(".wrapper");
    function animate() {
        container.classList.add("activeted");
    }
    function closePopUP(e) {
        if (e.target.id === "close" || e.target.id === "line" || e.target.id === "cont" || e.target.id === "regLink") wrapper.removeChild(container);
    }
    function openRegPage(e) {
        if (e.target.id === "regLink") {
            reg.click();
            closePopUP(e);
        }
    }
    document.addEventListener("click", (e)=>{
        closePopUP(e);
        openRegPage(e);
    });
    setTimeout(()=>animate(), 100);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3l0vQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderContent", ()=>renderContent);
parcelHelpers.export(exports, "renderTitle", ()=>renderTitle);
parcelHelpers.export(exports, "renderWall", ()=>renderWall);
var _blocks = require("./blocks");
var _model = require("./model");
var _photoEditBlock = require("./photoEditBlock");
var _photoEditScript = require("./photoEditScript");
function renderContent() {
    renderTitle("Фотографии <br> пользователей");
    renderSubtitle("Взгляните на фотографии, которые выкладывают пользователи!Видите, как не хватает ваших?");
    renderPanarama();
    renderWall();
    renderSubtitle("Затмите их всех!<br>Выкладывайте все, что накопилось в телефоне!");
    photoEditRender();
}
function renderTitle(text) {
    document.querySelector(".footer").insertAdjacentHTML("beforebegin", (0, _blocks.title)(text));
}
function renderSubtitle(text) {
    document.querySelector(".footer").insertAdjacentHTML("beforebegin", (0, _blocks.subtitle)(text));
}
function renderPanarama() {
    document.querySelector(".footer").insertAdjacentHTML("beforebegin", (0, _blocks.dayPpanorama)((0, _model.panorama)));
}
function renderWall() {
    const wallModel = (0, _model.model).reverse().map((e)=>{
        return (0, _blocks.wallPlates)(e);
    });
    document.querySelector(".wall__container").insertAdjacentHTML("afterbegin", wallModel.join(""));
}
function photoEditRender() {
    document.querySelector(".footer").insertAdjacentHTML("beforebegin", (0, _photoEditBlock.photoEditBlock)());
    (0, _photoEditScript.photoEditorInit)();
}

},{"./blocks":"lK7se","./model":"lNtH5","./photoEditBlock":"kxTTI","./photoEditScript":"9rFp7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lK7se":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "title", ()=>title);
parcelHelpers.export(exports, "subtitle", ()=>subtitle);
parcelHelpers.export(exports, "dayPpanorama", ()=>dayPpanorama);
parcelHelpers.export(exports, "wallPlates", ()=>wallPlates);
const likeIcon = new URL(require("9d99ab1d89a82cb1"));
function title(value) {
    return `<div class ="title-background"> 
            <div class="container container__new-title">
              <p class="title">${value}</p>
           </div>
          </div>`;
}
function subtitle(value) {
    return ` <div class="container container__new-subtitle">
                <p class="new-text">${value}</p>
          </div>`;
}
function dayPpanorama(value) {
    return ` 
    <div class="panorama">
      <div class="panorama__img"><img src="${value.img}" alt="" /></div>
      <div class="panorama__container container">
        <div class="panorama__content">
         <div class="panorama-row">
          <div class="name new-text">${value.name}<span>(5  минут назад)</span></div>
          <div class="panorama__likes likes ">Нравится: <spna>${value.likesQnt}</spna>
          <button><img src="${likeIcon}" alt="" srcset=""></button>
          </div>
         </div>
          <div class="description new-text">${value.text}</div>
        </div>
      </div>
    </div>
    <div class="container wall__container"></div>
    `;
}
function wallPlates(value) {
    return `
    <div class="wall-block">
      <div class="wall-block__img"><img src="${value.img}" alt="" /></div>
      <div class="wall-block__content">
        <div class="wall-block__name name new-text">${value.name}<span>(5 минут назад)</span></div>
         <div class="wall-block__description new-text">${value.text}</div>
          <div class="wall-block__likes likes "><spna> Нравится:${value.likesQnt}</spna>
          <button><img src="${likeIcon}" alt="" srcset=""></button></div>
      </div>
    </div>
  `;
}

},{"9d99ab1d89a82cb1":"eLTev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLTev":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("UckoE") + "heart.1a403b66.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"lNtH5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "panorama", ()=>panorama);
parcelHelpers.export(exports, "ModelObj", ()=>ModelObj);
parcelHelpers.export(exports, "model", ()=>model);
const panorama = {
    img: new URL(require("4528d4d4f75e9a2a")),
    name: "Анна",
    likesQnt: "123",
    text: "Прыгать или нет? Напишите в комментарии свой совет и смотрите прямую трансляцию в перископе, задавайте свои вопросы!"
};
class ModelObj {
    constructor(text = "Enter text", img){
        this.text = text;
        this.img = img;
        this.likesQnt = 0;
        this.name = "cal";
    }
}
const model = [
    {
        img: new URL(require("e0f5f4883182bc4a")),
        name: "Левон",
        likesQnt: "123",
        text: "Вчера он на луну летал, сегодня в руки к нам попал."
    },
    {
        img: new URL(require("2c84ea369312341c")),
        name: "Антон",
        likesQnt: "123",
        text: "Соседи будут рады!"
    },
    {
        img: new URL(require("6ca92a50acdbff10")),
        name: "Борис",
        likesQnt: "123",
        text: "Здесь могла быть ваша цитата о высоком и вечном."
    },
    {
        img: new URL(require("94be8e0ccf7ffdd7")),
        name: "Сергей",
        likesQnt: "123",
        text: "Самая кубанская в мире!"
    },
    {
        img: new URL(require("1bcb906e31f5625f")),
        name: "Максим",
        likesQnt: "123",
        text: "Где снег-то?"
    },
    {
        img: new URL(require("c74b82c3c83e2676")),
        name: "Надежда",
        likesQnt: "123",
        text: "Всем GM и взаимные лайки!"
    }, 
];

},{"4528d4d4f75e9a2a":"4TKnZ","e0f5f4883182bc4a":"g02Ds","2c84ea369312341c":"9aiMv","6ca92a50acdbff10":"fX8M0","94be8e0ccf7ffdd7":"PKNyg","1bcb906e31f5625f":"isqLl","c74b82c3c83e2676":"1C22s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4TKnZ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("UckoE") + "panorama-desktop.60af9437.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"g02Ds":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("UckoE") + "photo-1.ce4fa188.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9aiMv":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("UckoE") + "photo-2.34be4d0a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fX8M0":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("UckoE") + "photo-3.54667680.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"PKNyg":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("UckoE") + "photo-4.ffd0f447.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"isqLl":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("UckoE") + "photo-5.f7aad238.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1C22s":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("UckoE") + "photo-6.9a78388e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kxTTI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "photoEditBlock", ()=>photoEditBlock);
var _photoEditCss = require("../../../styles/photoEdit.css");
const hueImg = new URL(require("f2be85056276939"));
const contrastImg = new URL(require("36eb039ee3f380f8"));
const satImg = new URL(require("2976472388954378"));
const prewievImg = new URL(require("8d7afd80d2807f93"));
function photoEditBlock() {
    return `
  <div class="container-red disable">
      <div class="photo-editor ">
        <div class="photo-editor__img">
          <img src="${prewievImg}" alt="" />
        </div>
        <div class="photo-editor__menu">
          <div class="photo-editor__opp">
            <div class="photo-editor__icons">
              <div><img id='satIcon' class="icon actives" src="${satImg}" alt="" /></div>
              <div><img id="hueIcon" class="icon" src="${hueImg}" alt="" /></div>
              <div><img id="brIcon"  class="icon" src="${contrastImg}" alt="" /></div>
              </div>
              <div class="photo-editor__sliders">
                <div class="slider__sat sls">
                  <input
                    id='sat'
                    class="edit-slider"
                    type="range"
                    value="100"
                    min=""
                    max="200"
                  />
                </div>
                <div class="slider__hue sls">
                  <input
                    id="hue"
                    class="edit-slider"
                    type="range"
                    value="100"
                    min=""
                    max="200"
                  />
                </div>
                <div class="slider__brightnes sls">
                  <input
                  id="br" 
                    class="edit-slider"
                    type="range"
                    value="100"
                    min=""
                    max="200"
                  />
                </div>
              </div>
            </div>
            <form class="photo-editor__text-input" action="#">
               <textarea class="photo-editor__textarea" name="text" placeholder="Write your text" ></textarea>
              </form>
            <div class="photo-editor__buttons">
              <input type="file" class="img-input" accept="image/*" hidden>
              <button id="choose" class="choose-btn">Choose image</button>
              <button id="post" class="post-btn">Post</button>
              <button id="reset" class="cancel-btn">Reset</button>
              <button id="save" class="save-btn">Save</button>
            </div>
          </div>
        </div>
      </div>
      `;
}

},{"../../../styles/photoEdit.css":"cVQru","f2be85056276939":"jnPb0","36eb039ee3f380f8":"3vUe0","2976472388954378":"kU7F0","8d7afd80d2807f93":"jtBnv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cVQru":[function(require,module,exports) {
module.exports = @import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap";
background-image: url("background.3cbd0da1.png")
.pop-up__container {
  height: 100%;
  width: 100%;
  z-index: 100;
  opacity: 0;
  background-color: #0000004d;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: all 1s ease-in;
  display: flex;
  position: fixed;
}

.pop-up__container.activeted {
  opacity: 1;
  transition: all .5s ease-in;
}

.pop-up__content {
  background-color: #fff;
  border: 3px solid #d22856;
  border-radius: 30px;
  flex: 0 500px;
  justify-content: center;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  position: relative;
}

.pop-up__form {
  width: 100%;
  color: #d22856;
  flex-direction: column;
  gap: 30px;
  display: flex;
}

.pop-up__block {
  flex-direction: column;
  gap: 10px;
  display: flex;
}

.pop-up__block label {
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
}

.pop-up__input {
  width: 100%;
  height: 50px;
  border: 2px solid #e5e5e5;
  border-radius: 1px;
  padding-left: 20px;
  transition: all .5s ease-in;
}

.pop-up__input:hover, .pop-up__input:focus {
  border-color: #283645;
}

.pop-up__registr a {
  color: #ba4665;
  border-bottom: 1px solid #d22856;
  transition: all .5s;
}

.pop-up__registr a:hover {
  color: #941b3b;
  border-color: #70132c;
}

.pop-up__button {
  height: 50px;
  color: #fff;
  background: #2aab6d;
  border: 2px solid #2aab6d;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  transition: all .5s;
}

.pop-up__button:active {
  color: #ffffff4e;
  background: #1c9b5e;
  border-color: #1c9b5e;
}

.pop-up__button:hover {
  background: #1c9b5e;
  border-color: #1c9b5e;
}

.pop-up__cross {
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
}

.pop-up__cross:hover .cross__bar {
  width: 40px;
}

.cross__bar {
  width: 30px;
  height: 5px;
  background-color: #d22856;
  border-radius: 2px;
  transition: all .3s;
  display: block;
}

.cross__bar:first-child {
  transform: translate(0, 10px)rotate(-45deg);
}

.cross__bar:last-child {
  transform: translate(0, 5px)rotate(45deg);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
}

.container-red {
  max-width: 940px;
  background-color: #f2f2f2;
  margin: 50px auto;
  padding: 50px;
}

.photo-editor {
  gap: 100px;
  display: flex;
}

.container-red.disable :where(.photo-editor__sliders, .cancel-btn, .post-btn, .save-btn) {
  opacity: .6;
  pointer-events: none;
}

.photo-editor__img {
  width: 300px;
  height: 400px;
}

.photo-editor__img img {
  width: 300px;
  height: 100%;
  object-fit: cover;
}

.photo-editor__menu {
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  display: flex;
}

.photo-editor__opp {
  flex-direction: row;
  gap: 20px;
  display: flex;
}

.photo-editor__icons {
  text-align: center;
  flex-direction: column;
  display: flex;
}

.icon {
  width: 40px;
}

.edit-slider {
  -webkit-appearance: none;
  height: 4px;
  width: 100%;
  box-shadow: none;
  background-color: #000000a0;
  border-radius: 30px;
}

.edit-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 12px;
  width: 12px;
  cursor: pointer;
  background: #fff;
  border: 3px solid #d22856;
  border-radius: 50%;
}

.photo-editor__sliders {
  max-width: 300px;
  flex-direction: column;
  flex: auto;
  justify-content: space-around;
  display: flex;
}

.photo-editor__buttons {
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
  display: flex;
}

.photo-editor__buttons button {
  width: 130px;
  height: 35px;
  cursor: pointer;
  border: 3px solid #d22856;
  border-radius: 30px;
  transition: all .5s;
}

.photo-editor__buttons button:hover {
  background-color: #fff;
  transform: translateY(3px);
}

#choose:hover {
  background-color: #fff;
}

.photo-editor__text-input {
  max-width: 300px;
  max-height: 80px;
}

.photo-editor__textarea {
  -moz-appearance: none;
  resize: none;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background-color: #f2f2f2;
  border: 3px solid #d22856;
  border-radius: 10px;
  outline: none;
  padding: 5px;
  transition: all .5s;
}

.photo-editor__textarea:focus {
  height: 80px;
  border-color: #c42b54;
}

.photo-editor__textarea::-webkit-scrollbar {
  width: 5px;
}

.photo-editor__textarea:focus::-webkit-scrollbar-thumb {
  background: #971c3d;
  border-radius: 10px;
}

@media (max-width: 667px) {
  body {
    background-color: #f2f2f2;
  }

  .container-red {
    max-width: 280px;
    padding: 0;
  }

  .photo-editor {
    flex-direction: column;
    gap: 30px;
  }

  .photo-editor__img {
    max-width: 280px;
    max-height: 374px;
  }

  .photo-editor__img img {
    object-fit: cover;
  }

  .photo-editor__icons {
    height: 50px;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 35px;
  }

  .photo-editor__icons img {
    width: 45px;
    opacity: .5;
    transition: all .5s;
  }

  .photo-editor__icons img.actives {
    width: 50px;
    opacity: 1;
  }

  .photo-editor__opp {
    flex-direction: column;
    gap: 0;
  }

  .sls {
    margin-bottom: 50px;
  }

  .sls:not(:first-child) {
    display: none;
  }
}

.reg-form__container {
  justify-content: center;
  display: flex;
}

.reg-form {
  flex-direction: column;
  flex: 0 450px;
  padding-top: 50px;
  display: flex;
}

.reg-form label {
  color: #d22856;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
}

.reg-form__input {
  width: 100%;
  height: 50px;
  border: 2px solid #e5e5e5;
  border-radius: 1px;
  padding-left: 20px;
  transition: all .5s ease-in;
}

.reg-form__input:hover, .reg-form__input:focus {
  border-color: #283645;
}

.reg-form__inf {
  flex-direction: column;
  gap: 30px;
  margin-bottom: 40px;
  display: flex;
}

.reg-form__box {
  flex-direction: column;
  gap: 10px;
  display: flex;
  position: relative;
}

.error-message {
  color: #93092e;
  display: none;
  position: absolute;
  bottom: -20px;
}

.reg-form__box.error .error-message {
  display: block;
}

.reg-form__box.error .reg-form__input {
  color: #d22856;
  border-color: #d22856;
}

.reg-form__box.success .error-message {
  display: none;
}

.reg-form__box.success .reg-form__input {
  border-color: #4cde28;
}

.reg-form__contact-information {
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
  display: flex;
}

.reg-form__contact-information .reg-form__input {
  width: 100%;
}

.reg-form__contact-information label {
  margin-bottom: 10px;
}

.input__email, .input__phone {
  display: flex;
}

.input__icon {
  width: 50px;
  height: 50px;
  background-color: #e5e5e5;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 40px;
  right: 0;
}

.input__icon img {
  width: 20px;
  height: 20px;
}

.reg-form__button {
  width: 300px;
  height: 50px;
  color: #fff;
  background: #2aab6d;
  border: 2px solid #2aab6d;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  transition: all .5s;
}

.reg-form__button:active {
  color: #ffffff4e;
  background: #1c9b5e;
  border-color: #1c9b5e;
}

.reg-form__button:hover {
  background: #1c9b5e;
  border-color: #1c9b5e;
}

;

},{}],"jnPb0":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("UckoE") + "fill.04e93c9b.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3vUe0":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("UckoE") + "contrast.1d7a8858.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kU7F0":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("UckoE") + "sat.3b4464a1.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jtBnv":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("UckoE") + "prewiev.7e60fc71.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9rFp7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "photoEditorInit", ()=>photoEditorInit);
var _blocks = require("./blocks");
var _model = require("./model");
var _photoPageContent = require("./photoPageContent");
function photoEditorInit() {
    const imgInput = document.querySelector(".img-input");
    const sliders = document.querySelector(".photo-editor__sliders");
    let slider = document.querySelector(".edit-slider");
    const img = document.querySelector(".photo-editor__img > img");
    let photoEditor = document.querySelector(".photo-editor");
    let mobile = false;
    let hueRotate = 0, brightness = 100, sturation = 100;
    function loadImg() {
        let file = imgInput.files[0];
        img.src = URL.createObjectURL(file);
        img.onload = document.querySelector(".container-red").classList.remove("disable");
    }
    function updateFilter(e) {
        if (e.target.id === "hue") hueRotate = e.target.value;
        if (e.target.id === "br") brightness = e.target.value;
        if (e.target.id === "sat") sturation = e.target.value;
        applyFilters();
    }
    function applyFilters() {
        return img.style.filter = `saturate(${sturation}%) hue-rotate(${hueRotate}deg) brightness(${brightness}%)`;
    }
    function createCanvas() {
        const canvas = document.createElement("canvas");
        canvas.style.display = "none";
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        ctx.filter = applyFilters();
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        document.body.appendChild(canvas);
        return canvas;
    }
    function saveImg() {
        const link = document.createElement("a");
        link.download = "image.jpg";
        link.href = createCanvas().toDataURL();
        link.click();
    }
    function resetOpt() {
        hueRotate = 0, brightness = 100, sturation = 100;
        document.querySelectorAll(".edit-slider").forEach((elem)=>{
            elem.value = 100;
            document.querySelector(".photo-editor__textarea").value = "";
        });
        applyFilters();
    }
    function buttonEventLIst() {
        const butns = document.querySelector(".photo-editor__buttons");
        butns.addEventListener("click", (e)=>{
            if (e.target.id === "choose") {
                imgInput.click();
                imgInput.addEventListener("change", loadImg);
            }
            if (e.target.id === "save") saveImg();
            if (e.target.id === "reset") resetOpt();
            if (e.target.id === "post") addToModel();
        });
    }
    function addToModel() {
        let inputText = document.querySelector(".photo-editor__textarea").value;
        if (inputText == "") inputText = "Good Picture";
        let img = createCanvas().toDataURL();
        (0, _model.model).push(new (0, _model.ModelObj)(inputText, img));
        console.log((0, _model.model));
        document.querySelector(".wall__container").insertAdjacentHTML("afterbegin", (0, _blocks.wallPlates)(new (0, _model.ModelObj)(inputText, img)));
    }
    // mobile
    function addMobile() {
        if (window.innerWidth <= 667) photoEditor.classList.add("mobile");
    }
    window.addEventListener("resize", ()=>{
        if (window.innerWidth <= 667) addMobile();
        else photoEditor.classList.remove("mobile");
    });
    addMobile();
    function changeActive() {
        const icons = document.querySelectorAll(".icon");
        icons.forEach((icon)=>{
            icon.addEventListener("click", ()=>{
                document.querySelector(".actives").classList.remove("actives");
                icon.classList.add("actives");
                if (icon.id === "satIcon") slider.value = sturation;
                if (icon.id === "hueIcon") slider.value = hueRotate;
                if (icon.id === "brIcon") slider.value = brightness;
            });
        });
    }
    function filter() {
        slider.addEventListener("input", ()=>{
            const activeFilter = document.querySelector(".icon.actives").id;
            if (activeFilter === "satIcon") sturation = slider.value;
            if (activeFilter === "hueIcon") hueRotate = slider.value;
            if (activeFilter === "brIcon") brightness = slider.value;
            applyFilters();
        });
    }
    // if mobile
    window.addEventListener("resize", ()=>{
        mobile = photoEditor.classList.contains("mobile");
        if (mobile) {
            sliders.removeEventListener("input", updateFilter);
            changeActive();
            filter();
        } else sliders.addEventListener("input", updateFilter);
    });
    mobile = photoEditor.classList.contains("mobile");
    if (mobile) {
        changeActive();
        filter();
    } else sliders.addEventListener("input", updateFilter);
    buttonEventLIst();
}

},{"./blocks":"lK7se","./model":"lNtH5","./photoPageContent":"3l0vQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2VEux":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderRegPage", ()=>renderRegPage);
var _blocks = require("../photoSection/blocks");
var _photoPageContent = require("../photoSection/photoPageContent");
var _regForm = require("./regForm");
var _regFormScript = require("./regFormScript");
function renderRegPage() {
    (0, _photoPageContent.renderTitle)("Поделитесь своей <br> историей");
    renderForm();
}
function renderForm() {
    document.querySelector(".footer").insertAdjacentHTML("beforebegin", (0, _regForm.regFormBlock)());
    (0, _regFormScript.validation)();
}

},{"../photoSection/blocks":"lK7se","../photoSection/photoPageContent":"3l0vQ","./regForm":"loD4f","./regFormScript":"2OeTF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loD4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "regFormBlock", ()=>regFormBlock);
var _regFormCss = require("../../../styles/regForm.css");
let phoneIcon = new URL(require("21897f813d0db4a1"));
let mailIcon = new URL(require("2cb819977104d51"));
function regFormBlock() {
    return `
    <div class="reg-form__container container">
      <form class="reg-form" action="#">
        <div class="reg-form__inf">
          <div class="reg-form__name reg-form__box ">
            <label for="formName">Имя пользователя:</label>
            <input
               name="name"
              class="reg-form__input"
              id="formName"
              type="text"
              placeholder="Укажите имя пользователя*"
            />
            <span class="error-message">eroor message</span>
          </div>
          <div class="reg-form__pass reg-form__box">
            <label for="formName">Пороль:</label>
            <input
              name="pass"
              class="reg-form__input"
              id="formPass"
              type="password"
              placeholder="Придумайте пароль  ( A-z ; 8 )*"
            />
            <span class="error-message">eroor message</span>
          </div>
              <div class="reg-form__pass reg-form__box">
            <label for="formName">Повторите пароль:</label>
            <input
              name="pass2"
              class="reg-form__input"
              id="formPass2"
              type="password"
              placeholder="Повторите пароль *"
            />
            <span class="error-message">eroor message</span>
          </div>
          <div class="reg-form__phone reg-form__box">
            <label for="formPhone"> Номер телефона</label>
              <input
                name="phone"
                class="reg-form__input"
                id="formPhone"
                type="tel"
                placeholder="Укажите номер телефона *"
              />
              <span class="error-message">eroor message</span>
              <div class="input__icon">
                <img src="${phoneIcon}" alt="" />
              </div>
            </div>
          <div class="reg-form__email reg-form__box">
            <label for="formEmail">E-mail</label>
              <input
                name="email"
                class="reg-form__input"
                id="formEmail"
                type="email"
                placeholder="Укажите E-Mail *"
              />
               <span class="error-message">eroor message</span>
              <div class="input__icon">
                <img src="${mailIcon}" alt="" />
              </div>
                </div>

            </div>
            <button type="submit" class="reg-form__button">Отправить</button>
          </div>
        </div>
      </form>
    </div>
    `;
}

},{"../../../styles/regForm.css":"48x9T","21897f813d0db4a1":"6BqC7","2cb819977104d51":"7nCSY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"48x9T":[function(require,module,exports) {
module.exports = @import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap";
background-image: url("background.3cbd0da1.png")
.pop-up__container {
  height: 100%;
  width: 100%;
  z-index: 100;
  opacity: 0;
  background-color: #0000004d;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: all 1s ease-in;
  display: flex;
  position: fixed;
}

.pop-up__container.activeted {
  opacity: 1;
  transition: all .5s ease-in;
}

.pop-up__content {
  background-color: #fff;
  border: 3px solid #d22856;
  border-radius: 30px;
  flex: 0 500px;
  justify-content: center;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  position: relative;
}

.pop-up__form {
  width: 100%;
  color: #d22856;
  flex-direction: column;
  gap: 30px;
  display: flex;
}

.pop-up__block {
  flex-direction: column;
  gap: 10px;
  display: flex;
}

.pop-up__block label {
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
}

.pop-up__input {
  width: 100%;
  height: 50px;
  border: 2px solid #e5e5e5;
  border-radius: 1px;
  padding-left: 20px;
  transition: all .5s ease-in;
}

.pop-up__input:hover, .pop-up__input:focus {
  border-color: #283645;
}

.pop-up__registr a {
  color: #ba4665;
  border-bottom: 1px solid #d22856;
  transition: all .5s;
}

.pop-up__registr a:hover {
  color: #941b3b;
  border-color: #70132c;
}

.pop-up__button {
  height: 50px;
  color: #fff;
  background: #2aab6d;
  border: 2px solid #2aab6d;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  transition: all .5s;
}

.pop-up__button:active {
  color: #ffffff4e;
  background: #1c9b5e;
  border-color: #1c9b5e;
}

.pop-up__button:hover {
  background: #1c9b5e;
  border-color: #1c9b5e;
}

.pop-up__cross {
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
}

.pop-up__cross:hover .cross__bar {
  width: 40px;
}

.cross__bar {
  width: 30px;
  height: 5px;
  background-color: #d22856;
  border-radius: 2px;
  transition: all .3s;
  display: block;
}

.cross__bar:first-child {
  transform: translate(0, 10px)rotate(-45deg);
}

.cross__bar:last-child {
  transform: translate(0, 5px)rotate(45deg);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
}

.container-red {
  max-width: 940px;
  background-color: #f2f2f2;
  margin: 50px auto;
  padding: 50px;
}

.photo-editor {
  gap: 100px;
  display: flex;
}

.container-red.disable :where(.photo-editor__sliders, .cancel-btn, .post-btn, .save-btn) {
  opacity: .6;
  pointer-events: none;
}

.photo-editor__img {
  width: 300px;
  height: 400px;
}

.photo-editor__img img {
  width: 300px;
  height: 100%;
  object-fit: cover;
}

.photo-editor__menu {
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  display: flex;
}

.photo-editor__opp {
  flex-direction: row;
  gap: 20px;
  display: flex;
}

.photo-editor__icons {
  text-align: center;
  flex-direction: column;
  display: flex;
}

.icon {
  width: 40px;
}

.edit-slider {
  -webkit-appearance: none;
  height: 4px;
  width: 100%;
  box-shadow: none;
  background-color: #000000a0;
  border-radius: 30px;
}

.edit-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 12px;
  width: 12px;
  cursor: pointer;
  background: #fff;
  border: 3px solid #d22856;
  border-radius: 50%;
}

.photo-editor__sliders {
  max-width: 300px;
  flex-direction: column;
  flex: auto;
  justify-content: space-around;
  display: flex;
}

.photo-editor__buttons {
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
  display: flex;
}

.photo-editor__buttons button {
  width: 130px;
  height: 35px;
  cursor: pointer;
  border: 3px solid #d22856;
  border-radius: 30px;
  transition: all .5s;
}

.photo-editor__buttons button:hover {
  background-color: #fff;
  transform: translateY(3px);
}

#choose:hover {
  background-color: #fff;
}

.photo-editor__text-input {
  max-width: 300px;
  max-height: 80px;
}

.photo-editor__textarea {
  -moz-appearance: none;
  resize: none;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background-color: #f2f2f2;
  border: 3px solid #d22856;
  border-radius: 10px;
  outline: none;
  padding: 5px;
  transition: all .5s;
}

.photo-editor__textarea:focus {
  height: 80px;
  border-color: #c42b54;
}

.photo-editor__textarea::-webkit-scrollbar {
  width: 5px;
}

.photo-editor__textarea:focus::-webkit-scrollbar-thumb {
  background: #971c3d;
  border-radius: 10px;
}

@media (max-width: 667px) {
  body {
    background-color: #f2f2f2;
  }

  .container-red {
    max-width: 280px;
    padding: 0;
  }

  .photo-editor {
    flex-direction: column;
    gap: 30px;
  }

  .photo-editor__img {
    max-width: 280px;
    max-height: 374px;
  }

  .photo-editor__img img {
    object-fit: cover;
  }

  .photo-editor__icons {
    height: 50px;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 35px;
  }

  .photo-editor__icons img {
    width: 45px;
    opacity: .5;
    transition: all .5s;
  }

  .photo-editor__icons img.actives {
    width: 50px;
    opacity: 1;
  }

  .photo-editor__opp {
    flex-direction: column;
    gap: 0;
  }

  .sls {
    margin-bottom: 50px;
  }

  .sls:not(:first-child) {
    display: none;
  }
}

.reg-form__container {
  justify-content: center;
  display: flex;
}

.reg-form {
  flex-direction: column;
  flex: 0 450px;
  padding-top: 50px;
  display: flex;
}

.reg-form label {
  color: #d22856;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
}

.reg-form__input {
  width: 100%;
  height: 50px;
  border: 2px solid #e5e5e5;
  border-radius: 1px;
  padding-left: 20px;
  transition: all .5s ease-in;
}

.reg-form__input:hover, .reg-form__input:focus {
  border-color: #283645;
}

.reg-form__inf {
  flex-direction: column;
  gap: 30px;
  margin-bottom: 40px;
  display: flex;
}

.reg-form__box {
  flex-direction: column;
  gap: 10px;
  display: flex;
  position: relative;
}

.error-message {
  color: #93092e;
  display: none;
  position: absolute;
  bottom: -20px;
}

.reg-form__box.error .error-message {
  display: block;
}

.reg-form__box.error .reg-form__input {
  color: #d22856;
  border-color: #d22856;
}

.reg-form__box.success .error-message {
  display: none;
}

.reg-form__box.success .reg-form__input {
  border-color: #4cde28;
}

.reg-form__contact-information {
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
  display: flex;
}

.reg-form__contact-information .reg-form__input {
  width: 100%;
}

.reg-form__contact-information label {
  margin-bottom: 10px;
}

.input__email, .input__phone {
  display: flex;
}

.input__icon {
  width: 50px;
  height: 50px;
  background-color: #e5e5e5;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 40px;
  right: 0;
}

.input__icon img {
  width: 20px;
  height: 20px;
}

.reg-form__button {
  width: 300px;
  height: 50px;
  color: #fff;
  background: #2aab6d;
  border: 2px solid #2aab6d;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  transition: all .5s;
}

.reg-form__button:active {
  color: #ffffff4e;
  background: #1c9b5e;
  border-color: #1c9b5e;
}

.reg-form__button:hover {
  background: #1c9b5e;
  border-color: #1c9b5e;
}

;

},{}],"6BqC7":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("UckoE") + "phone.f50666df.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7nCSY":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("UckoE") + "mail.9ddf71b9.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2OeTF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validation", ()=>validation);
function validation() {
    const form = document.querySelector(".reg-form"), name = document.querySelector("#formName"), pass = document.querySelector("#formPass"), pass2 = document.querySelector("#formPass2"), phone = document.querySelector("#formPhone"), email = document.querySelector("#formEmail"), inputs = document.querySelectorAll(".reg-form__input");
    let nameValue;
    let passValue;
    let pass2Value;
    let phoneValue;
    let emailValue;
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        for (elm of inputs)if (elm.value.trim() === "") addError(elm);
    });
    for (elm of inputs)elm.addEventListener("input", (e)=>{
        if (e.target === name) {
            nameValue = name.value.trim();
            if (nameValue == "") addError(name);
            else addSucces(name);
        }
        if (e.target === pass) {
            passValue = pass.value.trim();
            if (passValue === "") addError(pass);
            else if (!validatePassword(passValue)) addError(pass, "Неподходящий пароль");
            else addSucces(pass);
        }
        if (e.target === pass2) {
            pass2Value = pass2.value.trim();
            if (pass2Value === "") addError(pass2);
            else if (pass2Value !== passValue) addError(pass2, "Пароли не совпадают");
            else addSucces(pass2);
        }
        if (e.target === phone) {
            phoneValue = phone.value.trim();
            if (phoneValue === "") addError(phone);
            else if (!validatePhone(phoneValue)) addError(phone, "Не действительный номер");
            else addSucces(phone);
        }
        if (e.target === email) {
            emailValue = email.value.trim();
            if (emailValue === "") addError(email);
            else if (!emailValidation(emailValue)) addError(email, "Не действительный E-Mail");
            else addSucces(email);
        }
    });
    function addError(place, errorText = "Это поле не может быть пустым") {
        let parent = place.parentNode;
        parent.classList.add("error");
        parent.querySelector(".error-message").textContent = errorText;
        if (parent.classList.contains("success")) parent.classList.remove("success");
    }
    function addSucces(place) {
        let parent = place.parentNode;
        parent.classList.add("success");
        parent.classList.remove("error");
    }
    function validatePassword(value) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
    }
    function validatePhone(value) {
        return /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(value);
    }
    function emailValidation(value) {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(value);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ff0mJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getNodes", ()=>getNodes);
parcelHelpers.export(exports, "removeMainPageNodes", ()=>removeMainPageNodes);
parcelHelpers.export(exports, "returnMainPageNodes", ()=>returnMainPageNodes);
parcelHelpers.export(exports, "removePhotoPageNodes", ()=>removePhotoPageNodes);
parcelHelpers.export(exports, "removeRegPageNodes", ()=>removeRegPageNodes);
parcelHelpers.export(exports, "addActiveClassToPage", ()=>addActiveClassToPage);
function getNodes() {
    return document.querySelector(".wrapper").children;
}
function removeMainPageNodes(nodes) {
    for(let i = 0; i < nodes.length; i++)if (i !== 0 && i !== nodes.length - 1) nodes[i].remove();
}
function returnMainPageNodes(nodes) {
    const header = document.querySelector(".header");
    for(let i = 0; i < nodes.length; i++)if (i !== 0 && i !== nodes.length - 1) header.after(nodes[i]);
}
function removePhotoPageNodes(photoNodes) {
    for(let i = 0; i < photoNodes.length; i++)if (i !== 0 && i !== photoNodes.length - 1) photoNodes[i].remove();
}
function removeRegPageNodes(regNodes) {
    for(let i = 0; i < regNodes.length; i++)if (i !== 0 && i !== regNodes.length - 1) regNodes[i].remove();
}
function addActiveClassToPage(target) {
    document.querySelector(".menu-active").classList.remove("menu-active");
    target.classList.add("menu-active");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jTfpc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initMap", ()=>initMap);
function initMap() {
    var mark = document.querySelector(".map__marker");
    var pos = {
        lat: 46.30156959231706,
        lng: 30.653228
    };
    var opt = {
        center: pos,
        zoom: 19,
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        fullscreenControl: false
    };
    map = new google.maps.Map(document.getElementById("map"), opt);
    const marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "Спавн шизов",
        icon: mark
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c1llB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slider", ()=>slider);
function slider() {
    const slList = document.querySelector(".slider__list");
    const blocks = document.querySelectorAll(".slider__content");
    const rightArrow = document.querySelector(".arrow-right");
    const leftArrow = document.querySelector(".arrow-left");
    let count = 0;
    function getWidth() {
        let sl = document.querySelector(".slider");
        if (sl) return sl.offsetWidth;
        else return false;
    }
    /////....... resizing........
    function init() {
        slList.style.width = getWidth() * blocks.length + "px";
        blocks.forEach((block)=>{
            block.style.width = getWidth() + "px";
            block.style.height = "auto";
        });
        slide();
    }
    init();
    window.addEventListener("resize", init);
    // ............arrow sliding
    function clickOnArow() {
        leftArrow.addEventListener("click", (e)=>{
            e.preventDefault;
            count--;
            if (count < 0) count = blocks.length - 1;
            slide();
            addAndRemoveActive();
        });
        rightArrow.addEventListener("click", (e)=>{
            e.preventDefault;
            count++;
            if (count >= blocks.length) count = 0;
            slide();
            addAndRemoveActive();
        });
    }
    clickOnArow();
    function slide() {
        slList.style.transform = `translateX(${-getWidth() * count + "px"} )`;
    }
    // ....swipe...
    function swipe() {
        const slider = document.querySelector(".slider__list");
        let x1 = 0;
        let x2 = 0;
        let xDiff = 0;
        slider.addEventListener("touchstart", TouchStart);
        slider.addEventListener("touchmove", TouchMove);
        slider.addEventListener("touchend", swipe);
        function TouchStart(e) {
            x1 = e.touches[0].clientX;
        }
        function TouchMove(e) {
            x2 = e.touches[0].clientX;
            xDiff = x2 - x1;
        }
        function swipe(e) {
            if (xDiff > 0) {
                count++;
                if (count >= blocks.length) count = 0;
                slide();
                addAndRemoveActive();
            } else {
                count--;
                if (count < 0) count = blocks.length - 1;
                slide();
                addAndRemoveActive();
            }
        }
    }
    swipe();
    //.........paginaniton........
    let circles = 0;
    function puginationInit() {
        for(let i = 0; i < blocks.length; i++){
            const cirlce = document.createElement("div");
            cirlce.classList.add("pagination__circle");
            document.querySelector(".slider__pagination").append(cirlce);
        }
        circles = [
            ...document.querySelectorAll(".pagination__circle")
        ];
        circles[0].classList.add("active");
        function pugButtonSlides() {
            for(let i = 0; i < circles.length; i++)circles[i].addEventListener("click", (e)=>{
                if (e.target == document.querySelector(".active")) return null;
                count = i;
                slide();
                addAndRemoveActive();
            });
        }
        pugButtonSlides();
    }
    puginationInit();
    function addAndRemoveActive() {
        let actives = document.querySelectorAll(".active");
        circles[count].classList.add("active");
        for (const elem of actives)elem.classList.remove("active");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"77d1l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mainJoinButton", ()=>mainJoinButton);
var _popUpRender = require("./popUpRender");
function mainJoinButton() {
    document.querySelectorAll(".intro__download-button").forEach((elm)=>{
        elm.addEventListener("click", (e)=>{
            e.preventDefault;
            (0, _popUpRender.renderPopUp)();
        });
    });
}

},{"./popUpRender":"71M8W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["awEvQ","bB7Pu"], "bB7Pu", "parcelRequireb62b")

//# sourceMappingURL=index.3d214d75.js.map
