import { apiFetch } from "../../../services/api";

// Get paginate recipes
export async function getAllDatas(pageIndex, pageSize) {
  const skip = (pageIndex - 1) * pageSize;

  const data = await apiFetch(`/recipes?skip=${skip}&limit=${pageSize}`);

  return Array.isArray(data) ? data : [data];
}

// Get recipe by id
export async function getRecipe(id) {
  return apiFetch(`/recipes/${id}`);
}


// Create new recipe
export async function createRecipe(recipe) {
  return apiFetch("/recipes", {
    method: "POST",
    body: JSON.stringify(recipe),
  });
}


// Delete recipe
export async function deleteRecipe(id) {
  return apiFetch(`/recipes/${id}`, {
    method: "DELETE",
  });
}
