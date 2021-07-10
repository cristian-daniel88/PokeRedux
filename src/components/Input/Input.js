import React, { useReducer, useEffect } from "react";
import { validate } from "../../utils/validator";

import {
  FormControl,
  InputContainer,
  StyledInput,
  StyledLabel,
  ErrorText,
} from "./InputStyles";

const CHANGE = "CHANGE";
const TOUCHE = "TOUCHE";

export const inputReducer = (state, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };

    case TOUCHE:
      return {
        ...state,
        isTouche: true,
      };

    default:
      return state;
  }
};

export const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouche: false,
    isValid: props.initialValid || false,
  });

  const { isValid, value } = inputState;
  const { onInput, id } = props;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [onInput, id, value, isValid]);

  const changeHandler = (evento) => {
    dispatch({
      type: CHANGE,
      val: evento.target.value,
      validators: props.validators,
    });
  };

  const toucheHandler = (e) => {
    dispatch({
      type: TOUCHE,
    });
  };

  return (
    <FormControl>
      <StyledLabel
        htmlFor={props.id}
        showError={!inputState.isValid && inputState.isTouche}
      >
        {props.label}
      </StyledLabel>

      <InputContainer showError={!inputState.isValid && inputState.isTouche}>
        <StyledInput
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={changeHandler}
          onBlur={toucheHandler}
          value={inputState.value}
          showError={!inputState.isValid && inputState.isTouche}
        />
      </InputContainer>

      {!inputState.isValid && inputState.isTouche && (
        <ErrorText>{props.errorText}</ErrorText>
      )}
    </FormControl>
  );
};
