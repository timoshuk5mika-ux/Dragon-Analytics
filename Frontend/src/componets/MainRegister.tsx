import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldPlus } from 'lucide-react';

import { login, register } from '../api/auth';
import './css/Main.css';


function MainRegister() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            await register(email, password);
            await login(email, password);
            navigate('/payment');
        } catch {
            setMessage('Не удалось создать аккаунт. Возможно, email уже занят.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className='main-login'>
            <div className='main-login-container'>
                <p className='main-login-subtitle'><span className='main-icon-yellow'><ShieldPlus /></span>Регистрация</p>
                <h1 className='main-login-title'>Создать аккаунт</h1>
                <form className='main-login-form' onSubmit={handleSubmit}>
                    <input
                        type='email'
                        placeholder='Email'
                        className='main-login-input'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        className='main-login-input'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        minLength={8}
                        required
                    />
                    <button type='submit' className='main-login-button' disabled={isLoading}>
                        {isLoading ? 'Creating...' : 'Create Account'}
                    </button>
                    {message && <p className='main-login-message'>{message}</p>}
                    <Link to='/login' className='main-login-link'>Уже есть аккаунт</Link>
                </form>
            </div>
        </main>
    );
}

export default MainRegister;
