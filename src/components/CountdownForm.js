import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { addCountdown } from '../actions/countdowns';

export default class CountdownForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.countdown ? props.countdown.title : '',
            category: props.countdown ? props.countdown.category : 'movies',
            releaseDate: props.countdown ? moment(props.countdown.releaseDate) : moment(),
            description: props.countdown ? props.countdown.description : '',
            calendarFocused: false,
            error: '',
        };
    };

    onTitleChange = (e) => {
        if (e.target.value.length > 5) {
            this.setState(() => ({ error: 'Please provide shorter title name' }));
        } else {
            const title = e.target.value;
            this.setState(() => ({ title, error: '' }));
        };
    };

    onCategoryChange = (sel) => {
        const category = sel.target.value;
        this.setState(() => ({ category }));
    };

    onDateChange = (releaseDate) => {
        if (releaseDate) {
            this.setState(() => ({ releaseDate }));
        };
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title) {
            this.setState(() => ({ error: 'Please provide title' }));
        } else {
            this.props.onSubmit({
                title: this.state.title,
                category: this.state.category,
                releaseDate: this.state.releaseDate.valueOf(),
                description: this.state.description
            });
            this.setState(() => ({ error: '' }));
        };
    };


    render() {
        return (
            <div>
                {this.state.error.length > 0 ? <p>{this.state.error}</p> : false}
                <form onSubmit={this.onSubmit}>
                    <input
                        className="text-input"
                        type="text"
                        placeholder="title"
                        autoFocus
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    />
                    <select
                        value={this.state.category}
                        onChange={this.onCategoryChange}
                        name="category"
                        className="select-category"
                    >
                        <option value="movies">Movies</option>
                        <option value="music">Music</option>
                        <option value="tech">Tech</option>
                        <option value="games">Games</option>
                        <option value="events">Events</option>
                    </select>
                    <SingleDatePicker
                        date={this.state.releaseDate}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => day < moment()}
                    />
                    <input
                        className="text-input"
                        type="text"
                        placeholder="description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <button>Save</button>
                </form>
            </div>
        )
    }
}