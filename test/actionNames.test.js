import assert from 'assert';
import {
  fulfilledType,
  rejectedType,
  pendingType,
  initType
} from '../src/actionNames';

describe('fulfilledType method', () => {
  it('should return fulfilledType with string actionName', () => {
    const actionName = 'action';
    const expected = 'action_FULFILLED';
    assert.strictEqual(fulfilledType(actionName), expected);
  });

  it('should return _FULFILLED with empty actionName', () => {
    const actionName = '';
    const expected = '_FULFILLED';
    assert.strictEqual(fulfilledType(actionName), expected);
  });

  it('should return null_FULFILLED with null actionName', () => {
    const expected = 'null_FULFILLED';
    assert.strictEqual(fulfilledType(null), expected);
  });
});

describe('rejectedType method', () => {
  it('should return rejectedType with string actionName', () => {
    const actionName = 'action';
    const expected = 'action_REJECTED';
    assert.strictEqual(rejectedType(actionName), expected);
  });

  it('should return _REJECTED with empty actionName', () => {
    const actionName = '';
    const expected = '_REJECTED';
    assert.strictEqual(rejectedType(actionName), expected);
  });

  it('should return null_REJECTED with null actionName', () => {
    const expected = 'null_REJECTED';
    assert.strictEqual(rejectedType(null), expected);
  });
});

describe('initType method', () => {
  it('should return initType with string actionName', () => {
    const actionName = 'action';
    const expected = 'action_INIT';
    assert.strictEqual(initType(actionName), expected);
  });

  it('should return _INIT with empty actionName', () => {
    const actionName = '';
    const expected = '_INIT';
    assert.strictEqual(initType(actionName), expected);
  });

  it('should return null_INIT with null actionName', () => {
    const expected = 'null_INIT';
    assert.strictEqual(initType(null), expected);
  });
});

describe('pendingType method', () => {
  it('should return pendingType with string actionName', () => {
    const actionName = 'action';
    const expected = 'action_PENDING';
    assert.strictEqual(pendingType(actionName), expected);
  });

  it('should return _PENDING with empty actionName', () => {
    const actionName = '';
    const expected = '_PENDING';
    assert.strictEqual(pendingType(actionName), expected);
  });

  it('should return null_PENDING with null actionName', () => {
    const expected = 'null_PENDING';
    assert.strictEqual(pendingType(null), expected);
  });
});
