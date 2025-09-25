import { takeEvery, fork, put, call } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit';

import searchApi from '~/api/searchApi';
import type { ListPokemon } from '~/models';
import { getSearchList, getSearchListSuccess, getSearchListFailed } from './searchBarSlice';

function* handleGetSearchList(action: PayloadAction<string>) {
    try {
        if (action.payload !== '') {
            const { results }: ListPokemon = yield call(searchApi.getAll, { limit: 1000, offset: 0 }); // dùng destructuring để lấy mỗi field results

            const filteredList = results.filter((item) => item.name.startsWith(action.payload.toLowerCase()));

            yield put(getSearchListSuccess(filteredList.map((item) => item.name)));
        } else {
            yield put(getSearchListSuccess([]));
        }
    } catch (error) {
        yield put(getSearchListFailed('Có lỗi xảy ra'));
    }
}

function* watchSearchBarFlow() {
    yield takeEvery(getSearchList.toString(), handleGetSearchList);
}

export default function* searchBarSaga() {
    yield fork(watchSearchBarFlow);
}
