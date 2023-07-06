import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate, useParams, Link } from "react-router-dom";
import { CLIENT } from "../lib/api";
import STORE from "../store";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial";
import { ImArrowRight2 } from "react-icons/im"
import dayjs from "dayjs";
import PulseLoader from "react-spinners/PulseLoader";

const useForm = () => {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();


  // PAYMENTS
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({})
  const [response, setResponse] = useState(undefined)

  const handleCardinputChange = (event) => {
    event.persist();
    let replaced = event.target.value.replaceAll("-", "")
    let data = replaced.split("")
    let x1 = []
    let x2 = []
    let x3 = []
    let x4 = []
    let x5 = []
    if (replaced.length > 4) {
      x2.push("-")
    }
    if (replaced.length > 8) {
      x3.push("-")
    }
    if (replaced.length > 12) {
      x4.push("-")
    }
    if (replaced.length > 16) {
      x5.push("-")
    }

    let count = 0
    data.forEach(c => {
      if (count < 4) {
        x1.push(c)
      } else if (count <= 7) {
        x2.push(c)
      } else if (count <= 11) {
        x3.push(c)
      } else if (count <= 15) {
        x4.push(c)
      } else if (count <= 19) {
        x5.push(c)
      }

      count++
    })

    x1 = x1.concat(x2)
    x1 = x1.concat(x3)
    x1 = x1.concat(x4)
    x1 = x1.concat(x5)
    setInputs(inputs => ({ ...inputs, ["card"]: x1.join("") }));
  }
  // https://pay.nicelandvpn.is/verify
  const handleSubmit = async () => {

    let errors = {}
    let hasErrors = false


    if (!inputs["email"] || inputs["email"] === "") {
      errors["email"] = "Email/Username missing please re-open the payment form"
      hasErrors = true
    }

    if (!inputs["card"] || inputs["card"] === "") {
      errors["card"] = "Card details missing"
      hasErrors = true
    }
    if (!inputs["month"] || inputs["month"] === "") {
      errors["month"] = "Expiration month missing"
      hasErrors = true
    }
    if (!inputs["year"] || inputs["year"] === "") {
      errors["year"] = "Expiration year missing"
      hasErrors = true
    }
    if (!inputs["CVC"] || inputs["CVC"] === "") {
      errors["CVC"] = "CVC missing"
      hasErrors = true
    }

    let yearx = dayjs().year()
    if (yearx > Number("20" + inputs["year"])) {
      errors["year"] = "Invalid year"
      hasErrors = true
    }

    let sub = STORE.SessionCache.GetObject("sub")
    if (!sub) {
      errors["card"] = "Subscription information missing, please select your subscription again from the pricing page"
      hasErrors = true
    }

    if (hasErrors) {
      setErrors({ ...errors })
      return
    }


    setLoading(true)
    let form = {
      period: sub.period,
      subtype: sub.type,

      cvc: inputs["CVC"],
      card: inputs["card"].replaceAll("-", ""),
      email: inputs["email"],
      month: Number(inputs["month"]),
      year: Number("20" + inputs["year"]),
      discountcode: inputs["discountcode"],
    }

    try {

      const r = await CLIENT.post("https://pay.nicelandvpn.is/verify", JSON.stringify(form));
      const xd = await r.data

      setResponse(xd)

    } catch (error) {
      let errors = {}
      if (error.response?.data) {
        errors["response"] = error.response.data
        setErrors({ ...errors })
      }
    }

    setLoading(false)
  }

  const handleInputChange = (event) => {
    setInputs(inputs => ({ ...inputs, [event.target.id]: event.target.value }));
  }


  return {
    inputs,
    setInputs,
    handleInputChange,
    handleSubmit,
    errors,
    navigate,
    loading,
    response,
    handleCardinputChange,
  };
}


const PaymentPage = () => {
  window.scrollTo(0, 0);

  const { inputs, setInputs, handleInputChange, handleSubmit, errors, navigate, loading, response, handleCardinputChange, } = useForm();


  let sub = STORE.SessionCache.GetObject("sub")
  if (!sub) {
    return (<>
      <div className="banner-replacement"></div>
      <div className="payment-wrapper">

        <span className="no-sub" >
          No subscription information was found, please select a subscription on the {` `}
          <Link to={"/pricing"}>
            Pricing
          </Link>{` `}
          page
        </span>
      </div>
      <Download row={"5"} bg={"1"}></Download>
      <SupportSocial row={"6"} bg={"2"}></SupportSocial>
    </>)
  }

  useEffect(() => {
    if (!inputs["email"]) {
      let user = STORE.SessionCache.Get("x")
      if (user) {
        handleInputChange({ target: { id: "email", value: user } })
      }
    }

    let code = STORE.Cache.Get("code")
    if (!inputs["discountcode"] && code) {
      handleInputChange({ target: { id: "discountcode", value: code } })
    }

  }, [])




  if (response) {
    return (<>
      <div className="banner-replacement"></div>
      <div className="row payment-wrapper">
        {response.cardVerificationRawResponse &&
          <div className="" dangerouslySetInnerHTML={{ __html: response.cardVerificationRawResponse }}></div>
        }
      </div>
      <Download row={"5"} bg={"1"}></Download>
      <SupportSocial row={"6"} bg={"2"}></SupportSocial>
    </>)
  }


  return (
    <>
      <div className="banner-replacement"></div>
      <div className="row payment-wrapper">

        <div className="payment-form">
          {errors["response"] &&
            <div className="payment-item">
              <label for="response" className="label error">{errors["response"]}</label>
            </div>
          }



          <div className="payment-item">
            <label for="email" class="label">{errors["email"] ? <span className="error">{errors["email"]}</span> : "Email or Username"}</label>
            <input type="email" value={inputs["email"]} class="input" id="email" onChange={handleInputChange} />
          </div>
          <div className="payment-item">
            <label for="discountcode" class="label">{errors["discountcode"] ? <span className="error">{errors["discountcode"]}</span> : "Discount / Affiliate Code"}</label>
            <input type="discountcode" value={inputs["discountcode"]} class="input" id="discountcode" onChange={handleInputChange} />
          </div>

          <div className="payment-item">
            <label for="card" class="label">Card Information</label>
            <input type="card" value={inputs["card"]} class="input" id="card" onChange={handleCardinputChange} placeholder="Card Number" />
          </div>

          <div className="payment-item-small">
            <input type="text" value={inputs["month"]} class="input input-small" id="month" onChange={handleInputChange} placeholder="Month" />
            <input type="text" value={inputs["year"]} class="input input-small" id="year" onChange={handleInputChange} placeholder="Year" />
            <input type="text" value={inputs["CVC"]} class="input input-small" id="CVC" onChange={handleInputChange} placeholder="CVC" />
          </div>

          <label for="month" class="label label-small">{errors["card"] ? <span className="error">{errors["card"]}</span> : ""}</label>
          <label for="month" class="label label-small">{errors["month"] ? <span className="error">{errors["month"]}</span> : ""}</label>
          <label for="month" class="label label-small">{errors["year"] ? <span className="error">{errors["year"]}</span> : ""}</label>
          <label for="month" class="label label-small">{errors["CVC"] ? <span className="error">{errors["CVC"]}</span> : ""}</label>


          <label className="label">Subscription: {sub.name}</label>
          <label className="label">Price: {sub.fullPrice} USD</label>
          <br />
          <label className="label terms">By pressing confirm you accept our {` `}
            <a href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/tunnels-is/media/master/terms/terms.pdf" target="_blank">
              Terms And Conditions
            </a>
          </label>


          {loading &&
            <PulseLoader
              size={20}
              color={"#0E918D"}
            ></PulseLoader>
          }

          {!loading &&

            <div className="confirm-button" onClick={() => handleSubmit()}>
              Confirm
              <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
            </div>
          }

        </div>



      </div>

      <Download row={"5"} bg={"1"}></Download>
      <SupportSocial row={"6"} bg={"2"}></SupportSocial>
    </>

  );
}

export default PaymentPage;