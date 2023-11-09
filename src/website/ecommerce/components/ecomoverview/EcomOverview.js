import React from 'react'
import Banner from './components/Banner'
import ConnectEver from '../../../common/ConnectEver'
import Overview from './components/Overview'
import SimilarEcom from './components/SimilarEcom'

const EcomOverview = () => {
  return (
    <div>
      <Banner />
      <Overview />
      <SimilarEcom />
      <ConnectEver />
    </div>
  );
}

export default EcomOverview
