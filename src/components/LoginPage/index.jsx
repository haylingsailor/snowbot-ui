import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { GET_TOKEN, actionCreator } from '../../actions'

export class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {
      location: { search },
      getAuthToken,
      history,
    } = this.props

    const queryParams = qs.parse(search)

    if (queryParams && queryParams.code) {
      const state = getStateToken()
      getAuthToken({ code: queryParams.code, state, history })
    }
  }

  render() {
    // TODO - login spinner - use https://luna.sainsburys.co.uk/library/components/progress-indicator
    return <Redirect to="/home" />
  }
}

const mapDispatchToProps = dispatch => ({
  getAuthToken: payload => dispatch(actionCreator(GET_TOKEN, payload)),
})

export const LoginPageConnected = withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(LoginPage),
)

LoginPage.propTypes = {
  getAuthToken: PropTypes.func.isRequired,
  location: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
}
