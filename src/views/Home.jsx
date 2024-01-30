import React, { useContext, useState } from 'react'
import { Context } from '../store/AppContext'
import { Link } from 'react-router-dom'

const Home = () => {

    const { store, actions } = useContext(Context)

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <h2 className='text-center text-info shadow p-3'>Contact List</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {
                        store.contacts.length > 0 ?
                        store.contacts.map((contact) => {
                            return (
                                <div key={contact.id} className='border border-2 mb-3 rounded-pill'>
                                    <div className="row">
                                        <div className="col-md-2 p-2">
                                            <img src="https://picsum.photos/180/180" className='img-fluid rounded-circle m-2' alt="" />
                                        </div>
                                        <div className="col-md-10 p-2">
                                            <p>{contact.full_name}</p>
                                            <p>{contact.address}</p>
                                            <p>{contact.email}</p>
                                            <p>{contact.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }):(
                            <h4 className='text-center'>Lista de contactos vacia</h4>
                        )
                    }
                </div>
                <div className="col-md-12">
                    <Link className='btn btn-success' to="/addContact">Add new contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Home