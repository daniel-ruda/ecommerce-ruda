import { BrowserRouter } from "react-router-dom";
import "./App.css";

import NavBar from "./components/modules/NavBar/NavBar";
import { CartProvider } from "./context/CartProvider";
import UserProvider from "./context/UserProvider";
import AppRoute from "./Routing/AppRoute";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <UserProvider>
          <BrowserRouter>
            <NavBar />
            <ToastContainer />
            <AppRoute />
          </BrowserRouter>
        </UserProvider>
      </CartProvider>
    </div>
  );
}

export default App;
