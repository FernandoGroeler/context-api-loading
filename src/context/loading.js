import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'

const loadingContext = createContext({
  loading: false,
  message: null,
  showLoading: message => {},
  hideLoading: () => {} 
})

export default class LoadingProvider extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  state = {
    loading: false,
    message: null    
  }

  showLoading = message => this.setState({
    loading: true,
    message
  })

  hideLoading = () => this.setState({ loading: false })

  render() {
    const { showLoading, hideLoading } = this
    const { children } = this.props

    const value = {
      ...this.state,
      showLoading,
      hideLoading
    }

    return (
      <loadingContext.Provider value={ value }>
        { children }
      </loadingContext.Provider>
    )
  }
}

export const LoadingConsumer = loadingContext.Consumer