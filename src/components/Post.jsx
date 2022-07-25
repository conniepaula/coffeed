import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, postContent }) {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);
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
        {postContent.map(item => {
          if (item.type === "paragraph") {
            return <p>{item.content}</p>;
          }
          else if (item.type  === "link") {
            return <p><a href={item.content}>{item.content}</a></p>;
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong> Share Your Thoughts</strong>
        <textarea placeholder="Leave a Comment..." />
        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
