import React, { Component } from 'react';
import Logo from './../../images/logo.png';
class Header extends Component{
    render(){
        return(
            <header>
            <div classname="main-nav">
            <div className="container px-0">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="#home">
                <img
                  src={Logo}
                  alt="Trons Pro"
                  className="d-inline-block align-top logo"
                />
               
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
                <span className="navbar-toggler-icon"></span>
              </button>
      
              <div className="collapse navbar-collapse main-nav-links"  id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                 
                  <li className="nav-item ">
                    <a
                      className="nav-link dropdown"
                      href="#pdf"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      PDF
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a
                        className="dropdown-item"
                        href="https://tronflow.net/tronflowes.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        SPANISH
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://tronflow.net/tronflow.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ENGLISH
                      </a>
                    </div>
                  </li>
                  
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://tronscan.org/#/contract/TFrBVjdpsuWQUMtjFpMxhUKg2q3oa6rgGv"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Contract
                    </a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="#user-sec">
                   FAQ
                  </a>
                </li>
               
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link "
                      href="#Telegram"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Telegram
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a
                        className="dropdown-item"
                        href="https://t.me/tronflow_es"
                        target="_blank"
                        rel="noreferrer"
                      >
                        SPANISH
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://t.me/tronflowofficial"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ENGLISH
                      </a>
                    </div>
                  </li>
                
                </ul>
                <div className="connect-btn">
                  <button id="address" className="btn">
                    Connect your wallet
                  </button>
                </div>
              </div>
            </nav>
          </div>
          </div>
            </header>
        )
    }
}

export default Header;