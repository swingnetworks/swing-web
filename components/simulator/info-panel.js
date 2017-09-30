import React from 'react'
import Panel from './components/panel.js'
import InfoCard from './components/info-card.js'

export default class InfoPanel extends React.Component{
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
