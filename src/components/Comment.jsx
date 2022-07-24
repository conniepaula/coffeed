import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() { 
  return (
    <div className={styles.comment}>
      <Avatar src="https://i.ibb.co/k32Vkd6/man1.jpg" hasBorder={false}/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorTime}>
              <strong>Mary Hornsby</strong>
              <time
                title="23 July 2022 at 17:22"
                dateTime="2022-07-23 17:22:14"
              >
                17:22
              </time>
            </div>
            <button title="Delete Comment">
              <Trash size={20} />
            </button>
          </header>
          <p>That's true, Andy! Always have Coffika on my lunch break.</p>
        </div>
        <footer>
        <button>
          <ThumbsUp size={20} />
          Thumbs Up <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
