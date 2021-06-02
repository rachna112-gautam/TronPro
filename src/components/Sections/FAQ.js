import React, { Component } from 'react';

class FAQ extends Component{
    render(){
        return (
          <section id="faqs">
            <div className="container ">
              <hr />
              <h3>Frequently Asked Questions</h3>
              <div className="accordion row  mt-4" id="mainAccordion">
                <div className="col-lg-6">
                  <div className="card" data-aos="flip-up">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          What is bnbsmart.fund investment project?
                        </button>
                      </h2>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse "
                      aria-labelledby="headingOne"
                      data-parent="#mainAccordion"
                    >
                      <div className="card-body">
                        The bnbsmart.fund is a smart contract investment project
                        runs on BSC blockchain, which works completely
                        decentralized. bnbsmart.fund smart contract runs by
                        community sharing system. Shared fund distribution
                        system controls the project with 100% transparency,
                        verified and audited contract. As decentralized project
                        nobody can control or modify the project including the
                        developers. So the investor community will drive the
                        project and earn 300% return with up to 5% daily
                        depending up on the smart contract balance. The more
                        contract balance the more daily retur
                      </div>
                    </div>
                  </div>
                  <div className="card" data-aos="flip-up">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How can I invest in bnbsmart.fund smart contract
                          project?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#mainAccordion"
                    >
                      <div className="card-body">
                        First open https://bnbsmart.fund website. Then connect
                        your wallet. We recommend Metamask wallet. You must
                        select the bsc mainnet in metamask and fill enough BNB
                        in the wallet.
                        <br />
                        After connecting the wallet, contract automatically
                        shows your wallet address and your BNB balance.
                        <br />
                        If you not familiar with how to link BSC network with
                        Metamask please click the below link
                        <br />
                        Here you have the clear answer how to connect BSC to
                        Metamask
                        https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain
                        <br />
                        After connecting your wallet you can select the amount
                        of BNB you want to invest in the invest column. After
                        that conform and accept the BSC network fee and complete
                        the investment. You can check your all statistics and
                        contract details in the website and do reinvest or
                        withdraw your profit daily.
                        <br/>
                      </div>
                    </div>
                  </div>
                  <div className="card" data-aos="flip-up">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          How much return I get from bnbsmart.fund??
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#mainAccordion"
                    >
                      <div className="card-body">
                        You can get 300% return for your investment.
                        <br />
                        Eg: if Mr. John invests 10 BNB in https://bnbsmart.fund
                        he will get 30 BNB as return.
                        <br />
                        This means John’s 300% splits as….
                        <br />
                        30 BNB (TOTAL RETURN) = 10 BNB (CAPITAL) + 20 BNB
                        (PROFIT)
                      </div>
                    </div>
                  </div>
                  <div className="card" data-aos="flip-up">
                    <div className="card-header" id="headingFour">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          How daily ROI varies from 1% to 5%?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#mainAccordion"
                    >
                      <div className="card-body">
                        It’s simple. The more active contract balance is the
                        more daily ROI you get.
                        <br />
                        • Up to 500 BNB in contract balance, the daily ROI is 1%
                        <br />
                        • From 500.01 to 1000 BNB, daily ROI is 2%
                        <br />
                        • From 1000.01 to 2000 BNB, daily ROI is 3% <br />
                        • From 2000.01 to 4000 BNB, daily ROI is 4%
                        <br />• Over 4000.01 BNB in contract balance, the daily
                        ROI is 5%
                      </div>
                    </div>
                  </div>
                  <div className="card" data-aos="flip-up">
                    <div className="card-header" id="headingFive">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          How can I withdraw or reinvest?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#mainAccordion"
                    >
                      <div className="card-body">
                        There are three options for withdrawing or reinvesting
                        daily profit.
                        <br />
                        a. 100% reinvest get 20% bonus You can reinvest 100% of
                        your profit and get 20% bonus.
                        <br />
                        Eg: Your withdrawal balance is 2 BNB and if you reinvest
                        100% you get 0.4 BNB extra bonus. Total 2.4 BNB. This
                        investment also start makes profit for you as separate
                        investment and expire after reaching 300% return.
                        <br />
                        b. 50/50 reinvest 50% of your withdrawal balance will
                        reinvest and balance 50% will withdraw to your wallet.
                        <br />
                        c. 100% withdraw You can withdraw all withdrawal balance
                        but you have to pay 20% fee (not network fee) <br />
                        Eg: If your withdrawal balance is 2 BNB and if you done
                        100% withdrawal you get 1.6 BNB in your wallet This fee
                        deduction is done by smart contract and coded for the
                        long-term sustainability of the contract. Also please
                        note you have to keep small amount of BNB as network
                        fee.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" data-aos="flip-up">
                    <div className="card-header" id="headingSix">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          Can I get Referral earning?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      aria-labelledby="headingSix"
                      data-parent="#mainAccordion"
                    >
                      <div className="card-body">
                        Yes, off course. After making first investment you get
                        your referral link. And with this link you can refer
                        your friends and relatives and also through social media
                        you can earn good commission
                        <ul className="mt-3 fqa6-list">
                          Refferal Rewards
                          <li>1st level = 10%</li>
                          <li>2nd level = 4%</li>
                          <li>3rd level = 2%</li>
                          <li>4th level = 1%</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card" data-aos="flip-up">
                    <div className="card-header" id="headingSeven">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven"
                        >
                          Is there any extra benefit for investing this project?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      aria-labelledby="headingSeven"
                      data-parent="#mainAccordion"
                    >
                      <div className="card-body">
                        Yes, you can get huge extra rewards, daily bonuses, give
                        away, AMA CONTESTS, SUPER SUNDAY BONANZA, and above all
                        that you will get GHEE TOKEN AIRDROP, which may be 5x
                        your investment!
                      </div>
                    </div>
                  </div>
                  <div className="card" data-aos="flip-up">
                    <div className="card-header" id="headingEight">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseEight"
                          aria-expanded="false"
                          aria-controls="collapseEight"
                        >
                          What is GHEE TOKEN AIRDROP and how can I get this
                          airdrop?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseEight"
                      className="collapse"
                      aria-labelledby="headingEight"
                      data-parent="#mainAccordion"
                    >
                      <div className="card-body">
                        www.bnbsmart.fund is only the foundation project or tip
                        of the ice berg. Our main project is GHEE FINANCE
                        project. YIELD FARMING, TOKEN SWAP, IDO Launch PAD, NFT
                        Auction place are coming under GHEE FINANCE. GHEE TOKEN
                        is the utility token for all these project which has
                        multiple use cases. Anybody who invests minimum 0.35 BNB
                        in https://www.bnbsmart.fund project can be eligible for
                        GHEE TOKEN AIRDROP.
                      </div>
                    </div>
                  </div>
                  <div className="card" data-aos="flip-up">
                    <div className="card-header" id="headingNine">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseNine"
                          aria-expanded="false"
                          aria-controls="collapseNine"
                        >
                          Is there any minimum Deposit & Withdrawal limit?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseNine"
                      className="collapse"
                      aria-labelledby="headingNine"
                      data-parent="#mainAccordion"
                    >
                      <div className="card-body">
                        Yes, minimum deposit and withdrawal amount is 0.01BNB.
                        <br />
                        For the eligibility of Launching bonus and GHEE token
                        airdrop you must invest minimum 0.35 BNB
                      </div>
                    </div>
                  </div>
                  <div className="card" data-aos="flip-up">
                    <div className="card-header" id="heading10">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapse10"
                          aria-expanded="false"
                          aria-controls="collapse10"
                        >
                          How can I contact for any support?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse10"
                      className="collapse"
                      aria-labelledby="heading10"
                      data-parent="#mainAccordion"
                    >
                      <div className="card-body">
                        We have good support system, which you can find in two
                        ways
                        <br />
                        You can directly send support queries to
                        admin@bnbsmart.fund
                        <br />
                        Or you can connect through our telegram channel
                        https://t.me/bnbsmartfund
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default FAQ;