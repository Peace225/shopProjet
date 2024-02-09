import React from 'react'
import Header from '../../Header';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup() {
  return (
    <>
        <Header/>
        <div  className='signup template d-flex justify-content-center align-items-center  vh-100 bg-white' style={{margin:100}}>
        <div className='form_container p-5 rounder bg-success rounded'>
            <form>
                <h3 className='text-center  text-warning'>S'inscrire</h3>
                <div className='mb-2'>
                    <label htmlFor="nom" className='text-white'> Nom</label>
                    <input type="text" placeholder='Enter votre Nom'  className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="prenoms" className='text-white'> Prenoms</label>
                    <input type="text" placeholder='Enter votre Prenoms'  className='form-control'/>
                </div>
                <div className='mb-2 text-white'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter  Votre Email'  className='form-control'/>
                </div>
                <div className='mb-2 text-white'>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" placeholder='Enter Votre Mot de passe'  className='form-control'/>
                </div>
                
                
                <div className='d-grid'>
                    <button className='btn btn-warning text-white'>S'inscrire</button>

                </div>
                <p className='text-right text-white'>
                   Déjà Inscrit<Link to="/signin" className='ms-2 text-warning'>Se connecter</Link>
                </p>
            </form>

        </div>
        
    </div>
    </>
    
  )
}

export default Signup