import NewPost from "../routes/NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();

  return (
    <ul className={styles.posts}>
      {posts.length > 0 &&
        posts.map((element) => (
          <Post
            key={Math.random().toString()}
            name={element.name}
            body={element.body}
            id={element.id}
          />
        ))}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
        </div>
      )}
    </ul>
  );
}

export default PostList;
