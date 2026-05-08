import {  Routes, Route } from 'react-router-dom';

import Homepage from './pages/home-page';
import Paymentpage from './pages/payment-page';
import Ratingpage from './pages/raiting-page';
import Alliancespage from './pages/alliance-page';
import Heropage from './pages/hero-page';


import './componets/css/App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rating" element={<Ratingpage />} />
        <Route path="/payment" element={<Paymentpage />} />
        <Route path="/alliances" element={<Alliancespage />} />
        <Route path="/heroes" element={<Heropage />} />
      </Routes>
    </>
  )
}

export default App