import React from 'react';
import './select.scss';
import SelectItem from "./select-item";


const Select = (props) => {

    return(
        <div className='starNavi__workZone-selector'>
            <select>
                <SelectItem title={'Pick mode'} />
                {props.modeType.map(m =>
                    <SelectItem title={m.name} />
                )}
            </select>
            <button type="button" className="btn btn-primary">Start</button>
        </div>
    );
};

export default Select;
