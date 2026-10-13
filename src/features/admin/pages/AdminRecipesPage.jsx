import { Outlet } from "react-router";
import AdminRecipesNav from "../components/AdminRecipesNav";

function AdminRecipesPage() {
  return (
    <div className="d-flex flex-column flex-fill">
      <h4 className="mb-20">Gestion des recettes</h4>
      <div className="flex-fill d-flex flex-column">
        <AdminRecipesNav />
        <div className="flex-fill d-flex flex-column">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminRecipesPage;
