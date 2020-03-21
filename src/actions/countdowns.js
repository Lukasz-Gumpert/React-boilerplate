export const addCountdown = (countdown) => ({
    type: 'ADD_COUNTDOWN',
    countdown
});

export const removeCountdown = ({id}) => ({
    type: 'REMOVE_COUNTDOWN',
    id
});

export const editCountdown = (id, updates) => ({
    type: 'EDIT_COUNTDOWN',
    id,
    updates
});

export const setCountdowns = (countdowns) => ({
    type: 'SET_COUNTDOWNS',
    countdown
})