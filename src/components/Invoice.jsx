import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Invoice({ invoice }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-1/2 p-4 mx-auto bg-indigo-900 h-14 flex items-center justify-between rounded-lg hover:cursor-pointer"
      onClick={() => navigate(`/${invoice.id}`)}
    >
      <p className="w-12 px-4 flex items-center justify-center">{invoice.id}</p>
      <p className="w-12 px-4 flex items-center justify-center">
        {invoice.name}
      </p>
      <p className="w-12 px-4 flex items-center justify-center">
        {invoice.amount}
      </p>
      <div className="w-16 px-4 flex items-center justify-center">
        <p className="w-12">{invoice.status}</p>
        <p className="w-4 px-4 flex items-center justify-center">&#62;</p>
      </div>
    </div>
  );
}

export default Invoice;
