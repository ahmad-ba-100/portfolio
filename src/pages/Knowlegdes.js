import React from 'react';
import OthersSkills from '../components/Knowlegdes/OthersSkills';
import Hobbies from '../components/Knowlegdes/Hobbies';
import Experiences from '../components/Knowlegdes/Experiences';
import Languages from '../components/Knowlegdes/Languages';

import Navigation from '../components/Navigation';


const Knowlegdes = () => {
    return (
        <div className='knowlegdes'>
            <Navigation/>
            <div className='knowledgesContent'>
                <Languages/>
                <Experiences/>
                <Hobbies/>
                <OthersSkills/>
                
                

            </div>
            
        </div>
    );
};

export default Knowlegdes;