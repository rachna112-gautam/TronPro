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
	
	useEffect(() => {
		AOS.init({
			duration: 2000
		});
		AOS.refreshHard();
	}, []);

	

	return (
		<div className="main">
			<CookieConsent
				location="bottom"
				buttonText="Accept"
				cookieName="myCookie"
				style={{ background: "#2B373B" }}
				buttonStyle={{ color: "#fff", fontSize: "17px" }}
				expires={150}
				enableDeclineButton
			>
				This website uses cookies to ensure you get the best experience on our website.
			</CookieConsent>

			<BlockchainProvider />

			<Header/>
			<Section1 />
			<Section2/>
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
