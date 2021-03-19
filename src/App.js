import BlockchainProvider from './components/BlockchainProvider/index.js';
import CookieConsent, { Cookies } from "react-cookie-consent";
import React, { useEffect, useState } from 'react';
import Section1 from './components/Sections/Section1';
import Section2 from './components/Sections/Section2';
import Section3 from './components/Sections/Section3';
import Section4 from './components/Sections/Section4';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FAQ from './components/Sections/FAQ';
import { connect } from 'react-redux';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './App.css';

const App = (props) => {
	const [address, setAddress] = useState('loading...');
	console.log('hhfhjf', props.contract);
	useEffect(() => {
		AOS.init({
			duration: 2000
		});
		AOS.refreshHard();
	}, []);

	useEffect(
		() => {
			if (props.account) {
				console.log('addrss--->', props.account.address);
				setAddress(props.account.address);
			}
		},
		[props.account]
	);

	return (
		<div className="main">
			<CookieConsent
				location="bottom"
				buttonText="Accept"
				cookieName="myAwesomeCookieName2"
				style={{ background: "#2B373B" }}
				buttonStyle={{ color: "#fff", fontSize: "13px" }}
				expires={150}
				onAccept={() => {
					alert("Accept was triggered by clicking the Accept button");
				}}
				enableDeclineButton
				onDecline={() => {
					alert("nay!");
				}}
			>
				This website uses cookies to ensure you get the best experience on our website. This enables us to understand how you use the site and track any patterns with regards how you are using our website. By using our website you consent to all cookies in accordance with our Cookie Policy.
			</CookieConsent>

			<BlockchainProvider />
			<Header address={address} />
			<Section1 />
			<Section2 address={address} />
			<Section3 />
			<Section4 />
			<FAQ />
			<Footer />
		</div>
	);

};

const mapStateToProps = (state) => {
	return {
		account: state.account,
		contract: state.contract
	};
};

export default connect(mapStateToProps)(App);
