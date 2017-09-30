import React from 'react'

export default class Footer extends React.Component{
  render(){
    return(
      <div className="root">
        <div className="row">
          <h2>made in <a>toronto</a></h2>
          <h1>$</h1>
          <h2 style={{textAlign: 'right'}}>we're on <a href="https://github.com/steven-xie/fintrader">github</a></h2>
        </div>

        <style jsx>{`
          div.root {
            display: flex;
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
            color: #96F5B5;
            cursor: default;
          }

          h2 {
            margin: 0 35px;
            font-weight: 300;
            font-size: 32.5px;
          }

          a {
            text-decoration: none;
            color: #D0D0D0;
            transition-duration: 0.25s;
          }

          a:hover {
            color: white;
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
