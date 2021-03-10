import React, { Component } from 'react';

class Section3 extends Component{
    render(){
        return(
           <section id="contract">
           <div className="container section3">
           <hr/>
           <div className="row">
             <div className="col-lg-6 mt-3 mb-3" data-aos="fade-right"
             data-aos-offset="200"
             data-aos-easing="ease-in-sine">
             <div className="info">
             <h3>Smart Contract Info </h3>
             <ul class="info-list">
             <li><span>Smart contract address</span><span><a href="#contractAddress" target="_blank">TLgzJvHD...</a></span></li>
             <li><span>Total TRX deposits all time</span><span>--- TRX</span></li>
             <li><span>Smart contract balance</span><span>--- TRX</span></li>
             <li><span>Amount withdrawn by members</span><span>--- TRX</span></li>
            
             <li><span>Referred by</span><span>---</span></li>
             <li></li>
             <li></li>
             <li></li></ul>
             </div>
             </div>
             <div className="col-lg-6 mt-3 mb-3" data-aos="fade-left"
             data-aos-offset="200"
             data-aos-easing="ease-in-sine">
             <div className="info">
             <h3>Personal Statistic </h3>
             <ul className="info-list">
             <li><span>Your address</span><span>---</span></li>
             <li><span>Next income countdown</span><span>17:48:26</span></li>
             <li><span>300% income limit remain</span><span>--- TRX</span></li>
             <li><span>Daily income 1%</span><span>--- TRX</span></li>
             <li><span>Direct referral income</span><span>--- TRX</span></li>
           
             <li><span>Income withdrawn to wallet</span><span>--- TRX</span></li>
           
             </ul>
             </div>
           
           </div>
           </div>
           </div>
           </section>
        )
    }
}

export default Section3;