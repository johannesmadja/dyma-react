import { recipes } from "./recipes";

export async function seeds() {
  await fetch("https://restapi.fr/api/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipes),
  });
}
