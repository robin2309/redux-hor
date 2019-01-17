import assert from 'assert';
import {
  fulfilledActionCreator,
  initActionCreator,
  pendingActionCreator,
  rejectedActionCreator
} from '../src/statefulActionCreators';
import {
  fulfilledType,
  rejectedType,
  pendingType,
  initType
} from '../src/actionNames';

describe('statefulActionCreators', () => {
  const actionName = 'myaction';

  describe('fulfilledActionCreator', () => {
    it('should return expected payload when fulfilledActionCreator', () => {
      const data = { a: 1 };
      const expected = {
        type: fulfilledType(actionName),
        data
      };
      assert.deepStrictEqual(
        fulfilledActionCreator(actionName, data),
        expected
      );
    });
  });

  describe('rejectedActionCreator', () => {
    it('should return expected payload when rejectedActionCreator', () => {
      const data = { error: 1 };
      const expected = {
        type: rejectedType(actionName),
        data
      };
      assert.deepStrictEqual(
        rejectedActionCreator(actionName, data),
        expected
      );
    });
  });

  describe('pendingActionCreator', () => {
    it('should return expected payload when pendingActionCreator', () => {
      const expected = {
        type: pendingType(actionName)
      };
      assert.deepStrictEqual(
        pendingActionCreator(actionName),
        expected
      );
    });
  });

  describe('initActionCreator', () => {
    it('should return expected payload when initActionCreator', () => {
      const expected = {
        type: initType(actionName)
      };
      assert.deepStrictEqual(
        initActionCreator(actionName),
        expected
      );
    });
  });
});
