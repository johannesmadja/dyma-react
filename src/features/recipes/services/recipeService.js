import { apiFetch } from "@/services/api";

// Get recipes (paginated when pageIndex and pageSize are provided)
export async function getRecipes(pageIndex, pageSize) {
  let url = "/recipes";

  if (pageIndex && pageSize) {
    const queryParams = new URLSearchParams();
    queryParams.append("skip", (pageIndex - 1) * pageSize);
    queryParams.append("limit", pageSize);
    queryParams.append("sort", "createdAt:-1");

    url = `/recipes?${queryParams}`;
  }

  const data = await apiFetch(url);
  return Array.isArray(data) ? data : [data];
}

// Get recipe by id
export async function getRecipe(id) {
  return apiFetch(`/recipes/${id}`);
}

// Create new recipe(s)
export async function createRecipe(recipe) {
  return apiFetch("/recipes", {
    method: "POST",
    body: JSON.stringify(recipe),
  });
}

// Update recipe (only the provided fields are sent)
export async function updateRecipe(recipe) {
  const { _id, ...restRecipe } = recipe;
  return apiFetch(`/recipes/${_id}`, {
    method: "PATCH",
    body: JSON.stringify(restRecipe),
  });
}

// Delete recipe
export async function deleteRecipe(id) {
  return apiFetch(`/recipes/${id}`, {
    method: "DELETE",
  });
}
