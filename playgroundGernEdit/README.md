## Stuff to not forget
ABOUT MODAL
- weird thing with the relative path to the image. 
Either update to production URL or work out another way to relative
(currently it is Tim's testing localhost)
- move the open modal state from (well GEap now) dropdown list comp to the ddItem comp?
- or each dropdown has its own state for managing onCLick of list items (portable)

DONE
- optimise images (the germanet logo is big)

# modules, libraries, loaders
```$xslt
yarn add webpack
yarn add babel-cli
yarn add react
yarn add react-dom
yarn add babel-core
yarn add babel-loader
yarn add webpack-dev-server
yarn add babel-plugin-transform-class-properties
yarn add react modal
yarn add style-loader
yarn add css-loader
yarn add normalize.css
```

Docs for those:
- [webpack]()
- [babel]()
- [react]()
- [react-dom]()
- [SCSS](http://sass-lang.com/guide)
- [normalize.css](https://necolas.github.io/normalize.css/)

[reacr router](https://reacttraining.com/react-router/web/guides/philosophy)
install:
yarn add react-router
but if just native or webapps
web-app: 
```
yarn add react-router-dom
```

native: yarn add react-router-native

redirecting baed on authentication
404 pages
URL parameters

save config in jsx in a const



style-loader



normalize
to use, just import it to app.js, above the import for the styles.scss
import 'normalize.css/normalize.css';