import './App.scss';
import SelectorItem from "./components/selector";

const App = () => {

  return(
      <div className='container starNavi'>
          <div className='row'>
              <div className='starNavi__workZone'>
                  <div className='starNavi__workZone-selector'>
                      <select>
                          <SelectorItem title={'Pick mode'} />
                          <SelectorItem title={'Easy mode'} />
                          <SelectorItem title={'Normal mode'} />
                          <SelectorItem title={'Hard mode'} />
                      </select>
                  </div>
              </div>
              <div className='starNavi__hoverSquares'>
                  <h1>Hover squares</h1>
              </div>
          </div>
      </div>
  );
};

export default App;
