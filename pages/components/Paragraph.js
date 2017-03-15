import React from 'react';

export default ({children})=> {
    return(
        <p className="Paragraph">
            {children}
            <style jsx>{`       
                .Paragraph {
                    font-size: 3.8rem;
                    font-weight:400;
                    font-family: 'Yanone Kaffeesatz', sans-serif;
                    text-align: center;
                    color: BlanchedAlmond;
                    margin: 0 0 30px 0;
                }
            `}</style>
        </p>
    )   
}