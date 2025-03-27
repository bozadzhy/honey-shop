'use client';

import { signIn } from 'next-auth/react';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // const result = await signIn('credentials', {
    //   redirect: false,
    //   email,
    //   password,
    // });

    // setLoading(false);
    
    // if (result?.error) {
    //   setError(result.error);
    // } else {
    //   router.push('/dashboard');
    // }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Вход</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Пароль</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition"
            disabled={loading}
          >
            {loading ? 'Загрузка...' : 'Войти'}
          </button>
        </form>
        <div className="mt-4 text-center space-y-2">
          <button
            onClick={() => signIn('google')}
            className="w-full py-2 bg-red-500 text-white hover:bg-red-600 rounded-lg transition"
          >
            Войти через Google
          </button>
          <button
            onClick={() => router.push('/register')}
            className="w-full py-2 bg-green-500 text-white hover:bg-green-600 rounded-lg transition"
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
}