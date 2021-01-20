const SET_CATEGORY = 'SET_CATEGORY';
const GET_CATEGORIES = 'GET_CATEGORIES';
const initialState = {
    category: "",
    categories: []
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return Object.assign({}, state, { category: action.payload });
        case GET_CATEGORIES:
            return Object.assign({}, state, { categories: action.payload });
        default:
            return state;
    }
};

export default categoryReducer;
