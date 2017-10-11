import React from 'react'
import Link from 'next/link'
import { themeColors } from '../../styles/shared/colors.js'

export class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedElement: props.selection
    };
  }

  getSelection(navElement){
    if (navElement == this.state.selectedElement){
      return "selected";
    }
    else{
      return "regular";
    }
  }

  render(){
    return(
      <div className="root">
        <div className="nav-elements">
          <table>
            <tbody>
              <tr>
                <td><Link prefetch href="/"><a className={this.getSelection("home")}>home</a></Link></td>
                <td><Link prefetch href="/simulator"><a className={this.getSelection("simulator")}>simulator</a></Link></td>
                <td><Link prefetch href="/history"><a className={this.getSelection("history")}>history</a></Link></td>
              </tr>
            </tbody>
          </table>
        </div>

        <style jsx>{`
          div.root {
            display: flex;
            justify-content: center;
            background-color: ${ themeColors.darkMuted };
          }

          div.nav-elements{
            flex-grow: 1;
            margin: 50px 75px;
            max-width: 1000px;
          }

          a {
            margin: 0 5px;
            text-decoration: none;
            transition-duration: 0.3s;
            font-weight: 300;
            font-size: 22.5px;
          }

          a.regular {
            color: ${ themeColors.medLightMuted };
          }

          a.selected {
            color: ${ themeColors.medLight };
            cursor: default;
          }

          a.regular :hover{
            color: ${ themeColors.lightMuted };
          }

          @media screen and (max-width: 750px){
            div.nav-elements{
              align-items: center;
            }

            div.nav-elements{
              display: flex;
              margin: 17.5px;
              justify-content: center;
            }
          }
        `}</style>
      </div>
    )
  }
}
