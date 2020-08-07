import React from 'react';

import Header from '../../components/Header';
import Search from '../../components/Search';
import FilterByRegion from '../../components/RegionFilter';
import CountryCards from '../../components/Cards';

import ColunmAndRow from './style';

function Home() {
  return (
    <>
      <main>
        <ColunmAndRow>
          <Search />
          <FilterByRegion />
        </ColunmAndRow>
        <CountryCards />
      </main>
    </>
  );
}

export default Home;
