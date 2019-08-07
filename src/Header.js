import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="profile">
                    <div className="row">
                        <div className="col-sm-8 col-xs-8">
                            <div className="intro">
                                <h1>Rishabh Singh</h1>
                                <p>12th Pass | Fresher</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-4">
                            <img src="images/prfl.png" alt="Profile" className="img-responsive imgshape" />
                        </div>
                    </div>
                    <div id="custom-search-input">
                        <div className="input-group col-md-12">
                            <input type="text" className="  search-query form-control" placeholder="Search Job" />
                            <span className="input-group-btn">
                                <button className="btn btn-danger" type="button">
                                    <span className=" glyphicon glyphicon-search"></span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}