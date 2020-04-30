import React from 'react';
import { connect } from 'react-redux';
import CountdownForm from './CountdownForm';
import { addCountdown } from '../actions/countdowns';
import moment from 'moment';

export class AddCountdownItem extends React.Component {
    onSubmit = (countdown) => {
        this.props.addCountdown(countdown);
        this.props.history.push('/');

    }
    // add = () => {
 
    //     this.props.addCountdown({title: 'AGod of War', category: 'games', releaseDate:1888240800000, description: 'aa'})
    //     this.props.addCountdown({title: 'God of War', category: 'games', releaseDate: 1888240800000, description: 'aa'})
    //     this.props.addCountdown({title: 'ZGod of War', category: 'games', releaseDate:1988240800000, description: 'aa'})
    //     this.props.addCountdown({title: 'MGod of War', category: 'games', releaseDate: 1988240800000, description: 'aa'})
    //     this.props.addCountdown({title: 'Ood of War', category: 'games', releaseDate:2788240800000, description: 'aa'})
    //     this.props.addCountdown({title: 'Ood of War', category: 'games', releaseDate: 3788240800000, description: 'aa'})
    // //     this.props.addCountdown({title: 'God of War', category: 'games', releaseDate: 1888240800000, description: 'aa'})
    // //     this.props.addCountdown({title: 'Micky mouse', category: 'movies', releaseDate: 1688240800000, description: 'aa'})
    // //     this.props.addCountdown({title: 'Micky mouse', category: 'movies', releaseDate: 1788240800000, description: 'aa'})
    // //     this.props.addCountdown({title: 'Micky mouse', category: 'movies', releaseDate: 1888240800000, description: 'aa'})
    // //     this.props.addCountdown({title: 'Avril lavigne', category: 'music', releaseDate: 1688240800000, description: 'aa'})
    // //     this.props.addCountdown({title: 'Avril lavigne', category: 'music', releaseDate: 1788240800000, description: 'aa'})
    // //     this.props.addCountdown({title: 'Avril lavigne', category: 'music', releaseDate: 1888240800000, description: 'aa'})
    // //     this.props.addCountdown({title: 'Vader', category: 'music', releaseDate: 1688240800000, description: 'aa'})
    // //     this.props.addCountdown({title: 'Vader', category: 'music', releaseDate: 1788240800000, description: 'aa'})
    // //     this.props.addCountdown({title: 'Vader', category: 'music', releaseDate: 1888240800000, description: 'aa'})
    // //     this.props.addCountdown({title: 'Horizon zero dawn', category: 'games', releaseDate: 1588240800000, description: 'aa'})
    // //     this.props.addCountdown({title: 'Horizon zero dawn', category: 'games', releaseDate: 1788240800000, description: 'aa'})
    // //     this.props.addCountdown({title: 'Horizon zero dawn', category: 'games', releaseDate: 1888240800000, description: 'aa'})
    // }
    render() {
        return (
            <div>
                <h1>Add countdown</h1>
                <CountdownForm onSubmit={this.onSubmit} />
                {/* {this.add()} */}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addCountdown: (countdown) => dispatch(addCountdown(countdown))
});

export default connect(undefined, mapDispatchToProps)(AddCountdownItem);
