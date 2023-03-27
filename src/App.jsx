import { useState } from 'react';
import { Job } from './components/Job';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter';

function App() {
  const [job, setJob] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <>
      <Filter currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <Job job={job} currentItem={currentItem} />
    </>
  );
}

export default App;
