import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ServiceDetail = () => {

    const params = useParams();

    console.log(params);

    const navigate = useNavigate();

    return (
        <>
        <div>Service Detail {params.service}</div>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>Regresar</button>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Home</button>
        <button className="btn btn-primary" onClick={() => navigate('/about')}>About</button>

        </>
    )
}

export default ServiceDetail