
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



        initContractData(_contract, myWallet);



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






    const initContractData = async (_contract, myWallet) => {



        let resp = await _contract.methods.getuserInfo(myWallet).call();
        let referral = beautifyNumber(resp._refferals);
        let totalmembers = resp._totalmembers.toNumber();
        console.log("total ref",totalmembers);
        let withdrawnAmount = beautifyNumber(resp._withdrawnAmount, true)
        console.log("withrawbnn",withdrawnAmount)
        let incomes = await _contract.methods.getEarnings(myWallet).call();
        let rewardIncome = beautifyNumber(incomes._rewardIncome,true);
        let levelIncome = beautifyNumber(incomes._refferalIncome,true);
        console.log("level income",levelIncome)
        console.log("reward income ---",rewardIncome);
        let data = {
            ...myData,
            referral,
            totalmembers,
            withdrawnAmount,
            levelIncome
        }


        setMyData(data);
        props.dispatch(onMyDataLoaded(data))



        _usersFunction(_contract, myWallet)
        // fetchPoolsData(_contract, myWallet)
    }




    const _usersFunction = async (_contract, myWallet) => {

        let resp = await _contract.methods.getWallets(myWallet).call();
        let poolWallet = beautifyNumber(resp._poolWallet,true);
        let withdrawWallet = beautifyNumber(resp._withdrawWallet, true);
        let lockedWallet = beautifyNumber(resp._hold, true);
        console.log("locked",lockedWallet);
        // let ROIAmount = beautifyNumber(resp.ROIAmount, true)

        let data = {
            ...myData,
            poolWallet,
            withdrawWallet,
            lockedWallet
            // ROIAmount,
        }


        setMyData(data);
        props.dispatch(onMyDataLoaded(data))

    }



    const fetchPoolsData = async (_contract, myWallet) => {



        let poolsStatus=[];

    
        for(let i=1;i<10;i++){
            let isActive = await _contract.methods.checkIfPoolActive(myWallet).call();
            poolsStatus.push(isActive)
        }
        let data = {
            ...myData,
            poolsStatus
        }


        setMyData(data);
        props.dispatch(onMyDataLoaded(data))

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