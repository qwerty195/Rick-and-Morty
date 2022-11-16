import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getLocationById: builder.query<CharacterLocation[], number | number[]>({
      query: (id) => `/location/${id}`,
      transformResponse(
        data: CharacterLocation | ResponseDetails<CharacterLocation[]>
      ) {
        return "results" in data ? data.results : [data];
      },
    }),
  }),
});
export const { useGetLocationByIdQuery } = locationApi;
