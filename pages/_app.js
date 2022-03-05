import 'animate.css/animate.min.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/footer';
import '../fonts/montserrat.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <ToastContainer />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}

