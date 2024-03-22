import React from "react";
import "./PostView.css";

const PostView = ({ title, content, author, publishedDate, updatedDate }) => {
  function formatDateString(dateString) {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "UTC",
    };
    return date.toLocaleString("en-US", options);
  }

  const formattedDate = formatDateString("2024-03-21T12:15:56.348Z");
  console.log(formattedDate);

  return (
    <div className="post-view">
      <h1 className="post-title">{title}</h1>
      <div className="post-meta">
        <span>
          Author:<span className="highlight"> {author} </span>
        </span>
        <span>
          Published at:
          <span className="highlight"> {formatDateString(publishedDate)} </span>
        </span>
        <span>
          Updated at:
          <span className="highlight"> {formatDateString(updatedDate)} </span>
        </span>
      </div>
      <article className="post-content"> {content} </article>

      <h2>Comments:</h2>
    </div>
  );
};

export default PostView;
