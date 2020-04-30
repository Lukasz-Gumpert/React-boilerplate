import moment from 'moment';

const selectFilters = (countdowns, { sortBy, text, releaseDate }) => {
    return countdowns.filter((countdown) => {
        const textMatch = countdown.title.toLowerCase().includes(text.toLowerCase()) || countdown.description.toLowerCase().includes(text.toLowerCase())
        return textMatch
    }).sort((a, b) => {
        if (sortBy === "sortByName") {
            if (a.title == b.title) {
                return (a.releaseDate < b.releaseDate) ? -1 : (a.releaseDate < b.releaseDate) ? 1 : 0;
            } else {
                return (a.title < b.title) ? -1 : 1;
            };
        } else if (sortBy === "endingSoonest") {
            if (a.releaseDate == b.releaseDate) {
                return (a.title < b.title) ? -1 : (a.title < b.title) ? 1 : 0;
            } else {
                return (a.releaseDate < b.releaseDate) ? -1 : 1;
            };
        } else if (sortBy === "furthestAway") {
            if (a.releaseDate == b.releaseDate) {
                return (a.title < b.title) ? -1 : (a.title < b.title) ? 1 : 0;
            } else {
                return (a.releaseDate > b.releaseDate) ? -1 : 1;
            };
        } else if (sortBy === "type") {
            if (a.category == b.category) {
                return (a.releaseDate < b.releaseDate) ? -1 : (a.releaseDate < b.releaseDate) ? 1 : 0;
            } else {
                return (a.category > b.category) ? -1 : 1;
            };
        };
    });
};

// var af = a.title; 
// var bf = b.title; 
// var as = moment(releaseDate); 
// var bs = moment(releaseDate); 

// if(af == bf) { 
//     return (as < bs) ? -1 : (as < bs) ? 1 : 0; 
// } else { 
//     return (af < bf) ? -1 : 1; 
// } 



//         if (sortBy === 'sortByName') {
//             return (a.title === b.title) ? a.title > b.title ? 1 : -1;
//         } else if (sortBy === 'endingSoonest') {
//             return a.releaseDate > b.releaseDate ? 1 : -1;
//         } else if (sortBy === 'furthestAway') {
//             return a.releaseDate < b.releaseDate ? 1 : -1;
//         } else if (sortBy === 'sortByType') {
//             return a.category > b.category ? 1 : -1;
//         };
//     });
// };

export default selectFilters;