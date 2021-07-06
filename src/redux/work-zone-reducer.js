// Значение state по умолчанию
// let fieldSize = 25;
// let mappedArray = Array(fieldSize).fill({ active: false }).map((i, k) => ({ ...i, ...{ id: k }}));
const CHANGE_FIELD_SIZE = 'CHANGE_FIELD_SIZE';
const SET_SELECTORS = 'SET_SELECTORS';
const SET_SELECTOR_STATUS = 'SET_SELECTOR_STATUS';

let initialState = {
    fieldSize: 5,
    sectorsArray: []
};


export const workZoneReducer = (state = initialState, action) => {
    // Логика добавления нового поста в профайле
    switch (action.type) {

        case CHANGE_FIELD_SIZE: {
            return {...state,
                fieldSize: action.fieldSize
            }
        }

        case SET_SELECTORS: {
            return {...state, sectorsArray: [...action.selectors]}
        }

        case SET_SELECTOR_STATUS:
            return {
                ...state,
                sectorsArray: state.sectorsArray.map(u => {
                    if(u.id === action.id) {
                        return {...u, active: true}
                    }
                    return u;
                })
            };

        default:
            return state;
    }
};

export const setFieldSize = (fieldSize) => ({type: CHANGE_FIELD_SIZE, fieldSize});
export const setSelectorsArray = (selectors) => ({type: SET_SELECTORS, selectors});
export const setSelectorStatus = (id) => ({type: SET_SELECTOR_STATUS, id});


export default workZoneReducer;