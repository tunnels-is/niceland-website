import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import { BsCheck2All } from "react-icons/bs"
import { CLIENT } from "../../lib/api";
import STORE from "../../store";

let defaultInputs = {
  email: "",
  card: "",
  month: 0,
  year: 0,
  CVC: "",
  subtype: 1,
  affiliate: "",
  dicountcode: ""
}

const useForm = (paymentData) => {

  if (!paymentData) {
    paymentData = defaultInputs
  }

  console.log("PD!")
  console.dir(paymentData)

  const [inputs, setInputs] = useState(paymentData);
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();
  const [loading, setLoading] = useState(undefined)
  const [response, setResponse] = useState(undefined)

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    let errors = {}
    let hasErrors = false

    console.log("SUBMITTING")
    console.dir(inputs)
    console.log("SUBMITTING")

    if (!inputs["email"] || inputs["email"] === "") {
      errors["email"] = "Email/Username missing"
      hasErrors = true
    }

    inputs["month"] = Number(inputs["month"])
    inputs["year"] = Number(inputs["year"])

    if (hasErrors) {
      setErrors({ ...errors })
      return
    }

    try {

      const r = await CLIENT.post("http://localhost:1223/verify", JSON.stringify(inputs));
      const xd = await r.data
      console.dir(xd)
      setResponse(xd)

    } catch (error) {
      console.dir(error)
    }

  }


  const handleInputChange = (event) => {
    event.persist();
    console.log("setting input: ", event.target.name, event.target.value)
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
    response
  };
}


const Payment = () => {

  let { data } = useParams()
  let paymentObject = undefined
  if (data) {
    paymentObject = JSON.parse(data)
  }
  console.log("payment")
  console.dir(paymentObject)

  const { inputs, setInputs, handleInputChange, handleSubmit, errors, navigate, loading, response } = useForm(paymentObject);

  return (
    <>
      <div className="row payment-wrapper">

        {response &&
          <>
            {response.cardVerificationRawResponse &&
              <div className="" dangerouslySetInnerHTML={{ __html: response.cardVerificationRawResponse }}></div>
            }
          </>
        }
        {!response &&
          <>
            <div className="form col-md-6">

              <form class="row" onSubmit={e => e.preventDefault()}>

                <div class="col-md-12">
                  {errors["email"] &&
                    <div className="error email-error">
                      {errors["email"]}<br />
                    </div>
                  }
                  {!errors["email"] &&
                    <label for="email" class="form-label">Email</label>
                  }
                  <input type="email" value={inputs["email"]} class="form-control" id="email" onChange={handleInputChange} />
                </div>




                <div class="col-8">
                  {errors["card"] &&
                    <div className="error card-error">
                      {errors["card"]}<br />
                    </div>
                  }{!errors["card"] &&
                    <label for="card" class="form-label">Card Number</label>
                  }
                  <input type="text" value={inputs["card"]} class="form-control" id="card" placeholder="XXXX-XXXX-XXXX-XXXX" onChange={handleInputChange} />
                </div>
                <div className="col-4 card-logo">
                  <div className="visa"></div>
                  <div className="mc"></div>
                  <div className="amx"></div>
                </div>

                <div class="col-md-3">
                  {errors["month"] &&
                    <div className="error month-error">
                      {errors["month"]}<br />
                    </div>
                  }
                  {!errors["month"] &&
                    <label for="month" class="form-label">month</label>
                  }
                  <input type="number" value={inputs["month"]} class="form-control" id="month" onChange={handleInputChange} />
                </div>

                <div class="col-md-3">
                  {errors["year"] &&
                    <div className="error year-error">
                      {errors["year"]}<br />
                    </div>
                  }
                  {!errors["year"] &&
                    <label for="year" class="form-label">year</label>
                  }
                  <input type="number" value={inputs["year"]} class="form-control" id="year" onChange={handleInputChange} />
                </div>

                <div class="col-md-3">
                  {errors["CVC"] &&
                    <div className="error cvc-error">
                      {errors["CVC"]}<br />
                    </div>
                  }
                  {!errors["CVC"] &&
                    <label for="CVC" class="form-label">CVC</label>
                  }
                  <input type="number" value={inputs["CVC"]} class="form-control" id="CVC" onChange={handleInputChange} />
                </div>
                <div class="col-12">
                  <div className="terms">By submitting this form, you agree to our <a href="/terms.pdf" target="_blank">Terms of Service.</a></div>

                </div>
                <div class="col-12">
                  <button onClick={handleSubmit} type="submit" class="btn btn-primary">Confirm</button>
                </div>
              </form>

            </div>

            <div className="col-md-6">
              some more information and selections about the subscriptions
            </div>
          </>

        }


      </div>

    </>

  );
}

export default Payment;