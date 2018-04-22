
/**
 * @file API module
 * @author Enrique Tamames Sobrino
 * @module api/
 * @version 0.0.1
 */

import axios from 'axios'
import { STATUS_CODE, RESPONSE_MESSAGES } from '../constants'

export const request = (url) => {
  return axios.get(url)
  .then(response => {
    return response.data
  })
  .catch(error => {
    switch (error.response.status) {
      case STATUS_CODE.INTERNAL_ERROR:
        return {message: RESPONSE_MESSAGES.INTERNAL_ERROR, code: STATUS_CODE.INTERNAL_ERROR}
      case STATUS_CODE.NOT_FOUND:
        return {message: RESPONSE_MESSAGES.NOT_FOUND, code: STATUS_CODE.NOT_FOUND}
      case STATUS_CODE.NOT_AUTHORIZED:
        return {message: RESPONSE_MESSAGES.NOT_AUTHORIZED, code: STATUS_CODE.NOT_AUTHORIZED}
      default:
        return error
    }
  })
}
