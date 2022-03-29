import { Outlet, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import HeroArea from '../components/HeroArea/HeroArea'
import './App.css'
import FoodItems from '../components/FoodItems/FoodItems'
import FoodRecipe from '../components/FoodRecipe/FoodRecipe'
import NotFound from '../components/NotFound/NotFound'

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<HeroArea />} />
        <Route path="/foods" element={<FoodItems />} />
        <Route path="foods/:foodId" element={<FoodRecipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
