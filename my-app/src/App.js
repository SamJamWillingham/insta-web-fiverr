
import './App.css';
import TypeWriter from "./typewriter";
import Links from "./links";

function App() {
  return (
    <div className="App">
      <div className="title_wrapper">
       <h1 className="title">editor.</h1> 
       <TypeWriter />
      </div>
      <Links />
    </div>
  );
}

export default App;
