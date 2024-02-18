import { useState } from "react";
import "./App.css";

function App() {

  const [newTaskName, setnewTaskName] = useState();

  const handleSubmit = (e) => {

  }
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new Task"
          onChange={(e) => setnewTaskName(e.target.value)}
        />
        <button onClick={() => alert(newTaskName)}> Save Task</button>
      </form>
    </div>
  );
}

export default App;
