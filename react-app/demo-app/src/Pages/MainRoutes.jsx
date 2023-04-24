import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Resturant from './Resturant'
import Movie from './Movie'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/resturant' element={<Resturant />} />
            <Route path='/movie'  element={<Movie />} />
        </Routes>
    </div>
  )
}

export default MainRoutes