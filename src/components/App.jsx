import { useState } from 'react'
import '../styles/App.css'
import Banner from '../components/Banner'
import logo from '../assets/logo.png'
import Recommandation from './Recommandations'
import Cart from '../components/Cart'
import ShoppingList from '../components/ShoppingList'

function App() {

  return (
    <div>
          <Banner>
            <div className="rowBanner">
                <img src={logo} alt="logo en forme de feuille" className='logoOmp'/>
                <h1 className='titleOmp'>Oh my plant !</h1> 
            </div>
            <Recommandation />
          </Banner>
            
          <Cart />
          <ShoppingList />
    </div>
  )
}

export default App

//arrêt à l'exercice de créer un componant Plantitem qui sera un composant enfant de shoppingList.
//modification de banner.jsx pour lui mettre children et app.jsx
