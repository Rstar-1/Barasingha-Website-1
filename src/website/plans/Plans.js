import React from 'react';
import Banner from "./components/Banner";
import PlanCard from './components/PlanCard';
import ConnectEver from '../common/ConnectEver';
import { Helmet } from "react-helmet";

const Plans = () => {
  return (
    <div>
      <Helmet>
        <tttle>Plans</tttle>
        <link rel="canonical" href="http://localhost:3001" />
        <meta name="description" content="This is a description of my page" />
        <meta name="keywords" content="Website" />
        <meta name="author" content="Barasingha" />
        <meta property="og:title" content="Plans" />
        <meta
          property="og:description"
          content="This is a description of my page"
        />
        <meta property="og:url" content="https://example.com/my-page" />
      </Helmet>
      <Banner />
      <PlanCard />
      <ConnectEver />
    </div>
  );
}

export default Plans
