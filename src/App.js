
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Board from './boards/Board';
import BoardDetail from './boards/BoardDetail';
import Write from './boards/Write';

function App(){

  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          {/* restAPI */}
          <Route path="/boards" element={<Board />} />
          <Route path="/boards/:id" element={<BoardDetail />} />
          <Route path="/boards/write" element={<Write />} />
          <Route path="*" element={<Board />} />
        </Routes>
    </BrowserRouter>
     
    </div>  
  );
}


export default App;


