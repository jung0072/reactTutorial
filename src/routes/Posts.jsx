import { Outlet } from "react-router-dom";
import PostList from "../component/PostList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  let data = await response.json();
  return data.posts;
}
