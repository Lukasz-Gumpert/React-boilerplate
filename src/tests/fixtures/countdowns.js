import moment from 'moment';
import uuid from 'uuid';

export default [{
    id: 1,
    title: 'God of War',
    releaseDate: moment().add(10, 'days').valueOf(),
    description: 'prepayed',
    category: 'games'
}, {
    id: 2,
    title: 'God of War',
    releaseDate: moment().add(15, 'days').valueOf(),
    description: 'ps5 version',
    category: 'games'
}, {
    id: 3,
    title: 'David Bowie the ultimate best of',
    releaseDate: moment().add(1, 'day').valueOf(),
    description: 'prepayed',
    category: 'music'
}, {
    id: 4,
    title: 'Chill mix vol 2',
    releaseDate: moment().add(15, 'days').valueOf(),
    description: 'cd',
    category: 'music'
}, {
    id: 5,
    title: 'Chill mix vol 2',
    releaseDate: moment().add(1, 'day').valueOf(),
    description: 'digital',
    category: 'music'
}];