
import { useNavigate, useParams } from 'react-router-dom';
import { getBoards } from '../api/boardApi';
import '../App.css';
import {useEffect, useState} from 'react';

function Write(){
const navigate = useNavigate();
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

const {id} = useParams();


useEffect(()=>{
    if(id){
        const findResult = getBoards.find((board) => {
            return board.id === parseInt(id, 10);
        })
        setTitle(findResult.title);
        setDescription(findResult.description);
    }

}, []);


//비구조화 할당 -> value값이 title, description 이 getBoards의 key값이랑 같아서 작동을 하는것.
function saveClick(){
    if(id) {
        const findIndex = getBoards.findIndex((board)=>board.id ===Number(id));
        getBoards[findIndex].title = title;
        getBoards[findIndex].description = description;
        navigate(`/boards/${id}`);

    }else{
        const newBoard = { id: getBoards.length+1, title, description, createDate: '2025-02-27', writer: '쭈꾸미'};
        //아이디는 어떻게 해야하지? 
        
        getBoards.push(newBoard);
        setTitle("");
        setDescription("");
        navigate("/boards");
    }
    
}

function titleChange(e){
  setTitle(e.target.value)
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
            onChange={titleChange}
            value={title}
           
        />
         
    </div>
    <div className='board-contents'>
        <input
            type="text"
            placeholder='내용을 입력해주세요.'
            onChange={descriptionChange}
            value={description}
            
        />
    </div>
        
      <button
       onClick={saveClick}>
        {id? "수정완료":"등록"}
      </button>
      

</div>
</>

)



} 

export default Write;