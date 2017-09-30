import React from 'react'
import Link from 'next/link'

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
                <td><Link prefetch href="/"><a className={this.getSelection("swing")}>swing</a></Link></td>
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
            background-color: #323232;
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
            color: #949494;
          }

          a.selected {
            color: #91CC9B;
            cursor: default;
          }

          a.regular :hover{
            color: #CACACA;
          }

          @media screen and (max-width: 750px){
            div.root{
              background-color: #2B2B2B;
            }

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
