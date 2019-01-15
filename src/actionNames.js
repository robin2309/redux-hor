// @ts-check

/**
 * Get fulfilled type
 * @param {string} actionName the dispatched action's name
 * @returns {string} the fulfilled action's name
 */
export const fulfilledType = actionName => `${actionName}_FULFILLED`;

/**
 * Get rejected type
 * @param {string} actionName the dispatched action's name
 * @returns {string} the rejected action's name
 */
export const rejectedType = actionName => `${actionName}_REJECTED`;

/**
 * Get pending type
 * @param {string} actionName the dispatched action's name
 * @returns {string} the pending action's name
 */
export const pendingType = actionName => `${actionName}_PENDING`;

/**
 * Get init type
 * @param {string} actionName the dispatched action's name
 * @returns {string} the init action's name
 */
export const initType = actionName => `${actionName}_INIT`;
