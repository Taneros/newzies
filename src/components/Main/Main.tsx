import React from 'react'
import Aside from './Aside/Aside'
import Content from './Content/Content'
import s from './Main.module.css'

const Main = (): JSX.Element => {
  return (
    <div className={s.main}>
      <Content />
      <Aside />
    </div>
  )
}

export default Main
