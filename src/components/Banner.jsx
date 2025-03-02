import '../styles/Banner.css'
import logo from '../assets/logo.png'

// Fonction qui affiche la banière du site avec le titre
function Banner() {
    const title = "Oh my plant !"

    return (
        <div className="titleBanner">
            <img src={logo} alt="logo en forme de feuille" className='logoOmp'/>
            <h1 className='titleOmp'>{title}</h1>
        </div>
    )
}

export default Banner