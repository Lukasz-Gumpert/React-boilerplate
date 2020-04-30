const filtersReducerDefaultState = {
    text: '',
    sortBy: 'sortByName',
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state, text: action.text
            };
        case 'SORT_BY_NAME':
            return {
                ...state, sortBy: 'sortByName'
            };
        case 'ENDING_SOONEST':
            return {
                ...state, sortBy: 'endingSoonest'
            };
        case 'FURTHEST_AWAY':
            return {
                ...state, sortBy: 'furthestAway'
            };
        case 'SORT_BY_TYPE':
            return {
                ...state, sortBy: 'sortByType'
            };
        default:
            return state
    };
};