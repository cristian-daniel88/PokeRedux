import firebase from "firebase";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDC7sINXR1K396UYqPrOuadKfW-qKNe_z8",
  authDomain: "pokemon-a3d4e.firebaseapp.com",
  projectId: "pokemon-a3d4e",
  storageBucket: "pokemon-a3d4e.appspot.com",
  messagingSenderId: "919518752265",
  appId: "1:919518752265:web:5b5ac174f960aeb1cb92d8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("La cagamo creando un usuario", error.message);
    }
  }

  return userRef;
};

export const createOrderDocument = async (order) => {
  if (!order) return;

  const orderRef = firestore.doc(`orders/${order.id}`);
  const snapShot = await orderRef.get();

  if (!snapShot.exists) {
    const createdAt = new Date();

    try {
      await orderRef.set({
        userId: order.userId,
        shippingDetails: {
          ...order.shippingDetails,
        },
        items: [...order.items],
        shippingPrice: order.shippingPrice,
        subTotal: order.subTotal,
        total: order.total,
        status: "pendiente",
        createdAt,
      });
    } catch (error) {
      console.log(
        "Tuvimo un error en guardar la orden, se pudrió la momieax",
        error.message
      );
    }
  }

  return orderRef;
};

export const getOrders = async (userId) => {
  const orderRef = await firestore
    .collection("orders")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc");

  let orders = await orderRef
    .get()
    .then(function (querySnapshot) {
      let orders = [];
      querySnapshot.forEach(function (doc) {
        orders = [...orders, { id: doc.id, ...doc.data() }];
      });
      return orders;
    })
    .catch(function (error) {
      console.log("No pudimos traer las ordenes perriuno galactico", error);
    });

  return orders;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
