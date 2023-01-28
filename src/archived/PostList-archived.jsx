import NewPost from "../routes/NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPostData] = useState([]);

  const [isFetching, SetIsFetching] = useState(false);

  useEffect(() => {
    async function getData() {
      SetIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      if (!response.ok) {
        throw console.error();
      }
      let data = await response.json();
      SetIsFetching(false);
      setPostData(data.posts);
    }
    getData();
  }, []);

  return (
    <ul className={styles.posts}>
      {!isFetching &&
        posts.length > 0 &&
        posts.map((element) => (
          <Post
            key={Math.random().toString()}
            name={element.name}
            body={element.body}
          />
        ))}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
        </div>
      )}
      {isFetching && (
        <div>
          <h2 style={{ textAlign: "center", color: "white" }}>
            Now Fetching Data
          </h2>
        </div>
      )}
    </ul>
  );
}

export default PostList;
