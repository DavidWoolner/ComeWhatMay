import {
    RECEIVE_ACTION_STEP_ERRORS,
    RECEIVE_PLAN,
  } from '../actions/disaster_plan_actions';
import {
    RECEIVE_USER_SIGN_IN
} from '../actions/session_actions'
  
  const _nullErrors = [];
  
  const ActionStepErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_ACTION_STEP_ERRORS:
        return action.errors;
      case RECEIVE_PLAN:
        return _nullErrors;
      case RECEIVE_USER_SIGN_IN:
        return _nullErrors;
      default:
        return state;
    }
  };
  
  export default ActionStepErrorsReducer;