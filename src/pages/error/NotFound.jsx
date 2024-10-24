import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>The page you are requesting is not found</h1>
      <Link to="/">Go back</Link>
    </div>
  );
};
export default NotFound;
