import React from 'react'
import ConsolePanel from './console-panel.js'
import InfoPanel from './info-panel.js'
import { socketAddress } from '../shared/global-references.js'

export default class Body extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      consoleData: null,
      infoData: null,
    };

    this.sendSocketMessage = this.sendSocketMessage.bind(this);
  }

  componentDidMount(){
    this.socket = new WebSocket(socketAddress);
    this.socket.onopen = ()=>{
      console.log("Socket opened successfully...");
    }
    this.socket.onmessage = (event)=>{
      const json = JSON.parse(event.data);
      if (json.hasOwnProperty('message') || json.hasOwnProperty('console-command')) {
        this.setState((state) => {
          state.consoleData = json;
          return state;
        })
      } else {
        this.setState((state) => {
          state.infoData = json;
          return state;
        })
      }
    }
  }

  sendSocketMessage(msg) {
    this.socket.send(msg);
  }

  render(){
    return(
      <div className="root">
        <ConsolePanel data={this.state.consoleData} sendSocketMessage={this.sendSocketMessage}/>
        <InfoPanel data={this.state.infoData} />

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
