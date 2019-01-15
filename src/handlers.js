import defaultState from './defaultState';
import {
  fulfilledType,
  rejectedType,
  pendingType,
  initType
} from './actionNames';

/**
 * Get stateful handlers for an action
 * @param {string} actionName name of the action
 * @return {object} handler for each action's state
 */
export const getHandlers = actionName => ({
  [fulfilledType(actionName)]: (state, action) => {
    return {
      ...defaultState,
      isFulfilled: true,
      data: action.data
    };
  },
  [pendingType(actionName)]: (state) => {
    return {
      ...state,
      isFulfilled: false,
      isRejected: false,
      isPending: true
    };
  },
  [rejectedType(actionName)]: (state, action) => {
    return {
      ...state,
      isRejected: true,
      isPending: false,
      isFulfilled: false,
      error: action.data
    };
  },
  [initType(actionName)]: (state) => {
    return { ...defaultState };
  }
});
