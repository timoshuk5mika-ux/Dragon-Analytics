import { plans, type Plan } from './Plan';
import { Star, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import './css/Main.css';

type MainProps = {
  onUpgrade: (plan: Plan) => void;
  isYearly: boolean;
  onToggleYearly: (value: boolean) => void;
};

function Main({ onUpgrade, isYearly, onToggleYearly }: MainProps) {
  return (
    <main className="main">
      <div className="main-heading">
        <p className="main-subtitle">SUBSCRIPTIONS</p>
        <h1 className="main-title">ВЫБЕРИ СВОЙ РАНГ</h1>
        <p className="main-description main-desc-dark">
          От новобранцев до повелителей драконов — у нас есть подписка под твой стиль игры.
        </p>
      </div>

      <div className="main-toggle-wrap">
        <div className="main-toggle">
          <button
            onClick={() => onToggleYearly(false)}
            className={`main-toggle-btn ${!isYearly ? 'main-toggle-active' : 'main-toggle-inactive'}`}
          >
            Ежемесячно
          </button>
          <button
            onClick={() => onToggleYearly(true)}
            className={`main-toggle-btn ${isYearly ? 'main-toggle-active' : 'main-toggle-inactive'}`}
          >
            Ежегодно
            <span className="main-badge">−20%</span>
          </button>
        </div>
      </div>

      <div className="main-grid">
        {plans.map((plan, index) => {
          const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
          const period = isYearly ? '/год' : '/месяц';

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`main-card main-card-dark ${plan.popular ? 'main-card-popular' : ''}`}
            >
              {plan.popular && (
                <div className="main-popular-badge">
                  <Star className="main-popular-badge-icon" /> ПОПУЛЯРНЫЙ
                </div>
              )}

              <div className="main-card-header">
                <h3 className="main-plan-name">{plan.name}</h3>
                <p className="main-plan-title main-plan-title-dark">{plan.title}</p>
              </div>

              <div className="main-price-wrap">
                {price === 0 ? (
                  <div className="main-price-free">Бесплатно</div>
                ) : (
                  <div>
                    <span className="main-price">${price.toFixed(2)}</span>
                    <span className="main-period">{period}</span>
                  </div>
                )}
              </div>

              <ul className="main-features">
                {plan.features.map((feature: string, i: number) => (
                  <li key={i} className="main-feature">
                    <Check className="main-feature-icon" />
                    <span className="main-feature-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => price !== 0 && onUpgrade(plan)}
                className={`main-upgrade-btn ${plan.popular ? 'main-upgrade-popular' : 'main-upgrade-dark'}`}
              >
                {price === 0 ? 'ТЕКУЩИЙ ПЛАН' : 'УЛУЧШИТЬ'}
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}

export default Main;