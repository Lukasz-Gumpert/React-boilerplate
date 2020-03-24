import uuid from 'uuid';

export const addCountdown = (
    {
      title = '',
      category = '',
      releaseDate = 0,
      description = ''
    } = {}
  ) => ({
    type: 'ADD_COUNTDOWN',
    countdown: {
      id: uuid(),
      title,
      category,
      releaseDate,
      description
    }
  });

export const removeCountdown = ({ id }) => ({
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