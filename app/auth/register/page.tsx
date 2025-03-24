'use client';

import { Form } from '@/components/Auth/Form';
import { useRegister } from '@/hooks/useCustomer';

export default function RegisterPage() {
  const { handleRegister, loading } = useRegister();

  const onSubmit = async (email: string, password: string) => {
    const result = await handleRegister(email, password);

    if (result.success) {
      console.log('Customer registered:', result.customer);
    } else {
      console.error('Registration failed:', result.errors);
    }
  };

  return <Form type="register" onSubmit={onSubmit} loading={loading} />;
}
