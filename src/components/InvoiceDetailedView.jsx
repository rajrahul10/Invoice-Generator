import { useNavigate } from "react-router-dom";

function InvoiceDetailedView() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Go Back</button>
      <h2>Invoice Detailed View</h2>
    </div>
  );
}

export default InvoiceDetailedView;
