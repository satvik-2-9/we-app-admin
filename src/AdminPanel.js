import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './styles/AdminPanel.css'
import axios from 'axios'
export default function AdminPanel() {
    const [current,setCurrent] = useState("app setup") 
    const [currency, setcurrency] = useState("");
    const [signature_id, setID] = useState("");
    const [address, setAdress] = useState(""); 
    /*  const location = useLocation(); */

    /* const { id, authorized } = location.state; */
    let id = 1, authorized = true;
    if (!authorized ) {
        return (<div>you don't belong here</div>)
    }

    
    function handleCreateWallet() {
        axios.get(' https://wewallet.herokuapp.com/create-admin-wallet')
            .then((res) => {
                console.log('successfully created wallet');
            }, (e) => {
                console.log(e);
            });
    }
    function handlesetup() {
        const addresses = {
            "currency": currency,
            "signature_id": signature_id,
            "address": address
        }
        return (
            <div className="c">
                <button onClick={handleCreateWallet}>Create new admin wallet</button>
                <input onChange={(e)=>setcurrency(e.target.value)}>Currency</input>
                <input onChange={(e)=>setID(e.target.value)}>Signature ID</input>
                <input onChange={(e)=>{setAdress(e.target.value)}}>address</input>

                <div>Address Setup</div>
                <div>All Active Wallets</div>
            </div>
        )
    }
    function handlecustodial() {
        return (
            <div className="c">
                <div>Send or Receive money</div>
                <div>Balance of all currencies</div>
                <div>Functionality for adding tokens in ecosystem</div>
                <div>display of all tokens added by admin</div>
                <div>multiple wallet functionality</div>
                <div>rewards mechanisms and settings</div>
            </div>
        )
    }
    function handleanalytics(){
        return (
            <div className="c">
                <div>Current Customer Analytics</div>
                <div>Current Currency Analytics</div>
                <div>Bug reports & community</div>
           </div>
       )
    }

    return (
        <div className="panel">  
            <div className="sidebar"> <ul>
                    <li onClick={()=>setCurrent("app setup")}>App setup</li>
                    <li onClick={()=>setCurrent("custodial")}>custodial wallet</li>
                    <li onClick={()=>setCurrent("analytics")}>Analytics</li>
                </ul>
                
            </div>
            <div className="b" >
                {current === "app setup" && handlesetup()}
                {current === "custodial" && handlecustodial()}
                {current === "analytics" && handleanalytics()}
            </div>
    </div>
    )
    
}
