import React from 'react';

export default ({children})=> {
    return(
        <h1 className="Title">
            {children}
            <style jsx>{`       
                .Title {
                    font-size: 5rem;
                    font-weight:normal;
                    font-family: 'Griffy', cursive;
                    text-align: center;
                    color: white;
                    margin: 0 0 30px 0;
                }
            `}</style>
        </h1>
    )   
}
