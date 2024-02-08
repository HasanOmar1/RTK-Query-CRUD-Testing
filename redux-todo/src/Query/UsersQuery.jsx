import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9999/api/v1" }),
  endpoints: (builder) => ({}), // endpoints in ExtenderUserQuery.jsx
});
