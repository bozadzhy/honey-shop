"use client";
import { FC, Fragment } from "react";
import { useCartStore } from "@/store/cart";
import ProductCard from "../ProductCard/ProductCard";
import Container from "../Container/Container";
import { cn } from "./../../../lib/utils";
import CartTable from "./../CartTable/CartTable";

interface CartProps {
  className?: string;
}

const Cart: FC<CartProps> = ({ className }) => {
  const { cartItems } = useCartStore((state) => state);
  console.log(cartItems)
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <div className={cn("inline-flex mt-40 w-full", className)}>
        {cartItems.length === 0 ? (
          "Cart is empty"
        ) : (
          <CartTable products={cartItems} />
        )}
      </div>
      <span>Total price:{totalPrice}</span>
    </Container>
  );
};

export default Cart;
