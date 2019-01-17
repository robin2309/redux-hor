import {
  fulfilledType,
  rejectedType,
  pendingType,
  initType
} from './actionNames';

export const fulfilledActionCreator = (actionName, data) => ({
  type: fulfilledType(actionName),
  data
});

export const initActionCreator = (actionName) => ({
  type: initType(actionName)
});

export const pendingActionCreator = (actionName) => ({
  type: pendingType(actionName)
});

export const rejectedActionCreator = (actionName, data) => ({
  type: rejectedType(actionName),
  data
});
