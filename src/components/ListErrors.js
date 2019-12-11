import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return { errors: state.ListErrors };
}

const ErrorConnectedList = ({errors}) =>(
    <ul>
        {errors.map((el,i) => {
            return <li key={i}>{el}</li>
         })
         }
    </ul>
)

const ListErrors = connect(mapStateToProps) (ErrorConnectedList);

export default ListErrors;