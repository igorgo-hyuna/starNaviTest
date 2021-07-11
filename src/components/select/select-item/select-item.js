import React from 'react';
import './select-item.scss';

const SelectItem = (props) => {

    return(
        <option value={props.data.field}>{props.data.name}</option>
    );
};

export default SelectItem;
