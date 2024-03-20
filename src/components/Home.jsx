import { data } from "../data/data";
import Header from "./Header";
import Invoice from "./Invoice";

function Home() {
  return (
    <div>
      <Header />
      {data.map((invoice) => (
        <Invoice invoice={invoice} key={invoice.id} />
      ))}
    </div>
  );
}

export default Home;
