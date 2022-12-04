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
              <b>
                <span>{data.month} </span> <span>{data.day} </span>
                <span>{data.year}</span>
              </b>
              <br />
              <p>{data.bibleChaptersRead} Bible chapters read</p>
              <p>{data.writtenWords} Words written</p>
              <p>{data.codeCommits} Code Commits</p>
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
