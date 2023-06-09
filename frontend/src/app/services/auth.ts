import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "../store"
import { User } from "./user"

export interface UserResponse {
    user: User
    token: string
}

export interface LoginRequest {
    email: string
    password: string
}

const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:3001/api/"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).auth.token
            if (token) {
                headers.set("x-auth-token", `${token}`)
            }
            return headers
        },
    }),
    tagTypes: ["Auth"],
    endpoints: builder => ({
        login: builder.mutation<UserResponse, LoginRequest>({
            query: credentials => ({
                url: "login",
                method: "POST",
                body: credentials,
            }),
        }),
        protected: builder.mutation<{ message: string }, void>({
            query: () => "protected",
        }),
    }),
})

export const { useLoginMutation, useProtectedMutation } = authApi
