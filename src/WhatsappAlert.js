import React from "react";

export default function WhatsappAlert() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="whatsapp-panel panel-default marginTp">
                    <div className="panel-body">
                        <div className="col-sm-7 col-xs-7">
                            <p className="whatsapp">Get alerts on whatsapp</p>
                            <p className="subline"> For similar jobs</p>
                            <div className="spacer10"></div>
                            <a href="javascript:void(0)" className="enable">Enable now</a>
                            <div className="spacer10"></div>
                        </div>
                        <div className="col-sm-5 col-xs-5">
                            <img src="images/whatsapp.png" alt="Whatsapp logo" className="img-responsive" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}