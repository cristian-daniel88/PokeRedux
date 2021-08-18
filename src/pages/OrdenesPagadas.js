
import React, { useEffect, useCallback } from "react";

import { CheckoutContainerStyled } from "./OrdenesPagadasStyles";

import CheckoutBackground from "../assets/pokemonOrders.jpg";

import MyOrders from "../components/MyOrders/MyOrders";

import * as orderActions from "../redux/orders/ordersActions";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

function OrdenesPagadas() {
    const currentUser = useSelector((state) => state.user.currentUser);
    let { orders } = useSelector((state) => state.orders);
    const history = useHistory();
    const dispatch = useDispatch();
  
    const fetchOrders = useCallback(async () => {
      console.log("Fetcheando las ordenes");
      await dispatch(orderActions.fetchOrders(currentUser?.id));
    }, [dispatch, currentUser]);
  
    if (!currentUser) {
      history.push("/");
    }
  
    useEffect(() => {
      fetchOrders();
    }, [fetchOrders, currentUser]);

    return (
        <>
        <div style={{height: "70px", with:'100%'}}></div>
        <CheckoutContainerStyled img={CheckoutBackground}>
            <MyOrders orders={orders}/>
        </CheckoutContainerStyled>
        </>
    )
}

export default OrdenesPagadas
