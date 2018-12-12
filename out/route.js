"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Route = /** @class */ (function () {
    function Route(url, _router) {
        this.url = url;
        this._router = _router;
        this._route = {
            path: ''
        };
        this._route = {
            path: url
        };
    }
    Route.prototype.get = function () {
        return this._route;
    };
    Route.prototype.meta = function (meta) {
        if (meta === void 0) { meta = {}; }
        return this.merge({ meta: meta });
    };
    Route.prototype.component = function (component) {
        return this.merge({ component: component });
    };
    Route.prototype.alias = function (alias) {
        return this.merge({ alias: alias });
    };
    Route.prototype.components = function (components) {
        return this.merge({ components: components });
    };
    Route.prototype.redirect = function (redirect) {
        return this.merge({ redirect: redirect });
    };
    Route.prototype.name = function (name) {
        return this.merge({ name: name });
    };
    Route.prototype.hook = function (hooks) {
        if (hooks === void 0) { hooks = {}; }
        return this.merge(hooks);
    };
    Route.prototype.options = function (options) {
        if (options === void 0) { options = {}; }
        return this.merge(options);
    };
    Route.prototype.children = function (callback) {
        var router = this.getRouter();
        router.startChildrenCapture();
        callback();
        var children = router.getRoutes();
        router.stopChildrenCapture();
        return this.merge({ children: children });
    };
    Route.prototype.getRouter = function () {
        return this._router;
    };
    Route.prototype.merge = function (props) {
        if (props === void 0) { props = {}; }
        this._route = __assign({}, this._route, props);
        return this;
    };
    return Route;
}());
exports.Route = Route;
