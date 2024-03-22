import { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

export const context = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <context.Provider value={{ isDarkMode: true }}>
    <App />
  </context.Provider>
);
