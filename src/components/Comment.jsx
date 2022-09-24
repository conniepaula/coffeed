import { ThumbsUp, Trash } from "phosphor-react";
import React, { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {
    console.log("delete");
    onDeleteComment(content);
  }
  function handleLikeCount() {
    setLikeCount(likeCount + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar src="https://i.ibb.co/k32Vkd6/man1.jpg" hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorTime}>
              <strong>Jared McFarlan</strong>
              <time
                title="23 July 2022 at 17:22"
                dateTime="2022-07-23 17:22:14"
              >
                17:22
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Delete Comment">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp size={20} />
            Thumbs Up <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
