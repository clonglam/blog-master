import { Post } from "./posts"

export type UserRole = "USER" | "ADMIN"

export interface User {
    id: number
    email: string
    name: string
    role: UserRole
    profile: string
    createdAt: string
    updatedAt: string
    Post: Post[]
}

// type PostsResponse = Post[]

// const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:3001/api/"

// export const postApi = createApi({
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     tagTypes: ["Post"],
//     endpoints: build => ({
//         getPosts: build.query<PostsResponse, void>({
//             query: () => "posts",
//             providesTags: result =>
//                 result
//                     ? [
//                           ...result.map(({ id }) => ({
//                               type: "Post" as const,
//                               id,
//                           })),
//                           { type: "Post", id: "LIST" },
//                       ]
//                     : [{ type: "Post", id: "LIST" }],
//         }),
//         addPost: build.mutation<Post, Partial<Post>>({
//             query: body => ({
//                 url: `posts`,
//                 method: "POST",
//                 body,
//             }),
//             invalidatesTags: [{ type: "Post", id: "LIST" }],
//         }),
//         getPost: build.query<Post, string>({
//             query: id => `posts/${id}`,
//             providesTags: (result, error, id) => [{ type: "Post", id }],
//         }),
//         updatePost: build.mutation<void, Pick<Post, "id"> & Partial<Post>>({
//             query: ({ id, ...patch }) => ({
//                 url: `posts/${id}`,
//                 method: "PUT",
//                 body: patch,
//             }),
//             async onQueryStarted(
//                 { id, ...patch },
//                 { dispatch, queryFulfilled }
//             ) {
//                 const patchResult = dispatch(
//                     postApi.util.updateQueryData("getPost", id, draft => {
//                         Object.assign(draft, patch)
//                     })
//                 )
//                 try {
//                     await queryFulfilled
//                 } catch {
//                     patchResult.undo()
//                 }
//             },
//             invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
//         }),
//         deletePost: build.mutation<{ success: boolean; id: number }, number>({
//             query(id) {
//                 return {
//                     url: `posts/${id}`,
//                     method: "DELETE",
//                 }
//             },
//             invalidatesTags: (result, error, id) => [{ type: "Post", id }],
//         }),
//     }),
// })

// export const {
//     useGetPostQuery,
//     useGetPostsQuery,
//     useAddPostMutation,
//     useUpdatePostMutation,
//     useDeletePostMutation,
// } = postApi
