import React from 'react';
import { Link } from 'react-router-dom';

export const CountdownSummary = () => {
    return (
        <div className="page-header">
            <div className="content-container">
                <Link className="button" to="/create">Add Item</Link>
            </div>
        </div>
    )
};
