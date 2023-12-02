export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS':
            return { ...state, list: action.payload }
        case 'ADD_FAV':
            return {}
        case 'CHANGE_THEME':
            return { ...state, theme: action.payload == "light" ? "dark" : "light"}
        case 'GET_CHARACTER':
            return {}
        case 'DELETE_FAV':
            return {}

    }
}