import React from 'react';
import './style.css';
import Bible from './components/Bible';
import dailyData from './data/data.jsx';

export default function App() {
  return (
    <div>
      <div>
        {dailyData.map(function (data) {
          return (
            <div>
              <h1>Today</h1>
              <p>Year: {data.year}</p>
              <p>Month: {data.month}</p>
              <p>Day: {data.day}</p>
              <p>Bible Chapters Read: {data.bibleChaptersRead}</p>
              <p>Written Words: {data.writtenWords}</p>
              <p>Code Commits: {data.codeCommits}</p>
              <br />
              <br />
            </div>
          );
        })}
      </div>
      <Bible />
    </div>
  );
}
