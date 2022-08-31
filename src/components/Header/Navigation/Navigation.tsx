import React from 'react'
import s from './Navigation.module.css'
import NavLink from './NavLink/NavLink'
import Search from './Search/Search'

const Navigation = (): JSX.Element => {
  return (
    <div className={s.navigation}>
      <div className={s.navigation__items}>
        <NavLink />
        <NavLink />
        <NavLink />
        <NavLink />
        <NavLink />
      </div>
      <div className={s.navigation__search}>
        <Search />
      </div>
    </div>
  )
}

export default Navigation
