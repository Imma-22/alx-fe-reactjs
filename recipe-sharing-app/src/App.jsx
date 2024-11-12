import { BrowserRouter , Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
     
      <Routes>
          <Route 
          path="/" 
          element={

       <>
      <AddRecipeForm/>
      <RecipeList/>
      <FavoritesList/>
      <RecommendationsList/> 
      </> 
      }
      />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />}/>
      </Routes> 
    </div>
</BrowserRouter>
  );
}

export default App;
