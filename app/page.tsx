import Slider from "./components/Slider/Slider";
import ProductsList from "./components/Products/ProductsList";
import { honeyCategories } from "./constants/honeyCategories";
import axios from "../axios";
import { products } from "./constants/products";


export default function Home() {
  console.log("products", products);
  return (
    <div className="">
      <main className="flex-col relative text-[#502409;]">
        <Slider />
        {honeyCategories.map(({ id, name }) => (
          <ProductsList key={id} categoryId={id} title={name} />
        ))}
      </main>
    </div>
  );
}
