import { type Plan, plans as fallbackPlans } from '../data/Plan';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/backend-api';

type ApiPlan = {
  id: string;
  name: string;
  title: string;
  monthly_price: number;
  yearly_price: number;
  features: string[];
  popular?: boolean;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  price: number;
};

export const fallbackServices: Service[] = [
  {
    id: 'hero-analytics',
    title: 'Hero Analytics',
    description: 'База героев, характеристики и персональная аналитика прогресса.',
    price: 9.99,
  },
  {
    id: 'alliance-rating',
    title: 'Alliance Rating',
    description: 'Рейтинги альянсов, сила, войны и активность игроков.',
    price: 14.99,
  },
  {
    id: 'war-reports',
    title: 'War Reports',
    description: 'Отчёты по войнам, потерям, убийствам и KVK.',
    price: 19.99,
  },
  {
    id: 'api-access',
    title: 'API Access',
    description: 'API-доступ к данным проекта для интеграций.',
    price: 49.99,
  },
];

function toPlan(plan: ApiPlan): Plan {
  return {
    id: plan.id,
    name: plan.name,
    title: plan.title,
    monthlyPrice: plan.monthly_price,
    yearlyPrice: plan.yearly_price,
    features: plan.features,
    popular: plan.popular,
  };
}

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export async function fetchPlans(): Promise<Plan[]> {
  try {
    const apiPlans = await request<ApiPlan[]>('/plans');
    return apiPlans.map(toPlan);
  } catch (error) {
    console.warn('Failed to load plans from API. Using fallback data.', error);
    return fallbackPlans;
  }
}

export async function fetchServices(): Promise<Service[]> {
  try {
    return await request<Service[]>('/services');
  } catch (error) {
    console.warn('Failed to load services from API. Using fallback data.', error);
    return fallbackServices;
  }
}
