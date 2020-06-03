import React from 'react';
import { shallow } from 'enzyme';
import CountdownListItem from '../../components/CountdownListItem.js'
import countdowns from '../fixtures/countdowns';

test('Should render countdownListItem correctly', () => {
    const wrapper = shallow(<CountdownListItem countdowns={countdowns[0]} />);
    expect(wrapper).toMatchSnapshot();
});



