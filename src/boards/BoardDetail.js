

import '../App.css';
import {useState} from 'react';
import { getBoards } from '../api/boardApi';
import { useNavigate, useParams } from 'react-router-dom';

function BoardDetail(){
const navigate = useNavigate();
const [boards, setBoards] = useState(getBoards);
const [comment, setComment] = useState("");

//비구조화할당
const {id} = useParams();
const params = useParams();
console.log("params :", params);
console.log("id :", id)

function editSave(){
    navigate(`/boards/${id}/Write`);

}

function changeComment(e){
 setComment(e.target.value);
}

// function commentSave(){
//    const findIndex = getBoards.findIndex((board)=>board.id === Number(id));

//    const newComment = {content:comment, nickname:"하하호호호"};
//     if(!comment){
//     getBoards[findIndex].comment.push(newComment);
//         }else{
//             getBoards[findIndex].comment.push([newComment]);
//         }
// setComment("");
   
// }

//배열을 만들어서 만약 이미 comment 가 있으면 그냥 newComment{} 내용을 push , 만약 없으면? 새로운 배열에 newComment{} 내용 push

function commentSave(){
    const findIndex = getBoards.findIndex((board)=>board.id === Number(id));
 
    const newComment = {content:comment, nickname:"하하호호호"};
     if(comment.length >= 1){
     getBoards[findIndex].comment.push(newComment);
         }else{
             getBoards[findIndex].comment.push([newComment]);
         }
 setComment("");
    
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

<div className='comment'>
    <input
        type="text"
        placeholder='댓글을 입력해주세요.'
        onChange={changeComment}
        value={comment}
        />
    <button onClick={commentSave}>등록</button>
<br/>
</div>

<button onClick={editSave}>수정</button>
<button onClick={()=>navigate("/boards")}>목록으로 가기</button>



</div>



</>
)



} 

export default BoardDetail;