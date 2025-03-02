import { plantList } from "../datas/plantList"



/**
 * plantList est un tableau d'objets qui contient des plantes, chaque plante ayant une propriété category
 * acc est l'accumulateur, qui commence comme un tableau vide [] (valeur initiale)
 * plant représente chaque élément (objet plante) du tableau
 * reduce() est utilisé pour parcourir ce tableau et en extraire une liste unique des catégories
 * acc.includes(plant.category) vérifie si la catégorie de la plante est déjà présente dans acc :
 *     - Si oui, on ne l’ajoute pas (on retourne acc inchangé)
 *     - Sinon, on ajoute cette catégorie en utilisant concat(), qui crée un nouveau tableau    
 * @returns une liste
 */
function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    return (
        <div>
            <ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id} > {plant.name} {plant.isBestSale && <span>(Meilleure vente ! 👍)</span>}</li>
				))}
			</ul>
		</div>
    )
}

export default ShoppingList