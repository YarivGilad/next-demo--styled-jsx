
import React from 'react';

export default ({action,subject})=> {
    return(
        <div className="top-bar">
            <h1 className="header">I am the top bar</h1>
            <img className="rotating-logo" src="/static/logo.svg" alt="logo"/>
            <style jsx>{`       
                .top-bar {
                    background: slategray;
                    width:100%;
                    height: 70px;
                    padding: 20px;
                    color: white;
                    position:fixed;
                    top:0;
                    left:0;
                    display:flex;
                    align-items:center;
                    justify-content:space-around;
                }
                .header{
                    font-size: 3rem;
                    font-weight:normal;
                    font-family: 'Griffy', cursive;
                    color:papayawhip;
                }
                .rotating-logo{
                    height: 50px;
                    animation: logo-spin 2s linear infinite;
                }
                @keyframes logo-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    )   
}