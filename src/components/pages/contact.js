import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPicture from "../../../static/assets/images/auth/nikoandmanu.jpg";

export default function() {
  return (
      <div className="content-page-wrapper">
          <div 
          className="left-column" 
          style={{
            background: "url(" + contactPicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          />

          <div className="right-column">
            <div className="contact-bullet-point">

              <div className="bullet-point-group">
                <div className="icon">
                    <FontAwesomeIcon icon="envelope" />
                  <div className="text">vfaletui@yahoo.com</div>
                </div>
              </div>

              <div className="bullet-point-group">
                <div className="icon">
                  <FontAwesomeIcon icon="phone" />
                </div>
                <div className="text">
                  555-555-5555
                </div>
              </div>

              <div className="bullet-point-group">
                  <div className="icon">
                  <FontAwesomeIcon icon="map-marked-alt" />
                    <div className="text">Kearns, UT</div>
                  </div>
                
              </div>
            </div>
          </div>
      </div>
  )
}