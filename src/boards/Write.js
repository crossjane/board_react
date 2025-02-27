

import { getBoards } from '../api/boardApi';
import '../App.css';
import {useState} from 'react';

function Write(){
   
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

// 상태 안쓰고 DB는 상태쓰는거아님. 

//useRef 
//useState


// function createBoard(title, description){
//     const newBoard = {id:+1? , title, description }
//     return newBoard;
// }

// createBoard("제목목");

// getBoards.push(newBoard);

function saveClick(title, description){
    const newBoard = { title, description};
    //아이디는 어떻게 해야하지? 
    getBoards.push(newBoard);
    setTitle("");
    setDescription("");
}

function titleChange(e){
  setTitle(e.target.value);
}

function descriptionChange(e){
    setDescription(e.target.value);
 }
 

return(

<>
<div className ='board-detail'>

     
    <div className='board-title'>
        <input
            type='text'
            placeholder="제목을 입력해주세요."
            onChange={descriptionChange}
            value={description}
        />
         
    </div>
    <div className='board-contents'>
        <input
            type="text"
            placeholder='내용을 입력해주세요.'
            onChange={titleChange}
            value={title}
        />
    </div>
        
      <button
       onClick={saveClick}>
        등록
      </button>

</div>
</>

)



} 

export default Write;