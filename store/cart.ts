import { create } from "zustand";

export interface CartItem {
  id: number;
  categoryId: number;
  imageUrl: string;
  imageBackground: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

interface State {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeCartItem: (itemId: number) => void;
  clearCart: () => void;
  updateQuantity: (itemId: number, quantity: number) => void;
}

export const useCartStore = create<State>()((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (!existingItem) {
        return { cartItems: [...state.cartItems, item] };
      }
      return state;
    }),
  removeCartItem: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    })),
  clearCart: () => set({ cartItems: [] }),
  updateQuantity: (itemId: number, quantity: number) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(quantity, 1) } : item
      ),
    })),
}));
