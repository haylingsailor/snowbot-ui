import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Header, NotificationList } from '@jsluna/site-layout'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import routes from '../../routes'
import Notifications from '../Notifications'

import {
  GET_AUTH_USER,
  LOGIN,
  HIDE_NOTIFICATION,
  actionCreator,
} from '../../actions'

const App = ({ hideNotification, notifications }) => (
  <div className="main">
    <Header
      logo="Product Matching"
      className="demo-u-fixed demo-u-fixed--top-left"
      container={{
        size: null,
        soft: true,
        fluid: false,
      }}
      menuItems={
        routes.length > 0 &&
        routes
          .filter(r => r.title)
          .map(route => (
            <NavLink to={route.path} activeClassName="is-active">
              {route.title}
            </NavLink>
          ))
      }
      topBar={{
        meta: (
          <span>
            <div className="version">
              Version: {process.env.REACT_APP_VERSION || 'N/A'}
            </div>
          </span>
        ),
      }}
    />
    <NotificationList open className="notification-list">
      {notifications.map(notification => (
        <Notifications
          key={notification.id}
          {...notification}
          onHide={hideNotification}
        />
      ))}
    </NotificationList>
    <p>version</p>
  </div>
)

export const mapStateToProps = state => ({
  user: state.auth.data,
  authError: state.auth.error,
  notifications: state.notifications,
  version: state.version,
})

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(actionCreator(LOGIN, payload)),
  getAuthUser: payload => dispatch(actionCreator(GET_AUTH_USER, payload)),
  hideNotification: payload =>
    dispatch(actionCreator(HIDE_NOTIFICATION, payload)),
})

export const AppConnected = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
)

App.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.object),
  hideNotification: PropTypes.func.isRequired,
}

App.defaultProps = {
  notifications: [],
}
