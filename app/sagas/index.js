import { all, fork } from 'redux-saga/effects';

import searchSaga from 'sagas/searchSaga';
import usersSaga from 'sagas/usersSaga';
import repositoriesSaga from 'sagas/repositoriesSaga';

export default function* rootSaga () {
  yield all([
    fork(searchSaga),
    fork(usersSaga),
    fork(repositoriesSaga),
  ]);
};
