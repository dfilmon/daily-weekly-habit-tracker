import React from 'react';
import './style.css';
import Bible from './components/Bible';
import dailyData from './data/data.jsx';
import Chart from './components/Chart.jsx';

export default function App() {
  // const [myState, setMyState] = useState

  return (
    <div>
              <Chart />
      <div>
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
                <img
                  className="bibleImage"
                  src="https://source.unsplash.com/random/?bible"
                  alt=""
                />
                <b>
                  <span>{data.month} </span> <span>{data.day} </span>
                  <span>{data.year}</span>
                </b>
                <br />
                <p>{data.bibleChaptersRead} chapters of Bible read </p>
                <p>{data.writtenWords} mins of writting </p>
                <p>{data.codeCommits} code Commits </p>
                <p>{data.moneySpent} dollars spent </p>
                <p>{data.noSugar} no sugar </p>
                <p>{data.saladBowl} bowls of salad </p>
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
