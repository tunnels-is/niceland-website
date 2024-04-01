import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { CLIENT } from "../../lib/api";
import STORE from "../../store";
import { v4 as uuidv4 } from 'uuid';



const useForm = () => {
	const [loading, setLoading] = useState(false)
	const [activeSub, setActiveSub] = useState(undefined)
	const [inputs, setInputs] = useState({})
	const [subscribed, setSubscribed] = useState(undefined)
	const [tokenreg, setTokenreg] = useState(false)
	const [errors, setErrors] = useState({})
	const [emailExists, setEmailExists] = useState(undefined)
	const [validCode, setValidCode] = useState(false)


	const GENERATE_TOKEN = (toggle) => {
		if (toggle) {
			let token = uuidv4()
			setTokenreg(true)
			setInputs(inputs => ({ ...inputs, ["email"]: token }));
		} else {
			setTokenreg(false)
			setInputs(inputs => ({ ...inputs, ["email"]: "" }));
		}
	}

	const Register = async () => {
		let errors = {}
		let hasErrors = false
		console.log("REGISTER!")
		console.dir(inputs)

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

			let data = {
				email: inputs["email"],
				password: inputs["password"],
				password2: inputs["password2"],
			}
			await CLIENT.post(STORE.Config.REGISTER_URL, JSON.stringify(data));
			console.log("DONE!")
			STORE.SessionCache.Set("email", inputs["email"])
			setEmailExists(inputs["email"])
		} catch (error) {
			console.dir(error)
			let errors = {}
			if (error.response?.data) {
				errors["response"] = error.response.data
				setErrors({ ...errors })
			}
		}


		setLoading(false)
	}

	const handleInputChange = (event) => {
		let newInputs = { ...inputs, [event.target.id]: event.target.value, "error": "" }
		setInputs({ ...newInputs });
		STORE.PayPalInputs = newInputs
	}

	const updateAllInputs = (newInputs) => {
		setInputs({ ...newInputs })
		STORE.PayPalInputs = newInputs
	}


	return {
		loading,
		setActiveSub,
		inputs,
		updateAllInputs,
		subscribed,
		setSubscribed,
		setEmailExists,
		emailExists,
		tokenreg,
	};
}

const Pricing = (props) => {

	const {
		loading,
		setActiveSub,
		inputs,
		updateAllInputs,
		subscribed,
		setSubscribed,
		setEmailExists,
		emailExists,
		tokenreg,
	} = useForm();

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

		// window.createLemonSqueezy();

		// let email = STORE.SessionCache.Get("email")
		// if (email && email.length > 5) {
		// 	console.log("UPDATING ALL INPUTS...", inputs)
		// 	inputs["email"] = email
		// 	updateAllInputs(inputs)
		// 	setEmailExists(email)
		// }
		//
		// let code = STORE.Cache.Get("code")
		// let finalCode = ""
		// if (code && (code !== "undefined" && code !== "null")) {
		// 	finalCode = code
		// }
		// if (paramCode && (paramCode !== "undefined" && paramCode !== "null")) {
		// 	finalCode = paramCode
		// 	STORE.Cache.Set("code", code)
		// 	SEND_COUNT(code)
		// }
		// if (finalCode !== "") {
		// 	inputs["code"] = code
		// 	updateAllInputs(inputs)
		// }
		//
		// let sub = STORE.SessionCache.GetObject("sub")
		// if (sub) {
		// 	setSubscribed(sub)
		// }

	}, [])

	// let emailLabel = "Email"
	// if (tokenreg) {
	// 	emailLabel = "Username"
	// }

	let subs = STORE.Config.subs
	let other = STORE.Config.otherPayments

	return (
		<>

			{/** 
			{emailExists &&
				<div className="register-wrapper">
					<div className="success font-section-title">
						Registration complete!
					</div>
					<div className="account">
						{emailExists}
					</div>
				</div>
			}

			{!emailExists &&
				<div className="register-wrapper">
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
				</div >
			}


						<a href={sub.URL + '?checkout[email]=' + "your@email.com"} target="_blank" className="">

			<div className={`pricing grid-row-${props.row} inherit-grid  bg-${props.bg}`} >
				<a href="https://nicelandvpn.lemonsqueezy.com/checkout/buy/52ea75ec-ec08-4c8e-a372-b74adbe1c0b5?embed=1" className="lemonsqueezy-button">Buy 1 month license</a>
			</div>
			**/}


			<div className={`pricing grid-row-${props.row} inherit-grid  bg-${props.bg}`} >
				<div className="sub-select font-section-title">
					<div className="title">
						Select your subscription
					</div>
				</div>

				{subs.map((sub) => {
					return (
						<a href={sub.URL} target="_blank">
							<div className={`sub`} >
								<div className="title">{sub.Title}</div>
								<div className="price price-current teal">
									<span className="value">
										{sub.Price}
										<span className="value-text">USD</span>
									</span>
								</div>
							</div>
						</a>
					)

				})}
			</div>

			<div className={`pricing grid-row-${props.row} inherit-grid  bg-${props.bg}`} >
				<div className="sub-select font-section-title">
					<div className="title">
						Other Options
					</div>
				</div>

				{other.map((sub) => {
					return (
						<a href={sub.URL} target="_blank">
							<div className={`sub`} >
								<div className="title">{sub.Title}</div>
								<div className="price price-current teal">
									<span className="value">
										{sub.Price}
										<span className="value-text">USD</span>
									</span>
								</div>
							</div>
						</a>
					)

				})}
			</div>

		</>
	);
}

export default Pricing;
