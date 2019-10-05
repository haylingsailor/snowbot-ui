import React, { useEffect, useDispatch } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const JobLine = ({ job }) => <div className="JobLine">Job: {job.title}</div>

const Jobs = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'GET_JOBS' })
  }, [])

  const jobs = useSelector(state => state.jobs)
  return (
    <div>
      <h1>Jobs</h1>
      jobs ? (
      <div>
        <div>JOBS</div>
        {jobs.map(item => (
          <JobLine key={item.id} job={item} />
        ))}
      </div>
      ) : (
      <div>
        <p>No Jobs found</p>
      </div>
    </div>
  )
}

JobLine.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }),
}

JobLine.defaultProps = {
  job: undefined,
}

export default Jobs
