import assert from 'assert';
import {
  fulfilledType,
  rejectedType,
  pendingType,
  initType
} from '../src/actionNames';

describe('fulfilledType method', () => {
  it('should return fulfilledType', () => {
    const actionName = 'action';
    const expected = 'action_FULFILLED';
    assert.strictEqual(fulfilledType(actionName), expected);
  });
});
