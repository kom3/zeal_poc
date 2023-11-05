import Footer from "../Footer/footer";
import Header from "../Header/header";
import { LineChart } from "../charts/lineChart/lineChart";
import "./home.scss";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="body_wrpr">
        <LineChart />
      </div>

      <Footer />
    </div>
  );
}
