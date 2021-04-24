import React,{useState,useEffect} from 'react';
import Logo from './../../images/logo.png';
import { connect } from 'react-redux';
const Header = (props) => {
	const [address,setAddress]=useState("0x");
	useEffect(() => {
		if(props.account){
        setAddress(props.account);
		}
console.log("address  in header is---->>", props.personalData);
		
	}, [props.contract])
	
	return (
    <header>
      <div classname="main-nav">
        <div className="container-fluid px-0">
          <nav className="navbar navbar-expand-lg navbar-dark container">
            <a className="navbar-brand" href="#home">
              <img
                src={Logo}
                alt="Trons Pro"
                className="d-inline-block align-top logo"
              />
              <span className="site-title">Trons.Pro</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse main-nav-links"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto ml-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={
                      props.contractData
                        ? `https://shasta.tronscan.org/#/contract/${
                            address
                          }`
                        : "https://shasta.tronscan.org"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contract
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faqs">
                    FAQ
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link "
                    href="https://t.me/trons_officalgroup"
                    role="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Telegram
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="https://www.facebook.com/groups/tronsoffical/"
                    target="_blank"
                    rel="noreferrer"
                    id="navbarDropdown"
                    role="button"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
              <div className="wallet text-center">
                <span className="ywa-title">Your Wallet Address</span>
                <span className="wallet-address">
                  <a
                    href={
                      `https://shasta.tronscan.org/#/address/`
                      
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.personalData?props.personalData.account:"loading"}
                  </a>
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};


const mapStateToProps = (state) => {
	return { 
		contractData: state.contractData,
		address:state.account,
		contract:state.contract,
		personalData:state.personalData
	     };
};


export default connect(mapStateToProps)(Header);
