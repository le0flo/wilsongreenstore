import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Homepage } from './pages/Homepage'

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </>
  )
}
