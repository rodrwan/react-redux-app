# React redux app

Esta mini aplicación tiene como proposito, ser una guía básica para poder iniciar un proyecto usando react + redux + react-router.

No está pensada para ser "SEO-frendly", para ese tipo de cosas, puedes utilizar [Next.js](https://learnnextjs.com/).

# Base

Esta aplicación está basada en los componentes y configuraciones proporcionadas por [create-react-app](https://github.com/facebook/create-react-app).

# Redux

Para usar [Redux](https://es.redux.js.org/) con react se deben instalar los siguintes paquetes.

```sh
$yarn add redux redux-thunk redux-logger redux-devtools-extension react-redux
```

- [redux](https://github.com/reactjs/redux): Libreria princial de redux para javascript.
- [redux-thunk](https://github.com/gaearon/redux-thunk):
Redux Thunk middleware te permite retornar funciones como *action creators* en vez de *actions* normales.
- [redux-logger](https://github.com/evgenyrodionov/redux-logger): Permite loggear en la consola los cambios de estados de una forma más amigable.
- [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension): Utilidad para chrome que permite visualizar nuestro store de forma elegante.
- [react-redux](https://github.com/reactjs/react-redux): Libreria que permite juntar react con redux.

