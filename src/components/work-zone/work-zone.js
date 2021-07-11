import React from 'react';
import './work-zone.scss';
import Select from '../select/select'
import Table from "../table";


const WorkZone = (props) => {

    return(
        <div className='starNavi__workZone'>
            <Select
                onPageChanged={props.onPageChanged}
                resetTable={props.resetTable}
                changeFieldSize={props.changeFieldSize}
                setMode={props.setMode}
                modeName={props.modeName}
                fieldSizeHelp={props.fieldSizeHelp}
                rebaseTable={props.rebaseTable}/>
            <Table
                fieldSize={props.fieldSize}
                sectorsArray={props.sectorsArray}
                setSelectorStatus={props.setSelectorStatus}
                removeSelectorStatus={props.removeSelectorStatus}/>
        </div>
    );
};

export default WorkZone;
