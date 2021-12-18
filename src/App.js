import { useState } from 'react';
import './App.css';
import QPage from './components/questionPage/qPage';
import BodyPage from './components/bodyPage/bodyPage';
import FormPage from './components/formPage/formPage';
import HomePage from './components/homePage/homePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Information from './components/information/information';
function App() {
  const [choices, setChoices] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [evidence, setEvidence] = useState([]);
  const [age, setAge] = useState();
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [sexe, setSexe] = useState('');
  const [recommendation, setRecommendation] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route
          path='/questions'
          element={
            <QPage
              age={age}
              sexe={sexe}
              evidence={evidence}
              setEvidence={setEvidence}
              choices={choices}
              setchoices={setChoices}
              conditions={conditions}
              setConditions={setConditions}
              recommendation={recommendation}
              setRecommendation={setRecommendation}
            />
          }
        />
        <Route
          path='/form'
          element={
            <FormPage
              age={age}
              setAge={setAge}
              sexe={sexe}
              setSexe={setSexe}
              fName={fName}
              lName={lName}
              setfName={setfName}
              setlName={setlName}
            />
          }
        />
        <Route
          path='/symptoms'
          element={<BodyPage choices={choices} setChoices={setChoices} />}
        />
        <Route path='/information' element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
