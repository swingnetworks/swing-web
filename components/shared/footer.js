import React from 'react'
import { themeColors } from '../../styles/shared/colors.js'

export default class Footer extends React.Component{
  render(){
    return(
      <div className="root">
        <div className="row">
          <h2>made in <a>toronto</a></h2>
          <h1>$</h1>
          <h2 style={{textAlign: 'right'}}>we're on <a href="https://github.com/swingnetworks">github</a></h2>
        </div>

        <style jsx>{`
          div.root {
            display: flex;
            background-color: ${ themeColors.darkMuted };
          }

          div.row {
            display: flex;
            flex-grow: 1;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          }

          h1 {
            margin: 25px 0;
            font-family: "Ubuntu", sans-serif;
            font-weight: 800;
            font-size: 75px;
            color: ${ themeColors.med };
            cursor: default;
            animation: colorPulse 2s infinite;
          }

          @keyframes colorPulse {
            0% { color: ${ themeColors.med } }
            7.5% { color: ${ themeColors.medLight } }
            15% { color: ${ themeColors.med } }
            22.5% { color: ${ themeColors.light } }
          }

          h2 {
            margin: 0 35px;
            font-weight: 300;
            font-size: 32.5px;
            color: ${ themeColors.medLightMuted }
          }

          a {
            text-decoration: none;
            color: ${ themeColors.lightMuted };
            transition-duration: 0.25s;
            font-weight: 400;
          }

          a:hover {
            color: ${ themeColors.light };
          }

          @media screen and (max-width: 600px){
            h2 {
              font-size: 25px;
              margin: 0 25px;
            }

            h1{
              font-size: 65px;
            }

            div.row {
              justify-content: space-between;
            }
          }
        `}</style>
      </div>
    )
  }
}
