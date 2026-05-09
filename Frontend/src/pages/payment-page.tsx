// библиотека реакт
import { useState } from 'react';

// импорт таблицы планов подписки из папки компоненты, для типизации
import { type Plan } from '../data/Plan';

// импорт компонентов страницы оплаты

// это шапка, она типо сверху находится, там логотип и навигация
import Header from '../componets/Header';
// это основной блок страницы, там описаны планы подписки и кнопки для их выбора
import Main from '../componets/MainPayment';
// это типо штука снизу где твой тег
import Footer from '../componets/Footer';
// это когда ты такаешь на обновить и там типо карту вводишь и там всякие данные, это компонент оплаты
import Payment from '../componets/Payment';
// снизу штука справа которая показывает что ты успешно оплатил
import Success from '../componets/Success';

// импорт стилей
import '../componets/css/App.css';

function Paymentpage() {
  // --- блок ненужной хуйни для управления состоянием выбранного плана, отображения успеха оплаты и переключения между месячной и годовой оплатой
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  const handleUpgrade = (plan: Plan) => setSelectedPlan(plan);

  const handleSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };
  // ---

  return (
    // основная обертка страницы, там внутри все компоненты
    // так же в className указано app-dark, это для темной темы, там в стилях прописано что если есть этот класс то фон темный и текст светлый
    <div className="app-wrapper app-dark">
      {/* хедер, который импортировали  */}
      <Header />
      {/* Мейн, в который передается информация о том какой план выбран, включена ли годовая оплата и функция для переключения между месячной и годовой оплатой */}
      <Main onUpgrade={handleUpgrade} isYearly={isYearly} onToggleYearly={setIsYearly} />
      {/* окошечко с оплатой, в который передается информация о выбранном плане, включена ли годовая оплата, функция для закрытия окна и функция для отображения успеха оплаты */}
      <Payment
        selectedPlan={selectedPlan}
        isYearly={isYearly}
        onClose={() => setSelectedPlan(null)}
        onSuccess={handleSuccess}
      />
      {/* окошечко с успехом оплаты*/}
      <Success showSuccess={showSuccess} />
      {/* снизу хуйня */}
      <Footer />
    </div>
  );
}

export default Paymentpage;