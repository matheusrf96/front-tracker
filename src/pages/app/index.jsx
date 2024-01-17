import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Overview from '../overview'
import Landing from '../landing'
import Search from '../search'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Overview />} />
                <Route path='/landing' element={<Landing />} />
                <Route path='/search' element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App