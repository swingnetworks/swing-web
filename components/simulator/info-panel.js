import React from 'react'
import Panel from './components/panel.js'
import InfoCard from './components/info-card.js'

export default class InfoPanel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      simDate: "N/A",
      pValue: "N/A",
      aBalance: "N/A",
      lastStock: "N/A",
      lastValue: "N/A"
    };
  }


  componentWillReceiveProps(nextProps) {
    const data = nextProps.data;

    if (data.hasOwnProperty('info-date')) {
      this.setState((state)=>{
        state.simDate = data["info-date"];
        return state;
      });
    }

    if (data.hasOwnProperty('info-pvalue')) {
      this.setState((state)=>{
        state.pValue = data["info-pvalue"];
        return state;
      });
    }

    if (data.hasOwnProperty('info-abalance')) {
      this.setState((state)=>{
        state.aBalance = data["info-abalance"];
        return state;
      });
    }

    if (data.hasOwnProperty('info-last-stock')) {
      this.setState((state)=>{
        state.lastStock = data["info-last-stock"];
        return state;
      });
    }

    if (data.hasOwnProperty('info-last-value')) {
      this.setState((state)=>{
        state.lastValue = data["info-last-value"];
        return state;
      });
    }
  }

  render(){
    return(
      <div className="root">
        <Panel title="INFO">
          <div className="content">
            <div className="card single">
              <InfoCard title="Simulation Date" value="N/A" options="tinted" />
            </div>
            <div className="card double">
              <InfoCard title="Portfolio Value" value="N/A" />
              <InfoCard title="Account Balance" value="N/A" />
            </div>
            <div className="card double">
              <InfoCard title="Last Stock Sold" value="N/A" />
              <InfoCard title="Value from Stock" value="N/A" />
            </div>
          </div>
        </Panel>

        <style jsx>{`
          div.content {
            padding: 7.5px;
          }

          p {
            margin: 0;
            padding: 0;
          }

          div.card {
            display: flex;
          }

          div.double {
            flex-wrap: wrap;
          }
        `}</style>
      </div>
    )
  }
}
