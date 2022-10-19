// import logo from './logo.svg';
import './App.css';
import Labs from "./labs"

function App() {
  return (
      // This return statement is returning an HTML tag, not an HTML string. This is possible because React.js uses a
      // library called JSX or JavaScript XML. JSX allows mixing and matching JavaScript and XML seamlessly and HTML
      // is just a particular flavor of XML.
      <div className="container">
        <h1>Hello World!</h1>
        <Labs/>
      </div>
      // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
