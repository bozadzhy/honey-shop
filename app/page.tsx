import Slider from "./components/Slider/Slider";
import ProductsList from "./components/Products/ProductsList";
import { categories } from "./constants/categories";

export default function Home() {
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
