
import { useEffect, useState } from 'react';
import './css/Main.css';
import { fallbackServices, fetchServices, type Service } from '../api/catalog';



function Main () {
    const [services, setServices] = useState<Service[]>(fallbackServices);

    useEffect(() => {
        fetchServices().then(setServices);
    }, []);

    return (<main className='main'>
        <div className='mein-heading'>
            <p className='main-subtitle'>Welcome to</p>
            <h1 className='main-title'>DRAGON ANALYTICS</h1>
        </div>
        <div className='main-content'>
            <section className="hero-bg" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative'}}>
                <div style={{maxWidth: '1280px', margin: '0 auto', padding: '80px 32px 64px'}}>
                    <div style={{maxWidth: '672px'}}>
                        <div style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}} className="main-subtitle">
                            <div style={{width: '32px', height: '1px', background: '#eab308'}}></div>
                            ИГРОВАЯ АНАЛИТИКА
                        </div>
        
                        <h1 className="main-title heading-font" style={{fontSize: 'clamp(48px,7vw,84px)', lineHeight: 1, fontWeight: 900, letterSpacing: '-2px', marginBottom: 0}}>
                            COMMAND THE<br/>KINGDOM.
                        </h1>
                        <h1 className="main-title heading-font" style={{fontSize: 'clamp(48px,7vw,84px)', lineHeight: 1, fontWeight: 900, letterSpacing: '-2px', color: '#eab308'}}>
                            DOMINATE THE<br/>DRAGONS.
                        </h1>
        
                        <p className="main-desc-dark" style={{marginTop: '32px', fontSize: '17px', maxWidth: '448px', lineHeight: 1.6}}>
                            Профессиональная аналитика для игры Call of Dragons — статистика героев, альянсы, войны и персональный трекер прогресса.
                        </p>
        
                        <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginTop: '40px'}}>
                            <button
                                onClick={() => alert('Начинаем работу!')}
                                className="main-upgrade-popular main-upgrade-btn"
                                style={{width: 'auto', padding: '16px 32px', borderRadius: '12px', fontSize: '14px', letterSpacing: '1px'}}
                            >
                                НАЧАТЬ БЕСПЛАТНО →
                            </button>
                            <button
                                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                                className="main-upgrade-dark main-upgrade-btn"
                                style={{width: 'auto', padding: '16px 32px', borderRadius: '12px', fontSize: '14px'}}
                            >
                                ПОСМОТРЕТЬ РЕЙТИНГ
                            </button>
                        </div>
        
                        <div style={{marginTop: '80px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px'}}>
                            <div>
                                <div className="main-price-free">10+</div>
                                <div className="main-subtitle" style={{fontSize: '11px', marginTop: '4px'}}>СОБРАННО ГЕРОЕВ</div>
                            </div>
                            <div>
                                <div className="main-price-free">6</div>
                                <div className="main-subtitle" style={{fontSize: '11px', marginTop: '4px'}}>АЛЬЯНСОВ В БАЗЕ</div>
                            </div>
                            <div>
                                <div className="main-price-free">1.2K</div>
                                <div className="main-subtitle" style={{fontSize: '11px', marginTop: '4px'}}>АКТИВНЫХ ИГРОКОВ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section id="features" style={{padding: '80px 0', background: '#000'}}>
                <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 32px'}}>
                    <div className="main-heading">
                        <p className="main-subtitle">SERVICES</p>
                        <h2 className="main-title">УСЛУГИ ИЗ BACKEND</h2>
                        <p className="main-description main-desc-dark">
                            Эти карточки загружаются через fetch из FastAPI endpoint <span className="main-inline-code">/services</span>.
                        </p>
                    </div>
                    <div className="main-grid">
                        {services.map((service) => (
                            <div className="main-card main-card-dark" key={service.id}>
                                <div className="main-service-icon">{service.title.slice(0, 1)}</div>
                                <h3 className="main-plan-name" style={{fontSize: '15px', letterSpacing: '1px', marginBottom: '12px'}}>{service.title}</h3>
                                <p className="main-card-description">{service.description}</p>
                                <div className="main-service-price">${service.price.toFixed(2)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        
            <section style={{padding: '112px 0', background: '#09090b'}}>
                <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 32px', textAlign: 'center'}}>
                    <div style={{maxWidth: '672px', margin: '0 auto'}}>
                        <div style={{display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center'}} className="main-subtitle">
                            <div style={{width: '32px', height: '1px', background: '#eab308'}}></div>
                            PREMIUM
                        </div>
                        <h2 className="main-title heading-font" style={{fontSize: 'clamp(36px,5vw,60px)', lineHeight: 1, fontWeight: 900, letterSpacing: '-2px', marginBottom: '24px'}}>
                            UNLOCK ADVANCED<br/><span style={{color: '#eab308'}}>WAR REPORTS</span>
                        </h2>
                        <p className="main-desc-dark" style={{fontSize: '17px', maxWidth: '400px', margin: '0 auto', lineHeight: 1.6}}>
                            Получите продвинутые отчёты о войнах, калькуляторы войск и инструменты для управления альянсом.
                        </p>
                        <button
                            onClick={() => alert('Переход в Dragonlord Tier (демо)')}
                            className="main-upgrade-popular main-upgrade-btn"
                            style={{marginTop: '40px', width: 'auto', padding: '20px 40px', borderRadius: '16px', fontSize: '15px', letterSpacing: '1px'}}
                        >
                            VIEW PLANS →
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </main>)
}

export default Main
