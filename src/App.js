import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="App-main">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          First project - <code>Second Class </code> in CODERHOUSE
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <br />
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit harum accusamus suscipit voluptate iure non, deleniti
          natus quod placeat quidem sed fugit minus facilis omnis praesentium sapiente. Officiis, ex consequuntur.
        </p>
      </main>
    </div>
  );
}

export default App;