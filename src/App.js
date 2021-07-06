import './App.scss';
import React from "react";
import WorkZoneContainer from "./components/work-zone/work-zone-container";

const App = () => {

  return(
      <div className='container starNavi'>
          <div className='row'>
              <WorkZoneContainer/>
              <div className='starNavi__hoverSquares'>
                  <h1>Hover squares</h1>
                  <div className='starNavi__hoverSquares-item'><p>row 2 col 1</p></div>
                  <div className='starNavi__hoverSquares-item'><p>row 2 col 1</p></div>
                  <div className='starNavi__hoverSquares-item'><p>row 2 col 1</p></div>
                  <div className='starNavi__hoverSquares-item'><p>row 2 col 1</p></div>
              </div>
          </div>
      </div>
  );
};

export default App;
