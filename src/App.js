import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Section1 from './components/Sections/Section1';
import Section2 from './components/Sections/Section2';
import Section4 from './components/Sections/Section4';
import Footer from './components/Footer/Footer';
import Section3 from './components/Sections/Section3';
class App extends Component {
  render(){
    return(
       <div className="main">
       <Header />
       <Section1 />
       <Section2 />
       <Section3 />
       <Section4 />
       <Footer />
       </div>
    )
  }
}

export default App;