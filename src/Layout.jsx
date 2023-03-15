import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import About from './pages/About'
import Mision from './pages/About/Mision'
import Objetives from './pages/About/Objetives'
import Vision from './pages/About/Vision'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ServiceDetail from './pages/ServiceDetail'
import Services from './pages/Services'

const Layout = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/service/:service/detail" element={<ServiceDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path='/about' element={<About />}>
                    <Route index path="mision" element={<Mision />} />
                    <Route path="vision" element={<Vision />} />
                    <Route path="objetives" element={<Objetives />} />
                </Route>
                <Route path="/" element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout