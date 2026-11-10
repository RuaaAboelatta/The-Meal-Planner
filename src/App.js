import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Categories from './pages/categories/categories';
import Search from './pages/search/Search';
import MealPlanner from './pages/meal planner/mealPlanner';
import Favourites from './pages/favorites/favorites';
import RecipeDetails from './pages/recipe/recipeDetails';
import { Route, Routes } from 'react-router-dom';
import CategoryRecipes from './pages/categoryRecipes/categoryRecipes';
import { useFeedback } from './hooks/useFeedback';
import FeedbackMessage from './components/feedbackMessage/FeedbackMessage';

function App() {
  const {message} = useFeedback()
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/categories' element={<Categories></Categories>}></Route>
        <Route path='/categories/:categoryName' element={<CategoryRecipes></CategoryRecipes>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/mealplanner' element={<MealPlanner></MealPlanner>}></Route>
        <Route path='/favorites' element={<Favourites></Favourites>}></Route>
        <Route path='/recipe/:recipeId' element={<RecipeDetails></RecipeDetails>}></Route>
      </Routes>
      {message ? <FeedbackMessage msg={message}></FeedbackMessage> : ""}
    </>
  );
}

export default App;
