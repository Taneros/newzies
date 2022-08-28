import React from 'react';
import Navigation from './Navigation/Navigation'
import Authorization from './Authorization/Authorization'

const Header = (): JSX.Element => {
  return (
    <div>
      <div>Logo</div>
      <Navigation/>
      <Authorization/>
    </div>
  )
}

export default Header;