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
                <table className='main-table-wrapper'>
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
                            transition={{ delay: player.rank * 0.1 }}
                            key={player.player_id}
                            className='main-table-row'
                        >
                            <td>#{player.rank}</td>
                            <td>{player.ign}</td>
                            <td>[{player.alliance}]</td>
                            <td>{(player.power / 1_000_000).toFixed(2)}M</td>
                            <td>{(player.kills / 1_000_000).toFixed(2)}M</td>
                            <td>{(player.deaths / 1_000_000).toFixed(2)}M</td>
                        </Motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    </main>)
}

export default Main