import React from "react";
import useForm from "../../hooks/useForm";
import { Input } from "../Input/Input";
import { VALIDATOR_REQUIRE} from "../../utils/validator";
import { COSTO_ENVIO } from "../../utils/constants";
import { useHistory } from "react-router-dom";
import { FormStyled, FormSectionStyled, FormTitle } from "./CheckoutFormStyles";
import { useDispatch, useSelector } from "react-redux";
import * as orderActions from "../../redux/orders/ordersActions";
import * as cartActions from "../../redux/cart/cartActions";
import CardSummary from "../CardSummary/CardSummary";


function CheckoutForm() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { purchased } = useSelector((state) => state.orders);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const history = useHistory();

  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);


  const [formState, inputHandler] = useForm(
    {
      domicilio: {
        value: "",
        isValid: false,
      },
      localidad: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.isValid) {
      console.log("Completá todos los datos");
      return;
    }


    const orderData = {
      userId: currentUser.id,
      shippingDetails: {
        domicilio: formState.inputs.domicilio.value,
        localidad: formState.inputs.localidad.value,
      },
      items: [...cartItems],
      shippingPrice: COSTO_ENVIO,
      subTotal: subTotal,
      total: COSTO_ENVIO + subTotal,
    };

    dispatch(orderActions.createOrder(orderData));
    dispatch(cartActions.clearCart());

    console.log("SALIMO JUGANDO PWITO? SALIMO JUGANDO?");
  };

    if (purchased) {
      dispatch(orderActions.purchaseInit());
      history.push("/mis-ordenes"); 
    }

    // let botondisable = true;
    // if (cartItems.length > 0) {
    //   botondisable = false
    // };

    
    
    
  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormSectionStyled>
      {!formState.isValid && (
          <FormTitle>
            Por favor, completá los datos para poder continuar
          </FormTitle>
        )}

        <Input
          id="domicilio"
          label="Domicilio"
          type="text"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Por favor, completá tu domicilio"
        />

        <Input
          id="localidad"
          label="Localidad"
          type="text"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Por favor, completá tu localidad"
        />
      </FormSectionStyled>

    
      
      {formState.isValid && (
        <CardSummary
          envio={COSTO_ENVIO}
          subTotal={subTotal}
          isValid={!formState.isValid}
        />
      )}
    </FormStyled>
  );
}

export default CheckoutForm;
