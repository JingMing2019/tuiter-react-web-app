// import logo from './logo.svg';
import './App.css';
import Labs from "./labs"
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
      // This return statement is returning an HTML tag, not an HTML string. This is possible because React.js uses a
      // library called JSX or JavaScript XML. JSX allows mixing and matching JavaScript and XML seamlessly and HTML
      // is just a particular flavor of XML.
      // Note that in React.js we use className instead of class
      <BrowserRouter>
          <div className="container">
              {/*<h1>Hello World!</h1>*/}
              <Routes>
                  {/* Route component from React Router to declare paths and map them to corresponding component we want
                  to render for that path*/}
                  {/* index means this Labs component is the default landing screen */}
                  <Route index element={<Labs/>}/>
              </Routes>
              <Routes>
                  <Route path="/hello" element={<HelloWorld/>}/>
              </Routes>
              <Routes>
                  <Route path="/tuiter" element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>


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
