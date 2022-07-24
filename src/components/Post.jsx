import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className="avatar" src="https://i.ibb.co/k32Vkd6/man1.jpg" />
          <div className={styles.authorInfo}>
            <strong>Andy Jenkins</strong>
            <span>Expert Roaster</span>
          </div>
        </div>
        <time title="23 July 2022 at 13:47" dateTime="2022-07-23 13:47:32">
          Published at 13:47
        </time>
      </header>
      <div className={styles.content}>
        <p>Hey everyone ☕️</p>
        <p>
          I just wanted to let you know that Coffika over at Meadowhall has the
          best brew I’ve tried in a while! Kudos to them, absolutely not bad for
          £2.40!
        </p>
        <p>
          <a href="https://www.coffika.com">Check their website out!</a>
        </p>
        <p>
          <a href="#">#brew</a>
          <a href="#">#freshlyroasted</a>
        </p>
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
