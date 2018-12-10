import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

// const errorsReducer = combineReducer({
//     session: sessionErrorsReducer
// })
export default combineReducers({
    session:sessionErrorsReducer
  });

// export default errorsReducer;