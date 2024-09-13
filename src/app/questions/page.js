import { Suspense } from 'react';
import QuestionsList from '@/components/QuestionsList';

export default function Questions() {
  return (
    <div className='questions'>
      <Suspense fallback={<p>Loading...</p>}>
        <QuestionsList />
      </Suspense>
    </div>
  );
}
