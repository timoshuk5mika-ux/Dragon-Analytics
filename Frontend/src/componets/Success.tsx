import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './css/Success.css';

type SuccessProps = {
  showSuccess: boolean;
};

function Success({ showSuccess }: SuccessProps) {
  return (
    <AnimatePresence>
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="success-toast"
        >
          <Check className="success-icon" />
          <span className="success-text">Подписка успешно активирована!</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Success;