# Styling

React Webpack Boilerplate by Adrian uses CSS Modules together with
SASS, Autoprefixer, babel-plugin-react-css-modules, and [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin). This way,
you get the power of SASS, and a CSS divided into chunk for speedy style loading
and the ability to segment your styles into components. Here's how to style your app:

## Components

```
📁 app
    📁 components
        📁 MyComponent
            📄 index.js
            📄 mycomponent.sass
```

> ***Note:*** *you are free to use SASS or SCSS at your leisure. If you prefer something else, please see [configuration](configuration.md).*

In index.js, import your stylesheet with: `import './index.sass';`

Then reference your CSS class with: `<Component styleName="myClass" />`

Your component will now have completely unique styles, unaffected by other components.

## Global

If you're using a CSS framework like Bootstrap, you might want to have a global reference.
Then use the `className` attribute like so: `<Component styleName="col-12 col-md-6" />`

## Framework

// todo

Bootstrap 4

How to uninstall
