export default {
	CONTRACT_ADDRESS: '0x2c62D4e33479c5610097aA959d62b60301e93A80',
	ADMIN_WALLET: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
	ABI: [
		{
			inputs: [
				{ internalType: 'address', name: '_platformMarkettingAddr', type: 'address' },
				{ internalType: 'address', name: '_insuranceFundWallet', type: 'address' }
			],
			stateMutability: 'nonpayable',
			type: 'constructor'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'user', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: '_time', type: 'uint256' }
			],
			name: 'NewDeposit',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'user', type: 'address' },
				{ indexed: true, internalType: 'address', name: '_referrer', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: '_time', type: 'uint256' }
			],
			name: 'Newbie',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'referrer', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'referral', type: 'address' },
				{ indexed: true, internalType: 'uint256', name: 'level', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: '_time', type: 'uint256' }
			],
			name: 'RefBonus',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'user', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: '_time', type: 'uint256' }
			],
			name: 'Reinvest',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'address', name: '_user', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: '_amount', type: 'uint256' }
			],
			name: 'ReinvestEvent',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'user', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
			],
			name: 'Withdrawn',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'address', name: '_user', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: '_amount', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: '_lastWithdraw', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: '_curr', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: '_diff', type: 'uint256' }
			],
			name: 'withdrawTest',
			type: 'event'
		},
		{
			inputs: [],
			name: 'activedeposits',
			outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
			stateMutability: 'view',
			type: 'function'
		},
		{ inputs: [], name: 'addValueToContract', outputs: [], stateMutability: 'payable', type: 'function' },
		{
			inputs: [ { internalType: 'address', name: '_insuranceFundWalletAddr', type: 'address' } ],
			name: 'changeInsuranceWallet',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [ { internalType: 'address', name: '_owner', type: 'address' } ],
			name: 'changeOwnerWallet',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [ { internalType: 'address', name: '_platformMarkettingAddr', type: 'address' } ],
			name: 'changePlatformWallet',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'uint256', name: '_amount', type: 'uint256' }
			],
			name: 'checkEligibilityForLaunchingBonus',
			outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
			stateMutability: 'pure',
			type: 'function'
		},
		{
			inputs: [ { internalType: 'address', name: '_user', type: 'address' } ],
			name: 'getActiveDepositsSum',
			outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'getContractBalance',
			outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_user', type: 'address' },
				{ internalType: 'uint256', name: '_index', type: 'uint256' }
			],
			name: 'getDepositsInfo',
			outputs: [
				{ internalType: 'uint256', name: 'amount', type: 'uint256' },
				{ internalType: 'uint256', name: 'start', type: 'uint256' },
				{ internalType: 'uint256', name: 'withdrawn', type: 'uint256' }
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'getPercent',
			outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [ { internalType: 'address', name: '_user', type: 'address' } ],
			name: 'getROI',
			outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [ { internalType: 'address', name: '_user', type: 'address' } ],
			name: 'getWithdrawableAmount',
			outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'insuranceAmount',
			outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [ { internalType: 'address', name: '_ref', type: 'address' } ],
			name: 'invest',
			outputs: [],
			stateMutability: 'payable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'platformMarkettingAmount',
			outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
			stateMutability: 'view',
			type: 'function'
		},
		{ inputs: [], name: 'reinvestAll', outputs: [], stateMutability: 'nonpayable', type: 'function' },
		{
			inputs: [],
			name: 'totalInvested',
			outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'totalReinvest',
			outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'totalUsers',
			outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'totalWithdrawn',
			outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [ { internalType: 'address', name: '', type: 'address' } ],
			name: 'users',
			outputs: [
				{ internalType: 'uint256', name: 'totalInvestedAmount', type: 'uint256' },
				{ internalType: 'uint256', name: 'totalReinvestedAmount', type: 'uint256' },
				{ internalType: 'uint256', name: 'refReward', type: 'uint256' },
				{ internalType: 'uint256', name: 'refRewardEarned', type: 'uint256' },
				{ internalType: 'address', name: 'referrer', type: 'address' },
				{ internalType: 'bool', name: 'isExist', type: 'bool' },
				{ internalType: 'uint256', name: 'launchBonus', type: 'uint256' },
				{ internalType: 'uint256', name: 'reinvestRewardEarned', type: 'uint256' },
				{ internalType: 'uint256', name: 'totalWithdrawn', type: 'uint256' }
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
			name: 'usersList',
			outputs: [ { internalType: 'address', name: '', type: 'address' } ],
			stateMutability: 'view',
			type: 'function'
		},
		{ inputs: [], name: 'withdraw50Percent', outputs: [], stateMutability: 'nonpayable', type: 'function' },
		{ inputs: [], name: 'withdrawAll', outputs: [], stateMutability: 'nonpayable', type: 'function' }
	]
};
