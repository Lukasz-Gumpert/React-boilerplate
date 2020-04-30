import React from 'react';
import { connect } from 'react-redux';
import CountdownForm from './CountdownForm';
import { editCountdown, removeCountdown } from '../actions/countdowns';

export class EditCountdownItem extends React.Component {

    onSubmit = (countdown) => {
        this.props.editCountdown(this.props.countdown.id, countdown);
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.removeCountdown(this.props.countdown);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <p>Edit</p>
                <CountdownForm
                    countdown={this.props.countdown}
                    onSubmit={this.onSubmit}
                />
                <div>
                    <button onClick={this.onRemove}>Remove</button>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state, props) => {
    return {
        countdown: state.countdowns.find((countdown) => countdown.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        editCountdown: (id, countdown) => dispatch(editCountdown(id, countdown)),
        removeCountdown: (countdown) => dispatch(removeCountdown(countdown))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCountdownItem);