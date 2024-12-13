import { useState } from "react";

export default function Main() {
  const [addIngredient, setAddIngredient] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");

    setAddIngredient((ingredient) => [...ingredient, newIngredient]);
  }

  const ingredients = addIngredient.map((ingredient) => (
    <li key={ingredient}>- {ingredient}</li>
  ));

  return (
    <main className="px-5 sm:px-10 min-h-[calc(100dvh_-_60px)] bg-slate-50">
      <div className="container mx-auto py-8">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            name="ingredient"
            placeholder="Ex: Aveia"
            className="px-4 py-1 w-full rounded-s-lg border-2 border-gray-600 bg-white"
          />
          <button className="btn--gray rounded-e-lg min-w-fit">
            + Adicionar
          </button>
        </form>
        <ul className="mt-5 px-5">{ingredients}</ul>
      </div>
    </main>
  );
}
