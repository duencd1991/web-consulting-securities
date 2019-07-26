import { all } from "redux-saga/effects";
import reportSaga from "./reports/saga";
import tradingInstructionSaga from "./tradingInstruction/saga";
import homeSaga from "./home/saga";
import newsSaga from "./news/saga";
import trainingServiceSaga from "./trainingService/saga";
import accountTradingSaga from "./accountTrading/saga";
import expertSaga from "./expert/saga";
import chatConsultingSaga from "./consulting/saga";
import userSaga from "./user/saga";
import roboSaga from "./roboTrading/saga";

export default function* rootSaga() {
  yield all([
    reportSaga(),
    tradingInstructionSaga(),
    homeSaga(),
    newsSaga(),
    trainingServiceSaga(),
    accountTradingSaga(),
    expertSaga(),
    chatConsultingSaga(),
    userSaga(),
    roboSaga()
  ]);
}
