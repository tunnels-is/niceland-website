import React, { useEffect, useState } from "react";
import { useNavigate, } from "react-router-dom";
import STORE from "../../store";
import { ImArrowRight2 } from "react-icons/im"
import PulseLoader from "react-spinners/PulseLoader";
import { CLIENT } from "../../lib/api";
import { Bs7Circle } from "react-icons/bs";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

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
		Price: 6,
		MonthlyPrice: 50,
		PlanID: "P-9K167296Y33065421MU6PH3Q",
	}
]



const useForm = () => {

	const [loading, setLoading] = useState(false)

	const [activeSub, setActiveSub] = useState(undefined)
	const [inputs, setInputs] = useState([])

	const GetAffiliateDiscount = async () => {

		let form = {
			period: period,
			// subtype: sub.type,
			// discountcode: inputs["discountcode"],
		}

		console.log("SENDING FORM!")
		console.table(form)
		try {
			setLoading(true)

			const r = await CLIENT.post("https://pay.nicelandvpn.is:444/affiliate", JSON.stringify(form));
			const xd = await r.data

			setAffiliate(xd)
			console.log("DONE")
			errors["discountcode"] = ""
			setErrors({ ...errors })

			setDiscount(xd.Discount)

			SetSub(sub.ix, period, xd.Discount)

		} catch (error) {
			console.dir(error)
			let errors = {}
			if (error.response?.data) {
				errors["discountcode"] = error.response.data
				setErrors({ ...errors })
			} else {
				errors["discountcode"] = "Unknown error, please try again"
				setErrors({ ...errors })
			}
		}

		setLoading(false)
	}

	const handleInputChange = (event) => {
		setInputs(rinputs => ({ ...rinputs, [event.target.id]: event.target.value }));
	}

	return {
		loading,
		activeSub,
		setActiveSub,
		handleInputChange,
		inputs,
	};
}


const Pricing = (props) => {

	const {
		activeSub,
		setActiveSub,
		loading,
		handleInputChange,
		inputs
	} = useForm();

	return (
		<PayPalScriptProvider
			options={{
				clientId: "ARu0ah6wiGeeixl8mumAmM769VUoen733ztYJ7TbDOpCgxeYjIBGXRlpi_8aj4EdEmQ59PfLJVQRQ4DP",
				vault: true,
				intent: "subscription",
			}}
		>

			<div className={`pricing grid-row-${props.row} inherit-grid  bg-${props.bg}`} >
				<div className="sub-select">Select subscription</div>

				{subs.map((sub) => {

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
									<div className="register">
										<a href="https://nicelandvpn.is/#/register" target="_blank">
											No Account? register here!
										</a>
									</div>
									<input
										type="email"
										value={inputs["email"]}
										class="input"
										id="email"
										onChange={handleInputChange}>
									</input>
									<PayPalButtons
										createSubscription={(data, actions) => {
											console.log("CREATE SUB")
											console.dir(data)
											console.dir(actions)
											return actions.subscription.create({
												'plan_id': sub.PlanID,
											});
										}}
										onApprove={(data, details) => {
											console.log("APPROVE ... SEND DATA TO SERVER ....")
											console.dir(data)
											console.dir(details)
										}}
										onError={(err) => {
											console.log("ON ERROR")
											console.dir(err)
										}}
										catchError={(err) => {
											console.log("CATCH ERROR")
											console.dir(err)
										}}
										onCancel={(err) => {
											console.log("ON CANCEL")
											console.dir(err)
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


			{loading &&
				<PulseLoader
					size={20}
					color={"#0E918D"}
				></PulseLoader>
			}

			<div className={`pricing-desc grid-row-${props.row} inherit-grid  bg-${props.bg}`} >

				<div className="title font-section-title">Subscription Benefits</div>
				<div className="subtitle font-section-subtitle">All subscriptions have access to our full list of features and the following support platforms</div>

				<div className="benefits font-section-subtitle">
					<div className="item">Email</div>
					<div className="item">Telegram</div>
					<div className="item">Slack</div>
					<div className="item">Discord</div>
					<div className="item">Element / Matrix</div>
					<div className="item">Reddit</div>
				</div>
			</div>


		</PayPalScriptProvider >

	);
}

export default Pricing;
