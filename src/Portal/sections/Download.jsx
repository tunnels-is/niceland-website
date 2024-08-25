import React from "react";

const Download = (props) => {

	function handleWindowsClick() {
		window.open("https://github.com/tunnels-is/NicelandVPN/releases/download/v2.2.0/NicelandVPN-Windows-app.exe", '_blank');
	}

	function handleMacClick() {
		window.open('https://github.com/tunnels-is/NicelandVPN/releases/download/v2.2.0/NicelandVPN-MacOS.zip', '_blank');
	}

	function handleLinuxClick() {
		window.open("https://github.com/tunnels-is/NicelandVPN/releases/latest", '_blank');
	}

	return (
		<div id="download" className={`download grid-row-${props.row} inherit-grid`}>

			<div className="download-title font-section-title">
				Download Niceland
			</div>
			<div className="subtitle font-section-subtitle">

				<a target="_blank" href="https://github.com/tunnels-is/nicelandvpn-desktop/releases/latest">
					Click here for all download links
				</a>

			</div>

			<div className="s1 box box-shadow" onClick={handleWindowsClick} style={{ cursor: 'pointer' }}>
				<img className="icon" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-win11.svg"></img>
				<div className="title">
					Windows
				</div>
			</div>
			<div className="s2 box box-shadow" onClick={handleMacClick} style={{ cursor: 'pointer' }}>
				<img className="icon" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/mac.svg"></img>
				<div className="title">
					MacOS
				</div>
			</div>

			<div className="s3 box box-shadow" onClick={handleLinuxClick} style={{ cursor: 'pointer' }}>
				<img className="icon" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-linux.png"></img>
				<div className="title">
					Linux
				</div>
			</div>

		</div >
	);
}

export default Download;
