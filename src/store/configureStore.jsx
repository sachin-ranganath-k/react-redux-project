import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reducer from "../reducer/reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    reducer: reducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

// const configureStore = () =>
//   createStore(
//     combineReducers({
//       userss: reducer,  //The userss has been passed to useSelector()
//       cities:cityReducer
//     }),
//     composeEnhancers(applyMiddleware(thunk))
//   );
export default store;