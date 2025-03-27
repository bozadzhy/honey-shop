import { FC } from "react";
import Cart from "../components/Cart/Cart";

interface CartProps {
  className?: string;
}

const CartPage: FC<CartProps> = ({ className }) => {
  return (
    <div className={className}>
     <Cart/>
    </div>
  );
};

export default CartPage;
