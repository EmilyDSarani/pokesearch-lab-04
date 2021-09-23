import PokeSearch from './SearchAndDrop/PokeSearch.js';
import './App.css';
//We want to keep this page clean and render in the different pokemon that will be coming through on the data
//This will be the future landing page when we start doing more of the react router stuff

function App() {
  return (
    <div className="App">
      
      <PokeSearch />
    </div>
  );
}

export default App;
