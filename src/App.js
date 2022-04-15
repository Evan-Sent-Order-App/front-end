import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Order } from "./Order/Order";
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";
import { AuthProvider } from "./components/AuthProvider";
import { FirebaseProvider } from "./components/FirebaseProvider";
import { RestOfTheApp } from "./Components/RestOfTheApp";

// const auth = window.firebase.auth();
// const provider = new window.firebase.auth.GoogleAuthProvider();
// auth.signInWithPopup(provider)

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({ ...openFood, ...orders });

  return (
    <>
      <FirebaseProvider>
        <AuthProvider>
          <GlobalStyle />
          <RestOfTheApp />
          <FoodDialog {...openFood} {...orders} />
          <Navbar />
          <Order {...orders} {...openFood} />
          <Banner />
          <Menu {...openFood} />
        </AuthProvider>
      </FirebaseProvider>
    </>
  );
}

export default App;
