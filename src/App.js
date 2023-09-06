import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';
import Error from './components/Error';
import "./App.css";
const App = () => {
  return (
    <div>
      <h1>Movies App</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='movie/:id' element={<SingleMovie />} />
        <Route path='*' element={<Error />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
