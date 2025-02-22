
import './App.css';
import {useState} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import BoardDetail from './board/BoardDetail';
import { getBoards } from './api/boardApi';

function Board() {


const [boards, setBoards] = useState(getBoards);


  // 아무리해도 객체에 붙이는것밖에 생각이안남....
  //따로 상태를 isChecked로 뺄수 있는지?


// function checkboxClick(id){
//   const copyBoards= [...boards, {isChecked:false}]; //이것은 따로 배열에 객체를 집어넣는것?
//   const filteredBoard = boards.map((board) => (board.id === id?
//     copyBoards.isChecked = true : copyBoards.isChecked= false
//   ));
//   setBoards(filteredBoard);

// }


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

}


function Board() {
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
        <tr key={board.id}>
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
};

export default Board;