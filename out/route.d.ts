import { Dictionary, Router } from ".";
export declare class Route {
    protected url: string;
    protected _router: Router;
    _route: {};
    constructor(url: string, _router: Router);
    get(): {};
    meta(meta?: Dictionary): Route;
    component(component: any): Route;
    alias(alias: string): Route;
    components(components: Dictionary): Route;
    redirect(redirect: string | Dictionary): Route;
    name(name: string): Route;
    hook(hooks?: Dictionary): Route;
    options(options?: Dictionary): Route;
    children(callback: () => void): Route;
    getRouter(): Router;
    protected merge(props?: {}): Route;
}
