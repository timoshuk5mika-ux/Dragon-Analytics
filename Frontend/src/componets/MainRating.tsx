import './css/Main.css';
import { LEADERBOARD } from '../data/leaderboard';
import { motion as Motion } from 'framer-motion';

function Main () {
    return (<main className='main'>
        <div className='mein-heading'>
            <p className='main-subtitle'>Ranking</p>
            <h1 className='main-title'>ГЛОБАЛЬНЫЙ РЕЙТИНГ</h1>
        </div>
        <div className='main-table'>
            <Motion.table
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='main-table-wrapper'
            >
            <thead className='main-table-head'>
                <tr>
                    <th>Ранг</th>
                    <th>Игрок</th>
                    <th>Альянс</th>
                    <th>Сила</th>
                    <th>Убийства</th>
                    <th>Потери</th>
                </tr>
            </thead>
            <tbody className='main-table-body'>
            {LEADERBOARD.map(player => (
                <Motion.tr
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + player.rank * 0.07 }}
                    key={player.player_id}
                    className='main-table-row'
                >
                    <td className={
                    player.rank === 1 ? 'main-table-player-rank first' :
                    player.rank === 2 ? 'main-table-player-rank second' :
                    player.rank === 3 ? 'main-table-player-rank third' :
                    'main-table-player-rank'
                    }>#{player.rank}</td>
                    <td className='main-table-player-name'>{player.ign}</td>
                    <td className='info-stat-yellow'>[{player.alliance}]</td>
                    <td className='main-table-player-power'>{(player.power / 1_000_000).toFixed(2)}M</td>
                    <td className='info-stat-orange'>{(player.kills / 1_000_000).toFixed(2)}M</td>
                    <td className='info-stat-red'>{(player.deaths / 1_000_000).toFixed(2)}M</td>
                </Motion.tr>
            ))}
            </tbody>
            </Motion.table>
        </div>
    </main>)
}

export default Main