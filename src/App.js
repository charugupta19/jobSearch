import React from "react";
import { connect } from 'react-redux';
import Header from "./Header";
import JobHeader from "./JobHeader";
import JobByCategory from "./JobByCategory";
import WhatsappAlert from "./WhatsappAlert";
import JobDetails from "./JobDetails";
import { getJobDetails } from "./actions/action";

class App extends React.Component {

  componentDidMount() {
    fetch("./mockData.json").then(function (response) {
      return response.json();
    }).then((result) => {
      this.props.getJobDetails(result);
    }).catch((err) => {
      console.log("error");
    });
  }

  render() {
    const { jobDetails } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <Header />
          <div className="jobs-near-you">
            <JobHeader id="JobsNearYou" cities={jobDetails.Cities} />
            <JobDetails id="JobsNearYou" job={jobDetails.Jobs} />
            <JobByCategory Categories={jobDetails.Categories} />
            <div className="jobsforyou">
              <JobHeader id="JobsForYou" cities={jobDetails.Cities} />
            </div>
            <JobDetails id="JobsForYou" job={jobDetails.Jobs} />
            <WhatsappAlert />
            <JobHeader id="JobsByCities" cities={jobDetails.Cities} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    jobDetails: state.jobDetails
  }
};

const mapDispatchToProps = function (dispatch) {
  return {
    getJobDetails: (data) => dispatch(getJobDetails(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)