

import '../App.css';
import {useState} from 'react';
import { getBoards } from '../api/boardApi';
import { useNavigate, useParams } from 'react-router-dom';

function BoardDetail(){
const navigate = useNavigate();
const [boards, setBoards] = useState(getBoards);
const [comment, setComment] = useState("");
const [selectedBoard, setSelectedBoard] = useState();

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
//안되는이유??

// function commentSave(){
//     const findIndex = getBoards.findIndex((board)=>board.id === Number(id));
 
//     const newComment = {content:comment, nickname:"하하호호호"};
//      if(!comment && null){
//             getBoards[findIndex].comment =[];
//          }
         
//      getBoards[findIndex].comment.push(newComment);
//  setComment("");
    
//  }

// return (


function commentSave(){
    const findIndex = getBoards.findIndex((board)=>board.id === Number(id));
 
    const newComment = {content:comment, nickname:"하하호호호"};
     if(!getBoards[findIndex].comment){
            getBoards[findIndex].comment =[];
         }
         
     const updatedBoards = getBoards[findIndex].comment.push(newComment);
     setSelectedBoard(updatedBoards);
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


{/* getBoards에 저장된 댓글들이 불러져와야함->1. getBoards에서 comment 가 있는 댓글들을 모두 불러옴.
 comment 가 있다면? 모두불러움  모가 잘못된건지모르겠음음 */}

<div className='comment'>
    <div className='comment-view'>
        { selectedBoard.comment? selectedBoard.map((comment)=>
        <>
            <div>{comment.content}</div>
            <div>{comment.writer}</div>
        </>
        )
        :
            null
        }
    </div>
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