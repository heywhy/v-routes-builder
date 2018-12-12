# Vue Routes Builder

A very simple library to help build routes for vuejs.

```bash
yarn add v-routes-builder // or
npm install v-routes-builder
```

```js
import router from 'v-routes-builder'

router.path('/login')
    .meta({})
    .hook({
      beforeEnter() {

      }
    })
    .name('app:login')
    .component(() => {})
    .children(() => {
      // add children routes
    })

// You can get the list of routes definition.
router.getRoutes() // [...]
```
