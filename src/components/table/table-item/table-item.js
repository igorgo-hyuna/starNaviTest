import React from 'react';
import './table-item.scss';

const TableItem = (props) => {
        return (
            <>
            {!props.active &&
                <span
                    onMouseOver={() => { props.setSelectorStatus(props.id); }}
                    className='starNavi__workZone-item' key={props.id}></span>
            }
            {props.active &&
                <span
                    onMouseOver={() => { props.removeSelectorStatus(props.id); }}
                    className='starNavi__workZone-item active' key={props.id}></span>
            }
            </>
        );
};

export default TableItem;
