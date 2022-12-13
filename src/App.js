import React from 'react';
import './style.css';
import Bible from './components/Bible';
import Test from './components/Test';
import dailyData from './data/data.jsx';
import { motion } from 'framer-motion';

export default function App() {
  // const [myState, setMyState] = useState

  const itemVariants = {
    initial: { x: '-100vw', opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <div>
      <div className="mainStat">
        {dailyData
          .slice()
          .reverse()
          .map(function (data, i) {
            return (
              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3, delay: i * 0.2 }}
                // whileHover={{ scale: 1.1 }}
                // animate={{ rotate: 360, scale: 1 }}
                // transition={{
                //   type: 'spring',
                //   stiffness: 260,
                //   damping: 40,
                // }}
                onClick={() => {
                  return <div></div>;
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
