import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation/>
            <div className='homeContent'>
                <div className='content'>
                    <h1>Amadou BA</h1>
                    <h2>Développeur Full Stack | Référenceur SEO</h2>
                    <div className='pdf'>
                        <a href='./media/new.cv.pdf' target='_bank'>Télécharger le CV

                        </a>

                    </div>

                    

                </div>

            </div>
        </div>
    );
};

export default Home;