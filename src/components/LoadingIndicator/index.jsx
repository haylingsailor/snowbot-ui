import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  ProgressIndicator,
  ProgressSpinner,
  FilledButton,
} from '@jsluna/react'
import classnames from 'classnames'

const reboot = () => {
  window.location.reload(true)
}

const LoadingIndicator = ({ pastDelay, error, timedOut }) => {
  const isLoading = !(!!error || timedOut)

  return (
    <Fragment>
      <ProgressIndicator page loading={pastDelay && isLoading}>
        <ProgressSpinner color="light" />
        Loading...
      </ProgressIndicator>
      {!isLoading && (
        <Modal
          className={classnames(isLoading && 'c-loading-indicator')}
          open
          hideCloseButton
        >
          <div className="ln-u-display-flex ln-u-justify-content-center">
            <div className="ln-u-flex-1">
              <p>
                An update is available please refresh the page in order to view
                the latest content.
              </p>
              <div className="ln-u-text-align-right">
                <FilledButton onClick={reboot}>Update</FilledButton>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  )
}

LoadingIndicator.propTypes = {
  pastDelay: PropTypes.bool,
  error: PropTypes.shape({ message: PropTypes.string }),
  timedOut: PropTypes.bool,
}

LoadingIndicator.defaultProps = {
  pastDelay: false,
  error: undefined,
  timedOut: false,
}

export default LoadingIndicator
