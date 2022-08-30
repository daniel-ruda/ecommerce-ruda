import "./App.css";
import ItemListContainer from "./components/modules/ItemListContainer/ItemListContainer";
import NavBar from "./components/modules/NavBar/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Welcome to RUDA MARKET..."/>
    </div>
  );
}

export default App;