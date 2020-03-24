import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class CountdownForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            category: 'movies',
            releaseDate: moment(),
            description: '',
            calendarFocused: false,
            error: '',
        };
    };

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
        console.log(this.state.title)
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
        this.props.onSubmit({
            title: this.state.title,
            category: this.state.category,
            releaseDate: this.state.releaseDate.valueOf(),
            description: this.state.description
        });
    };

    render() {
        return (
            <form  onSubmit={this.onSubmit}>
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
                    isOutsideRange={() => false}
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

        )
    }
}