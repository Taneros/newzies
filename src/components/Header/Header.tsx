import React from 'react'
import Navigation from './Navigation/Navigation'
import Authorization from './Authorization/Authorization'
import s from './Header.module.css'

const Header = (): JSX.Element => {
  return (
    <div className={s.header}>
      <div>Logo</div>
      <Navigation />
      <Authorization />
    </div>
  )
}

export default Header
