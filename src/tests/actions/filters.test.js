import uuid from 'uuid';
import moment from 'moment';
import * as actions from '../../actions/filters';


test('Should generate set text filter action object', () => {
    const text = 'new text value'
    const action = actions.setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('Should generate action object for sort by name', () => {
    expect(actions.sortByName()).toEqual({ type: 'SORT_BY_NAME' })
});

test('Should generate action object for sort by type', () => {
    expect(actions.sortByType()).toEqual({ type: 'SORT_BY_TYPE' })
});


test('Should generate action object for sort by endingSoonest', () => {
    expect(actions.endingSoonest()).toEqual({ type: 'ENDING_SOONEST' })
});

test('Should generate action object for sort by furthestAway', () => {
    expect(actions.furthestAway()).toEqual({ type: 'FURTHEST_AWAY' })
});
