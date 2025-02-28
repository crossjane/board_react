

import '../App.css';
import {useState} from 'react';
import { getBoards } from '../api/boardApi';
import { useNavigate, useParams } from 'react-router-dom';

function BoardDetail(){
 const navigate = useNavigate();
const [boards, setBoards] = useState(getBoards);

//비구조화할당
const {id} = useParams();
const params = useParams();
console.log("params :", params);
console.log("id :", id)

function editSave(){
    navigate(`/boards/${id}/Write`);

}


return (

<>


<div className ='board-detail'>

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




<button onClick={editSave}>수정</button>
<button onClick={()=>navigate("/boards")}>목록으로 가기</button>

</div>



</>
)



} 

export default BoardDetail;