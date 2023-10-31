import React, { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { CLIENT } from "../../lib/api";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import RegisterSection from "../RegisterSection";
import STORE from "../../store";

const subs = [
	{
		Title: "1 Month",
		Price: 10,
		MonthlyPrice: 10,
		PlanID: "dlfjskldjfklsjdlfjsdlf",
	},
	{
		Title: "6 Month",
		Price: 30,
		MonthlyPrice: 8,
		PlanID: "jklshdlfjksdflsldkjf",
	},
	{
		Title: "12 Month",
		Price: 50,
		MonthlyPrice: 6,
		PlanID: "P-9K167296Y33065421MU6PH3Q",
	}
]

const useForm = () => {

	const [loading, setLoading] = useState(false)
	const [activeSub, setActiveSub] = useState(undefined)
	const [inputs, setInputs] = useState([])
	const [subscribed, setSubscribed] = useState(undefined)


	const sendSubscriptionInfoToServer = async (paymentData, sub) => {
		// console.log("SENDING PAYMENT TO SERVER")
		// console.dir(paymentData)
		// console.dir(sub)
		// console.dir(inputs)
		// console.dir(extras)
		// console.dir(STORE)
		// console.log("------------------------------------")

		try {
			setLoading(true)
			console.log("SENDING....")
			let data = {}
			data.SubID = paymentData.subscriptionID
			data.PlanID = sub.PlanID
			data.OrderID = paymentData.orderID
			data.Email = STORE.PayPalInputs.email
			data.Code = STORE.PayPalInputs.code
			console.dir(data)
			console.log("------------------------------------")
			//
			// 	const r = await CLIENT.post(STORE.Config.PAYMENT_URL, JSON.stringify(data));
			// 	if (r.status === 200) {
			setSubscribed(data)
			STORE.SessionCache.SetObject("sub", data)
			// 	} else {
			// 		setInputs({ ...inputs, error: "Something went wrong during the subscription process, please contact customer support and give them your subscription ID: " + data.SubID })
			// 	}
			//
		} catch (e) {
			// 	console.dir(e)
			// 	setInputs({ ...inputs, error: "Something went wrong during the subscription process, please contact customer support and give them your subscription ID: " + data.SubID })
		}

		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}

	const handleInputChange = (event) => {
		let newInputs = { ...inputs, [event.target.id]: event.target.value, "error": "" }
		setInputs({ ...newInputs });
		STORE.PayPalInputs = inputs
	}

	const updateAllInputs = (newInputs) => {
		setInputs({ ...newInputs })
		STORE.PayPalInputs = newInputs
	}

	return {
		loading,
		activeSub,
		setActiveSub,
		handleInputChange,
		inputs,
		updateAllInputs,
		sendSubscriptionInfoToServer,
		subscribed,
		setSubscribed,
	};
}

const Pricing = (props) => {

	const {
		activeSub,
		setActiveSub,
		loading,
		handleInputChange,
		inputs,
		updateAllInputs,
		sendSubscriptionInfoToServer,
		subscribed,
		setSubscribed,
	} = useForm();

	const SEND_COUNT = async (code) => {
		console.log("Sending code:", code)
		try {
			CLIENT.get(STORE.Config.COUNTER_URL + code);
		} catch (error) {
			console.dir(error)
		}
	}

	useEffect(() => {

		let email = STORE.SessionCache.Get("email")
		if (email && (email === "undefined" || email === "null")) {
			email = ""
		} else if (!email) {
			email = ""
		}
		let code = STORE.Cache.Get("code")
		if (code && (code === "undefined" || code === "null")) {
			code = ""
		} else if (!code) {
			code = ""
		}
		let sub = STORE.SessionCache.GetObject("sub")
		if (sub) {
			console.log("SUB IN STORAGE")
			console.dir(sub)
			setSubscribed(sub)
		}

		updateAllInputs({ ...inputs, email: email, code: code })

	}, [])

	return (
		<PayPalScriptProvider
			options={{
				clientId: "ARu0ah6wiGeeixl8mumAmM769VUoen733ztYJ7TbDOpCgxeYjIBGXRlpi_8aj4EdEmQ59PfLJVQRQ4DP",
				vault: true,
				intent: "subscription",
			}}
		>

			<RegisterSection />

			<div className={`pricing grid-row-${props.row} inherit-grid  bg-${props.bg}`} >

				<div className="sub-select font-section-title">

					{!subscribed &&
						'Select your subscription'
					}
					{loading &&
						<div className="loader">
							<PulseLoader
								size={20}
								color={"#0E918D"}
							></PulseLoader>
						</div>
					}
					{subscribed &&
						<div>
							<div className="success">
								Subscription ID<br />
							</div>
							<div className="sub-id">
								{subscribed.SubID}
							</div>
						</div>
					}
				</div>

				{!subscribed && subs.map((sub) => {

					let active = false
					if (activeSub && sub.Title == activeSub.Title) {
						active = true
					}

					return (
						<div className={`sub sub-1 ${active ? "active-sub" : ""}`} onClick={() => setActiveSub(sub)} >
							<div className="title">{sub.Title}</div>
							<div className="price price-current teal">
								<span className="value">
									{sub.Price}
									<span className="value-text">USD</span>
								</span>
								<span className="month">
									<span className="month-value">
										{sub.MonthlyPrice}
									</span>
									USD /month
								</span>
							</div>

							{active &&
								<div className="account-form">
									<input
										type="email"
										value={inputs["email"]}
										class="input"
										id="email"
										placeholder="Email or Username"
										onChange={handleInputChange}>
									</input>
									<input
										type="text"
										value={inputs["code"]}
										class="input"
										id="code"
										placeholder="Discount Code"
										onChange={handleInputChange}>
									</input>

									{inputs["error"] &&
										<div className="error">{inputs["error"]}</div>
									}
									{(!inputs["email"] || inputs["email"].length < 5) &&
										<div className="paypal-blocker" onClick={() => {
											updateAllInputs({ ...inputs, error: "You need to enter your Email or Username" })
										}}></div>
									}

									<PayPalButtons
										createSubscription={(data, actions) => {
											// console.log("CREATE SUB")
											// console.log("----------------------")
											// console.dir(data)
											// console.dir(actions)
											// console.dir(STORE)
											// console.log("----------------------")
											return actions.subscription.create({
												'plan_id': sub.PlanID,
											});
										}}
										onApprove={(data, details) => {
											sendSubscriptionInfoToServer(data, sub)
										}}
										onError={(err) => {
											console.log("ON ERROR")
											console.log("----------------------")
											console.dir(err)
											console.dir(STORE)
											console.log("----------------------")
											SEND_COUNT("paypal-on-error")
										}}
										catchError={(err) => {
											console.log("CATCH ERROR")
											console.log("----------------------")
											console.dir(err)
											console.dir(STORE)
											console.log("----------------------")
											SEND_COUNT("paypal-catch-error")
										}}
										onCancel={(err) => {
											console.log("ON CANCEL")
											console.log("----------------------")
											console.dir(err)
											console.dir(STORE)
											console.log("----------------------")
											SEND_COUNT("paypal-cancel")
										}}
										style={{
											shape: 'rect',
											color: 'gold',
											layout: 'vertical',
											label: 'subscribe',
										}}
									/>

								</div>
							}
						</div>
					)

				})}
			</div>

		</PayPalScriptProvider >
	);
}

export default Pricing;
