import React from 'react';
import './Squares.scss';


const Squares = (props) => {
    let fieldSize = props.fieldSize;

    return(
        <div className='starNavi__hoverSquares'>
            <h1>Hover squares</h1>
            {props.sectorsArray.map(m =>
                (m.active) ? <div className='starNavi__hoverSquares-item' key={m.id}><p>
                    Row: {Math.ceil((m.id+1)/fieldSize)},
                    Col: { (m.id+1)>fieldSize &&
                        <>
                            {((m.id+1)-(Math.floor((m.id+1)/fieldSize)*fieldSize)) === 0 &&
                            <>{fieldSize}</>
                            }
                            {((m.id+1)-(Math.floor((m.id+1)/fieldSize)*fieldSize)) !== 0 &&
                            <>{(m.id+1)-(Math.floor((m.id+1)/fieldSize)*fieldSize)}</>
                            }
                        </>
                        }
                        {(m.id + 1) <= fieldSize &&
                            <>{(m.id+1)}</>
                        }
                </p></div>
                    : <></>
            )}
        </div>
    );
};

export default Squares;
