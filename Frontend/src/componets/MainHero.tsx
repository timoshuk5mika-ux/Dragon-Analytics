import { useState } from 'react';
import './css/Main.css';
import { HEROES } from '../data/heroes';
import { motion } from 'framer-motion';


function Main() {
    const [faction, setFaction] = useState('Все');
    const [rarity, setRarity] = useState('Все');

    const factions = ['Все', ...new Set(HEROES.map(h => h.faction))];
    const rarities = ['Все', 'Legendary', 'Epic', 'Rare'];

    const filtered = HEROES.filter(h => {
        return (faction === 'Все' || h.faction === faction) &&
               (rarity === 'Все' || h.rarity === rarity);
    });

    return (
        <main className='main'>
            <div className='mein-heading-heroes'>
                <div className='mein-heading'>
                    <p className='main-subtitle'>Codex</p>
                    <h1 className='main-title'>КАТАЛОГ ГЕРОЕВ</h1>
                </div>
                <div className='main-filters'>
                    <select
                        className='main-filter-select'
                        value={faction}
                        onChange={e => setFaction(e.target.value)}
                    >
                        {factions.map(f => (
                            <option key={f} value={f}>ФРАКЦИЯ: {f.toUpperCase()}</option>
                        ))}
                    </select>
                    <select
                        className='main-filter-select'
                        value={rarity}
                        onChange={e => setRarity(e.target.value)}
                    >
                        {rarities.map(r => (
                            <option key={r} value={r}>РЕДКОСТЬ: {r.toUpperCase()}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='main-grid'>
                {filtered.map((hero, index) => (
                    <motion.div
                        key={hero.hero_id}
                        className='main-card main-card-dark main-hero-card'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className='main-hero-image-wrap'>
                            <img src={hero.image} alt={hero.name} className='main-card-image' />
                            <span className={`main-hero-rarity main-hero-rarity-${hero.rarity.toLowerCase()}`}>
                                {hero.rarity}
                            </span>
                        </div>
                        <div className='main-card-info'>
                            <div className='main-hero-header'>
                                <h3 className='main-card-name'>{hero.name}</h3>
                                <span className='main-hero-power'>{(hero.power / 1000).toFixed(1)}K</span>
                            </div>
                            <p className='main-hero-meta'>{hero.faction} · {hero.role}</p>
                            <p className='main-card-description'>{hero.description_ru}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}

export default Main;