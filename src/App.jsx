import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceDetailedView from "./components/InvoiceDetailedView.jsx";
import InvoiceForm from "./components/InvoiceForm.jsx";

function App() {
  return (
    <>
      <div className="text-3xl font-bold underline">Invoice Generator</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<InvoiceDetailedView />} />
          <Route path="/new" element={<InvoiceForm />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
