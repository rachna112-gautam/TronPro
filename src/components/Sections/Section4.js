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
									<li>No presale and Private Sale</li>
									<li>No Team Token</li>
									<li>IDO Coming</li>
									<li>GHEE pad - IDO Launch Pad</li>
									<li>GHEE Swap - Yield Farming And Swap </li>
									<li>GHEE Gallery - NFT Marketplace</li>
									<li>Staking Rewards And Liquidity Pool Rewards</li>
									<li>Invest minimum 0.35 bnb get GHEE airdrop</li>
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

									<li>5% over 4000 BNB in Contract Balance</li>
									<li>4% Upto 4000 BNB in Contract Balance</li>
									<li>3% Upto 2000 BNB in Contract Balance</li>
									<li>2% Upto 1000 BNB in Contract Balance</li>
									<li>1% Upto 500 BNB in Contract Balance</li>
								</ul>
								<div style={{ marginLeft: '-1rem' }}>
									<strong>
										<span style={{ color: '#f29412' }}>Total return limited to 300%</span>
										<br />
										Eg: 10 bnb investment will get total return 30 bnb<br />
										Total 30 = 10 (capital) + 20 (profit)
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
