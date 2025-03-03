import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommandation from './Recommandations'

// Fonction qui affiche la banière du site avec le titre
function Banner({ children }) {
    return (
        <div className="titleBanner">{children}</div>
    )
}

export default Banner