"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require("./route");
var Router = /** @class */ (function () {
    function Router() {
        this._routes = [];
        this._contexts = [];
    }
    Router.prototype.path = function (path) {
        var modifier = new route_1.Route(path, this);
        this.currentRouter.routes.push(modifier);
        return modifier;
    };
    Object.defineProperty(Router.prototype, "routes", {
        get: function () {
            return this._routes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "currentRouter", {
        get: function () {
            var length = this._contexts.length;
            return this._contexts[length - 1] || this;
        },
        enumerable: true,
        configurable: true
    });
    Router.prototype.getRoutes = function () {
        return this.currentRouter.routes
            .map(function (route) { return route.get(); });
    };
    Router.prototype.startChildrenCapture = function () {
        this._contexts.push(new Router());
    };
    Router.prototype.stopChildrenCapture = function () {
        this._contexts.pop();
    };
    return Router;
}());
exports.Router = Router;
exports.default = new Router();
