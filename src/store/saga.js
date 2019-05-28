import { all } from 'redux-saga/effects';
import reportSaga from './reports/saga';
import tradingInstructionSaga from './tradingInstruction/saga';
import homeSaga from './home/saga';

export default function* rootSaga() {
  yield all([reportSaga(), tradingInstructionSaga(), homeSaga()]);
}