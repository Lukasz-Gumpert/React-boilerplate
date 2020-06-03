import React from 'react';
import { shallow } from 'enzyme';
import { CountdownFilters } from '../../components/CountdownFilters';
import { filters, altFilters } from '../fixtures/filters';

let wrapper, setTextFilter, sortByName, sortByType, endingSoonest, furthestAway

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByName = jest.fn();
    sortByType = jest.fn();
    endingSoonest = jest.fn();
    furthestAway = jest.fn();
    wrapper = shallow(
        <CountdownFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByName={sortByName}
            sortByType={sortByType}
            endingSoonest={endingSoonest}
            furthestAway={furthestAway}
        />);
});

test('Should render CountdownFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
});

test('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', { target: { value } });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('Should handle sort by name', () => {
    const value = "sortByName"
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', { target: {value}}  );
    expect(sortByName).toHaveBeenCalled();
});

test('Should handle sort by type', () => {
    const value = "sortByType"
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', { target: {value}}  );
    expect(sortByType).toHaveBeenCalled();
});

test('Should handle sort by ending soonest', () => {
    const value = "endingSoonest"
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', { target: {value}}  );
    expect(endingSoonest).toHaveBeenCalled();
});

test('Should handle sort by furthest away', () => {
    const value = "furthestAway"
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', { target: {value}}  );
    expect(furthestAway).toHaveBeenCalled();
});