
import React, { useEffect, useState, } from "react";
import { connect } from 'react-redux';
import { accountUpdate, onContractLoaded, onPersonalDataLoaded , onContractDataLoaded} from "../../redux/actions"
import Config from "../../Config"
const BlockchainProvider = (props) => {

    const [account, setAccount] = useState();
    const [myTronBal, setMyTronBal] = useState();
    const [tronWeb, setTronWeb] = useState();
    const [contract, setContract] = useState();
    const [functions, setFunctions] = useState([])
    const [myData, setMyData] = useState();
    const [contractData, setContractData] = useState();
    const [personalData, setPersonalData] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
                console.log("fddf", window.tronWeb.defaultAddress.base58)
                setAccount( window.tronWeb.defaultAddress.base58)
                clearInterval(interval)
                setTronWeb(window.tronWeb)
                loadData(window.tronWeb, window.tronWeb.defaultAddress.base58)
            }
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

    useEffect(()=>{
        initContractData()
        
    },[contractData])

    useEffect(()=>{
        initPersonalData()
    },[personalData])

    const loadContract = async (_tronWeb, myWallet) => {

        let _contract = await _tronWeb
            .contract()
            .at(Config.CONTRACT_ADDRESS)


         setContract(_contract)

        props.dispatch(onContractLoaded(_contract))

        // console.log("contract",_contract);

        await initContractData();
        await initPersonalData();

        setMyData (_contract)

    }



    const loadData = async (_tronWeb, myWallet) => {
        await fetchMyTRXBal(_tronWeb)
        await loadContract(_tronWeb, myWallet)
    }


    const fetchMyTRXBal = async (_tronWeb) => {
        let bal = await _tronWeb.trx.getAccount(
            _tronWeb.defaultAddress.base58
        );

        if (bal.balance > 0) {
            bal = (bal.balance / 10 ** 6).toFixed(2)
        } else {
            bal = "00"
        }

        // console.log("baall", bal)
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
        if(contract){
            contractBalance = beautifyNumber((await contract.methods.getContractBalance().call()).toNumber(),true);
            todaysROI = (await contract.methods.getPercent().call()).toNumber();
            totalInvestors = (await contract.methods.totalUsers().call()).toNumber();
            totalTRXDeposit = beautifyNumber((await contract.methods.totalInvested().call()).toNumber(),true);
            totalAmountWithdrawn = beautifyNumber((await contract.methods.totalWithdrawn().call()).toNumber(),true);
            contractAddress = Config.CONTRACT_ADDRESS
            totalTRXReInvested = beautifyNumber(await contract.methods.totalReinvest().call());
            
        }
        
        setContractData({
            contractBalance,
            todaysROI,
            totalInvestors,
            totalTRXDeposit,
            totalTRXReInvested,
            totalTRXReInvested,
            totalAmountWithdrawn,
            contractAddress
        })
        props.dispatch(onContractDataLoaded(contractData))
        // console.log("contractData",contractData);        
    }

    const initPersonalData = async ()=>{
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

        if(contract){
            let userInfo = (await contract.methods.users(window.tronWeb.defaultAddress.base58).call());
            isExist = userInfo.isExist;
            roi = beautifyNumber((await contract.methods.getROI(window.tronWeb.defaultAddress.base58).call()).toNumber(),true);
            referredBy = tronWeb.address.fromHex(userInfo.referrer);
            withdrawnAmount = beautifyNumber(userInfo.totalWithdrawn.toNumber(),true);
            referralIncome = beautifyNumber(userInfo.refReward.toNumber(),true);
            walletBalance = myTronBal;
            activeInvestments = beautifyNumber(await contract.methods.getActiveDepositsSum(window.tronWeb.defaultAddress.base58).call());
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


    return <></>
}



const mapStateToProps = function (state) {
    return {
    }
}

export default connect(mapStateToProps)(BlockchainProvider);