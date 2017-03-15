
import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';

export default ({action,subject})=> {
    return(
        <div className="card">
            <Title>I am a Card</Title>
            <Paragraph>my goal is to {action} some {subject}</Paragraph>
            <style jsx>{`       
                .card {
                    background: PowderBlue;
                    border-radius:inherit;
                    padding: 75px;
                    cursor:pointer;
                }
                .card:hover{
                    background: LightSeaGreen;
                }
                .card:active{
                    background: DarkMagenta;
                }
                @media (min-width: 1000px) {
                    .card {
                        background: indigo;
                    }
                }
            `}</style>
        </div>
    )   
}