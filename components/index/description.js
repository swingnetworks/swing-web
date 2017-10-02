import React from 'react'
import { themeColors } from '../../styles/shared/colors.js'

export default class Description extends React.Component{
  render(){
    return(
      <div className="root">
        <div>
          <h1>“i have no idea what the hell i’m doing”</h1>
          <h2>—dave lio</h2>
        </div>
        <div>
          <h1>“ding dong i’m a motherfuckin’ doorbell”</h1>
          <h2>—steven xie</h2>
        </div>
        <div className="spacer" />

        <style jsx>{`
          div.root {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: ${ themeColors.medLight };
            padding-top: 60px;
          }

          h1 {
            margin: 50px 45px 0 45px;
            font-size: 37.5px;
            font-weight: 300;
            color: ${ themeColors.medMuted };
          }

          h2 {
            text-align: center;
            padding-left: 55%;
            font-size: 27.5px;
            font-weight: 100;
            color: ${ themeColors.medMuted };
          }

          div.spacer {
            height: 75px;
          }

          @media screen and (max-width: 600px){
            div.root {
              padding-top: 45px;
            }

            h1 {
              margin: 25px 40px 0 40px;
              font-size: 30px;
            }

            h2 {
              margin: 10px 0 15px 0;
            }

            div.spacer {
              height: 40px;
            }
          }

        `}</style>
      </div>
    )
  }
}
