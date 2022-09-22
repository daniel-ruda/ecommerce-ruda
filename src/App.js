import { BrowserRouter } from "react-router-dom";
import "./App.css";

import NavBar from "./components/modules/NavBar/NavBar";
import { CartProvider } from "./context/CartProvider";
import AppRoute from "./Routing/AppRoute";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <AppRoute />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
