import React from 'react';
import './select.scss';
import SelectItem from "./select-item";




const Squares = (props) => {

    let detectVelue = (event) => {
        props.resetTable();
        props.changeFieldSize(event.target.value);
    };

    return(
        <div className='starNavi__workZone-selector'>
            <select
                onChange={(event) => {
                    detectVelue(event);
                }}
            >
                {props.modeName.map(m =>
                    <SelectItem
                        data={m}
                        />
                )}
            </select>
            <button onClick={(event) => {
                props.rebaseTable(props.fieldSizeHelp);
                props.onPageChanged(props.fieldSizeHelp);
            }} type="button" className="btn btn-primary">Start</button>
        </div>
    );
};

export default Squares;
