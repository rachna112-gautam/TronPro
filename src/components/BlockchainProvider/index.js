
import React, { useEffect, useState, } from "react";
import { connect } from 'react-redux';
import { accountUpdate, onContractLoaded, onMyDataLoaded } from "../../redux/actions"
import Config from "../../Config"
const BlockchainProvider = (props) => {

    const [account, setAccount] = useState();
    const [myTronBal, setMyTronBal] = useState();
    const [tronWeb, setTronWeb] = useState();
    const [contract, setContract] = useState();
    const [functions, setFunctions] = useState([])
    const [myData, setMyData] = useState();


    useEffect(() => {
        const interval = setInterval(() => {
            if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
                console.log("fddf", window.tronWeb.defaultAddress.base58)
                setAccount(window.tronWeb.defaultAddress.base58)
                clearInterval(interval)
                setTronWeb(window.tronWeb)
                loadData(window.tronWeb, window.tronWeb.defaultAddress.base58)
            }
        }, 500)
    }, [])



    useEffect(() => {
        props.dispatch(accountUpdate({
            address: account,
            myTronBal: myTronBal
        }))
    }, [account])


    useEffect(() => {
        props.dispatch(accountUpdate({
            address: account,
            myTronBal: myTronBal
        }))
    }, [myTronBal])



    const loadContract = async (_tronWeb, myWallet) => {

        let _contract = await _tronWeb
            .contract()
            .at(Config.CONTRACT_ADDRESS)


        setContract(_contract)

        props.dispatch(onContractLoaded(_contract))

        console.log("contract",_contract);

        initContractData();
        personalData();

        setMyData (_contract)

    }



    const loadData = async (_tronWeb, myWallet) => {
        fetchMyTRXBal(_tronWeb)
        loadContract(_tronWeb, myWallet)
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

        console.log("baall", bal)
        setMyTronBal(bal)
    }

    const initContractData = async () => {
        let contractAddress = "0x";
        let contractBalance = 0;
        let todaysROI = 0;
        let totalInvestors = 0;
        let walletBalance = 0;
        let totalTRXDeposit = 0;
        let totalAmountWithdrawn = 0;

        if(contract)
        contractBalance = (await contract.methods.getContractBalance().call()).toNumber();
        // todaysROI = (await contract.methods.)
        console.log("balance",contractBalance);        
    }

    const personalData = async ()=>{
        let walletAddress = "0x";
        let roi = 0;
        let referralIncome = 0;
        let withdrawnAmount = 0;
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