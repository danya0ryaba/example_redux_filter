import { legacy_createStore } from "redux";
import { rootReducer } from "./root-reducer";


export const store = legacy_createStore(rootReducer)

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch