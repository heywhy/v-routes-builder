import { Route } from "./route";
import { RouteConfig } from 'vue-router';
export interface Dictionary {
    [key: string]: any;
}
export declare class Router {
    private _routes;
    private _contexts;
    path(path: string): Route;
    readonly routes: Route[];
    readonly currentRouter: any;
    getRoutes(): RouteConfig[];
    startChildrenCapture(): void;
    stopChildrenCapture(): void;
}
declare const _default: Router;
export default _default;
