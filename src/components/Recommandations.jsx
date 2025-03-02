function Recommandation () {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth >= 5

    if (isSpring) {
        return <div>C'est le printemps, rempotez ! 🌱</div>
    } else {
        return <div>Un petit peu de patience pour le rempotage... 🍂</div>
    }
}

export default Recommandation