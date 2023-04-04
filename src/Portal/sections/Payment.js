import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { BsCheck2All } from "react-icons/bs"
import { CLIENT } from "../../lib/api";

let defaultInputs = {
  email: "",
  password: "",
  password2: "",
  cardName: "",
  card: "",
  expM: "",
  expY: "",
  CVC: ""
}

const useForm = (props) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();
  const [loading, setLoading] = useState(undefined)

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
      errors["email"] = "Email missing"
      hasErrors = true
    }

    if (inputs["email"]) {
      if (!inputs["email"].includes(".") || !inputs["email"].includes("@")) {
        errors["email"] = "Password format is incorrect"
        hasErrors = true

      }
    }

    if (!inputs["password"] || inputs["password"] === "") {
      errors["password"] = "Password missing"
      hasErrors = true
    }

    if (!inputs["password2"] || inputs["password2"] === "") {
      errors["password2"] = "Confirmation missing"
      hasErrors = true
    }

    if (inputs["password"] && inputs["password"].length < 9) {
      errors["password"] = "Password needs to be at least 9 characters long"
      hasErrors = true
    }

    if (inputs["password"] && inputs["password"].length > 255) {
      errors["password"] = "Password cannot be longer then 255 characters"
      hasErrors = true
    }


    if (hasErrors) {
      setErrors({ ...errors })
      return
    }

    try {

      const response = await CLIENT.post("register", JSON.stringify(inputs));

      if (response.status === 202) {
      } else if (response.status === 200) {
      }

      setErrors({})

    } catch (error) {
      props.toggleError(STORE.ParseResponseErrorMessage(error))
    }

  }


  const handleInputChange = (event) => {
    event.persist();
    console.log("setting input: ", event.target.name, event.target.value)
    setInputs(inputs => ({ ...inputs, [event.target.id]: event.target.value }));
  }

  const manualInputChange = (key, value) => {
    console.log("setting manual input: ", key, value)
    setInputs(inputs => ({ ...inputs, [key]: value }));
  }

  return {
    inputs,
    setInputs,
    handleInputChange,
    manualInputChange,
    handleSubmit,
    errors,
    navigate,
    loading
  };
}


const Payment = (props) => {

  const { inputs, setInputs, handleInputChange, handleSubmit, errors, navigate, loading } = useForm(props);

  return (
    <>
      <div className="row payment-wrapper">

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
              <input type="email" class="form-control" id="email" onChange={handleInputChange} />
            </div>

            <div class="col-md-12">
              {errors["password"] &&
                <div className="error password-error">
                  {errors["password"]}<br />
                </div>
              }
              {!errors["password"] &&
                <label for="password" class="form-label">Password</label>
              }
              <input type="password" class="form-control" id="password" onChange={handleInputChange} />
            </div>

            <div class="col-md-12">
              {errors["password2"] &&
                <div className="error password2-error">
                  {errors["password2"]}<br />
                </div>
              }
              {!errors["password2"] &&
                <label for="password2" class="form-label">Confirm Password</label>
              }
              <input type="password" class="form-control" id="password2" onChange={handleInputChange} />
            </div>

            <div class="col-12">
              {errors["name"] &&
                <div className="error name-error">
                  {errors["name"]}<br />
                </div>
              }
              {!errors["name"] &&
                <label for="name" class="form-label">Name</label>
              }
              <input type="text" class="form-control" id="name" placeholder="" onChange={handleInputChange} />
            </div>

            <div class="col-8">
              {errors["card"] &&
                <div className="error card-error">
                  {errors["card"]}<br />
                </div>
              }{!errors["card"] &&
                <label for="card" class="form-label">Card Number</label>
              }
              <input type="text" class="form-control" id="card" placeholder="XXXX-XXXX-XXXX-XXXX" onChange={handleInputChange} />
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
              <input type="number" class="form-control" id="month" onChange={handleInputChange} />
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
              <input type="number" class="form-control" id="year" onChange={handleInputChange} />
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
              <input type="number" class="form-control" id="CVC" onChange={handleInputChange} />
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
      </div>

    </>

  );
}

export default Payment;