
import './css/Main.css';
import { defaultLoginData } from '../data/userData';


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
                <h3 className='main-panels-graph-card-title'>СИЛА</h3>
                <p className='main-panels-graph-card-info'>{((defaultLoginData.power ?? 0) / 1_000_000_000).toFixed(2)}В</p>
            </div>
            <div className='main-card main-card-dark'>
                <h3 className='main-panels-graph-card-title'>УБИЙСТВА</h3>
                <p className='main-panels-graph-card-info'>{defaultLoginData.kills}</p>
            </div>
            <div className='main-card main-card-dark'>
                <h3 className='main-panels-graph-card-title'>СМЕРТИ</h3>
                <p className='main-panels-graph-card-info'>{defaultLoginData.deaths}</p>
            </div>
        </div>
        <div className='main-panels-graph'>
        </div>
    </main>
    )
}

export default Main;