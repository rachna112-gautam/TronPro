import React from 'react';
import Logo from './../../images/logo.png';
const Footer = () => {
    return(
        <footer class="py-2">
    <div class="container">
      <hr/>
      <div class="row">
        <div class="col-md-4 logo">
          <a href="#">
            <img src={Logo} alt="Tron Pro" class="d-block m-auto m-md-0 " />
          </a>
        </div>
        <div class="col-md-4 align-self-center">
          <p class="text-white copyright-text text-center">
            Copyright ©2021 Tron Pro, All Rights Reserved.
          </p>
        </div>
        <div class="col-md-4 align-self-center">
          <ul class="nav justify-content-center footer-links">

            <li class="nav-item">
              <a class="nav-link" href="#youtube" target="_blank">Youtube</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contract" target="_blank">Contract</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    )
}

export default Footer;