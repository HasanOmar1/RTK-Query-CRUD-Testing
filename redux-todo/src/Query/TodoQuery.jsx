import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:9999/api/v1",
//   prepareHeaders: (headers) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

export const todoQuery = createApi({
  reducerPath: "todo",
  tagTypes: ["Todo"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9999/api/v1",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
