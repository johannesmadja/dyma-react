import { apiFetch } from "../../../services/api";

// Get paginate recipes
export async function getAllDatas(pageIndex, pageSize) {
  const queryParams = new URLSearchParams();
  queryParams.append("skip", (pageIndex - 1) * pageSize);
  queryParams.append("limit", pageSize);
  queryParams.append("sort", "createdAt:-1");

  const data = await apiFetch(`/recipes?${queryParams}`);
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
