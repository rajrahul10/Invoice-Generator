import { useNavigate } from "react-router-dom";
import { data } from "../data/data";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-1/2 p-4 mx-auto flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-medium">Invoices</h1>
        <p className="text-sm">
          There are <span>{data.length} </span>total invoices
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        {/* <div className="">
          <label htmlFor="status">Filter by status</label>
          <select name="status" id="status">
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="draft">Draft</option>
          </select>
        </div> */}

        <button
          className="bg-violet-500 rounded-full px-6 py-4 flex items-center justify-center"
          onClick={() => navigate("/new")}
        >
          New Invoice
        </button>
      </div>
    </header>
  );
}

export default Header;
