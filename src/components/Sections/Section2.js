import React, { Component } from 'react';

class Section2 extends Component{
    render(){
        return(
            <section>
                <div className="container">
                <hr/>
                       <div className="row justify-content-center">
                           <div className="col-lg-5 box">
                                   <h2>Your Wallet Balance</h2>
                                   <div className="amnt w-75 text-center m-auto">
                                   --amount--
                                   </div>
                                   <div className="join-now">
                                    <h3>Join Now</h3>
                                    <input type="text" className="form-control w-75 text-center m-auto mb-2" placeholder="--amount--"></input>
                                    <span>Min 100 TRX</span>
                                    <div className="btnContainer">
                                       <button type="button" className="btn btn-primary m-1" >100 TRX</button>
                                       <button type="button" className="btn btn-primary m-1" >500 TRX</button>
                                       <button type="button" className="btn btn-primary m-1" >1000 TRX</button>
                                       <button type="button" className="btn btn-primary m-1" >10K TRX</button>
                                       <button type="button" className="btn btn-primary m-1" >50K TRX</button>
                                       <button type="button" className="btn btn-primary m-1" >100K TRX</button>
                                    </div>
                                </div>
                           </div>
                            <div className="col-lg-5 box">
                            <h2>Your Wallet Balance</h2>
                            <div className="amnt w-75 text-center m-auto">
                                referral link
                            </div>
                            <button type="button" className="btn btn-primary m-2 copybtn">Copy Link</button>
                                <div className="reward-info">
                                    <h3>Referral Rewards</h3>
                                    <ul>
                                    <li>First Level<span>10%</span></li>
                                    <li>Second Level<span>4%</span></li>
                                    <li>Third Level<span>2%</span></li>
                                    <li>Fourth Level<span>1%</span></li>
                                    </ul>
                                </div>
                            </div>
                       </div>   

                       <div className="row w-options">
                         <div className="col-lg-12">
                         <h3>Withdrawal Options</h3>
                         </div>
                            <div className="col-lg-4 col-md-6 w-option">
                                  <div className="content">
                                  <button type="button" className="btn"> 100% Reinvest</button>
                                   
                                  </div>
                                  <p>Get 20% Bonus</p>
                            </div>
                            <div className="col-lg-4 col-md-6 w-option">
                                    <div className="content">
                                    <button type="button" className="btn">  50/50 Reinvest</button>
                                   
                                    </div>
                                    <p>50% Reinvest</p>
                            </div>
                            <div className="col-lg-4 col-md-6 w-option">
                                    <div className="content">
                                    <button type="button" className="btn">
                                    Withdraw All
                                    </button>
                                </div>
                                <p>Pay 20% Fee</p>
                            </div>
                            <div className="col-lg-12 mt-2">
                                <p>Tron Network fee 40-60 trx extra</p>
                            </div>
                       </div>
                </div>
            </section>
                       
       
        )
    }
}

export default Section2;