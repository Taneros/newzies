import React from 'react'
import s from './Search.module.css'

const Search = (): JSX.Element => {
  return (
    <div className={s.search}>
      <input className={s.search__input} type="text" placeholder="Поиск" />
    </div>
  )
}

export default Search
