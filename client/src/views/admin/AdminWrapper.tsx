import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

type Props = {};
//a wrapper that will redirect away from our admin routes back to home if user does not have the correct privileges
const AdminWrapper = (props: Props) => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.user, "current user in admin wrapper");
  if (!(currentUser.user?.privileges === "admin")) return <Navigate to="/" />;

  return (
    <div style={{ height: "calc(100vh - 3rem)" }} className="overflow-y-scroll">
      <Outlet />
    </div>
  );
};

export default AdminWrapper;
