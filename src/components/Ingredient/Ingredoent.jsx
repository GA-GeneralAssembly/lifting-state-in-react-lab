const Ingredient = ({ingredient, onClick, isAvailIngredient}) => {
  return (
    <>
       <ul>
          <li style={{backgroundColor: ingredient.color }}>
            {ingredient.name} 
            <button onClick={() => onClick(ingredient)}>
              {isAvailIngredient ? '+' : 'x'}
              </button>
            </li>
      </ul>
    </>
  )
}

export default Ingredient