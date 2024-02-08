import { usersApi } from "./UsersQuery";

export const extendedUsersApi = usersApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: "/users/create",
        method: "POST",
        body: user,
      }),
      transformResponse: (response) => {
        console.log(response);
        return response;
      },
      //   transformErrorResponse: (error) => {
      //     console.log(error.data.message);
      //     return error;
      //   },
      // im using the error in the SignUp page so no need to use it here
      invalidatesTags: ["Users"],
    }),
    login: builder.mutation({
      query: (user) => ({
        url: `/users/login`,
        method: "POST",
        body: user,
      }),
      transformResponse: (response) => {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response));
        localStorage.setItem("token", response.token);

        return response;
      },
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useLoginMutation,
} = extendedUsersApi;
