import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
import Footer from "./components/Footer/Footer";
import { useOpenPok } from "./hooks/useOpenPok.js";
import Orders from "./components/Orders/Orders";
import Checkout from "./pages/Checkout.js";
import Login from "./pages/Login";
import { useEffect } from "react";
import * as userActions from "./redux/user/userActions";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { useDispatch } from "react-redux";

function onAuthStateChange(cb, action) {
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot((snapshot) => {
        cb(
          action({
            id: snapshot.id,
            ...snapshot.data(),
          })
        );
      });
    } else {
      cb(action(null));
    }
  });
}

function App() {
  const openPok = useOpenPok();
  
  const dispatch = useDispatch();
  useEffect(() => {
    const unsuscribe = onAuthStateChange(dispatch, userActions.setCurrentUser);

    return () => {
      unsuscribe();
    };
  }, [dispatch]);
  
  return (
    <>
      <GlobalStyles />

      <NavBar openPok={openPok} />
      <Orders/>

          
      <Switch>
        <Route exact path='/'>
          <Home  />
        </Route>

        <Route exact path='/products'>
          <Products openPok={openPok}/>
        </Route>

        <Route exact path='/checkout'>
          <Checkout/>
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

      </Switch>

        <Footer/>



    </>
  );
}

export default App;
