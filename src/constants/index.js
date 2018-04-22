
/**
 * @file Constants
 * @author Enrique Tamames Sobrino
 * @module constants/
 * @version 0.0.1
 */

// Path to static JSON with stock values
export const STOCKS_JSON_PATH = 'stocks.json'

// Interval between calls to API
export const TIMEOUT = 10000

// Simulated delay
export const SIMULATED_DELAY = 2000

// Status code for API
export const STATUS_CODE = {
  INTERNAL_ERROR: 500,
  NOT_FOUND: 404,
  NOT_AUTHORIZED: 401,
  SUCCESS: 200
}

// Map status code response messages
export const RESPONSE_MESSAGES = {
  INTERNAL_ERROR: 'Ops, Something wrong happened',
  NOT_FOUND: 'Resource not found',
  NOT_AUTHORIZED: 'Sorry, the user is not authorized'
}

// Notification level
export const NOTIFICATION_LEVEL = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
}
