import React from 'react';
import './selector-item.css';

const SelectorItem = (props) => {

    return(
        <option value={props.title} selected=''>{props.title}</option>
    );
};

export default SelectorItem;
