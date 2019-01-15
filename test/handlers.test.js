import assert from 'assert';
import { getHandlers } from '../src/handlers';
import defaultState from '../src/defaultState';
import {
  fulfilledType,
  rejectedType,
  pendingType,
  initType
} from '../src/actionNames';

let handlers = null;
const actionName = 'ACTION_NAME';

describe('getHandlers method', () => {
  before(() => {
    handlers = getHandlers(actionName);
  });

  describe('fulfilled state handler', () => {
    it('should return correct state', () => {
      const state = { ...defaultState };
      const data = { a: 1 };
      const action = { data };
      const expectedState = {
        ...state,
        isFulfilled: true,
        data: action.data
      };
      assert.deepStrictEqual(
        handlers[fulfilledType(actionName)](state, action),
        expectedState
      );
    });
  });

  describe('rejected state handler', () => {
    it('should return correct state', () => {
      const data = { a: 1 };
      const state = {
        ...defaultState,
        data
      };
      const action = { data: 'error' };
      const expectedState = {
        ...state,
        isRejected: true,
        isPending: false,
        isFulfilled: false,
        error: action.data
      };
      assert.deepStrictEqual(
        handlers[rejectedType(actionName)](state, action),
        expectedState
      );
    });
  });

  describe('pending state handler', () => {
    it('should return correct state', () => {
      const data = { a: 1 };
      const state = {
        ...defaultState,
        data
      };
      const expectedState = {
        ...state,
        isFulfilled: false,
        isRejected: false,
        isPending: true
      };
      assert.deepStrictEqual(
        handlers[pendingType(actionName)](state),
        expectedState
      );
    });
  });

  describe('init state handler', () => {
    it('should return correct state', () => {
      const state = { ...defaultState };
      const expectedState = {
        ...state
      };
      assert.deepStrictEqual(
        handlers[initType(actionName)](state),
        expectedState
      );
    });
  });
});
