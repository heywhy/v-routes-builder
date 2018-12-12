import { Dictionary, Router } from "."
import { RouteConfig } from "vue-router";

export class Route {
  protected _route: RouteConfig = {
    path: ''
  }

  constructor(protected url: string, protected _router: Router) {
    this._route = {
      path: url
    }
  }

  get() {
    return this._route
  }

  meta(meta: Dictionary = {}) {
    return this.merge({meta})
  }

  component(component: any) {
    return this.merge({component})
  }

  alias(alias: string) {
    return this.merge({alias})
  }

  components(components: Dictionary) {
    return this.merge({components})
  }

  redirect(redirect: string|Dictionary) {
    return this.merge({redirect})
  }

  name(name: string) {
    return this.merge({name})
  }

  hook(hooks: Dictionary = {}) {
    return this.merge(hooks)
  }

  options(options: Dictionary = {}) {
    return this.merge(options)
  }

  children(callback: () => void) {
    const router = this.getRouter()
    router.startChildrenCapture()
    callback()
    const children = router.getRoutes()
    router.stopChildrenCapture()
    return this.merge({children})
  }

  getRouter(): Router {
    return this._router
  }

  protected merge(props = {}): Route {
    this._route = {...this._route, ...props}
    return this
  }
}
