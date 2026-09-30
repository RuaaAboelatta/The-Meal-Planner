import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Discover from './pages/discover/discover';
import Categories from './pages/categories/categories';
import MealPlanner from './pages/meal planner/mealPlanner';
import Favourites from './pages/favourites/favorites';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/discover' element={<Discover></Discover>}></Route>
        <Route path='/categories' element={<Categories></Categories>}></Route>
        <Route path='/mealplanner' element={<MealPlanner></MealPlanner>}></Route>
        <Route path='/favorites' element={<Favourites></Favourites>}></Route>
      </Routes>
    </>
  );
}

export default App;
