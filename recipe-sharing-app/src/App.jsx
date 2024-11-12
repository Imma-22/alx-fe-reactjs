import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


function App() {
  return (
    <Router>
      <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Recipe Sharing App</h1>
      <Routes>
          <Route path="/" element={
            <>
      <AddRecipeForm/>
      <RecipeList/>  
      </> 
      } />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
    </Routes>  
    </div>
</Router>
  );
}

export default App;
