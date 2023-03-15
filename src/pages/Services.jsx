import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <div>Services</div>
            <Link to="/service/1/detail">Servicio 1</Link>
            <Link to="/service/2/detail">Servicio 2</Link>
            <Link to="/service/3/detail">Servicio 3</Link>
        </>
    )
}

export default Services