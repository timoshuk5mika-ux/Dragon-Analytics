import { motion, AnimatePresence } from 'framer-motion';
import { type Plan } from '../data/Plan';
import { X } from 'lucide-react';
import './css/Payment.css';

type PaymentProps = {
  selectedPlan: Plan | null;
  isYearly: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

function Payment({ selectedPlan, isYearly, onClose, onSuccess }: PaymentProps) {
  const handlePayment = () => {
    onClose();
    onSuccess();
  };

  return (
    <AnimatePresence>
      {selectedPlan && (
        <div className="payment-overlay">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="payment-modal"
          >
            <button onClick={onClose} className="payment-close">
              <X size={24} />
            </button>
            <h2 className="payment-title">Оплата {selectedPlan.name}</h2>
            <p className="payment-price">
              ${isYearly ? selectedPlan.yearlyPrice.toFixed(2) : selectedPlan.monthlyPrice.toFixed(2)}{' '}
              {isYearly ? 'в год' : 'в месяц'}
            </p>
            <div className="payment-fields">
              <input className="payment-input" type="text" placeholder="Имя на карте" />
              <input className="payment-input" type="text" placeholder="Номер карты" />
              <div className="payment-row">
                <input className="payment-input" type="text" placeholder="MM/YY" />
                <input className="payment-input" type="text" placeholder="CVC" />
              </div>
            </div>
            <button onClick={handlePayment} className="payment-btn">
              ОПЛАТИТЬ СЕЙЧАС
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Payment;