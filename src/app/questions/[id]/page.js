'use client';

import Card from '@/components/Card';
import React, { useState, useEffect } from 'react';

const QuestionDetails = ({ params }) => {
  const { id } = params;
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.stackexchange.com/2.2/questions/${id}?site=stackoverflow`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result) {
          setQuestions(result.items[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className='question-details'>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className='details-container'>
          <h1 className='details-title'>Questions: {id}</h1>
          <Card
            key={questions.question_id}
            title={questions.title}
            views={questions.view_count}
            answer={questions.answer_count}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionDetails;
