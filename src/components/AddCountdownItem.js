import React from 'react';
import { connect } from 'react-redux';
import CountdownForm from './CountdownForm';
import { startAddCountdown } from '../actions/countdowns';
import moment from 'moment';

export class AddCountdownItem extends React.Component {
    onSubmit = (countdown) => {
        this.props.startAddCountdown(countdown);
        this.props.history.push('/');

    }
 
    render() {
        return (
            <div>
                <h1>Add countdown</h1>
                <CountdownForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddCountdown: (countdown) => dispatch(startAddCountdown(countdown))
});

export default connect(undefined, mapDispatchToProps)(AddCountdownItem);
