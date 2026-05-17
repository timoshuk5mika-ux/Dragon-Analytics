import {  Routes, Route } from 'react-router-dom';

import Homepage from './pages/home-page';
import Paymentpage from './pages/payment-page';
import Ratingpage from './pages/raiting-page';
import Alliancespage from './pages/alliance-page';
import Heropage from './pages/hero-page';
import Regpage from './pages/reg-page';
import Loginpage from './pages/login-page';
import ProfilePage from './pages/progile-page';

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
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Regpage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App