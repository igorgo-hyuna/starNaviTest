import React from 'react';
import {connect} from 'react-redux';
import './work-zone.scss'
import WorkZone from "./work-zone";
import {
    setFieldSize,
    setSelectorsArray,
    setSelectorStatus
} from "../../redux/work-zone-reducer";


class WorkZoneContainer extends React.Component {
    // Запрашуем пользователей у сервака, вовремя отрисовки DOM
    componentDidMount() {
        let fieldSize = this.props.fieldSize * this.props.fieldSize;
        let mappedArray = Array(fieldSize).fill({ active: false }).map((i, k) => ({ ...i, ...{ id: k }}));
        this.props.setSelectorsArray(mappedArray);
    };

    render() {
        return (
            <WorkZone
                fieldSize={this.props.fieldSize}
                sectorsArray={this.props.sectorsArray}
                setSelectorStatus={this.props.setSelectorStatus}/>
        );
    }
}


let mapStateToProps = (state) => {
    return{
        fieldSize: state.workZone.fieldSize,
        sectorsArray: state.workZone.sectorsArray
    }
};

export default connect(mapStateToProps, {setFieldSize, setSelectorsArray, setSelectorStatus})(WorkZoneContainer);

