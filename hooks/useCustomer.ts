// hooks/useRegister.ts
'use client';

import { useMutation } from '@apollo/client';
import { REGISTER_CUSTOMER, LOGIN_CUSTOMER } from '@/lib/shopify';

export const useRegister = () => {
  const [registerCustomerMutation, { loading, error, data }] =
    useMutation(REGISTER_CUSTOMER);

  const handleRegister = async (email: string, password: string) => {
    try {
      const { data } = await registerCustomerMutation({
        variables: {
          input: {
            email,
            password,
          },
        },
      });

      const userErrors = data?.customerCreate?.userErrors || [];
      const customer = data?.customerCreate?.customer;

      if (userErrors.length > 0) {
        console.warn('User errors:', userErrors);
        return { success: false, errors: userErrors };
      }

      return { success: true, customer };
    } catch (err) {
      console.error('Register error', err);
      return { success: false, errors: [{ message: 'Internal error' }] };
    }
  };

  return {
    loading,
    error,
    data,
    handleRegister,
  };
};

export const useLogin = () => {
  const [loginCustomerMutation, { loading, error, data }] =
    useMutation(LOGIN_CUSTOMER);

  const handleLogin = async (email: string, password: string) => {
    try {
      const { data } = await loginCustomerMutation({
        variables: {
          input: {
            email,
            password,
          },
        },
      });

      const response = data?.customerAccessTokenCreate;
      const userErrors = response?.userErrors || [];
      const accessToken = response?.customerAccessToken?.accessToken;

      if (userErrors.length > 0) {
        console.warn('User errors:', userErrors);
        return { success: false, errors: userErrors };
      }

      if (accessToken) {
        localStorage.setItem('customerAccessToken', accessToken);
        return { success: true, accessToken };
      }

      return {
        success: false,
        errors: [{ message: 'No access token received' }],
      };
    } catch (err) {
      console.error('Login error', err);
      return { success: false, errors: [{ message: 'Internal error' }] };
    }
  };

  return {
    loading,
    error,
    data,
    handleLogin,
  };
};
