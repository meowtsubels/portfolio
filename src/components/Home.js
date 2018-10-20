import React from 'react';

import ScrollToTop from 'react-scroll-up';
import Header from './Header';
import Hero from './Hero';
import Exp from './Exp';
import Craft from './Craft';
import Contact from './Contact';
import Footer from './Footer';
import ModalsCraft from './ModalsCraft';

export default class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <ScrollToTop style={{ zIndex: 1 }} showUnder={600}>
          <span className='up'>UP</span>
        </ScrollToTop>
        <div className="wrapper">
          <ModalsCraft />
          <Header />
          <Hero />
          <Exp exp={this.props.exp}/>
          <Craft craft={this.props.craft}/>
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}