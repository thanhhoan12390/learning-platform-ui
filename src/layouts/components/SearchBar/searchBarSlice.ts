import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '~/app/store';

export interface SearchBarState {
    status: 'idle' | 'loading' | 'failed';
    searchList: Array<string>;
}

const initialState: SearchBarState = {
    status: 'idle',
    searchList: [],
};

const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        getSearchList: (state, action: PayloadAction<string>) => {
            state.status = 'loading';
        },
        getSearchListSuccess: (state, action: PayloadAction<string[]>) => {
            state.status = 'idle';
            state.searchList = action.payload;
        },
        getSearchListFailed: (state, action: PayloadAction<string>) => {
            state.status = 'idle';
            console.log('Có lỗi xảy ra: : ', action.payload);
        },
    },
});

export default searchBarSlice.reducer;

export const { getSearchList, getSearchListSuccess, getSearchListFailed } = searchBarSlice.actions;

export const searchBarSelector = (state: RootState) => state.searchBar.searchList;
