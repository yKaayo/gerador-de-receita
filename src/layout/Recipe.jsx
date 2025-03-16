/* eslint-disable react/prop-types */
import ReactMarkdown from "react-markdown";
import { forwardRef } from "react";

const Recipe = forwardRef(({ recipe }, ref) => {
  return (
    <section ref={ref} className="px-5 sm:px-10 py-10" aria-live="polite">
      {recipe && <h2>Chef Virtual recomendou:</h2>}
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
});

export default Recipe;
