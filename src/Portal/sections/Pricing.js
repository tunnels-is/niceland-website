import { BsCheck2All } from "react-icons/bs"
import React from "react";

const Pricing = (props) => {

  return (
    <div className={`pricing grid-row-${props.row} inherit-grid ${props.class} bg-${props.bg}`} >


      <div className="sub sub-1" onClick={() => LoadPaymentWindow(1)}>
        <div className="title">Nice</div>
        <div className="price teal">
          <span className="price-title">10$</span>
          <span className="month">/month</span>
        </div>
        <div className="seperator-text"></div>
        <div className="text">30 Day money-back guarantee</div>
        {/* <div className="seperator"></div> */}
        <div className="seperator-text"></div>
        {/* <div className="text features teal">Includes all features</div> */}
        {/* <div className="seperator-text"></div> */}
        <div className="text teal title-support">24/7 Support</div>
        <div className="text">live chat</div>
        <div className="text">Telegram</div>
        <div className="text">Slack</div>
        <div className="text">Discord</div>
        <div className="text">Element/Matrix</div>
        <div className="text">Email</div>

      </div>

      <div className="sub sub-2" onClick={() => LoadPaymentWindow(2)}>
        <div className="discount">save 20%</div>
        <div className="title">Nicer</div>
        <div className="price teal">
          <span className="price-title">8$</span>
          <span className="month">/month</span>
        </div>

        {/* <div className="seperator"></div> */}
        <div className="text orange commitment">6 month commitment</div>

        <div className="seperator-text"></div>
        <div className="text">30 Day money-back guarantee</div>
        <div className="seperator-text"></div>
        {/* <div className="text features teal">
                    Includes all features
                </div> */}
        {/* <div className="seperator-text"></div> */}
        <div className="text teal title-support">24/7 Support</div>

        <div className="text">live chat</div>
        <div className="text">Telegram</div>
        <div className="text">Slack</div>
        <div className="text">Discord</div>
        <div className="text">Element/Matrix</div>
        <div className="text">Email</div>
      </div>

      <div className="sub sub-3" onClick={() => LoadPaymentWindow(3)}>
        <div className="discount">save 40%</div>
        <div className="title">Nicest</div>
        <div className="price teal">
          <span className="price-title">6$</span>
          <span className="month">/month</span>
        </div>
        <div className="text orange commitment">12 month commitment</div>
        <div className="seperator-text"></div>
        <div className="text">30 Day money-back guarantee</div>
        {/* <div className="seperator"></div> */}
        <div className="seperator-text"></div>
        {/* <div className="text features teal">Includes all features</div> */}
        {/* <div className="seperator-text"></div> */}
        <div className="text teal title-support">24/7 Support</div>
        <div className="text">live chat</div>
        <div className="text">Telegram</div>
        <div className="text">Slack</div>
        <div className="text">Discord</div>
        <div className="text">Element/Matrix</div>
        <div className="text">Email</div>

      </div>
      {/* <div className="done" onClick={() => LoadPaymentWindow()}>Done</div> */}
    </div>

  );
}

export default Pricing;