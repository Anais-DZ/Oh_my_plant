const plantList =[
    'monstera deliciosa',
    'ficus lyrata',
    'pothos argenté',
    'monstera monkey leaf',
    'yucca'
]

//pour la key des éléments du tableau, comme il n'y a pas d'id associée à ces derniers, on utilise une combinaison entre l'index du tableau et le nom de la plant qui est une string
function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant, index)=>(
                <li key={`${plant}-${index}`}> {plant} </li>
            ))}
        </ul>
    )
}

export default ShoppingList