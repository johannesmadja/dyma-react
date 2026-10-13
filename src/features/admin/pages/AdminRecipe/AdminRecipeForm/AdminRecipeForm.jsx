import styles from "./AdminRecipeForm.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  createRecipe,
  upadateRecipes,
} from "../../../../recipes/services/RecipeService";
import * as yup from "yup";
import { useLoaderData, useNavigate } from "react-router";

function AdminRecipeForm() {
  const recipe = useLoaderData();
  const navigate = useNavigate();

  const defaultValues = {
    title: recipe ? recipe.title : "",
    image: recipe ? recipe.image : "",
  };

  const recipeSchema = yup.object({
    title: yup
      .string()
      .required("Le titre la de la recette est obligatoire")
      .min(10, "Le titre est trop court")
      .max(30, "Le titre est trop long"),
    image: yup.string().required("L'image est obligatoire").url(),
  });

  const {
    handleSubmit,
    register,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues, resolver: yupResolver(recipeSchema) });

  async function submit(values) {
    try {
      if (recipe) {
        await upadateRecipes({ ...values, _id: recipe._id });
        navigate("/admin/recipes/list");
      } else {
        clearErrors();
        await createRecipe(values);
        reset();
      }
    } catch (e) {
      setError("generic", {
        type: "generic",
        message: `Une erreur est survenue ${e}`,
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={`d-flex flex-column card p-20 ${styles.recipeForm}`}
    >
      <h2 className="mb-20">Ajouter une recette</h2>

      <div className="d-flex flex-column mb-20">
        <label className="mb-10" htmlFor="title">
          Titre de la recette
        </label>
        <input {...register("title")} type="text" id="title" />
        {errors.title && <p className="form-error">{errors.title.message}</p>}
      </div>

      <div className="d-flex flex-column mb-20">
        <label className="mb-10" htmlFor="image">
          Image pour la recette
        </label>
        <input {...register("image")} type="text" id="image" />
        {errors.image && <p className="form-error">{errors.image.message}</p>}
      </div>

      {errors.generic && <p>{errors.generic.message}</p>}
      <div>
        <button disabled={isSubmitting} className="btn btn-primary">
          Sauvegarder
        </button>
      </div>
    </form>
  );
}

export default AdminRecipeForm;
