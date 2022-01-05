import React, { useState } from "react";

import {
  Wrapper,
  LayoutPage,
  FormContent,
  FormStyled,
  Botoncito,
  ContainerButtons,
  GoogleButton,
  GoogleIcon,
  Alink,
} from "./LoginStyles";

import {
  
  Support

} from "../components/Banner/BannerStyles";

import {DialogShow} from "../components/PokDialog/PokDialogStyles"
import {
  auth,
  signInWithGoogle,
  createUserProfileDocument,
} from "../firebase/firebase.util";

import { Input } from "../components/Input/Input";

import useForm from "../hooks/useForm";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../utils/validator";

import GoogleLogo from "../assets/googleSignIn3.png";

import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

function Login() {
  const currentUser = useSelector((state) => state.user.currentUser);

  const history = useHistory();

  const [isLoginMode, setIsLoginMode] = useState(true);
  
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  if (currentUser) {
    history.goBack();
  }

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          email: {
            value: "",
            isValid: false,
          },
          password: {
            value: "",
            isValid: false,
          },
        },
        formState.inputs.email?.isValid && formState.inputs.password?.isValid
        );
        console.log( formState.inputs)
    } else {
      setFormData(
        {
          ...formState.inputs,
          displayName: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }

    setIsLoginMode(!isLoginMode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoginMode) {
      try {
        await auth.signInWithEmailAndPassword(
          formState.inputs.email.value,
          formState.inputs.password.value
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          formState.inputs.email.value,
          formState.inputs.password.value
        );

        await createUserProfileDocument(user, {
          displayName: formState.inputs.displayName.value,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
    
    
    <>
    <Support/>
    
    <DialogShow/>
    <LayoutPage>
      <Wrapper>
        <form action="" onSubmit={handleSubmit}>
          <FormStyled>
            <FormContent>
              {!isLoginMode && (
                <Input
                id="displayName"
                label="Nombre"
                type="text"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Por favor, completá tu nombre"
                />
                )}

              <Input
                id="email"
                label="Email"
                type="email"
                onInput={inputHandler}
                validators={[VALIDATOR_EMAIL()]}
                errorText="Por favor, completá tu mail"
                />

              <Input
                id="password"
                label="Contraseña"
                type="password"
                onInput={inputHandler}
                validators={[VALIDATOR_MINLENGTH(8)]}
                errorText="Por favor, colocá tu contraseña"
                />
            </FormContent>

            <ContainerButtons>
              <Botoncito disabled={!formState.isValid}>
                {isLoginMode ? "Ingresar" : "Registrarme"}
              </Botoncito>

              <GoogleButton onClick={signInWithGoogle}>
                <GoogleIcon src={GoogleLogo} />
                <p>Login con Google</p>
              </GoogleButton>
            </ContainerButtons>
            <ContainerButtons>
              <span>
                {isLoginMode
                  ? "Todavía no tenés una cuenta? "
                  :"Ya tenés una cuenta? "
                }
              </span>
              <Alink onClick={switchModeHandler}>
                {!isLoginMode ? "Ingresar" : "Registrate"}
              </Alink>
            </ContainerButtons>
          </FormStyled>
        </form>
      </Wrapper>
    </LayoutPage>
    
    </>
    
  );
}

export default Login;
