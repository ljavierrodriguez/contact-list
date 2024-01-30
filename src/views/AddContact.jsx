import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddContact = () => {
    
    const navigate = useNavigate()

    return (
        <>
        <div>Add New Contact</div>
        <button className="btn btn-warning" onClick={() => navigate('/')}>Regresar</button>
        </>
    )
}

export default AddContact