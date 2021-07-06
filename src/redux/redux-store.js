import {applyMiddleware, combineReducers, createStore} from "redux";
import workZoneReducer from "./work-zone-reducer";
import thunkMiddleware from "redux-thunk"; // Импортируется для работы с санками


// Создаем объект стейт редьюсеров
let reducers = combineReducers({
    workZone: workZoneReducer
});

// Создаем хранилище на основе редьюсоров
let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // applyMiddleware - промежуточный слой. Импортируется для работы с санками

window.store = store;

export default store;