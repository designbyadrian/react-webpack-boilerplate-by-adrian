# Structure

React Webpack Boilerplate by Adrian is divided into three major parts:


```
📁 app
    📁 components
    📁 containers
    📁 stores
```

**Components** Encapsulated React components that are driven solely by props and don't talk to MobX. Same as “dumb components”. They should stay the same regardless of your router, data fetching library, etc.

**Containers**

React components that are aware of MobX, Router, etc. They are more coupled to the app. Same as “smart components” and can be compared to "views".

**Stores**

Providers of data and state to containers. To aid testing, stores themselves don't do the actual AJAX requests, but manage everything else. See [testing](testing.md).

Separating stores from the containers is inspired by [gothinkster/react-mobx-realworld-example-app](https://github.com/gothinkster/react-mobx-realworld-example-app/tree/master/src) and is generally a good practise.

## State management

This boilerplate uses MobX for data store and state management. It's an excellent framework that understands that spreading actions, reducers, and async reducers might not actually make your life easier. *cough* ***Redux*** *cough*. How to use MobX is best described through the example app.

Also see the following 🥚-cellent articles:

* [Mobx Best Practices for building large scale maintainable projects](https://mobx.js.org/best/)
* [Mobx React — Best Practices](https://medium.com/dailyjs/mobx-react-best-practices-17e01cec4140)
