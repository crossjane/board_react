

import { getBoards } from '../api/boardApi';
import '../App.css';

function Write(){

// 상태 안쓰고 DB는 상태쓰는거아님. 

return(

<>
<div className ='board-detail'>

     
    <div className='board-title'>
        <input
            type='text'
            placeholder="제목을 입력해주세요."
        />
         
    </div>
    <div className='board-contents'>
        <input
            type="text"
            placeholder='내용을 입력해주세요.'
        />
    </div>
        
      

</div>
</>

)



} 

export default Write;