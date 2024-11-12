// RecipeList component
import {useRecipeStore} from '../components/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  // const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    
    <div>
      
        {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description.substring(0, 50)}...</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No recipes added yet.</p>
      )}
        </div>
  );
};

export default RecipeList;