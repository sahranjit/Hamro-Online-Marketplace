import { createContext, useEffect, useState } from "react";
import "./App.css";
import MyNavLinks from "./Component/MyNavLinks";
import Route from "./Component/MyRoute";
import AppRoute from "./Component/routes/AppRoute";

export let Context1 = createContext();

function App() {
  let [token, setToken] = useState({
    sellerToken: localStorage.getItem("sellerToken") || null,
    buyerToken: localStorage.getItem("buyerToken") || null,
    adminToken: localStorage.getItem("adminToken") || null,
  });

  useEffect(() => {
    setToken({
      ...token,
      sellerToken: localStorage.getItem("sellerToken"),
      buyerToken: localStorage.getItem("buyerToken"),
      adminToken: localStorage.getItem("adminToken"),
    });
  }, [localStorage]);
  return (
    <div>
      <Context1.Provider value={{ token: token, setToken: setToken }}>
        {/* <MyNavLinks></MyNavLinks> */}
        {/* <Route></Route> */}
        <AppRoute></AppRoute>
        {/* <Check></Check> */}
      </Context1.Provider>
    </div>
  );
}

export default App;
