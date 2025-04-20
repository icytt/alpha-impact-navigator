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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fyanbinglu%2FDocuments%2FStartupSystem%2Falpha-impact-navigator%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyanbinglu%2FDocuments%2FStartupSystem%2Falpha-impact-navigator&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fyanbinglu%2FDocuments%2FStartupSystem%2Falpha-impact-navigator%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyanbinglu%2FDocuments%2FStartupSystem%2Falpha-impact-navigator&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_yanbinglu_Documents_StartupSystem_alpha_impact_navigator_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/yanbinglu/Documents/StartupSystem/alpha-impact-navigator/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_yanbinglu_Documents_StartupSystem_alpha_impact_navigator_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnlhbmJpbmdsdSUyRkRvY3VtZW50cyUyRlN0YXJ0dXBTeXN0ZW0lMkZhbHBoYS1pbXBhY3QtbmF2aWdhdG9yJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnlhbmJpbmdsdSUyRkRvY3VtZW50cyUyRlN0YXJ0dXBTeXN0ZW0lMkZhbHBoYS1pbXBhY3QtbmF2aWdhdG9yJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3VEO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxwaGEtaW1wYWN0LW5hdmlnYXRvci8/Y2ZkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMveWFuYmluZ2x1L0RvY3VtZW50cy9TdGFydHVwU3lzdGVtL2FscGhhLWltcGFjdC1uYXZpZ2F0b3Ivc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy95YW5iaW5nbHUvRG9jdW1lbnRzL1N0YXJ0dXBTeXN0ZW0vYWxwaGEtaW1wYWN0LW5hdmlnYXRvci9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fyanbinglu%2FDocuments%2FStartupSystem%2Falpha-impact-navigator%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyanbinglu%2FDocuments%2FStartupSystem%2Falpha-impact-navigator&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _auth_drizzle_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/drizzle-adapter */ \"(rsc)/./node_modules/@auth/drizzle-adapter/index.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db */ \"(rsc)/./src/db/index.ts\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! drizzle-orm */ \"(rsc)/./node_modules/drizzle-orm/sql/expressions/conditions.js\");\n/* harmony import */ var _db_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/db/schema */ \"(rsc)/./src/db/schema.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nif (!process.env.NEXTAUTH_SECRET) {\n    throw new Error(\"Please provide process.env.NEXTAUTH_SECRET\");\n}\nconst authOptions = {\n    adapter: (0,_auth_drizzle_adapter__WEBPACK_IMPORTED_MODULE_0__.DrizzleAdapter)(_db__WEBPACK_IMPORTED_MODULE_1__.db),\n    secret: process.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    pages: {\n        signIn: \"/auth/signin\",\n        signOut: \"/\",\n        error: \"/auth/error\"\n    },\n    debug: \"development\" === \"development\",\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    console.log(\"Missing credentials\");\n                    return null;\n                }\n                const user = await _db__WEBPACK_IMPORTED_MODULE_1__.db.query.users.findFirst({\n                    where: (0,drizzle_orm__WEBPACK_IMPORTED_MODULE_6__.eq)(_db_schema__WEBPACK_IMPORTED_MODULE_4__.users.email, credentials.email)\n                });\n                if (!user) {\n                    console.log(\"User not found\");\n                    return null;\n                }\n                const isPasswordValid = await bcrypt__WEBPACK_IMPORTED_MODULE_5___default().compare(credentials.password, user.password);\n                if (!isPasswordValid) {\n                    console.log(\"Invalid password\");\n                    return null;\n                }\n                console.log(\"User authenticated successfully:\", user.email);\n                return {\n                    id: String(user.id),\n                    email: user.email,\n                    name: user.name\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.email = user.email;\n                token.name = user.name;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user && token) {\n                session.user.id = token.id;\n                session.user.email = token.email;\n                session.user.name = token.name;\n            }\n            return session;\n        }\n    }\n};\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDN0I7QUFFWTtBQUM0QjtBQUNqQztBQUNHO0FBQ1I7QUFFNUIsSUFBSSxDQUFDTyxRQUFRQyxHQUFHLENBQUNDLGVBQWUsRUFBRTtJQUNoQyxNQUFNLElBQUlDLE1BQU07QUFDbEI7QUFFTyxNQUFNQyxjQUErQjtJQUMxQ0MsU0FBU1oscUVBQWNBLENBQUNDLG1DQUFFQTtJQUMxQlksUUFBUU4sUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQ25DSyxTQUFTO1FBQ1BDLFVBQVU7UUFDVkMsUUFBUSxLQUFLLEtBQUssS0FBSztJQUN6QjtJQUNBQyxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsU0FBUztRQUNUQyxPQUFPO0lBQ1Q7SUFDQUMsT0FBT2Qsa0JBQXlCO0lBQ2hDZSxXQUFXO1FBQ1RuQiwyRUFBbUJBLENBQUM7WUFDbEJvQixNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsSUFBSSxDQUFDQSxhQUFhQyxTQUFTLENBQUNELGFBQWFJLFVBQVU7b0JBQ2pERSxRQUFRQyxHQUFHLENBQUM7b0JBQ1osT0FBTztnQkFDVDtnQkFFQSxNQUFNQyxPQUFPLE1BQU0vQixtQ0FBRUEsQ0FBQ2dDLEtBQUssQ0FBQzVCLEtBQUssQ0FBQzZCLFNBQVMsQ0FBQztvQkFDMUNDLE9BQU8vQiwrQ0FBRUEsQ0FBQ0MsNkNBQUtBLENBQUNvQixLQUFLLEVBQUVELFlBQVlDLEtBQUs7Z0JBQzFDO2dCQUVBLElBQUksQ0FBQ08sTUFBTTtvQkFDVEYsUUFBUUMsR0FBRyxDQUFDO29CQUNaLE9BQU87Z0JBQ1Q7Z0JBRUEsTUFBTUssa0JBQWtCLE1BQU05QixxREFBYyxDQUMxQ2tCLFlBQVlJLFFBQVEsRUFDcEJJLEtBQUtKLFFBQVE7Z0JBR2YsSUFBSSxDQUFDUSxpQkFBaUI7b0JBQ3BCTixRQUFRQyxHQUFHLENBQUM7b0JBQ1osT0FBTztnQkFDVDtnQkFFQUQsUUFBUUMsR0FBRyxDQUFDLG9DQUFvQ0MsS0FBS1AsS0FBSztnQkFDMUQsT0FBTztvQkFDTGEsSUFBSUMsT0FBT1AsS0FBS00sRUFBRTtvQkFDbEJiLE9BQU9PLEtBQUtQLEtBQUs7b0JBQ2pCRixNQUFNUyxLQUFLVCxJQUFJO2dCQUNqQjtZQUNGO1FBQ0Y7S0FDRDtJQUNEaUIsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFVixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUlUsTUFBTUosRUFBRSxHQUFHTixLQUFLTSxFQUFFO2dCQUNsQkksTUFBTWpCLEtBQUssR0FBR08sS0FBS1AsS0FBSztnQkFDeEJpQixNQUFNbkIsSUFBSSxHQUFHUyxLQUFLVCxJQUFJO1lBQ3hCO1lBQ0EsT0FBT21CO1FBQ1Q7UUFDQSxNQUFNNUIsU0FBUSxFQUFFQSxPQUFPLEVBQUU0QixLQUFLLEVBQUU7WUFDOUIsSUFBSTVCLFFBQVFrQixJQUFJLElBQUlVLE9BQU87Z0JBQ3pCNUIsUUFBUWtCLElBQUksQ0FBQ00sRUFBRSxHQUFHSSxNQUFNSixFQUFFO2dCQUMxQnhCLFFBQVFrQixJQUFJLENBQUNQLEtBQUssR0FBR2lCLE1BQU1qQixLQUFLO2dCQUNoQ1gsUUFBUWtCLElBQUksQ0FBQ1QsSUFBSSxHQUFHbUIsTUFBTW5CLElBQUk7WUFDaEM7WUFDQSxPQUFPVDtRQUNUO0lBQ0Y7QUFDRixFQUFFO0FBRUYsTUFBTTZCLFVBQVV6QywwREFBUUEsQ0FBQ1M7QUFDa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHBoYS1pbXBhY3QtbmF2aWdhdG9yLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzPzAwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJpenpsZUFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvZHJpenpsZS1hZGFwdGVyXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2RiXCI7XG5pbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IHsgZXEgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHVzZXJzIH0gZnJvbSBcIkAvZGIvc2NoZW1hXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcblxuaWYgKCFwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUXCIpO1xufVxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgYWRhcHRlcjogRHJpenpsZUFkYXB0ZXIoZGIpLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICAgIG1heEFnZTogMzAgKiAyNCAqIDYwICogNjAsIC8vIDMwIGRheXNcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2F1dGgvc2lnbmluXCIsXG4gICAgc2lnbk91dDogXCIvXCIsXG4gICAgZXJyb3I6IFwiL2F1dGgvZXJyb3JcIixcbiAgfSxcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk1pc3NpbmcgY3JlZGVudGlhbHNcIik7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgICB3aGVyZTogZXEodXNlcnMuZW1haWwsIGNyZWRlbnRpYWxzLmVtYWlsKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICAgIHVzZXIucGFzc3dvcmRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWlzUGFzc3dvcmRWYWxpZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBwYXNzd29yZFwiKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBhdXRoZW50aWNhdGVkIHN1Y2Nlc3NmdWxseTpcIiwgdXNlci5lbWFpbCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IFN0cmluZyh1c2VyLmlkKSxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgICAgdG9rZW4uZW1haWwgPSB1c2VyLmVtYWlsO1xuICAgICAgICB0b2tlbi5uYW1lID0gdXNlci5uYW1lO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIgJiYgdG9rZW4pIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQgYXMgc3RyaW5nO1xuICAgICAgICBzZXNzaW9uLnVzZXIuZW1haWwgPSB0b2tlbi5lbWFpbDtcbiAgICAgICAgc2Vzc2lvbi51c2VyLm5hbWUgPSB0b2tlbi5uYW1lO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07ICJdLCJuYW1lcyI6WyJEcml6emxlQWRhcHRlciIsImRiIiwiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiZXEiLCJ1c2VycyIsImJjcnlwdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJFcnJvciIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInNlY3JldCIsInNlc3Npb24iLCJzdHJhdGVneSIsIm1heEFnZSIsInBhZ2VzIiwic2lnbkluIiwic2lnbk91dCIsImVycm9yIiwiZGVidWciLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJxdWVyeSIsImZpbmRGaXJzdCIsIndoZXJlIiwiaXNQYXNzd29yZFZhbGlkIiwiY29tcGFyZSIsImlkIiwiU3RyaW5nIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/db/index.ts":
/*!*************************!*\
  !*** ./src/db/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm_node_postgres__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/node-postgres */ \"(rsc)/./node_modules/drizzle-orm/node-postgres/driver.js\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ \"(rsc)/./src/db/schema.ts\");\n\n\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    connectionString: process.env.DATABASE_URL\n});\nconst db = (0,drizzle_orm_node_postgres__WEBPACK_IMPORTED_MODULE_2__.drizzle)(pool, {\n    schema: _schema__WEBPACK_IMPORTED_MODULE_1__\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGIvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0Q7QUFDMUI7QUFDUztBQUVuQyxNQUFNRyxPQUFPLElBQUlGLG9DQUFJQSxDQUFDO0lBQ3BCRyxrQkFBa0JDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtBQUM1QztBQUVPLE1BQU1DLEtBQUtSLGtFQUFPQSxDQUFDRyxNQUFNO0lBQUVELE1BQU1BLHNDQUFBQTtBQUFDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHBoYS1pbXBhY3QtbmF2aWdhdG9yLy4vc3JjL2RiL2luZGV4LnRzP2RhYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZHJpenpsZSB9IGZyb20gJ2RyaXp6bGUtb3JtL25vZGUtcG9zdGdyZXMnO1xuaW1wb3J0IHsgUG9vbCB9IGZyb20gJ3BnJztcbmltcG9ydCAqIGFzIHNjaGVtYSBmcm9tICcuL3NjaGVtYSc7XG5cbmNvbnN0IHBvb2wgPSBuZXcgUG9vbCh7XG4gIGNvbm5lY3Rpb25TdHJpbmc6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGIgPSBkcml6emxlKHBvb2wsIHsgc2NoZW1hIH0pOyJdLCJuYW1lcyI6WyJkcml6emxlIiwiUG9vbCIsInNjaGVtYSIsInBvb2wiLCJjb25uZWN0aW9uU3RyaW5nIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/db/index.ts\n");

/***/ }),

/***/ "(rsc)/./src/db/schema.ts":
/*!**************************!*\
  !*** ./src/db/schema.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   investments: () => (/* binding */ investments),\n/* harmony export */   investmentsRelations: () => (/* binding */ investmentsRelations),\n/* harmony export */   userInvestments: () => (/* binding */ userInvestments),\n/* harmony export */   userInvestmentsRelations: () => (/* binding */ userInvestmentsRelations),\n/* harmony export */   users: () => (/* binding */ users),\n/* harmony export */   usersRelations: () => (/* binding */ usersRelations)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! drizzle-orm */ \"(rsc)/./node_modules/drizzle-orm/relations.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/table.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/serial.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/varchar.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/timestamp.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/text.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/numeric.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/integer.js\");\n// drizzle/schema.ts\n\n\n// Users table\nconst users = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)(\"users\", {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.serial)(\"id\").primaryKey(),\n    email: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)(\"email\", {\n        length: 255\n    }).notNull().unique(),\n    name: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)(\"name\", {\n        length: 255\n    }),\n    password: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)(\"password\", {\n        length: 255\n    }).notNull(),\n    createdAt: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__.timestamp)(\"created_at\").defaultNow()\n});\n// Investment opportunities table\nconst investments = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)(\"investments\", {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.serial)(\"id\").primaryKey(),\n    title: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)(\"title\", {\n        length: 255\n    }).notNull(),\n    description: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_4__.text)(\"description\").notNull(),\n    category: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)(\"category\", {\n        length: 255\n    }).notNull(),\n    amount: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_5__.decimal)(\"amount\", {\n        precision: 10,\n        scale: 2\n    }).default(\"100.00\").notNull(),\n    imageUrl: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)(\"image_url\", {\n        length: 255\n    }),\n    createdAt: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__.timestamp)(\"created_at\").defaultNow(),\n    expectedReturn: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_5__.decimal)(\"expected_return\", {\n        precision: 5,\n        scale: 2\n    }).default(\"10.00\").notNull(),\n    riskLevel: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)(\"risk_level\", {\n        length: 50\n    }).default(\"moderate\").notNull()\n});\n// User investments table (junction table)\nconst userInvestments = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)(\"user_investments\", {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.serial)(\"id\").primaryKey(),\n    userId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_6__.integer)(\"user_id\").references(()=>users.id).notNull(),\n    investmentId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_6__.integer)(\"investment_id\").references(()=>investments.id).notNull(),\n    amount: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_5__.decimal)(\"amount\", {\n        precision: 10,\n        scale: 2\n    }).notNull(),\n    investedAt: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__.timestamp)(\"invested_at\").defaultNow(),\n    currentValue: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_5__.decimal)(\"current_value\", {\n        precision: 10,\n        scale: 2\n    }),\n    lastValuationDate: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__.timestamp)(\"last_valuation_date\").defaultNow(),\n    totalReturn: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_5__.decimal)(\"total_return\", {\n        precision: 5,\n        scale: 2\n    })\n});\n// Define relations\nconst usersRelations = (0,drizzle_orm__WEBPACK_IMPORTED_MODULE_7__.relations)(users, ({ many })=>({\n        investments: many(userInvestments)\n    }));\nconst investmentsRelations = (0,drizzle_orm__WEBPACK_IMPORTED_MODULE_7__.relations)(investments, ({ many })=>({\n        userInvestments: many(userInvestments)\n    }));\nconst userInvestmentsRelations = (0,drizzle_orm__WEBPACK_IMPORTED_MODULE_7__.relations)(userInvestments, ({ one })=>({\n        user: one(users, {\n            fields: [\n                userInvestments.userId\n            ],\n            references: [\n                users.id\n            ]\n        }),\n        investment: one(investments, {\n            fields: [\n                userInvestments.investmentId\n            ],\n            references: [\n                investments.id\n            ]\n        })\n    }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNmb0MsUUFBUTtnQkFBQ2QsZ0JBQWdCQyxNQUFNO2FBQUM7WUFDaENDLFlBQVk7Z0JBQUN4QixNQUFNQyxFQUFFO2FBQUM7UUFDeEI7UUFDQW9DLFlBQVlILElBQUl2QixhQUFhO1lBQzNCeUIsUUFBUTtnQkFBQ2QsZ0JBQWdCRyxZQUFZO2FBQUM7WUFDdENELFlBQVk7Z0JBQUNiLFlBQVlWLEVBQUU7YUFBQztRQUM5QjtJQUNGLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHBoYS1pbXBhY3QtbmF2aWdhdG9yLy4vc3JjL2RiL3NjaGVtYS50cz9mMDE0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGRyaXp6bGUvc2NoZW1hLnRzXG5pbXBvcnQgeyByZWxhdGlvbnMgfSBmcm9tICdkcml6emxlLW9ybSc7XG5pbXBvcnQge1xuICBwZ1RhYmxlLFxuICBzZXJpYWwsXG4gIHRleHQsXG4gIHZhcmNoYXIsXG4gIHRpbWVzdGFtcCxcbiAgaW50ZWdlcixcbiAgZGVjaW1hbCxcbn0gZnJvbSAnZHJpenpsZS1vcm0vcGctY29yZSc7XG5cbi8vIFVzZXJzIHRhYmxlXG5leHBvcnQgY29uc3QgdXNlcnMgPSBwZ1RhYmxlKFwidXNlcnNcIiwge1xuICBpZDogc2VyaWFsKFwiaWRcIikucHJpbWFyeUtleSgpLFxuICBlbWFpbDogdmFyY2hhcihcImVtYWlsXCIsIHsgbGVuZ3RoOiAyNTUgfSkubm90TnVsbCgpLnVuaXF1ZSgpLFxuICBuYW1lOiB2YXJjaGFyKFwibmFtZVwiLCB7IGxlbmd0aDogMjU1IH0pLFxuICBwYXNzd29yZDogdmFyY2hhcihcInBhc3N3b3JkXCIsIHsgbGVuZ3RoOiAyNTUgfSkubm90TnVsbCgpLFxuICBjcmVhdGVkQXQ6IHRpbWVzdGFtcCgnY3JlYXRlZF9hdCcpLmRlZmF1bHROb3coKSxcbn0pO1xuXG4vLyBJbnZlc3RtZW50IG9wcG9ydHVuaXRpZXMgdGFibGVcbmV4cG9ydCBjb25zdCBpbnZlc3RtZW50cyA9IHBnVGFibGUoXCJpbnZlc3RtZW50c1wiLCB7XG4gIGlkOiBzZXJpYWwoXCJpZFwiKS5wcmltYXJ5S2V5KCksXG4gIHRpdGxlOiB2YXJjaGFyKFwidGl0bGVcIiwgeyBsZW5ndGg6IDI1NSB9KS5ub3ROdWxsKCksXG4gIGRlc2NyaXB0aW9uOiB0ZXh0KFwiZGVzY3JpcHRpb25cIikubm90TnVsbCgpLFxuICBjYXRlZ29yeTogdmFyY2hhcihcImNhdGVnb3J5XCIsIHsgbGVuZ3RoOiAyNTUgfSkubm90TnVsbCgpLFxuICBhbW91bnQ6IGRlY2ltYWwoXCJhbW91bnRcIiwgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KS5kZWZhdWx0KCcxMDAuMDAnKS5ub3ROdWxsKCksXG4gIGltYWdlVXJsOiB2YXJjaGFyKFwiaW1hZ2VfdXJsXCIsIHsgbGVuZ3RoOiAyNTUgfSksXG4gIGNyZWF0ZWRBdDogdGltZXN0YW1wKCdjcmVhdGVkX2F0JykuZGVmYXVsdE5vdygpLFxuICBleHBlY3RlZFJldHVybjogZGVjaW1hbChcImV4cGVjdGVkX3JldHVyblwiLCB7IHByZWNpc2lvbjogNSwgc2NhbGU6IDIgfSkuZGVmYXVsdCgnMTAuMDAnKS5ub3ROdWxsKCksIC8vIEFubnVhbCByZXR1cm4gcmF0ZSBpbiBwZXJjZW50YWdlXG4gIHJpc2tMZXZlbDogdmFyY2hhcihcInJpc2tfbGV2ZWxcIiwgeyBsZW5ndGg6IDUwIH0pLmRlZmF1bHQoJ21vZGVyYXRlJykubm90TnVsbCgpLFxufSk7XG5cbi8vIFVzZXIgaW52ZXN0bWVudHMgdGFibGUgKGp1bmN0aW9uIHRhYmxlKVxuZXhwb3J0IGNvbnN0IHVzZXJJbnZlc3RtZW50cyA9IHBnVGFibGUoXCJ1c2VyX2ludmVzdG1lbnRzXCIsIHtcbiAgaWQ6IHNlcmlhbChcImlkXCIpLnByaW1hcnlLZXkoKSxcbiAgdXNlcklkOiBpbnRlZ2VyKFwidXNlcl9pZFwiKS5yZWZlcmVuY2VzKCgpID0+IHVzZXJzLmlkKS5ub3ROdWxsKCksXG4gIGludmVzdG1lbnRJZDogaW50ZWdlcihcImludmVzdG1lbnRfaWRcIikucmVmZXJlbmNlcygoKSA9PiBpbnZlc3RtZW50cy5pZCkubm90TnVsbCgpLFxuICBhbW91bnQ6IGRlY2ltYWwoXCJhbW91bnRcIiwgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KS5ub3ROdWxsKCksXG4gIGludmVzdGVkQXQ6IHRpbWVzdGFtcCgnaW52ZXN0ZWRfYXQnKS5kZWZhdWx0Tm93KCksXG4gIGN1cnJlbnRWYWx1ZTogZGVjaW1hbChcImN1cnJlbnRfdmFsdWVcIiwgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KSwgLy8gQ3VycmVudCB2YWx1ZSBvZiB0aGUgaW52ZXN0bWVudFxuICBsYXN0VmFsdWF0aW9uRGF0ZTogdGltZXN0YW1wKCdsYXN0X3ZhbHVhdGlvbl9kYXRlJykuZGVmYXVsdE5vdygpLCAvLyBEYXRlIG9mIGxhc3QgdmFsdWUgdXBkYXRlXG4gIHRvdGFsUmV0dXJuOiBkZWNpbWFsKFwidG90YWxfcmV0dXJuXCIsIHsgcHJlY2lzaW9uOiA1LCBzY2FsZTogMiB9KSwgLy8gVG90YWwgcmV0dXJuIHBlcmNlbnRhZ2Vcbn0pO1xuXG4vLyBEZWZpbmUgcmVsYXRpb25zXG5leHBvcnQgY29uc3QgdXNlcnNSZWxhdGlvbnMgPSByZWxhdGlvbnModXNlcnMsICh7IG1hbnkgfSkgPT4gKHtcbiAgaW52ZXN0bWVudHM6IG1hbnkodXNlckludmVzdG1lbnRzKSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IGludmVzdG1lbnRzUmVsYXRpb25zID0gcmVsYXRpb25zKGludmVzdG1lbnRzLCAoeyBtYW55IH0pID0+ICh7XG4gIHVzZXJJbnZlc3RtZW50czogbWFueSh1c2VySW52ZXN0bWVudHMpLFxufSkpO1xuXG5leHBvcnQgY29uc3QgdXNlckludmVzdG1lbnRzUmVsYXRpb25zID0gcmVsYXRpb25zKHVzZXJJbnZlc3RtZW50cywgKHsgb25lIH0pID0+ICh7XG4gIHVzZXI6IG9uZSh1c2Vycywge1xuICAgIGZpZWxkczogW3VzZXJJbnZlc3RtZW50cy51c2VySWRdLFxuICAgIHJlZmVyZW5jZXM6IFt1c2Vycy5pZF0sXG4gIH0pLFxuICBpbnZlc3RtZW50OiBvbmUoaW52ZXN0bWVudHMsIHtcbiAgICBmaWVsZHM6IFt1c2VySW52ZXN0bWVudHMuaW52ZXN0bWVudElkXSxcbiAgICByZWZlcmVuY2VzOiBbaW52ZXN0bWVudHMuaWRdLFxuICB9KSxcbn0pKTsiXSwibmFtZXMiOlsicmVsYXRpb25zIiwicGdUYWJsZSIsInNlcmlhbCIsInRleHQiLCJ2YXJjaGFyIiwidGltZXN0YW1wIiwiaW50ZWdlciIsImRlY2ltYWwiLCJ1c2VycyIsImlkIiwicHJpbWFyeUtleSIsImVtYWlsIiwibGVuZ3RoIiwibm90TnVsbCIsInVuaXF1ZSIsIm5hbWUiLCJwYXNzd29yZCIsImNyZWF0ZWRBdCIsImRlZmF1bHROb3ciLCJpbnZlc3RtZW50cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImFtb3VudCIsInByZWNpc2lvbiIsInNjYWxlIiwiZGVmYXVsdCIsImltYWdlVXJsIiwiZXhwZWN0ZWRSZXR1cm4iLCJyaXNrTGV2ZWwiLCJ1c2VySW52ZXN0bWVudHMiLCJ1c2VySWQiLCJyZWZlcmVuY2VzIiwiaW52ZXN0bWVudElkIiwiaW52ZXN0ZWRBdCIsImN1cnJlbnRWYWx1ZSIsImxhc3RWYWx1YXRpb25EYXRlIiwidG90YWxSZXR1cm4iLCJ1c2Vyc1JlbGF0aW9ucyIsIm1hbnkiLCJpbnZlc3RtZW50c1JlbGF0aW9ucyIsInVzZXJJbnZlc3RtZW50c1JlbGF0aW9ucyIsIm9uZSIsInVzZXIiLCJmaWVsZHMiLCJpbnZlc3RtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/db/schema.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/drizzle-orm","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@auth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fyanbinglu%2FDocuments%2FStartupSystem%2Falpha-impact-navigator%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyanbinglu%2FDocuments%2FStartupSystem%2Falpha-impact-navigator&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();