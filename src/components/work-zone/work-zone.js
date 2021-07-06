import React from 'react';
import './work-zone.scss';
import Select from "../select";
import Table from "../table";


const WorkZone = (props) => {

    return(
        <div className='starNavi__workZone'>
            <Select />
            <Table
                fieldSize={props.fieldSize}
                sectorsArray={props.sectorsArray}
                setSelectorStatus={props.setSelectorStatus}/>
        </div>
    );
};

export default WorkZone;
