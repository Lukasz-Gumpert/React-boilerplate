import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import CountdownForm from '../../components/CountdownForm';
import countdowns from '../fixtures/countdowns';


let wrapper

beforeEach(() => {
    wrapper = shallow(<CountdownForm />);
});

test('Should render countdownForm', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render countdownForm with provided date', () => {
    const wrapper = shallow(<CountdownForm countdown={countdowns[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error if title to long', () => {
    const value = "New long title";
    wrapper.find('input').at(0).simulate('change', { target: { value } });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
});


test('Should change title', () => {
    const value = "title";
    wrapper.find('input').at(0).simulate('change', { target: { value } });
    expect(wrapper.state('title')).toBe(value);
});

test('Should change category', () => {
    const value = 'tech';
    const wrapper = shallow(<CountdownForm />);
    wrapper.find('select').at(0).simulate('change', { target: { value } });
    expect(wrapper.state('category')).toBe(value);
});

test('Should change description', () => {
    const value = 'new description';
    wrapper.find('input').at(1).simulate('change', { target: { value } });
    expect(wrapper.state('description')).toEqual(value);
});

test('Should change date', () => {
    const value = moment().add(10, 'days');
    wrapper.find('SingleDatePicker').prop('onDateChange')(value);
    expect(wrapper.state('releaseDate')).toEqual(value);
});

test('Should not change to past date', () => {
    const value = moment().subtract(3, 'days');
    wrapper.find('SingleDatePicker').prop('onDateChange')(value);
    expect(wrapper.state('releaseDate')).toEqual(moment());
});

test('Should set calendar focus', () => {
    const focused = true;
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});

test('Should call onSubmit', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<CountdownForm countdown={countdowns[1]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBe(0);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        title: countdowns[1].title,
        category: countdowns[1].category,
        releaseDate: countdowns[1].releaseDate,
        description: countdowns[1].description
    });
});






