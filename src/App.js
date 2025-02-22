
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Board from './Board';
import BoardDetail from './board/BoardDetail';

function App(){
  
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/boards" element={<Board />} />
          <Route path="/boards/:id" element={<BoardDetail />} />
          <Route path="*" element={<Board />} />
        </Routes>
    </BrowserRouter>
     
    </div>
  );
}


export default App;


