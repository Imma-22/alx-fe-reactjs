import { useRecipeStore } from './recipeStore';
import { useMemo } from 'react';

const FavoritesList = () => {
  const favoritesIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  const favoriteRecipes = useMemo(() => {
    return favoritesIds.map((id) => recipes.find((recipe) => recipe.id === id));
  }, [favoritesIds, recipes]);

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;