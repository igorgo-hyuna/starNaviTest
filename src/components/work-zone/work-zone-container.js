import React from 'react';
import {connect} from 'react-redux';
import './work-zone.scss'
import WorkZone from "./work-zone";
import {
    changeFieldSize, rebaseTable,
    removeSelectorStatus, resetTable,
    setFieldSize, setMode,
    setSelectorsArray,
    setSelectorStatus
} from "../../redux/work-zone-reducer";
import * as axios from "axios";


class WorkZoneContainer extends React.Component {

    // Запрашиваем данные
    componentDidMount() {

            axios.get('http://demo1030918.mockable.io/').then(response => {
                let data = [];
                for( let key in response.data) {
                    data.push(
                        {
                            name: key,
                            field: response.data[key].field
                        }
                    );
                }

                this.props.setMode(data);
            });

        let fieldSize = this.props.fieldSize * this.props.fieldSize;
        let mappedArray = Array(fieldSize).fill({ active: false }).map((i, k) => ({ ...i, ...{ id: k }}));
        this.props.setSelectorsArray(mappedArray);
    };

    // Клик по странице пагинации
    onPageChanged = (size) => {
        let fieldSize = size * size;
        let mappedArray = Array(fieldSize).fill({ active: false }).map((i, k) => ({ ...i, ...{ id: k }}));
        this.props.setSelectorsArray(mappedArray);
    };

    render() {
        return (
            <WorkZone
                onPageChanged={this.onPageChanged}
                resetTable={this.props.resetTable}
                modeName={this.props.modeName}
                modeType={this.props.modeType}
                fieldSize={this.props.fieldSize}
                sectorsArray={this.props.sectorsArray}
                setSelectorStatus={this.props.setSelectorStatus}
                removeSelectorStatus={this.props.removeSelectorStatus}
                setMode={this.props.setMode}
                changeFieldSize={this.props.changeFieldSize}
                fieldSizeHelp={this.props.fieldSizeHelp}
                rebaseTable={this.props.rebaseTable}
                />
        );
    }
}


let mapStateToProps = (state) => {
    return{
        modeType: state.workZone.modeType,
        fieldSize: state.workZone.fieldSize,
        sectorsArray: state.workZone.sectorsArray,
        modeName: state.workZone.modeName,
        fieldSizeHelp: state.workZone.fieldSizeHelp
    }
};

export default connect(mapStateToProps, {setFieldSize, setSelectorsArray, setSelectorStatus, removeSelectorStatus, setMode, changeFieldSize, resetTable, rebaseTable })(WorkZoneContainer);

