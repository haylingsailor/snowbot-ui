/* eslint-disable no-console */

export default {
  error: (...params) => {
    console.error('[ERROR]', ...params)
  },
  debug: (...params) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[DEBUG]', ...params)
    }
  },
  info: (...params) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[INFO]', ...params)
    }
  },
}
