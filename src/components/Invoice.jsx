import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Invoice({ invoice }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/${invoice.id}`)}>
      {invoice.id} {invoice.name} {invoice.amount} {invoice.status}
    </div>
  );
}

export default Invoice;
