import { createStore, combineReducers} from 'redux';
import CountReducer from './reducer/countReducer.js'
 
const rootReducer = combineReducers({
  count: CountReducer,
});
 console.log("inside store file");
export const store = createStore(rootReducer);