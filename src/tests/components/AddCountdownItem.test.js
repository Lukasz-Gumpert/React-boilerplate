import React from 'react';
import { shallow } from 'enzyme';
import { AddCountdownItem } from '../../components/AddCountdownItem';
import countdowns from '../fixtures/countdowns';


let startAddCountdown, history, wrapper

beforeEach(() => {
    startAddCountdown = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddCountdownItem startAddCountdown={startAddCountdown} history={history} />);
});

test('Should render addCountdownItem component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
    wrapper.find('CountdownForm').prop('onSubmit')(countdowns[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddCountdown).toHaveBeenLastCalledWith(countdowns[1]);
});

