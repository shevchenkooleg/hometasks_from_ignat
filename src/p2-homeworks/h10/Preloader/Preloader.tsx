import React from 'react';
import preloader from "./preloader.svg";


const Preloader = () => {
    return (
        <div>
            <img style={{display:'flex', width:'100px', margin:'0 auto'}} src={preloader} alt="preloader"/>
        </div>
    );
};

export default Preloader;