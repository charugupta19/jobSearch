import React from "react";
import Slider from "react-slick";

export default function JobByCategory(props) {
    const { Categories } = props;

    let settings = {
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <React.Fragment>
            <div className="jobbyCate">
                <div className="row">
                    <h4>Jobs By Categories</h4>
                    <Slider {...settings}>
                        {(Categories && Categories.length > 0) ?
                            Categories.map(function (info, index) {
                                return (
                                    <div key={index}>
                                        <div className="jobs_type">
                                            <h6>{info.name}</h6>
                                            <p>{info.noOfJobs}</p>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <></>
                        }

                    </Slider>
                </div>
            </div>
        </React.Fragment>
    );
}