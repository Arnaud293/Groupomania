import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/post.actions';


// SRC
import DeleteIcon from '../../src/icons/trash.svg';


const DeleteCard = (props) => {


 const dispatch = useDispatch();   

 const deleteQuote = () => {
    dispatch(deletePost(props.id))
 };

  return (
    <div onClick={() => {
        if (window.confirm('Supprimez votre post ?')){
            deleteQuote();
        }
    }}>
        <img src={DeleteIcon} alt='trash-icon'/>
    </div>
  )
}

export default DeleteCard