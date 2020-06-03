import React from 'react';
import { shallow } from 'enzyme';
import { EditCountdownItem } from '../../components/EditCountdownItem';
import countdowns from '../fixtures/countdowns';

let wrapper, editCountdown, removeCountdown, history

beforeEach(() => {
    editCountdown = jest.fn();
    removeCountdown = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditCountdownItem
            editCountdown={editCountdown}
            removeCountdown={removeCountdown}
            history={history}
            countdown={countdowns[3]}
        />);
});

test('Should render EditCountdownItem correctly', () => {
expect(wrapper).toMatchSnapshot();
});

test('Should handle editCountdown', () => {
wrapper.find('CountdownForm').prop('onSubmit')(countdowns[3]);
expect(history.push).toHaveBeenLastCalledWith('/');
expect(editCountdown).toHaveBeenLastCalledWith(countdowns[3].id, countdowns[3]);
});

test('Should handle removeCountdown', () => {
wrapper.find('button').simulate('click');
expect(history.push).toHaveBeenLastCalledWith('/');
expect(removeCountdown).toHaveBeenLastCalledWith(countdowns[3]);
});