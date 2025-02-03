// src/components/IngredientList/IngredientList.jsx
import Ingredient from '../Ingredient/Ingredoent.jsx'

const IngredientList = ({availableIngredients, addToBurgers}) => {
  return (
    <div>
      <ul>
        <h2>Available Ingredients</h2>
        {availableIngredients.map((ingredient, index) => (
          <Ingredient key={index} ingredient={ingredient} onClick={() => addToBurgers(ingredient)} isAvailIngredient={true} />
        ))}
      </ul>
    </div>
  )
};

export default IngredientList;

// {/* <ul>
// {props.availableIngredients.map((ingredient, index) => (
//   <li key={index} style={{backgroundColor: ingredient.color }}>
//     {ingredient.name} 
//     <button onClick={() => props.addToBurgers(ingredient)}>+</button>
//     </li>
// ))}
// </ul> */}