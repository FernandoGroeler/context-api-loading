import React, { Fragment } from 'react'

import { LoadingConsumer } from '../context/loading'
import Departments from './Departments'
import Users from './Users'
import Loading from './Loading'

const Home = () => (
  <div>
    <div>Home</div>
    <LoadingConsumer>
    {
      ({ showLoading, hideLoading, loading, message }) => (
        <Fragment>
          <Users {...{ showLoading, hideLoading }} />
          <Departments {...{ showLoading, hideLoading }} />
          <Loading {...{ loading, message }} />
        </Fragment>
      )
    }
    </LoadingConsumer>
  </div>
)

export default Home