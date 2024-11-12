import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
  );

  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) return <p>Recipe not found!</p>;

  const isFavorite = favorites.includes(recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  

  return (
    <div>

      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe}/>
      <DeleteRecipeButton recipeId={recipe.id}/>

      <button onClick={toggleFavorite} style={{ marginTop: '10px' }}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>

    </div>
  );
};

RecipeDetails.propTypes = {
  someOtherProp: PropTypes.string, // Example validation for another prop

};
export default RecipeDetails;