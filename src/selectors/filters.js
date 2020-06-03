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
                return (a.category > b.category) ? 1 : -1;
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



// const pipeComparators = (...fns) => (a, b) => {
//     const compare = (a, b, f = 0) =>
//       fns[f](a, b) ? fns[f](a, b) : fns[f](b, a) ? fns[f](b, a) : f !== fns.length - 1 ? compare(a, b, f + 1) : 0;
//     return compare(a, b);
//   };
   
//   const comparator = fn => (a, b) => (fn(a, b) ? 1 : fn(b, a) ? -1 : 0);
   
//   const filters = {
//     sortByName: comparator((a, b) => (a.title > b.title ? 1 : -1)),
//     endingSoonest: comparator((a, b) => (a.releaseDate > b.releaseDate ? 1 : -1)),
//     furthestAway: comparator((a, b) => (a.releaseDate < b.releaseDate ? 1 : -1)),
//     sortByType: comparator((a, b) => (a.category > b.category ? 1 : -1)),
//   };
   
//   const sortByProperty = propName => comparator((a, b) => (a[propName] > b[propName] ? 1 : -1));
   
//   const getFilterByName = filterName => {
//     const filter = filters[filterName];
//     return filter || comparator(() => 0);
//   };
   
//   const selectFilters = (countdowns, { sortBy, text, releaseDate }) => {
//     return countdowns
//       .filter(
//         ({ title, description }) =>
//           title.toLowerCase().includes(text.toLowerCase()) || description.toLowerCase().includes(text.toLowerCase()),
//       )
//       .sort(pipeComparators(sortByProperty('TU_NAZWA_WLASCIWOSCI'), getFilterByName(sortBy)));

export default selectFilters;