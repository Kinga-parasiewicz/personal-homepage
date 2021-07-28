import { all } from "redux-saga/effects";
import { homepageSaga } from "./../features/hompageSaga";

export default function* saga() {
    yield all([
       homepageSaga(),
    ]);
}