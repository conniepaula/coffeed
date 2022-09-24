import { useState } from "react";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, postContent }) {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  const [comments, setComments] = useState([]);

  const [newCommentText, setNewCommentText] = useState("");

  const isCommentBoxEmpty = newCommentText.length === 0;

  function handleSubmitComment() {
    event.preventDefault();
    const newCommentText = event.target.comment.value;
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleInvalidComment() {
    event.target.setCustomValidity("Please enter a comment before submitting.");
  }

  function deleteComment(deletedComment) {
    const newCommentList = comments.filter((comment) => {
      return comment !== deletedComment;
    });
    setComments(newCommentList);
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className="avatar" src={author.avatarURL} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.title}</span>
          </div>
        </div>
        <time title="23 July 2022 at 13:47" dateTime="2022-07-23 13:47:32">
          {formattedDate}
        </time>
      </header>
      <div className={styles.content}>
        {postContent.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={item.content}>
                <a href={item.content}>{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleSubmitComment} className={styles.commentForm}>
        <strong> Share Your Thoughts</strong>
        <textarea
          required
          onInvalid={handleInvalidComment}
          name="comment"
          placeholder="Leave a Comment..."
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit" disabled={isCommentBoxEmpty}>
            Post
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
