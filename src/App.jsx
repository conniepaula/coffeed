import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      name: "Joanna Richardson",
      title: "Coffee Lover",
      avatarURL: "https://i.ibb.co/KrhNshn/woman1.jpg",
    },
    postContent: [
      {
        id: 1,
        type: "paragraph",
        content:
          "I just wanted to let you know that Coffika over at Meadowhall has the best brew I’ve tried in a while! Kudos to them, absolutely not bad for £2.40!",
      },
      { type: "paragraph", content: "Check their website out!" },
      { type: "link", content: "https://www.coffika.co.uk" },
    ],
    publishedAt: new Date("2022-07-23 13:47:32"),
  },
  {
    id: 2,
    author: {
      name: "Kiera Scott",
      title: "Iced Coffee Aficionado",
      avatarURL: "https://i.ibb.co/JjVHHcF/Screenshot-2022-07-25-at-13-44-11.png",
    },
    postContent: [
            {
              id: 2,
              type: "paragraph",
              content:
                "I just came back from Italy and oh my days! How come the quality of the coffee in this country does not compare??",
            },{
              type: "paragraph", content: "This is  a test."
            }
          ],
    publishedAt: new Date("2022-07-23 13:47:32"),
  },
];


export default function App() {
  return (
    <div>
      <Header />  
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {return <Post
            key={post.id}
            author={post.author}
            postContent={post.postContent}
            publishedAt={post.publishedAt}
          />})}
        </main>
      </div>
    </div>
  );
};
