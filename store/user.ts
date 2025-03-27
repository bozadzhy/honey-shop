import { create } from 'zustand';

interface UserState {
  user: { id: string; email: string } | null;
  loading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: false,
  error: null,
  fetchUser: async () => {
    set({ loading: true, error: null });

    try {
      const res = await fetch('/api/user');
      if (!res.ok) throw new Error('Ошибка загрузки пользователя');
      const data = await res.json();

      set({ user: data, loading: false });
    } catch (err) {
      set({ error: (err as Error).message, loading: false });
    }
  },
}));