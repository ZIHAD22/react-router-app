import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import HeroArea from '../components/HeroArea/HeroArea'
import OrderItems from '../components/OrderItems/OrderItems'
import './App.css'

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<HeroArea />} />
        <Route path="/order" element={<OrderItems />} />
      </Routes>
    </div>
  )
}

export default App
