/* eslint-disable react/prop-types */
import ReactMarkdown from "react-markdown";

export default function Recipe({ recipe }) {
  return (
    <section className="px-5 sm:px-10 py-10">
      {recipe && <h2>Chef Virtual recomendou:</h2>}
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}
