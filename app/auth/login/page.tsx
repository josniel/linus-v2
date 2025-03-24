'use client';

import { Form } from '@/components/Auth/Form';
import { useLogin } from '@/hooks/useCustomer';

export default function LoginPage() {
  const { handleLogin, loading } = useLogin();

  const onSubmit = async (email: string, password: string) => {
    const result = await handleLogin(email, password);

    if (result.success) {
      console.log('Logged in! Token:', result.accessToken);
      // Aquí puedes redirigir, mostrar mensaje o actualizar contexto
    } else {
      console.error('Login failed:', result.errors);
    }
  };

  return <Form type="login" onSubmit={onSubmit} loading={loading} />;
}
