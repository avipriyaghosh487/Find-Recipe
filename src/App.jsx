import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Favourites from './pages/favourites/Favourites';
import Details from './pages/details/Details';

function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar />
        <Routes>
          <Route path='/' element= {
            <Home />
          }/>
          <Route path='/favourites' element= {
            <Favourites />
          } />
          <Route path='/recipe-item/:id' element={<Details />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App