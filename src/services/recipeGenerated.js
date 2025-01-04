export async function generateRecipe(allIngredients) {
  const token = import.meta.env.VITE_HUGGING_FACE;
  const modelId = "mistralai/Mistral-7B-Instruct-v0.3";

  const prompt = `Você é um assistente culinário que recebe uma lista de ingredientes que um usuário tem e sugere uma receita que ele pode fazer com alguns ou todos esses ingredientes. Você não precisa usar todos os ingredientes que eles mencionam na sua receita. A receita pode incluir ingredientes adicionais que são acessíveis a todos. Esses são os ingredientes: ${allIngredients}. Mostre a receita, os ingredientes necessários e como fazer essa receita. Mostre em forma de lista`;

  const response = await fetch(
    `https://api-inference.huggingface.co/models/${modelId}`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      stop: null,
      body: JSON.stringify({ inputs: prompt }),
    }
  );

  if (!response.ok) {
    console.error("Erro na API Hugging Face:", await response.text());
    return;
  }

  const result = await response.json();
  let index = result[0].generated_text.indexOf("\n");
  let answer = result[0].generated_text.slice(index);

  return answer;
}
