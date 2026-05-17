import './css/Main.css';
import { ALLIANCES } from '../data/alliance-reting';
import { Shield } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

function Main() {
    return (
        <main className='main'>
            <div className='mein-heading'>
                <p className='main-subtitle'>Coalitions</p>
                <h1 className='main-title'>РЕЙТИНГ АЛЬЯНСОВ</h1>
            </div>
            <div className='main-aliance-grid'>     
                {ALLIANCES.map((alliance, index) => (
                    <Motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={alliance.tag}
                        className='main-card main-card-dark main-aliance-card'
                    >
                    <div key={alliance.tag}>
                        <div className='main-aliance-top'>
                            <div className='main-aliance-icon'>
                                <span className='main-aliance-icon-svg'><Shield /></span>
                            </div>
                            <div className='main-aliance-title-block'>
                                <h3 className='main-aliance-tag'>[{alliance.tag}]</h3>
                                <p className='main-aliance-name'>{alliance.name}</p>
                            </div>
                            <div className='main-aliance-rank'>
                                <span className='main-aliance-rank-label'>RANK</span>
                                <span className='main-aliance-rank-value'>#{index + 1}</span>
                            </div>
                        </div>
                        <div className='main-aliance-info'>
                            <div className='main-aliance-stat'>
                                <span className='name-stat'>СИЛА</span>
                                <span className='info-stat info-stat-yellow'>
                                    {(alliance.power / 1_000_000_000).toFixed(2)}В
                                </span>
                            </div>
                            <div className='main-aliance-stat'>
                                <span className='name-stat'>ИГРОКИ</span>
                                <span className='info-stat'>{alliance.members}</span>
                            </div>
                            <div className='main-aliance-stat'>
                                <span className='name-stat'>В/П</span>
                                <span className='info-stat'>
                                    <span className='info-stat-green'>{alliance.wars_won}</span>
                                    <span> / </span>
                                    <span className='info-stat-red'>{alliance.wars_lost}</span>
                                </span>
                            </div>
                            <div className='main-aliance-stat'>
                                <span className='name-stat'>KVK</span>
                                <span className='info-stat'>{alliance.kingdom}</span>
                            </div>
                        </div>
                    </div>
                    </Motion.div>
                ))}
            </div>
        </main>
    );
}

export default Main;