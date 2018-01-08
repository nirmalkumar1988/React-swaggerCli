import {combineReducers} from 'redux';
import DatesReducer from './reducer-dates';
import SlotsReducer from './reducer-slots';


const allReducers = combineReducers({
    dates : DatesReducer,
    slots: SlotsReducer
});

export default allReducers
