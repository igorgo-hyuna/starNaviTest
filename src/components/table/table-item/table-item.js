import React from 'react';
import './table-item.scss';


const TableItem = (props) => {

        return (
            <>
            {!props.active &&
                <span
                    onMouseOver={() => { props.setSelectorStatus(id=>id === props.id); }}
                    className='starNavi__workZone-item' key={props.id}></span>
            }
            {props.active &&
                <span
                    className='starNavi__workZone-item active' key={props.id}></span>
            }
            </>
        );
};

export default TableItem;
