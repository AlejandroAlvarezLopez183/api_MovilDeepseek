import OpenAI from "openai"

const openai = new OpenAI({
apiKey: "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",
baseURL:"https://openrouter.ai/api/v1",
});

async function obtenerRespuesta() {
    try{
        const chat = await openai.chat.completions.create({
            model: "deepseek/deepseek-prover-v2:free",
            messages:[{role: "user", content:"¿que es el mar muerto"}],
        });

        console.log(chat.choices[0].message.content);

    }catch(error)
    {
        console.log("error en la solicitud",error);
    }
}
obtenerRespuesta();
