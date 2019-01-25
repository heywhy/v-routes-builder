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

Example:

```js
const router = require('./out').default

router.path('/login')
  .name('app:login')
  .meta({})
  .component(() => {})
  .hook({
    beforeEnter(to, from, next) {}
  })
  .components({
    default() {}
  })
  .redirect({name: 'app:login'})

router.path('/dashboard')
  .component(() => {})
  .children(() => {
    router.path('love')
      .children(() => {
        router.path('lopi')
      })
  })

router.path('/signup')


console.log(router.getRoutes())
```

Getting the routes will give us the below array structure;

```js
[
  {
    path: "/login",
    name: "app:login",
    meta: {},
    component: Function,
    components: {
      default: Function
    },
    beforeEnter: Function
    redirect: {
      name: "app:login"
    }
  },
  {
    path: "/dashboard",
    component: Function,
    children: [
      {
        path: "love",
        children: [
          {
            path: "lopi"
          }
        ]
      }
    ]
  },
  {
    path: "/signup"
  }
]
```

## Api Documentation

Since the methods map to vue router path definition properties it's easy to make use of but if you want to dig around you can check the declaration files attached.
