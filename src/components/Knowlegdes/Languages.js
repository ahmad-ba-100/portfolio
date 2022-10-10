import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            { id:1, value:"PHP",  xp:2},
            { id:2, value:"JAVASCRIPT",  xp:1},
            { id:3, value:"PYTHON",  xp:0.7},
            { id:4, value:"HTML&CSS",  xp:2},
           
        ],
        frameworks: [
            { id:1, value:"LARAVEL",  xp:1},
            { id:2, value:"REACT",  xp:0.3},
            // { id:3, value:"DJANGO",  xp:0.2},
            { id:4, value:"BOOTSTRAP",  xp:2}

        ],
       
    }
    render() {
        let{languages, frameworks} =this.state;
        return (
            <div className='languagesFrameworks'>
                <ProgressBar 
                languages={languages}
                className="languagesDisplay"
                title="languages" 

                />
                <ProgressBar
                languages={frameworks}
                title="Frameworks & CMS"
                className="frameworksDisplay"
                />
                

            </div>
        );
    }
}

export default Languages;
