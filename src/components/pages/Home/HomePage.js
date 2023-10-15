import React from "react";
import Heroes from "./Heroes";
import Specials from './Specials';
function HomePage(props) {
   return (
      <>
         <Heroes />
         <Specials></Specials>
      </>
   );
}

export default HomePage;