import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Categories from './pages/categories/categories';
import MealPlanner from './pages/meal planner/mealPlanner';
import Favourites from './pages/favourites/favorites';
import Recipe from './pages/recipe/recipe';
import { Route, Routes } from 'react-router-dom';
import CategoryRecipes from './pages/categoryRecipes/categoryRecipes';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/categories' element={<Categories></Categories>}></Route>
        <Route path='/categories/:categoryId' element={<CategoryRecipes></CategoryRecipes>}></Route>
        <Route path='/mealplanner' element={<MealPlanner></MealPlanner>}></Route>
        <Route path='/favorites' element={<Favourites></Favourites>}></Route>
        <Route path='/recipe/:recipeId' element={<Recipe></Recipe>}></Route>

      </Routes>
    </>
  );
}

export default App;
