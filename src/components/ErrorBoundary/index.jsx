import React, { Component } from 'react'
import PropTypes from 'prop-types'

import logger from '../../helpers/logger'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })

    if (error) logger.error(error)
    if (info) logger.info(info)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return <h1>Something went wrong.</h1>
    }

    return children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.shape().isRequired,
}
