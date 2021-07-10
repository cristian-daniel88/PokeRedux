import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  UserMenuStyled,
  WelcomeTitle,
  MenuOptions,
  MenuOptionElement,
  Shadow,
} from "./UserMenuStyles";

import * as userActions from "../../redux/user/userActions";
import { auth } from "../../firebase/firebase.util";

export function UserMenu({ user }) {
  const { hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(userActions.toggleMenuHidden());
  };

  return (
    <>
      {!hiddenMenu && <Shadow onClick={handleToggle} />}
      {!hiddenMenu ? (
        <UserMenuStyled>
          <WelcomeTitle>Holis {user.displayName}</WelcomeTitle>
          <MenuOptions>
            <Link to="/mis-ordenes" onClick={handleToggle}>
              <MenuOptionElement>Mis órdenes</MenuOptionElement>
            </Link>

            <MenuOptionElement onClick={() => auth.signOut()}>
              Cerrar sesión
            </MenuOptionElement>
          </MenuOptions>
        </UserMenuStyled>
      ) : null}
    </>
  );
}
