import './App.scss';
import React from "react";
import WorkZoneContainer from "./components/work-zone/work-zone-container";
import SquaresContainer from "./components/Squares/squares-container";

const App = () => {

  return(
      <div className='container starNavi'>
          <div className='row'>
              <WorkZoneContainer />
              <SquaresContainer />
          </div>
      </div>
  );
};

export default App;
