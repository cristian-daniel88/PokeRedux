import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CheckoutBackground from "../assets/checkout.jpg";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";

import {
  CheckoutContainerStyled,
  CheckoutGridContainer

} from "./CheckoutStyles";

function CheckOut() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useHistory();

  if (!currentUser) {
    history.push("/login");
  }
    return (
        <>
        <div style={{height: '70px'}}></div>
        <CheckoutContainerStyled img={CheckoutBackground}>
            <CheckoutGridContainer>
                <CheckoutForm/>
            </CheckoutGridContainer>
        </CheckoutContainerStyled>
        </>
    )
}

export default CheckOut
