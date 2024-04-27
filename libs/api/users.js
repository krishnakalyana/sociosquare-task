import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (newUser) => ({
                url: 'users',
                method: 'POST',
                body: newUser,
            }),
        }),
        fetchUsers: builder.query({
            query: () => 'users',
        }),
    }),
});

export const { useCreateUserMutation, useFetchUsersQuery } = usersApi;