import Footer from "../Footer/footer";
import Header from "../Header/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Welcome home...!
      </div>
      <Footer />
    </div>
  );
}
