import React from 'react'
import Panel from './panel.js';

export default class Body extends React.Component{
  render(){
    return(
      <div className="root">
        <Panel>
          <div className="content">
            <p>Heyo, the history section ain't available yet. Maybe next time?</p>
          </div>
        </Panel>

        <style jsx>{`
          div.root {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 25px 0;
          }

          div.content {
            display: flex;
            flex-direction: column;
            flex: 1;
            padding: 5px 7.5px;
            align-items: center;
            justify-content: center;
          }

          p {
            text-align: center;
            margin: 0;
          }

          @media screen and (max-width: 750px){
            div.root{
              padding: 5px 0;
            }
          }
        `}</style>
      </div>
    )
  }
}
