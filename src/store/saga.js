import { all } from 'redux-saga/effects';
import reportSaga from './reports/saga';

export default function* rootSaga() {
  yield all([reportSaga()]);
}