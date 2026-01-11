"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "proxy";
exports.ids = ["proxy"];
exports.modules = {

/***/ "(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5CUsers%5Cgupta%5COneDrive%5CDesktop%5CSkillSync_Final%5Cfrontend%5Cproxy.js&page=%2Fproxy&rootDir=C%3A%5CUsers%5Cgupta%5COneDrive%5CDesktop%5CSkillSync_Final%5Cfrontend&matchers=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5CUsers%5Cgupta%5COneDrive%5CDesktop%5CSkillSync_Final%5Cfrontend%5Cproxy.js&page=%2Fproxy&rootDir=C%3A%5CUsers%5Cgupta%5COneDrive%5CDesktop%5CSkillSync_Final%5Cfrontend&matchers=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ nHandler)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/globals */ \"(middleware)/./node_modules/next/dist/server/web/globals.js\");\n/* harmony import */ var next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/adapter */ \"(middleware)/./node_modules/next/dist/server/web/adapter.js\");\n/* harmony import */ var next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _proxy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proxy.js */ \"(middleware)/./proxy.js\");\n/* harmony import */ var next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/components/is-next-router-error */ \"(middleware)/./node_modules/next/dist/client/components/is-next-router-error.js\");\n/* harmony import */ var next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3__);\n\n\n// Import the userland code.\n\n\n\nconst mod = {\n    ..._proxy_js__WEBPACK_IMPORTED_MODULE_2__\n};\nconst page = \"/proxy\";\nconst isProxy = page === '/proxy' || page === '/src/proxy';\nconst handler = (isProxy ? mod.proxy : mod.middleware) || mod.default;\nclass ProxyMissingExportError extends Error {\n    constructor(message){\n        super(message);\n        // Stack isn't useful here, remove it considering it spams logs during development.\n        this.stack = '';\n    }\n}\n// TODO: This spams logs during development. Find a better way to handle this.\n// Removing this will spam \"fn is not a function\" logs which is worse.\nif (typeof handler !== 'function') {\n    throw new ProxyMissingExportError(`The ${isProxy ? 'Proxy' : 'Middleware'} file \"${page}\" must export a function named \\`${isProxy ? 'proxy' : 'middleware'}\\` or a default function.`);\n}\n// Proxy will only sent out the FetchEvent to next server,\n// so load instrumentation module here and track the error inside proxy module.\nfunction errorHandledHandler(fn) {\n    return async (...args)=>{\n        try {\n            return await fn(...args);\n        } catch (err) {\n            // In development, error the navigation API usage in runtime,\n            // since it's not allowed to be used in proxy as it's outside of react component tree.\n            if (true) {\n                if ((0,next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3__.isNextRouterError)(err)) {\n                    err.message = `Next.js navigation API is not allowed to be used in ${isProxy ? 'Proxy' : 'Middleware'}.`;\n                    throw err;\n                }\n            }\n            const req = args[0];\n            const url = new URL(req.url);\n            const resource = url.pathname + url.search;\n            await (0,next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0__.edgeInstrumentationOnRequestError)(err, {\n                path: resource,\n                method: req.method,\n                headers: Object.fromEntries(req.headers.entries())\n            }, {\n                routerKind: 'Pages Router',\n                routePath: '/proxy',\n                routeType: 'proxy',\n                revalidateReason: undefined\n            });\n            throw err;\n        }\n    };\n}\nfunction nHandler(opts) {\n    return (0,next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1__.adapter)({\n        ...opts,\n        page,\n        handler: errorHandledHandler(handler)\n    });\n}\n\n//# sourceMappingURL=middleware.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1taWRkbGV3YXJlLWxvYWRlci5qcz9hYnNvbHV0ZVBhZ2VQYXRoPUMlM0ElNUNVc2VycyU1Q2d1cHRhJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDU2tpbGxTeW5jX0ZpbmFsJTVDZnJvbnRlbmQlNUNwcm94eS5qcyZwYWdlPSUyRnByb3h5JnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDZ3VwdGElNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNTa2lsbFN5bmNfRmluYWwlNUNmcm9udGVuZCZtYXRjaGVycz0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0M7QUFDaUI7QUFDdkQ7QUFDbUM7QUFDOEM7QUFDSTtBQUNyRjtBQUNBLE9BQU8sc0NBQUk7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGtDQUFrQyxRQUFRLEtBQUssbUNBQW1DLGlDQUFpQztBQUNoSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsZ0JBQWdCLElBQXFDO0FBQ3JELG9CQUFvQixtR0FBaUI7QUFDckMseUZBQXlGLGlDQUFpQztBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0ZBQWlDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2YsV0FBVyxxRUFBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJuZXh0L2Rpc3Qvc2VydmVyL3dlYi9nbG9iYWxzXCI7XG5pbXBvcnQgeyBhZGFwdGVyIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL2FkYXB0ZXJcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIF9tb2QgZnJvbSBcIi4vcHJveHkuanNcIjtcbmltcG9ydCB7IGVkZ2VJbnN0cnVtZW50YXRpb25PblJlcXVlc3RFcnJvciB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3dlYi9nbG9iYWxzXCI7XG5pbXBvcnQgeyBpc05leHRSb3V0ZXJFcnJvciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvaXMtbmV4dC1yb3V0ZXItZXJyb3JcIjtcbmNvbnN0IG1vZCA9IHtcbiAgICAuLi5fbW9kXG59O1xuY29uc3QgcGFnZSA9IFwiL3Byb3h5XCI7XG5jb25zdCBpc1Byb3h5ID0gcGFnZSA9PT0gJy9wcm94eScgfHwgcGFnZSA9PT0gJy9zcmMvcHJveHknO1xuY29uc3QgaGFuZGxlciA9IChpc1Byb3h5ID8gbW9kLnByb3h5IDogbW9kLm1pZGRsZXdhcmUpIHx8IG1vZC5kZWZhdWx0O1xuY2xhc3MgUHJveHlNaXNzaW5nRXhwb3J0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSl7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICAvLyBTdGFjayBpc24ndCB1c2VmdWwgaGVyZSwgcmVtb3ZlIGl0IGNvbnNpZGVyaW5nIGl0IHNwYW1zIGxvZ3MgZHVyaW5nIGRldmVsb3BtZW50LlxuICAgICAgICB0aGlzLnN0YWNrID0gJyc7XG4gICAgfVxufVxuLy8gVE9ETzogVGhpcyBzcGFtcyBsb2dzIGR1cmluZyBkZXZlbG9wbWVudC4gRmluZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuXG4vLyBSZW1vdmluZyB0aGlzIHdpbGwgc3BhbSBcImZuIGlzIG5vdCBhIGZ1bmN0aW9uXCIgbG9ncyB3aGljaCBpcyB3b3JzZS5cbmlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBQcm94eU1pc3NpbmdFeHBvcnRFcnJvcihgVGhlICR7aXNQcm94eSA/ICdQcm94eScgOiAnTWlkZGxld2FyZSd9IGZpbGUgXCIke3BhZ2V9XCIgbXVzdCBleHBvcnQgYSBmdW5jdGlvbiBuYW1lZCBcXGAke2lzUHJveHkgPyAncHJveHknIDogJ21pZGRsZXdhcmUnfVxcYCBvciBhIGRlZmF1bHQgZnVuY3Rpb24uYCk7XG59XG4vLyBQcm94eSB3aWxsIG9ubHkgc2VudCBvdXQgdGhlIEZldGNoRXZlbnQgdG8gbmV4dCBzZXJ2ZXIsXG4vLyBzbyBsb2FkIGluc3RydW1lbnRhdGlvbiBtb2R1bGUgaGVyZSBhbmQgdHJhY2sgdGhlIGVycm9yIGluc2lkZSBwcm94eSBtb2R1bGUuXG5mdW5jdGlvbiBlcnJvckhhbmRsZWRIYW5kbGVyKGZuKSB7XG4gICAgcmV0dXJuIGFzeW5jICguLi5hcmdzKT0+e1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIEluIGRldmVsb3BtZW50LCBlcnJvciB0aGUgbmF2aWdhdGlvbiBBUEkgdXNhZ2UgaW4gcnVudGltZSxcbiAgICAgICAgICAgIC8vIHNpbmNlIGl0J3Mgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiBwcm94eSBhcyBpdCdzIG91dHNpZGUgb2YgcmVhY3QgY29tcG9uZW50IHRyZWUuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmIChpc05leHRSb3V0ZXJFcnJvcihlcnIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID0gYE5leHQuanMgbmF2aWdhdGlvbiBBUEkgaXMgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiAke2lzUHJveHkgPyAnUHJveHknIDogJ01pZGRsZXdhcmUnfS5gO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVxID0gYXJnc1swXTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHVybC5wYXRobmFtZSArIHVybC5zZWFyY2g7XG4gICAgICAgICAgICBhd2FpdCBlZGdlSW5zdHJ1bWVudGF0aW9uT25SZXF1ZXN0RXJyb3IoZXJyLCB7XG4gICAgICAgICAgICAgICAgcGF0aDogcmVzb3VyY2UsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiByZXEubWV0aG9kLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IE9iamVjdC5mcm9tRW50cmllcyhyZXEuaGVhZGVycy5lbnRyaWVzKCkpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcm91dGVyS2luZDogJ1BhZ2VzIFJvdXRlcicsXG4gICAgICAgICAgICAgICAgcm91dGVQYXRoOiAnL3Byb3h5JyxcbiAgICAgICAgICAgICAgICByb3V0ZVR5cGU6ICdwcm94eScsXG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0ZVJlYXNvbjogdW5kZWZpbmVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuSGFuZGxlcihvcHRzKSB7XG4gICAgcmV0dXJuIGFkYXB0ZXIoe1xuICAgICAgICAuLi5vcHRzLFxuICAgICAgICBwYWdlLFxuICAgICAgICBoYW5kbGVyOiBlcnJvckhhbmRsZWRIYW5kbGVyKGhhbmRsZXIpXG4gICAgfSk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pZGRsZXdhcmUuanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5CUsers%5Cgupta%5COneDrive%5CDesktop%5CSkillSync_Final%5Cfrontend%5Cproxy.js&page=%2Fproxy&rootDir=C%3A%5CUsers%5Cgupta%5COneDrive%5CDesktop%5CSkillSync_Final%5Cfrontend&matchers=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(middleware)/./proxy.js":
/*!******************!*\
  !*** ./proxy.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.clerkMiddleware)({\n    publicRoutes: [\n        \"/\",\n        \"/about\",\n        \"/features\",\n        \"/community\",\n        \"/sign-in(.*)\",\n        \"/sign-up(.*)\"\n    ]\n}));\nconst config = {\n    matcher: [\n        \"/((?!_next/static|_next/image|favicon.ico|.*\\\\..*).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcHJveHkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBRXZELGlFQUFlQSxxRUFBZUEsQ0FBQztJQUM3QkMsY0FBYztRQUNaO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0FBQ0gsRUFBRSxFQUFDO0FBRUksTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUFDO0tBQXdEO0FBQ3BFLEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ3VwdGFcXE9uZURyaXZlXFxEZXNrdG9wXFxTa2lsbFN5bmNfRmluYWxcXGZyb250ZW5kXFxwcm94eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVya01pZGRsZXdhcmUgfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsZXJrTWlkZGxld2FyZSh7XHJcbiAgcHVibGljUm91dGVzOiBbXHJcbiAgICBcIi9cIixcclxuICAgIFwiL2Fib3V0XCIsXHJcbiAgICBcIi9mZWF0dXJlc1wiLFxyXG4gICAgXCIvY29tbXVuaXR5XCIsXHJcbiAgICBcIi9zaWduLWluKC4qKVwiLFxyXG4gICAgXCIvc2lnbi11cCguKilcIixcclxuICBdLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogW1wiLygoPyFfbmV4dC9zdGF0aWN8X25leHQvaW1hZ2V8ZmF2aWNvbi5pY298LipcXFxcLi4qKS4qKVwiXSxcclxufTtcclxuIl0sIm5hbWVzIjpbImNsZXJrTWlkZGxld2FyZSIsInB1YmxpY1JvdXRlcyIsImNvbmZpZyIsIm1hdGNoZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./proxy.js\n");

/***/ }),

/***/ "../../server/app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "../incremental-cache/tags-manifest.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/lib/incremental-cache/tags-manifest.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/lib/incremental-cache/tags-manifest.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "node:async_hooks":
/*!***********************************!*\
  !*** external "node:async_hooks" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("node:async_hooks");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@clerk","vendor-chunks/cookie"], () => (__webpack_exec__("(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5CUsers%5Cgupta%5COneDrive%5CDesktop%5CSkillSync_Final%5Cfrontend%5Cproxy.js&page=%2Fproxy&rootDir=C%3A%5CUsers%5Cgupta%5COneDrive%5CDesktop%5CSkillSync_Final%5Cfrontend&matchers=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();