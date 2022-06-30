import ReactLogo from "./ReactLogo";
import "./SpiningReact.css";

function SpiningReact() {
  const datetime = new Date();

  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo className="App-logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{datetime.toDateString()} - Random : {Math.floor(Math.random() * 100)}</p>
      </header>
    </div>
  );
}

export default SpiningReact;
