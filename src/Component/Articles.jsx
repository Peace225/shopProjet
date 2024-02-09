import React from 'react';
import Header from '../Header';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Form,  } from 'react-bootstrap';

function Articles() {
  return (
    <>
    <Header/>
    <div  className='articles template d-flex justify-content-center align-items-center  vh-100 bg-white' style={{margin:100}}>
    <div className='form_container p-3 rounder bg-success rounded'>
        <form>
            <h3 className='text-center  text-warning'>Ajouter un Artice</h3>
            <div className='mb-2'>
                <label htmlFor="nom" className='text-white'> Nom du produit</label>
                <input type="text" placeholder='Enter le nom du produit'  className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor="prenoms" className='text-white'>La catégories</label>
                <input type="text" placeholder='catégories'  className='form-control'/>
            </div>
            <div className='mb-2 text-white'>
                <label htmlFor="email">Description du produit</label>
                <input type="email" placeholder='La description du produits'  className='form-control'/>
            </div>
            <div className='d-grid'>
                <button className='btn btn-warning text-white'>Ajouter</button>

            </div>
        </form>

    </div>
    
</div>
</>
  )
}

export default Articles
