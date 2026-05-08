import { useState } from 'react';
import { type Plan } from '../componets/Plan';

import Header from '../componets/Header';
import Main from '../componets/MainPayment';
import Footer from '../componets/Footer';
import Payment from '../componets/Payment';
import Success from '../componets/Success';

import '../componets/css/App.css';

function Paymentpage() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  const handleUpgrade = (plan: Plan) => setSelectedPlan(plan);

  const handleSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="app-wrapper app-dark">
      <Header />
      <Main onUpgrade={handleUpgrade} isYearly={isYearly} onToggleYearly={setIsYearly} />
      <Payment
        selectedPlan={selectedPlan}
        isYearly={isYearly}
        onClose={() => setSelectedPlan(null)}
        onSuccess={handleSuccess}
      />
      <Success showSuccess={showSuccess} />
      <Footer />
    </div>
  );
}

export default Paymentpage;