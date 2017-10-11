import React from 'react'
import { themeColors } from '../../../styles/shared/colors.js'

export default class InfoCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      value: props.value,
      options: props.options,
    };
  }

  getRootClassName(){
    if (this.state.options == null){ return "root"; }
    return "root " + this.state.options;
  }

  render(){
    return(
      <div className={this.getRootClassName()}>
        <p>{this.state.title}</p>
        <h1>{this.state.value}</h1>

        <style jsx>{`
          div.root {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 0; margin: 0;
            background-color: ${ themeColors.medMuted };
            color: ${ themeColors.medLight };
            margin: 5px;
            border-radius: 17.5px;
            padding: 7.5px 12.5px;
            min-width: 150px;
          }

          div.tinted {
            background-color: ${ themeColors.medDarkMuted };
            color: ${ themeColors.light };
          }

          p {
            margin: 0;
            font-size: 16px;
            font-weight: 500;
          }

          h1 {
            margin: 0 0 15px 0;
            font-weight: 700;
            font-size: 35px;
            align-self: center;
          }
        `}</style>
      </div>
    )
  }
}
