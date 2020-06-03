import React from 'react';
import { shallow } from 'enzyme';
import { CountdownList } from '../../components/CountdownList';
import countdowns from '../fixtures/countdowns';

test('Should render CountdownList component with provided fixture data', () => {
    const wrapper = shallow(<CountdownList countdowns={countdowns} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error paragraph when no data is provided to CountdownList component', () => {
    const wrapper = shallow(<CountdownList countdowns={[]} />);
    expect(wrapper).toMatchSnapshot();
});