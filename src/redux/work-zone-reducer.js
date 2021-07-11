// Значение state по умолчанию
// let fieldSize = 25;
// let mappedArray = Array(fieldSize).fill({ active: false }).map((i, k) => ({ ...i, ...{ id: k }}));
const CHANGE_FIELD_SIZE = 'CHANGE_FIELD_SIZE';
const SET_SELECTORS = 'SET_SELECTORS';
const SET_SELECTOR_STATUS = 'SET_SELECTOR_STATUS';
const REMOVE_SELECTOR_STATUS = 'REMOVE_SELECTOR_STATUS';
const SET_MODES = 'SET_MODES';
const CHANGE_SIZE = 'CHANGE_SIZE';
const RESET_TABLE = 'RESET_TABLE';
const REBASE_TABLE = 'REBASE_TABLE';





let initialState = {
    fieldSize: 5,
    fieldSizeHelp: 0,
    sectorsArray: [],
    modeName: [{name: 'Pick mode', field: 0}]
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

        case REMOVE_SELECTOR_STATUS:
            return {
                ...state,
                sectorsArray: state.sectorsArray.map(u => {
                    if(u.id === action.id) {
                        return {...u, active: false}
                    }
                    return u;
                })
            };

        case SET_MODES: {
            return {...state, modeName: state.modeName.concat(action.modeName)}
        }

        case RESET_TABLE: {
            return {...state, sectorsArray: []}
        }

        case REBASE_TABLE: {
            return {...state, fieldSize: action.fieldSizeHelp}
        }

        case CHANGE_SIZE: {
            return {...state,
                fieldSizeHelp: action.fieldSize
            }
        }



        default:
            return state;
    }
};

export const setFieldSize = (fieldSize) => ({type: CHANGE_FIELD_SIZE, fieldSize});
export const setSelectorsArray = (selectors) => ({type: SET_SELECTORS, selectors});
export const setSelectorStatus = (id) => ({type: SET_SELECTOR_STATUS, id});
export const removeSelectorStatus = (id) => ({type: REMOVE_SELECTOR_STATUS, id});
export const setMode = (modeName) => ({type: SET_MODES, modeName});
export const changeFieldSize = (fieldSize) => ({type: CHANGE_SIZE, fieldSize});
export const resetTable = () => ({type: RESET_TABLE});
export const rebaseTable = (fieldSizeHelp) => ({type: REBASE_TABLE, fieldSizeHelp});




export default workZoneReducer;