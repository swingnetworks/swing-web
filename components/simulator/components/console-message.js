import React from 'react'
import { themeColors } from '../../../styles/shared/colors.js'

export default class ConsoleMessage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      sender: props.sender,
    };
  }

  render(){
    var style = "tinted";
    var sender = "you";

    if (this.state.sender != "user") {
      style = "normal";
      sender = "system";
    }

    return(
      <div className={"root " + style}>
        <div className={"main"}>
          <h2 className={style}>{sender}</h2>
          <p className={style}>{this.state.text}</p>
        </div>

        <style jsx>{`
          div.root {
            display: inline-block;
            border-radius: 17.5px;
            padding: 10px 12.5px 10px 12.5px;
            max-width: 70%;
          }

          div.main {
            display: block;
            min-width: 150px;
            overflow-x: hidden;
            word-wrap: break-word;
          }

          div.tinted {
            margin: 10px auto 0 10px;
            background-color: ${ themeColors.medDark };
          }

          div.normal {
            margin: 10px 10px 0 auto;
            background-color: ${ themeColors.light }
          }

          p {
            margin: 0;
            font-size: 17.5px;
            font-weight: 500;
          }

          h2 {
            margin: 0 0 2.5px 0;
            font-weight: 400;
            font-size: 22.5px;
            font-family: Nunito;
          }

          p.normal {
            color: ${ themeColors.medDarkMuted };
            text-align: right;
          }

          h2.normal {
            color: ${ themeColors.dark };
            text-align: right;
          }

          p.tinted {
            color: ${ themeColors.medLight };
          }

          h2.tinted {
            color: ${ themeColors.light };
          }
        `}</style>
      </div>
    )
  }
}
