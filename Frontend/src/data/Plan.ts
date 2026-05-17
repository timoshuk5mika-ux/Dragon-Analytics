export type Plan = {
  id: string;
  name: string;
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  popular?: boolean;
};

export const plans: Plan[] = [
  { id: "recruit", name: "RECRUIT", title: "Базовая статистика для новых командиров", monthlyPrice: 0, yearlyPrice: 0, features: ["Базовый профиль", "Топ-50 рейтинга", "Ограниченная инфо о героях"] },
  { id: "knight", name: "KNIGHT", title: "Для серьёзных игроков", monthlyPrice: 9.99, yearlyPrice: 95.90, features: ["Все параметры героев", "Полный рейтинг", "Аналитика альянсов", "Тренд силы 7 дней"] },
  { id: "dragonlord", name: "DRAGONLORD", title: "Управляй королевством", monthlyPrice: 19.99, yearlyPrice: 191.90, features: ["Всё от Knight", "Отчёты о войнах", "Калькуляторы войск", "Уведомления в реальном времени", "Экспорт CSV"], popular: true },
  { id: "mythic", name: "MYTHIC", title: "Максимальная мощь для лидеров", monthlyPrice: 49.99, yearlyPrice: 479.90, features: ["Всё от Dragonlord", "Инструменты управления альянсом", "Доступ к API", "Приоритетная поддержка", "Кастомная аналитика"] },
];
