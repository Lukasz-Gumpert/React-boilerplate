import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import CountdownClock from './CountdownClock';

const CountdownListItem = ({ id, title, category, releaseDate, description }) => (
    <Link to={`edit/${id}`} className="list-item">
        <p> {category} </p>
        <h1>{title}</h1> : {description} <p>Time left:</p>
        <CountdownClock timeTillDate={moment(releaseDate)} />
    </Link>
);

export default CountdownListItem;