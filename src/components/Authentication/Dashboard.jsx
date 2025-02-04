import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Logout from "./Logout";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome, {user.email}!</h2>
      <Logout />
    </div>
  );
};

export default Dashboard;
