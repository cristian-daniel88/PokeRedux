import React from "react";

import { useDispatch } from "react-redux";

import * as cartActions from "../../redux/cart/cartActions";
import { useHistory, Link } from 'react-router-dom';

import {
  QuantityButton,
  QuantityManageStyled,
  QuantityStyled,
  RemoveIconStyled,
} from "./HandleQuantityStyles";

function HandleQuantity({ item }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRemove = () => {
  
    

    dispatch(cartActions.removeItem(item));
  }

  return (
    <QuantityManageStyled>
      {item.quantity === 1 ? (
        <Link to='/'>
        <RemoveIconStyled
          onClick={() => dispatch(cartActions.removeItem(item))}
          />
        </Link>
      ) : (
        <QuantityButton onClick={handleRemove}>
          -
        </QuantityButton>
      )}

      <QuantityStyled>{item.quantity}</QuantityStyled>
      <QuantityButton onClick={() => dispatch(cartActions.addItem(item))}>
        +
      </QuantityButton>
    </QuantityManageStyled>
  );
}

export default HandleQuantity;
