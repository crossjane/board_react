
import '../App.css';
import {useState} from 'react';
import {Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom';
import BoardDetail from './BoardDetail';
import { getBoards } from '../api/boardApi';

function Board() {

const navigate = useNavigate();
const [boards, setBoards] = useState(getBoards);

function checkboxClick(id){
  const filteredBoard = boards.map((board) => (board.id === id?
    {...board, isChecked: !board.isChecked}: board 
  ));
  setBoards(filteredBoard);
}


function checkboxDelete(){
  const copyBoards = [...boards];
  const filteredBoards = copyBoards.filter((board)=>!board.isChecked);
  setBoards(filteredBoards);

}

function write(){
 navigate(`/boards/Write`);
}

function clickBoardDetail(id){
  navigate(`/boards/${id}`);

}


  return (
    <div className='board'>
    <header>
    <p style={{fontSize:'25px', color:'blue'}}><b>게시판</b></p>
    <div className='btns'>
      <button onClick={checkboxDelete}>삭제</button>
      <button onClick={write}>글쓰기</button>
    </div>
    </header>
    <table className='board-table'>
      <thead>
        <tr>
          <th>선택</th>
          <th>제목</th>
          <th>작성일</th>
          <th>작성자</th>
        </tr>
      </thead>
      <tbody>
      {boards.map((board)=>(
        <tr key={board.id} onClick={()=>clickBoardDetail(board.id)}>
          <td>
          <input 
            type='checkbox'
            checked={board.isChecked}
            onChange={()=>checkboxClick(board.id)}
          />
            </td>
          <td>{board.title}</td>
          <td>{board.createDate}</td>
          <td>{board.writer}</td>
        </tr>
      ))}
    
      </tbody>
     
    </table>

  </div>
  );
}
export default Board;