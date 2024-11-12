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

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe}/>
      <DeleteRecipeButton recipeId={recipe.id}/>
    </div>
  );
};

RecipeDetails.propTypes = {
  recipeId: PropTypes.number.isRequired, // Ensure recipeId is a required number
};
export default RecipeDetails;