import React from 'react'
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice'

function App(): JSX.Element {
  const { data = [], isFetching } = useFetchBreedsQuery()
  console.log(data)

  return (
    <div>

    </div>
  )
}

export default App
