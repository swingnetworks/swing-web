import React from 'react'
import Router from 'next/router'
import { themeColors } from '../../styles/shared/colors'

export default class Intro extends React.Component{
  render(){
    return(
      <div className="root">
        <div className="branding">
          <h1>swing networks</h1>
        </div>
        <p>the future of trading is here</p>
        <button onClick={()=>{Router.push('/simulator')}}>simulator</button>

        <style jsx>{`
          div.root {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          h1 {
            margin: 100px 0 0 0 ;
            font-family: "Ubuntu", sans-serif;
            font-size: 75px;
            font-weight: 700;
            color: ${ themeColors.light };
            cursor: default;
          }

          p {
            margin: 12.5px 0 0 0;
            font-size: 30px;
            font-weight: 300;
            color: ${ themeColors.light };
          }

          button {
            margin: 70px 0 100px 0;
            padding: 17.5px 27.5px;
            border: 0;
            background-color: ${ themeColors.medDarkMuted };
            border-radius: 20px;
            cursor: pointer;
            transition-duration: 0.25s;
            color: ${ themeColors.medLight };
            font-family: Ubuntu;
            font-weight: 300;
            font-size: 30px;
            text-decoration: none;
          }

          button:hover {
            background-color: ${ themeColors.darkMuted };
            color: ${ themeColors.light };
          }

          @media screen and (max-width: 600px){
            h1 {
              font-size: 60px;
            }
            p { font-size: 25px; }
            button { margin: 50px 0 75px 0; }
          }

        `}</style>
      </div>
    )
  }
}
