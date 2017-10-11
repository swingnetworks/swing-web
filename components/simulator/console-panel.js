import React from 'react'
import Panel from './components/panel.js'
import ConsoleMessage from './components/console-message.js'
import { socketAddress } from '../shared/global-references.js'
import { themeColors } from '../../styles/shared/colors.js'

export default class ConsolePanel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: {
        value: "",
      },
      messages: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(){
    this.socket = new WebSocket(socketAddress);
    this.socket.onopen = ()=>{
      console.log("Socket opened successfully...");
    }
    this.socket.onmessage = (event)=>{
      const messages = this.appendMessage({sender: "system", text: event.data});
      this.setState((state)=>{
        state.messages = messages;
        return state;
      });
    }
  }

  componentDidUpdate(){
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  handleSubmit(event){
    event.preventDefault();
    this.socket.send(this.state.input.value);
    const messages = this.appendMessage({sender: "user", text: this.state.input.value});
    this.setState((state)=>{
      state.messages = messages;
      state.input.value = "";
      return state;
    });
  }

  appendMessage(msg) {
    var messages = this.state.messages.concat([msg]);
    if (messages.length > 150) {
      messages.splice(0, (messages.length - 150));
    }
    return messages;
  }

  handleInputChange(event){
    event.persist();
    this.setState((state)=>{state.input.value = event.target.value; return state});
  }

  getMessages(){
    const messages = [];
    this.state.messages.forEach((message)=>{
      messages.push(<ConsoleMessage sender={message.sender} text={message.text} />);
    });
    return(messages);
  }

  render(){
    return(
      <div className="root">
        <Panel title="CONSOLE">
          <div className="content">
            {this.getMessages()}
            <span ref={(element)=>{this.messagesEnd = element}} />
          </div>
          <div className="input-bar">
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.input.value} onChange={this.handleInputChange} />
            </form>
          </div>
        </Panel>

        <style jsx>{`
          div.content {
            display: flex;
            flex-direction: column;
            overflow-y: scroll;
            align-self: stretch;
            flex: 1;
            padding-bottom: 10px;
          }

          div.input-bar {
            display: flex;
            background-color: ${ themeColors.darkMuted };
            padding: 5px 10px;
            margin: 0;
            justify-content: center;
            align-items: center;
            border-radius: 0 0 20px 20px;
          }

          div.input-bar form {
            display: flex;
            flex: 1;
          }

          div.input-bar input {
            flex: 1;
            width: auto;
            margin: 0;
            border: 0;
            background-color: ${ themeColors.medLightMuted };
            border-radius: 10px;
            height: 30px;
            outline: 0;
            padding: 0 10px;
            color: ${ themeColors.darkMuted };
            font-family: "Muli", sans-serif;
            font-weight: 300;
            font-size: 20px;
            transition-duration: 0.2s;
          }

          div.input-bar input:focus {
            outline: 0;
            background-color: ${ themeColors.light };
          }

          div.input-bar input:hover {
            background-color: ${ themeColors.light };
          }
        `}</style>
      </div>
    );
  }
}
