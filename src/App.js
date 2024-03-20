import './App.css';
import { Header, Body, Footer } from './Component';

import React from 'react';
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Stay In Darjeeling</title>
        <meta name="description" content="Find the best stay in darjeeling, budget friendly hostel with Benus Darjeeling Home, A Backpackers Hub." />
      </Helmet>
      <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
    </div>
  );
}

export default HomePage;