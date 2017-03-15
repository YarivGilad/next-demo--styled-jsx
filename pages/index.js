import React,{Component} from 'react'
import Head from 'next/head'
import Card from './components/Card';
import Title from './components/Title';
import TopBar from './components/TopBar';

export default class extends Component{
  
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="App">
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="/static/globals.css"/>
                </Head>
                <TopBar/>
                <Title>I am the App header</Title>
                <Card action="greet" subject="people"/>

                <style jsx>{`       
                    .App {
                        background: lightskyblue;
                        padding:100px;   
                        border-radius:8px;
                        display:flex;
                        flex-direction:column;
                    }
                    @media (min-width: 1000px) {
                        .App {
                            background: violet;
                        }
                    }
                `}</style>
                
            </div>
        )
    }
    
  
}