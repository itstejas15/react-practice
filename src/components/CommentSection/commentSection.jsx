import React, { useRef, useState, useEffect } from 'react';
import './CommentSection.css';    // comment this if you want to hide scrollbar

const CommentSection = () => {
  const [textInput, setTextInput] = useState('');
  const [commentData, setCommentData] = useState(() => {
    const saveddata = localStorage.getItem('commentData')
    return saveddata ? JSON.parse(saveddata) : []
  });
  const initialReplyInfo = { isReply: false, id: '' };
  const [replyInfo, setReplyInfo] = useState(initialReplyInfo);
  const refTextArea = useRef();
  const refSubmitButton = useRef();

  const handleSubmit = () => {
    if (replyInfo.isReply) {
      const updatedComments = commentData.map((c) =>
        c.id === replyInfo.id ? { ...c, replies: [...c.replies, textInput] } : c
      );

      setCommentData(updatedComments);
      setReplyInfo(initialReplyInfo);
    } else {
      const obj = {
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        comment: textInput,
        likes: 0,
        replies: []
      };
      setCommentData([...commentData, obj]);
    }
    setTextInput('');
  };

  useEffect(() => {
    localStorage.setItem('commentData', JSON.stringify(commentData))
  }, [commentData])

  const handleLike = (id) => {
    const updatedComments = commentData.map((c) =>
      c.id === id ? { ...c, likes: c.likes === 1 ? 0 : 1 } : c
    );

    setCommentData(updatedComments);
  };

  const handleDislike = (id) => {
    const updatedComments = commentData.map((c) =>
      c.id === id ? { ...c, likes: c.likes === -1 ? 0 : -1 } : c
    );

    setCommentData(updatedComments);
  };

  const handleReply = (id) => {
    setReplyInfo({ isReply: true, id: id });
    refTextArea.current.focus();
  };

  const handleDelete = (id) => {
    const updatedComments = commentData.filter((c) => c.id !== id);
    setCommentData(updatedComments);
  };

  const handleClickOutside = (event) => {
    if (
      refTextArea.current &&
      !refTextArea.current.contains(event.target) &&
      refSubmitButton.current &&
      !refSubmitButton.current.contains(event.target)
    ) {
      setReplyInfo(initialReplyInfo);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Comment Section</h1>
      {commentData.length > 0 && (
        <div style={{ overflowY: 'scroll', height: '70vh', width: '105vh' }}>
          <ol type='1'>
            {commentData.map((comment) => (
              <li key={comment.id}>
                {comment.comment}&nbsp;
                <button onClick={() => handleLike(comment.id)} style={{ color: comment.likes === 1 ? 'blue' : 'black' }}>Like</button>
                <button onClick={() => handleDislike(comment.id)} style={{ color: comment.likes === -1 ? 'red' : 'black' }}>Dislike</button>
                <button onClick={() => handleReply(comment.id)}>Reply</button>
                <button onClick={() => handleDelete(comment.id)}>Delete</button>
                <div>Count of likes: {comment.likes}, Total replies: {comment.replies.length}</div>
                <ul>
                  {comment.replies.map((reply, index) => (
                    <li key={index}>{reply}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      )}
      <div style={{ display: 'flex', position: 'absolute', bottom: 30, justifyContent: 'left', alignItems: 'center' }}>
        <textarea
          ref={refTextArea}
          style={{ width: '50vw' }}
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        ></textarea>
        <button
          type='submit'
          onClick={handleSubmit}
          style={{ height: '3em' }}
          ref={refSubmitButton}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default CommentSection;
