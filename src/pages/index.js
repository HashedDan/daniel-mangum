import React from 'react'
import Link from 'gatsby-link'

import { UserContext } from '../context/user-context'

const IndexPage = () => (
  <div>
    <UserContext.Consumer>
      {value => <h1>Welcome to the website of {value} !</h1>}
    </UserContext.Consumer>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
