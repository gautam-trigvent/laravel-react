import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import langSliceReducer from './redux-slices/langSlice';

const store = configureStore({
    reducer: {
        appLanguage: langSliceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;