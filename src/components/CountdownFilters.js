import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByName, sortByType, endingSoonest, furthestAway } from '../actions/filters';

export class CountdownFilters extends React.Component {
    constructor(props) {
        super(props);

        this.onTextChange = (e) => {
            return this.props.setTextFilter(e.target.value);
        }

        this.onSortChange = (sel) => {
            const sortBy = sel.target.value;
            if (sortBy === "sortByName") {
                return props.sortByName();
            } else if (sortBy === "sortByType") {
                return props.sortByType();
            } else if (sortBy === "endingSoonest") {
                return props.endingSoonest();
            } else if (sortBy === "furthestAway") {
                return props.furthestAway();
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
                    onChange={this.onTextChange}
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

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (data) => dispatch(setTextFilter(data)),
    sortByName: () => dispatch(sortByName()),
    sortByType: () => dispatch(sortByType()),
    endingSoonest: () => dispatch(endingSoonest()),
    furthestAway: () => dispatch(furthestAway()),
});


export default connect(mapStateToProps, mapDispatchToProps)(CountdownFilters);