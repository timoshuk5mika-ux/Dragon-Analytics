
import './css/Main.css';
import { defaultLoginData } from '../data/userData';
import { Zap, Sword, Skull, Trophy } from 'lucide-react';



function Main() {

    return (<main className='main'>
        <div className='mein-heading'>
            <p className='main-subtitle'>C ВОЗРАЩЕНИЕМ</p>
            <h1 className='main-title'>{defaultLoginData.name}</h1>
            <div className='main-title-panels'>
                <p className='main-aliance-name'>Ранг: <span className='info-stat-white'>{defaultLoginData.rang}</span></p>
                <p className='main-aliance-name'>Королевство: <span className='info-stat-white'>{defaultLoginData.kindom}</span></p>
                <p className='main-aliance-name'>Альянс: <span className='info-stat-yellow'>[ {defaultLoginData.alliance} ]</span></p>
            </div>
        </div>
        <div className='main-grid'>
            <div className='main-card main-card-dark'>
                <div className='main-card-header main-card-margin-zero'>
                    <div className='main-hero-header main-title-card-margin'>
                        <p className='main-plan-title main-plan-title-dark '>СИЛА</p>
                        <Zap className='info-stat-yellow'/>
                    </div>
                    <h3 className='main-plan-name info-stat-yellow'>{((defaultLoginData.power ?? 0) / 1_000_000_000).toFixed(2)}В</h3>
                </div>
            </div>
            <div className='main-card main-card-dark'>
                <div className='main-card-header main-card-margin-zero'>
                    <div className='main-hero-header main-title-card-margin'>
                        <p className='main-plan-title main-plan-title-dark '>УБИЙСТВА</p>
                        <Sword className='info-stat-orange' />
                    </div>
                    <h3 className='main-plan-name info-stat-orange'>{((defaultLoginData.power ?? 0) / 1_000_000_000).toFixed(2)}В</h3>
                </div>
            </div>
            <div className='main-card main-card-dark '>
                <div className='main-card-header main-card-margin-zero'>
                    <div className='main-hero-header main-title-card-margin'>
                        <p className='main-plan-title main-plan-title-dark'>СМЕРТИ</p>
                        <Skull className='info-stat-red' />
                    </div>
                    <h3 className='main-plan-name info-stat-red'>{((defaultLoginData.power ?? 0) / 1_000_000_000).toFixed(2)}В</h3>
                </div>
            </div>
            <div className='main-card main-card-dark'>
                <div className='main-card-header main-card-margin-zero'>
                    <div className='main-hero-header main-title-card-margin'>
                        <p className='main-plan-title main-plan-title-dark'>K/D</p>
                        <Trophy className='info-stat-yellow' />
                    </div>
                    <h3 className='main-plan-name info-stat-yellow'>{((defaultLoginData.power ?? 0) / 1_000_000_000).toFixed(2)}В</h3>
                </div>
            </div>
        </div>
        <div className='main-profile-wrap'>
            <div className=''>

            </div>
        </div>
    </main>
    )
}

export default Main;