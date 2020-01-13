import React from 'react';
import {addOption, updateNewOption} from "../redux/reducers/fReducer";
import { ReactDadata } from 'react-dadata';
import ReactDOM from 'react-dom';

 const Filter = (props) => {
    let addSelected = () => {
        props.dispatch(addOption());
    };

    let updateSelected = () => {
        let inputCity = document.querySelector('.react-dadata__input');
        let option = inputCity.getAttribute("value");
        document.querySelector('.react-dadata__input').setAttribute("value", "");
        props.dispatch(updateNewOption(option));
    };

    let addCity = () => {
        updateSelected();
        addSelected();
        ReactDOM.render(<ReactDadata token="cc8c4b8b764bf7f3aa04dcdf3b9ef71bba22b6c4" fromBound="city" toBound="city" address="city" placeholder="Введите город" />, 
        document.querySelector('.react-dadata__container'));
    };

    return (
        <form className="filterOfCities">
            <ReactDadata token="cc8c4b8b764bf7f3aa04dcdf3b9ef71bba22b6c4" fromBound="city" toBound="city" address="city" placeholder="Введите город" />
            <button type="button" onClick={addCity} style={{ height: 30, width: 100, marginTop: 15 }}>Добавить</button>
        </form>
    );
}

export default Filter;