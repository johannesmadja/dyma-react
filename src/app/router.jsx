import { createBrowserRouter, redirect } from "react-router";
import App from "./App";
import { lazy } from "react";
import { getRecipe } from "../features/recipes/services/RecipeService";

const HomePage = lazy(() => import("../features/recipes/pages/RecipesPage"));
const Admin = lazy(() => import("../features/admin/pages/Admin"));
const AdminRecipe = lazy(
  () => import("../features/admin/pages/AdminRecipe/AdminRecipe"),
);
const AdminUsers = lazy(
  () => import("../features/admin/pages/AdminUsers/AdminUsers"),
);
const AdminRecipeList = lazy(
  () =>
    import("../features/admin/pages/AdminRecipe/AdminRecipeList/AdminRecipeList"),
);
const AdminRecipeForm = lazy(
  () =>
    import("../features/admin/pages/AdminRecipe/AdminRecipeForm/AdminRecipeForm"),
);

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/admin",
        Component: Admin,
        children: [
          {
            path: "recipes",
            Component: AdminRecipe,
            children: [
              {
                path: "list",
                Component: AdminRecipeList,
              },
              {
                path: "add",
                Component: AdminRecipeForm,
              },
              {
                path: "edit/:recipeId",
                loader : async ({params : {recipeId}}) => getRecipe(recipeId),
                Component: AdminRecipeForm,
              },
              {
                index: true,
                loader: async () => redirect("/admin/recipes/list"),
              },
            ],
          },
          {
            path: "users",
            Component: AdminUsers,
          },
          {
            index: true,
            loader: async () => redirect("/admin/recipes"),
          },
        ],
      },
    ],
  },
]);
