const countdownsReducerDefaultState = [];

export default (state = countdownsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_COUNTDOWN':
            return [
                ...state,
                action.countdown
            ];
        case 'EDIT_COUNTDOWN':
            return state.map((countdown) => {
                if (countdown.id === action.id) {
                    return {
                        ...countdown,
                        ...action.updates
                    }
                } else {
                    return countdown;
                };
            });
        case 'REMOVE_COUNTDOWN':
            return state.filter(({ id }) => {
                return id !== action.id
            });
        case 'SET_COUNTDOWNS':
            return action.countdowns;
        default:
            return state;
    };
};