import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import HeroArea from '../components/HeroArea/HeroArea'
import './App.css'
import FoodItems from '../components/FoodItems/FoodItems'

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<HeroArea />} />
        <Route path="/foods" element={<FoodItems />} />
      </Routes>
    </div>
  )
}

export default App
