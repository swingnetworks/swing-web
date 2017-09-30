import React from 'react';
import {Navbar} from '../components/shared/navigation.js';
import {Meta} from '../components/shared/meta.js';
import {lightDisplay, text} from '../styles/shared/default.js';
import Body from '../components/history/body.js';

export default class extends React.Component{
  render(){
    return(
      <div>
        <Meta title="Swing: History" />
        <Navbar selection="history" />
        <Body />

        <style jsx global>{lightDisplay}</style>
        <style jsx global>{text}</style>
      </div>
    )
  }
}
