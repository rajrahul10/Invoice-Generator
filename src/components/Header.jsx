import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <h1>Invoices</h1>
      <button onClick={() => navigate("/new")}>New Invoice</button>
    </header>
  );
}

export default Header;
