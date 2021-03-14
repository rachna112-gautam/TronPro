import React, { useEffect,useState } from 'react';
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
  const [address,setAddress]=useState("")


// if(props.account.address){
//    address=props.account.address
// }else{
//   address=0
// }
async function getAddress(){
  let address1;
  if(props.account.address){
address1 = await props.account.address;
  }
  else{
    address1="loading"
  }
   
   setAddress(address1)
  // return address;
}


 useEffect(() => {
  AOS.init({
    duration : 2000
  });
  AOS.refreshHard();
  getAddress();
 },[])

 


 


//  console.log("address",props.account)

     
    
    return(
      
       <div className="main">
       <BlockchainProvider/>
       <Header address={address}/>
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
    account: state.account,
    contract:state.contract
  }
}

export default connect(mapStateToProps)(App);