import React from 'react'
import ConsolePanel from './console-panel.js'
import InfoPanel from './info-panel.js'

export default class Body extends React.Component{

  render(){
    return(
      <div className="root">
        <ConsolePanel />
        <InfoPanel />

        <style jsx>{`
          div.root {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 25px 0;
          }

          @media screen and (max-width: 900px){
            div.root{
              padding: 5px 0;
            }
          }
        `}</style>
      </div>
    )
  }
}
