import { useState } from 'react';
import { Job } from './components/Job';
import './App.css';

function App() {
  const [job, setJob] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
    </>
  );
}

export default App;
