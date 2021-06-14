import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styles from '../Reviews/Styles.js';

const Helpful = ({ origin, id, helpCount }) => {
  const [link, setLink] = useState({
    helpful: false,
    report: false
  });
  const [isQuestion, setIsQuestion] = useState(() => {
    return origin === 'qa/questions';
  });
  const [type, setType] = useState('');
  const [count, setCount] = useState(helpCount);

  const sendPutReq = () => {
    axios.put(`/${origin}/${id}/${type}`)
      .then(res => {
        console.log('Good job! You did it!');
      })
      .catch(err => {
        console.log('error in PUT request', err);
      });

  };

  const handleClick = (e) => {
    let value = e.target.value;
    setType(value);
    if (!link[value]) {
      setLink(prev => {
        return {...prev, [value]: true};
      });
      if (value === 'helpful') {
        setCount(prev => prev += 1);
      }
    } else {
      alert('You already clicked!!');
    }
  };

  const displayReport = () => {
    if (isQuestion) {
      return null;
    } else if (link.report) {
      return <Styles.helpText>Reported!</Styles.helpText>;
    } else {
      return (
        <>
          <Styles.helpButton onClick={handleClick} value="report">Report</Styles.helpButton>
        </>
      );
    }
  };

  useEffect(() => {
    if (type) {
      sendPutReq();
    }
  }, [type]);


  return (
    <Styles.helpful>
      <Styles.helpText> Helpful? <Styles.helpButton value="helpful" onClick={handleClick}>Yes</Styles.helpButton> ({count})</Styles.helpText>
      {/* <div>|</div> */}
      {displayReport()}
    </Styles.helpful>
  );
};

export default Helpful;

/*
REVIEWS:
PUT /reviews/:review_id/helpful
PUT /reviews/:review_id/report
origin = 'reviews'
id = review.id
type = 'helpful' or 'report'
helpCount = review.helpfulness


QEUSTIONS:
PUT /qa/questions/:question_id/helpful
PUT /qa/questions/:question_id/report
origin= 'qa/questions'
id = question.id
type = 'helpful' or 'report'

ANSWERS:
PUT /qa/answers/:answer_id/helpful
PUT /qa/answers/:answer_id/report
*/