import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import Logo from "../../assets/logo/mars-logo.png"
import { Link } from "react-router-dom"
import { navItems } from "./navItems"
import Dropdown from "./Dropdown";

const Header = () => {
    const [dropdown, setDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const { cartCount, showCart, setShowCart } = useContext(Context);

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <nav className="navbar">
                        <Link to="/" className="navbar-logo" >
                            <img src={Logo} alt="" />
                        </Link>
                        <ul className="nav-items">
                            {navItems.map((item) => {
                                if (item.title === "Industry") {
                                    return (
                                        <li
                                            key={item.id}
                                            className={item.cName}
                                            onMouseEnter={() => setDropdown(true)}
                                            onMouseLeave={() => setDropdown(false)}
                                        >
                                            <Link to={item.path}>{item.title}</Link>
                                            {dropdown && <Dropdown />}
                                        </li>
                                    );
                                }
                                return (
                                    <li key={item.id} className={item.cName}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>

            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}
        </>
    );
};

export default Header;
