import React from 'react';
import Box from '@mui/material/Box';
import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ExerciseDetail from './components/ExerciseDetail'
import Home from './components/Home'





const App=()=> {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>


        </Routes>
    <Footer/>
    </Box>
  )
}

export default App
