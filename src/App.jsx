import { useState } from "react";
import "./App.css";

function App() {
  const [inputMessage, setGreetingMessage] = useState("");
  const [greetingText, setGreetingText] = useState("Greeting Message");

  return (
    <div className="App">
      <div className="greeting-container">{greetingText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputMessage}
          onChange={(e) => setGreetingMessage(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={() => setGreetingText(inputMessage)}>
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
