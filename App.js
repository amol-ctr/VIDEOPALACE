import { ReactDOM } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Box } from '@mui/material'
import React from 'react'
import {Navbar, Searchfeed, Feed, Channeldetail, Videodetail} from './components'


const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:"#000"}}>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' element={<Videodetail/>}/>
          <Route path='/channel/:id' element={<Channeldetail/>}/>
          <Route path='/search/:searchTerm' element={<Searchfeed/>}/>


        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App