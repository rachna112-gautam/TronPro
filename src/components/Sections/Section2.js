import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from 'reactstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
import Config from '../../Config';
const Section2 = (props) => {
	const [joinValue, setJoinValue] = useState(0);
	// eslint-disable-next-line no-unused-vars
	const [copySuccess, setCopySuccess] = useState('');
	const [refLink, setRefLink] = useState();
	// eslint-disable-next-line no-unused-vars
	const [address, setAddress] = useState();
	const [ref, setRef] = useState("");

	const joinHandle = (bnb) => {
		setJoinValue(joinValue + bnb);
	};
	const resetInput = () => {
		setJoinValue(0);
	};


	useEffect(
		() => {
			if (props.account) {
				console.log('address---> in header', props.account);
				setAddress(props.account.address);
			}
		},
		[props.account]
	);

	useEffect(
		() => {
			let url = window.location.href;
			let params = new URL(url).searchParams;
			localStorage.setItem('ref', params.get('ref'));
			if (localStorage.getItem('ref') !== '') setRef(localStorage.getItem('ref'));
		},
		[window.location.href]
	);

	useEffect(() => {
		if (address) {
			setRefLink(getMyRefLink(address));
		}
	}, [address]);

	const deposit = async () => {
		setJoinValue(0);
		if (!props.contract && !props.personalDatas) {
			alert('contract not loaded!');
			return;
		}
		let entryAmount = joinValue;
		let account = props.personalData.account;

		if (!entryAmount || !account) {
			alert('Entry Amount Invalid!');
			return;
		}
		let url = window.location.href;
		let params = new URL(url).searchParams;
		let _ref = params.get('ref');
		if (_ref === null || _ref === "") {
			_ref = Config.ADMIN_WALLET;
		}
		console.log('_ref', ref);
		props.contract.methods.invest(_ref).send({ from: account, value: entryAmount * 10 ** 18 }).then(() => {
			toast.error('trasaction Successful');
			window.location.reload();
		});
	};

	const withdrawAll = async () => {
		if (!props.contract) {
			alert('contract not loaded');
			return;
		}
		let account = props.personalData.account;
		if (!account) {
			return;
		}
		const amount = props.personalData.roi;
		console.log('amount..', amount);
		const minAmnt = 0.01;
		if (amount < minAmnt) {
			toast.error('Must have minimum 0.01 BNB ROI');
			return;
		}
		props.contract.methods.withdrawAll().send({ from: account, feeLimit: 1000000000 }).then(() => {
			toast.success('trasaction Successful');
		});
	};

	const getMyRefLink = (addr) => {
		return 'https://bnbsmart.fund.com/?ref=' + addr;
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
		let account = props.personalData.account;
		if (!account) {
			return;
		}
		const amount = props.personalData.roi;
		console.log('amount..', amount);
		const minAmnt = 0.01;
		if (amount < minAmnt) {
			toast.error('Must have minimum 0.01 BNB');
			return;
		}
		props.contract.methods.reinvestAll().send({ from: account, feeLimit: 1000000000 }).then(() => {
			toast.success('trasaction Successful');
		});
	};

	const withdrawReInvest = async () => {
		if (!props.contract) {
			alert('contract not loaded');
			return;
		}
		let account = props.personalData.account;
		if (!account) {
			return;
		}
		const amount = props.personalData.roi;
		console.log('amount..', amount);
		const minAmnt = 0.02;
		if (amount < minAmnt) {
			toast.error('Must have minimum 0.02 BNB');
			return;
		}
		props.contract.methods.withdraw50Percent().send({ from: account, feeLimit: 1000000000 }).then(() => {
			toast.success('trasaction Successful')


		});
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
									<span class="input-group-text">BNB</span>
								</div>
							</div>

							<span className="minanmt">Min 0.01 BNB</span>
							<div className="btnContainer">
								<button type="button" className="btn btn-primary m-1" onClick={() => joinHandle(0.01)}>
									0.01 BNB
								</button>
								<button type="button" className="btn btn-primary m-1" onClick={() => joinHandle(0.05)}>
									0.05 BNB
								</button>
								<button type="button" className="btn btn-primary m-1" onClick={() => joinHandle(0.1)}>
									0.1 BNB
								</button>
								<button type="button" className="btn btn-primary m-1" onClick={() => joinHandle(1)}>
									1 BNB
								</button>
								<button type="button" className="btn btn-primary m-1" onClick={() => joinHandle(5)}>
									5 BNB
								</button>
								<button
									type="button"
									className="btn btn-primary m-1"
									onClick={() => joinHandle(10)}
								>
									10 BNB
								</button>
							</div>
							<div className="rdbtn flex-wrap">
								<button
									type="button"
									className="btn deposit  m-1"
									onClick={() => {
										deposit();
									}}
								>
									Deposit
							</button>
								<button type="button" className="btn reset m-1" onClick={() => resetInput()}>
									Reset
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
							<small>Min amount should be 0.01 BNB</small>
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
							<small>Min amount should be 0.02 BNB</small>
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
							<small>Min amount should be 0.01 BNB</small>
						</div>

						<p>Pay 20% Fee</p>
					</div>
				</div>
				<div className="">
					<p>Binance Network fee 0.001-0.005 BNB extra</p>
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
