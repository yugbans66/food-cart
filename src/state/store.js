import { legacy_createStore ,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import {persistStore , persistReducer}from 'redux-persist';
import storage from "redux-persist/lib/storage"


const persistconfig = {
    key: 'persist-key',
    storage
}
const persistedReducer = persistReducer(persistconfig , reducers)
const store = legacy_createStore(persistedReducer , applyMiddleware(thunk)) 
const persistor = persistStore(store)
export default store
export {persistor}