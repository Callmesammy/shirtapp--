import React from 'react'
import Layout from '../../Layout/Layout'
import PopularMovies from '../../Home/PopularMovies';
import Promos from '../../Home/Promos';
import TopRatedMovies from '../../Home/TopRated';
import Banner from '../../Home/Banner';



function Homescreen() {
  return (
   < Layout>
   <div className="container mx-auto mb-6 min-h-screen px-2">
   < Banner/>
   <PopularMovies/>
   <Promos/>
   <TopRatedMovies/>
   </div>
   </Layout>
   
  );
}

export default Homescreen