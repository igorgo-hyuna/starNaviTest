import React from 'react';
import './Squares.scss';
import {connect} from "react-redux";
import Squares from "./Squares";

class SquaresContainer extends React.Component{

    render() {
        return (
            <Squares
                sectorsArray={this.props.sectorsArray}
                fieldSize={this.props.fieldSize}/>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        sectorsArray: state.workZone.sectorsArray,
        fieldSize: state.workZone.fieldSize
    }
};

export default connect(mapStateToProps, {})(SquaresContainer);
