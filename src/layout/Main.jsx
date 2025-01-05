import { useState } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { generateRecipe } from "@/services/recipeGenerated";
import Recipe from "../layout/Recipe";

export default function Main() {
  const [addIngredient, setAddIngredient] = useState([]);
  const [recipe, setRecipe] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newIngredient = formData.get("ingredient");
    setAddIngredient((ingredient) => [...ingredient, newIngredient]);
    e.target.reset()
  }
  
  const ingredients = addIngredient.map((ingredient) => (
    <p key={ingredient}>- {ingredient}</p>
  ));

  async function getRecipe() {
    const GENERATED_RECIPE = await generateRecipe(ingredients);
    setRecipe(GENERATED_RECIPE);
  }

  return (
    <main className="px-5 sm:px-10 min-h-[calc(100dvh_-_60px)] bg-slate-50">
      <div className="container mx-auto py-8">
        <form onSubmit={handleSubmit} className="flex">
          <Input
            type="text"
            name="ingredient"
            placeholder="Ex: Aveia"
            required
          />
          <button className="btn--gray rounded-e-lg min-w-fit">
            + Adicionar
          </button>
        </form>
        {ingredients.length > 0 && (
          <h3 className="mt-10 text-3xl font-semibold">Ingredientes:</h3>
        )}
        <ul className="px-5">
          {<li className="mt-4 mb-10 text-lg">{ingredients}</li>}
        </ul>

        <section className="flex justify-between items-center gap-5 md:gap-10 px-6 py-3 rounded-lg bg-gray-200">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Pronto para uma receita?</h3>
            <p>Através dos ingredientes é gerado uma receita</p>
          </div>

          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={getRecipe}
                  disabled={ingredients.length > 2 ? false : true}
                  className={`${
                    ingredients.length > 2
                      ? "bg-orange-500 border-orange-500 hover:text-orange-500 font-semibold hover:bg-transparent"
                      : "bg-orange-300 border-orange-300"
                  } px-4 py-2 rounded-lg text-white border-2 duration-300`}
                >
                  Gerar Receita
                </button>
              </TooltipTrigger>
              <TooltipContent
                className={ingredients.length > 2 ? "hidden" : null}
              >
                <p>Adicione no mínimo 3 ingredientes</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </section>
        <Recipe recipe={recipe} />
      </div>
    </main>
  );
}
