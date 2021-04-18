
import React, { useEffect, useState, } from "react";
import { connect } from 'react-redux';
import { accountUpdate, onContractLoaded, onPersonalDataLoaded, onContractDataLoaded } from "../../redux/actions"
import Config from "../../Config"
import Web3 from 'web3';
const BlockchainProvider = (props) => {

    const [account, setAccount] = useState();
    const [myTronBal, setMyTronBal] = useState();
    const [tronWeb, setTronWeb] = useState();
    const [contract, setContract] = useState();
    const [functions, setFunctions] = useState([])
    const [myData, setMyData] = useState();
    const [contractData, setContractData] = useState();
    const [personalData, setPersonalData] = useState();
    const web3 = new Web3(Web3.givenProvider);
    useEffect(() => {
        const interval = setInterval(() => {
            if (contract)
                return;
            loadData()
        }, 5000)
    }, [])



    useEffect(() => {

        props.dispatch(accountUpdate({
            address: account,
            myTronBal: myTronBal
        }))
    }, [account])

    useEffect(() => {
        initPersonalData()
        props.dispatch(accountUpdate({
            personalData: personalData
        }))
    }, [account])


    useEffect(() => {
        props.dispatch(accountUpdate({
            address: account,
            myTronBal: myTronBal
        }))
    }, [myTronBal])

    useEffect(() => {
        initContractData()

    }, [contractData])

    useEffect(() => {
        initPersonalData()
    }, [personalData])


    const loadContract = async (_tronWeb, myWallet) => {

        const SimpleContract = new web3.eth.Contract(Config.ABI, Config.CONTRACT_ADDRESS);
        setContract(SimpleContract)
        console.log("contt", SimpleContract)
        var accounts = await web3.eth.getAccounts()
        console.log(accounts)
        setAccount(accounts[0])
        console.log("accounts", accounts[0])

        props.dispatch(onContractLoaded(SimpleContract))

        // console.log("contract",_contract);

        await initContractData();
        await initPersonalData();

        setMyData(SimpleContract)

    }



    const loadData = async (_tronWeb, myWallet) => {
        await fetchMyTRXBal(web3)
        await loadContract(web3, account)
    }


    const fetchMyTRXBal = async (_tronWeb) => {
        let bal = 0

        if (bal.balance > 0) {
            bal = (bal.balance / 10 ** 6).toFixed(2)
        } else {
            bal = "00"
        }

        console.log("bal", bal)
        setMyTronBal(bal)
    }

    const initContractData = async () => {
        let contractBalance = 0;
        let todaysROI = 0;
        let totalInvestors = 0;
        let totalTRXDeposit = 0;
        let totalAmountWithdrawn = 0;
        let contractAddress = "0x"
        let totalTRXReInvested = 0;
        if (contract) {
            contractBalance = beautifyNumber((await contract.methods.getContractBalance().call()), true);
            todaysROI = (await contract.methods.getPercent().call());
            totalInvestors = (await contract.methods.totalUsers().call());
            totalTRXDeposit = beautifyNumber((await contract.methods.totalInvested().call()), true);
            totalAmountWithdrawn = beautifyNumber((await contract.methods.totalWithdrawn().call()), true);
            contractAddress = Config.CONTRACT_ADDRESS
            totalTRXReInvested = beautifyNumber(await contract.methods.totalReinvest().call());

        }

        setContractData({
            contractBalance,
            todaysROI,
            totalInvestors,
            totalTRXDeposit,
            totalTRXReInvested,
            totalAmountWithdrawn,
            contractAddress
        })
        props.dispatch(onContractDataLoaded(contractData))
        // console.log("contractData",contractData);        
    }

    const initPersonalData = async () => {
        let roi = null;
        let referralIncome = 0;
        let withdrawnAmount = 0;
        let referredBy = "0x";
        let isExist = false;
        let walletBalance = 0;
        let activeInvestments = 0;
        let userTotalInvestedAmount = 0;
        let userTotalReInvestedAmount = 0;
        let reInvestRewardEarned = 0;

        if (contract) {
            let userInfo = (await contract.methods.users(account).call());
            isExist = userInfo.isExist;
            roi = beautifyNumber((await contract.methods.getROI(account).call()), true);
            referredBy = tronWeb.address.fromHex(userInfo.referrer);
            withdrawnAmount = beautifyNumber(userInfo.totalWithdrawn, true);
            referralIncome = beautifyNumber(userInfo.refReward, true);
            walletBalance = myTronBal;
            activeInvestments = beautifyNumber(await contract.methods.getActiveDepositsSum(account).call());
            userTotalInvestedAmount = beautifyNumber(userInfo.totalInvestedAmount)
            userTotalReInvestedAmount = beautifyNumber(userInfo.totalReinvestedAmount)
            reInvestRewardEarned = beautifyNumber(userInfo.reinvestRewardEarned);
        }

        setPersonalData({
            isExist,
            roi,
            referredBy,
            withdrawnAmount,
            referralIncome,
            walletBalance,
            account,
            userTotalInvestedAmount,
            userTotalReInvestedAmount,
            reInvestRewardEarned,
            activeInvestments
        })

        props.dispatch(onPersonalDataLoaded(personalData))
        // console.log("personal data", personalData);
    }

    const beautifyNumber = (input, isFixed) => {
        let num = input / 10 ** 6;

        if (isFixed) {
            return num.toFixed(2)
        } else {
            return num
        }
    }


    return <>
    </>
}



const mapStateToProps = function (state) {
    return {
    }
}

export default connect(mapStateToProps)(BlockchainProvider);