import React from 'react';
import { CountdownSummary } from './CountdownSummary';
import CountdownFilters from './CountdownFilters';
import CountdownList from './CountdownList';


const DashboardPage = (props) => (
  <div>
    <CountdownSummary />
    <CountdownFilters />
    <CountdownList />
  </div>
);

export default DashboardPage