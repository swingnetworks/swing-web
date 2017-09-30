import React from 'react';

export default class Panel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      window: {width: '0', height: '0'},
      title: props.title,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  componentWillReceiveProps(props){
    this.setState({title: props.title});
  }

  updateWindowDimensions() {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const heightDifference = Math.abs(window.innerHeight - this.state.window.height);
    if (!iOS || heightDifference < 10 || heightDifference > 100){
      this.setState((state)=>{
        state.window.height = window.innerHeight;
        state.window.width = window.innerWidth;
        return state;
      });
    }
  }

  getHeight(){
    if (this.state.window.width <= 750){
      return this.state.window.height - 150;
    }
    else{
      return this.state.window.height - 230;
    }
  }

  render(){
    return(
      <div className="root" style={{height: this.getHeight()}}>
        <div className="title-bar">
          <h2>{this.state.title}</h2>
        </div>
        <div className="content">
          {this.props.children}
        </div>

        <style jsx>{`
          div.root {
            display: flex;
            border-radius: 20px;
            background-color: #D5D5D5;
            flex-direction: column;
            justify-content: center;
            margin: 20px;
            width: 40vw;
            max-width: 550px;
            min-width: 400px;
            min-height 250px;
            box-sizing: border-box;
            box-shadow: 0 5px 10px rgba(0, 0, 0, .35);
          }

          div.title-bar {
            display: flex;
            background-color: #B1B1B1;
            border-radius: 20px 20px 0 0;
            justify-content: center;
            padding: 7.5px 0;
          }

          div.title-bar h2{
            margin: 0;
            font-family: "Ubuntu", sans-serif;
            font-size: 20px;
            font-weight: 500;
            color: #434343;
          }

          div.content {
            display: flex;
            flex-direction: column;
            flex: 1;
            overflow-x: hidden;
            overflow-y: scroll;
          }

          @media screen and (max-width: 900px){
            div.root {
              margin: 10px;
              min-width: 0;
              max-width: 750px;
              width: 90vw;
            }
          }
        `}</style>
      </div>
    )
  }
}
