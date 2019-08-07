import React from "react";
import Slider from "react-slick";

export default class JobHeader extends React.Component {

    render() {
        const { id, cities } = this.props;
        let title,
            nearYou = false,
            forYou = false,
            byCities = false;
        if (id === "JobsNearYou") {
            title = "Jobs Near You";
            nearYou = true;
        } else if (id === "JobsForYou") {
            title = "Jobs For You";
            forYou = true;
        } else if (id === "JobsByCities") {
            title = "Jobs By Cities";
            byCities = true;
        }

        let settings = {
            infinite: false,
            arrows: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3
        };

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-8 col-xs-8 custom">
                        <img src={"images/" + id + ".svg"} alt={title} className="pull-left" />
                        <div className="text">
                            <h6 className="cust-margin">{title}</h6>
                            {nearYou ? "In and around " : forYou ? "Based on your " : ""}
                            <span>{nearYou ? "sector 30 gurgaon." : forYou ? "PREFERANCE" : ""}</span>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-4" >
                        <a href="javascript:void(0)" className="view">{byCities ? "View All" : "view"}</a>
                    </div>
                    {forYou ?
                        <div className="col-sm-12  jobType ">
                            <a href="javascript:void(0)">Back Office</a>
                            <a href="javascript:void(0)">Front Office</a>
                            <a href="javascript:void(0)">Sales</a>
                            <a href="javascript:void(0)">Office</a>
                        </div>
                        : <></>
                    }
                </div>
                {nearYou && <div className="spacer10"></div>}
                {byCities ?
                    <Slider {...settings}>
                        {(cities && cities.length > 0) ?
                            cities.map(function (info, index) {
                                return (
                                    <div key={index} className="col-sm-4 col-xs-4 cursor">
                                        <img src={info.url} alt={title} className="cities-job" />
                                        <div className="margin15"><span>{info.name} <br></br>{info.noOfJobs}</span></div>
                                    </div>
                                )
                            })
                            :
                            <></>
                        }

                    </Slider>
                    :
                    <></>
                }
            </React.Fragment>
        );
    }
}