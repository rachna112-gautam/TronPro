import React, { Component } from 'react';
import Slide from './../../images/slide.jpg';
class Section1 extends Component{
    render(){
        return(
           <section>
           <div className="section1 container">
           <div className="sec-title mb-4">
             <h1>Earn <span className="color1">300%</span> Return Upto <span className="color2">6%</span> Daily ROI<br/>
             <span className="color3">5X</span> your investment with <span className="color4">XPRO</span> token airdrop</h1>
           </div>
           <div className="row mb-5">
            <div className="col-lg-6 mb-2">
            <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a href="#slide1">
                  <img
                    src={Slide}
                    className="d-block w-100"
                    alt="..."
                  />
                </a>
              </div>

              <div className="carousel-item">
                <a href="#slide2">
                  <img
                  src={Slide}
                    className="d-block w-100"
                    alt="..."
                  />
                </a>
              </div>

              <div className="carousel-item">
                <a href="#slide3">
                  <img
                  src={Slide}
                    className="d-block w-100"
                    alt="..."
                  />
                </a>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
            </div>
            <div className="col-lg-6 mb-1">
            <div class="embed-responsive embed-responsive-16by9">
            <iframe title="Trons pro video" class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
          </div>
            </div>
           </div>
           <div className="row my-4 top-btns">
           <div className="col-lg-4">
             <div className="info-box">
               <h2>Contract Balance</h2>
               <div className="amnt">
                  1000000
               </div>
               <button className="btn">Check Contract</button>
             </div>
           </div>
           <div className="col-lg-4">
           <div className="info-box">
               <h2>Today's ROI</h2>
               <div className="amnt">
                  1%
               </div>
               <button className="btn">Reset Time [00.00.00]</button>
             </div>
           </div>
           <div className="col-lg-4">
           <div className="info-box">
           <h2>Total Investors</h2>
           <div className="amnt">
              10000
           </div>
           <button className="btn">Join Telegram</button>
         </div>
           </div>
           </div>
           </div>
           </section>
        )
    }
}

export default Section1;