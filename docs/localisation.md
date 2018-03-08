# Localisation

React Webpack Boilerplate by Adrian uses the excellent library [i18next](https://www.i18next.com) together with [react-i18nnext](https://github.com/i18next/react-i18next) to give you localisation options.

## Simple usage

Type language variables in:

```
📁 locales
    📁 {language code}
        📄 {name space}.json
```

Then in your component:

```javascript
import { translate } from "react-i18next";

const MyComponent = props => {
  const { t } = props;

  return (<span>{t('title')}</span>)
}

export default translate()(MyComponent);

```

Please see the [i18next documentation](https://www.i18next.com) for more advanced options like the `<Trans>` element.
