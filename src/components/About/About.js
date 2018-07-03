import React from 'react';
import {Link} from 'react-router-dom';

export default function About(props) {
  return (
    <div>
      <h1>This is the About component</h1>
      <h3><a href="#/about/faq">FAQ</a></h3>
      <Link to="/about/faq">FAQ</Link>
      <Link to="/about/company">Company</Link>
      {/* <Route path="/about/faq" component={FAQ} /> */}
      {/* we would have to do this after props.children */}
      <h3>Company</h3>
      {props.children}
    </div>
  )
}