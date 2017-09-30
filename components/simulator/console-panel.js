import React from 'react'
import Panel from './components/panel.js'
import io from 'socket.io-client'

export default class ConsolePanel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: {
        value: "",
      },
      content: {
        value: "",
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(){
    this.socket = io('http://127.0.0.1:3000') //NEEDS TO BE UPDATED BEFORE RELEASE
    this.socket.on('connected', (message)=>{
      console.log(message)
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState((state)=>{
      state.content.value = state.input.value;
      state.input.value = "";
      return state;
    });
  }

  handleInputChange(event){
    event.persist();
    this.setState((state)=>{state.input.value = event.target.value; return state});
  }

  getMessages(){
    return(
      <p>{this.state.content.value}</p>
    )
  }

  render(){
    return(
      <div className="root">
        <Panel title="CONSOLE">
          <div className="content">
            {this.getMessages()}
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
            align-self: stretch;
            flex: 1;
            justify-content: center;
          }

          div.input-bar {
            display: flex;
            background-color: #B1B1B1;
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
            background-color: #808080;
            border-radius: 10px;
            height: 30px;
            outline: 0;
            padding: 0 10px;
            color: #D5D5D5;
            font-family: "Muli", sans-serif;
            font-weight: 300;
            font-size: 20px;
            transition-duration: 0.2s;
          }

          div.input-bar input:focus {
            outline: 0;
            background-color: #767676;
          }

          div.input-bar input:hover {
            background-color: #767676;
          }
        `}</style>
      </div>
    )
  }
}
