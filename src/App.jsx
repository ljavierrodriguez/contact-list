import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import injectContext from './store/AppContext'
import Home from './views/Home'
import AddContact from './views/AddContact'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/addContact' element={<AddContact />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default injectContext(App)