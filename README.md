# React redux app

Esta mini aplicación tiene como proposito, ser una guía básica para poder iniciar un proyecto usando react + redux + react-router.

No está pensada para ser "SEO-frendly", para ese tipo de cosas, puedes utilizar [Next.js](https://learnnextjs.com/).

# Base

Esta aplicación está basada en los componentes y configuraciones proporcionadas por [create-react-app](https://github.com/facebook/create-react-app).

# Redux

Para usar [Redux](https://es.redux.js.org/) con react se deben instalar los siguintes paquetes.

```sh
$ yarn add redux redux-thunk redux-logger redux-devtools-extension react-redux
```

- [redux](https://github.com/reactjs/redux): Libreria princial de redux para javascript.
- [redux-thunk](https://github.com/gaearon/redux-thunk):
Redux Thunk middleware te permite retornar funciones como *action creators* en vez de *actions* normales.
- [redux-logger](https://github.com/evgenyrodionov/redux-logger): Permite loggear en la consola los cambios de estados de una forma más amigable.
- [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension): Utilidad para chrome que permite visualizar nuestro store de forma elegante.
- [react-redux](https://github.com/reactjs/react-redux): Libreria que permite juntar react con redux.

### Usando redux en react

Una vez instaladas las librerias, debemos incluir nuestra aplicación (componente principal, por lo general *App*) dentro del componente proporcionado por *react-redux*.

```jsx
import { Provider } from 'react-redux';
...

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

...
```

Esto nos permite acceder a nuestro *store* (Aún no difinido), por medio de los props de nuestros componentes internos (recordar esto, que más adelante lo veremos en detalle, no es tan simple, pero a la vez si xD).

### Store

El *store* es como una gran cesta donde, a medida que se vaya definiendo, se irán guardando los datos de los diferentes reducers.
```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// Archivo que junta todos los reducers que definamos (ver siguiente sección).
import rootReducers from './rootReducers';

...
// helpers
// - thunk: nos permite retornar una función en los action creators.
// - logger: loggea los cambios en el state cuando un *action* es llamado.
const middleware = [thunk, logger];
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)));

...
// main app render
```

### RootReducer

```js
import { combineReducers } from 'redux';

// Reducer que contendrá algunos números.
// Por lo general, estos se guardan en una carpeta llamada *reducers* o *modules*
import numbers from './reducers/numbers';

export default combineReducers({
  numbers: numbersReducer,
});
```

#### Actions

Las acciones son las encargadas de enviar información al store, estas acciones son las únicas que pueden acceder al store y modificarlo. La forma de enviar estas acciones al store es mediante el metodo **store.dispatch()**.

```js
export const SET_NUMBERS = '@@numbers/SET_NUMBERS';
export const REQUEST_NUMBERS = '@@numbers/REQUEST_NUMBERS';
...
```
##### Action creator

Son funciones encargadas de crear las acciones definidas anteriormente, estas funciones retornan un objeto plano que contiene una llave *type* la cual se define como la acción a ser ejecutada por nuestro reducer, y un *payload* (opcional), el cual contienen la información a ser ingresada o actualizada en nuestro store.

```js
export const requestNumbers = () => ({
  type: REQUEST_NUMBERS,
});

export const setNumbers = (numbers) => ({
  type: SET_NUMBERS,
  payload: { numbers },
});
```
##### async action creator

Por medio de la ayuda de *react-thunk*, podremos actualizar nuestro reducer cuando una llamada asyncrona ocurra.
*thunk*, nos permite retornar una función en un action creator, esta función como primer parametro recive el metodo **dispatch** el cual permite ejecutar una acción, la cual efectuará un cambio en el estado de nuestro reducer.

```js
export const setNumberTimeout = numbers => dispatch => {
  setTimeout(() => dispatch(setNumbers(numbers)), 3 * 1000);
};
```
#### Reducer

El reducer es quién da forma al estado de esta parte de nuestra aplicación, y como mencionamos antes, es aquí donde termina la ejecución de las acciones, ya sea enviando o no información a nuestro estado.

Finalmente nuestro reducer queda de la forma:

```js
const initialState = {
  numbers: [],
  isFetching: false,
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    // REQUEST_NUMBERS es ejecutada por el método requestNumbers() y
    // simplemente actualiza el dato de 'isFetching'
    case REQUEST_NUMBERS:
      return {
        ...state,
        isFetching: true,
      };
    // SET_NUMBERS es ejecutada por el método setNumbers() y además de
    // actualizar el valor de 'isFetching' agrega nuevos datos a 'numbers'.
    case SET_NUMBERS:
      return {
        ...state,
        numbers: action.payload.numbers,
        isFetching: false,
      };
    default:
      return state;
  }
};

```

### Conectando componentes con nuestro store.

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setNumbers } from '../reducers/users';

class HomePage extends React.Component {
  componentWillMount() {
    // Pasamos un arreglo de numeros a nuestro *async action creator*.
    // Este aac es pasado a traves de mapDispatchToProps
    this.props.setNumbers([0, 1, 2, 3, 4]);
  }

  // numbers es un props que es extraido desde el store y pasado a traves de
  // los props del componente por medio del metodo *connect*
  render() {
    return (
      <div>
        {this.props.numbers.map((n, idx) => (
          <p key={`n-${idx}`}>
            {n.}
          </p>
        ))}
      </div>
    );
  }
}

// PropTypes es una forma "semi estricta" de definir el tipo de dato que será
// pasada a traves de los props del componente.
HomePage.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  setNumbers: PropTypes.func.isRequired,
};
/*
usando *connect* nos permite "conectar" nuestro store, con el componente
el primer parentisis de connect, recibe algunos argumentos (mostraré los que
siempre uso):

- mapStateToProps: Si este argumento es definido y usado en el método connect
las propiedades seleccionadas del store serán pasadas al componente definido
en el segundo par de parentesis. Este metodo debe retornar un objeto, con
las propiedades que serán heredadas por medio de los props del respectivo
componente.

- mapDispatchToProps: Este parametro representa los *action creators* que
podrán ser usados dentro del componente pasada en el segundo par de parentesis.
En general, estos métodos salen del reducer a ser usado dentro del componente.
*/
const mapStateToProps = state => ({
  numbers: state.numbers.element,
});

const mapDispatchToProps = {
  setNumbers,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
```

# React-router

React reuter nos permite extender nuestra aplicación para tener más de una ruta dentro de nuestro sistema, pero para esto no usamos directamenre react-router, sino que instalamos lo siguiente.

```sh
$ yarn add react-router-dom
```

Esta librería nos permite crear rutas, utilizando compenentes y otras utilidades que nos permiten hacer las redirecciones internas a otras rutas sin perder el scope de nuestra aplicación.

***to be continue...**