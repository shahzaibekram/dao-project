import React from 'react'
import { Link } from 'react-router-dom';

const style = {
    wrapper: `p-4 w-screen flex justify-between items-center `,
    nav: `flex-1 flex justify-center items-center ml-12`,
    navItemsContainer: `flex bg-[#191B1F] rounded-3xl `,
    navItem: `px-3 py-1 m-1 flex items-center text-lg hover:bg-sky-700`,
    buttonsContainer: `bg-[#191B1F] rounded-3xl hover:bg-sky-700`,
    btn: `px-3 py-2`,
}

const Header = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.nav}>
                <div className={style.navItemsContainer}>
                    <div className= {style.navItem} >
                        <Link  to='/'>DAO</Link>
                    </div>

                    <Link className={style.navItem} to='/proposal'>Proposal</Link>
                    <Link className={style.navItem} to='/result'>Result</Link>
                </div>
            </div>
            <div className={style.buttonsContainer}>
                <button className={style.btn}>Connected Wallet</button>
            </div>
        </div>
    )
}
export default Header;