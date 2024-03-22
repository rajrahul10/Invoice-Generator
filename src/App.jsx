import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceDetailedView from "./components/InvoiceDetailedView.jsx";
import InvoiceForm from "./components/InvoiceForm.jsx";
import { useContext } from "react";
import { context } from "./main.jsx";

function App() {
  let { isDarkMode } = useContext(context);

  return (
    <div
      className={`pt-6 ${isDarkMode ? "dark:bg-indigo-950 text-white" : ""}`}
    >
      {/* <h2>Invoice Generator</h2> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<InvoiceDetailedView />} />
          <Route path="/new" element={<InvoiceForm />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
