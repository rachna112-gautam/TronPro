import React, { Component } from 'react';

class Section4 extends Component {
	render() {
		return (
			<section>
				<div className="container section4">
					<hr />
					<h3>What we Have...</h3>
					<ul className="wwh">
						<li>Long Term Project</li>
						<li>No Back Doors</li>
						<li>Powered by Verified Smart Contract</li>
						<li>Controlled by Strong Community</li>
						<li>Huge Airdrop of GHEE Yield Farming Token</li>
						<li>Attractive Referral System</li>
					</ul>
					<div className="row">
						<div className="col-lg-6">
							<h3> GHEE Token Airdrop</h3>
							<div className="airdrop">
								<ul>
									<li>No presale</li>
									<li>No Private Sale</li>
									<li>No Team Token</li>
									<li>IDO Coming</li>
									<li>Staking Rewards</li>
									<li>Liquidity Pool Rewards</li>
									<li>Yield Farming Rewards</li>
									<li>DEX And Token Swap</li>
									<li>Invest minimum 3000 trx get GHEE airdrop</li>
								</ul>
								<div style={{ marginLeft: '-1rem' }}>
									<strong>The More Contract Balance The Less GHEE Token Created</strong>
								</div>
							</div>
						</div>
						<div className="col-lg-6 daily-roi">
							<h3 className="airdrop-heading">Daily ROI Calculation</h3>
							<div className="airdrop">
								<ul>
									<li>6% Over 50 Million TRX in Contract Balance</li>
									<li>5% Upto 50 Million TRX in Contract Balance</li>
									<li>4% Upto 40 Million TRX in Contract Balance</li>
									<li>3% Upto 30 Million TRX in Contract Balance</li>
									<li>2% Upto 20 Million TRX in Contract Balance</li>
									<li>1% Upto 10 Million TRX in Contract Balance</li>
								</ul>
								<div style={{ marginLeft: '-1rem' }}>
									<strong>
										<span style={{ color: '#f29412' }}>Total return limited to 300%</span>
										<br />
										Eg: 10000 trx investment will get total return 30000 trx<br />
										Total 30000 = 10000 (capital) + 20000 (profit)
									</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Section4;
