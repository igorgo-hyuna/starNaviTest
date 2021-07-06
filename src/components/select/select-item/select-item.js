import React from 'react';
import './select-item.scss';

const SelectItem = (props) => {
    return(
        <option value={props.title}>{props.title}</option>
    );
};

export default SelectItem;
