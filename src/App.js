import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Section1 from './components/Sections/Section1';
import Section2 from './components/Sections/Section2';
import Section4 from './components/Sections/Section4';
import Footer from './components/Footer/Footer';
import Section3 from './components/Sections/Section3';
import FAQ from './components/Sections/FAQ';
import BlockchainProvider from "./components/BlockchainProvider/index.js";
import { connect } from 'react-redux';  
import 'aos/dist/aos.css'
import AOS from 'aos';

const App = (props) => {
   console.log('props-->', props.account);
 useEffect(() => {
  AOS.init({
    duration : 2000
  });
  AOS.refreshHard();
 },[])


    
    return(
       <div className="main">
       <BlockchainProvider/>
       <Header address={props.account}/>
       <Section1 />
       <Section2 />
       <Section3 />
       <Section4 />
       <FAQ />
       <Footer />
       </div>
    )
  
}

const mapStateToProps = (state) => {
  return{
    account: state.account.address
  }
}

export default connect(mapStateToProps)(App);