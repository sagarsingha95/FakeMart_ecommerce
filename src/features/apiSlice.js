import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({baseUrl:'https://fakestoreapi.com'}),
    endpoints:(builder) =>({
        getUsers:builder.query({
            query:() =>'users'
        }),
        addUsers:builder.mutation({
            query:(newUser) =>({
                url:'users',
                method:'POST',
                body:newUser
            })
        })
    })
})

export const { useGetUsersQuery, useAddUsersMutation } = apiSlice