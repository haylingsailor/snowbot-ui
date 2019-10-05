import React from 'react'
import { Link } from 'react-router-dom'
import { Header as LunaHeader } from '@jsluna/react'
import { Sainsburys } from '@jsluna/images'

// import routes from 'routes'

const Header = () => (
  <LunaHeader
    logo={
      <Link to="/">
        <Sainsburys className="c-logo" height="30" width="114" />
      </Link>
    }
  />
)

Header.displayName = 'Header'

export default Header
