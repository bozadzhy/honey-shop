import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

export default function Home() {
  return (
    <div className="">
      <main className="flex-col relative">
        <Header />
        <Slider />
        <Products />
      </main>
    </div>
  );
}
