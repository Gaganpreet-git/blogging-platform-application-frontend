import React from "react";
import "./PostPreview.css";
import { ReactComponent as DeleteIcon } from "../../delete-icon.svg";
import { ReactComponent as EditIcon } from "../../edit-icon.svg";
import axios from "axios";

const PostPreview = ({
  title,
  onDelete,
  publishedDate,
  updatedDate,
  onEdit,
}) => {
  return (
    <div className="post-preview">
      <h3>{title}</h3>
      <div className="post-preview_actions">
        <div>
          <span>published at:{publishedDate}</span>
          <span>Updated at:{updatedDate}</span>
        </div>
        <div>
          <span>
            <EditIcon onClick={onEdit}></EditIcon>
          </span>
          <span>
            <DeleteIcon onClick={onDelete}></DeleteIcon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
