import { Route, Routes } from 'react-router-dom'
import './App.css'
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
