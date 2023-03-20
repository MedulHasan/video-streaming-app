import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'videosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api/v1/',
  }),
  endpoints: builder => ({
    postVideo: builder.mutation({
      query: data => ({
        url: 'upload',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(args, {queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {usePostVideoMutation} = apiSlice;
