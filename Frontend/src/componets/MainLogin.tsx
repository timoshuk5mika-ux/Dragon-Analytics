import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import './css/Main.css'
import { Flame } from 'lucide-react';
import { getMe, login } from '../api/auth';


function Main() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            await login(email, password);
            const user = await getMe();
            setMessage(`Вход выполнен: ${user.email}`);
        } catch {
            setMessage('Не удалось войти. Проверь email и пароль.');
        } finally {
            setIsLoading(false);
        }
    };

    return(<main className='main-login'>
        <div className='main-login-container'>
            <p className='main-login-subtitle'><span className='main-icon-yellow'><Flame /></span>Вход</p>
            <h1 className='main-login-title'>Войти в аккаунт</h1>
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
                    {isLoading ? 'Signing in...' : 'Sign In'}
                </button>
                {message && <p className='main-login-message'>{message}</p>}
                <Link to='/register' className='main-login-link'>Создать аккаунт</Link>
            </form>
        </div>
    </main >)
}

export default Main
