import { useRecipeStore } from '../components/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <button onClick={generateRecommendations} style={{ marginBottom: '10px' }}>
        Refresh Recommendations
      </button>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations yet. Add favorites to see recommendations.</p>
      )}
    </div>
  );
};

export default RecommendationsList;