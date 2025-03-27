import Slider from "./components/Slider/Slider";
import ProductsList from "./components/Products/ProductsList";
import { categories } from "./constants/categories";
import axios from "../axios";
import { products } from "./constants/products";


export default function Home() {
  console.log("products", products);
  return (
    <div className="">
      <main className="flex-col relative">
        <Slider />
        {categories.map(({ id, name }) => (
          <ProductsList key={id} categoryId={id} title={name} />
        ))}
      </main>
    </div>
  );
}
