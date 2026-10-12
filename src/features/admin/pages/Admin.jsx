import { Outlet } from "react-router";
import AdminNav from "../components/AdminNav";
import { Suspense } from "react";

function Admin() {
  return (
    <div className="d-flex flex-fill p-20">
      <AdminNav />
      <div className="d-flex flex-column flex-fill">
        <Suspense fallback={<h2> Chargment ...</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default Admin;
