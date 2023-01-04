import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'  
 
  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'b20638f21cmshc1b1150577aef73p1b9d3bjsn2bbe2d56a698')

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' })
    })
  });

  export const {
    useGetTopChartsQuery,
  } = shazamCoreApi;