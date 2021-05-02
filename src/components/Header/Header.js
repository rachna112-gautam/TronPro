import React, { useState, useEffect } from 'react';
import Logo from './../../images/logo.png';
import { connect } from 'react-redux';

const Header = (props) => {
	const [address, setAddress] = useState();
	useEffect(
		() => {
			if (props.account) {
				console.log('address---> in header', props.account);
				setAddress(props.account.address);
			}
		},
		[props.account]
	);
	return (
		<header>
			<div classname="main-nav">
				<div className="container-fluid px-0">
					<nav className="navbar navbar-expand-lg navbar-dark container">
						<a className="navbar-brand" href="#home">
							<img src={Logo} alt="Trons Pro" className="d-inline-block align-top logo" />
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

						<div className="collapse navbar-collapse main-nav-links" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto ml-auto">


								<li className="nav-item">
									<a className="nav-link" href={
										props.contractData ? (
											`https://bscscan.com/address/${props.contractData.contractAddress}`
										) : (
											'https://bscscan.com/address/'
										)
									}
										target="_blank"
										rel="noreferrer">
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
									<a href={address ? `https://bscscan.com/address/+ ${address}` : "https://bscscan.com/"} target="_blank" rel="noreferrer">{address ? address.slice(0, 5) + "..." : "loading.."}</a>
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
		account: state.account
	};
};


export default connect(mapStateToProps)(Header);
