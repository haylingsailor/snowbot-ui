import { put, takeLatest, all } from 'redux-saga/effects'
import axios from 'axios'
// import api from 'api'

/**
 *   V1 snowbot endpoint: (send POST to https://ebfi7rc59g.execute-api.eu-west-1.amazonaws.com/v0/bot/ , with body containing
 *   {
 *     "action": "list"
 *   }
 */

const url =
  'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc'

function* fetchJobs() {
  const json = yield axios.get(url).then(response => response.data)
  yield put({ type: 'JOBS_RECEIVED', json: json.articles })
}
function* actionWatcher() {
  yield takeLatest('GET_JOBS', fetchJobs)
}
export default function* rootSaga() {
  yield all([actionWatcher()])
}
