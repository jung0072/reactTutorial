import { Link } from "react-router-dom";
import styles from "./Post.module.css";

function Post(props) {
  return (
    <div className={styles.post}>
      <Link to={props.id}>
        <h2 className={styles.name}>{props.name}</h2>
        <p className={styles.body}>{props.body}</p>
      </Link>
    </div>
  );
}

export default Post;
