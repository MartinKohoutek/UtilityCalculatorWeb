import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState<string>("");

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/hello`)
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => setMessage("Error: " + err.message));
  }, [API_URL]);

  return (
    <div>
      <h1>React Frontend TEST5</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
