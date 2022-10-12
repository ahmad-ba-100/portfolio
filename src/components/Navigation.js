import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
            <div className='idContent'>
                <img src='./media/Amadou-BA.jpeg' alt='profil-pic'/>
                <h3>Amadou BA</h3>
                
                
                
                </div>

            </div>
            <div className='navigation'>
                <ul>
                    <li>
                    <NavLink excact to="/" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span> Accueil</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink excact to="/competences" activeClassName="navActive">
                        <i className="fas fa-mountain"></i>
                        <span> Compétences</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink excact to="/portfolio" activeClassName="navActive">
                        <i className="fas fa-image"></i>
                        <span> Portfolio</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink excact to="/contact" activeClassName="navActive">
                        <i className="fas fa-address-book"></i>
                        <span> Contact</span>
                    </NavLink>
                    </li>
                </ul>

            </div>
            <div className='socialNetwork'>
                <ul>
                    <li><a href='https://www.linkedin.com/in/amadou-ba-100/' target='_bank' rel='nonopener noreferrer'> <i className="fab fa-linkedin"></i></a></li>
                    
                    <li><a href='https://www.linkedin.com/in/amadou-ba-100/' target='_bank' rel='nonopener noreferrer'> <i className="fab fa-github"></i></a></li>
                    
                    <li><a href='https://twitter.com' target='_bank' rel='nonopener noreferrer'> <i className="fab fa-twitter"></i></a></li>
                    
                    <li><a href='https://www.linkedin.com/in/amadou-ba-100/' target='_bank' rel='nonopener noreferrer'> <i className="fab fa-instagram"></i></a></li>
                
                </ul>
                <div className='signature'>
                    <p>Amadou BA @ | 2022</p>

                </div>

            </div>
        </div>
    );
};

export default Navigation;