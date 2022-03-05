import 'animate.css/animate.min.css';
import React from 'react';
import Footer from '../components/footer';
import '../fonts/montserrat.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}

