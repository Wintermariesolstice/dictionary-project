import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="forest" />
        </main>
        <footer className="App-footer">
          <small>Coded by Nora Yusop. Open-sourced on <a href="https://github.com/Wintermariesolstice/dictionary-project"> Github</a> hosted on Netlify.
          </small>
        </footer>
      </div>
    </div>
  );
}
