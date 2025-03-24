'use client';

import { useState } from 'react';

interface AuthFormProps {
  type: 'login' | 'register';
  onSubmit: (email: string, password: string) => Promise<void>;
  loading?: boolean;
}

export const Form = ({ type, onSubmit, loading }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await onSubmit(email, password);
      }}
      className="flex flex-col gap-4 max-w-sm mx-auto mt-10"
    >
      <h2 className="text-xl font-bold text-center">
        {type === 'login' ? 'Login' : 'Register'}
      </h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded p-2"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded p-2"
        required
      />
      <button type="submit" className="bg-black text-white py-2 rounded">
        {type === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  );
};
