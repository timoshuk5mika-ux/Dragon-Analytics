import { getAccessToken } from './auth';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/backend-api';

export type Subscription = {
  id: number;
  user_id: number;
  plan: string;
  status: string;
  expires_at: string;
};

export async function fakePay(plan: string, billingPeriod: 'monthly' | 'yearly'): Promise<Subscription> {
  const token = getAccessToken();

  if (!token) {
    throw new Error('AUTH_REQUIRED');
  }

  const response = await fetch(`${API_BASE_URL}/api/v1/fake-payment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      plan,
      billing_period: billingPeriod,
    }),
  });

  if (!response.ok) {
    throw new Error(`Fake payment failed: ${response.status}`);
  }

  return response.json();
}
