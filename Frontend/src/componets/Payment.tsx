import { motion, AnimatePresence } from 'framer-motion';
import { type Plan } from '../data/Plan';
import { X } from 'lucide-react';
import './css/Payment.css';

type PaymentProps = {
  selectedPlan: Plan | null;
  isYearly: boolean;
  isProcessing: boolean;
  errorMessage: string;
  onClose: () => void;
  onPay: () => void;
};

function Payment({ selectedPlan, isYearly, isProcessing, errorMessage, onClose, onPay }: PaymentProps) {
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
            {errorMessage && <p className="payment-error">{errorMessage}</p>}
            <button onClick={onPay} className="payment-btn" disabled={isProcessing}>
              {isProcessing ? 'АКТИВАЦИЯ...' : 'ОПЛАТИТЬ СЕЙЧАС'}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Payment;
