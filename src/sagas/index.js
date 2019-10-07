import { put, takeLatest, all } from "redux-saga/effects";
import logger from "../helpers/logger";
import axios from "axios";
import {
  startedActionConst,
  successActionConst,
  actionCreator
} from "../actions";
import { GET_JOBS } from "../actions";
// import api from 'api'

/**
 *   V1 snowbot endpoint: (send POST to https://ebfi7rc59g.execute-api.eu-west-1.amazonaws.com/v0/bot/ , with body containing
 *   {
 *     "action": "list"
 *   }
 */

const url =
  "https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc";

function* fetchJobs() {
  logger.info("fetchJobs called");
  const json = yield axios.get(url).then(response => response.data);
  yield put(actionCreator(successActionConst(GET_JOBS), json.articles));
}
function* actionWatcher() {
  yield put(actionCreator(startedActionConst(GET_JOBS)));
  yield takeLatest("GET_JOBS", fetchJobs);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
