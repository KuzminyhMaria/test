const ADD_OPTION = 'ADD-OPTION';
const UPDATE_NEW_OPTION = 'UPDATE-NEW-OPTION';
const DELETE_OPTION = 'DELETE-OPTION';

let initialState = {
    newInputText: '',
    newSelectedCity: '',
    selectedCities: [],
    index: 0,
};

const FReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_OPTION:
            if(state.newSelectedCity !== "") {
                state.selectedCities.push(state.newSelectedCity);
                state.newSelectedCity = '';
            }
            return state;
        case DELETE_OPTION:
            let index = state.selectedCities.findIndex(el => el === action.dChoose);
            state.selectedCities.splice(index, 1);
            return state;
        case UPDATE_NEW_OPTION:
            state.newSelectedCity = action.newChoose;
            return state;
        default:
            return state;
    };
};

export const addOption = () => ({type: ADD_OPTION});

export const updateNewOption = (option) => ({type: UPDATE_NEW_OPTION, newChoose: option});

export const deleteOptions = (option) => ({type: DELETE_OPTION, dChoose: option});

export default FReducer;