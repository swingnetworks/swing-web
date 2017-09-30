import React from 'react'
import Router from 'next/router'

export default class Intro extends React.Component{
  render(){
    return(
      <div className="root">
        <h1>swing</h1>
        <p>the future of trading is here</p>
        <button onClick={()=>{Router.push('/simulator')}}>simulator</button>

        <style jsx>{`
          div.root {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          h1 {
            margin: 65px 0 0 0 ;
            font-family: "Ubuntu", sans-serif;
            font-size: 75px;
            font-weight: 700;
            color: #7BF3A3;
            cursor: default;
          }

          p {
            margin: 12.5px 0 0 0;
            font-size: 30px;
            font-weight: 300;
            color: #72B688;
          }

          button {
            margin: 70px 0 115px 0;
            padding: 17.5px 27.5px;
            border: 0;
            background-color: #4E4E4E;
            border-radius: 20px;
            cursor: pointer;
            transition-duration: 0.25s;
            color: #B5B5B5;
            font-family: Ubuntu;
            font-weight: 300;
            font-size: 30px;
            text-decoration: none;
          }

          button:hover {
            background-color: #587B63;
            color: #96F5B5;
          }

          @media screen and (max-width: 600px){
            h1 { font-size: 60px;}

            p { font-size: 25px; }

            button { margin: 50px 0 75px 0; }
          }
        `}</style>
      </div>
    )
  }
}
