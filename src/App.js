import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Section1 from './components/Sections/Section1';
import Section2 from './components/Sections/Section2';
import Section4 from './components/Sections/Section4';
import Footer from './components/Footer/Footer';
import Section3 from './components/Sections/Section3';
import FAQ from './components/Sections/FAQ';
import BlockchainProvider from './components/BlockchainProvider/index.js';
import { connect } from 'react-redux';
import 'aos/dist/aos.css';
import AOS from 'aos';

const App = (props) => {
	const [ address, setAddress ] = useState('loading...');
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
		[ props.account ]
	);

	return (
    <div className="main">
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
