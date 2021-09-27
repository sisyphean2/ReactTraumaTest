import React from 'react';
import { useSelector } from 'react-redux';
import { PageOne } from './features/page-one/PageOne';
import { Results } from './features/page-one/Results';
import { getPageOneStatus } from './features/page-one/pageOneSlice';
import './App.css';

function App() {
  const status = useSelector(getPageOneStatus);

  const content = status === 'submitted' ? <Results /> : <PageOne />
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
