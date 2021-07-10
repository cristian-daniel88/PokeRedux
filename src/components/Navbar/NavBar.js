import React from "react";

import pedimonLogo from "../../assets/pedimon-logo.png";
import userIcon from "../../assets/user.svg";

import {
  ContainerNavbar,
  NavbarStyled,
  Logo,
  NavigationMenu,
  Divider,
  LoginButton,
  UserContainer,
  User

} from "./NavBarStyles";
import CartIcon from "../Cart/CartIcon";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserMenu } from "../UserMenu/UserMenu";
import * as userActions from "../../redux/user/userActions";
import * as cartActions from "../../redux/cart/cartActions";

function NavBar({openPok}) {
  const dispatch = useDispatch()
  const {setOpenPok} = openPok;
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleToggle = () => {
    dispatch(userActions.toggleMenuHidden());
  };

  

  return (
   
    <NavbarStyled propiedadPerriUno="">
      <ContainerNavbar>
        <Link to='/' >
        <Logo src={pedimonLogo}  onClick={()=> setOpenPok()}/>
        </Link>

        <NavigationMenu>
            <CartIcon/>

            <Divider/>

          
            {currentUser ? (
            <UserContainer>
              <User src={userIcon}  onClick={handleToggle} />
              <UserMenu user={currentUser} />
            </UserContainer>
          ) : (
            <Link to="/login"  >
              <LoginButton>Ingresar</LoginButton>
            </Link>
          )}
        
         
        </NavigationMenu>
        
      </ContainerNavbar>
    </NavbarStyled>
    
    
 
  );
}

export default NavBar;
