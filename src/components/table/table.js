import React from 'react';
import './table.scss';
import TableItem from "./table-item";

const Table = (props) => {


    return(
        <div className='starNavi__workZone-table'>

            {props.sectorsArray.map(p=>{
                if((p.id+1)%props.fieldSize === 0) {
                    return <><TableItem
                        active={p.active}
                        id={p.id}
                        setSelectorStatus={props.setSelectorStatus}
                        removeSelectorStatus={props.removeSelectorStatus}/><br /></>
                }
                else {
                    return <TableItem
                        active={p.active}
                        id={p.id}
                        setSelectorStatus={props.setSelectorStatus}
                        removeSelectorStatus={props.removeSelectorStatus}/>
                }
            })}

        </div>
    );
};

export default Table;
