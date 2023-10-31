import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import STORE from "../store";
import { CLIENT } from "../lib/api";
import { ImArrowRight2 } from "react-icons/im"
import { v4 as uuidv4 } from 'uuid';
import PulseLoader from "react-spinners/PulseLoader";

const useForm = () => {

	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [exists, setExists] = useState(undefined)

	// REGISTRATION
	const [inputs, setInput] = useState({});
	const [tokenreg, setTokenreg] = useState(false)
	const [errors, setErrors] = useState({})

	const GENERATE_TOKEN = (toggle) => {
		if (toggle) {
			let token = uuidv4()
			setTokenreg(true)
			setInput(inputs => ({ ...inputs, ["email"]: token }));
		} else {
			setTokenreg(false)
			setInput(inputs => ({ ...inputs, ["email"]: "" }));
		}
	}

	const Register = async () => {
		let errors = {}
		let hasErrors = false

		// console.log("SUBMITTING")
		// console.dir(inputs)
		// console.log("SUBMITTING")

		if (!inputs["email"] || inputs["email"] === "") {
			errors["email"] = "Email / Username missing"
			hasErrors = true
		}

		if (inputs["email"]) {
			if (inputs["email"].length > 320) {
				errors["email"] = "Maximum 320 characters"
				hasErrors = true
			}

			if (!tokenreg) {
				if (!inputs["email"].includes(".") || !inputs["email"].includes("@")) {
					errors["email"] = "Invalid email format"
					hasErrors = true
				}
			}
		}

		if (!inputs["password"]) {
			errors["password"] = "Password missing"
			hasErrors = true
		}
		if (!inputs["password2"]) {
			errors["password2"] = "Password confirm missing"
			hasErrors = true
		}

		if (inputs["password"] !== inputs["password2"]) {
			errors["password2"] = "Passwords do not match"
			hasErrors = true
		}

		if (inputs["password"]) {
			if (inputs["password"].length < 10) {
				errors["password"] = "Minimum 10 characters"
				hasErrors = true
			}
			if (inputs["password"].length > 255) {
				errors["password"] = "Maximum 255 characters"
				hasErrors = true
			}
		}

		if (hasErrors) {
			setErrors({ ...errors })
			return
		}

		setLoading(true)
		try {

			// await CLIENT.post(STORE.Config.REGISTER_URL, JSON.stringify(inputs));
			STORE.SessionCache.Set("email", inputs["email"])
			STORE.Cache.Set("code", inputs["code"])
			setExists(inputs["email"])
			setSuccess(true)

		} catch (error) {
			// let errors = {}
			// if (error.response?.status === 406) {
			// 	if (error.response?.data) {
			// 		errors["code"] = "Invalid Affiliate code"
			// 		setErrors({ ...errors })
			// 	}
			// } else {
			// 	if (error.response?.data) {
			// 		errors["response"] = error.response.data
			// 		setErrors({ ...errors })
			// 	}
			// }
		}


		setLoading(false)
	}

	const handleInputChange = (event) => {
		setInput(inputs => ({ ...inputs, [event.target.id]: event.target.value }));
	}

	return {
		loading,
		errors,
		inputs,
		success,
		handleInputChange,
		Register,
		tokenreg,
		GENERATE_TOKEN,
		exists,
		setExists,
	};
}


const RegisterSection = () => {

	const { loading, errors, inputs, success, handleInputChange, Register, tokenreg, GENERATE_TOKEN, exists, setExists } = useForm();

	let { paramCode } = useParams()

	const SEND_COUNT = async (code) => {
		console.log("Sending code:", code)
		try {
			CLIENT.get(STORE.Config.COUNTER_URL + code);
		} catch (error) {
			console.dir(error)
		}
	}

	useEffect(() => {
		console.log("AFF CODE: ", paramCode)
		let code = ""
		if (paramCode && paramCode !== "") {
			code = paramCode
			let sessionCode = STORE.Cache.Get("code")
			console.log("STORAGE CODE: ", sessionCode)

			if (sessionCode !== code) {
				STORE.Cache.Set("code", code)
				STORE.SessionCache.Set("counter", false)
				SEND_COUNT(code)
			}

		} else {
			code = STORE.Cache.Get("code")
		}

		if (!inputs["code"]) {
			if (code && code !== "undefined" && code !== "null")
				handleInputChange({ target: { id: "code", value: code } })
		}
		let email = STORE.SessionCache.Get("email")
		if (email) {
			setExists(email)
		}

	}, [])

	let emailLabel = "Email"
	if (tokenreg) {
		emailLabel = "Username"
	}

	if (exists) {
		return (<div className="register-wrapper">
			<div className="success font-section-title">
				Registration complete!
			</div>
			<div className="account">
				{exists}
			</div>
		</div>)
	}


	return (<div className="register-wrapper">
		<div className="register-title font-section-title">Register For Niceland</div>
		<div className="notification" >
			All new accounts get 24 hours free trial
		</div>


		<div className="register-form">
			<div className="tab-wrapper">
				<div className={`email-tab ${tokenreg ? "" : "active"}`} onClick={() => GENERATE_TOKEN(false)}>Email</div>
				<div className={`anon-tab ${tokenreg ? "active" : ""}`} onClick={() => GENERATE_TOKEN(true)}>Anonymous</div>
			</div>

			{errors["response"] &&
				<div className="register-item">
					<label for="response" className="label error">{errors["response"]}</label>
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
				<label for="email" class="label">{errors["email"] ? <span className="error">{errors["email"]}</span> : emailLabel}</label>
				{tokenreg &&
					<textarea type="email" value={inputs["email"]} class="input token-input" id="email" onChange={handleInputChange} />
				}
				{!tokenreg &&
					<input type="email" value={inputs["email"]} class="input" id="email" onChange={handleInputChange} />
				}
			</div>

			<div className="register-item">
				<label for="password" class="label">{errors["password"] ? <span className="error">{errors["password"]}</span> : "Password"}</label>
				<input type="password" value={inputs["password"]} class="input" id="password" onChange={handleInputChange} />
			</div>

			<div className="register-item">
				<label for="password2" class="label">{errors["password2"] ? <span className="error">{errors["password2"]}</span> : "Confirm Password"}</label>
				<input type="password" value={inputs["password2"]} class="input" id="password2" onChange={handleInputChange} />
			</div>

			<div className="register-item">
				<label for="code" class="label">{errors["code"] ? <span className="error">{errors["code"]}</span> : "Discount Code"}</label>
				<input type="code" value={inputs["code"]} class="input" id="code" onChange={handleInputChange} />
			</div>

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
	</div >)
}

export default RegisterSection;
