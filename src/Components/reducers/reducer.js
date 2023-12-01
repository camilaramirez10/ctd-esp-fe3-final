
export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS':
            return { ...state, list: action.payload }
        case 'ADD_FAV':
            return {}
        case 'CHANGE_THEME':
            return {}
        case 'GET_CHARACTERS':
            return {}
        case 'DELETE_FAV':
            return {}

    }
}