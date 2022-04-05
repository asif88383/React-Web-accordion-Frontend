import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <main>
      <div className='container'>
        <h3>FAQ's about Login</h3>
        <section className='info'>
          {currentQuestion.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>  
      </div>
    </main>
  )
}

export default App;
