import { Route } from "./route";

export interface Dictionary {
  [key: string]: any;
}

export class Router {
  private _routes: Route[] = [];

  private _contexts: any[] = []

  path(path: string): Route {
    const modifier = new Route(path, this);
    this.currentRouter.routes.push(modifier);
    return modifier;
  }

  get routes() {
    return this._routes
  }

  get currentRouter() {
    const {length} = this._contexts
    return this._contexts[length - 1] || this
  }

  getRoutes() {
    return this.currentRouter.routes
      .map((route: any) => route.get())
  }

  startChildrenCapture() {
    this._contexts.push(new Router())
  }

  stopChildrenCapture() {
    this._contexts.pop()
  }
}

export default new Router();
