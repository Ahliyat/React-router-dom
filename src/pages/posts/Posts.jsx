import { Link, NavLink, useParams } from "react-router-dom";
import styles from "./posts.module.css";
// import Post from "../Post/Post";

const postsData = [
  {
    id: 1,
    title: "post title one",
    postDesc: "This is post one",
  },
  {
    id: 2,
    title: "post title two",
    postDesc: "This is post two",
  },
  {
    id: 3,
    title: "post title three",
    postDesc: "This is post three",
  },
  {
    id: 4,
    title: "post title four",
    postDesc: "This is post four",
  },
];

const Posts = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "3rem",
        }}
      >
        <div>
          {postsData.map((item) => (
            <div key={item.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : ""
                }
                to={`/posts/${item.id}`}
              >
                <h3>{item.title}</h3>
              </NavLink>
            </div>
          ))}
        </div>
        <div>
          <span>Post</span>
          <span>{params.postId}</span>
        </div>
      </div>
      <Link to="/">Homepage</Link>
    </>
  );
};
export default Posts;
