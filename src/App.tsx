import React from 'react'
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import s from './App.module.css'

function App(): JSX.Element {
  const { data = [], isFetching } = useFetchBreedsQuery()
  console.log(data)

  return (
    <div className={s.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
