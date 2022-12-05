import React from 'react';
import './style.css';
import Bible from './components/Bible';
import dailyData from './data/data.jsx';

export default function App() {
  // const [myState, setMyState] = useState

  return (
    <div>
      <div>
        {dailyData.map(function (data) {
          return (
            <div
              onClick={() => {
                return (
                  <div>
                    {alert('clicked')}
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
