import Card from './Card';
import Link from 'next/link';

async function QuestionsList() {
  const response = await fetch(
    'https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&tagged=reactjs&site=stackoverflow',
    { cache: 'no-store' }
  );
  const data = await response.json();
  const questions = data.items;

  return (
    <div className='questions-list'>
      {questions.map((question) => (
        <Link
          href={`/questions/${question.question_id}`}
          key={question.question_id}
        >
          <Card
            title={question.title}
            views={question.view_count}
            answer={question.answer_count}
          />
        </Link>
      ))}
    </div>
  );
}

export default QuestionsList;
