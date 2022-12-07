import React from 'react';
import './style.css';
import Bible from './components/Bible';
import dailyData from './data/data.jsx';
import { motion } from 'framer-motion';

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
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
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
                <p>{data.bibleChaptersRead} Bible </p>
                <p>{data.codeCommits} Commits </p>
                <p>{data.writtenWords} Writing </p>
                <p>{data.saladBowl} Salad </p>

                <br />
                <br />
              </motion.div>
            );
          })}
      </div>
      <Bible />
    </div>
  );
}
