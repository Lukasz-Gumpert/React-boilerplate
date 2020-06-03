import configureMockStore from 'redux-mock-store';
import database from '../../firebase/firebase';
import thunk from 'redux-thunk';
import * as actions from '../../actions/countdowns';
import countdowns from '../fixtures/countdowns';


const createMockStore = configureMockStore([thunk]);

test('Should set up remove countdown action object', () => {
    const action = actions.removeCountdown({ id: '123' });
    expect(action).toEqual({
        type: 'REMOVE_COUNTDOWN',
        id: '123'
    });
});

test('Should set up edit countdown action object', () => {
    const action = actions.editCountdown('123', { note: 'New note value' });
    expect(action).toEqual({
        type: 'EDIT_COUNTDOWN',
        id: '123',
        updates: {
            note: 'New note value'
        }
    });
});

test('Should set up add countdown action object with provided values', () => {
    const countdownData = countdowns[0];
    const action = actions.addCountdown(countdownData);
    expect(action).toEqual({
        type: 'ADD_COUNTDOWN',
        countdown: countdownData,
    });
});

test('Should add countdown value to firebase and store', (done) => {
    const countdownData = {
        title: 'new movie',
        releaseDate: 1000,
        description: 'prepayed',
        category: 'movies'
    };
    const store = createMockStore({});
    store.dispatch(actions.startAddCountdown(countdownData)).then(() => {
        const storeActions = store.getActions();
        expect(storeActions[0]).toEqual({
            type: 'ADD_COUNTDOWN',
            countdown: {
                id: expect.any(String),
                ...countdownData
            }
        })
        return database.ref(`countdowns/${storeActions[0].countdown.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(countdownData);
        done();
    });
});

test('Should add default coutdown values to firebase and store', (done) => {
    const countdownDefaultData = {
        title: '',
        category: '',
        releaseDate: 0,
        description: '',
    }
    const store = createMockStore({});
    store.dispatch(actions.startAddCountdown()).then(() => {
        const storeActions = store.getActions();
        expect(storeActions[0]).toEqual({
            type: 'ADD_COUNTDOWN',
            countdown: {
                id: expect.any(String),
                ...countdownDefaultData
            }
        });
        return database.ref(`countdowns/${storeActions[0].countdown.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(countdownDefaultData);
        done();
    });
});
