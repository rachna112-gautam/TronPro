import React from 'react';
import Logo from './../../images/logo.png';
import pdf from './../../images/edited PDF TRONS.PRO.pdf';
const Header = (props) => {
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
								<li className="nav-item dropdown">
									<a
										className="nav-link "
										href={pdf} target="_blank" rel="noreferrer"
										id="navbarDropdown"
										role="button"

									>
										PDF
									</a>

								</li>

								<li className="nav-item">
									<a className="nav-link" href="#contract">
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
							</ul>
							<div className="wallet text-center">
								<span className="ywa-title">Your Wallet Address</span>
								<span className="wallet-address">
									<a href="#address">{props.address}</a>
								</span>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
