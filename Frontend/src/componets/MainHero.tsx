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
                    <motion.select
                        className='main-filter-select'
                        value={faction}
                        onChange={e => setFaction(e.target.value)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {factions.map(f => (
                            <option key={f} value={f}>ФРАКЦИЯ: {f.toUpperCase()}</option>
                        ))}
                    </motion.select>
                    <motion.select
                        className='main-filter-select'
                        value={rarity}
                        onChange={e => setRarity(e.target.value)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        {rarities.map(r => (
                            <option key={r} value={r}>РЕДКОСТЬ: {r.toUpperCase()}</option>
                        ))}
                    </motion.select>
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
                        <img src={hero.image} alt={hero.name} className='main-card-image' />
                        <div className='main-card-content'>
                            <h2 className='main-card-title'>{hero.name}</h2>
                            <p className='main-card-description'>{hero.description_en}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}

export default Main;