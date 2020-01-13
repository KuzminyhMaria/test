import React from 'react';
import { deleteOptions } from "../redux/reducers/fReducer";

const SelectedOptions = (props) => {
    let deleteCity = (option) => {
        props.dispatch(deleteOptions(option));
    };

    let cities = props.state.freducer.selectedCities.map((c) =>
        <li onClick={() => deleteCity(c)}>{c}</li>
    );

    return (
        <div>
            <h3>Блок выбранных городов</h3>
            <ul>{cities}</ul>
        </div>
        
    );
};

export default SelectedOptions;