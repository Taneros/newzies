import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
const DOGS_API_KEY: string = `${import.meta.env.VITE_DOG_API_KEY}`

console.log(DOGS_API_KEY)

interface Breed {
  id: string
  name: string
  image: {
    url: string
  }
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1/',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY)
      return headers
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit: number = 10) {
          return `/breeds?limit=${limit}`
        },
      }),
    }
  },
})

export const { useFetchBreedsQuery } = apiSlice
