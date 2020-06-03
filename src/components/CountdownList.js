import React from 'react';
import { connect } from "react-redux";
import CountdownListItem from '../components/CountdownListItem';
import selectFilters from '../selectors/filters';


export const CountdownList = (props) => (
    <div>
        {
            props.countdowns.length === 0 ? (
                <p>No countdown data</p>
            ) : (
                    props.countdowns.map((countdown) => {
                        return <CountdownListItem key={countdown.id} {...countdown} />
                    })
                )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        countdowns: selectFilters(state.countdowns, state.filters)
    }
};

export default connect(mapStateToProps)(CountdownList);