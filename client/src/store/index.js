//importar createStore, applyMiddleware, compose de redux
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'; 
import rootReducer from '../reducers'





//lo siguiente es una config de Redux
const composeEnhacer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore( rootReducer, composeEnhacer(applyMiddleware(thunk)));
console.log(rootReducer.action)



export default store;