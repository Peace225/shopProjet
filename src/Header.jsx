import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from './image/Shop.png'
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
    <header  className="header">
        <div  className="header_left">
            <img className="logo" src={logo} alt="logo"/>
            
            <h2>Mimi Shop</h2>
        </div>
        <div  className="header_center">
            <ul  className="header_lists">
                <li>
                    <Link to="/lingeries">Lingeries</Link>
                </li>
                <li>
                    <Link to="/cosmetiques">Cosmetiques</Link>
                </li>
                    <div className="header_centerMenu">
                        <button>Vêtements</button>
                        <div className="dropDown_header">
                            <Link to="/enfants">Enfants</Link>
                            <Link to="/femmes">Femmes</Link>
                            <Link to="/hommes">Hommes</Link>
                        </div>
                    </div>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

        </div>
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder="Entrer votre Recherche"/>
                <div className="searhIcone">
                    <SearchIcon/>
                </div>
            </div>
            <div className="dataResult"></div>
        </div>
        <div className='Ajout'>
        <button><Link  to="/articles">Ajouter un article</Link></button>
        </div>
        
        
        <div className="header_right">
            <button><Link to="/signup">S'inscrire</Link></button>
            <button><Link to="/signin">Se connecter</Link></button>

        </div>

    </header>
    );
}

export default Header