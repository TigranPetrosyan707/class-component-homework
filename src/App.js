import "./App.css";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <h1 className="headingApp">Counter</h1>
      <div className="componentCounter">
        <Counter />
      </div>
    </div>
  );
}

export default App;
