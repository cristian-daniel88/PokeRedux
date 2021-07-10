import React from "react";

import {
  OrderStyled,
  OrderContent,
  OrderContainer,
  ItemImg,
  OrderItems,
} from "./OrdersStyles";

import {
  DialogShow,
  DialogFooter,
  ConfirmButton,
} from "../PokDialog/PokDialogStyles";

import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/cart/cartActions";
import { formatPrice } from "../../utils/formatPrice";
import HandleQuantity from "./HandleQuantity";
import { Link, useHistory } from "react-router-dom";

function Orders() {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.cart.hidden);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const history = useHistory();

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  let botondisable = true;
  if (cartItems.length > 0) {
    botondisable = false
  };

  const handleToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  const irAPagar = () => {
    dispatch(cartActions.toggleCartHidden());
    history.push("/checkout");
  
  };

  return (
    <>
      {!hidden && <DialogShow onClick={handleToggle} zIndex={10}/>}
      <OrderStyled show={hidden}>
        {cartItems?.length === 0 ? (
          <OrderContent>Nada por aqui</OrderContent>
        ) : (
          <OrderContent>
            <OrderContainer>Tu pedido:</OrderContainer>

            {cartItems.map((item, index) => (
              <OrderContainer key={index}>
                <OrderItems>
                  <ItemImg img={item.img} />
                  <div>
                    <div>{item.name}</div>
                    {formatPrice(item.price)}
                  </div>

                  <div>
                    <HandleQuantity item={item} />
                  </div>
                </OrderItems>
              </OrderContainer>
            ))}
          </OrderContent>
        )}
        <DialogFooter style={{ bottom: 0 }}>
          <ConfirmButton onClick={irAPagar}  disabled={botondisable}>
            Ir a pagar {formatPrice(total)}
          </ConfirmButton>
        </DialogFooter>
      </OrderStyled>
    </>
  );
}

export default Orders;
