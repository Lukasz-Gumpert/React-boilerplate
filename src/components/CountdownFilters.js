import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByName, sortByType, endingSoonest, furthestAway } from '../actions/filters';

class CountdownFilters extends React.Component {
    constructor(props) {
        super(props);

        this.onSortChange = (sel) => {
            const sortBy = sel.target.value;
            if (sortBy === "sortByName") {
                return props.dispatch(sortByName());
            } else if (sortBy === "sortByType") {
                return props.dispatch(sortByType());
            } else if (sortBy === "endingSoonest") {
                return props.dispatch(endingSoonest());
            } else if (sortBy === "furthestAway") {
                return props.dispatch(furthestAway());
            };
        };
    };
    
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="search"
                    value={this.props.filters.text}
                    onChange={(e) => { this.props.dispatch(setTextFilter(e.target.value)) }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                    name="sortBy"
                >
                    <option value="endingSoonest">Ending soonest</option>
                    <option value="furthestAway" >Furthest away</option>
                    <option value="sortByName" >By name</option>
                    <option value="sortByType" >By type</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};


export default connect(mapStateToProps)(CountdownFilters);