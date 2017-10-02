import React from 'react'
import {display, text} from '../styles/shared/default.js'
import Head from 'next/head'
import {Meta} from '../components/shared/meta.js'
import {Navbar} from '../components/shared/navigation.js'
import Intro from '../components/index/intro.js'
import Description from '../components/index/description.js'
import Footer from '../components/shared/footer.js'

export default class extends React.Component{
  render(){
    return(
      <div className="root">
        <Meta title="$: home" />

        <Navbar selection="home" />
        <Intro />
        <Description />
        <Footer />

        <style jsx global>{display}</style>
        <style jsx global>{text}</style>
      </div>
    )
  }
}
