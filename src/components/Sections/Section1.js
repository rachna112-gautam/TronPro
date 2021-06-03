import React from 'react';
import { connect } from 'react-redux';
import Slide1 from './../../images/slide-1.png';
import Slide2 from './../../images/slide-2.png';
import Slide3 from './../../images/slide-3.png';
import Slide4 from "./../../images/slide-4.jpeg";

import pdf from './../../images/edited PDF TRONS.PRO.pdf';
const Section1 = (props) => {
  // const [timerDays, setTimerDays] = useState('00');
  // const [timerHours, setTimerHours] = useState('00');
  // const [timerMin, setTimerMin] = useState('00');
  // const [timerSec, setTimerSec] = useState('00');

  // console.log('contract data', contractData);
  // let interval = useRef();

  // const startTimer = () => {
  // 	const countDownDate = new Date('March 8, 2021 00:00:00').getTime();
  // 	interval = setInterval(() => {
  // 		const now = new Date().getTime();
  // 		const distance = countDownDate - now;
  // 		// const days = Math.floor(distance / (1000*60*60*24));
  // 		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // 		const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // 		const sec = Math.floor((distance % (1000 * 60)) / 1000);

  // 		if (distance < 0) {
  // 			//stop timer
  // 			clearInterval(interval.current);
  // 		} else {
  // 			//update timer
  // 			// setTimerDays(days);
  // 			// setTimerHours(hours);
  // 			// setTimerMin(min);
  // 			// setTimerSec(sec);
  // 		}
  // 	}, 1000);
  // };

  //componentDidMount
  // useEffect(() => {
  // 	startTimer();
  // });

  return (
    <section>
      <div className="section1 container">
        <div className="sec-title mb-4">
          <h1>
            Earn <span className="color1">300%</span> Return Upto{" "}
            <span className="color2">5%</span> Daily ROI
            <br />
            <span className="color3">5X</span> your investment with{" "}
            <span className="color4">GHEE</span> token airdrop
          </h1>
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 mb-2 ">
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
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <a href="#slide1">
                    <img src={Slide1} className="d-block w-100" alt="Slide 1" />
                  </a>
                </div>

                <div className="carousel-item">
                  <a href="#slide2">
                    <img src={Slide2} className="d-block w-100" alt="Slide 2" />
                  </a>
                </div>

                <div className="carousel-item">
                  <a href="#slide3">
                    <img src={Slide3} className="d-block w-100" alt="Slide 3" />
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
                />
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
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 mb-1">
            <img src={Slide4} className="d-block w-100" alt="Slide 1" />
          </div>
        </div>
        <div className="row my-4 top-btns">
          <div className="col-lg-4">
            <div className="info-box">
              <h2>Contract Balance</h2>
              <div className="amnt">
                {props.contractData ? props.contractData.contractBalance : 0}
              </div>
              <a
                className="btn"
                href={
                  props.contractData
                    ? `https://bscscan.com/address/${props.contractData.contractAddress}`
                    : "https://bscscan.com/address/"
                }
                target="_blank"
                rel="noreferrer"
              >
                Check Contract
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="info-box">
              <h2>Today's ROI</h2>
              <div className="amnt">
                {props.contractData ? props.contractData.todaysROI : 0} %
              </div>
              <a className="btn" href={pdf} target="_blank" rel="noreferrer">
                PDF
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="info-box">
              <h2>Total Investors</h2>
              <div className="amnt">
                {props.contractData ? props.contractData.totalInvestors : 0}
              </div>
              <a
                className="btn"
                href="https://t.me/bnbsmartfund1"
                target="_blank"
                rel="noreferrer"
              >
                Join Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { contractData: state.contractData };
};
export default connect(mapStateToProps)(Section1);
