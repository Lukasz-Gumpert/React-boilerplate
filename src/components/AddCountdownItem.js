import React from 'react';
import { connect } from 'react-redux';
import CountdownForm from './CountdownForm';
import { addCountdown } from '../actions/countdowns';

export class AddCountdownItem extends React.Component {
    onSubmit = (countdown) => {
        this.props.addCountdown(countdown);
        this.props.history.push('/');
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Add countdown</h1>
                <CountdownForm onSubmit={this.onSubmit.bind(this)} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addCountdown: (countdown) => dispatch(addCountdown(countdown))
});

export default connect(undefined, mapDispatchToProps)(AddCountdownItem);
