import './css/Main.css';
import { defaultLoginData } from '../data/userData';
import { Camera } from 'lucide-react';


function Main() {
    return (<main className='main'>
        <div className='mein-heading'>
            <p className='main-subtitle'>Профиль</p>
            <h1 className='main-title'>ВАШ ПРОФИЛЬ</h1>
        </div>
        <div className='main-profile-wrap'>
            <div className='main-card main-card-dark main-profile-card'>
                <div className='main-card-header'>
                    <p className='main-plan-title main-plan-title-dark'>Ваш профиль</p>
                </div>
                <div className='main-profile-info'>
                    <div className='main-avatar-wrap'>
                        <img className='main-avatar' src='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png' alt='main-avatar' />
                        <button className='main-avatar-button'><Camera /></button>
                    </div>
                    <div className='main-profile-details'>
                        <h1 className='main-plan-name'>{defaultLoginData.email}</h1>
                        <p className='main-profile-tier'><span className='main-plan-title-dark'>TIER: </span><span className='info-stat-yellow'>{defaultLoginData.tier}</span></p>
                    </div>
                </div>
            </div>
            <div>
                <div className='main-card main-card-dark main-profile-card'>
                    <div className='main-card-header'>
                        <p className='main-plan-title main-plan-title-dark'>Игровые данные</p>
                    </div>
                    <div className='main-profile-info'>
                        <div className='main-profile-grid'>
                            <div className='main-profile-field main-profile-card-size'>
                                <p className='main-plan-title-dark'>NAME</p>
                                <input className='main-login-input' type='text' value={defaultLoginData.name} readOnly />
                            </div>
                            <div className='main-profile-field main-profile-card-size'>
                                <p className='main-plan-title-dark'>IGN</p>
                                <input className='main-login-input' type='text' value={defaultLoginData.email} readOnly />
                            </div>
                            <div className='main-profile-field main-profile-card-size'>
                                <p className='main-plan-title-dark'>PASSWORD</p>
                                <input className='main-login-input' type='password' value={defaultLoginData.password} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>)

}

export default Main;    