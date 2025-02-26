

import '../App.css';
import {useState} from 'react';
import { getBoards } from '../api/boardApi';
import { useParams } from 'react-router-dom';

function BoardDetail(){

const [boards, setBoards] = useState(getBoards);

//왜 객체로 가져오지? 그냥 문법인가?
const {id} = useParams();
const params = useParams();
console.log("params :", params);
console.log("id :", id)


return (

<>


<div className ='baord-detail'>

    {boards.map((board)=>(
        board.id === Number(id)?
            <>
            <div key={board.id}>
                <div className='board-title'>{board.title}</div>
                <div className='board-contents'>{board.description}</div>
            </div>
            </>
    : 
           null

    ))}




</div>




</>
)



} 

export default BoardDetail;