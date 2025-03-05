

import '../App.css';
import {useEffect, useState} from 'react';
import { getBoards } from '../api/boardApi';
import { useNavigate, useParams } from 'react-router-dom';

function BoardDetail(){
const navigate = useNavigate();
const [board, setBoard] = useState();
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

useEffect(()=>{
   const findIndexBoard = getBoards.findIndex((board)=>board.id === Number(id));

   setBoard(getBoards[findIndexBoard]);

},[]);


function commentSave(){
   
 
    const newComment = {content:comment, nickname:"하하호호호"};
     if(!board.comment){
        board.comment =[];
         }
         board.comment.push(newComment);
       const copyBoard = {...board};
       const copyComment = [...board.comment];
       copyBoard.comment = copyComment;
    setBoard(copyBoard);     
    setComment("");
    
 }

return (

<>


<div className ='board-detail'>

    {board ?
            <>
            
                <div className='board-title'>{board.title}</div>
                <div className='board-contents'>{board.description}</div>
          
            </>
    : 
           null

    }


{/* getBoards에 저장된 댓글들이 불러져와야함->1. getBoards에서 comment 가 있는 댓글들을 모두 불러옴.
 comment 가 있다면? 모두불러움  모가 잘못된건지모르겠음음 */}
 {/* 반복되어서 들어가게 어떻게 하지 */}

<div className='comment'>
    <div className='comment-view'>
        
        { board && board.comment && board.comment.length > 0 ? board.comment.map((comment)=>
        <div style={{marginTop: 30}}>
            <div  className = 'comment-info' style={{ marginBottom:'10px' }}>
                <div style={{ marginRight:'10px', color:'rgb(72, 72, 72)'}}><strong>{comment.writer}</strong></div>
                <div style={{ fontSize:'13px'}}>2025-03-05</div>
            </div>
            <div>{comment.content}</div>
        </div>
        )
        :
            null
        }
    </div>
    <div className='comment-input'>
        <input
            type="text"
            placeholder='댓글을 입력해주세요.'
            onChange={changeComment}
            value={comment}
            />
        <button onClick={commentSave}>등록</button>
    </div>
   
<br/>

</div>

<div className ='btns'>
    <button onClick={editSave}>수정</button>
    <button onClick={()=>navigate("/boards")}>목록으로 가기</button>
</div>


</div>



</>
)



} 

export default BoardDetail;