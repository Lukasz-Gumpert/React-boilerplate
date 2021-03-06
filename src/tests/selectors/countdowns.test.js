import selectFilters from '../../selectors/filters';
import moment from 'moment';
import countdowns from '../fixtures/countdowns';

test('should sort by title and date', () => {
    const filters = { sortBy: 'sortByName', text: '' }
    const result = selectFilters(countdowns, filters);
    expect(result).toEqual([countdowns[4],countdowns[3],countdowns[2],countdowns[0],countdowns[1]])
});

// if the same type and date then alphabetically not working
test('should sort by type and date', () => { 
    const filters = { sortBy: 'type', text: '' }
    const result = selectFilters(countdowns, filters);
    expect(result).toEqual([countdowns[0],countdowns[1],countdowns[2],countdowns[4],countdowns[3]])
});

test('should sort by endingSoonest and name', () => {
    const filters = { sortBy: 'endingSoonest', text: '' }
    const result = selectFilters(countdowns, filters);
    expect(result).toEqual([countdowns[4],countdowns[2],countdowns[0],countdowns[3],countdowns[1]])
});


test('should sort by furthestAway and name', () => {
    const filters = { sortBy: 'furthestAway', text: '' }
    const result = selectFilters(countdowns, filters);
    expect(result).toEqual([countdowns[3],countdowns[1],countdowns[0],countdowns[4],countdowns[2]])
});







