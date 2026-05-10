import './css/Main.css';
import { HEROES } from '../data/heroes';


function Main () {
    return(
    <main className='main'>
        <div className='mein-heading'>
            <p className='main-subtitle'>ГЕРОИ</p>
            <h1 className='main-title'>ВЫБЕРИ СВОЕГО ГЕРОЯ</h1>
        </div>
        <div className='main-grid'>
            {HEROES.map((hero) => (
                <div key={hero.hero_id} className='main-card main-card-dark'>
                    <img src={hero.image} alt={hero.name} className='main-card-image' />
                    <div className='main-card-content'>
                        <h2 className='main-card-title'>{hero.name}</h2>
                        <p className='main-card-description'>{hero.description_en}</p>
                    </div>
                </div>
            ))}
        </div>
    </main>)
}

export default Main