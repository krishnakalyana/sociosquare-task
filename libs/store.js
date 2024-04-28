import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from './api/users';
import userSlice from './slices/userSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            userSlice: userSlice.reducer,
            [usersApi.reducerPath]: usersApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(usersApi.middleware),
    });
};

export const store = makeStore();
setupListeners(store.dispatch);

export default store;
