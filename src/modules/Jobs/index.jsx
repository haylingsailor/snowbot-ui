import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { GET_JOBS, actionCreator } from "../../actions";
import logger from "../../helpers/logger";
const JobLine = ({ job }) => <div className="JobLine">Job: {job.title}</div>;

const Jobs = () => {
  const dispatch = useDispatch();

  // Load jobs on first mount
  useEffect(() => {
    dispatch(actionCreator(GET_JOBS));
  }, [dispatch]);

  const jobs = useSelector(state => state.jobs);
  if (!jobs) {
    logger.info("NO JOBS");
    return (
      <div>
        <p>No Jobs found</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Jobs</h1>
      <div>
        <div>JOBS</div>
        {jobs.map(item => (
          <JobLine key={item.id} job={item} />
        ))}
      </div>
    </div>
  );
};

JobLine.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  })
};

JobLine.defaultProps = {
  job: undefined
};

export default Jobs;
