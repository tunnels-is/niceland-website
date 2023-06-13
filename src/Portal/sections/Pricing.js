import { BsCheck2All } from "react-icons/bs"
import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";

const Pricing = (props) => {

  const [tab, setTab] = useState(1)
  const navigate = useNavigate()
  const NavigateToCashPayments = () => {
    navigate("/cash")
  }

  return (
    <>
      <div className={`pricing-tabs grid-row-${props.row} inherit-grid ${props.class} bg-${props.bg}`} >
        <div className="announcement">Limited Time Launch Discount!</div>
      </div>

      <div className={`pricing-tabs grid-row-${props.row} inherit-grid ${props.class} bg-${props.bg}`} >
        <div className={`tab monthly ${tab === 1 ? "active" : ""}`} onClick={() => setTab(1)}>Monthly Billing</div>
        <div className={`tab onetime ${tab === 2 ? "active" : ""}`} onClick={() => setTab(2)}>Upfront Billing</div>
        <div className={`tab onetime`} onClick={() => NavigateToCashPayments()}>Cash Payment</div>
      </div>

      <div className={`pricing grid-row-${props.row} inherit-grid ${props.class} bg-${props.bg}`} >

        <div className="sub sub-1" onClick={() => LoadPaymentWindow(1)}>
          <div className="title">Nice</div>
          <span className="launch">Official Launch Discount!</span>
          <div className="price teal">
            <span className="price-title">10$</span>
            <span className="price-new">8$</span>
            <span className="month">/month</span>
          </div>
          <div className="text orange commitment">1 month commitment</div>
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
          {/* <div className="discount">Save 20%</div> */}
          <div className="title">Nicer</div>
          <span className="launch">Official Launch Discount!</span>
          {tab === 1 &&
            <>
              <div className="price teal">
                <span className="price-title">8.43$</span>
                <span className="price-new">6.83$</span>
                <span className="month">/month</span>
              </div>
              <div className="text orange commitment">6 month commitment</div>
            </>
          }
          {tab === 2 &&
            <>
              <div className="price teal">
                <span className="price-title">8$</span>
                <span className="price-new">6.4$</span>
                <span className="month">/month</span>
              </div>
              <div className="text orange commitment">$38.4 billed every 6 months</div>
            </>
          }

          {/* <div className="seperator"></div> */}

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
          {/* <div className="discount">Save 40%</div> */}
          <div className="title">Nicest</div>
          <span className="launch">Official Launch Discount!</span>
          {tab === 1 &&
            <>
              <div className="price teal">
                <span className="price-title">6.42$</span>
                <span className="price-new">5.22$</span>
                <span className="month">/month</span>
              </div>
              <div className="text orange commitment">12 month commitment</div>
            </>
          }
          {tab === 2 &&
            <>
              <div className="price teal">
                <span className="price-title">6$</span>
                <span className="price-new">4.8$</span>
                <span className="month">/month</span>
              </div>
              <div className="text orange commitment">$57.6 billed every 12 months</div>
            </>
          }
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
    </>


  );
}

export default Pricing;