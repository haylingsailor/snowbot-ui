const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_JOBS':
      return {
        ...state,
        loadingJobs: true,
        errors: null,
      }
    case 'JOBS_RECEIVED':
      return {
        ...state,
        loadingJobs: false,
        jobs: action.json,
      }
    default:
      return state
  }
}

export default reducer
