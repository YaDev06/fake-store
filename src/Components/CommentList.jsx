import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setComments } from "../redux/slices/commentSlice";

const CommentList = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/comments/")
      .then((res) => dispatch(setComments(res.data)));
  }, []);

  const comments = useSelector((state) => state.commentSlice.comments);

  return (
    <div className="content container">
      <button
        onClick={goBack}
        className="goBack btn btn-danger"
      >{`<-- Go Back`}</button>

      <div>
        {comments.length ? (
          comments.map((comment) => (
            <div className="comments my-3">
              <h4 className="text-center my-3">Comments</h4>
              <h5>
                {comment.name}'s comment on {comment.product}
              </h5>
              <i> - {comment.comment}</i>
            </div>
          ))
        ) : (
          <h5 className="text-center mt-5">No comments</h5>
        )}
      </div>
    </div>
  );
};

export default CommentList;
