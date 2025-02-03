// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from "../Ingredient/Ingredoent";

const BurgerStack = ({stack, removeFromBurger}) => {
  return (
    <div>
      <h2>Burger Stack</h2>
      <ul>
        {stack.map((ingredient, index) => (
          <Ingredient key={index} ingredient={ingredient} onClick={() => removeFromBurger(ingredient)} isAvailIngredient={false} />
        ))}
      </ul>
    </div>
  )
};

export default BurgerStack;

// return <ul>
// {props.stack.map((ingredient, index) => (
//   <li key={index} style={{backgroundColor: ingredient.color }}>
//     {ingredient.name}
//     <button onClick={() => props.removeFromBurger(ingredient)}>x</button>
//   </li>
// ))}
// </ul>;
