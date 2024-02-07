import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Currency } from 'app/shared/types'

const baseUrl = 'https://api.coinbase.com/v2'

export const apiSlice = createApi({
  reducerPath: 'currenciesApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['currencies'],
  endpoints: builder => ({
    getCurrencies: builder.query<{data: Currency[]}, void>({
      query: () => '/currencies',
      providesTags: ['currencies']
    }),
    
  })
})

export const { useGetCurrenciesQuery } = apiSlice