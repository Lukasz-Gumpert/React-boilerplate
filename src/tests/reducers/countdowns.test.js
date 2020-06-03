import uuid from 'uuid';
import * as actions from '../../actions/countdowns';
import countdownsReducer from '../../reducers/countdowns';
import countdowns from '../fixtures/countdowns';

test('Should set default state when no data is provided', () => {
    const init = { type: '@@INIT' }
    const state = countdownsReducer(undefined, init);
    expect(state).toEqual([]);
});


test('Should add provided countdown to state', () => {
    const addCountdownAction = actions.addCountdown(countdowns[0])
    const state = countdownsReducer(undefined, addCountdownAction);
    expect(state).toEqual([{
        ...countdowns[0],
        id: expect.any(Number)
    }]);
});

test('should edit countdown by provided id', () => {
    const title = 'God of War 2'
    const editCountdownAction = actions.editCountdown(countdowns[0].id, {title});
    const state = countdownsReducer(countdowns, editCountdownAction)
    expect(state[0].title).toBe(title);
});

test('should not edit countdown when provided id is not valid', () => {
    const title = 'God of War 2'
    const id = uuid();
    const editCountdownAction = actions.editCountdown(id, {title});
    const state = countdownsReducer(countdowns, editCountdownAction)
    expect(state).toEqual(countdowns);
});

test('should remove countdowns with provided id', () => {
    const id = countdowns[3].id;
    const removeCountdownAction = actions.removeCountdown({id});
    const state = countdownsReducer(countdowns, removeCountdownAction);
    expect(state).toEqual([countdowns[0], countdowns[1], countdowns[2], countdowns[4]]) 
});

test('should not remove countdown when provided id not found', () => {
    const id = uuid();
    const removeCountdownAction = actions.removeCountdown({id});
    const state = countdownsReducer(countdowns, removeCountdownAction);
    expect(state).toEqual(countdowns);
});