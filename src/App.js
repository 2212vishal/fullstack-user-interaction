
import './App.css';
import AllTeam from './components/AllTeam';
import Header from './components/Header'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserState from './Context/Users/UserState';
import CreateTeam from './components/CreateTeam';

function App() {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center bg-gray-200 p-2'>
        <b className='text-3xl'>Heliverse Assignment</b>
      </div>
    <UserState>
    <Router>
      <Routes>
        <Route exact path="/" element={<Header />}/>
        <Route exact path="/CreateTeam" element={<CreateTeam/>} />
        <Route exact path="/AllTeam" element={<AllTeam />} />
      </Routes>
    </Router>
    </UserState>
    </div>
  );
}

export default App;
