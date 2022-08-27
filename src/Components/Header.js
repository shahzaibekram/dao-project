import React,{useState} from 'react'
import { Link } from 'react-router-dom';    
import { ethers } from 'ethers';

const style = {
    wrapper: `p-4 w-screen flex justify-between items-center `,
    nav: `flex-1 flex justify-center items-center`,
    navItemsContainer: `flex bg-[#191B1F] rounded-3xl `,
    navItem: `px-3 py-1 m-1 flex items-center text-lg hover:bg-sky-700`,
    buttonsContainer: `bg-[#191B1F] rounded-3xl hover:bg-sky-700`,
    btn: `px-3 py-2`,
    btnTextContainer: `h-8 flex item-center`
}

const Header = () => {

     // usetstate for storing and retrieving wallet details
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  
  // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {
  
    // Asking if metamask is already present or not
    if (window.ethereum) {
  
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };
  
  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };
  
  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });
  
    // Setting a balance
    getbalance(account);
  };

    return (
        <div className={style.wrapper}>
            <div className={style.nav} style={{marginLeft: '14%'}}>
                <div className={style.navItemsContainer}>
                    <div className= {style.navItem} >
                        <Link  to='/'>DAO</Link>
                    </div>

                    <Link className={style.navItem} to='/new-proposal'>Proposal</Link>
                    <Link className={style.navItem} to='/result'>Result</Link>
                </div>
            </div>
            <div className={style.buttonsContainer}>
                <button className={`${style.btn}`} onClick={btnhandler}>Wallet{`= ${data.Balance}`}</button>
            </div>
        </div>
    )
}
export default Header;