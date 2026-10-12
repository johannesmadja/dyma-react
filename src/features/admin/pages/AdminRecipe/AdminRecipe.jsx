import { Outlet } from "react-router";

function AdminRecipe() {
  return (
    <>
      <h2> Admin Recipe</h2>
      <Outlet />
    </>
  );
}

export default AdminRecipe;
