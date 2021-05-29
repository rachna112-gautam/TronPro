import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Section3 = (props) => {
	const [address, setAddress] = useState();
	useEffect(
		() => {
			if (props.account) {
				console.log('address---> in section3', props.account);
				setAddress(props.account.address);
			}
		},
		[props.account]
	);


	return (
		<section id="contract">
			<div className="container section3">
				<hr />
				<div className="row">
					<div className="col-lg-6 mt-3 mb-3" data-aos="fade-right">
						<div className="info">
							<h3>Smart Contract Info </h3>
							<ul class="info-list">
								<li>
									<span>Smart contract address</span>
									<span>
										<a
											href={
												props.contractData ? (
													`https://bscscan.com/address/${props.contractData
														.contractAddress}`
												) : (
													'https://bscscan.com/address'
												)
											}
											target="_blank"
											rel="noreferrer"
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
									<span>Total BNB deposited</span>
									<span>{props.contractData ? props.contractData.totalBNBDeposit : 0} BNB</span>
								</li>
								<li>
									<span>Smart contract balance</span>
									<span>{props.contractData ? props.contractData.contractBalance : 0} BNB</span>
								</li>
								<li>
									<span>Total BNB withdrawn</span>
									<span>{props.contractData ? props.contractData.totalAmountWithdrawn : 0} BNB</span>
								</li>
								<li>
									<span>Total BNB ReInvested</span>
									<span>{props.contractData ? props.contractData.totalBNBReInvested : 0} BNB</span>
								</li>
								<li>

								</li>
								<li />
								<li />
								<li />
								<li />
								<li />
								<li />
							</ul>
						</div>
					</div>
					<div className="col-lg-6 mt-3 mb-3" data-aos="fade-left">
						<div className="info">
							<h3>Personal Statistic </h3>
							<ul className="info-list">
								<li>
									<span>Your address</span>

									<span>
										<a
											href={`https://bscscan.com/address/${address ? address : "https://bscscan.com/address"}`}
											target="_blank"
											rel="noreferrer"
										>
											{address ? address.slice(0, 7) + '...' : "0x"}
										</a>
									</span>
								</li>

								<li>
									<span>Active Amount</span>
									<span>{props.personalData ? props.personalData.activeInvestments : 0} BNB</span>
								</li>

								<li>
									<span>Total Invested Amount</span>
									<span>
										{props.personalData ? props.personalData.userTotalInvestedAmount : 0} BNB
									</span>
								</li>

								<li>
									<span>Daily income</span>
									<span>{props.personalData ? props.personalData.roi : 0} BNB</span>
								</li>
								<li>
									<span>Referral Income Earned</span>
									<span>{props.personalData ? props.personalData.referralIncome : 0} BNB</span>
								</li>

								<li>
									<span>ReInvest Reward Earned </span>
									<span>
										{props.personalData ? props.personalData.reInvestRewardEarned : '0x'} BNB
									</span>
								</li>
								<li>
									<span>Total ReInvested Amount</span>
									<span>
										{props.personalData ? props.personalData.userTotalReInvestedAmount : 0} BNB
									</span>
								</li>
								<li>
									<span>Income withdrawn to wallet</span>
									<span>{props.personalData ? props.personalData.withdrawnAmount : 0} BNB</span>
								</li>
								<li>
									<span>Launch Bonus</span>
									<span>{props.personalData ? props.personalData.launchBonus : 0} BNB</span>
								</li>
								<li>
									<span>Withdrawable Income</span>
									<span>{props.personalData ? props.personalData.withdrawableAmount : 0} BNB</span>
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
		contractData: state.contractData,
		account: state.account
	};
};

export default connect(mapStateToProps)(Section3);
