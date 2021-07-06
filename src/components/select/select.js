import React from 'react';
import './select.scss';
import SelectItem from "./select-item";

const Select = () => {

    return(
        <div className='starNavi__workZone-selector'>
            <select>
                <SelectItem title={'Pick mode'} />
                <SelectItem title={'Easy mode'} />
                <SelectItem title={'Normal mode'} />
                <SelectItem title={'Hard mode'} />
            </select>
            <button type="button" className="btn btn-primary">Start</button>
        </div>
    );
};

export default Select;
