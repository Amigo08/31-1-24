
import './App.css';
import Movieform from './Components/Movieform';
import BookingTable from './Components/BookingTable';
import Language from './Components/Language';
import {Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/BookingTable'} element={<BookingTable />}></Route>
        <Route path={'/Movieform'} element={<Movieform />}></Route>
        <Route path={'/Language'} element={<Language />}></Route>
      </Routes>


    </div>
  );
}

export default App;
