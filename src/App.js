import { BrowserRouter } from "react-router-dom";
import "./App.css";

import NavBar from "./components/modules/NavBar/NavBar";
import AppRoute from "./Routing/AppRoute";

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <AppRoute />
        </BrowserRouter>
      </div>
    
  );
}

export default App;
