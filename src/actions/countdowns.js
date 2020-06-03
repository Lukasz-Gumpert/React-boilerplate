import uuid from 'uuid';
import database from '../firebase/firebase';

export const addCountdown = (countdown) => ({
  type: 'ADD_COUNTDOWN',
  countdown
});

export const startAddCountdown = (countdown = {}) => {
  return (dispatch) => {
    const {
      title = '',
      category = '',
      releaseDate = 0,
      description = '',
    } = countdown;
    const countdownData = { title, category, releaseDate, description };
    return database.ref('countdowns').push(countdownData).then((ref) => {
      dispatch(addCountdown({
        id: ref.key,
        ...countdownData
      }));
    });
  };
};

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