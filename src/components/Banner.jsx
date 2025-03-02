import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommandation from './Recommandations'

// Fonction qui affiche la banière du site avec le titre
function Banner() {
    const title = "Oh my plant !"

    return (
        <div className="titleBanner">
            <div className="rowBanner">
                <img src={logo} alt="logo en forme de feuille" className='logoOmp'/>
                <h1 className='titleOmp'>{title}</h1> 
            </div>
            <Recommandation />
        </div>
    )
}

export default Banner