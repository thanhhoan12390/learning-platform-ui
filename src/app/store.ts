import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import searchBarReducer from '~/layouts/components/SearchBar/searchBarSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        searchBar: searchBarReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
