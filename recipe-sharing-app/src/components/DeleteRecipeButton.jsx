import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';
import PropTypes from 'prop-types';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Redirect to the home page after deletion
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '10px', backgroundColor: 'red', color: 'white', padding: '5px 10px' }}>
      Delete Recipe
    </button>
  );
};

DeleteRecipeButton.propTypes = {
  recipeId: PropTypes.number.isRequired, // Ensure recipeId is a required number
};
export default DeleteRecipeButton;