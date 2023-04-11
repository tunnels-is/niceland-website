import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import BannerBeta from "./BannerBeta";
import BannerV3 from "./Bannerv3";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial";


const Beta = () => {

    // window.scrollTo(0, 0);

    return (
        <>
            <BannerBeta></BannerBeta>
            < div className={`beta-section inherit-grid`
            }>

                <div className="title-section section">
                    Welcome to the beta
                </div>

                <div className="about-section section">
                    NicelandVPN is currently in development and we have finally reached enough stability to enter Open Beta. Even though we consider the app to be stable enough to be revealed to the public, there might still be undiscovered bugs.
                    <br></br>
                    <br></br>
                    We need your help to squash those bugs!
                </div>

                <div className="more-about-section section">
                    <h1>Why did we create a new VPN platform from scratch ?</h1>
                    Most VPNs today re-sell open source software such as OpenVPN or WireGuard, both of these platforms have served VPN users for years and proven themselves to be fairly reliable. However, re-selling a pre-build VPN platform limits you to the implementation of that specific platform. <br /><br />In short, the reason we made our VPN platform from scratch is because we wanted more customizability in order to accomplish the goals we set for NicelandVPN.
                    <br />
                    <br />
                    <h1>What are these 'goals' we mentioned ?</h1>

                    <h2>Anonymity</h2>
                    The most important goal for NicelandVPN was to accomplish as much Anonymity as possible. Talking in depth about how we accomplish this goal would be a very long discussion, but here is a short list of some methods we implemented:
                    <h4>
                        - Accounts can be created using usernames/tokens -
                        <br />
                        - No logs are generated regarding user activity -
                        <br />
                        - No user activity is tracked in any form -
                        <br />
                        - No networks logs are generated by Niceland -
                        <br />
                        - The app is not DNS dependant in order to operate properly -
                        <br />
                        - Prevention of DNS and IPv6 leaks -
                        <br />
                        - All functionality opperates on port 443/tcp -
                        <br />
                        - Meta Data uses binary encoded tags instead of IPs -
                        <br />
                        - Meta Data is instantly deleted upon disconnecting -
                        <br />
                        - Anonymous payments (crypto/cash) -
                        <br />

                    </h4>



                    <h2>Quality Of Service</h2>
                    This goal is very important to us. Most VPNs out there assign to many users to a single VPN and do not take into account traffic spikes and other factors that may decrease their users available bandwidth. <br></br>
                    <br />
                    In order to guarantee users a minimum amount of bandwidth we have implemented a custom algorithm which engages if any VPN is above 80% bandwidth usage. This algorithm prioritizes limiting users that are using a high amount of bandwidth and DOES NOT limit users that are at or below the minimum bandwidth threshold.
                    <br />
                    <br />
                    Additionally, there is no upper-limit to bandwidth, if the VPN has the bandwidth available, you can use it.

                    <h2>Flexibility</h2>
                    Creating a service that could be customized down to the smallest details was very important. We wanted to offer users the ability to raise their minimum guaranteed bandwidth, add permanent session assignments, add more available device connections and so much more..


                </div>

                <div className="testing-section section">
                    <h1>What are we testing during this open beta?</h1>
                    <h4>- Encryption for the API/Proxy modules -</h4>
                    <h4>- Long-Term Connections -</h4>
                    <h4>- Multi-Platform Support (mac/linux/windows) -</h4>
                    <h4>- Firewall Penetration -</h4>
                    <h4>- Overall Stability -</h4>
                    <h4>- App(GUI) interface stability / operability -</h4>
                    <h4>- Automatic Updates -</h4>

                </div>

                <div className="notice-section section">
                    <h1>!!! NOTICES !!!</h1>
                    <p>- Additional Encryption for the internet traffic itself has not been enabled yet, this is in order to make overall debugging easier. However, your internet traffic is still protected in the same way as it would without the service enabled.<br></br>
                        <u>The additional encryption will be enabled at a later stage in the open beta </u> </p>

                </div>

                <div className="reporting-section section">
                    <h1>How to submit bug reports</h1>
                    Because we focus heavily on anonymity, we do not implement any kind of automatic bug reporting. At the moment our bug reporting process is a bit cumbersome.<br></br>
                    <br></br>
                    <h4>
                        In order to submit bug reports, follow these steps:
                    </h4>
                    <br></br>
                    <h4>
                        - Open NicelandVPN and go to "Settings" in the menu on the left
                        <br></br>
                        - Inside the Settings page under "Other" click the button called "Logs"
                        <br></br>
                        - At the bottom of the Logs page there should be a link that says "new log file created".
                        <br></br>
                        - Go to the folder mentioned under "DIR" and in that folder you will find all the log files
                        <br></br>
                        - The format of the log files is: [date/time]-nicelandVPN.log
                        <br></br>
                        - Join on of our social platforms mentioned below to submit your bug report
                        <br></br>
                        - Or you can send them via email to support@nicelandvpn.is

                    </h4>
                </div>


                <div className="reporting-section section">
                    <h1>Customer support?</h1>
                    We are currently working on an anonymous way of handling customer support, for now you can join the social platforms listed below or send us an email at support@nicelandvpn.is

                </div>



            </div>
            <SupportSocial></SupportSocial>
            <Download></Download>
        </>
    )
}

export default Beta;