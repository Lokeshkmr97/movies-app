// import React, { useContext } from 'react'
// import { AppContext } from './Context'
import Search from './Search';
import Movies from './Movies';

const Home = () => {
    // const name=useContext(AppContext); parent se data ko child me pass karwane k liye use kiya jata hat useContext
  return (
    <div className='container'>
      <Search />
      <Movies />
     
    </div>
  )
}

export default Home
