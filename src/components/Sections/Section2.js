import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from 'reactstrap';
// import "bootstrap/dist/css/bootstrap.min.css";

const Section2 = (props) => {
	const [ joinValue, setJoinValue ] = useState(0);
	const [ copySuccess, setCopySuccess ] = useState('');
	const [ refLink, setRefLink ] = useState();
	const [ walletAddress, setWalletAddress ] = useState(false);
	const [ ref, setRef ] = useState('TYPGbv47eFGBCDvjrPZNgXs3JfrqPMTWS9');

	const joinHandle = (trx) => {
		setJoinValue(joinValue + trx);
	};
	const resetInput = () => {
		setJoinValue(0);
	};

	useEffect(
		() => {
			let url = window.location.href;
			let params = new URL(url).searchParams;
			localStorage.setItem('ref', params.get('ref'));
			setRef(localStorage.getItem('ref'));
		},
		[ window.location.href ]
	);

	useEffect(() => {
		if (props.address !== 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t') {
			setWalletAddress(props.account);
			setRefLink(getMyRefLink(props.address));
			
		}
	}, []);

	useEffect(
		() => {
			if (props.account) {
				setWalletAddress(props.account.address);
				setRefLink(getMyRefLink(props.address));
			}

			console.log('pros.accout', props.address);
		},
		[ props.address ]
	);

	const deposit = async () => {
		setJoinValue(0);
		if (!props.contract) {
			alert('contract not loaded!');
			return;
		}
		await props.contract.methods
			.invest(props.personalData.account)
			.send({ from: props.personalData.account, callValue: joinValue * 10 ** 6 });
	};

	const withdrawAll = async () => {
		if (!props.contract) {
			alert('contract not loaded');
			return;
		}
		const amount = props.personalData.roi;
		console.log('amount..', amount);
		const minAmnt = 100;
		if (amount < minAmnt) {
			toast.error('Must have minimum 100 TRX ROI');
			return;
		}
		await props.contract.methods.withdrawAll().send({ from: props.personalData.walletAddress });
	};

	const getMyRefLink = (addr) => {
		return 'https://tronpro.com/?ref=' + addr;
	};

	// console.log("personal data",props.personalData)

	function copyToClipboard(e) {
		var textField = document.createElement('textarea');
		textField.innerText = refLink;
		document.body.appendChild(textField);
		textField.select();
		document.execCommand('copy');
		textField.remove();

		setCopySuccess('Copied!');
		toast.success('Referral Link Copied');
	}

	const reInvestAll = async () => {
		if (!props.contract) {
			alert('contract not loaded');
			return;
		}
		const amount = props.personalData.roi;
		console.log('amount..', amount);
		const minAmnt = 200;
		if (amount < minAmnt) {
			toast.error('Must have minimum 100 TRX');
			return;
		}
		await props.contract.methods.reinvestAll().send({ from: props.personalData.walletAddress });
	};

	const withdrawReInvest = async () => {
		if (!props.contract) {
			alert('contract not loaded');
			return;
		}
		const amount = props.personalData.roi;
		console.log('amount..', amount);
		const minAmnt = 200;
		if (amount < minAmnt) {
			toast.error('Must have minimum 200 TRX');
			return;
		}
		await props.contract.methods.withdraw50Percent().send({ from: props.personalData.walletAddress });
	};

	return (
		<section>
			<div className="container">
				<hr />
				<div className="row justify-content-center">
					<div className="col-lg-5 box" data-aos="fade-right">
						<h2>Your Wallet Balance</h2>
						<div className="amnt w-75 text-center m-auto">
							{props.personalData ? props.personalData.walletBalance : 0}
						</div>
						<div className="join-now">
							<h3>Join Now</h3>
							<div class="input-group w-75 m-auto ">
								<input
									type="text"
									class="form-control text-center"
									placeholder="--amount--"
									value={joinValue}
									aria-label="Amount"
								/>
								<div class="input-group-append w-25">
									<span class="input-group-text">TRX</span>
								</div>
							</div>

							<span className="minanmt">Min 100 TRX</span>
							<div className="btnContainer">
								<button type="button" className="btn btn-primary m-1" onClick={() => joinHandle(100)}>
									100 TRX
								</button>
								<button type="button" className="btn btn-primary m-1" onClick={() => joinHandle(500)}>
									500 TRX
								</button>
								<button type="button" className="btn btn-primary m-1" onClick={() => joinHandle(1000)}>
									1000 TRX
								</button>
								<button type="button" className="btn btn-primary m-1" onClick={() => joinHandle(10000)}>
									10K TRX
								</button>
								<button type="button" className="btn btn-primary m-1" onClick={() => joinHandle(50000)}>
									50K TRX
								</button>
								<button
									type="button"
									className="btn btn-primary m-1"
									onClick={() => joinHandle(100000)}
								>
									100K TRX
								</button>
							</div>
							<div className="rdbtn flex-wrap">
								<button type="button" className="btn reset m-1" onClick={() => resetInput()}>
									Reset
								</button>
								<button
									type="button"
									className="btn deposit  m-1"
									onClick={() => {
										deposit();
									}}
								>
									Deposit
								</button>
							</div>
						</div>
					</div>
					<div className="col-lg-5 box" data-aos="fade-left">
						<h2>Your Referral Link</h2>
						<Input
							onChange={(t) => {
								// setDepositAmount(t.target.value);
							}}
							type="text"
							name="amount"
							id="amount"
							value={refLink}
							className="ref-input"
							placeholder="Enter Amount"
						/>
						<button type="button" className="btn btn-primary m-2 copybtn" onClick={copyToClipboard}>
							Copy Link
						</button>

						<div className="reward-info">
							<h3>Referral Rewards</h3>
							<ul>
								<li>
									First Level<span>10%</span>
								</li>
								<li>
									Second Level<span>4%</span>
								</li>
								<li>
									Third Level<span>2%</span>
								</li>
								<li>
									Fourth Level<span>1%</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="mt-4">
					<h3>Withdrawal Options</h3>
				</div>
				<div className=" w-options">
					<div className="w-option" data-aos="zoom-in-up">
						<div className="content">
							<button
								type="button"
								className="btn"
								onClick={() => {
									reInvestAll();
								}}
							>
								{' '}
								100% Reinvest
							</button>
							<small>Min amount should be 100 TRX</small>
						</div>

						<p>Get 20% Bonus</p>
					</div>
					<div className="w-option" data-aos="zoom-in-up">
						<div className="content">
							<button
								type="button"
								className="btn"
								onClick={() => {
									withdrawReInvest();
								}}
							>
								{' '}
								50/50 Reinvest
							</button>
							<small>Min amount should be 200 TRX</small>
						</div>
						<p>50% Reinvest</p>
					</div>
					<div className=" w-option" data-aos="zoom-in-up">
						<div className="content">
							<button
								type="button"
								className="btn"
								onClick={() => {
									withdrawAll();
								}}
							>
								Withdraw All
							</button>
							<small>Min amount should be 100 TRX</small>
						</div>

						<p>Pay 20% Fee</p>
					</div>
				</div>
				<div className="">
					<p>Tron Network fee 40-60 trx extra</p>
				</div>
			</div>
			<ToastContainer />
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		personalData: state.personalData,
		contract: state.contract,
		account: state.account
	};
};

export default connect(mapStateToProps)(Section2);
