import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
const DOGS_API_KEY: string = `${import.meta.env.VITE_DOG_API_KEY}`

console.log(DOGS_API_KEY)

interface News {
  id: number
  answer: string
  question: string
  value: number
  airdate: string
  created_at: string
  updated_at: string
  category_id: number
  game_id: number
  invalid_count: null
  category: {
    id: number
    title: string
    created_at: string
    updated_at: string
    clues_count: number
  }
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://jservice.io',
    prepareHeaders(headers) {
      return headers
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<News[], number | void>({
        query() {
          return `api/random?count=1`
        },
      }),
    }
  },
})

export const { useFetchBreedsQuery } = apiSlice
