import { useEffect, useState, useRef } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { Sub } from './types';
import INITIAL_STATE from './data/subs.json';

interface AppState {
  subs: Array<Sub>,
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);
  const divref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    setSubs(INITIAL_STATE);
  }
, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs(prev => [...prev, newSub]);
    setNewSubsNumber(n => n + 1);
  }

  return (
    <div className="App" ref={divref}>
      <h1>All subscribers</h1>
        <List subs={subs} />
        New Subs: {newSubsNumber}
        <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
