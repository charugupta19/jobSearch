import React from "react";
import Slider from "react-slick";

export default class JobDetails extends React.Component {
    render() {
        const { job, id } = this.props;

        let settings = {
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <React.Fragment>
                <Slider {...settings}>
                    {(job && job.length > 0) ?
                        job.map(function (job, index) {
                            if (id === job.searchType) {
                                return (
                                    <div key={index}>
                                        <div className="panel panel-default margin">
                                            <div className="panel-body">
                                                <div className="col-sm-8 col-xs-8"><h6>{job.title}</h6>
                                                    <p className="subline">{job.company}</p>
                                                    <p><img src="images/location.png" alt="Location" className="panel-icon" />{job.location}</p>
                                                    <p><img src="images/money.png" alt="Money" className="panel-icon" /> Rs 8000 - 22500 per month</p>
                                                </div>
                                                <div className="col-sm-4 col-xs-4" ><img src={job.company_logo} alt="Logo" className="panel-img" />
                                                    <p className="subtext txtSize13">{"Posted " + job.posted}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })

                        : ""
                    }
                </Slider>
            </React.Fragment>
        );
    }
}