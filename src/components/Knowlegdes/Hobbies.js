import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-running'></i>
                    <span> Cours à pieds</span>

                </li>
                <li className='hobby'>
                    <i className='fas fa-music'></i>
                    <span> Music</span>

                </li>
                <li className='hobby'>
                    <i className='fas fa-book'></i>
                    <span> Lecture</span>

                </li>
            </ul>
            
        </div>
    );
};

export default Hobbies;