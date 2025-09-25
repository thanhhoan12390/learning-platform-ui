import { all } from 'redux-saga/effects';

import searchBarSaga from '~/layouts/components/SearchBar/searchBarSaga';

export default function* rootSaga() {
    yield all([searchBarSaga()]);
}
