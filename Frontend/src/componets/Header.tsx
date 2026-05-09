import { Shield } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './css/Header.css';
function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <NavLink to="/" className="header-nav-logo">
            <Shield className="header-logo-icon" />
            <span className="header-logo-text">DRAGON<span className="header-logo-accent">OPS</span>
            </span>
          </NavLink>
        </div>
        <nav className="header-nav">
          <NavLink to="/heroes" className={({ isActive }) => isActive ? 'header-nav-active' : 'header-nav-link'}>ГЕРОИ</NavLink>
          <NavLink to="/rating" className={({ isActive }) => isActive ? 'header-nav-active' : 'header-nav-link'}>РЕЙТИНГ</NavLink>
          <NavLink to="/alliances" className={({ isActive }) => isActive ? 'header-nav-active' : 'header-nav-link' }>АЛЬЯНСЫ</NavLink>
          <NavLink to="/payment" className={({ isActive }) => isActive ? 'header-nav-active' : 'header-nav-link'}>ПОДПИСКИ</NavLink>
        </nav>
        <div className="header-actions">
          <NavLink to="/login" className="header-login-btn">ВОЙТИ</NavLink>
          <NavLink to="/register" className="header-register-btn">РЕГИСТРАЦИЯ</NavLink>
        </div>
      </div>
    </header>
  );
}
export default Header;