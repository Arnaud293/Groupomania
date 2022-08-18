import React, { useContext, useEffect, useState } from 'react'
import { UidContext } from '../AppContext';

// SRC
import EditIcon from '../../src/icons/edit.svg';
import DeleteIcon from '../../src/icons/trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/post.actions';

const EditDeleteComment = ({comment, postId}) => {

  const [isAuthor, setIsAuthor] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState('');
  const uid = useContext(UidContext);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const handleEdit = (e) => {
    e.preventDefault();

    if(text){
        dispatch(editComment(postId, comment._id, text));
        setText('');
        setEdit(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteComment(postId, comment._id));
    
  };

  useEffect(() => {
    const checkAuthor = () => {
        if(uid === comment.commenterId){
            setIsAuthor(true);
        }
    }
    checkAuthor();
  }, [uid, comment.commenterId])


  return (
    <div className='edit-comment'>
        {isAuthor && edit === false && userData.admin === false && (
        <img onClick={() => setEdit(!edit)} class="edit-comment-img" src={EditIcon} alt="edit-comment-icon"/>)}
        {userData.admin === true && edit === false && (
        <img onClick={() => setEdit(!edit)} class="edit-comment-img" src={EditIcon} alt="edit-comment-icon"/>)}
        {isAuthor && edit && userData.admin === false && (
            <>
            <div className="edit-comment-container">
                <textarea className="edit-comment-input" placeholder="Nouveau texte"
                 onChange={(e) => setText(e.target.value)}
                 defaultValue={comment.text}
                 />
            </div>
            <div className="edit-comment-validation">
                <img className='edit-comment-validation-trash' src={DeleteIcon} alt="trash-icon" onClick={()=>{
                    if (window.confirm("Supprimer le commentaire ?")){
                        handleDelete();
                    }
                }}/>
                <input type="button" class="validation-btn" value="Valider" onClick={handleEdit}/>
            </div>
            </>
        )}
        {userData.admin === true && edit && (
            <>
            <div className="edit-comment-container">
                <textarea className="edit-comment-input" placeholder="Nouveau texte"
                 onChange={(e) => setText(e.target.value)}
                 defaultValue={comment.text}
                 />
            </div>
            <div className="edit-comment-validation">
                <img className='edit-comment-validation-trash' src={DeleteIcon} alt="trash-icon" onClick={()=>{
                    if (window.confirm("Supprimer le commentaire ?")){
                        handleDelete();
                    }
                }}/>
                <input type="button" class="validation-btn" value="Valider" onClick={handleEdit}/>
            </div>
            </>
        )}
    </div>
  )
}

export default EditDeleteComment