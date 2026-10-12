import { Outlet } from "react-router";
import AdminNav from "../components/AdminNav";

function Admin() {
  return (
    <div className="d-flex flex-fill p-20 align-items-center">
      <AdminNav />
      <Outlet />
    </div>
  );
}

export default Admin;
