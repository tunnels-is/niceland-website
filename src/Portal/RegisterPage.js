import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate, useParams, Link } from "react-router-dom";
import { CLIENT } from "../lib/api";
import STORE from "../store";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial";
import { ImArrowRight2 } from "react-icons/im"
import { v4 as uuidv4 } from 'uuid';
import PulseLoader from "react-spinners/PulseLoader";

const useForm = () => {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false)

  const [accExists, setAccExists] = useState(false)

  // REGISTRATION
  const [rinputs, setRInputs] = useState({});
  const [tokenreg, setTokenreg] = useState(false)
  const [rerrors, setRErrors] = useState({})
  const [rresponse, setRResponse] = useState(undefined);



  const GENERATE_TOKEN = (toggle) => {
    if (toggle) {

      let token = uuidv4()
      setTokenreg(true)
      setRInputs(rinputs => ({ ...rinputs, ["email"]: token }));
    } else {
      setTokenreg(false)
      setRInputs(rinputs => ({ ...rinputs, ["email"]: "" }));
    }
  }

  const Register = async () => {

    let errors = {}
    let hasErrors = false

    // console.log("SUBMITTING")
    // console.dir(rinputs)
    // console.log("SUBMITTING")

    if (!rinputs["email"] || rinputs["email"] === "") {
      errors["email"] = "Email / Username missing"
      hasErrors = true
    }

    if (rinputs["email"]) {
      if (rinputs["email"].length > 320) {
        errors["email"] = "Maximum 320 characters"
        hasErrors = true
      }

      if (!tokenreg) {
        if (!rinputs["email"].includes(".") || !rinputs["email"].includes("@")) {
          errors["email"] = "Invalid email format"
          hasErrors = true
        }
      }
    }

    if (!rinputs["password"]) {
      errors["password"] = "Password missing"
      hasErrors = true
    }
    if (!rinputs["password2"]) {
      errors["password2"] = "Password confirm missing"
      hasErrors = true
    }

    if (rinputs["password"] !== rinputs["password2"]) {
      errors["password2"] = "Passwords do not match"
      hasErrors = true
    }

    if (rinputs["password"]) {
      if (rinputs["password"].length < 10) {
        errors["password"] = "Minimum 10 characters"
        hasErrors = true
      }
      if (rinputs["password"].length > 255) {
        errors["password"] = "Maximum 255 characters"
        hasErrors = true
      }
    }

    if (hasErrors) {
      setRErrors({ ...errors })
      return
    }

    setLoading(true)
    try {

      const r = await CLIENT.post("https://pay.nicelandvpn.is:444/user/create", JSON.stringify(rinputs));
      const xd = await r.data

      // console.dir(xd)

      STORE.SessionCache.Set("x", rinputs["email"])
      STORE.Cache.Set("code", rinputs["code"])

      setSuccess(true)

    } catch (error) {
      // console.dir(error)
      let errors = {}
      if (error.response?.status === 406) {
        if (error.response?.data) {
          errors["code"] = "Invalid Affiliate code"
          setRErrors({ ...errors })
        }
      } else {
        if (error.response?.data) {
          errors["response"] = error.response.data
          setRErrors({ ...errors })
        }
      }
    }


    setLoading(false)
  }

  const handleRInputChange = (event) => {
    setRInputs(rinputs => ({ ...rinputs, [event.target.id]: event.target.value }));
  }

  const AccountExists = (value) => {
    setAccExists(value)
  }


  const UpdateAccountEmail = () => {
    STORE.SessionCache.Set("x", rinputs["email"])
    let sub = STORE.SessionCache.GetObject("sub")
    if (sub) {
      navigate("/payment")
    } else {
      navigate("/pricing")
    }
  }


  return {
    navigate,
    loading,
    rresponse,
    rerrors,
    setRErrors,
    rinputs,
    setRInputs,
    success,
    handleRInputChange,
    Register,
    tokenreg,
    setTokenreg,
    GENERATE_TOKEN,
    AccountExists,
    accExists,
    UpdateAccountEmail
  };
}


const RegisterPage = () => {
  window.scrollTo(0, 0);

  const { navigate, loading, rresponse, setRResponse, rerrors, setRErrors, rinputs, setRInputs, success, handleRInputChange, Register, tokenreg, setTokenreg, GENERATE_TOKEN, AccountExists, accExists, UpdateAccountEmail } = useForm();

  let { paramCode } = useParams()
  // console.log(paramCode)
  // if (paramCode) {
  //   STORE.Cache.Set("code", paramCode)
  // }

  const SEND_COUNT = async (tag) => {

    // let counterCheck = STORE.SessionCache.GetBool("counter")
    // if (counterCheck) {
    //   return
    // } else {
    //   STORE.SessionCache.Set("counter", true)
    // }

    try {
      const r = await CLIENT.get("https://pay.nicelandvpn.is:444/count/" + tag);
    } catch (error) {
      // console.dir(error)
    }

  }

  useEffect(() => {
    let code = ""
    if (paramCode) {
      code = paramCode

      let sessionCode = STORE.Cache.Get("code")
      if (sessionCode !== code) {
        STORE.Cache.Set("code", code)
        STORE.SessionCache.Set("counter", false)
        SEND_COUNT(code)
      }

    } else {
      code = STORE.Cache.Get("code")
    }

    if (!rinputs["code"] && code) {
      handleRInputChange({ target: { id: "code", value: code } })
    }

  }, [])

  let emailLabel = "Email"
  if (tokenreg) {
    emailLabel = "Username"
  }

  if (success) {
    return (<>
      <div className="banner-replacement"></div>
      <div className="register-wrapper">

        <span className="success" onClick={() => AccountExists(false)}>
          Registration complete!
          <br />
          <br />
          You can now pick a subscription on the
          {` `}
          <Link to={"/pricing"}>
            Subscription
          </Link>{` `}
          page
        </span>
      </div>

      <SupportSocial row={"6"} bg={"1"}></SupportSocial>
    </>)

  }

  return (<>
    <div className="banner-replacement"></div>
    <div className="register-wrapper">

      {accExists &&
        <>
          <div className="account-exists" >
            <span className="link" onClick={() => AccountExists(false)}>
              Back to registration
            </span>
          </div>

          <div className="register-form register-form-account-exists">
            <div className="register-item">
              <label for="email" class="label">Email / Username</label>
              <input type="email" value={rinputs["email"]} class="input" id="email" onChange={handleRInputChange} />
            </div>

            <div className="confirm-button" onClick={() => UpdateAccountEmail()}>
              Confirm
              <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
            </div>
          </div>

        </>
      }

      {!accExists &&
        <>
          <div className="notification" >
            All new accounts get a 24 hour free trial which start on your first connect <br />
          </div>


          <div className="register-form">
            <div className="tab-wrapper">
              <div className={`email-tab ${tokenreg ? "" : "active"}`} onClick={() => GENERATE_TOKEN(false)}>Email</div>
              <div className={`anon-tab ${tokenreg ? "active" : ""}`} onClick={() => GENERATE_TOKEN(true)}>Anonymous</div>
            </div>

            {rerrors["response"] &&
              <div className="register-item">
                <label for="response" className="label error">{rerrors["response"]}</label>
              </div>
            }

            {tokenreg &&
              <div className="register-item token-warning">
                <label for="token" class="label token-warning-color">
                  WARNING: if you lose your username our customer support can not assist you with your account in any way.<br /> <br />Please copy this username to a secure location!
                </label>
              </div>
            }

            <div className={`register-item ${tokenreg ? "register-item-margin-adjust" : ""}`}>
              <label for="email" class="label">{rerrors["email"] ? <span className="error">{rerrors["email"]}</span> : emailLabel}</label>
              {tokenreg &&
                <textarea type="email" value={rinputs["email"]} class="input token-input" id="email" onChange={handleRInputChange} />
              }
              {!tokenreg &&
                <input type="email" value={rinputs["email"]} class="input" id="email" onChange={handleRInputChange} />
              }
            </div>

            <div className="register-item">
              <label for="password" class="label">{rerrors["password"] ? <span className="error">{rerrors["password"]}</span> : "Password"}</label>
              <input type="password" value={rinputs["password"]} class="input" id="password" onChange={handleRInputChange} />
            </div>

            <div className="register-item">
              <label for="password2" class="label">{rerrors["password2"] ? <span className="error">{rerrors["password2"]}</span> : "Confirm Password"}</label>
              <input type="password" value={rinputs["password2"]} class="input" id="password2" onChange={handleRInputChange} />
            </div>

            {rinputs["code"] &&
              <div className="register-item">
                <label for="code" class="label">{rerrors["code"] ? <span className="error">{rerrors["code"]}</span> : "Code"}</label>
                <input type="code" value={rinputs["code"]} class="input" id="code" onChange={handleRInputChange} />
              </div>
            }

            {loading &&
              <PulseLoader
                size={20}
                color={"#0E918D"}
              ></PulseLoader>
            }
            {!loading &&
              <div className="confirm-button" onClick={() => Register()}>
                Confirm
                <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
              </div>
            }

          </div>
        </>
      }


    </div >

    <SupportSocial row={"6"} bg={"2"}></SupportSocial>
    <Download row={"5"} bg={"1"}></Download>
  </>)
}

export default RegisterPage;