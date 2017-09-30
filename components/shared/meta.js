import React from 'react'
import Head from 'next/head'

export class Meta extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
    };
  }

  render(){
    return(
      <div className="root">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>{this.state.title}</title>
          <link href="https://fonts.googleapis.com/css?family=Muli:200,300,400,600,700,800,900|Ubuntu:300,400,500,700" rel="stylesheet"></link>
        </Head>
      </div>
    )
  }
}
