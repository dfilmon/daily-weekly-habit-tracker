import React from 'react';
import './style.css';
import Bible from './components/Bible';
import dailyData from './data/data.jsx';
import Chart from './components/Chart.jsx';

export default function App() {
  // const [myState, setMyState] = useState

  return (
    <div>
      <div className="mainStat">
        {dailyData
          .slice()
          .reverse()
          .map(function (data) {
            return (
              <div
                onClick={() => {
                  return (
                    <div>
                      {console.log('clicked')}
                      <h1>Filmon Abraha</h1>
                    </div>
                  );
                }}
                className="statContainer"
              >
                <b>
                  <span>{data.month} </span> <span>{data.day} </span>
                  <span>{data.year}</span>
                </b>
                <br />
                <p>{data.bibleChaptersRead} chapters of Bible read </p>
                <p>{data.codeCommits} chapters of Bible read </p>
                <p>{data.writtenWords} chapters of Bible read </p>
                <p>{data.saladBowl} chapters of Bible read </p>

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
