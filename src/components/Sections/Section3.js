import React, { Component } from 'react';
import { connect } from 'react-redux';

const Section3 = (props) => {
	return (
		<section id="contract">
			<div className="container section3">
				<hr />
				<div className="row">
					<div
						className="col-lg-6 mt-3 mb-3"
						data-aos="fade-right"
						data-aos-offset="200"
						data-aos-easing="ease-in-sine"
					>
						<div className="info">
							<h3>Smart Contract Info </h3>
							<ul class="info-list">
								<li>
									<span>Smart contract address</span>
									<span>
										<a
											href={
												props.contractData ? (
													`https://shasta.tronscan.org/#/contract/${props.contractData
														.contractAddress}`
												) : (
													'https://shasta.tronscan.org'
												)
											}
											target="_blank"
										>
											{props.contractData ? (
												props.contractData.contractAddress.slice(0, 7) + '...'
											) : (
												'0x'
											)}
										</a>
									</span>
								</li>
								<li>
									<span>Total TRX deposited</span>
									<span>{props.contractData ? props.contractData.totalTRXDeposit : 0} TRX</span>
								</li>
								<li>
									<span>Smart contract balance</span>
									<span>{props.contractData ? props.contractData.contractBalance : 0} TRX</span>
								</li>
								<li>
									<span>Total TRX withdrawn</span>
									<span>{props.contractData ? props.contractData.totalAmountWithdrawn : 0} TRX</span>
								</li>
								<li>
									<span>Total TRX ReInvested</span>
									<span>{props.contractData ? props.contractData.totalTRXReInvested : 0} TRX</span>
								</li>
								<li>
									<span>Referred by</span>
									<span>
										<a
											href={
												props.personalData ? (
													`https://shasta.tronscan.org/#/contract/${props.personalData
														.account}`
												) : (
													'https://shasta.tronscan.org'
												)
											}
											target="_blank"
										>
											{props.personalData ? (
												props.personalData.referredBy.slice(0, 7) + '...'
											) : (
												'0x'
											)}
										</a>
									</span>
								</li>
								<li />
								<li />
								<li />
								<li />
								<li />
								<li />
								<li />
								<li />
								<li />
							</ul>
						</div>
					</div>
					<div
						className="col-lg-6 mt-3 mb-3"
						data-aos="fade-left"
						data-aos-offset="200"
						data-aos-easing="ease-in-sine"
					>
						<div className="info">
							<h3>Personal Statistic </h3>
							<ul className="info-list">
								<li>
									<span>Your address</span>

									<span>
										<a
											href={
												props.personalData ? (
													`https://shasta.tronscan.org/#/contract/${props.personalData
														.account}`
												) : (
													'https://shasta.tronscan.org'
												)
											}
											target="_blank"
										>
											{/* {props.personalData.account ? props.personalData.account.slice(0, 7) + '...' : '0x'} */}
										</a>
									</span>
								</li>
								<li>
									<span>Next income countdown</span>
									<span>17:48:26</span>
								</li>
								<li>
									<span>Active Amount</span>
									<span>{props.personalData ? props.personalData.activeInvestments : 0} TRX</span>
								</li>

								<li>
									<span>Total Invested Amount</span>
									<span>{props.personalData ? props.personalData.userTotalInvestedAmount : 0} TRX</span>
								</li>

								<li>
									<span>Total ReInvested Amount</span>
									<span>{props.personalData ? props.personalData.userTotalReInvestedAmount : 0} TRX</span>
								</li>
								<li>
									<span>Daily income 1%</span>
									<span>{props.personalData ? props.personalData.roi : 0} TRX</span>
								</li>
								<li>
									<span>Reward Earned </span>
									<span>{props.personalData ? props.personalData.reInvestRewardEarned : '0x'} TRX</span>
								</li>
								<li>
									<span>Total ReInvested Amount</span>
									<span>{props.personalData ? props.personalData.userTotalReInvestedAmount : 0} TRX</span>
								</li>
								<li>
									<span>Income withdrawn to wallet</span>
									<span>{props.personalData ? props.personalData.withdrawnAmount : '0x'} TRX</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		personalData: state.personalData,
		contractData: state.contractData
	};
};

export default connect(mapStateToProps)(Section3);
