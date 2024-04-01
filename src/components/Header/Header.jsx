import { Link } from "react-router-dom";
import { FcShop } from "react-icons/fc";
import { TbBasketShare } from "react-icons/tb";
import './Header.scss'
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import {useContext} from "react";
import {ContextTheme} from "../../context/Theme.jsx";


const Header = () => {
    const {theme, switchTheme} = useContext(ContextTheme)


    return (
        <header className={`header ${theme === 'light' ? 'light' : 'dark'}`}>
            <Link to='/'>
                <FcShop size={30} className="header__logo"/>
            </Link>
            <nav className="header__nav">
                <div className="header__theme">
                    <GoSun onClick={() => switchTheme('dark')} size={20} color={'yellow'} />
                    <IoMoonOutline onClick={() => switchTheme('light')} size={20}  />
                </div>
             <Link to="cart" className="header__link">
                 <TbBasketShare size={30}/>
             </Link>
            </nav>
        </header>
    )
}

export default Header