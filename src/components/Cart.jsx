import '../styles/Cart.css'

// Fonction qui affiche le panier
function Cart() {

    const monsteraPrice = 15
    const monkeyLeafPrice = 10
    const pothosBresilianPrice = 8

    return (
        <div className="cartOmp">
            <h2>Panier</h2>
            <ul className='listOmp'>
                <li>Monstera Deliciosa: {monsteraPrice}€</li>
                <li>Monstera Monkey Leaf : {monkeyLeafPrice}€</li>
                <li>Philodendron du Brésil : {pothosBresilianPrice}€</li>
            </ul>
            <p><strong>Total :</strong> {monsteraPrice + monkeyLeafPrice + pothosBresilianPrice}€</p>
        </div>
    )
    
}

export default Cart