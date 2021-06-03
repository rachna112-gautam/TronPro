import React from 'react';
import Logo from './../../images/logo.png';
import { connect } from 'react-redux';
const Footer = (props) => {
  return (
    <footer class="py-2">
      <div class="container">
        <hr />
        <div class="row">
          <div class="col-md-4 logo">
            <a href="#tronspro">
              <img src={Logo} alt="Binance Pro" class="d-block m-auto m-md-0 " />
            </a>
          </div>
          <div class="col-md-4 align-self-center">
            <p class="text-white copyright-text text-center">
              Copyright ©2021 bnbsmart.fund, All Rights Reserved.
          </p>
          </div>
          <div class="col-md-4 align-self-center">
            <ul class="nav justify-content-center footer-links">
              <li class="nav-item">
                <a class="nav-link" href="https://www.facebook.com/groups/bnbsmartoffical/" target="_blank" rel="noreferrer">Facebook</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#youtube" target="_blank">Youtube</a>
              </li> */}
              {/* <li class="nav-item"> */}
                {/* <a class="nav-link" href={
                  props.contractData ? (
                    `https://shasta.tronscan.org/#/contract/${props.contractData.contractAddress}`
                  ) : (
                    'https://shasta.tronscan.org'
                  )
                }
                  target="_blank"
                  rel="noreferrer" >Contract</a> */}
              {/* </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

const mapStateToProps = (state) => {
  return {
    contract: state.contractData
  }
}

export default connect(mapStateToProps)(Footer);