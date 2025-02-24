import { create } from "zustand"; // стейт менеджер для категорий (при скроле изменять категорию).  если нужно чтото по сложнее используй ртк квери
interface State {
  activeId: number;
  setActiveId: (activeId: number) => void;
}

export const useCategoryStore = create<State>()((set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
}));
