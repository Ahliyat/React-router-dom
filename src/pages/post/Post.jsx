import { Link } from "react-router-dom";

const Post = (item) => {
  const { title, postDesc } = item;
  return (
    <div>
      {/* <h2>This is Post page</h2> */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        {title}
        {postDesc}
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <Link to="/posts">All posts</Link>
        <Link to="/">Homepage</Link>
      </div>
    </div>
  );
};
export default Post;
