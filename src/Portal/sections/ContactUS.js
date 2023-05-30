import React from "react";

const ContactUS = (props) => {

  return (
    <div className={`contact-us grid-row-${props.row} inherit-grid bg-${props.bg}`}>
      <div className="title font-section-title">
        Contact us for a custom offer
      </div>
      <div className="subtitle font-section-subtitle">
        <a href="mailto:support@nicelandvpn.is">

          support@nicelandvpn.is
        </a>
      </div>
    </div>
  );
}

export default ContactUS;