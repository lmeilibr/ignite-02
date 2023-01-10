import logo from '../../assets/logo.svg'
import {MapPin, ShoppingCart} from "phosphor-react";
import {HeaderContainer} from "./styles";
import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt=""/>
            <nav>
                <div>
                    <MapPin weight="fill"/>
                    <span>Porto Alegre, RS</span>
                </div>
                <NavLink to="/checkout" title="Checkout">
                    <ShoppingCart size={22} weight="fill"/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}