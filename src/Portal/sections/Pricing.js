import { BsCheck2All } from "react-icons/bs"
import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import subs from "../../assets/data/payments.json"
import STORE from "../../store";

const Pricing = (props) => {

  const [tab, setTab] = useState(1)
  const navigate = useNavigate()
  const NavigateToCashPayments = () => {
    navigate("/cash")
  }

  console.dir(subs)
  const LoadPaymentWindow = (sub) => {
    STORE.SessionCache.SetObject("sub", sub)
    let user = STORE.SessionCache.Get("x")
    if (user) {
      navigate("/payment")
    } else {
      navigate("/register")
    }
  }

  const RenderSub = (sub) => {

    return (
      <div className="sub sub-1" onClick={() => LoadPaymentWindow(sub)}>
        <div className="title">{sub.name}</div>
        <span className="launch">{sub.discount}% Launch Discount!</span>
        <div className="seperator-text"></div>

        <div className="price price-current teal">
          <span className="value">{sub.price}</span>
          <span className="month">USD per month</span>
        </div>

        <div className="seperator-text"></div>
        {sub.period === 1 &&
          <div className="text orange commitment">{sub.commitment} month commitment</div>
        }
        {sub.period === 2 &&
          <div className="text orange commitment">{sub.fullPrice} USD billed every {sub.commitment} months</div>
        }

        <div className="text">30 Day money-back guarantee</div>

      </div>
    )
  }

  let subList = []
  subs.map(sub => {
    if (sub.period === tab) {
      subList.push(RenderSub(sub))
    } else if (sub.type === 1) {
      subList.push(RenderSub(sub))
    }
  })


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
        {subList}


        <div className={`pricing-desc grid-row-${props.row} inherit-grid ${props.class} bg-${props.bg}`} >

          <div className="title font-section-title">Subscription Benefits</div>
          <div className="subtitle font-section-subtitle">All subscriptions have access to our full list of features and the following support platforms</div>

          <div className="benefits">
            <div className="item">Email</div>
            <div className="item">Telegram</div>
            <div className="item">Slack</div>
            <div className="item">Discord</div>
            <div className="item">Element / Matrix</div>
            <div className="item">Reddit</div>
          </div>
        </div>
      </div>
    </>


  );
}

export default Pricing;