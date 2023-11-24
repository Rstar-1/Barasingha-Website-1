import React from 'react'
import Banner from './components/Banner'
import ElearnCard from './components/ElearnCard'
import ConnectEver from '../common/ConnectEver'
import { Helmet } from "react-helmet";

const Elearning = () => {
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="http://localhost:3001/home" />
        <meta name="title" content="H" />
        <meta name="description" content="This is a description of my page" />
        <meta name="keywords" content="Website" />
        <meta name="author" content="Barasingha" />
        <meta property="og:title" content="My Page Title" />
        <meta
          property="og:description"
          content="This is a description of my page"
        />
        <meta property="og:url" content="https://example.com/my-page" />
      </Helmet>
      <Banner />
      <ElearnCard />
      <ConnectEver />
    </div>
  );
}

export default Elearning
