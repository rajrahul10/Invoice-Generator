import { data } from "../data/data";
import Header from "./Header";
import Invoice from "./Invoice";

function Home() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col gap-10">
      <div>
        <Header />
      </div>

      <div className="flex flex-col gap-4 ">
        {data.map((invoice) => (
          <Invoice invoice={invoice} key={invoice.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
