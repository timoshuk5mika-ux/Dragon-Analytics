
import './css/Main.css'
import { defaultLoginData, type LoginData } from '../data/userData';
import { Flame } from 'lucide-react';


function Main() {
    const user: LoginData = defaultLoginData;

    return(<main className='main-login'>
        <div className='main-login-container'>
            <p className='main-login-subtitle'><span className='main-icon-yellow'><Flame /></span>Вход</p>
            <h1 className='main-login-title'>Welcome back, {user.username}</h1>
            <form className='main-login-form'>
                <input type='text' placeholder='Username' className='main-login-input' />
                <input type='password' placeholder='Password' className='main-login-input' />
                <button type='submit' className='main-login-button'>Sign In</button>
            </form>
        </div>
    </main >)
}

export default Main