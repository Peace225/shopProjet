import React from 'react'
import Header from '../../Header'
import { Link } from 'react-router-dom'

import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const history = useHistory(); // Initialisation de useHistory

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:4200/login', {
            email,
            password
          });
          // Redirection vers une autre page après une connexion réussie
          history.push('/accueil'); // Remplacez '/dashboard' par l'URL de la page de tableau de bord de votre application
        } catch (error) {
          setError(error.response.data.message);
        }
      };

  return (
    <>
        <Header/>
        <div  className='login template d-flex justify-content-center align-items-center  vh-100 bg-white'>
        <div className='form_container p-5 rounder bg-success rounded'>
            <form>
                <h3 className='text-center text-warning'>Se connecter</h3>
                <div className='mb-2 text-white'>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  required placeholder='Enter Votr Email'  className='form-control'/>
                </div>
                <div className='mb-2 text-white'>
                    <label htmlFor="password">Mot de Passe</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required  placeholder='Enter Votre Mot de Passe'  className='form-control'/>
                </div>
                <di className='mb-2 text-white'>
                    <input type="checkbox" className='custom-control custom-checkbox' id="check"/>
                    <label htmlFor="check"  className='custom-input-label ms-2'>
                        Souviens-toi de moi
                    </label>
                </di>
                <div className='d-grid'>
                    <button className='btn btn-warning text-white'>Se connecter</button>

                </div>
                <p className='text-right text-white'>
                    Oublier <Link to="" className='text-white'>Mot de Passe?</Link><Link to="/signup" className='ms-2 text-warning'>S'inscrire</Link>
                </p>
            </form>

        </div>
        
    </div>
    </>
    
  )
}

export default Signin