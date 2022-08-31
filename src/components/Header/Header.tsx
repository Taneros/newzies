import React from 'react'
import Navigation from './Navigation/Navigation'
import Authorization from './Authorization/Authorization'
import s from './Header.module.css'
import Weather from './Wheater/Weather'

const Header = (): JSX.Element => {
  return (
    <div className={s.header}>
      <div className={s.header__container}>
        <div>Logo</div>
        <Weather />
        <Authorization />
      </div>
      <Navigation />
    </div>
  )
}

export default Header
