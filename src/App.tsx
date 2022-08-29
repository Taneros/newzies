import React from 'react'
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice'
import Header from './components/Header/Header'

function App(): JSX.Element {
  const { data = [], isFetching } = useFetchBreedsQuery()
  console.log(data)

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
