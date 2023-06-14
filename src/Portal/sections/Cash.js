import { BsCheck2All } from "react-icons/bs"
import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";

const Cash = (props) => {

  const [tab, setTab] = useState(1)
  const navigate = useNavigate()
  const NavigateToCashPayments = () => {
    navigate("/cash")
  }

  return (
    <>
      <div className={`cash grid-row-${props.row} inherit-grid ${props.class} bg-${props.bg}`} >


        <div className="sub sub-2" onClick={() => LoadPaymentWindow(2)}>
          {/* <div className="discount">Save 20%</div> */}
          <div className="title">Euros</div>
          <>
            <div className="price teal">
              <span className="price-new">€40</span>
              {/* <span className="month">/month</span> */}
            </div>
            <div className="text orange commitment">6 months</div>
          </>

          <div className="seperator-text"></div>
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
          <div className="title">USD</div>
          <>
            <div className="price teal">
              <span className="price-new">$40</span>
              {/* <span className="month">/month</span> */}
            </div>
            <div className="text orange commitment">6 months</div>
          </>

          <div className="seperator-text"></div>
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

      <div className={`cash-info grid-row-${props.row} inherit-grid ${props.class} bg-${props.bg}`} >
        <div className="announcement">Guide To Paying With Cash</div>

        <div className="section">
          <h1>Find Your Cash Payment Code</h1>
          <p>The cash payment code can be found inside the Niceland VPN app under <b>"Setting"</b>.
            <br /> The code will be displayed in the <b>"Other"</b> section.</p>

        </div>

        <div className="section">
          <h1>Printing The Cash Payment Code</h1>
          <p>
            Things to consider
            <br />
            <br />
            1. Make sure the font is <u>big.</u>
            <br />
            2. Print the code in a <u>black color on a white background.</u>
            <br />
            3. Make sure the <u>code is readable.</u>
            <br />
          </p>

        </div>

        <div className="section">
          <h1>Placing Your Code And Payment In The Envelope</h1>
          <p>
            Things to consider
            <br />
            <br />
            1. Place the <u>exact amount (40 EUR or 40 USD)</u> in the envelope.
            <br />
            2. Place the Cash Payment Code in the envelope, <u>
              making the code face the cash so it can not be read through the envelope.
            </u>
            <br />
            3. <b>Consider adding paper padding on each side of the envelope to hide the contents from prying eyes.
            </b>
            <br />

          </p>

        </div>

        <div className="section">
          <h1>Sending the Envelope</h1>
          <p>
            Things to consider
            <br />
            <br />
            1. Consider adding tracking to the envelope, <u>without a tracking code the delivery of your payment is not guaranteed.</u>
            <br />
            2. We do not recommend adding a return address to the envelope if you wish to remain anonymous
            <br />
          </p>

        </div>

        <div className="section">
          <h1>P.O Box Address</h1>
          <p>
            Íslandspóstur HF
            <br />
            Síðumúla 3-5
            <br />
            105 Reykjavík
            <br />
            Iceland
            <br />
            P.O Box 8148 - Tunnels EHF
            <br />
            <br />

            <b>
              NOTICE: Make sure the address is readable otherwise your envelope might not arrive at our P.O. Box.
            </b>
          </p>

        </div>


        <div className="section">
          <h1>Cash Payment Terms And Conditions</h1>
          <p>
            1. <u>No coins are allowed.</u> If you send coins we will not count them torwards your payment and we will not send them back.
            <br />
            2. If you send too much cash we will add the extra cash as a gift-card on your account. <u>This gift-card will count torwards your next payment</u>
            <br />
            3. If your cash payment is not enough to cover the cost we will add the current payment as a gift-card on your account. <u>This gift-card will count torwards your next payment</u>
            <br />
            4. We do not offer refunds for cash payments
            <br />
            5. <u>We will only accept envelopes, boxes and other forms of containers will not be accepted.</u>

            <br />
            <br />

            <b>
              NOTICE: Any envelope containing less then 10 USD/EUR will not be converted to a gift-card. This is to prevent malicious actors from flooding us with small payments to waste our time and resources.
            </b>

            <br />
          </p>

        </div>

      </div>

    </>


  );
}

export default Cash;